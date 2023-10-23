import React, { useState } from 'react';

const UploadImage = () => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      uploadImageToIPFS(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {image && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={image} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
