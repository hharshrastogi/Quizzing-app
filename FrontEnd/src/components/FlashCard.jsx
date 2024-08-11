import { useState } from 'react';
import './Flashcard.css';

function FlashCard({ flashcard}) {
  const [questionside, setQuestionside] = useState(true);

  return (
    <div
      className={`flashcard ${questionside ? 'flipped' : ''}`}
      onClick={() => setQuestionside(!questionside)}
    >
      <div className="flashcard-front">
        {flashcard.question}
      </div>
      <div className="flashcard-back">
        {flashcard.answer}
      </div>
    </div>
  );
}

export default FlashCard;
