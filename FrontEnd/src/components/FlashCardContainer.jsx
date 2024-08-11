import { useState } from 'react';
import Flashcard from './FlashCard.jsx';
import './FlashcardContainer.css';

const flashcardsData = [
  { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
  { question: 'What is a Component?', answer: 'Reusable piece of UI in React.' },
  { question: 'What is JSX?', answer: 'A syntax extension for JavaScript, used in React.' },
  // Add more flashcards here
];

function FlashcardContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcardsData.length) % flashcardsData.length);
  };

  return (
    <div className="flashcard-container">
      <Flashcard flashcard={flashcardsData[currentIndex]} />
      <div className="navigation">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default FlashcardContainer;
