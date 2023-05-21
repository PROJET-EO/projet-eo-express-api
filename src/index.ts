import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import connect from "./utils/db-connect";

const app =express(); 
app.use(cors())
app.use(bodyParser.json())
app.listen(3000,async()=>{
    console.log("hello world");
    await connect()
})