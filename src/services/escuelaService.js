
import escuelaApi from './../apis/escuelaApi';

const URL = ''

//post-put
export const save = async (escuela) => {
    try {
        const response = await escuelaApi.post(URL, escuela)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const editar = async (escuela,id) => {
    try {
        const response = await escuelaApi.put(`${URL}/editar/${id}`,escuela)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const editarCaracteristicas = async (escuela,id) => {
    try {
        const response = await escuelaApi.put(`${URL}/caracteristicas/${id}`,escuela)
        return response;
    } catch (error) {
        console.log(error);
    }
}

//GET
export const getLocalidades = async () => {
    try {
        const response = await escuelaApi.get(`${URL}/localidades`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const findAllEscuelas = async () => {
    try {
        const response = await escuelaApi.get(URL);
        return response
    } catch (error) {
        console.log(error);
    }
}

export const getEscuelaId = async (id) => {
    try {
        const response = await escuelaApi.get(`${URL}/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

