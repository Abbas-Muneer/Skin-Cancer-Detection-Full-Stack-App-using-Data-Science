import React, { useState, useEffect } from 'react';
import './HowItWorks.css';
import Login from './Login11.png';
import Input from './Input11.png';
import Output from './Output11.png';
import Remedies from './Remedies11.png';

const steps = [
  {
    image: Login,
    title: 'Login or SignUp',
    description:
      'To access our skin disease recognition platform, users must first log in to their account by entering their email address and password. This ensures that only authorized users have access to the platform and their personal information. If users forget their password, they can reset it by clicking on the "Forgot password" link and following the prompts to reset their password via email.',
  },
  {
    image: Input,
    title: 'Image Input',
    description:
      'To use our skin disease recognition platform, users can upload photos of their skin condition by clicking on the "Upload Image" button on their dashboard. Users can then select the image from their device or take a new photo using their device\'s camera. Our platform supports various image formats, such as JPEG, PNG, and BMP.',
  },
  {
    image: Output,
    title: 'Getting Results',
    description:
      'Once the image is uploaded, our platform uses advanced image processing and machine learning algorithms to analyze the image and identify the likely diagnosis. Users can then view the diagnosis and recommendations for treatment based on the identified skin condition.',
  },
  {
    image: Remedies,
    title: 'Home Remedies',
    description:
      'Once a diagnosis is made, our platform provides recommendations for treatment, which may include over-the-counter medications or prescription treatments recommended by a healthcare professional. It\'s important to note that the recommendations provided by our platform are based on scientific research and industry standards, and are intended to be used as a general guide only. Users should always consult with a healthcare professional before starting any new treatments or medications for their skin condition.',
  },
];



const HowItWorksPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStep((currentStep + 1) % steps.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentStep]);

  const { image, title, description } = steps[currentStep];

  
  return (
    <div className="how-it-works-page">
      <p className="heading">
        <h1>How It Works</h1>
      </p>
      <div className="slider-indicator">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`slider-dot ${index === currentStep ? 'active' : ''}`}
            onClick={() => setCurrentStep(index)}
          />
        ))}
      </div>
      <div className="step">
        <div className="step-image">
          <img src={image} alt={title} />
        </div>
        <div className="step-description">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
