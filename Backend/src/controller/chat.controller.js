import chatModel from "../model/chat.model.js"
import mesModel from "../model/message.model.js"
import {genrateResponse,generateTitle} from "../services/ai.services.js"

export async function chatController(req,res){

    const{message} = req.body
    console.log(message)
    const title = await generateTitle(message)
    const result = await genrateResponse(message)

    const chat = await chatModel.create({
        user:req.user.id,
        title:title

    })
    const aiMessage = await mesModel.create({
        chat:chat._id,
        content:result,
        role:"Ai"

    })

   res.status(201).json({
    chat,
    aiMessage
   })
    

}