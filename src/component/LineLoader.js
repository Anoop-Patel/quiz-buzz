import React from "react";

const LineLoader = ({ progress=60 }) => {
  return (
    <div className="line-loader">
      <div
        className="line-loader__progress"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};



export default LineLoader;
