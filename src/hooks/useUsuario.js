import React, { useReducer, useState } from 'react'
import { usuarioReducer } from './../reducers/usuarioReducer';
import { AlumnofindById, agregarAlumno, agregarAlumnoExistente, editAlumno, findAllAlumnos, findByAlumno, findByDni } from './../services/usuarioService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const usuarioInit = {
    cuil: 0,
    dni: 0,
    apellido: '',
    nombre: '',
    genero: '',
    nacimiento: '',
    calle: '',
    numero: 0,
    depto: '',
    piso: '',
    codigoPostal: 0,
    barrio: '',
    manzana: '',
    casa: '',
    referenciaDomicilio: '',
    nivelEstudio: '',
    ocupacion: '',
    telefonoFijo: 0,
    prestadora: '',
    celular: 0,
    estadoCivil: '',
    obraSocial: '',
    grupoSanguineo: '',
    lugarNacimiento: '',
    nacionalidad: '',
    condicion: '',
    desde: '',
    causaEntrada: '',
    cicloLectivo: 2023
}
const alumnosFormInit = [{
    cuil: 0,
    dni: 0,
    apellido: '',
    nombre: '',
    genero: '',
    nacimiento: '',
    calle: '',
    numero: 0,
    depto: '',
    piso: '',
    codigoPostal: 0,
    barrio: '',
    manzana: '',
    casa: '',
    referenciaDomicilio: '',
    nivelEstudio: '',
    ocupacion: '',
    telefonoFijo: 0,
    prestadora: '',
    celular: 0,
    estadoCivil: '',
    obraSocial: '',
    grupoSanguineo: '',
    lugarNacimiento: '',
    nacionalidad: '',
    condicion: '',
    desde: '',
    causaEntrada: '',
    cicloLectivo: 2023
}]
export const useUsuario = () => {

    const [alumnos, dispatch] = useReducer(usuarioReducer, []);
    const [usuarioDni, setusuarioDni] = useState(usuarioInit)
    const [alumnoSelected, setalumnoSelected] = useState(usuarioInit)
    const [alumnosForm, setalumnosForm] = useState([])
    const [alumnosPaginador, setalumnosPaginador] = useState({})
    const navigate = useNavigate()


    const getAlumnosForm = async ( page,{nombre,apellido}) => {
        try {
            const response = await findByAlumno(nombre, apellido, page)
            setalumnosForm(response.data.content)
            setalumnosPaginador(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const getUsuarios = async (idDivision) => {
        try {
            const response = await findAllAlumnos(idDivision);

            dispatch({
                type: 'loadingAlumnos',
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handlerUsuarioDni = async (dni) => {
        try {
            const response = await findByDni(dni)
            setusuarioDni(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    const restablecerListAlumnos = () => {
        setalumnosForm(alumnosFormInit)
        setalumnosPaginador({})
    }



    //alumnos
    const handlerAddAlumno = async (idDivision, alumno) => {
        try {

            const response = await agregarAlumno(alumno, idDivision);
            dispatch({
                type: 'addAlumno',
                payload: response.data
            })
            handlerCloseFormBuscar()

            Swal.fire('Alumno', 'El alumno fue agregado a la division', 'success')
            navigate(`/alumno/editar/${response.data.id}`)
        } catch (error) {
            console.log(error);
        }
    }
    const handlerAddAlumnoExistente = async (idAlumno, idDivision) => {
        try {
            const response = await agregarAlumnoExistente(idAlumno, idDivision);
            dispatch({
                type: 'loadingAlumnos',
                payload: response.data
            })
            handlerCloseFormBuscar()
            Swal.fire('Alumno', 'El alumno fue agregado a la division', 'success')
        } catch (error) {
            if (error.response && error.response.status === 500) {
                Swal.fire('Alumno', 'El alumno esta activo en una division', 'warning')
            }
        }
    }
    const handlerAlumnoSelected = async (id) => {
        const response = await AlumnofindById(id);
        setalumnoSelected(response.data)
    }

    const handlerEditAlumno = async (alumno) => {
        try {
            console.log(alumno);
            const response = await editAlumno(alumno.id, alumno);
            dispatch({
                type: 'updateAlumno',
                payload: response.data
            })
            Swal.fire('Alumno', 'datos cargados correctamente!', 'success')
        } catch (error) {
            console.log(error);
        }
    }

    //funciones para abrir y cerrar modal para agregar alumno 
    const [visibleBuscar, setvisibleBuscar] = useState(false);
    const handlerOpenFormBuscar = () => {
        setvisibleBuscar(true);
    }
    const handlerCloseFormBuscar = () => {
        restablecerListAlumnos()//una vez que se cierra el modal, la lista de busqueda se vacia.
        setvisibleBuscar(false)
    }


    return {
        //variables
        alumnos,
        usuarioDni,
        visibleBuscar,
        usuarioInit,
        alumnoSelected,
        alumnosForm,
        alumnosPaginador,

        //funciones
        getUsuarios,
        handlerUsuarioDni,
        handlerAddAlumno,
        handlerAddAlumnoExistente,
        handlerOpenFormBuscar,
        handlerCloseFormBuscar,
        handlerAlumnoSelected,
        handlerEditAlumno,
        restablecerListAlumnos,
        getAlumnosForm
    }
}
