import React, { useState } from "react";
import QuizHome from "./QuizHome";
import QuizPage from "./QuizPage";
import ResultPage from "./ResultPage";

const UserHome = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="user-wrapper">
      {currentPage === "home" && <QuizHome onOptionClick={() => handleNavigation("quiz")} />}
      {currentPage === "quiz" && <QuizPage onSubmit={() => handleNavigation("result")} />}
      {currentPage === "result" && <ResultPage />}
    </div>
  );
};

export default UserHome;
