import React, { useContext, useEffect } from 'react'
import { CargoView } from './../components/cargo/CargoView';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const CargoVerPage = () => {
    const {handlerCargoSelected} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
        handlerCargoSelected(id);
    }, [id])
    
  return (
    <>
    <CargoView></CargoView>
    <h6>aca iria la tabla de servicios...</h6>
    </>

  )
}
