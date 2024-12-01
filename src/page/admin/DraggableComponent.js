import React from "react";
import { useDrag } from "react-dnd";

const DraggableComponent = ({ id, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COMPONENT",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
      }}
      className="draggable-component"
    >
      {label}
    </div>
  );
};

export default DraggableComponent;
