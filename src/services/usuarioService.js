import axios from "axios";

const URL = 'http://localhost:8080/usuario';

export const findAllUsuarios = async () => {
    try {
        const response = await axios.get(URL);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const findByDni= async (dni) => {
    try {
        const response = await axios.get(`${URL}/dni?dni=${dni}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

