import React from "react";

const CircleLoader = ({ percentage =70}) => {
  return (
    <div className="circle-loader">
      <div
        className="circle-loader__progress"
        style={{
          background: `conic-gradient(#28a745 ${percentage}%, rgb(251, 227, 227) ${percentage}% 100%)`,
        }}
      >
        <div className="circle-loader__inner"> {percentage}</div>
      </div>
    </div>
  );
};


export default CircleLoader;
