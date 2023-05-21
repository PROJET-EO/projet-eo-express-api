import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import connect from "./utils/db-connect";
import configs from "./configs";
import { config } from "dotenv";
import routes from "./routes";

const app =express(); 
const port :number = configs.port
app.use(cors())
app.use(bodyParser.json())
app.listen(port,async()=>{
    await connect()
    routes(app)
})