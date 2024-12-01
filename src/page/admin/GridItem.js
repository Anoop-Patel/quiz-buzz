import React from "react";

const GridItem = ({ id, questionData = {}, onUpdateQuestion }) => {
  const componentMap = {
    quizname: (
      <div className="quizname">
        <input
        className="input"
          type="text"
          placeholder="Enter Quiz Name"
          value={questionData?.text || ""}
          onChange={(e) =>
            onUpdateQuestion({ ...questionData, text: e.target.value })
          }
        />
      </div>
    ),
    timer: (
      <div className="timer">
        <input
          type="number"
          className="input"

          placeholder="Enter Timer (in minutes)"
          value={questionData?.value || ""}
          onChange={(e) =>
            onUpdateQuestion({ ...questionData, value: e.target.value })
          }
        />
      </div>
    ),
    question: (
      <div className="question">
        <input
          type="text"
          className="input"

          placeholder="Enter question text"
          value={questionData?.text || ""}
          onChange={(e) =>
            onUpdateQuestion({ ...questionData, text: e.target.value })
          }
        />
        {questionData?.options?.map((option, idx) => (
          <div key={idx} className="option">
            <input
              type="text"
              className="input"

              placeholder={`Option ${idx + 1}`}
              value={option}
              onChange={(e) => {
                const updatedOptions = [...questionData.options];
                updatedOptions[idx] = e.target.value;
                onUpdateQuestion({ ...questionData, options: updatedOptions });
              }}
            />
            <input
              type="radio"
              name={`correctAnswer-${id}`}
              checked={questionData.correctAnswer === idx}
              onChange={() =>
                onUpdateQuestion({ ...questionData, correctAnswer: idx })
              }
            />
            Correct
          </div>
        ))}
      </div>
    ),
  };

  return <div className="grid-item">{componentMap[id]}</div>;
};

export default GridItem;
