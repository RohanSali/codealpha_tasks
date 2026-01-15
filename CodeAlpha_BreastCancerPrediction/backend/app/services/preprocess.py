import numpy as np
import pandas as pd
from app.services.model_loader import scaler, FEATURE_MEANS

FEATURE_ORDER = list(FEATURE_MEANS.keys())

def preprocess_features(user_features: dict):

    full_features = {}

    for feature in FEATURE_ORDER:
        if feature in user_features and user_features[feature] != "":
            full_features[feature] = float(user_features[feature])
        else:
            full_features[feature] = FEATURE_MEANS[feature]

    df = pd.DataFrame([full_features])
    df_scaled = scaler.transform(df)

    return df_scaled