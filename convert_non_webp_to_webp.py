from pathlib import Path
from PIL import Image
import sys

root = Path('.')
public_root = root / 'public'
input_paths = [
    '/assets/images/IMG_1031.jpeg',
    '/assets/images/IMG_2957.jpeg',
    '/assets/images/IMG_3922.jpeg',
    '/assets/images/IMG_4199.jpeg',
    '/assets/images/IMG_5641.jpeg',
    '/assets/images/Jenjensen.JPG',
    '/assets/images/Procedure-036_maxWidth_1200_maxHeight_1200_ppi_72.png',
    '/assets/images/SkinPen Before & after 1.jpg',
    '/assets/images/TotalHealthLogo_HorizontalWhite.png',
    '/assets/images/antiwrinklebefore+after.jpeg',
    '/assets/images/antiwrinklebefore+after2.jpeg',
    '/assets/images/antiwrinklebefore+after3.jpeg',
    '/assets/images/aquafirme1.png',
    '/assets/images/aquafirme2.jpeg',
    '/assets/images/christmas-staff.jpeg',
    '/assets/images/facialbefore+after.jpeg',
    '/assets/images/favicon-32x32.png',
    '/assets/images/fillerb4+after2.jpeg',
    '/assets/images/fillerb4+after3.jpeg',
    '/assets/images/fillerbefore+after.jpeg',
    '/assets/images/images/ABB4D0E0-2BF2-4275-A151-655022AC1C04.JPG',
    '/assets/images/images/DSC_1914.jpg',
    '/assets/images/images/DSC_1960.jpg',
    '/assets/images/images/DSC_2001.jpg',
    '/assets/images/images/DSC_2023.jpg',
    '/assets/images/images/IMG_0173.JPG',
    '/assets/images/images/IMG_0993.JPG',
    '/assets/images/images/IMG_3219.JPG',
    '/assets/images/images/IMG_8380.JPG',
    '/assets/images/images/aquafirme4.jpg',
    '/assets/images/images/close-up-doctor-checking-smiley-woman.jpg',
    '/assets/images/images/exoe_digital_marketing_kit_-_12.11.2023/EXOE Digital Marketing Kit - 12.11.2023/15.png',
    '/assets/images/images/exoe_digital_marketing_kit_-_12.11.2023/EXOE Digital Marketing Kit - 12.11.2023/ex3.png',
    '/assets/images/images/facebook-icon.png',
    '/assets/images/images/female-patient-receiving-botox-injection-forehead.jpg',
    '/assets/images/images/googleplay.png',
    '/assets/images/images/hand-with-latex-glove-holding-vaccine-syringe.jpg',
    '/assets/images/images/instagram-icon.png',
    '/assets/images/images/istock-brownplant.jpg',
    '/assets/images/images/istock-chem.jpg',
    '/assets/images/images/istock-consultation.jpg',
    '/assets/images/images/istock-facial_.jpg',
    '/assets/images/images/istock-kybella.jpg',
    '/assets/images/images/istock-salt1.jpg',
    '/assets/images/images/istock-sculptra.jpg',
    '/assets/images/images/istock-skinpen.jpg',
    '/assets/images/images/istock-wheat2.jpg',
    '/assets/images/images/man-fixed.jpg',
    '/assets/images/images/marriah1.jpeg',
    '/assets/images/images/nouva4.jpg',
    '/assets/images/images/salt-b4+after[1].png',
    '/assets/images/images/salt-b4+after[2].png',
    '/assets/images/images/salt-b4+after[3].png',
    '/assets/images/images/someimagestotry1/daniel-j-schwarz-UK-EzGvEZIk-unsplash.jpg',
    '/assets/images/images/stsfollowupinfo/skntyp.co_OwnSkinQuiz.png',
    '/assets/images/images/stsfollowupinfo/skntyp.co_ShopOwn.png',
    '/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg',
    '/assets/images/images/woman-doing-self-care-treatment-indoors.jpg',
    '/assets/images/kybellabefore+after.jpeg',
    '/assets/images/milky-way-full-stars-space.jpg',
    '/assets/images/prfbefore+after.jpeg',
    '/assets/images/skincarebannerimg.jpg',
    '/assets/images/skinpenbefore+after.jpeg',
    '/assets\images\images\facebook-icon.png',
    '/assets\images\images\instagram-icon.png',
    '\assets\images\OWN Branding\OWN Final Logos\Print CMYK\Logo Icon\PNG\OWN_Icon_CMYK_Black.png',
    '\assets\images\OWN Branding\OWN Final Logos\Print CMYK\Logo Icon\PNG\OWN_Icon_CMYK_White.png',
    '\assets\images\OWN Branding\OWN Final Logos\Print CMYK\Primary Logo\PNG\OWN_Primary Logo_CMYK_White_JustText.png',
    'assets\images\images\wetransfer_photos_2025-04-09_1731\PHOTOS\HP 1 AlumierMD Pigmentation.jpg'
]

converted = []
missing = []
errors = []

for ref in input_paths:
    normalized = ref.lstrip('/\\').replace('\\', '/').replace('//', '/')
    candidate = public_root / normalized
    if not candidate.exists():
        missing.append(ref)
        continue
    try:
        with Image.open(candidate) as im:
            webp_path = candidate.with_suffix('.webp')
            if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
                im = im.convert('RGBA')
            else:
                im = im.convert('RGB')
            im.save(webp_path, 'WEBP', quality=85, method=6)
        converted.append((str(candidate), str(webp_path)))
    except Exception as e:
        errors.append((str(candidate), str(e)))

print('CONVERTED', len(converted))
for original, webp in converted:
    print('OK', original, '->', webp)
print('MISSING', len(missing))
for ref in missing:
    print('MISS', ref)
print('ERRORS', len(errors))
for original, err in errors:
    print('ERR', original, err)
