from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
app = Flask(__name__)
CORS(app)

with open("spam_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

print("Model loaded Successfully!")

@app.route('/')
def home():
    return " Api Running"

@app.route('/predict', methods=['POST'])

def predict():
    try:
        data = request.get_json()
        text = data.get('text', "")
        if text.strip() == "":
            return jsonify({"error": " Input text is Enpty"}), 400
        vec = vectorizer.transform([text])
        prediction = model.predict(vec)[0]
        return jsonify({
            "prediction": int(prediction)
        })
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)

