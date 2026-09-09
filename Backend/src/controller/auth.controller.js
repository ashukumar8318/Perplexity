import userModel from "../model/user.model.js"
import bcrypt from 'bcrypt'

export async function registerController(){
    const{username,email,password}=req.body

    const isAlreadyExist = await userModel.findOne({
        $or:[
            {email},{username}
        ]
    })

    if(isAlreadyExist){
        if(isAlreadyExist.email === email || isAlreadyExist.uername === username ){
           return res.send(409).json({
                message: "Username or Email is already there ",
                success:false,
                err:"user already exist"

            })
        }

    }

    const hash = await bcrypt.hash(password,10)
    const user = await userModel.create({username,email,password:hash})

    


    


}