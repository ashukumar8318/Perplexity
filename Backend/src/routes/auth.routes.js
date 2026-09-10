import express from "express"
const authRoutes = express.Router()
import { registerValidator } from "../validator/register.validator.js"
import { registerController } from "../controller/auth.controller.js"
import { verifyEmailController } from "../controller/auth.controller.js"




authRoutes.post("/register",registerValidator,registerController)
authRoutes.get("/verify-email",verifyEmailController)



export default authRoutes