import {useState } from 'react';
import './Flashcard.css';
function FlashCard({flashCard, questionSide, setQuestionSide }) {
  

  
  return (

    
    <div
      className={`flashcard ${questionSide ? 'flipped' : ''}`}
      onClick={() => setQuestionSide(!questionSide)}
    >
      <div className="flashcard-front">
        {flashCard.question}
      </div>
      <div className="flashcard-back">
        {flashCard.answer}
      </div>
    </div>
  );
}

export default FlashCard;
