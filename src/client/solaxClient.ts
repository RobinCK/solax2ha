import axios from "axios";

export const solaxClient = axios.create({
  baseURL: process.env.SOLAX_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});
