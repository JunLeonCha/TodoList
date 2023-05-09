import mongoose from 'mongoose'
import UserSchema from './userModel';
const { Schema } = mongoose

const toDoModel = new Schema({
    name: { type: String },
    date: { type: Date },
    user: { type: UserSchema }
})

export default mongoose.model('todo', toDoModel)