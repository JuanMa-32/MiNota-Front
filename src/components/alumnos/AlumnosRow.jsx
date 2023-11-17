import { faMagnifyingGlass, faPeace, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const AlumnosRow = ({ alumno }) => {
  return (
    <tr>
      <td style={{ fontSize: '12px' }}>DNI {alumno.dni}</td>
      <td style={{ fontSize: '12px' }}>{alumno.apellido}, {alumno.nombre} </td>
      <td style={{ fontSize: '12px' }}>{alumno.genero} </td>
      <td style={{ fontSize: '12px' }}>1ª </td>
      <td style={{ fontSize: '12px' }}>U </td>
      <td style={{ fontSize: '12px' }}>{alumno.condicion}</td>
      <td style={{ fontSize: '12px' }}>{alumno.desde}</td>
      <td style={{ fontSize: '12px' }}>{alumno.hasta}</td>
      <td>
        <div className="btn-group">
          <Link to={`/alumno/ver/${alumno.id}`} className='btn btn-light btn-sm p-1'><FontAwesomeIcon icon={faMagnifyingGlass} size="2xs" /> Ver</Link>
        </div>
        <button type="button" className="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu" style={{ margin: '0', padding: '0' }}>
              <li >
                <Link className="dropdown-item" to={`/alumno/editar/${alumno.id}`} style={{ background: '#FFA500', color: 'white' }}>
                  <FontAwesomeIcon icon={faPen} size="xs" /> Editar
                </Link>
              </li>
              </ul>
      </td>
    </tr>
  )
}
