import React, { useState, useEffect } from "react";
import UploadService from "../services/FileUploadService";
import Accordion from 'react-bootstrap/Accordion';

const ImageUpload = () => {
  const [currentFile, setCurrentFile] = useState(undefined);
  const [previewImage, setPreviewImage] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [reportData, setReportData] = useState(null);
  const [imageInfos, setImageInfos] = useState([]);

  // useEffect(() => {
  //   UploadService.getFiles().then((response) => {
  //     setImageInfos(response.data);
  //   });
  // }, []);

  const selectFile = (event) => {
    setCurrentFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    setProgress(0);
    setMessage("");
  };

  const upload = () => {
    setProgress(0);

    UploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        // setMessage(response.data);
        setReportData(response.data);
      })
      .catch((err) => {
        console.log(err)
        setProgress(0);
        console.log(err.message)
        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Could not upload the Image!");
        }

        setCurrentFile(undefined);
      });
  };

  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <div className="row">
        <div className="col-8">
          <label className="btn btn-default p-0">
            <input type="file" accept="image/*" onChange={selectFile} />
          </label>
        </div>

        <div className="col-4">
          <button
            className="btn btn-success btn-sm"
            disabled={!currentFile}
            onClick={upload}
          >
            Upload
          </button>
        </div>
      </div>

      {currentFile && (
        <div className="progress my-3">
          <div
            className="progress-bar progress-bar-info"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      <div className="card mt-3 mb-3">
        <div className="card-header">Selected Image</div>
      </div>

      {previewImage && (
        <div className="d-flex justify-content-cente">
          <img className="preview" src={previewImage} alt="" />
        </div>
      )}

      {message && (
        <div className="alert alert-secondary mt-3" role="alert">
          {message}
        </div>
      )}

     
      {reportData && (
        <>
          <Accordion defaultActiveKey="0" className="mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header><h5>Disease Name</h5></Accordion.Header>
              <Accordion.Body>
                <p>{reportData.name}</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><h5>Disease description</h5></Accordion.Header>
              <Accordion.Body>
                <p>{reportData.description}</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><h5>Symptoms</h5></Accordion.Header>
              <Accordion.Body>
                <p>{reportData.doctor}</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header><h5>Medice treatment</h5></Accordion.Header>
              <Accordion.Body>
                <p>{reportData.first_aid}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      )}

     
    </div>
  );
};

export default ImageUpload;
