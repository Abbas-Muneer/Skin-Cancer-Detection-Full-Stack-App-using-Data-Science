import pymongo
import pandas as pd

myClient = pymongo.MongoClient("mongodb://localhost:27017/")
myDB = myClient["skin_disease"]
myTbl = myDB["disease"]

disease_excel = pd.read_excel('SkinX-Disease.xlsx')
myTbl.insert_many(disease_excel.to_dict(orient='record'))

myQ = {"Skin Disease": "Acne"}

result = myTbl.find(myQ)

for x in result:
    print(x['Symptoms'])
