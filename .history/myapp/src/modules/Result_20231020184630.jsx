import React from "react";

const Result = () => {
  return (
    <div className="py-14 px-6">
      <div className="w-full h-[500px] flex items-center justify-center border border-white rounded-xl">
        <div className="grid row-start-1 row-end-3 w-1/2 h-full">
          <img src="https://source.unsplash.com/random" alt="img" />
          <img src="https://source.unsplash.com/random" alt="img" />
          <img src="https://source.unsplash.com/random" alt="img" />
          <img src="https://source.unsplash.com/random" alt="img" />
          <img src="https://source.unsplash.com/random" alt="img" />
        </div>
        <div className="w-1/2 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          voluptatem obcaecati rem magnam soluta itaque, corporis ipsam maxime
          officia incidunt exercitationem ex enim quisquam ratione, eaque a
          doloribus praesentium tempore!
        </div>
      </div>
    </div>
  );
};

export default Result;
