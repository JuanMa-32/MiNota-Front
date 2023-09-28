import { faMagnifyingGlass, faPen, faPlug, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './../../context/UserContext';

export const CargoRow = ({ cargo }) => {
  const { handlerDeleteCargo } = useContext(UserContext);
  const idEsc = sessionStorage.getItem('idEscuela');


  return (
    <tr>
      <td style={{ fontSize: '13px' }}>+</td>
      <td style={{ fontSize: '13px' }}>{cargo.condicionCargo}</td>
      <td style={{ fontSize: '13px' }}>{cargo?.division?.curso} </td>
      <td style={{ fontSize: '13px' }}>{cargo?.division?.divisionCurso}</td>
      <td style={{ fontSize: '13px' }}>{cargo.turno} </td>
      <td style={{ fontSize: '13px' }}>{cargo.regimen}<br></br>{cargo.materia} </td>
      <td style={{ fontSize: '13px' }}>--</td>
      <td style={{ fontSize: '13px' }}>{cargo?.servicio.length}</td>
      <td style={{ fontSize: '13px' }}> {cargo?.servicio.map(serv => (
        <React.Fragment key={serv.id}>
          {serv.usuario.cuil}
          <br />
          {serv.usuario.nombre}
        </React.Fragment>
      ))}</td>
      <td style={{ fontSize: '13px' }}>
        <div className="btn-group">
          <Link className="btn btn-light btn-sm p-1" to={`/cargo/ver/${cargo.id}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2xs" /> ver
          </Link>
          <button type="button" className="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/cargo/editar/${cargo.id}`}><FontAwesomeIcon icon={faPen} size="sm" />  Editar</Link></li>
            <li><button className="dropdown-item" onClick={() => handlerDeleteCargo(cargo.id, idEsc)} ><FontAwesomeIcon icon={faXmark} size="sm" /> Eliminar</button></li>
            <li><Link className="dropdown-item" to={`/servicio/cargar/${cargo.id}`}><FontAwesomeIcon icon={faPlus} size="sm" /> Agregar servicio</Link></li>
            {/* Agrega más opciones según sea necesario */}
          </ul>
        </div>
      </td>

    </tr>
  )
}
