import React from 'react'
import { ServicioForm } from '../components/servicio/ServicioForm'
import { useParams } from 'react-router-dom'

export const ServicioFormPage = () => {
  const {id} = useParams()
  return (
    <ServicioForm idCargo={id}></ServicioForm>
  )
}
