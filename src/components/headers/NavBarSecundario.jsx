import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export const NavBarSecundario = ({id}) => {
  const {escuelaSeleccionada} =useContext(UserContext);
  return(
    <nav className="py-2 bg-body-tertiary border-bottom">
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto">
      <h6 className="nav-title">Esc. {escuelaSeleccionada.nombre}</h6>
        <li className="nav-item"><Link to={`/division/listar/${id}`} className='nav-link link-body-emphasis px-2'>Cursos y Divisiones</Link></li>
        <li className="nav-item"><Link to={`/cargo/listar/${id}/0`} className='nav-link link-body-emphasis px-2'>Cargo</Link></li>
        <li className="nav-item"><Link to={`/servicio/listar/${id}/0`} className='nav-link link-body-emphasis px-2'>servicios</Link></li>
      </ul>
    </div>
  </nav>
  )
}
