import React, { useContext, useEffect } from 'react'
import { ServicioEdit } from '../components/servicio/ServicioEdit'
import { UserContext } from '../context/UserContext';
import { useParams } from 'react-router-dom';

export const ServicioEditPage = () => {
    const{handlerServicioSelected}=useContext(UserContext)
    const{id} = useParams();
    useEffect(() => {
        handlerServicioSelected(id)
    }, [id])
  return (
  <ServicioEdit id={id}></ServicioEdit>
  )
}
