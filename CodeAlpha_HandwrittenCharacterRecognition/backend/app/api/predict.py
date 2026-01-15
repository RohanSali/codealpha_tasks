from fastapi import APIRouter, UploadFile, File
from PIL import Image
import io

from app.services.preprocess import preprocess_image
from app.services.inference import predict_character

router = APIRouter()

@router.post("/predict")
async def predict(file: UploadFile = File(...)):

    contents = await file.read()
    image = Image.open(io.BytesIO(contents))

    processed = preprocess_image(image)
    result = predict_character(processed)

    return result