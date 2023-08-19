import axios from "axios";


const http = axios.create({
    baseURL: "https://localhost:7144",
    timeout: 20000,
})

http.interceptors.request.use(
    config => {
        return config;
    }, err => {
        return Promise.reject(err);
    }
)

http.interceptors.response.use(
    res => {
        return res.data
    }, err => {
        return Promise.reject(err);
    }
)

export { http };