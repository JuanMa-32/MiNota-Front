import axios from "axios";


const cargoApi = axios.create({
    baseURL: 'http://localhost:8080/cargo'
})

cargoApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
})

export default cargoApi;