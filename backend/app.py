from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load the trained model
model = joblib.load('models/project_suggestion_model.pkl')

projects = []

@app.route('/projects', methods=['GET', 'POST'])
def handle_projects():
    if request.method == 'POST':
        project = request.get_json()
        projects.append(project)
        return jsonify({'message': 'Project added successfully!'}), 201
    elif request.method == 'GET':
        return jsonify(projects)

@app.route('/projects/<int:project_index>', methods=['PUT', 'DELETE'])
def modify_project(project_index):
    if project_index < 0 or project_index >= len(projects):
        return jsonify({'message': 'Project not found!'}), 404

    if request.method == 'PUT':
        project = request.get_json()
        projects[project_index] = project
        return jsonify({'message': 'Project updated successfully!'})
    
    elif request.method == 'DELETE':
        projects.pop(project_index)
        return jsonify({'message': 'Project deleted successfully!'})

@app.route('/get_suggestions', methods=['POST'])
def get_suggestions():
    data = request.get_json()
    
    # Extract data from request
    amount_spent = data.get('amountSpent', 0)
    technologies = data.get('technologies', '')

    # Preprocess input
    input_data = pd.DataFrame([[technologies, amount_spent]], columns=['technologies', 'amountSpent'])
    input_data = pd.get_dummies(input_data, columns=['technologies'])

    # Ensure input data matches training data columns
    for col in model.feature_names_in_:
        if col not in input_data.columns:
            input_data[col] = 0

    # Predict suggestions
    suggestions = model.predict(input_data)

    # Return suggestions as JSON
    return jsonify({'suggestions': suggestions.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
