import axios, { AxiosError } from "axios";

const { VITE_SERVER_END_POINT } = import.meta.env;

const customInstance = (contentType: string) => {
  const dynamicContentInstance = axios.create({
    baseURL: VITE_SERVER_END_POINT,
    headers: {
      "Content-Type": contentType,
    },
  });

  dynamicContentInstance.interceptors.response.use(
    (response) => response,
    async (err: AxiosError) => {
      return Promise.reject(err);
    },
  );

  return dynamicContentInstance;
};

export const instanceJsonContent = customInstance("application/json");
