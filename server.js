const express = require('express');
const env = require('dotenv');
env.config();
const app = express();
const port = process.env.PORT;
const connectDB = require('./DB/connectDB');
connectDB();
const authRouter = require('./VIEW/auth');

app.use(express.json());
app.use(authRouter);

app.get('/', (req,res)=>{
    res.send("Auth, token, protect and form handling");
});

app.all("/*path", (req,res)=>{
    res.send('Sorry, this path does not exist');
});

app.listen(port, ()=>{
    console.log('App is listening');
})