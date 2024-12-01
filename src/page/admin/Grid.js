import React, { useState } from "react";
import { useDrop } from "react-dnd";
import GridItem from "./GridItem";

const Grid = () => {
  const [items, setItems] = useState({
    quizname: null,
    timer: null,
    questions: [],
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "COMPONENT",
    drop: (item) =>
      setItems((prev) => {
        if (item.id === "question" && !prev.questions.length) {
          return {
            ...prev,
            questions: [createEmptyQuestion()],
          };
        }
        if (item.id !== "question") {
          return {
            ...prev,
            [item.id]: prev[item.id] || { id: item.id, questionData: {} },
          };
        }
        return prev;
      }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const createEmptyQuestion = () => ({
    text: "",
    options: ["", "", "", ""],
    correctAnswer: null,
  });

  const updateQuestion = (index, updatedQuestion) => {
    setItems((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions[index] = updatedQuestion;
      return { ...prev, questions: updatedQuestions };
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === items.questions.length - 1) {
      setItems((prev) => ({
        ...prev,
        questions: [...prev.questions, createEmptyQuestion()],
      }));
    }
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const quizData = {
      quizname: items.quizname?.questionData?.text,
      timer: items.timer?.questionData?.value,
      questions: items.questions,
    };
    console.log("Submitted Quiz Data:", quizData);
    // Handle submission logic (e.g., API call)
  };

  return (
    <div ref={drop} className="grid" style={{ background: isOver ? "#f0f0f0" : "#fff" }}>
      <div className="drop-box-wrapper">
        {["quizname", "timer"].map((key) => (
          <div key={key} className="grid-item">
            {items[key] ? (
              <GridItem
                id={items[key].id}
                questionData={items[key].questionData}
                onUpdateQuestion={(updatedQuestion) =>
                  setItems((prev) => ({ ...prev, [key]: { ...prev[key], questionData: updatedQuestion } }))
                }
              />
            ) : (
              <div className="placeholder">{`Add ${key === "quizname" ? "Quiz Name" : "Timer"}`}</div>
            )}
          </div>
        ))}

<div className="question-box">
  {items.questions.length > 0 ? (
    <>
      <GridItem
        id="question"
        questionData={items?.questions[currentQuestionIndex]}
        onUpdateQuestion={(updatedQuestion) => updateQuestion(currentQuestionIndex, updatedQuestion)}
      />
      <div className="question-navigation">
        <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0} className="button">
          Previous
        </button>
        <span>
          {currentQuestionIndex + 1}/{items.questions.length}
        </span>
        <button onClick={handleNextQuestion} className="button">Next</button>
      </div>
    </>
  ) : (
    <div className="placeholder">Add Questions</div>
  )}
</div>

        
        <button onClick={handleSubmit} className="submit-button">
          Add Quiz
        </button>
      </div>
    </div>
  );
};

export default Grid;
