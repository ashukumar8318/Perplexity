import jwt from "jsonwebtoken"
export async function authMiddleware(req,res,next){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"Unauthorized",
            success:false,
            err:"Token not found"
        })      
    }
    const decode = jwt.verify(token,process.env.JWT_SECREAT)

    if(!decode){
        return res.status(401).json({
            message:"Unauthorized",
            success:false,
            err:"Token not valid"
        })          
    }
    console.log("decode",decode)
     req.user = decode

    next()

}