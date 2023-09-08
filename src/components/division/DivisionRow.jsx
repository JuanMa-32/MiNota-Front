import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const DivisionRow = ({division}) => {
  return (
    <tr> 
    <td>{division.curso}</td>
    <td>{division.division} </td>
    <td>{division.turno} </td>
    <td>{division.carrera} </td>
    <td>{division.modalidad} </td>
    <td>{division.alta}</td>
    <td>horario</td>
    <td><Link to={`/`} className='btn btn-light btn-sm p-1'><FontAwesomeIcon icon={faMagnifyingGlass} size="2xs"/> Ver</Link></td>
  </tr>
  )
}
