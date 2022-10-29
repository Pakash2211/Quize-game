const mongoose = require('mongoose');


const queSchema = new mongoose.Schema({
      
    question : String,
    answerOptions : [{
        answerText : String,
        isCorrect : Boolean,
    }],
    level : String,
    category : String
    

})

const queModel = mongoose.model("que", queSchema);

module.exports = queModel;