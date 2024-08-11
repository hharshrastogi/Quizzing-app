import { useState } from 'react';
import './Flashcard.css';

function FlashCard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
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
