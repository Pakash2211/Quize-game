import React, { useTransition } from 'react'
import { useNavigate } from 'react-router-dom';
import{useSelector} from 'react-redux';
  



const Result = () =>{

    const user = useSelector((res)=> res.user);
    console.log(user);
    const navigate = useNavigate();
    function handleTop() {
     navigate('/dashboard')
  }
    return(
        <div className='score-section'>
            <h2>Completed!</h2>
            <h2>hello {user.username}</h2>
            <h4>Total Score {user.score}/{user.total*5}</h4>
            <h4>your Correct Question {user.correct} out of {user.total}</h4>
            <button onClick={handleTop}>Go to Dashboard</button>
        </div>
    )
}

export{Result};