import { useReducer } from "react"
import { servicioReducer } from './../reducers/servicioReducer';
import { save } from "../services/ServicioService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const servicioInit = {
    situacionRevista: '',
    usuario: {
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
    const navigate = useNavigate();

    // const getServicio = async() => {
    //     try {
    //         const response = await 
    //     } catch (error) {

    //     }
    // }

    const handlerAddServicio = async (idCargo, servicio) => {
        try {
            const response = await save(servicio, idCargo);
            dispatch({
                type: 'addServicio',
                payload: response.data
            })
            Swal.fire('Servicio','Servicio agregado con exito','success')
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }


    return {
        //variables
        servicios,
        servicioInit,
        //funciones
        handlerAddServicio
    }
}
