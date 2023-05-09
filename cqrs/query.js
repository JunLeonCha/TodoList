import Todo from "../models/toDoModel"

export const getTodoList = async (req, res) => {
    return res.json(Todo.find())
}

export const GetTodoById = async (req, res) => {
    return res.json(Todo.findById(req.params.id))
}

