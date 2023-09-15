import { useDivision } from "../hooks/useDivision";
import { useEscuela } from "../hooks/useEscuela";
import { usePublicacion } from "../hooks/usePublicacion"
import { UserContext } from "./UserContext"

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
                handlerDeleteDivision
            }
        }>
            {children}
        </UserContext.Provider>
    )
}