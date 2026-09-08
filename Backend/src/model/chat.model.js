import mongoose from mongoose
import userModel from "./user.model"

const chatSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    title:{
        type: String,
        required:true

    }

},{
    timestamp:true
})

const chatModel =  mongoose.model("Chat", chatSchema)

export default chatModel