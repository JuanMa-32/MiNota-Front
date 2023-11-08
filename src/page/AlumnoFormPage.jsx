import React from 'react'
import { FormAlumno } from '../components/alumnos/FormAlumno'
import { useParams } from 'react-router-dom'

export const AlumnoFormPage = () => {
  const {idDivision} = useParams();
  return (
  <FormAlumno idDivision={idDivision}></FormAlumno>
  )
}
