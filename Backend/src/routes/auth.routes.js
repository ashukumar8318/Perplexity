import express from "express"
const authRoutes = express.Router()
import { registerValidator } from "../validator/register.validator.js"
import { registerController } from "../controller/auth.controller.js"




authRoutes.get("/register",registerValidator,registerController)



export default authRoutes