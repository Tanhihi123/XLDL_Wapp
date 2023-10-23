import React, { Fragment } from "react";
import PropTypes from "prop-types";
const ImageUpload = (props) => {
  return (
    <label
      className={`cursor-pointer flex items-center justify-center border border-dashed w-full min-h-[200px] rounded-lg`}
    >
      <input
        type="file"
        name={name}
        className="hidden-input"
        onChange={() => {}}
      />
      <div className="flex flex-col items-center text-center pointer-events-none">
        <img
          src="/img-upload.png"
          alt="upload-img"
          className="max-w-[80px] mb-5"
        />
        <p className="font-semibold">Choose photo</p>
      </div>
    </label>
  );
};
ImageUpload.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  progress: PropTypes.number,
  image: PropTypes.string,
};
export default ImageUpload;
