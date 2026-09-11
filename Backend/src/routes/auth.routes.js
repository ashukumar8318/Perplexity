import express from "express"
const authRoutes = express.Router()
import { registerValidator,loginValidator} from "../validator/register.validator.js"
import { registerController,loginController } from "../controller/auth.controller.js"
import { verifyEmailController } from "../controller/auth.controller.js"
import { getMeController } from "../controller/auth.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"




authRoutes.post("/register",registerValidator,registerController)
authRoutes.post("/login",loginValidator,loginController)
authRoutes.get("/verify-email",verifyEmailController)
 authRoutes.get("/get-me",authMiddleware,getMeController)




export default authRoutes