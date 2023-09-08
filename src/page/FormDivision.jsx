import React, { useEffect } from 'react'
import { DivisionForm } from '../components/division/DIvisionForm'
import { useParams } from 'react-router-dom';

export const FormDivision = () => {
  const {id} = useParams();
  useEffect(() => {
     
      
  }, [id])
  return (
    <DivisionForm idEscuela={id}></DivisionForm>
  )
}
