import React from "react";

const QuestionDisplay = ({ question, onSpeak }) => {
  return (
    <div className="question-display">
      <p>{question}</p>
      <button onClick={() => onSpeak(question)}>Hear Question</button>
    </div>
  );
};

export default QuestionDisplay;
