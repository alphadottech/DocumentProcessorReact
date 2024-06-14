import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import uploadIcon from './assets/uploadImg.png';

const UploadPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const formData = new FormData();
      formData.append('file', selectedFile);

      setLoading(true); // Set loading to true when starting the API call

      try {
        // Make the API request to upload the file
        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Navigate to the response page with the API response
        console.log(response.data);
        navigate('/response', { state: { data: response.data } });
      } catch (error) {
        console.error('Error uploading the file:', error);
      } finally {
        setLoading(false); // Set loading to false after the API call is finished
      }
    }
  };

  return (
    <div className="container">
      <div className="upload-box">
        {loading ? (
          <div className="loading-indicator">Uploading...</div>
        ) : (
          <>
            <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
            <div className="upload-text">DRAG & DROP</div>
            <div>Or</div>
            <button className="upload-button" onClick={handleButtonClick}>Choose file</button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden-file-input"
              onChange={handleFileChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
