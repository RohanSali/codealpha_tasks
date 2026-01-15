from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / "models" / "optimized_model.pkl"
PCA_PATH = BASE_DIR / "models" / "pca_transformer.pkl"
ENCODER_PATH = BASE_DIR / "models" / "label_encoder.pkl"
LABEL_MAP_PATH = BASE_DIR / "models" / "emnist_label_map.json"

IMAGE_SIZE = (28, 28)