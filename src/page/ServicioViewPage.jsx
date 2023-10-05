import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './../context/UserContext';
import { ServicioView } from '../components/servicio/ServicioView';

export const ServicioViewPage = () => {
    const{handlerServicioSelected}=useContext(UserContext)
    const{id} = useParams();
    useEffect(() => {
        handlerServicioSelected(id)
    }, [id])
    
  return (
    <ServicioView></ServicioView>
  )
}
