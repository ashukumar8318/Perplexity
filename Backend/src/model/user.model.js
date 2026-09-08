import mongoose, { Schema } from "mongoose"
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username must be unique"],
        required:[true,"username is required"],
    },
    email:{
         type:String,
        unique:[true,"email must be unique"],
        required:[true,"email is required"],
    },
    password:{
        type:String,
         required:[true,"password is required"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },


},{
    timestamps:true
})

const userModel =  mongoose.model("User", userSchema)

export default userModel