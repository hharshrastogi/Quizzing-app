import NavBar from './NavBar.jsx'
import axios from 'axios'
import './marginalset.css'
import { useState } from 'react'
import './formstyling.css'
function CreateFlashCard(){
        const [question,setQuestion] = useState("");
        const [answer,setAnswer] = useState("");
       
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
                <button onClick={()=> submitFlashCard()}>SUBMIT</button>
            </form>
        </>
    )
    async function submitFlashCard(){
        event.preventDefault();
        setAnswer("");
        setQuestion("");
        console.log("Hello");
        var flashCardData = {
            "question":question,
            "answer":answer
        }
        console.log(flashCardData);
        var res= await axios.post('http://localhost:3000/v1/flash_cards',flashCardData)
        console.log(res);
    }
}

export default CreateFlashCard