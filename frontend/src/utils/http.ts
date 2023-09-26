import axios, { AxiosRequestConfig } from "axios";

const client = axios.create({
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const fetcher = async (
  url: string,
  config: AxiosRequestConfig = {}
): Promise<any> => {
  try {
    config.url = url;
    const response = await client.request(config);
    return response.data;
  } catch (err) {
    // TODO: error handling
    if (axios.isAxiosError(err)) {
      console.log(err.status);
      console.log(err.message);
      throw new Error("Failed api request by axios");
    } else {
      console.log(err);
      throw new Error("Failed api request");
    }
  }
};
