import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const DivisionRow = ({division}) => {

  const {curso,divisionCurso,turno,carrera,modalidad,alta,id} = division;
  return (
    <tr> 
    <td>{curso}</td>
    <td>{divisionCurso} </td>
    <td>{turno} </td>
    <td>{carrera} </td>
    <td>{modalidad} </td>
    <td>{alta}</td>
    <td>COMPLETAR!</td>
    <td><Link to={`/division/ver/${id}`} className='btn btn-light btn-sm p-1'><FontAwesomeIcon icon={faMagnifyingGlass} size="2xs"/> Ver</Link></td>
  </tr>
  )
}
