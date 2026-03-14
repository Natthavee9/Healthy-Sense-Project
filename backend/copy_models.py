import os
import shutil

src_mll = r"c:\cs kmutnb\CS_2.2\Intelligent System\healthy-sense\train\MLL"
src_nn = r"c:\cs kmutnb\CS_2.2\Intelligent System\healthy-sense\train\NN"
dest_dir = r"c:\cs kmutnb\CS_2.2\Intelligent System\healthy-sense\backend\models"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

files_to_copy = [
    (os.path.join(src_mll, "ensemble_3_models.pkl"), dest_dir),
    (os.path.join(src_mll, "scaler_3_models.pkl"), dest_dir),
    (os.path.join(src_nn, "skin_cancer_model.h5"), dest_dir)
]

for src, dest in files_to_copy:
    try:
        shutil.copy2(src, dest)
        print(f"Copied {src} to {dest}")
    except Exception as e:
        print(f"Error copying {src}: {e}")
