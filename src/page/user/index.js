import React, { useEffect, useState } from "react";
import QuizHome from "./QuizHome";
import QuizPage from "./QuizPage";
import ResultPage from "./ResultPage";
import { fetchAllQuizData } from "../../api/function";

const UserHome = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [quizData, setAllQuizData] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResults, setQuizResults] = useState({ correct: 0, incorrect: 0 });

  const handleNavigation = (page, quiz = null, results = null) => {
    setCurrentPage(page);
    if (quiz) {
      setSelectedQuiz(quiz);
    }
    if (results) {
      setQuizResults(results);
    }
  };

  const getAllQuiz = async () => {
    try {
      const res = await fetchAllQuizData();
      setAllQuizData(res);
    } catch (error) {
      console.error("Failed to fetch quiz data", error);
    }
  };

  useEffect(() => {
    getAllQuiz();
  }, []);

  return (
    <div className="user-wrapper">
      {currentPage === "home" && (
        <QuizHome
          onOptionClick={(quiz) => handleNavigation("quiz", quiz)}
          data={quizData}
        />
      )}
      {currentPage === "quiz" && selectedQuiz && (
        <QuizPage
          quiz={selectedQuiz}
          onSubmit={(correct, incorrect) =>
            handleNavigation("result", null, { correct, incorrect })
          }
        />
      )}
      {currentPage === "result" && <ResultPage results={quizResults} />}
    </div>
  );
};

export default UserHome;
