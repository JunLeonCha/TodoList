import express from "express"
import { getTodoList } from "../cqrs/query";

const router = express.Router()

router.get("/getList", getTodoList => {
    
});
router.post("/addTodo", (req, res) => {
    res.send("")
})

router.delete("/deleteTodo", (req, res) => {
    res.send
})

router.put("/updateTodo", (req, res) => {
    res.send("")
})

export default router;