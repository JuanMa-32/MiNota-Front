import { faAngleDown, faAngleUp, faBus, faDesktop, faMagnifyingGlass, faNewspaper, faRightToBracket, faSchool, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'





export const SideBar = () => {


  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };


  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: '280px' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <div className="d-flex justify-content-center mb-3">
            <img src="public/logo.png" alt="Logo de la compañía" width="100" height="100" />
            <p></p>
          </div>
        </a>
        <hr />


        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <NavLink to="/" className="nav-link link-body-emphasis" >
              <svg className="bi pe-none me-2" width="5" height="16">
                <use xlinkHref="#speedometer2" />
              </svg>
              <FontAwesomeIcon icon={faDesktop} className="icon-spacing" />
              Escritorio
            </NavLink>
          </li>


          <li onClick={toggleMenu}>
            <a className="nav-link link-body-emphasis">
              <svg className="bi pe-none" width="13" height="16">
                <use xlinkHref="#speedometer2" />
              </svg>
              <FontAwesomeIcon icon={faSchool} className="icon-spacing" />
              Esc.
              <span className="flecha ">
                {menuAbierto ? (
                  <FontAwesomeIcon icon={faAngleUp} className="icon-spacing" />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} className="icon-spacing" />
                )}
              </span>
            </a>
          </li>
          {menuAbierto && (
            <ul className="menu-desplegable">
              <li className="opcion">
              <NavLink to="/escuela/listar" className="nav-link link-body-emphasis" >Listar escuelas</NavLink>
              </li>
              <li className="opcion">
              <NavLink to="/escuela/registrar" className="nav-link link-body-emphasis" >Agregar escuela</NavLink>
              </li>
            </ul>
          )}


          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="5" height="16"><use xlinkHref="#table" /></svg>
              <FontAwesomeIcon icon={faBus} className="icon-spacing" />
              Salidas Escolares
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="5" height="16"><use xlinkHref="#grid" /></svg>
              <FontAwesomeIcon icon={faNewspaper} className="icon-spacing" />
              Publicaciones
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="5" height="16"><use xlinkHref="#people-circle" /></svg>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-spacing" />
              Bùsqueda
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="5" height="16"><use xlinkHref="#people-circle" /></svg>
              <FontAwesomeIcon icon={faUser} className="icon-spacing" />
              Usuarios
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="5" height="16"><use xlinkHref="#people-circle" /></svg>
              <FontAwesomeIcon icon={faRightToBracket} className="icon-spacing" />
              Salir
            </a>
          </li>
        </ul>
      </div>
    </div>


  )
}
