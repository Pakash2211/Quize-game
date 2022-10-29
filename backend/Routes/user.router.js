const {Router} = require('express');
const mongoose  = require('mongoose');
const usermodel = require('../models/user');
const userRouter = Router();

userRouter.post('/register',async(req,res)=>{
  try {
     let user =  await usermodel.create(req.body);
    res.send({
        massage : "register sucess",
        status : 200,
        data : user
    })
  } catch (error) {
    res.send({
      massage : error.massage
    }) 
  }
     
})


userRouter.get('/all',async(req,res)=>{

  try {
    let all = await usermodel.find();

    res.send({
      data : all,
      status : 200,
    })
  } catch (error) {
    res.send({
      status : 404,
      Response : false
    })
  }
  
})




module.exports = userRouter;