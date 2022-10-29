const {Router} = require('express');
const { default: mongoose } = require('mongoose');
 const queModel = require('../models/que');



const queRouter = Router();


queRouter.post('/' ,async (req,res)=>{
try {

  let obj = req.body;
  var limit = 6;

 for(let x in obj){
     if(x == 'limit'){
        limit = obj[x];
        delete obj[x]
     }else if(obj[x] == ""){
        delete obj[x]
     }
 }
     if(limit == ""){
      limit = 6;
     }
  
  
      let data =  await queModel.find({...obj}).limit(limit); 
     

     
 res.send({
  data:data,
  limit : limit
 })




  
} catch (error) {
  res.send({
    error : true,
    Response : 400
  })
}   
})





module.exports = queRouter;