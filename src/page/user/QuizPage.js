import React, { useEffect, useState } from "react";
import LineLoader from "../../component/LineLoader";
import { Arrow } from "../../assets/image";

const QuizPage = ({ onSubmit, quiz = {} }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timer, setTimer] = useState(parseInt(quiz?.timer*60, 10) || 60);
  const handleSubmit = () => {
    let correct = 0;
    let incorrect = 0;

    quiz?.questions.forEach((question, index) => {
      if (question.correctAnswer === selectedAnswers[index]) {
        correct++;
      } else {
        incorrect++;
      }
    });

    onSubmit(correct, incorrect);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(selectedAnswers[currentQuestionIndex + 1] || null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(selectedAnswers[currentQuestionIndex - 1] || null);
    }
  };

  const handleOptionSelect = (key) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = key;
    setSelectedAnswers(updatedAnswers);
    setSelectedOption(key);
    handleNext();
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      handleSubmit();
    }
  }, [timer]);
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress =
  ((currentQuestionIndex + 1) / quiz?.questions?.length) * 100;
  return (
    <div className="user-quiz-wrapper">
      <div className="back">
        <div className="box">
          <span className="name">{quiz?.quizname}</span>
        </div>
        <div className="result-box" onClick={handleSubmit}>
          Submit
        </div>
      </div>
      <div className="progress">
        <div className="progress-box">
          <div className="arrow-box">
            <img
              src={Arrow}
              alt="arrow"
              className="arrow left"
              onClick={handlePrevious}
            />
            <img
              src={Arrow}
              alt="arrow"
              className="arrow"
              onClick={handleNext}
            />
          </div>
          <span className="number">
            {currentQuestionIndex + 1} / {quiz?.questions?.length}
          </span>
          <div className="time-box">{formatTime(timer)}</div>
        </div>
        <LineLoader  progress={progress}/>
      </div>

      <div className="quiz-wrapper">
        <div className="quiz-home">
          <span className="question">
            <span className="head">Q </span>
            {currentQuestion?.text}
          </span>
        </div>
        <div className="option-wrapper">
          <div className="answer-wrapper">
            {currentQuestion?.options?.map((option, key) => (
              <div
                className={`answer-box ${
                  selectedOption === key ? "selected" : ""
                }`}
                key={key}
                onClick={() => handleOptionSelect(key)}
              >
                <div className="number">{key + 1}</div>
                <span className="option">{option}</span>
              </div>
            ))}
            <span className="note">
              Enter the answer in the textbox given above. There is no character
              limit for the answer.
            </span>

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
