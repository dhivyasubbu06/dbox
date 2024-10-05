import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {
  const [confidential, setConfidential] = useState(false);

  const handleToggle = () => {
    setConfidential(!confidential);
  };

  return (
    <div className="file-upload">
      <h2>Upload File</h2>
      <div className="toggle-section">
        <span>{confidential ? "Confidential" : "Public"}</span>
        <label className="switch">
          <input type="checkbox" checked={confidential} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="file-input">
        <p>Drag & Drop your file here or Click to browse files</p>
      </div>
      <input type="text" placeholder="Title" />
      <textarea placeholder="Description"></textarea>
      <button>Upload & Convert to NFT</button>
    </div>
  );
};

export default FileUpload;
