import React from 'react'
import { Bgimage } from "../../assets/image";

const QuizHome = () => {
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
          {[...Array(5)].map((item, key) => {
            return (
              <div className="topic-box">
                <img src={Bgimage} altt="icon" className="icon" lazy="loading" />
                <span className="name"> Name</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default QuizHome