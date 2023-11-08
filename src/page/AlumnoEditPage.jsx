import React, { useContext, useEffect } from 'react'
import { AlumnoEdit } from '../components/alumnos/AlumnoEdit'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const AlumnoEditPage = () => {
  const {handlerAlumnoSelected} = useContext(UserContext)
  const {id}=useParams()

  useEffect(() => {
    handlerAlumnoSelected(id);
  }, [id])
  

  return (
    <>
    <AlumnoEdit></AlumnoEdit>
    </>
  )
}
