import React from "react";
import LineLoader from "../../component/LineLoader";
import { Arrow } from "../../assets/image";

const QuizPage = () => {
  return (
    <div className="user-quiz-wrapper">
      <div className="back">
        <div className="box">
          <img src={Arrow} alt="arrow" className="arrow " />

          <span className="name"> Assignment Task </span>
        </div>
        <div className=" time-box"> </div>
      </div>
      <div className="progress">
        <div className="progress-box">
          <div className="arrow-box">
            {" "}
            <img src={Arrow} alt="arrow" className="arrow left" />
            <img src={Arrow} alt="arrow" className="arrow " />
          </div>
          <span className="number"> 6 / 10 </span>
          <div className=" time-box">30:00 </div>
        </div>

        <LineLoader />
      </div>
      <div className="quiz-wrapper">
        <div className="quiz-home">
          <span className="question">
            <span className="head">Q </span>bbhdbv hfe hevfcye febfve fegf4
            regjrg jfbrg jbjbgv edfbe fejgf fhefe4bugferfbsgcfhdgfd efef hfefv
            hbfve fhevfce fcehvfce hebfce jedbf
          </span>
        </div>
        <div className="option-wrapper">
          <div className="answer-wrapper">
            {[...Array(4)].map((item, key) => {
              return (
                <div className="answer-box ">
                  <textarea
                    placeholder="answer dhvbhbhb ebgfrugb hbfeg rjbrug jhrfhcbhebgbrungg ugbrug"
                    className="input question"
                  />
                  <textarea
                    placeholder="answer here "
                    className="input answer correct"
                  />
                </div>
              );
            })}
            <span className="note">
              Enter the answer in the textbox given above.There is no character
              limit for the answer
            </span>
            <button className="answer-btn"> Check your answer</button>
            <span className="text">
              Powered By <span className="special"> chaabi</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
