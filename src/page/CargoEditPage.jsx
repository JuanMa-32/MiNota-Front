import React, { useContext, useEffect } from 'react'
import { CargoEdit } from '../components/cargo/CargoEdit'
import { UserContext } from '../context/UserContext'
import { useParams } from 'react-router-dom';

export const CargoEditPage = () => {
    const {handlerCargoSelected} = useContext(UserContext);
    const {id} = useParams();

    useEffect(() => {
        handlerCargoSelected(id)
    }, [id])
    
  return (
    <CargoEdit></CargoEdit>
  )
}
