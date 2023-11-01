import axios from "axios";

const URL = 'http://localhost:8080/usuario';



export const findByDni= async (dni) => {
    try {
        const response = await axios.get(`${URL}/ver/${dni}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}
export const agregarAlumno = async (alumno,id) => {
    try {
        const response = await axios.post(`${URL}/agregar_alumno/${id}`,alumno)
        return response;
    } catch (error) {
        throw error;
    }
}

export const findAllAlumnos = async (idDivision) => {
    try {
        const response = await axios.get(`${URL}/division/alumnos/${idDivision}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

