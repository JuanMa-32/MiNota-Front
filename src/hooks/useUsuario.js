import React, { useReducer, useState } from 'react'
import { usuarioReducer } from './../reducers/usuarioReducer';
import {  agregarAlumno, findAllAlumnos, findByDni } from './../services/usuarioService';
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
  
    const [alumnos, dispatch] = useReducer(usuarioReducer,[]);
    const [usuarioDni, setusuarioDni] = useState(usuarioInit)

    const getUsuarios = async (idDivision) => {
        
        try {
          const response = await findAllAlumnos(idDivision);
          console.log(response);
            dispatch({
                type:'loadingAlumnos',
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

    //alumnos
    const handlerAddAlumno = async (idDivision,alumno) => {
        try {
            const response = await agregarAlumno(alumno,id);
        } catch (error) {
            console.log(error);
        }
    } 

  
    return {
        //variables
        alumnos,
        usuarioDni,


        //funciones
        getUsuarios,
        handlerUsuarioDni,
        restablecerUsuario
  }
}
