import axios from "axios"

const URL = 'http://localhost:8080/publicacion'

export const findAll = async () =>  {
    try {
        const response = await axios.get(URL);
        return response;
    } catch (error) {
       throw error;
    }
}

export const save = async (publicacion) => {
    try {
        const response = await axios.post(URL,publicacion)
        return response;
    } catch (error) {
        throw error;
    }
}

export const update = async ({titulo,cuerpo,id}) => {
    try {
        const response = await axios.put(`${URL}/${id}`,{
            titulo,
            cuerpo
        })
        return response;
    } catch (error) {
        throw error;
    }
}