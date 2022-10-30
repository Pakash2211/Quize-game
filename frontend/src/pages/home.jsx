import axios from 'axios';
import {FormControl,TextField,Select,InputLabel,MenuItem, Button} from '@mui/material';
 import React from 'react';
 import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import{postData} from '../redux/action';
const Home = () =>{
  const[detail,setDetails] = React.useState({
     category : "",
     limit : "",
     level : "",
  })
   const dispatch = useDispatch();
  let {category,limit,level} = detail;
  const [user,setUser] = React.useState("");
  const[nav,setNav] = React.useState(false);
  
  function handleChange(e){
     let{value,name} = e.target;
      if(name === 'user'){
        setUser(value);
      }else{
        setDetails({...detail,[name] : value});
      }
    
  }
 
 function handleClick(){
    if(user.length  == 0){
        alert("Please Enter Username");
    }else{
        localStorage.setItem('quizeuser',user);
        dispatch(postData(detail));
        setTimeout(()=>{
            setNav(true);
        },1000)
        
    }
     
 }
 

   if(nav){
    return (<Navigate to="/quize"/>);
   }


    return(
        <> 
        <FormControl style={{width : "500px"}}>
        <FormControl>
       <TextField fullWidth label="Entry Your Name" id="fullWidth"  value={user} onChange={handleChange} name = "user"/>
      </FormControl>
      <FormControl fullWidth style={{marginTop : "10px"}}>
      <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="select Category"
        name = "category"
        onChange={handleChange}
      >
        <MenuItem value="Sports">Sports</MenuItem>
        <MenuItem value="History">History</MenuItem>
      </Select>
    </FormControl>
    <FormControl fullWidth style={{marginTop : "10px"}}>
      <InputLabel id="select-level">Select level</InputLabel>
      <Select
        labelId="select-level"
        id="select-level"
        value={level}
        label="Select level"
        name = "level"
        onChange={handleChange}
      >
        <MenuItem value="easy">Easy</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="hard">Hard</MenuItem>
      </Select>
    </FormControl>
    <FormControl fullWidth style={{marginTop : "10px"}}>
      <InputLabel id="select-que">Choose number of Questions</InputLabel>
      <Select
        labelId="select-que"
        id="select-que"
        value={limit}
        label="Number of Questions"
        name = "limit"
        onChange={handleChange}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>
    </FormControl>
    <Button variant="contained" disableElevation  style={{marginTop : "10px"}} onClick={handleClick}>
  START QUIZE
</Button>
    </FormControl>
    </>
    )
}

export{Home}