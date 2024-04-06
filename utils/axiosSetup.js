import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// let serverURL =
//   process.env.NODE_ENV == "development"
//     ? process.env.EXPO_SERVER_URL
//     : "https://buzz-server-w634.onrender.com/api";

    console.log("dfa :",process.env.EXPO_SERVER_URL, process.env.NODE_ENV);
export const axiosClient = axios.create({
  baseURL: "http://192.168.1.25:4000/api",
  // baseURL: process.env.EXPO_SERVER_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(async (request) => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  request.headers["Authorization"] = `Bearer ${accessToken}`;

  return request;
});

axiosClient.interceptors.response.use(async (response) => {
  if (response.data.status === "error") {
    console.log("axios error",response.data);
    if (response.data.statusCode != 401) {
      alert(response.data.result);
    }
    return Promise.reject();
  }
  return response.data;
});
