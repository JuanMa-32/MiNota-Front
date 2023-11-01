import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const AlumnosRow = ({ alumno }) => {
  return (
    <tr>
      <td style={{ fontSize: '13px' }}>DNI {alumno.dni}</td>
      <td style={{ fontSize: '13px' }}>{alumno.apellido}, {alumno.nombre} </td>
      <td style={{ fontSize: '13px' }}>{alumno.genero} </td>
      <td style={{ fontSize: '13px' }}>{alumno.nombre} </td>
      <td style={{ fontSize: '13px' }}>{alumno.nombre} </td>
      <td style={{ fontSize: '13px' }}>{alumno.nombre}</td>
      <td style={{ fontSize: '13px' }}>{alumno.desde}</td>
      <td style={{ fontSize: '13px' }}>{alumno.hasta}</td>
      <td><Link to={`/`} className='btn btn-light btn-sm p-1'><FontAwesomeIcon icon={faMagnifyingGlass} size="2xs" /> Ver</Link></td>
    </tr>
  )
}
