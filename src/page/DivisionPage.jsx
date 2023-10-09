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
      <h4 className="mb-3">División</h4>
      <Link to={`/division/editar/${id}`} className='btn btn-success btn-sm mt-3 ms-2'>Editar</Link>
      <button className='btn btn-danger btn-sm mt-3 ms-2' onClick={() => handlerDeleteDivision(id, idEsc)} >Eliminar</button>
      <hr />
      <DivisionView ></DivisionView>
      <br />

    </>

  )
}
