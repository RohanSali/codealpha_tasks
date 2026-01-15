import joblib, json
from app.core.config import MODEL_PATH, PCA_PATH, ENCODER_PATH, LABEL_MAP_PATH

model = joblib.load(MODEL_PATH)
pca = joblib.load(PCA_PATH)
label_encoder = joblib.load(ENCODER_PATH)

with open(LABEL_MAP_PATH, "r") as f:
    emnist_label_map = {int(k): v for k, v in json.load(f).items()}