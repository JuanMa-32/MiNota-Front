import React, { useContext, useEffect } from 'react'
import { EscuelaView } from '../components/escuelas/EscuelaView'
import { useParams } from 'react-router-dom'
import { UserContext } from './../context/UserContext';

export const VerEscuela = () => {

    const {hanlderEscuelaSeleccionada} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
        console.log('hola');
        hanlderEscuelaSeleccionada(id);
    }, [id])
  return (

    <EscuelaView></EscuelaView>
  )
}
