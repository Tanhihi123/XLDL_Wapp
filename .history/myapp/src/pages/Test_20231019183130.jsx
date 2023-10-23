import React, { useState } from 'react';
import * as ipfsClient from 'ipfs-http-client';

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const uploadImageToIPFS = async (file) => {
    // Thay đổi dòng sau
    const ipfs = ipfsClient.create({ host: 'localhost', port: 5001, protocol: 'http' });

    try {
      const fileData = await ipfs.add(file);
      const imageUrl = `https://ipfs.io/ipfs/${fileData.cid.toString()}`;

      setImage(imageUrl);
      console.log(image);
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
