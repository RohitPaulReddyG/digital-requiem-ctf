import React, { useState } from 'react';
import '../styles/Question.css';

function Question({ question, showAnswer }) {
  const [showHint, setShowHint] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const checkAnswer = () => {
    const correct = userAnswer.trim().toLowerCase() === question.answer.toLowerCase();
    setIsCorrect(correct);
  };

  return (
    <div className="question-card">
      <h3>Q{question.id}. {question.question}</h3>
      
      <div className="hint-section">
        <button 
          className="hint-button" 
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
        {showHint && <p className="hint"><strong>Hint:</strong> {question.hint}</p>}
      </div>
      
      <div className="answer-section">
        <input
          type="text"
          placeholder="Enter your answer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className={isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}
        />
        <button onClick={checkAnswer}>Check</button>
        
        {isCorrect === true && <p className="feedback correct">Correct!</p>}
        {isCorrect === false && <p className="feedback incorrect">Try again!</p>}
        
        {showAnswer && (
          <div className="solution">
            <p><strong>Answer:</strong> {question.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;