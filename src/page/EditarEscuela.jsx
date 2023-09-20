import { useContext, useEffect } from "react";
import { EscuelaEditar } from "../components/escuelas/EscuelaEditar"
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { NavBarSecundario } from "../components/headers/NavBarSecundario";


export const EditarEscuela = () => {
    const {hanlderEscuelaSeleccionada} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
       
        hanlderEscuelaSeleccionada(id);
    }, [id])
  return (
    <>
      <NavBarSecundario id={id} ></NavBarSecundario>
    <EscuelaEditar></EscuelaEditar>
    </>
  )
}
