// import React, { useRef } from 'react';
// import './App.css';
// import uploadIcon from './assets/uploadImg.png'; 

// function App() {
//   const fileInputRef = useRef(null);

//   // const handleButtonClick = () => {
//   //   fileInputRef.current.click();
//   // };

//   // const handleFileChange = (event) => {
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     console.log(`Selected file - ${file.name}`);
//   //     // Handle the file upload or processing here
//   //   }
//   // };

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="header-left">Alphadot Technologies</div>
//         <div className="header-right">R.i.R</div>
//       </div>
//       <div className="upload-box">
//         <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
//         <div className="upload-text">DRAG & DROP</div>
//         <div>Or</div>
//         <button className="upload-button"
//         //</div> onClick={handleButtonClick}
//         >Choose file</button>
//         <input
//           type="file"
//           ref={fileInputRef}
//           className="hidden-file-input"
//          // onChange={handleFileChange}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from './UploadPage.js';
import ResponsePage from './ResponsePage.js';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/response" element={<ResponsePage />} />
      </Routes>
    </Router>
  );
}

export default App;


