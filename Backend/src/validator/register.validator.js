import {body,validationResult} from "express-validator"

const validate = (req,res,next)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({
             errors: error.array() 
        })

        

    }
    next()
}

 export const registerValidator = [

    body("username")
    .trim()
    .notEmpty("username is required")
    .isLength({min:6, max:30}).withMessage("username must in between 6 to 30 character")
    .matches(/^[a-zA-Z0-9]+$/).withMessage("username must be alphanumeric"),

    body("email")
    .trim()
    .notEmpty("email is required")
    .isEmail().withMessage("invalid email address"),

    body("password")
    .trim()
    .notEmpty("password is required")
    .isLength({min:6, max:100}).withMessage("password must be between 6 and 100 characters"),

    validate

]

export const loginValidator = [
    body("email")
    .trim()
    .notEmpty("email is required")
    .isEmail().withMessage("invalid email address"),
    body("password")
    .trim()
    .notEmpty("password is required"),

    body("password")
    .trim()
    .notEmpty("password is required")
    .isLength({min:6, max:100}).withMessage("password must be between 6 and 100 characters"),

    validate

]

