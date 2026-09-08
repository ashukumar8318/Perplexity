import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

async function connectToDb(){
   try{
     await mongoose.connect(process.env.MONGO_URI) 
    console.log("Database connected successfully")
   }
   catch(err){
    console.log(err)
   }

}

export default connectToDb