import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const axiosClient = axios.create({
  baseURL: "http://192.168.1.35:4000/api",
  // baseURL: "http://localhost:4000/api",
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
    // console.log(response.data.result);
    return Promise.reject();
  }
  return response.data;
});
