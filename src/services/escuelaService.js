import axios from "axios";

const URL = 'http://localhost:8080/escuela'

//post-put
export const save = async (escuela) => {
    try {
        const response = await axios.post(URL, escuela)
        return response;
    } catch (error) {
        console.log(error);
    }
}

//GET
export const getLocalidades = async () => {
    try {
        const response = await axios.get(`${URL}/localidades`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getEscuelaId = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

