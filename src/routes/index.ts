import { Express, Request, Response } from "express";
const healthroute=(app : Express)=>{
    app.get('/health',(req : Request,res:Response)=> res.sendStatus(200))
}
export default healthroute;