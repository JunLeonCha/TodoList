import User from "../models/userModel"
import Todo from "../models/toDoModel"

const newUserAndNewTodo = async (name, todoData) => {
    const todo = new Todo(todoData)
    const user = new User(name)
    await todo.save()
    await user.save()
}