import axios from "axios";


const servicioApi = axios.create({
    baseURL: 'http://localhost:8080/servicio'
})

servicioApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
})

export default servicioApi;