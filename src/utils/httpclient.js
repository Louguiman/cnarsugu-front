import axios from "axios";
// import storage from "./";

export const apiUrl =
  process.env.EXPO_PUBLIC_API_URL || "https://cnar-sugu-api.vercel.app/api";
const apiKey =
  process.env.EXPO_PUBLIC_API_KEY || "03e42c19-45d3-4bab-b5b2-d9b2eed04a62'";

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "Application/JSON",
    "x-api-key": apiKey,
  },
});
