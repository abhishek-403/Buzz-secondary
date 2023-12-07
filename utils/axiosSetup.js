import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { REACT_APP_SERVER_URL } from "@env";

let serverURL =
  process.env.NODE_ENV == "development"
    ? REACT_APP_SERVER_URL
    : "https://buzz-server-w634.onrender.com";

export const axiosClient = axios.create({
  // baseURL: "http://192.168.1.19:4000/api",
  baseURL: REACT_APP_SERVER_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(async (request) => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  request.headers["Authorization"] = `Bearer ${accessToken}`;

  return request;
});

axiosClient.interceptors.response.use(async (response) => {
  if (response.data.status === "error") {
    if (response.data.statusCode != 401) {
      alert(response.data.result);
    }
    return Promise.reject();
  }
  return response.data;
});
