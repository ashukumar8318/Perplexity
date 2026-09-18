import chatModel from "../model/chat.model.js"
import mesModel from "../model/message.model.js"
import {genrateResponse,generateTitle} from "../services/ai.services.js"

// export async function chatController(req,res){

//     const{message} = req.body
//     console.log(message)
//     const title = await generateTitle(message)
//     const result = await genrateResponse(message)

//     const chat = await chatModel.create({
//         user:req.user.id,
//         title:title

//     })
//     const aiMessage = await mesModel.create({
//         chat:chat._id,
//         content:result,
//         role:"Ai"

//     })

//    res.status(201).json({
//     chat,
//     aiMessage
//    })
    

// }

export async function sendMessage(req, res) {

    const { message, chat: chatid } = req.body;

    let chat = null;

    // New chat
    if (!chatid) {

        const title = await generateTitle(message);

        chat = await chatModel.create({
            user: req.user.id,
            title: title
        });

    } else {

        // Existing chat
        chat = await chatModel.findOne({
            _id: chatid,
            user: req.user.id
        });

    }

    // Save user's message
    const userMessage = await mesModel.create({
        chat: chat._id,
        content: message,
        role: "user"
    });

    // Get all messages for this chat
    const allMessage = await mesModel.find({
        chat: chat._id
    });

    // Generate AI response
    const result = await genrateResponse(allMessage);

    const aiMessage = await mesModel.create({
        chat:chatid,
        content: result,
        role:"Ai"

    })

    console.log(result);

    return res.status(200).json({
        success: true,
        chat,
        result,
        userMessage,
        aiMessage
        
    });
}

export async function getAllchat(req,res){
   const user = req.user.id

    const allChat =  await chatModel.find({
        user:user
    })

    res.status(200).json({
        message:"Chat retrived successfully",
        allChat
    })

}


export async function getAllMessage(req,res){
    const {chatId} = req.params
    
    const chat = await chatModel.findOne({
        _id:chatId,
        user:req.user.id,

    })

    if(!chat){
        return res.status(400).json({
            message:"Chat not found"
        })
    }

    const message = await mesModel.find({
        chat:chatId
    })

    if(!message){
        return res.status(400).json({
            message:"message not found"
        })

    }

    return res.status(200).json({
        message:"Message reterived succesfully",
        message
    })





    
}

   



