import ImageUpload from "../components/Image/ImageUpload";

const Body = () => {
  return (
    <div className="flex flex-col gap-5 jus">
      <div className="flex items-center justify-center p-10">
        <ImageUpload></ImageUpload>
      </div>
    </div>
  );
};

export default Body;
