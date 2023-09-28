import axios from "axios";

const URL = 'http://localhost:8080/servicio'
const URL_DEPARTAMENTOS = 'https://apis.datos.gob.ar/georef/api/municipios?provincia=mendoza&campos=id,nombre&max=100'

export const save = async (servicio,idCargo) => {
    try {
        const response = await axios.post(`${URL}/${idCargo}`,servicio)
        return response;
    } catch (error) {
        throw error;
    }
}

export const findAllServicio = async () => {
    try {
        const response = await axios.get(URL)
        return response;
    } catch (error) {
        console.log(error);
    }
}

//me traigo los departamentos de mendoza para luego llenar en el formulario
export const departamentosMdz = async () => {
    try {
        const response = await axios.get(URL_DEPARTAMENTOS)
        return response;
    } catch (error) {
        console.log(error);
    }
}