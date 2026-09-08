import {body,validationResult} from "express-validator"


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
    .isLength({min:6, max:100}).withMessage("password must be between 6 and 100 characters")

]