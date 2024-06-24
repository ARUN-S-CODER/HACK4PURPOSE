import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# Example training data
data = {
    'technologies': ['AI', 'Blockchain', 'AI', 'Web Development'],
    'amountSpent': [10000, 20000, 15000, 8000],
    'suggestion': ['Investor A', 'Investor B', 'Investor A', 'Investor C']
}

df = pd.DataFrame(data)

# Feature engineering (convert categorical to numerical)
df = pd.get_dummies(df, columns=['technologies'])

# Train-test split
X = df.drop('suggestion', axis=1)
y = df['suggestion']

# Train the model
model = RandomForestClassifier()
model.fit(X, y)

# Save the model
joblib.dump(model, 'project_suggestion_model.pkl')
print(joblib.dump(model,'project_suggestsion_model.pkl'))
