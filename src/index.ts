import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app =express(); 
app.use(cors())
app.use(bodyParser.json())
app.listen(3000,()=>{
    console.log("hello world");
    
})