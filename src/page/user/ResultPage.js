import React from "react";
import CircleLoader from "../../component/CircleLoader";

const ResultPage = ({results}) => {
  const userData = JSON.parse(localStorage.getItem("userRole"));

  const correct = results?.correct || 0;
  const incorrect = results?.incorrect || 0;
  const total = correct + incorrect;
  const percentage = total > 0 ? (correct / total) * 100 : 0;
  
  return (
    <div className="result-page-wrapper">
      <div className="result-info">
      <span className="result"> You got the  result</span>
        <div className="result-graph">
          <div className="name">
            <span className="user">{userData.name}</span>
            <span className="title">
              Points : <span className="result"> {correct}/{total}</span>
            </span>
          </div>
          <CircleLoader result={percentage} />
        </div>
     
        <div className="info">
          <span className="heading">Answers</span>
          <div className="data"> 
          <span className="title">
            Correct : <span className="result">{correct}</span>
          </span>
          <span className="title">
            InCorrect : <span className="result">{incorrect}</span>
          </span>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ResultPage;
