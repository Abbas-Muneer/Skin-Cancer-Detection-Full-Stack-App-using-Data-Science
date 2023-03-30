from flask import Flask , render_template, jsonify ,request
from os import getcwd
from flask_cors import CORS
import json
import datetime
from predict import predict_image_class
from db import update_db

app = Flask(__name__)

CORS(app)

@app.route('/api/model',methods=['POST'])
def predict():
    update_db()
    file  = request.files['file']
    file.save(file.filename)
    #retrieve image from request 

    TEST_IMG_DIR = file.filename
    #run model 
    result = predict_image_class(TEST_IMG_DIR)
    
    return str(result) 

if __name__ == '_main_':
    app.run(debug = True, port = 8000, host='0.0.0.0')