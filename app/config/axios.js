
import axios from 'axios'
import Cookies from 'js-cookie'
// axios instece


export const Axios = axios.create({
    baseURL: 'http://localhost:8080/api',
    // baseURL: 'https://skailama-task-server.onrender.com/api',
    headers:{
        'Content-Type': 'application/json',
        Authorization: Cookies.get('token')
    }

})

Axios.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = ` ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});