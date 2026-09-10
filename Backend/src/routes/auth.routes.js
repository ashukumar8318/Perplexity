import express from "express"
const authRoutes = express.Router()
import { registerValidator,loginValidator} from "../validator/register.validator.js"
import { registerController,loginController } from "../controller/auth.controller.js"
import { verifyEmailController } from "../controller/auth.controller.js"




authRoutes.post("/register",registerValidator,registerController)
authRoutes.post("/login",loginValidator,loginController)
authRoutes.get("/verify-email",verifyEmailController)




export default authRoutes