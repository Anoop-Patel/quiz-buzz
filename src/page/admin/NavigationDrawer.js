import React from "react";
import DraggableComponent from "./DraggableComponent";

const NavigationDrawer = () => {
  const components = [
    { id: "quizname", label: "Quiz Name" },
    { id: "timer", label: "Timer" },
    { id: "question", label: "Add Question " },
  ];

  return (
    <div className="navigation-drawer">
      <h3>Components</h3>
      <div className="item"> 
      {components.map((comp) => (
        <DraggableComponent key={comp.id} id={comp.id} label={comp.label} />
      ))}
      </div>
    </div>
  );
};

export default NavigationDrawer;
