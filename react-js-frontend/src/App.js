import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ImageUpload from "./components/ImageUpload";

function App() {
  return (
    <div className="container mt-3">
      <h2 className="text-center">Olympians</h2>
      <h5 className="text-center">Disease detection app</h5>

      <div className="content">
        <ImageUpload />
      </div>
    </div>
  );
}

export default App;
