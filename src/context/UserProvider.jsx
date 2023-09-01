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
        errors,
        publicacionSelected
    } = usePublicacion();

    const {
        //funciones
        hanlderAddLocalidades,
        hanlderAddEscuela,
        hanlderEscuelaSeleccionada,
        //variables
        localidades,
        escuelaFormInit,
        escuelaSeleccionada
    } = useEscuela();

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
                errors,
                publicacionSelected,



                //ESCUELA
                //funciones
                hanlderAddLocalidades,
                hanlderAddEscuela,
                hanlderEscuelaSeleccionada,
                //variables
                localidades,
                escuelaFormInit,
                escuelaSeleccionada
            }
        }>
            {children}
        </UserContext.Provider>
    )
}