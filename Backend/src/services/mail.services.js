import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.GOOGLE_USER_EMAIL,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECREAT,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
});

transporter.verify(()=>{
    try {
        console.log("Email transporter is ready to send email")
        
    } catch (error) {
        console.error("Email transporter verification falied")

        
    }
})

export async function sendEmail({to,subject,text,html}){
    try{
        const info = await transporter.sendEmail({
            from: process.env.GOOGLE_USER_EMAIL,
            to,
            subject,
            text,
            html
        })
        console.log("Email sent successfully",info.response)

    } catch (error) {
        console.error("Error sending email",error)
    }
}

