import axios, { type AxiosResponse, type Method } from "axios";
import { GlobalConstants } from "@/utils/constants/GlobalConstant";
import type { ApiResponse } from "@/types/GlobalTypes";

const api = axios.create({
  baseURL: GlobalConstants.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Alternate-Host": "localhost",
    Connection: "keep-alive",
  },
  withCredentials: true,
});

const request = <I, O>(
  method: Method,
  url: string,
  data?: I
): Promise<O | undefined> => {
  return new Promise<O | undefined>((resolve, reject) => {
    api
      .request({ method: method, url: url, data: data })
      .then((response: AxiosResponse<ApiResponse<O>>) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          reject(error.response.data.error);
        } else {
          reject(error);
        }
      });
  });
};

export default request;
