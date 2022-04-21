import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add a request interceptor
// Muốn làm việc gì đó trước khi request gửi lên server, up cho tất cả các request (vd: gửi token)
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
// Tất cả reponse từ server trả về thì mình xử lý điều gì đó trước khi trả về nơi nó gọi
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient