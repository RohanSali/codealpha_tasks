from app.services.model_loader import model

def predict_cancer(processed_features):

    pred = model.predict(processed_features)[0]
    prob = model.predict_proba(processed_features)[0][1]

    label = "Benign" if pred == 1 else "Malignant"

    return {
        "prediction": label,
        "raw_class": int(pred),
        "benign_probability": float(prob)
    }