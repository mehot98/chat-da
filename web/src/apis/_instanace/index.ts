import axios, { AxiosError } from "axios";

// require("dotenv").config();

// console.log("baseURL : ", process.env.PUBLIC_PRODUCT_END_POINT);

const customInstance = (contentType: string) => {
  const dynamicContentInstance = axios.create({
    baseURL: "",
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
