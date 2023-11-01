import { useDivision } from "../hooks/useDivision";
import { useEscuela } from "../hooks/useEscuela";
import { usePublicacion } from "../hooks/usePublicacion"
import { UserContext } from "./UserContext"
import { useCargo } from './../hooks/useCargo';
import { useServicio } from './../hooks/useServicio';
import { useUsuario } from "../hooks/useUsuario";

export const UserProvider = ({ children }) => {

    const {
        //FUNCIONES
        getPublicaciones,
        hanlderAddPublicacion,
        handlerOpenForm,
        handlerCloseForm,
        handlerUserSelectedForm,
        //VARIABLES
        publicaciones,
        publicacionInitial,
        visibleFrom,

        publicacionSelected
    } = usePublicacion();

    const {
        //funciones
        hanlderAddLocalidades,
        hanlderAddEscuela,
        hanlderEscuelaSeleccionada,
        getEscuelas,
        handlerUpdate,
        handlerUpdateCaracteristicas,
        //variables
        localidades,
        escuelaFormInit,
        escuelaSeleccionada,
        escuelas
    } = useEscuela();

    const {
        //Variables
        divisionFormInit,
        divisiones,
        errors,
        divisionSelected,


        //Funciones
        hanlderAddDivision,
        getDivisiones,
        hanlderDivisionSelected,
        handlerDeleteDivision

    } = useDivision();

    const {
        //funciones
        handlerAddCargo,
        getCargos,
        handlerCargoSelected,
        handlerEditCargo,
        handlerDeleteCargo,
        //variables
        cargoFormInit,
        errorsCargo,
        cargos,
        paginator,
        cargoSelected
    } = useCargo();

    const {
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

    } = useServicio();

    const {
        //variables
        alumnos,
        usuarioDni,

        //funciones
        getUsuarios,
        handlerUsuarioDni,
        restablecerUsuario
    } = useUsuario();

    return (
        <UserContext.Provider value={
            {
                //PUBLICAION
                //FUNCIONES
                getPublicaciones,
                hanlderAddPublicacion,
                handlerOpenForm,
                handlerCloseForm,
                handlerUserSelectedForm,
                //VARIABLES
                publicaciones,
                publicacionInitial,
                visibleFrom,
                publicacionSelected,

                //ESCUELA
                //funciones
                hanlderAddLocalidades,
                hanlderAddEscuela,
                hanlderEscuelaSeleccionada,
                getEscuelas,
                handlerUpdate,
                handlerUpdateCaracteristicas,
                //variables
                localidades,
                escuelaFormInit,
                escuelaSeleccionada,
                escuelas,



                //DIVISION
                //Variables
                divisionFormInit,
                divisiones,
                errors,
                divisionSelected,
                //Funciones
                hanlderAddDivision,
                getDivisiones,
                hanlderDivisionSelected,
                handlerDeleteDivision,


                //CARGO
                //funciones
                handlerAddCargo,
                getCargos,
                handlerCargoSelected,
                handlerEditCargo,
                handlerDeleteCargo,
                //variables
                cargoFormInit,
                errorsCargo,
                cargos,
                paginator,
                cargoSelected,


                //SERVICIO
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
                handlerAnularBaja,


                //USUARIO
                //variables
                alumnos,
                usuarioDni,
                //funciones
                getUsuarios,
                handlerUsuarioDni,
                restablecerUsuario
            }
        }>
            {children}
        </UserContext.Provider>
    )
}