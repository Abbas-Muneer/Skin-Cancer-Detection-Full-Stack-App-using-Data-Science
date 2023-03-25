import React from 'react';
import './HowItWorks.css';
import Image from '../Images/Image1.jpg'

const HowItWorksPage = () => {
  return (
    <div className="how-it-works-page">
        {/* <div className='how-it-works-page-bg'> */}
      <p className='heading'><h1>How It Works</h1></p>
      <div className="step">
        <div className="step-image1">
          <img src={Image} alt="Step 1" />
        </div>
        <div className="step-description1">
          <h2>Login or SignUp</h2>
          <p>To access our skin disease recognition platform, users must first log in to their account by entering their email address and password. This ensures that only authorized users have access to the platform and their personal information. If users forget their password, they can reset it by clicking on the "Forgot password" link and following the prompts to reset their password via email. </p>
        </div>
      </div>
      <div className="step">
        <div className="step-image2">
          <img src={Image} alt="Step 2" />
        </div>
        <div className="step-description2">
          <h2>Image Input</h2>
          <p>To use our skin disease recognition platform, users can upload photos of their skin condition by clicking on the "Upload Image" button on their dashboard. Users can then select the image from their device or take a new photo using their device's camera. Our platform supports various image formats, such as JPEG, PNG, and BMP.</p>
        </div>
      </div>
      <div className="step">
        <div className="step-image1">
          <img src={Image} alt="Step 3" />
        </div>
        <div className="step-description1">
          <h2>Getting Results</h2>
          <p>Once the image is uploaded, our platform uses advanced image processing and machine learning algorithms to analyze the image and identify the likely diagnosis. Users can then view the diagnosis and recommendations for treatment based on the identified skin condition.</p>
        </div>
      </div>
      <div className="step">
        <div className="step-image2">
          <img src={Image} alt="Step 4" />
        </div>
        <div className="step-description2">
          <h2>Homeremedies</h2>
          <p>Once a diagnosis is made, our platform provides recommendations for treatment, which may include over-the-counter medications or prescription treatments recommended by a healthcare professional.</p>
          <p>It's important to note that the recommendations provided by our platform are based on scientific research and industry standards, and are intended to be used as a general guide only. Users should always consult with a healthcare professional before starting any new treatments or medications for their skin condition.</p>
        </div>
      </div>
      </div>
    // </div>
  );
};

export default HowItWorksPage;
