from pathlib import Path
import re

root = Path('.')
public_imgs = []
for p in (root / 'public' / 'assets' / 'images').rglob('*.webp'):
    webp_name = p.name
    stem = p.stem
    # map common original extensions to this webp
    for ext in ['.jpg', '.jpeg', '.png', '.gif', '.bmp']:
        public_imgs.append((stem + ext, stem + '.webp'))
    # also include .webp -> .webp (idempotent)
    public_imgs.append((webp_name, webp_name))
basename_map = dict(public_imgs)

# file extensions to search
exts = ['.js','.jsx','.ts','.tsx','.css','.html']
replacements = []
for fp in root.rglob('*'):
    if fp.suffix.lower() in exts and 'node_modules' not in fp.parts:
        txt = fp.read_text(encoding='utf-8', errors='ignore')
        orig = txt
        for name, webp in basename_map.items():
            # replace exact name occurrences with webp name
            # avoid changing comments? fine for now
            if name in txt:
                txt = txt.replace(name, name.rsplit('.',1)[0]+'.webp')
        if txt != orig:
            fp.write_text(txt, encoding='utf-8')
            replacements.append(str(fp))

print('REPLACED IN', len(replacements), 'files')
for r in replacements:
    print(r)
