const mongoose = require('mongoose');

const connection = async() =>{


    return new Promise((resolve,reject)=>{
        mongoose.connect('mongodb://127.0.0.1:27017/quizapp').then(()=>{
            console.log('connected')
            resolve()
        }).catch((err)=>{
            console.log(err)
            reject()
        })
       })


}

module.exports = connection;