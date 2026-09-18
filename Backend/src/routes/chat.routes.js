import express from "express"
const chatRoutes = express.Router()
import { authMiddleware } from "../middleware/auth.middleware.js"
import { sendMessage,getAllMessage,getAllchat } from "../controller/chat.controller.js";





chatRoutes.post("/message",authMiddleware,sendMessage)
chatRoutes.get("/",authMiddleware,getAllchat)
chatRoutes.get("/:chatId/message",authMiddleware,getAllMessage)




export default chatRoutes