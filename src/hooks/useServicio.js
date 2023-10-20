import { useContext, useReducer, useState } from "react"
import { servicioReducer } from './../reducers/servicioReducer';
import { darBaja, findAllServicio, findByIdServicio, save } from "../services/ServicioService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";


const servicioInit = {
    situacionRevista: '',
    usuario: {
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
        localidad: '',
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
    },
    alta: '',
    baja: '',
    diasCumplir: 0,
    obligacion: '',
    funcion: '',
    observacion: ''
}

const errorsServicioInit = {
    situacionRevista: '',
    usuario: {
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
        localidad: '',
        codigoPostal: 0,
        barrio: '',
        manzana: '',
        casa: '',
    },
    alta: '',
    baja: '',
    diasCumplir: '',
    obligacion: '',
    funcion: '',
    observacion: ''
}

export const useServicio = () => {

    const [servicios, dispatch] = useReducer(servicioReducer, [])
    const [paginatorServicio, setpaginatorServicio] = useState([])
    const [errorsServicio, seterrorsServicio] = useState(errorsServicioInit)
    const [servicioSelected, setservicioSelected] = useState(servicioInit)
    const navigate = useNavigate();

    

    const getServicio = async (idEscuela, page = 0) => {
        try {
            const response = await findAllServicio(idEscuela, page);
            setpaginatorServicio(response.data)
            dispatch({
                type: 'loadingServicio',
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handlerAddServicio = async (idCargo, servicio) => {
        try {
            const response = await save(servicio, idCargo);
            dispatch({
                type: 'addServicio',
                payload: response.data
            })
            Swal.fire('Servicio', 'Servicio agregado con exito', 'success')
            navigate('/')
            seterrorsServicio(errorsServicioInit)
        } catch (error) {
            if (error.response && error.response.status == 400) {
                seterrorsServicio(error.response.data)
            } else if (error.response && error.response.status == 500) {
                Swal.fire('Persona', 'Los datos de la persona han sido cargados de forma INCORRECTA!', 'error')
            } else {
                throw error;
            }
        }
    }

    const idEscuela = sessionStorage.getItem('idEscuela');
    const handlerBaja = async (id, bajaFormulario) => {
        try {
            await darBaja(id, bajaFormulario);
           
            Swal.fire('Servicio', 'Este servicio fue dado de baja', 'success')
            getServicio(idEscuela)//recargo el estado para que impacte en la lista de inmediato
        }catch (error) {
            console.log(error);
        }
    }

    const handlerServicioSelected = async (id) => {
        try {
            const response = await findByIdServicio(id);
            setservicioSelected(response.data);
        } catch (error) {
            console.log(error);
        }
    }



    return {
        //variables
        servicios,
        servicioInit,
        paginatorServicio,
        servicioSelected,
        errorsServicio,

        //funciones
        handlerAddServicio,
        getServicio,
        handlerServicioSelected,
        handlerBaja
    }
}
