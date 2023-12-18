import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageUpload from "../components/Image/ImageUpload";
import StarsMouse from "../components/Mouse/StarsMouse";
const Body = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [process, setProcess] = useState(0);
  const [data, setData] = useState({
    title: "",
    body: ""
})
  useEffect(() => {
    const uploadToImgbb = async () => {
      if (!file) return null;
      setProcess(1);
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
      console.log(response.data.data.url);
      if (response.data.data.url) setProcess(0);
      setImage(response.data.data.url);
    };
    uploadToImgbb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);
  const handleSelectImage = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleDeleteImage = () => {
    setImage(null);
  };
  // const handleClick = () => {
  //   console.log(image);
  // };
  const handleClick = async () => {
    // Create a FormData object and append the image to it.
    const formData = new FormData();
    formData.append('image_input', image);
    formData.append('text_input', "cmm");

    // Make a POST request to the server with the FormData object.
    const response = await axios.post('http://192.168.33.1/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Handle the response.
    if (response.status === 200) {
      // The image was successfully uploaded.
      // Do something with the response.data.
      const data = response.data.images;
      const src = `data:image/png;base64,${data}`;
      console.log(src);
      // setNewImage(src);
    } else {
      // An error occurred.
      // Handle the error.
      console.error('Failed to upload and process the image.');
      console.log(image);
    }
  }
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="flex items-center justify-center p-10 gap-x-24">
        <ImageUpload
          onChange={handleSelectImage}
          handleDeleteImage={handleDeleteImage}
          progress={process}
          image={image}
        ></ImageUpload>
    ?
      </div>
      {/* <button onClick={handleClick} className="bg-red">click</button> */}
      {/* <Link to={"/rs"}> */}
        <button className="btn" type="button" onClick={handleClick}>
          <strong>Handle</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      {/* </Link> */}
      <StarsMouse></StarsMouse>
    </div>
  );
};

export default Body;
