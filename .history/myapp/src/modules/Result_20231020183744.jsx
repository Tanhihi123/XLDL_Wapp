import React from "react";

const Result = () => {
  return (
    <div className="py-14 px-6">
      <div className="w-full h-[500px] border border-white rounded-xl">
        <div className="grid grid-cols-2 row-start-3 row-end-1 w-1/2 h-full">
          <img src="https://source.unsplash.com/random" alt="img" />
          <img src="https://source.unsplash.com/random" alt="img" />
          <img src="https://source.unsplash.com/random" alt="img" />
          <img src="https://source.unsplash.com/random" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Result;
