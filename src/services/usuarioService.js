
import usuarionApi from './../apis/usuarioApi';

const URL = '';

export const findByAlumno = async (nombre,apellido,page) => {
    try {
        const response = await usuarionApi.get(`${URL}/alumno/buscar/${page}?nombre=${nombre}&apellido=${apellido}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const findByDni = async (dni) => {
    try {
        const response = await usuarionApi.get(`${URL}/ver/${dni}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}
export const AlumnofindById = async (id) => {
    try{
        const response = await usuarionApi.get(`${URL}/${id}`);
        return response;
    }catch (error) {
        console.log(error);
    }
}

export const agregarAlumno = async (alumno, id) => {
    try {
        const response = await usuarionApi.post(`${URL}/agregar_alumno/nuevo/${id}`, alumno)
        return response;
    } catch (error) {
        throw error;
    }
}
export const agregarAlumnoExistente = async (idAlumno, idDivision) => {
    try {
        const response = await usuarionApi.put(`${URL}/agregar_alumno/${idAlumno}/${idDivision}`)
        return response;
    } catch (error) {
        throw error;
    }
}

export const editAlumno = async (id,alumno) => {
    try {
        const response = await usuarionApi.put(`${URL}/editar/${id}`,alumno)
        return response;
    } catch (error) {
        throw error;
    }
}

export const findAllAlumnos = async (idDivision) => {
    try {
        const response = await usuarionApi.get(`${URL}/division/alumnos/${idDivision}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

