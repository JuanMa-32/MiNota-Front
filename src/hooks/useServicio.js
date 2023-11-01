import { useReducer, useState } from "react"
import { servicioReducer } from './../reducers/servicioReducer';
import { agregarNovedad, anularBaja, darBaja, edit, findAllServicio, findByIdServicio, save } from "../services/ServicioService";
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
    observacion: '',
    motivoBaja: ''
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

const errorsNovedadInit = {
    articulo: '',
    desde: '',
    hasta: ''
}

export const useServicio = () => {
    const idEscuela = sessionStorage.getItem('idEscuela');

    const [servicios, dispatch] = useReducer(servicioReducer, [])
    const [paginatorServicio, setpaginatorServicio] = useState([])
    const [errorsServicio, seterrorsServicio] = useState(errorsServicioInit)
    const [errorsNovedad, seterrorsNovedad] = useState(errorsNovedadInit)
    const [servicioSelected, setservicioSelected] = useState(servicioInit)

    const navigate = useNavigate();

    const [mes, setmes] = useState('')

    function obtenerNombreMes(numeroMes) {
        const meses = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ];
        const indice = numeroMes - 1;

        if (meses[indice]) {
            return meses[indice];
        }
    }


    const getServicio = async (idEscuela, page = 0, mes, anio) => {
        try {
            const response = await findAllServicio(idEscuela, page, mes, anio);
            const nombreMes = obtenerNombreMes(mes);
            setmes(nombreMes)
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
            navigate(`/servicio/listar/${idEscuela}/0`)
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
    const handlerEditServicio = async (id, servicio) => {
        try {
            const response = await edit(id, servicio)
            dispatch({
                type: 'updateServicio',
                payload: response.data
            })
            Swal.fire('Servicio', 'Editado con exito!', 'success')
            navigate(`/servicio/listar/${idEscuela}/0`)
        } catch (error) {
            console.log(error);
        }
    }

    const handlerBaja = async (id, bajaFormulario) => {
        try {
            const response = await darBaja(id, bajaFormulario);
            dispatch({
                type: 'updateServicio',
                payload: response.data
            })
            Swal.fire('Servicio', 'Este servicio fue dado de baja', 'success')
        } catch (error) {
            console.log(error);
        }
    }

    const handlerAnularBaja = async (id) => {
        try {
            Swal.fire({
                title: 'Esta seguro que desea anular la baja?',
                text: "Cuidado la baja sera anulada!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, anular!'
            }).then(async (result) => {
                if (result.isConfirmed) {

                    try {
                        const response = await anularBaja(id);
                        dispatch({
                            type: 'updateServicio',
                            payload: response.data
                        })

                        Swal.fire(
                            'Servicio dado de alta!',
                            'La baja fue anulada!',
                            'success'
                        );
                        //navigate(`/cargo/listar/${idEsc}/${0}`)
                    } catch (error) {
                        console.log(error);
                    }
                }
            })
        } catch (error) {
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

    const handlerAddNovedad = async (id, novedad) => {
        try {
            await agregarNovedad(id, novedad)
            Swal.fire('Novedad', 'Novedad agregada al servicio.', 'success')
            seterrorsNovedad(errorsNovedadInit)
        } catch (error) {
            if (error.response && error.response.status == 400) {
                seterrorsNovedad(error.response.data)
            } else {
                throw error;
            }
        }
    }



    return {
        //variables
        servicios,
        servicioInit,
        paginatorServicio,
        servicioSelected,
        errorsServicio,
        errorsNovedad,
        mes,

        //funciones
        handlerAddServicio,
        getServicio,
        handlerServicioSelected,
        handlerBaja,
        handlerAddNovedad,
        handlerEditServicio,
        handlerAnularBaja
    }
}
