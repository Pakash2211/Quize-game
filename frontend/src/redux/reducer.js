
import{LOAD_DATA,SUCCESS_DATA,ERROR_DATA,SUCCESS_LIST,LOAD_LIST,ERROR_LIST,INV_LOADING,INV_DATA,INV_ERROR } from './actionType';

const init = {
    loading : false,
    error : false,
     loading_list : false,
     error_list : false,
     que : [],
     list : [],
     user : {},
     userloading : false,
     usererror : false
}

const reducer = (store = init,action) =>{

   switch(action.type){
      case LOAD_DATA :{
        return {...store,loading:true};
      }

      case SUCCESS_DATA : {
        return {...store,loading:false,error : false,que : action.playload};
      }
      case ERROR_DATA :{
        return {...store,error:true};
      }
      case SUCCESS_LIST : {
        return {...store,loading_list:false,error_list : false,list :action.playload};
      }
      case LOAD_LIST : {
        return {...store,loading_list:true};
      }
      case ERROR_LIST : {
        return {...store,error_list : true};
      }
      case INV_LOADING : {
        return{...store,userloading : true}
      }

      case INV_ERROR : {
        return{
            ...store,usererror : true,userloading : false
        }
      }


      case INV_DATA : {
        return{
            ...store,usererror : false,userloading : false,user : action.playload
        }
      }

      default : {
        return{...store};
      }
   }

}

export{reducer};