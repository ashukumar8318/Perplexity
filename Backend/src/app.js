import express from "express"
import cookiParser from "cookie-parser"

const app = express()

app.use(express.json())

app.use(cookiParser())


app.get("/",(req,res)=>{
    res.send("working")
})

export default app