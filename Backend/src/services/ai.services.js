import { ChatGoogle } from "@langchain/google";
import { HumanMessage } from "@langchain/core/messages";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-3.6-flash",
  apiKey: process.env.GEMINI_API_KEY,
});

const mistralModel = new ChatMistralAI({
    model: "mistral-small-latest",
    apiKey: process.env.MISTRAL_API_KEY
});

export async function genrateResponse(message){
   try{
    const response = await geminiModel.invoke([
      new HumanMessage(message)
    ])

    console.log("Response success",response.text)

    return response.text

   }
   catch(error){
    console.error("Error generating response:", error);
    throw error;
   }

}

export async function generateTitle(message){
  try {
    


    
  } catch (error) {
    
  }
}