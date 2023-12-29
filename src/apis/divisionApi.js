import axios from "axios";


const divisionApi = axios.create({
    baseURL: 'http://localhost:8080/division'
})

divisionApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
})

export default divisionApi;