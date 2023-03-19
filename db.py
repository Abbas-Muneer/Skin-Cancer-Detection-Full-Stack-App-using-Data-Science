import pymongo
import pandas as pd
import json as json

myClient = pymongo.MongoClient("mongodb://localhost:27017/")
myDB = myClient["skin_disease"]
myTbl = myDB["disease"]

def update_db():
    disease_excel = pd.read_excel('SkinX-Disease.xlsx')
    disease_list = disease_excel.to_dict(orient='record')

    for x in disease_list:
        query = {"Skin Disease": x["Skin Disease"]}
        result = myTbl.find_one(query)
        if result is None:
            myTbl.insert_one(x)


def get_disease_details(disease_name):
    query = {"Skin Disease": disease_name}
    result = myTbl.find_one(query)
    jason_data = json.dumps(
        {"name": result["Skin Disease"], "description": result["Description"], "symptoms": result["Symptoms"],
         "first_aid": result["Home Remedies/Treatments"]})
    return jason_data
