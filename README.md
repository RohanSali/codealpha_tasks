# CodeAlpha Machine Learning Tasks

This repository contains two independent Machine Learning projects developed as part of the CodeAlpha tasks submission.

Each task is implemented as a complete, standalone ML system with:
- Dataset handling
- Model training and evaluation
- Jupyter notebooks
- Backend API using FastAPI
- Frontend website using React and Vite
- Documentation and reports

The projects are intentionally separated to meet submission standards.

--------------------------------------------------

Projects

1. Handwritten Character Recognition  
Folder: CodeAlpha_HandwrittenCharacterRecognition

- Problem Type: Image Classification  
- Domain: Computer Vision  
- Core Techniques: Feature preprocessing, classification models, CNN-based workflow  
- Dataset: MNIST or EMNIST  
- Goal: Recognize handwritten characters from image input.

--------------------------------------------------

2. Breast Cancer Prediction  
Folder: CodeAlpha_BreastCancerPrediction

- Problem Type: Binary Classification  
- Domain: Medical Data Analysis  
- Core Techniques: EDA, feature engineering, classical ML models  
- Dataset: Breast Cancer Wisconsin Dataset  
- Goal: Predict whether a tumor is malignant or benign.

--------------------------------------------------

Tech Stack

Machine Learning
- Python 3.10
- scikit-learn
- NumPy, Pandas
- Matplotlib, Seaborn

Backend
- FastAPI
- Uvicorn
- Joblib

Frontend
- React
- Vite
- Chart.js or Recharts
- Axios

Environment
- Conda environment: env

--------------------------------------------------

Environment Setup

conda create -n env python=3.10 -y  
conda activate env  

pip install scikit-learn numpy pandas matplotlib seaborn pillow joblib fastapi uvicorn notebook jupyterlab ipykernel  

--------------------------------------------------

Notes

- Each project contains its own README with full instructions.
- Both projects are fully independent.
- Outputs such as plots, metrics, and learnings are reusable for professional portfolio enhancement.

--------------------------------------------------

Author

Rohan Sali  
Machine Learning and Applied AI