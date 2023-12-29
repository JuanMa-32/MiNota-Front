import axios from "axios";


const usuarionApi = axios.create({
    baseURL: 'http://localhost:8080/usuario'
})

usuarionApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
})

export default usuarionApi;