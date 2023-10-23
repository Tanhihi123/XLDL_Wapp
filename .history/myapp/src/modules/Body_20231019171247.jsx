import ImageUpload from "../components/Image/ImageUpload";

const Body = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="flex items-center justify-center p-10">
        <ImageUpload></ImageUpload>
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
