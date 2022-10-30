import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allUsers } from "../redux/action";
import React from 'react';

const Dashboard = () =>{
    const list = useSelector((res)=> res.list);
      console.log(list);
      const dispatch = useDispatch();

    React.useEffect(()=>{
         dispatch(allUsers()); 
    },[])

   const navigate = useNavigate(); 
    const handleHome = () =>{
        navigate('/');
    }
    return(
        <div className="dashboard">
        <h1>Dashboard</h1>
           <table>
             <thead>
                <tr>
                <th>User Name </th>
                <th>Score</th>
                </tr>
             </thead>
             <tbody>
              {
                  list.map((res)=>{
                    return(
                        <tr>
                        <td>{res.username}</td>
                        <td>{res.score}</td>
                    </tr>
                    )
                  })
              }  
             
             </tbody>
           </table>
         <button onClick={handleHome} className = "homebtn">Go to Home</button>
        </div>
      
    )
}

export{Dashboard};