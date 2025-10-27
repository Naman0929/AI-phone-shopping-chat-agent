import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("Using @google/generative-ai version: 0.24.1");
console.log("Loaded GOOGLE_API_KEY:", process.env.GOOGLE_API_KEY?.slice(0, 10));



const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

async function main() {
  const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });
  const result = await model.generateContent("Say hello from Gemini!");
  console.log(result.response.text());
}

main();
