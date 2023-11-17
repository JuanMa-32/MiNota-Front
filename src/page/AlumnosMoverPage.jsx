import React, { useContext, useEffect } from 'react'
import { MoverAlumnos } from '../components/alumnos/MoverAlumnos'
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const AlumnosMoverPage = () => {
    const { id } = useParams();
    const { getUsuarios } = useContext(UserContext);
    
    useEffect(() => {
        getUsuarios(id)
    }, [id])
  return (
   <>
   <MoverAlumnos id={id}></MoverAlumnos>
   </>
  )
}
