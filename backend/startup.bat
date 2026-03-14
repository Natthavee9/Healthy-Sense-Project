@echo off
echo Starting setup... > setup.log
echo Creating directory >> setup.log
mkdir "c:\cs kmutnb\CS_2.2\Intelligent System\healthy-sense\backend\models" >> setup.log 2>&1
echo Copying files >> setup.log
copy "c:\cs kmutnb\CS_2.2\Intelligent System\healthy-sense\train\MLL\ensemble_3_models.pkl" "c:\cs kmutnb\CS_2.2\Intelligent System\healthy-sense\backend\models\" >> setup.log 2>&1
copy "c:\cs kmutnb\CS_2.2\Intelligent System\healthy-sense\train\MLL\scaler_3_models.pkl" "c:\cs kmutnb\CS_2.2\Intelligent System\healthy-sense\backend\models\" >> setup.log 2>&1
copy "c:\cs kmutnb\CS_2.2\Intelligent System\healthy-sense\train\NN\skin_cancer_model.h5" "c:\cs kmutnb\CS_2.2\Intelligent System\healthy-sense\backend\models\" >> setup.log 2>&1
echo Starting uvicorn >> setup.log
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload >> setup.log 2>&1
echo Done >> setup.log
