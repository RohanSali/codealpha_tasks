# Handwritten Character Recognition  
CodeAlpha Task - Computer Vision

--------------------------------------------------

Objective

To build a Machine Learning system capable of recognizing handwritten characters from image input using image preprocessing and classification models.

The project demonstrates the full ML lifecycle:
- Data loading and preprocessing  
- Model design and training  
- Performance evaluation  
- Error analysis  
- Deployment through an API and interactive web interface  

--------------------------------------------------

Problem Statement

Handwritten character recognition is a fundamental computer vision problem used in OCR systems, document digitization, and form processing.

The goal of this project is to train a model that can accurately classify handwritten digits or characters and make it accessible through a user-friendly web application.

--------------------------------------------------

Project Structure

CodeAlpha_HandwrittenCharacterRecognition/

- frontend - React and Vite web application  
- backend - FastAPI server for model inference  
- ml - Datasets, notebooks, training scripts, models  
- docs - Architecture and workflow documentation  
- README.md

--------------------------------------------------

Dataset

- Source: MNIST or EMNIST  
- Type: Grayscale handwritten character images  
- Samples: 60000 plus training images  
- Image size: 28 by 28 pixels  

--------------------------------------------------

ML Workflow

1. Data acquisition and visualization  
2. Image preprocessing and normalization  
3. Feature representation  
4. Model training  
5. Hyperparameter tuning  
6. Evaluation using:
   - Accuracy  
   - Confusion matrix  
   - Classification report  
7. Error analysis on misclassified samples  

--------------------------------------------------

Models

- Baseline classifier using scikit-learn  
- Optimized classification model  
- CNN-based workflow for high accuracy  

--------------------------------------------------

Web Application

The system is deployed as a full web application:

- Frontend: React and Vite  
- Backend: FastAPI  
- Features:
  - Project overview  
  - Dataset visualization  
  - Training insights  
  - Result dashboards  
  - Live handwritten prediction  

--------------------------------------------------

How to Run

Backend

conda activate env  
cd backend  
uvicorn app.main:app --reload  

Frontend

cd frontend  
npm install  
npm run dev  

--------------------------------------------------

Results

- High classification accuracy achieved  
- Clear visualization of training performance  
- Misclassification analysis performed  

Screenshots and metrics will be added in ml/reports.

--------------------------------------------------

Key Learnings

- Practical image preprocessing techniques  
- Effect of model complexity on performance  
- Importance of error analysis in computer vision tasks  
- Full ML to web deployment workflow  

--------------------------------------------------

Backend API

The backend is built using FastAPI and serves the trained handwritten character recognition model.

It performs:
- image preprocessing
- PCA transformation
- model inference
- label decoding

--------------------------------------------------

Run Backend

conda activate lmlenv  
cd backend  

Install dependencies (first time only):

pip install -r requirements.txt  

Start server:

uvicorn app.main:app --reload  

API will be available at:
http://127.0.0.1:8000

Swagger UI:
http://127.0.0.1:8000/docs

--------------------------------------------------

Prediction Flow

Image upload  
→ preprocessing  
→ PCA transform  
→ optimized model prediction  
→ label decoding  
→ predicted character returned

Author

Rohan Sali