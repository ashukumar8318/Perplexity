import userModel from "../model/user.model.js"
import bcrypt from 'bcrypt'
import {sendEmail} from "../services/mail.services.js"
import jwt from "jsonwebtoken"

export async function registerController(req,res,next){
    const{username,email,password}=req.body

    const isAlreadyExist = await userModel.findOne({
        $or:[
            {email},{username}
        ]
    })

    if(isAlreadyExist){
        if(isAlreadyExist.email === email || isAlreadyExist.uername === username ){
           return res.status(409).json({
                message: "Username or Email is already there ",
                success:false,
                err:"user already exist"

            })
        }

    }

    const hash = await bcrypt.hash(password,10)
    const user = await userModel.create({username,email,password:hash})
    const emailVerificationToken = jwt.sign({
        email:user.email
    },process.env.JWT_SECREAT)



    await sendEmail({
        to:email,
        subject:"Verification Email",
        html:`<p>Hi ${username},</p>
         <p>Thank you for registering with us. Please click the link below to verify your email address.</p>
          <!-- <a href="http://localhost:3000/verify-email?token=${emailVerificationToken}">Verify Email</a> -->
         <a href="https://organic-bassoon-97wrxv7jvxgphr96-3000.app.github.dev/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>
         <p>Best regards,</p>
         <p>Perplexity Team</p>
        `

    })

    return res.status(200).json({
        message:"User registered Succesfully",
        success:true,
        user
    })



}

export async function verifyEmailController(req,res){
    const{token} = req.query

    const decode = jwt.verify(token,process.env.JWT_SECREAT)
    const user = await userModel.findOne({email:decode.email})

    if(!user){
       return res.status(400).json({
            message:"Invalid Token",
            success:false,
            err:"User not found"
        })
    }

    user.isVerified = true

    await user.save()

    const html = 
    `<h1>Email Verified Successfully</h1>
        <p>Your email has been verified.</p>
        <p>You can now log in to your account.</p>
        `

    res.send(html)

}

export async function loginController(req,res){
    const{email,password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message:"Invalid email",
            success:false,
            err:"Email not correct"
        })
    }

    //const hash = await bcrypt.hash(password,10)

    const passwordCheck = await bcrypt.compare(password,user.password)

    if(!passwordCheck){
        return res.status(400).json({
            message:"Invalid password",
            success:false,
            err:"Password not correct"
        })
    }

    if(!user.isVerified){
        return res.status(400).json({
            message:"Email not verified",
            success:false,
            err:"Email not verified"
        })
    }

    const token = jwt.sign({
        id:user._id,
        email:user.email
    }, process.env.JWT_SECREAT,{
        expiresIn:"5d"
    })

    return res.status(200).json({
        message:"Login successful",
        success:true,
        user:{
            email:user.email,         
            username:user.username
        }

    })  
}