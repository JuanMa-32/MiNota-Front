import { useContext, useEffect } from "react";
import { EscuelaEditar } from "../components/escuelas/EscuelaEditar"
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";


export const EditarEscuela = () => {
    const {hanlderEscuelaSeleccionada} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
       
        hanlderEscuelaSeleccionada(id);
    }, [id])
  return (
    <EscuelaEditar></EscuelaEditar>
  )
}
