import express from "express"

const router = express.Router()

router.get("/getList", (req, res) => {
    res.send("hello")
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