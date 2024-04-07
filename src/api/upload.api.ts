import axios, { AxiosError, AxiosResponse } from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
  };
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(
        "HTTP error response:",
        error.response.data || "No response data available"
      );
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("HTTP no response:", error.request);
      return Promise.reject({
        message: "No response received from the server",
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("HTTP request setup error:", error.message);
      return Promise.reject({ message: "Error setting up the request" });
    }
  }
);

export const uploadFileApi = async (
  data: any,
  apiUrl: string
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axiosInstance.post<any>(
      apiUrl,
      data
    );
    return response.data;
  } catch (error: any) {
    console.error("Upload file failed", error);
    throw error.response?.data || "Upload file failed";
  }
};
