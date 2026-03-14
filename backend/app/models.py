from pydantic import BaseModel, Field
from typing import Literal


class PredictionRequest(BaseModel):
    age: int = Field(..., ge=0, le=120, description="Patient age")
    salt_intake: float = Field(..., ge=0, description="Daily salt intake (g)")
    stress_score: int = Field(..., ge=0, le=10, description="Stress score (0-10)")
    bp_history: Literal["Normal", "Prehypertension", "Hypertension"] = Field(
        ..., description="Blood pressure history"
    )
    sleep_duration: float = Field(..., ge=0, le=24, description="Sleep duration (hours)")
    bmi: float = Field(..., ge=10, le=60, description="Body Mass Index")
    medication: Literal[
        "None", "ACE Inhibitor", "Beta Blocker", "Diuretic", "Other"
    ] = Field(..., description="Current medication")
    family_history: Literal["Yes", "No"] = Field(
        ..., description="Family history of hypertension"
    )
    exercise_level: Literal["Low", "Moderate", "High"] = Field(
        ..., description="Exercise level"
    )
    smoking_status: Literal["Smoker", "Non-Smoker"] = Field(
        ..., description="Smoking status"
    )


class PredictionResponse(BaseModel):
    prediction: int = Field(..., description="0 = No Hypertension, 1 = Hypertension")
    label: str = Field(..., description="Human-readable label")
    probability: float = Field(..., description="Prediction confidence (0-1)")

class SkinCancerResponse(BaseModel):
    prediction: int = Field(..., description="Predicted class index")
    label: str = Field(..., description="Human-readable label")
    probability: float = Field(..., description="Prediction confidence (0-1)")
    all_probabilities: list[float] = Field(None, description="Confidences per class")
