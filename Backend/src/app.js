import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"
import morgan from "morgan"



const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.get("/",(req,res)=>{
    res.send("working")
})
app.use(morgan("dev"))

export default app