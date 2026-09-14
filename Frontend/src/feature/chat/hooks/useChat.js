import { createSocket } from "../services/chat.socket"

export const useChat = () => {
    const chat = {
        createSocket,
    }

    return { chat }
}