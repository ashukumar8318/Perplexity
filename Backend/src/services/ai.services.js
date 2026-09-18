import { HumanMessage,AIMessage } from "@langchain/core/messages";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-3-flash-preview",
  apiKey: process.env.GEMINI_API_KEY,
});

const mistralModel = new ChatMistralAI({
    model: "mistral-medium-3-5",
    apiKey: process.env.MISTRAL_API_KEY
});
console.log(
    "Mistral key loaded:",
    !!process.env.MISTRAL_API_KEY
);

export async function genrateResponse(message){
   try{
    const response = await geminiModel.invoke(message.map(msg=>{
      if(msg.role == "user"){
        return new HumanMessage(msg.content)
      }else if(msg.role == "Ai"){
        return new AIMessage(msg.content)
      }
      
    }))

    console.log("Response success",response.content)

    return response.content

   }
   catch(error){
    console.error("Error generating response:", error);
    throw error;
   }

}

// export async function generateTitle(message){
//  try {
//    const response = await mistralModel.invoke([
//         {
//             role: "system",
//             content: `
//                 Generate a short title for the user's message.

//                 Rules:
//                 - Maximum 8 words
//                 - Return only the title
//                 - No quotation marks
//                 - Do not answer the question
//             `
//         },
//         {
//             role: "user",
//             content: message
//         }
//     ]);

//     return response.content;
  
//  } catch (error) {
//   console.error("error in MiralAi",error)
//   throw error
  
//  }

// // try {
// //     const response = await mistralModel.invoke(
// //         "Generate a short title for: How can I learn React?"
// //     );

// //     console.log("TITLE:", response.content);

// // } catch (error) {
// //     console.log("ERROR:", error);
// // }
// }

export async function generateTitle(message){
 try {
   const response = await geminiModel.invoke([
        {
            role: "system",
            content: `
                Generate a short title for the user's message.

                Rules:
                - Maximum 8 words
                - Return only the title
                - No quotation marks
                - Do not answer the question
            `
        },
        {
            role: "user",
            content: message
        }
    ]);

    return response.content;
  
 } catch (error) {
  console.error("error in Gemini",error)
  throw error
  
 }


}