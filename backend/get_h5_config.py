import h5py

try:
    with h5py.File("models/skin_cancer_model.h5", "r") as f:
        print(f.attrs.get("model_config", "No model config"))
except Exception as e:
    print("Error:", e)
