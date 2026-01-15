import numpy as np
from PIL import Image
from app.core.config import IMAGE_SIZE

def fix_emnist(img):
    img = np.fliplr(img)
    img = np.rot90(img)
    return img

def preprocess_image(image: Image.Image):
    image = image.convert("L")
    image = image.resize(IMAGE_SIZE)

    img = np.array(image)
    img = fix_emnist(img)
    img = img / 255.0

    return img.reshape(1, -1)
