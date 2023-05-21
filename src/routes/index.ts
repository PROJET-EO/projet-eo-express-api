import { Router } from "express";

const getHealth = Router();

getHealth.get("/",function(req,res){
    res.send('Hello world');
    console.log("jolll");
    
})

module.exports = getHealth;