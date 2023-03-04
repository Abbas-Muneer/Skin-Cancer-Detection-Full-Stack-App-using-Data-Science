import Navbar from "../components/NavBar";

import UploadCard from "../components/UploadCard";

export default function Upload() {
  return (
    <div className="upload">
      <Navbar></Navbar>
      <div className="blob">
    
      </div>
      <div className="content grid w-11/12 my-66 ">
        <div className="left my-auto">
          <h1 className="text-left text-4xl sm:text-4xl text-indigo-900 font-sans font-semibold">
           ihdliahfiwehfekhfo
          </h1>
          <h1 className="text-left my-4 text-lg text-indigo-900">
         Get Detailed analysis of your skin
          </h1>
        </div>
        <div className="right">
          <UploadCard></UploadCard>
          </div>
      </div>
    </div>
  );
}
