import ImageUpload from "../components/Image/ImageUpload";

const Body = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="flex items-center justify-center p-10">
        <ImageUpload></ImageUpload>
      </div>
      <button class="btn" type="button">
  <strong>SPACE</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
    </div>
  );
};

export default Body;
