import axios from "axios";

const URL = 'http://localhost:8080/cargo'

export const save = async (id,cargo) => {
    try {
        const response = await axios.post(`${URL}/${id}`,cargo)
        return response;
    } catch (error) {
        throw error;
    }
}