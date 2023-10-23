import React, { useState } from 'react';

const UploadImage = () => {

  const handleFileChange = (event) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your content"
          className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
        />
        <button>up</button>
      </div>
    );
};

export default UploadImage;
