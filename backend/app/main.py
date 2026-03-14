import os
import joblib
import numpy as np
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.models import PredictionRequest, PredictionResponse

# ---------------------------------------------------------------------------
# Load ML model & scaler at startup
# ---------------------------------------------------------------------------
MODEL_DIR = os.path.join(os.path.dirname(__file__), "..", "models")
ensemble_model = joblib.load(os.path.join(MODEL_DIR, "ensemble_3_models.pkl"))
scaler = joblib.load(os.path.join(MODEL_DIR, "scaler_3_models.pkl"))

# ---------------------------------------------------------------------------
# FastAPI app
# ---------------------------------------------------------------------------
app = FastAPI(
    title="Healthy Sense API",
    description="Hypertension prediction using an ensemble ML model",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Helper: preprocess a single request into the feature vector the model expects
# ---------------------------------------------------------------------------
BP_HISTORY_MAP = {"Normal": 0, "Prehypertension": 1, "Hypertension": 2}
EXERCISE_MAP = {"Low": 0, "Moderate": 1, "High": 2}
YESNO_MAP = {"Yes": 1, "No": 0}
SMOKING_MAP = {"Smoker": 1, "Non-Smoker": 0}

# Medication one-hot columns (drop_first=True drops "ACE Inhibitor")
MEDICATION_COLS = [
    "Medication_Beta Blocker",
    "Medication_Diuretic",
    "Medication_None",
    "Medication_Other",
]


def _preprocess(req: PredictionRequest) -> np.ndarray:
    """Convert a request into the same feature vector used during training."""
    med_flags = {col: 0 for col in MEDICATION_COLS}
    if req.medication != "ACE Inhibitor":
        key = f"Medication_{req.medication}"
        if key in med_flags:
            med_flags[key] = 1

    row = {
        "Age": req.age,
        "Salt_Intake": req.salt_intake,
        "Stress_Score": req.stress_score,
        "BP_History": BP_HISTORY_MAP[req.bp_history],
        "Sleep_Duration": req.sleep_duration,
        "BMI": req.bmi,
        "Family_History": YESNO_MAP[req.family_history],
        "Exercise_Level": EXERCISE_MAP[req.exercise_level],
        "Smoking_Status": SMOKING_MAP[req.smoking_status],
        **med_flags,
    }

    # Keep column order consistent with training
    cols = [
        "Age", "Salt_Intake", "Stress_Score", "BP_History",
        "Sleep_Duration", "BMI", "Family_History", "Exercise_Level",
        "Smoking_Status",
        *MEDICATION_COLS,
    ]
    df = pd.DataFrame([row], columns=cols)
    return scaler.transform(df)


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.post("/predict", response_model=PredictionResponse)
def predict(req: PredictionRequest):
    X = _preprocess(req)
    prediction = int(ensemble_model.predict(X)[0])
    proba = float(ensemble_model.predict_proba(X)[0][prediction])

    return PredictionResponse(
        prediction=prediction,
        label="Hypertension" if prediction == 1 else "No Hypertension",
        probability=round(proba, 4),
    )
