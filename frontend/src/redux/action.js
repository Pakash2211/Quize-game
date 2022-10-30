import{LOAD_DATA,SUCCESS_DATA,ERROR_DATA,SUCCESS_LIST,LOAD_LIST,ERROR_LIST,INV_LOADING,INV_DATA,INV_ERROR} from './actionType';
import axios from 'axios';

const loading = () =>{
    return{
        type : LOAD_DATA
    }
   
}


const error = () =>{
    return{
        type : ERROR_DATA
    }
   
}

const queData = (data) =>{
    return{
        type : SUCCESS_DATA,
        playload : data
    }
   

}
const listData = (data) =>{
    return{
        type : SUCCESS_LIST,
        playload : data
    }
    

}

const listloading = () =>{
    return{
        type : LOAD_LIST
    }
   
}


const listerror = () =>{
    return{
        type : ERROR_LIST
    }
   
}

const invUser = (data) =>{
    return{
        type :INV_DATA,
        playload : data
    }
}


const invError = () =>{
    return{
        type :INV_ERROR
        
    }
}

const invLoading = () =>{
    return{
        type :INV_LOADING
    }
}

export const postData = (detail) =>(dispatch)=>{
    dispatch(loading());
    axios
    .post("http://localhost:8066/que", {
       ...detail
    })
    .then((r) => {
        dispatch(queData(r.data.data));
    }).catch(()=>{
        dispatch(error());
    })

}


export const postInv = (detail) =>(dispatch)=>{
    dispatch(invLoading());
    axios
    .post("http://localhost:8066/user/register", {
       ...detail
    })
    .then((r) => {
        dispatch(invUser(r.data.data));
    }).catch(()=>{
        dispatch(invError());
    })

}



export const allUsers = () =>(dispatch) =>{

    dispatch(listloading());
    axios.get('http://localhost:8066/user/all').
    then((r) => dispatch(listData(r.data.data))
    ).catch((r)=> dispatch(listerror()))
}










