const express = require('express');
 const userRouter = require('./Routes/user.router');
const queRouter = require('./Routes/que.router');
const connection = require('./configs/connect');
const app = express();

app.use(express.json())
app.use('/user',userRouter);
app.use('/que' ,queRouter);


app.listen(8066,async()=>{
    await connection();
    console.log("server Start");
})
