import axios from "axios";

const URL = 'http://localhost:8080/division'


export const save = async (division,id) => {
    try {
        const response = await axios.post(`${URL}/agregar/${id}`,division)
        return response;
    } catch (error) {
       throw error;
    }
}

export const remove = async (id,idEsc) => {
    try {
       await axios.delete(`${URL}/eliminar/${idEsc}/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const update = async (division) => {
    try {
        const response = await axios.put(`${URL}/editar/${division.id}`,division)
        return response;
    } catch (error) {
       throw error;
    }
}

export const findAll = async (id) => {
    try {
        const response = await axios.get(`${URL}/listar/${id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const findById = async (id) => {
    try {
        const response = await axios.get(`${URL}/ver/${id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}