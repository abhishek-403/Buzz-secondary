import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const axiosClient = axios.create({
  // baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  baseURL: "http://192.168.1.15:4000/api",
  withCredentials: true,
});
// let accessToken =

//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY0NGI0YjA4NTA3YWJlZjkzNDFhYzIiLCJpYXQiOjE2OTM3MzIyODZ9.HbyN3YUfSwrDyB6X0yMKJvP-FZn7hRtgpj7zlSl5fz4";

axiosClient.interceptors.request.use(async (request) => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  request.headers["Authorization"] = `Bearer ${accessToken}`;

  return request;
  
});

axiosClient.interceptors.response.use(async (response) => {
  if (response.data.status === "error") {
    alert(response.data.result);
    return Promise.reject();
  }
  return response.data;
});
