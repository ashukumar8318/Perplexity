import dotenv from "dotenv";
dotenv.config()
import app from "./src/app.js"
import { createServer } from "http";
import { Server } from "socket.io";
import initSocket from "./src/sockets/server.sockets.js";
import connectToDb from "./src/config/database.js"
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true,
    },
});

initSocket(io);


connectToDb()

// app.listen(3000,()=>{
//     console.log("server is working on port 3000")
// })
httpServer.listen(3000, () => {
    console.log("Server running on port 3000");
});

