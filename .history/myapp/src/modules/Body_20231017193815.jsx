import React from 'react';

const Body = () => {
  return (
    <div className='flex items-center justify-center p-5'>
                  <ImageUpload
              onChange={handleSelectImage}
              handleDeleteImage={handleDelImage}
              className="h-[250px]"
              progress={progress}
              image={image}
            ></ImageUpload>
    </div>
  );
};

export default Body;