import React from "react";
import CircleLoader from "../../component/CircleLoader";

const ResultPage = () => {
  return (
    <div className="result-page-wrapper">
      <div className="result-info">
      <span className="result"> You got the average result</span>
        <div className="result-graph">
          <div className="name">
            <span className="user"> User Name</span>
            <span className="title">
              {" "}
              Points : <span className="result"> 8/10</span>
            </span>
            <span className="title">
              {" "}
              Duration : <span className="result">22 min</span>
            </span>
          </div>
          <CircleLoader />
        </div>
     
        <div className="info">
          <span className="heading">Answers</span>
          <div className="data"> 
          <span className="title">
            Correct : <span className="result">8</span>
          </span>
          <span className="title">
            InCorrect : <span className="result">2</span>
          </span>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ResultPage;
