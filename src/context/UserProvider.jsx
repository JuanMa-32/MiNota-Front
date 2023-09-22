import { useDivision } from "../hooks/useDivision";
import { useEscuela } from "../hooks/useEscuela";
import { usePublicacion } from "../hooks/usePublicacion"
import { UserContext } from "./UserContext"
import { useCargo } from './../hooks/useCargo';

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
                cargoSelected
            }
        }>
            {children}
        </UserContext.Provider>
    )
}