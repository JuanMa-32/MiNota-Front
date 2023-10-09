import React, { useContext, useEffect } from 'react'
import { CargoView } from './../components/cargo/CargoView';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const CargoVerPage = () => {
    const {handlerCargoSelected,escuelaSeleccionada} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
        handlerCargoSelected(id);
    }, [id])
    
  return (
    <>
    <h5>Cargo de Esc.{escuelaSeleccionada.numero}</h5>
    <br></br>
    <CargoView></CargoView>
    </>

  )
}
