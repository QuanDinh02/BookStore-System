import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    // Do something with request error

    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {

    return response && response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
});

instance.defaults.withCredentials = true;

export default instance;
