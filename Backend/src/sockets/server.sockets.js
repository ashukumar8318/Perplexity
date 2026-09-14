export default function initSocket(io) {

    io.on("connection", (socket) => {

        console.log(` New client connected: ${socket.id}`);

        socket.on("chatMessage", (msg) => {
            console.log(` Message from ${socket.id}: ${msg}`);

            io.emit("chatMessage", msg);
        });

        socket.on("disconnect", () => {
            console.log(` Client disconnected: ${socket.id}`);
        });

    });

    console.log(" Socket.IO server initialized");
}