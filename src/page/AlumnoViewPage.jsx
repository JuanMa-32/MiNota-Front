import React, { useContext, useEffect } from 'react'
import { AlumnoView } from '../components/alumnos/AlumnoView'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const AlumnoViewPage = () => {

  const { handlerAlumnoSelected } = useContext(UserContext)
  const { id } = useParams()
  useEffect(() => {
    handlerAlumnoSelected(id)
  }, [id])

  return (
    <>
      <Link className='btn buttonAgregar 'to={`/alumno/editar/${id}`}>Editar datos</Link>
      <hr></hr>
      <AlumnoView />
    </>
  )
}
