import React, { useReducer, useState } from 'react'
import { usuarioReducer } from './../reducers/usuarioReducer';
import { findAllUsuarios, findByDni } from './../services/usuarioService';
const usuarioInit= {
    cuil:0,
    dni:0,
    apellido:'',
    nombre:'',
    genero:'',
    nacimiento:'',
    calle:'',
    numero:0,
    depto:'',
    piso:'',
    localidad:'',
    codigoPostal:0,
    barrio:'',
    manzana:'',
    casa:'',
    referenciaDomicilio:'',
    nivelEstudio:'',
    ocupacion:'',
    telefonoFijo:0,
    prestadora:'',
    celular:0,
    estadoCivil:'',
    obraSocial:'',
    grupoSanguineo:'',
    lugarNacimiento:'',
    nacionalidad:'',
}
export const useUsuario = () => {
  
    const [usuarios, dispatch] = useReducer(usuarioReducer,[]);
    const [usuarioDni, setusuarioDni] = useState(usuarioInit)

    const getUsuarios = async () => {
        try {
            const response = await findAllUsuarios();
            dispatch({
                type:'loadingUsuarios',
                payload:response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handlerUsuarioDni =async (dni) => {
        try {
            const response = await findByDni(dni)
            setusuarioDni(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const restablecerUsuario = () => {
        setusuarioDni(usuarioInit)
    }

  
    return {
        //variables
        usuarios,
        usuarioDni,

        //funciones
        getUsuarios,
        handlerUsuarioDni,
        restablecerUsuario
  }
}
