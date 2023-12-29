
import divisionApi from './../apis/divisionApi';

const URL = ''


export const save = async (division,id) => {
    try {
        const response = await divisionApi.post(`${URL}/agregar/${id}`,division)
        return response;
    } catch (error) {
       throw error;
    }
}

export const remove = async (id,idEsc) => {
    try {
       await divisionApi.delete(`${URL}/eliminar/${idEsc}/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const update = async (division) => {
    try {
        const response = await divisionApi.put(`${URL}/editar/${division.id}`,division)
        return response;
    } catch (error) {
       throw error;
    }
}

export const findAll = async (id) => {
    try {
        const response = await divisionApi.get(`${URL}/listar/${id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const findById = async (id) => {
    try {
        const response = await divisionApi.get(`${URL}/ver/${id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const moverAlumnos = async (alumnos,idDivisionDestino,id) => {
    try {
        const response = await divisionApi.put(`${URL}/mover_alumnos/${id}?idDivisionDestino=${idDivisionDestino}`,alumnos)
        return response
    } catch (error) {
        console.log(error);
    }
}

export const findCargoDivision = async (id) => {
    try {
        const response = await divisionApi.get(`${URL}/cargoDivision/${id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}