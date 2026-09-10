import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

console.log("EMAIL:", process.env.GOOGLE_USER_EMAIL);
console.log("CLIENT ID:", !!process.env.GOOGLE_CLIENT_ID);
console.log("CLIENT SECRET:", !!process.env.GOOGLE_CLIENT_SECREAT);
console.log("REFRESH TOKEN:", !!process.env.GOOGLE_REFRESH_TOKEN);

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    type: "OAuth2",
    user: process.env.GOOGLE_USER_EMAIL,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECREAT,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Email transporter verification failed:", error);
  } else {
    console.log("Email transporter is ready to send email");
  }
});

export async function sendEmail({ to, subject, text, html }) {
  const mailOption = {
    from: process.env.GOOGLE_USER_EMAIL,
    to,
    subject,
    text,
    html,
  };

  const detail = await transporter.sendMail(mailOption);

  console.log("Email sent:", detail);
}