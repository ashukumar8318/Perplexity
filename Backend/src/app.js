import express from "express"
import cookiParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"

const app = express()

app.use(express.json())
app.use(cookiParser())

app.use("/api/auth",authRoutes)
app.get("/",(req,res)=>{
    res.send("working")
})

export default app