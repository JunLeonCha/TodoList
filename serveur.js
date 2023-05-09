import bodyParser from "body-parser"
import express from "express"
import dotenv from "dotenv"
import toDoListRouter from "./routes/toDoListRoutes.js"
import mongoose from "mongoose"
import cors from "cors"

dotenv.config()

const port = process.env.PORT
const app = express();

mongoose.connect("mongodb://root:123456@127.0.0.1:27017/todolist");

app.use(cors())
app.use(bodyParser.json());
app.use(toDoListRouter);

app.listen(port, () => {
    console.log(`Serveur ouvert sur le port: ${port}`)
})