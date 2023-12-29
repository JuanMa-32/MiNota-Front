
import cargoApi from './../apis/cargoApi';

const URL = ''

export const save = async (id,cargo) => {
    try {
        const response = await cargoApi.post(`${URL}/${id}`,cargo)
        return response;
    } catch (error) {
        throw error;
    }
}
export const update = async (idCargo,cargo) => {
    try {
        const response = await cargoApi.put(`${URL}/${idCargo}`,cargo)
        return response;
    } catch (error) {
        throw error;
    }
}

export const remove = async (id,idEscuela) => {
    try {
        await cargoApi.delete(`${URL}/${id}/${idEscuela}`)
    } catch (error) {
        console.log(error);
    }
}

export const findAll = async (id,page=0) => {
    try {
        const response = await cargoApi.get(`${URL}/${id}/${page}`)
        return response
    } catch (error) {
        console.log(error);
    }
}

export const findById = async (id) => {
    try {
        const response = await cargoApi.get(`${URL}/${id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}