import React from "react";

const Result = () => {
  return (
    <div className="py-14 px-6">
      <div className="w-full h-[500px] flex items-center justify-center border border-white rounded-xl">
        <div className="flex items-center justify-center gap-3 w-1/2 h-full border ">
          <div className="flex flex-col items-end justify-center h-full w-1/2 border  p-3 gap-3">
            {Array(3).fill(0).map((item, index) => (
              <img src="https://source.unsplash.com/random" alt="img" className="h-1/4 w-3/5 rounded-lg" key={index}/>
            ))}
          </div>
          <div className="h-full w-1/2 border ">
              <img src="https://source.unsplash.com/random" alt="img" className="h-full w-full ro" />
          </div>
        </div>  
        <div className="w-1/2 p-5 text-white">
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
