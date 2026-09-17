import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"
import morgan from "morgan"
import chatRoutes from "./routes/chat.routes.js"

const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))


app.use("/api/auth",authRoutes)
app.use("/api/chat",chatRoutes)
app.get("/",(req,res)=>{
    res.send("working")
})


export default app