from app.services.model_loader import model, pca, label_encoder, emnist_label_map

def predict_character(flat_img):

    img_pca = pca.transform(flat_img)

    pred_encoded = model.predict(img_pca)[0]
    original_label = label_encoder.inverse_transform([pred_encoded])[0]
    character = emnist_label_map[int(original_label)]

    return {
        "encoded_class": int(pred_encoded),
        "emnist_label": int(original_label),
        "character": character
    }