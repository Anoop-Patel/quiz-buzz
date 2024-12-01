import React, { useState } from "react";
import { useDrop } from "react-dnd";
import GridItem from "./GridItem.js";
import { Arrow } from "../../assets/image";

const Grid = () => {
  const [items, setItems] = useState({
    quizname: null,
    timer: null,
    question: null,
  });

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "COMPONENT",
    drop: (item) =>
      setItems((prev) => ({
        ...prev,
        [item.id]: prev[item.id] || { id: item.id, questionData: item.id === "question" ? createEmptyQuestion() : {} },
      })),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const createEmptyQuestion = () => ({
    text: "",
    options: ["", "", "", ""],
    correctAnswer: null,
  });

  const updateQuestion = (key, updatedQuestion) => {
    setItems((prev) => ({
      ...prev,
      [key]: { ...prev[key], questionData: updatedQuestion },
    }));
  };

  const isQuestionComplete = (questionData) =>
    questionData.text &&
    questionData.options.every((option) => option) &&
    questionData.correctAnswer !== null;

  return (
    <div ref={drop} className="grid" style={{ background: isOver ? "#f0f0f0" : "#fff" }}>
      <div className="drop-box-wrapper">
        {["quizname", "timer", "question"].map((key) => (
          <div key={key} className="grid-item">
            {items[key] ? (
              <GridItem
                id={items[key].id}
                questionData={items[key].questionData}
                onUpdateQuestion={(updatedQuestion) => updateQuestion(key, updatedQuestion)}
              />
            ) : (
              <div className="placeholder">{`Add ${key === "quizname" ? "Quiz Name" : key === "timer" ? "Timer" : "Question"}`}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
