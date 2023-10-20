import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Paginator } from '../components/Paginator';
import { CargoList } from './../components/cargo/CargoList';
import { UserContext } from '../context/UserContext';
import { NavBarSecundario } from './../components/headers/NavBarSecundario';

export const CargoListPage = () => {
  const { id, page } = useParams();
  const { getCargos, escuelaSeleccionada, paginator } = useContext(UserContext);
  useEffect(() => {
    getCargos(id, page)
  }, [page, id])
  const url = '/cargo/listar'
  return (
    <>
      <NavBarSecundario id={id} ></NavBarSecundario>
      <br></br>
      <h6>Cargos de Esc. {escuelaSeleccionada.nombre}</h6>
      <Link className='btn btn-success btn-sm mt-3 ms-3' to={`/cargo/agregar/${id}`}>Agregar</Link>
      <br></br><br></br>
      <CargoList></CargoList>
      <Paginator id={id} url={url} paginator={paginator}></Paginator>
    </>

  )
}
