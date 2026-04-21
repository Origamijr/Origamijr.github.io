#!/usr/bin/env python3
"""
Generate blog metadata from markdown files.
Run this script whenever you add/update blog posts.
Output: assets/markdown/blog/blog-metadata.json
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

def get_preview(content, max_words=50):
    """Extract first few lines for preview."""
    # Remove frontmatter
    content = re.sub(r'^---\n[\s\S]*?\n---\n', '', content)
    # Remove markdown headings and get text
    lines = [line.strip() for line in content.split('\n') if line.strip() and not line.startswith('#')]
    # Join lines and truncate to word count
    text = ' '.join(lines)
    words = text.split()[:max_words]
    return ' '.join(words) + ('...' if len(text.split()) > max_words else '')

def generate_blog_metadata():
    """Generate metadata for all blog posts."""
    blog_dir = Path('assets/markdown/blog')
    if not blog_dir.exists():
        print(f"Blog directory not found: {blog_dir}")
        return
    
    posts = []
    for md_file in sorted(blog_dir.glob('*.md')):
        with open(md_file, 'r') as f:
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
            'tags': frontmatter.get('tags', []) if isinstance(frontmatter.get('tags'), list) else [frontmatter.get('tags', '')],
            'preview': get_preview(content)
        }
        posts.append(post_meta)
    
    # Sort by date, newest first
    posts.sort(key=lambda x: x['date'], reverse=True)
    
    # Write metadata
    metadata = {
        'posts': posts,
        'generated': datetime.now().isoformat()
    }
    
    output_file = blog_dir / 'blog-metadata.json'
    with open(output_file, 'w') as f:
        json.dump(metadata, f, indent=2)
    
    print(f"Generated metadata for {len(posts)} posts")
    print(f"Saved to: {output_file}")

if __name__ == '__main__':
    generate_blog_metadata()
