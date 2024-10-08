import { useEffect, useState } from 'react';
import axios from 'axios'
import Flashcard from './FlashCard.jsx';
import './FlashcardContainer.css';
import { Link, NavLink } from 'react-router-dom';



function FlashcardContainer() {
  const [flashCardId,setFlashCardId] = useState(22);
  const [previousBtnEnabled, setPreviousBtnEnabled] = useState(true);
  const [flashCard,setFlashCard] = useState({});
  const [questionSide,setQuestionSide] = useState(true);
  const [nextBtnEnabled,setNextBtnEnabled] = useState(true);
  useEffect(() => {
    const fetchFlashCard = async () => {
      try {
        const res = await axios.get(`https://quizzing-app.onrender.com/v1/flash_cards/${flashCardId}`);
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

  const handleNext = async (flashCardId) => {
  
    setFlashCardId((prevId) => prevId + 1);
    if(!(await axios.get(`https://quizzing-app.onrender.com/v1/check_flash_card/:${parseInt(flashCardId + 1)}`))){
      setNextBtnEnabled(false);
    }
  };

  const handlePrevious = () => {
    // Prevent the flashCardId from going below 1
    if (flashCardId > 1) {
      setFlashCardId((prevId) => prevId - 1);
      setNextBtnEnabled(true)
    }else{
      setPreviousBtnEnabled(false)
    }
  };

  const handledeleting = async (flashCardId) =>{
    
    var res = await axios.delete(`https://quizzing-app.onrender.com/v1/flash_cards/delete/${flashCardId}`)
    console.log(res);
  };

  
  
  return (
    <div className="flashcard-container">
      <Flashcard flashCard={flashCard}
                  questionSide={questionSide}
                  setQuestionSide={setQuestionSide}
      />
      <div className="navigation">
      {previousBtnEnabled && <button className="btn-style" onClick={()=>handlePrevious()}>Previous</button>}
      <NavLink to={`/edit-flashcards/${flashCardId}`}><button className="btn-style">Edit</button></NavLink>
      <button className="btn-style" onClick={()=> handledeleting(flashCardId)}>Delete</button>
      {nextBtnEnabled && <button className="btn-style" onClick={()=>handleNext(flashCardId)}>Next</button>}

      </div>
    </div>
  );
}

export default FlashcardContainer;
