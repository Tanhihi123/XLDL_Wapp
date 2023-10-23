import { useState } from "react";
import ImageUpload from "../components/Image/ImageUpload";
import axios from "axios";

const Body = () => {
  const [file, setFile] = useState(null);
  const uploadToImgbb = async () => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload?key=1354c230dd40a7043dbe4307c3df1bc3",
      data: formData,
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    console.log("Upload URL",response.data.data.url);
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="flex items-center justify-center p-10">
        <ImageUpload ></ImageUpload>
      </div>
      <button className="btn" type="button">
        <strong>Handle</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </div>
  );
};

export default Body;
