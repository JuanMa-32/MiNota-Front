import React from 'react'
import { useParams } from 'react-router-dom'
import { ServicioForm } from '../components/servicio/ServicioForm'

export const ServicioRemplazoPage = () => {
    const { id,reemplazo } = useParams()
    return (
        <ServicioForm idCargo={id} reemplazo={reemplazo}></ServicioForm>
    )
}
