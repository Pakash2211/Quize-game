import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {postInv} from '../redux/action'
import axios from 'axios';
const Quize = () =>{
const[currque,setCurrque] = React.useState(0);
const[score,setScore] = React.useState(0);
const[answer,setAnswer] = React.useState(false);
const[que,setQue] = React.useState(0);
const[nav,setNav] = React.useState(false);
const navigate = useNavigate();

const dispatch = useDispatch();
const questions= useSelector((res)=> res.que)


const handleNext = () =>{
    setAnswer(false);
    const next = currque + 1;
    setCurrque(next);
    if(next == questions.length){
        let user = localStorage.getItem('quizeuser');
        let obj = {
            username : user,
            score :score ,
            correct :que ,
            wrong : questions.length - que,
            total :  questions.length 
        }

         dispatch(postInv(obj));
         
        // setTimeout(()=>{
        //     navigate('/result');
        setNav(true);
        // },1000)
       
       
    }
}

 if(nav){
    return <Navigate to = '/result' />
 }
const handlePrevious = () =>{
    setAnswer(true);
    const pre = currque - 1;
    setCurrque(pre);
}

const handleAnswer = (isCorrect) =>{
   if(isCorrect){
       setScore(score + 5);
       setQue(que+1);
   }
   setAnswer(true);
}
    return(
        <div className="app">
        <div className="question-section">
          
          <h4>Scrore : {score}</h4>
          <div className="question-count">
            <span>Question {currque+1} of {questions.length}</span>
          </div>
         <div className="question-text">
           {questions[currque].question}
         </div>
         
        </div>

        <div className="answer-section">
            {
                questions[currque].answerOptions.map((ans,index)=>{
                    return  <button 
                    className={`${answer && ans.isCorrect ? "correct" : "button"}`}
                    key={index} onClick={() => handleAnswer(ans.isCorrect)} disabled = {answer}>
                        {ans.answerText}
                        </button>
                })
            }
           
          
        
        <div className='actions'>
          <button  disabled = {currque <= 0} onClick = {handlePrevious}>Previous</button>
          <button onClick={handleNext} disabled = {!answer}>Next</button>
        </div>
        </div>
        </div>
    )
}

export{Quize};


