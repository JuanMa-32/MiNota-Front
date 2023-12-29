
import publicacionApi from "../apis/publicacionApi";

const URL = ''

export const findAll = async () =>  {
    try {
        const response = await publicacionApi.get(URL);
        return response;
    } catch (error) {
       throw error;
    }
}

export const save = async (publicacion) => {
    try {
        const response = await publicacionApi.post(URL,publicacion)
        return response;
    } catch (error) {
        throw error;
    }
}

export const update = async ({titulo,cuerpo,id}) => {
    try {
        const response = await publicacionApi.put(`${URL}/${id}`,{
            titulo,
            cuerpo
        })
        return response;
    } catch (error) {
        throw error;
    }
}