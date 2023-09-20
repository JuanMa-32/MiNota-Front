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

export const findAll = async (id,page=0) => {
    try {
        const response = await axios.get(`${URL}/${id}/${page}`)
        return response
    } catch (error) {
        console.log(error);
    }
}

export const findById = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}