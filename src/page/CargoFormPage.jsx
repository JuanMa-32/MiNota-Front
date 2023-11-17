import React, { useEffect } from 'react'
import { CargoForm } from '../components/cargo/CargoForm'
import { useParams } from 'react-router-dom';

export const CargoFormPage = () => {

  const {id} = useParams();
  useEffect(() => {
  }, [id])
  return (
    <> 
        <CargoForm idEscuela={id}></CargoForm>
    </>
  )
}
