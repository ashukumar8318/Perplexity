import { createSocket } from "../services/chat.socket"

export const useChat = () => {
    return {
        createSocket
    }
}