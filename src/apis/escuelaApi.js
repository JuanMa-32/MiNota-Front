import axios from "axios";


const escuelaApi = axios.create({
    baseURL: 'http://localhost:8080/escuela'
})

escuelaApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
})

export default escuelaApi;