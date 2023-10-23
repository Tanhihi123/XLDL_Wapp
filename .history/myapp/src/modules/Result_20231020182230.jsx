import React from "react";

const Result = () => {
  return (
    <div className="py-14 px-6">
      <div className="w-full h-[500px] border border-white rounded-xl">
        <div className="w-1/2">
        <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">FRONT SIDE</p>
                <p>Hover Me</p>
            </div>
            <div class="backSide">
                <p class="title">BACK SIDE</p>
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
