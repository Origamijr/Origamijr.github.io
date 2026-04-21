#!/usr/bin/env python3
"""
Generate projects metadata from markdown files.
Run this script whenever you add/update projects.
Output: assets/markdown/projects/projects-metadata.json
"""

import os
import json
import re
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

def generate_projects_metadata():
    """Generate metadata for all projects."""
    projects_dir = Path('assets/markdown/projects')
    if not projects_dir.exists():
        print(f"Projects directory not found: {projects_dir}")
        return
    
    projects = []
    for md_file in sorted(projects_dir.glob('*.md')):
        with open(md_file, 'r') as f:
            content = f.read()
        
        frontmatter = parse_frontmatter(content)
        if not frontmatter:
            continue
        
        project_meta = {
            'filename': md_file.name,
            'topic': frontmatter.get('topic', ''),
            'status': frontmatter.get('status', ''),
            'purpose': frontmatter.get('purpose', ''),
            'collaborators': frontmatter.get('collaborators', ''),
            'languages': frontmatter.get('languages', ''),
            'technologies': frontmatter.get('technologies', ''),
            'other': frontmatter.get('other', []) if isinstance(frontmatter.get('other'), list) else [frontmatter.get('other', '')],
            'date': frontmatter.get('date', ''),
            'feature': int(frontmatter.get('feature', 0)) if frontmatter.get('feature') and str(frontmatter.get('feature')).isdigit() else (1 if frontmatter.get('feature') else 0)
        }
        projects.append(project_meta)
    
    # Write metadata
    metadata = {
        'projects': projects,
    }
    
    output_file = projects_dir / 'projects-metadata.json'
    with open(output_file, 'w') as f:
        json.dump(metadata, f, indent=2)
    
    print(f"Generated metadata for {len(projects)} projects")
    print(f"Saved to: {output_file}")

if __name__ == '__main__':
    generate_projects_metadata()
