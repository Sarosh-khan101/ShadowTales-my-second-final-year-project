import { useState, useEffect } from "react";
import axios from "axios"
import "./Game.css"

export default function Game(){

const [questions ,setQuestions] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [showScare, setShowScare] = useState(false);


useEffect(()=>{
  const getData = async ()=>{
    try{
    const response = await axios.get('http://localhost:5000/api/questions');
    setQuestions(response.data);
    }catch(err){
      console.log(err);
    }
  };
  getData();
},
[]);

const handleAnswer =(selectedOption)=>{
 const currentQuestion = questions[currentIndex];
 if(selectedOption === currentQuestion.answer){
      if(currentIndex < questions.length-1){
        setCurrentIndex(currentIndex+1);
      }
 else{
  alert("You Won");
 }
} else {
setShowScare(true);
const audio = new Audio("/scream.mp3");
audio.play();

setTimeout(()=>{
  setShowScare(false);
  setCurrentIndex(0);
},2500);
}
};

   return(
     <>

  <div className="game-container">
    
    
    <div className="score-board">
      <h1>Shadow Tales - Score: {currentIndex}</h1>
    </div>

   
    {showScare === true && (
      <div className="scare-overlay">
        <img src="/clown-scare.gif" alt="Ghost" className="clown-gif" />
      </div>
    )}

   
    {questions.length > 0 ? (
      <div className="quiz-container">
      
        <h2 className="question-text">
          {questions[currentIndex].question}
        </h2>

       
        <div className="options-container">
          <button onClick={() => handleAnswer(questions[currentIndex].options[0])}>
            {questions[currentIndex].options[0]}
          </button>

          <button onClick={() => handleAnswer(questions[currentIndex].options[1])}>
            {questions[currentIndex].options[1]}
          </button>

          <button onClick={() => handleAnswer(questions[currentIndex].options[2])}>
            {questions[currentIndex].options[2]}
          </button>

          <button onClick={() => handleAnswer(questions[currentIndex].options[3])}>
            {questions[currentIndex].options[3]}
          </button>
        </div>
      </div>
    ) : (
      <h2>Loading horror questions...</h2>
    )}

  </div>

     </>
   );
}