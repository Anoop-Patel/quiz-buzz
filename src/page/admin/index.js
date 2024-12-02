import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NavigationDrawer from "./NavigationDrawer.js";
import Grid from "./Grid.js";
import { saveQuizData } from "../../api/function.js"; 
const AdminHome = () => {
  const handleSubmit = async (quizData) => {
   try {
    const savedData = await saveQuizData(quizData); 
    alert('Quiz saved successfully!');
  } catch (error) {
    alert('Failed to save quiz. Please try again.');
  }
  };


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="admin-home">
        <NavigationDrawer />
        <Grid onSubmit={handleSubmit} />
      </div>
    </DndProvider>
  );
};

export default AdminHome;
