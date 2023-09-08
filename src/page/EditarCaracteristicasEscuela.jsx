import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { useParams } from 'react-router-dom';
import { EscuelaEditarCaracteristicas } from '../components/escuelas/EscuelaEditarCaracteristicas';

export const EditarCaracteristicasEscuela = () => {
    const {hanlderEscuelaSeleccionada} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
       
        hanlderEscuelaSeleccionada(id);
    }, [id])
    return (
    <EscuelaEditarCaracteristicas></EscuelaEditarCaracteristicas>
  )
}
