
import Upload from "./pages/Upload";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
    
      <Route path="/upload" element={<Upload />}></Route>
      <Route path="/*" element={<h1>404 not found </h1>}></Route>
    </Routes>
  );
}

export default App;
