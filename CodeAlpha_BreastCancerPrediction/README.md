# Breast Cancer Prediction System  
CodeAlpha Task - Medical Data Classification

--------------------------------------------------

Objective

To develop a Machine Learning system that predicts whether a tumor is malignant or benign based on diagnostic features.

This project focuses on:
- Medical data analysis  
- Feature engineering  
- Model comparison  
- Explainable evaluation  
- Deployment via web interface  

--------------------------------------------------

Problem Statement

Early detection of breast cancer significantly increases survival rates.  
This project aims to analyze medical diagnostic data and build a reliable classification model to assist in predicting cancer type.

--------------------------------------------------

Project Structure

CodeAlpha_BreastCancerPrediction/

- frontend - React and Vite web application  
- backend - FastAPI inference API  
- ml - Datasets, notebooks, models, reports  
- docs - Architecture and methodology  
- README.md

--------------------------------------------------

Dataset

- Source: Breast Cancer Wisconsin Dataset  
- Features: 30 numerical tumor characteristics  
- Target:
  - 0 Malignant  
  - 1 Benign  

--------------------------------------------------

ML Workflow

1. Data loading and inspection  
2. Exploratory Data Analysis  
3. Feature scaling and engineering  
4. Model training:
   - Logistic Regression  
   - Random Forest  
   - Support Vector Machine  
5. Performance evaluation using:
   - Accuracy  
   - Precision, Recall, F1-score  
   - ROC-AUC  
   - Confusion matrix  
6. Model comparison and selection  

--------------------------------------------------

Models Implemented

- Logistic Regression  
- Random Forest  
- Support Vector Machine  

--------------------------------------------------

Web Application

The system is presented through a full stack application:

- React frontend  
- FastAPI backend  
- Features:
  - Dataset overview  
  - EDA visualizations  
  - Model comparison dashboard  
  - Live prediction form  
  - Result interpretation  

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

- High predictive accuracy achieved  
- Strong recall on malignant cases  
- ROC curves and confusion matrices analyzed  

Results will be documented in ml/reports.

--------------------------------------------------

Key Learnings

- Handling medical datasets responsibly  
- Importance of evaluation metrics beyond accuracy  
- Feature relevance and model interpretability  
- End-to-end ML system development  

--------------------------------------------------

Author

Rohan Sali