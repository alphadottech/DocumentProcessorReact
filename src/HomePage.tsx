import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 
import resumeImg from './assets/Resume.png'; 

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleUploadButtonClick = () => {
    navigate('/upload');
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <div className="logo">RiR</div>
        <nav className="navigation">
          {/* <a href="#home">Home</a>
          <a href="#solutions">Solutions</a>
          <a href="#features">Features</a>
          <a href="#resources">Resources</a>
          <a href="#integrations">Integrations</a>
          <a href="#pricing">Pricing</a>
          <a href="#login">Login</a> */}
          <button className="request-demo-button" onClick={handleUploadButtonClick}>Upload Resume</button>
        </nav>
      </header>
      <main className="main-content">
        <div className="text-section">
          <h1>Resume Information Retriever</h1>
          <p>RiR can process the popular file types including PDF, DOC, DOCX It recognizes and extracts information from 
            different resume formats Implemented Machine Learning for Better Accuracy.</p>
          <button className="upload-resume-button" onClick={handleUploadButtonClick}>Upload Resume</button>
        </div>
        <div className="image-section">
          <img src={resumeImg} alt="Resume Parsing" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
