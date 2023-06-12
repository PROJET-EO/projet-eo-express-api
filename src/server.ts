require("dotenv-flow").config();
import express from "express";
import mongoose from "mongoose";
import yaml from "yamljs";
import bodyParser from "body-parser";
import authRoutes from "./api/routes/AuthRoutes";
import userRoutes from "./api/routes/UserRoutes"
import projectRoutes  from './api/routes/ProjectRoutes'
import commentRoutes from './api/routes/CommentRoutes'
import cors from "cors"
const swaggerDefinition = yaml.load("./src/config/api.yml");
const swaggerUi = require("swagger-ui-express");


const app: express.Application = express();

app.use(cors())
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
app.use(bodyParser.json());
app.use("/api/user", authRoutes);
app.use("/api",userRoutes)
app.use("/api",projectRoutes)
app.use("/api/project",commentRoutes)

mongoose
  .connect(process.env.DBHOST!)
  .catch((error) => console.log("Error connecting to MongoDb: " + error));
mongoose.connection.once("open", () =>
  console.log("Connected succesfully to MongoDb!")
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log("Server is running on port: " + PORT);
});

module.exports = app;
