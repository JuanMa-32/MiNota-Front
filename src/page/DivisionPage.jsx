import React, { useContext, useEffect } from 'react'
import { DivisionView } from '../components/division/DivisionView'
import { UserContext } from '../context/UserContext'
import { Link, useParams } from 'react-router-dom'

export const DivisionPage = () => {

  const { hanlderDivisionSelected, handlerDeleteDivision } = useContext(UserContext);
  const { id } = useParams();
  const idEsc = sessionStorage.getItem('idEscuela');

  useEffect(() => {
    hanlderDivisionSelected(id)
  }, [id])

  return (
    <>
    
      <div className="">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="">
  
    <Link to={`/division/alumnos/${id}/${0}`} className='link-offset-2 link-underline link-underline-opacity-0'>Alumnos</Link>
    </div>
  </nav>
</div>
      <h4 className="mb-3">División</h4>
      <Link to={`/division/editar/${id}`} className='btn btn-success btn-sm mt-3 ms-2'>Editar</Link>
      <button className='btn btn-danger btn-sm mt-3 ms-2' onClick={() => handlerDeleteDivision(id, idEsc)} >Eliminar</button>
      <hr />
      <DivisionView ></DivisionView>
      <br />

    </>

  )
}
