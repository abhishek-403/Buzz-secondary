import axios from "axios";
export const axiosClient = axios.create({
  // baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  baseURL: 'http://10.0.2.2:4000/api',
  withCredentials: true,
});


axiosClient.interceptors.request.use(
  (request) => {
      request.headers['Authorization'] = `Bearer ${"akljklda"}`;
      return request;
  }
)


axiosClient.interceptors.response.use(
  async (response) => 
  {
    return response.data
  })