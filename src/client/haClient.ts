import axios from "axios";
import https from 'https';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export const haClient = axios.create({
  baseURL: process.env.HA_URL,
  httpsAgent,
  headers: {
    Authorization: `Bearer ${process.env.HA_TOKEN}`,
    'Content-Type': 'application/json',
  }
});
