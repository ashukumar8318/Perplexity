import { ChatGoogle } from "@langchain/google";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.6-flash",
  apiKey: process.env.GEMINI_API_KEY,
});

export async function testAi(){
   try{
    const res = await model.invoke("who is shreya chakraborty IIT BHU BIOMEDICAL bachelor degree from amity university")
    console.log(res.content)
   }
   catch(err){
    console.log(err)
   }


}