import express from "express"
const chatRoutes = express.Router()
import { authMiddleware } from "../middleware/auth.middleware.js"
import { chatController } from "../controller/chat.controller.js";





chatRoutes.post("/message",authMiddleware,chatController)



export default chatRoutes