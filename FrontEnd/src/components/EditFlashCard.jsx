import NavBar from './NavBar.jsx'
import axios from 'axios'
import './marginalset.css'
import { useState,useEffect } from 'react'
import './formstyling.css'
import { useParams } from 'react-router-dom'
function EditFlashCard(){
        const [question,setQuestion] = useState("");
        const [answer,setAnswer] = useState("");
        const {flashCardId} = useParams();
        useEffect(() => {
          
          const fetchFlashCardData = async ()=>  {
            try{
                console.log("Hello form fetchflashcarddata");
                    console.log("HEllo");
                    const res = await axios.get(`http://localhost:3000/v1/flash_cards/${flashCardId}`);
                    const flashCard=res.data;
                    console.log(res.data);

                    setQuestion(flashCard.question);
                    setAnswer(flashCard.answer);
                }
            catch(err){
            console.log("Error while fetching data:",err);
                }
            }
          if(flashCardId){
            fetchFlashCardData();
          }
        
        }, [flashCardId]);
        
        async function submitFlashCard(){
            event.preventDefault();
            console.log("Hello");
            var flashCardData = {
                "question":question,
                "answer":answer
            };
            console.log(flashCardData);
            try{
                var res= await axios.post(`http://localhost:3000/v1/edit_flash_cards/${flashCardId}`,flashCardData)
                console.log(res);
            }
            catch (e){
                console.log("Error while submitting data:",e);
            }
        };
       
        return(
        <>
            <NavBar />
            <form className="top-space form-body" >
                <label> Question:
                    <input
                        type="text"
                        value={question}
                        onChange={(e)=>setQuestion(e.target.value)}
                    />
                </label>
                <label> Answer:
                    <input
                        type="text"
                        value={answer}
                        onChange={(e)=>setAnswer(e.target.value)}
                    />
                </label>
                <button onClick={()=> submitFlashCard(flashCardId)}>SUBMIT</button>
            </form>
        </>
    )
    
}

export default EditFlashCard