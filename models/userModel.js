import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema({
    username: { type: String }
})

export default mongoose.model('user', UserSchema)