import { io } from "socket.io-client";

export function createSocket() {
    const socket = io("http://localhost:3000", {
        withCredentials: true,
    });

    socket.on("connect", () => {
        console.log(" Connected to Socket.IO");
        console.log("Socket ID:", socket.id);
    });

    socket.on("connect_error", (error) => {
        console.log(" Connection error:", error.message);
    });

    return socket;
}