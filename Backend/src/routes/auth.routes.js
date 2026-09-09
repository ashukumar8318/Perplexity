import express from "express"
const authRoutes = express.Router()
import { registerValidator } from "../validator/register.validator.js"
import { registerController } from "../controller/auth.controller.js"




authRoutes.get("/register",registerValidator,(req,res)=>{
    res.send("register routes")
})



export default authRoutes