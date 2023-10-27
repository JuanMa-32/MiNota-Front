import axios from "axios";

const URL = 'http://localhost:8080/servicio'
const URL_NOVEDAD = 'http://localhost:8080/novedad'
const URL_DEPARTAMENTOS = 'https://apis.datos.gob.ar/georef/api/municipios?provincia=mendoza&campos=id,nombre&max=100'

export const save = async (servicio,idCargo) => {
    try {
        const response = await axios.post(`${URL}/${idCargo}`,servicio)
        return response;
    } catch (error) {
        throw error;
    }
}

export const edit = async (id,servicio) => {
    try {
        const response = await axios.put(`${URL}/edit/${id}`,servicio)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const findAllServicio = async (idEscuela,page,mes,anio) => {
    try {
        const response = await axios.get(`${URL}/${idEscuela}/${page}?mes=${mes}&anio=${anio}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const findByIdServicio = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const darBaja = async (id,{motivoBaja,baja}) =>{
    try {
         await axios.put(`${URL}/baja/${id}?motivoBaja=${motivoBaja}&baja=${baja}`);
        
    } catch (error) {
        console.log(error);
    }
}

export const agregarNovedad = async (id,novedad) => {
    try {
        await axios.post(`${URL_NOVEDAD}/${id}`,novedad)
        
    } catch (error) {
        throw error;
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