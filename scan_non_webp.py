from pathlib import Path
import re

root = Path('.')
patterns = [
    re.compile(r"(['\"])([^'\"]+\.(?:png|jpg|jpeg|gif|bmp|JPG|PNG|JPEG|GIF|BMP))\1"),
    re.compile(r"url\(\s*['\"]?([^'\")]+\.(?:png|jpg|jpeg|gif|bmp|JPG|PNG|JPEG|GIF|BMP))['\"]?\s*\)")
]
skip_dirs = {'node_modules', '.git', 'dist', 'backups'}
refs = {}
for fp in root.rglob('*'):
    if any(part in skip_dirs for part in fp.parts):
        continue
    if fp.suffix.lower() in {'.js', '.jsx', '.ts', '.tsx', '.css', '.html'}:
        try:
            text = fp.read_text(encoding='utf-8', errors='ignore')
        except (PermissionError, OSError):
            continue
        for pat in patterns:
            for m in pat.finditer(text):
                path = m.group(2) if m.lastindex >= 2 else m.group(1)
                refs.setdefault(path, set()).add(str(fp.relative_to(root)))
for path in sorted(refs):
    print(path)
with open('non_webp_image_refs.txt', 'w', encoding='utf-8') as out:
    for path in sorted(refs):
        out.write(path + '\n')
print('TOTAL', len(refs))
print('WROTE non_webp_image_refs.txt')
