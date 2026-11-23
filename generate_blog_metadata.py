#!/usr/bin/env python3
"""
Generate blog metadata from markdown files.
Run this script whenever you add/update blog posts.
Output: assets/markdown/blog/blog-metadata.json

URLs: each post gets a `slug` from its title (or a `slug:` frontmatter override),
served as blog.html?post=<slug>. When a slug changes, the old one is kept in
`aliases` (read back from the previous metadata), so old links still resolve.

Cross-links: in a post, write [text](blog:<filename>) or [text](blog:<filename>#section)
(".md" optional). The page rewrites these to the target's current URL, and this
script records them in each target's `mentioned_by` list.
"""

import os
import json
import re
from datetime import datetime
from pathlib import Path

def parse_frontmatter(content):
    """Extract YAML frontmatter from markdown."""
    match = re.match(r'^---\n([\s\S]*?)\n---', content)
    if not match:
        return {}
    
    frontmatter = {}
    for line in match.group(1).split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip()
            
            # Handle quoted strings - remove outer quotes
            if (value.startswith('"') and value.endswith('"')) or (value.startswith("'") and value.endswith("'")):
                frontmatter[key] = value[1:-1]
            # Handle YAML array syntax [item1, item2]
            elif value.startswith('[') and value.endswith(']'):
                # Remove brackets and split by comma
                array_content = value[1:-1]
                frontmatter[key] = [v.strip() for v in array_content.split(',') if v.strip()]
            # Handle comma-separated values (fallback for non-bracketed lists)
            elif ',' in value:
                frontmatter[key] = [v.strip() for v in value.split(',')]
            else:
                frontmatter[key] = value
    return frontmatter

def get_preview(content, max_words=30):
    """Extract first few lines for preview."""
    # Remove frontmatter
    content = re.sub(r'^---\n[\s\S]*?\n---\n', '', content)
    # Remove markdown headings and get text
    lines = [line.strip() for line in content.split('\n') if line.strip() and not line.startswith('#')]
    # Join lines and truncate to word count
    text = ' '.join(lines)
    words = text.split()[:max_words]
    return ' '.join(words) + ('...' if len(text.split()) > max_words else '')

def slugify(text):
    """Turn a title into a URL slug: '[LD] Opinions on AI' -> 'ld-opinions-on-ai'."""
    text = re.sub(r'[^\w\s-]', '', text.lower())
    return re.sub(r'[\s_-]+', '-', text).strip('-') or 'post'

# Markdown links to other posts by filename: [text](blog:20260528_peda.md#section)
BLOG_LINK_RE = re.compile(r'\]\(\s*blog:([^)#\s]+)')
# Raw HTML links to other posts: <a href="blog:20260528_peda.md">
BLOG_HREF_RE = re.compile(r'''href\s*=\s*["']blog:([^"'#]+)''')

def normalize_blog_ref(ref):
    """'20260528_peda' and '20260528_peda.md' both refer to the same file."""
    ref = ref.strip()
    return ref if ref.endswith('.md') else ref + '.md'

def load_previous_metadata(output_file):
    """Previous metadata, so slugs that changed can be kept as aliases (old URLs keep working)."""
    try:
        with open(output_file, 'r', encoding='utf-8') as f:
            return {p['filename']: p for p in json.load(f).get('posts', [])}
    except (OSError, ValueError):
        return {}

def generate_blog_metadata():
    """Generate metadata for all blog posts."""
    blog_dir = Path('assets/markdown/blog')
    if not blog_dir.exists():
        print(f"Blog directory not found: {blog_dir}")
        return
    
    output_file = blog_dir / 'blog-metadata.json'
    previous = load_previous_metadata(output_file)

    posts = []
    links = {}  # filename -> set of filenames it links to
    for md_file in sorted(blog_dir.glob('*.md')):
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        frontmatter = parse_frontmatter(content)
        if not frontmatter.get('title'):
            continue
        
        # Parse date
        date_str = frontmatter.get('date', '')
        try:
            date_obj = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
            year_month = date_obj.strftime('%Y-%m')
        except:
            date_obj = None
            year_month = None
        
        post_meta = {
            'filename': md_file.name,
            'title': frontmatter.get('title', 'Untitled'),
            'date': date_str,
            'year_month': year_month,
            'update': frontmatter.get('update', ''),
            'tags': frontmatter.get('tags', []) if isinstance(frontmatter.get('tags'), list) else [frontmatter.get('tags', '')],
            'preview': get_preview(content)
        }
        if frontmatter.get('slug'):
            post_meta['slug'] = slugify(frontmatter['slug'])
        posts.append(post_meta)
        links[md_file.name] = {normalize_blog_ref(r) for r in
                               BLOG_LINK_RE.findall(content) + BLOG_HREF_RE.findall(content)}

    # Slugs: from the title (or a `slug:` frontmatter override), de-duplicated by date order
    taken = set()
    for post in sorted(posts, key=lambda p: (p['date'], p['filename'])):
        base = post.get('slug') or slugify(post['title'])
        slug, n = base, 2
        while slug in taken:
            slug, n = f'{base}-{n}', n + 1
        taken.add(slug)
        post['slug'] = slug

    # Aliases: every slug a post has had before, so old URLs redirect to the current one
    for post in posts:
        prev = previous.get(post['filename'], {})
        old = [prev.get('slug')] + prev.get('aliases', [])
        post['aliases'] = sorted({a for a in old if a and a != post['slug'] and a not in taken})

    # Backlinks: which posts link to each post
    filenames = {p['filename'] for p in posts}
    for post in posts:
        post['mentioned_by'] = sorted(src for src, targets in links.items()
                                      if post['filename'] in targets and src != post['filename'] and src in filenames)
    for src, targets in links.items():
        for missing in sorted(targets - filenames):
            print(f"Warning: {src} links to unknown post blog:{missing}")
    
    # Sort by date, newest first (prioritize update date over creation date)
    posts.sort(key=lambda x: x['update'] if x['update'] else x['date'], reverse=True)
    
    # Write metadata
    metadata = {
        'posts': posts,
        'generated': datetime.now().isoformat()
    }
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=2)
    
    print(f"Generated metadata for {len(posts)} posts")
    print(f"Saved to: {output_file}")

if __name__ == '__main__':
    generate_blog_metadata()
