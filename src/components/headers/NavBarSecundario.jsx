import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export const NavBarSecundario = ({id}) => {
  const {escuelaSeleccionada} =useContext(UserContext);
  return(
    <nav class="py-2 bg-body-tertiary border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
      <h6 class="nav-title">Esc. {escuelaSeleccionada.nombre}</h6>
        <li class="nav-item"><Link to={`/division/listar/${id}`} className='nav-link link-body-emphasis px-2'>Cursos y Divisiones</Link></li>
        <li class="nav-item"><Link to={`/cargo/listar/${id}/0`} className='nav-link link-body-emphasis px-2'>Cargo</Link></li>
        <li class="nav-item"><Link to={`/`} className='nav-link link-body-emphasis px-2'>Volver</Link></li>
      </ul>
    </div>
  </nav>
  )
}
