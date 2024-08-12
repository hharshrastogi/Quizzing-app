import { useEffect, useState } from 'react';
import axios from 'axios'
import Flashcard from './FlashCard.jsx';
import './FlashcardContainer.css';
import { Link, NavLink } from 'react-router-dom';



function FlashcardContainer() {
  const [flashCardId,setFlashCardId] = useState(17);
  const [previousBtnEnabled, setPreviousBtnEnabled] = useState(true);
  const [flashCard,setFlashCard] = useState({});
  const [questionSide,setQuestionSide] = useState(true);
  useEffect(() => {
    const fetchFlashCard = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/v1/flash_cards/${flashCardId}`);
        setFlashCard(res.data);
      } catch (error) {
        console.error("Error fetching the flashcard data:", error);
      }
    };

    fetchFlashCard();

    if (flashCardId > 1) {
      setPreviousBtnEnabled(true);
    } else {
      setPreviousBtnEnabled(false);
    }

    setQuestionSide(false)
  }, [flashCardId]);

  const handleNext = () => {
    setFlashCardId((prevId) => prevId + 1);
  };

  const handlePrevious = () => {
    // Prevent the flashCardId from going below 1
    if (flashCardId > 1) {
      setFlashCardId((prevId) => prevId - 1);
    }
  };

  
  
  return (
    <div className="flashcard-container">
      <Flashcard flashCard={flashCard}
                  questionSide={questionSide}
                  setQuestionSide={setQuestionSide}
      />
      <div className="navigation">
      {previousBtnEnabled && <button onClick={()=>handlePrevious()}>Previous</button>}
        <button onClick={()=>handleNext()}>Next</button>
        <NavLink to={`/edit-flashcards/${flashCardId}`}><button>Edit</button></NavLink>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default FlashcardContainer;
