import pandas as pd
import json

df = pd.read_csv("../datasets/breast_cancer.csv")

feature_means = df.drop("target", axis=1).mean()

feature_means_dict = feature_means.to_dict()

with open("../models/feature_means.json", "w") as f:
    json.dump(feature_means_dict, f, indent=4)

print("Feature means saved.")