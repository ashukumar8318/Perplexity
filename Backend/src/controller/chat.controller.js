import {genrateResponse} from "../services/ai.services.js"

export async function chatController(req,res){

    const{message} = req.body
    console.log(message)


    const result = await genrateResponse(message)

    res.json({
        message:result
    })
    

}