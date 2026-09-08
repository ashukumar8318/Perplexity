import mongoose from "mongoose";
import chatModel from "./chat.model";

const mesSchema = new mongoose.Schema({
    chat:{
         type: Schema.Types.ObjectId,
         ref:"Chat"  
    },
    content:{
        type:String,
        require:true
    },
    role:{
        type:String,
        required:true,
        enum:["user","Ai"]
    }

},{
    mestamp:true
})

const mesModel = mongoose.model("Message",mesSchema)

export default mesModel