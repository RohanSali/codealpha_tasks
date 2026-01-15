import joblib, json
from app.core.config import MODEL_PATH, SCALER_PATH, FEATURE_MEAN_PATH

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

with open(FEATURE_MEAN_PATH, "r") as f:
    FEATURE_MEANS = json.load(f)