import React from "react";

const Result = () => {
  return (
    <div className="py-14 px-6">
      <div className="w-full h-[500px] border border-white rounded-xl">
        <div className="w-1/2 p-3">
          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide">
                <img src="https://source.unsplash.com/random" alt="img" className="w- h-full" />
              </div>
              <div className="backSide">
                <p className="title">BACK SIDE</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
