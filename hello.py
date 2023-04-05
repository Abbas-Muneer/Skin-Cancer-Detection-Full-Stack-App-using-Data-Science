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


import ffi
import os
import ffilib


libc = ffilib.libc()

fcntl_l = libc.func("i", "fcntl", "iil")
fcntl_s = libc.func("i", "fcntl", "iip")
ioctl_l = libc.func("i", "ioctl", "iil")
ioctl_s = libc.func("i", "ioctl", "iip")


def fcntl(fd, op, arg=0):
    if type(arg) is int:
        r = fcntl_l(fd, op, arg)
        os.check_error(r)
        return r
    else:
        r = fcntl_s(fd, op, arg)
        os.check_error(r)
        # TODO: Not compliant. CPython says that arg should be immutable,
        # and possibly mutated buffer is returned.
        return r


def ioctl(fd, op, arg=0, mut=False):
    if type(arg) is int:
        r = ioctl_l(fd, op, arg)
        os.check_error(r)
        return r
    else:
        # TODO
        assert mut
        r = ioctl_s(fd, op, arg)
        os.check_error(r)
        return r
