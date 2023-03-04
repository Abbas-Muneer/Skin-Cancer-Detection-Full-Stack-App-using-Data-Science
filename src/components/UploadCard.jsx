import { useState } from "react";
import {
  Card,
  Button,
  Progress,
  input
} from "@material-tailwind/react";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyCQYolC69JZyTwiZZ9zWLsrgRdstQafKPI",
  authDomain: "olympians-73303.firebaseapp.com",
  projectId: "olympians-73303",
  storageBucket: "olympians-73303.appspot.com",
  messagingSenderId: "722974386761",
  appId: "1:722974386761:web:af21df8743c1562681ed98",
  measurementId: "G-DCP04GS3YJ"
});

const storage = getStorage(app);

function App() {
  // State to store uploaded file
  const [file, setFile] = useState("");

  // progress
  const [percent, setPercent] = useState(0);

  // State to track whether the file has been uploaded
  const [uploaded, setUploaded] = useState(false);

  // Handle file upload event and update state
  function handleChange(event) {
    const selectedFile = event.target.files[0];
    if (!selectedFile.type.startsWith("image/")) {
      alert("Please select an image file!");
      setFile("");
    } else {
      setFile(selectedFile);
      setUploaded(false); // Reset uploaded state when a new file is selected
    }
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please select an image file!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // Set uploaded state to true and show the "Generate script" button
        setUploaded(true);
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          // extract file name from url
          const fileName = decodeURIComponent(url.split("?")[0].split("/").pop());
          console.log("File name:", fileName);
          // extract token number from url
          const token = new URL(url).searchParams.get("token");
          console.log("Token:", token);
        });
      }
    );
  };

  return (
    <div>
      <Card className="w-10/5 h-25 ">
      <Progress
            value={percent}
            variant="gradient"
            color="green"
            size="md"
            className="w-full h-7 mb-4 bg-gray-200 rounded-full dark:bg-gray-700 shadow-xl "
          />
 
          <p>{percent} % </p>

          <div className="text-center">
            <label htmlFor="image-file" className="block text-gray-700 font-bold mb-2">
              Please select an image file:
            </label>
               
  


            <input

                type="file"
                
                className="mb-8 mx-8"
                onChange={handleChange}
               
                style={{
                  backgroundColor: "#F3F4F6",
                  color: "#6B7280",
                
                  padding: "15px 70px",
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                }}
              />
          </div>

          <Button
          onClick={handleUpload}
          variant="gradient"
          color="Green"
          size="md"
          className="mb-6 mx-10 rounded-full"
        >
          
          {getDownloadURL ? "Upload the " : "Upload"}
        </Button>

       
    
      </Card>
      
    </div>
  );
}

export default App;
