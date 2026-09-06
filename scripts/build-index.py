"""Rebuild the local search index and sitemap using Python's standard library."""
from pathlib import Path
from html.parser import HTMLParser
import json
import re
from xml.etree.ElementTree import Element, SubElement, ElementTree, register_namespace

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://thespiritmask.com/'


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.in_main = False
        self.in_h1 = False
        self.title = []
        self.words = []
        self.description = ''
        self.noindex = False
        self.skip = 0
        self.glossary = []
        self.term = None
        self.in_definition = False
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'main': self.in_main = True
        if tag == 'h1': self.in_h1 = True
        if tag in ('script', 'style'): self.skip += 1
        if tag == 'dt':
            self.term = {'title': [], 'description': [], 'id': attrs.get('id', '')}
            self.glossary.append(self.term)
            self.in_definition = 'title'
        if tag == 'dd': self.in_definition = 'description'
        if tag == 'meta':
            if attrs.get('name') == 'description': self.description = attrs.get('content', '')
            if attrs.get('name') == 'robots': self.noindex = 'noindex' in attrs.get('content', '')

    def handle_endtag(self, tag):
        if tag == 'main': self.in_main = False
        if tag == 'h1': self.in_h1 = False
        if tag in ('script', 'style'): self.skip = max(0, self.skip - 1)
        if tag in ('dt', 'dd'): self.in_definition = False

    def handle_data(self, data):
        if self.skip: return
        if self.in_h1: self.title.append(data)
        if self.in_main: self.words.append(data)
        if self.in_definition and self.term is not None:
            self.term[self.in_definition].append(data)


def clean(parts): return re.sub(r'\s+', ' ', ' '.join(parts)).strip()


entries = []
register_namespace('', 'http://www.sitemaps.org/schemas/sitemap/0.9')
ns = '{http://www.sitemaps.org/schemas/sitemap/0.9}'
sitemap = Element(ns + 'urlset')
for path in sorted(ROOT.rglob('*.html')):
    if any(part.startswith('.') for part in path.relative_to(ROOT).parts): continue
    parsed = Page(path.read_text())
    if parsed.noindex: continue
    relative = path.relative_to(ROOT).as_posix()
    location = '' if relative == 'index.html' else relative
    item = SubElement(sitemap, ns + 'url')
    SubElement(item, ns + 'loc').text = BASE + location
    if relative != 'privacy.html':
        entries.append({'title': clean(parsed.title), 'description': parsed.description,
                        'url': './' + location,
                        'content': ' '.join(sorted(set(re.findall(r"[\w'-]+", clean(parsed.words).lower()))))})
    for term in parsed.glossary:
        if term['id']:
            entries.append({'title': clean(term['title']) + ' — Glossary',
                            'description': clean(term['description']),
                            'url': './' + location + '#' + term['id'], 'content': ''})

(ROOT / 'search-index.json').write_text(json.dumps(entries, ensure_ascii=False, separators=(',', ':')) + '\n')
ElementTree(sitemap).write(ROOT / 'sitemap.xml', encoding='utf-8', xml_declaration=True)
print(f'Created {len(entries)} search entries; sitemap contains {len(sitemap)} URLs.')
