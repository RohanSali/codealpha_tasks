from fastapi import APIRouter
from pydantic import BaseModel
from typing import Dict
from app.services.preprocess import preprocess_features
from app.services.inference import predict_cancer

router = APIRouter()

class PatientData(BaseModel):
    features: Dict[str, float]

@router.post("/predict")
def predict(data: PatientData):
    processed = preprocess_features(data.features)
    result = predict_cancer(processed)
    return result