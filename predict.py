
import numpy as np
from matplotlib import pyplot as plt

import os
import tensorflow as tf
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2,preprocess_input
from tensorflow.keras.layers import Dense,Conv2D,GlobalAveragePooling2D,Input
from tensorflow.keras.preprocessing.image import load_img, ImageDataGenerator
from tensorflow.keras import callbacks,optimizers
import numpy as np

from tensorflow import keras
from keras.applications import ResNet50V2, VGG19, InceptionV3

from tensorflow.keras.metrics import *
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.losses import CategoricalCrossentropy


DATA_TRAINING_PATH = 'train'
BATCH_SIZE = 32
IMG_HEIGHT, IMG_WIDTH = 224, 224
IMG_SIZE = (IMG_HEIGHT, IMG_WIDTH, 3)

DATA_TESTING_PATH = 'test'
BATCH_SIZE = 32
IMG_HEIGHT, IMG_WIDTH = 224, 224
IMG_SIZE = (IMG_HEIGHT, IMG_WIDTH, 3)


infection_CLASSES = ['Acne', 'Atopic_Dermatitis', 'Basal_Cell_Carcinoma', 'Eczema', 'Melanocytic_Nevi', 'Melanoma', 'Nail Fungus', 'Psoriasis', 'Serorrheic Keratoses', 'Skin_Cancer', 'Tinea Ringworm Candideas', 'Warts']
#MODEL_DIR = 'My Drive/model_training/content/resnet-model-23-02-21.h5'
MODEL = keras.models.load_model('AbbasResnet3Model.h5')

def predict_image_class(img_path:str) -> str:
  img = keras.preprocessing.image.load_img(img_path, target_size=IMG_SIZE)
  img_array = keras.preprocessing.image.img_to_array(img)
  img_array = tf.expand_dims(img_array, 0)  # Create batch axis

  predictions = MODEL.predict(img_array)
  #print(predictions.argmax(axis=1))

  return infection_CLASSES[predictions.argmax(axis=1)[0]]


if (__name__) == '__main__':
    TEST_IMG_DIR = "Psoriasis.jpg"
    print(predict_image_class(TEST_IMG_DIR))


