import bodyParser from "body-parser"
import express from "express"
import dotenv from "dotenv"
import toDoListRouter from "./routes/toDoListRouter.js"

dotenv.config()

const port = process.env.PORT
const app = express();

app.use(bodyParser.json());
app.use(toDoListRouter);

app.listen(port, () => {
    console.log(`Serveur ouvert sur le port: ${port}`)
})