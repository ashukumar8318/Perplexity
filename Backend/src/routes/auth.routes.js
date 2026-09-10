import express from "express"
const authRoutes = express.Router()
import { registerValidator } from "../validator/register.validator.js"
import { registerController } from "../controller/auth.controller.js"




authRoutes.post("/register",registerValidator,registerController)



export default authRoutes