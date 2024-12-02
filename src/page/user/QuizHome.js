import React from "react";
import { Bgimage } from "../../assets/image";

const QuizHome = ({ onOptionClick, data = [] }) => {
  return (
    <div className="user-home-wrapper">
      <div className="quiz-home">
        <span className="heading">Welcome to the </span>
        <span className="topic">Quiz Assignment </span>
        <span className="text">Pick a subject to get started </span>
        <span className="sponser">Powered by Chabbi </span>
      </div>
      <div className="quiz-option-wrapper">
        <div className="topic-wrapper">
          {data?.map((item, key) => (
            <div
              className="topic-box"
              key={key}
              onClick={() => onOptionClick(item)}
            >
              <img src={Bgimage} alt="icon" className="icon" loading="lazy" />
              <span className="name">{item?.quizname}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizHome;
