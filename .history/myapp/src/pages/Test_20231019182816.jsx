import React, { useState } from 'react';
import * as ipfsClient from 'ipfs-http-client';

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const uploadImageToIPFS = async (file) => {
    const ipfs = ipfsClient('http://localhost:5001'); // Replace with your IPFS node address

    try {
      const fileData = await ipfs.add(file);
      const imageUrl = `https://ipfs.io/ipfs/${fileData.cid.toString()}`;

      setImage(imageUrl);
    } catch (error) {
      console.error('Error uploading to IPFS:', error);
    }
  };

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
