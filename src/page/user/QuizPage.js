import React from "react";
import LineLoader from "../../component/LineLoader";
import { Arrow, Bgimage } from "../../assets/image";

const QuizPage = ({ onSubmit }) => {
  return (
    <div className="user-quiz-wrapper">
      <div className="back">
        <div className="box">
          <img src={Arrow} alt="arrow" className="arrow " />
          <span className="name">Assignment Task</span>
        </div>
        <div className="result-box" onClick={onSubmit}>Submit</div>
      </div>
      <div className="progress">
        <div className="progress-box">
          <div className="arrow-box">
            <img src={Arrow} alt="arrow" className="arrow left" />
            <img src={Arrow} alt="arrow" className="arrow" />
          </div>
          <span className="number">6 / 10</span>
          <div className="time-box">30:00</div>
        </div>
        <LineLoader />
      </div>
      <div className="quiz-wrapper">
        <div className="quiz-home">
          <span className="question">
            <span className="head">Q </span>Sample Question Text
          </span>
        </div>
        <div className="option-wrapper">
          <div className="answer-wrapper">
            {[...Array(4)].map((item, key) => {
              return (
                <div className="answer-box" key={key}>
                  <div className="number">{key + 1}</div>
                  <span className="option">Option {key + 1}</span>
                </div>
              );
            })}
            <span className="note">
              Enter the answer in the textbox given above. There is no character limit for the answer.
            </span>
            <button className="answer-btn">Check your answer</button>
            <span className="text">
              Powered By <span className="special">chaabi</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
