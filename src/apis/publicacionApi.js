import axios from "axios";


const publicacionApi = axios.create({
    baseURL: 'http://localhost:8080/publicacion'
})

publicacionApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
})

export default publicacionApi;