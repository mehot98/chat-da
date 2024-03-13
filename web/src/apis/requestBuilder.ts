import axios from "axios";

const { VITE_SERVER_END_POINT } = import.meta.env;

const SERVER_END_POINT = VITE_SERVER_END_POINT;

export const request = axios.create({
  baseURL: SERVER_END_POINT,
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});
