import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"
import { testAi } from "./services/ai.services.js"


const app = express()
testAi()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.get("/",(req,res)=>{
    res.send("working")
})

export default app