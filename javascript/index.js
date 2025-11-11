import dotenv from "dotenv";
dotenv.config();

const city = "Paris";
const apiKey = process.env.apiKey;

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
