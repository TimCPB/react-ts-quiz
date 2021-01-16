import React from "react";
// components
import QuestionCard from "./components/QuestionCard";

const App = () => {
  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button classname="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="Next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
