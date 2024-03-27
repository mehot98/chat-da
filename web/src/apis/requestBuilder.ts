import axios from "axios";

const { VITE_SERVER_END_POINT } = import.meta.env;

export const request = axios.create({
  baseURL: VITE_SERVER_END_POINT,
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});
