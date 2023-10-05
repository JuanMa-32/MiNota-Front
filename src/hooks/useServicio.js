import { useReducer, useState } from "react"
import { servicioReducer } from './../reducers/servicioReducer';
import { findAllServicio, findByIdServicio, save } from "../services/ServicioService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


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

export const useServicio = () => {

    const [servicios, dispatch] = useReducer(servicioReducer, [])
    const [paginatorServicio, setpaginatorServicio] = useState([])
    const [errorsServicio, seterrorsServicio] = useState({})
    const [servicioSelected, setservicioSelected] = useState(servicioInit)
    const navigate = useNavigate();

    const getServicio = async (idEscuela,page=0) => {
        try {
            const response = await findAllServicio(idEscuela,page);
            setpaginatorServicio(response.data)
            dispatch({
                type:'loadingServicio',
                payload:response.data
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
        } catch (error){
            if(error.response && error.response.status == 400){
                console.log(error);
                seterrorsServicio(error.response.data)
            }else{
                throw error;
            }
        }
    }

    const handlerServicioSelected =async (id) => {
        try {
            const response = await findByIdServicio(id);
            console.log(response.data);
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
        //funciones
        handlerAddServicio,
        getServicio,
        handlerServicioSelected
    }
}
