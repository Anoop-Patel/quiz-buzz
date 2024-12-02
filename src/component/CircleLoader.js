import React from "react";

const CircleLoader = ({ result =70}) => {
  return (
    <div className="circle-loader">
      <div
        className="circle-loader__progress"
        style={{
          background: `conic-gradient(#28a745 ${result}%, rgb(251, 227, 227) ${result}% 100%)`,
        }}
      >
        <div className="circle-loader__inner"> {result}</div>
      </div>
    </div>
  );
};


export default CircleLoader;
