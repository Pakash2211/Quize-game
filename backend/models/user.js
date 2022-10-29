const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username : String,
    score : Number,
    correct : Number,
    wrong : Number,
    total : Number
})

const usermodel = mongoose.model('user',userSchema);


module.exports = usermodel;