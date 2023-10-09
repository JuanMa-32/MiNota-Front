import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const DivisionRow = ({division}) => {

  const {curso,divisionCurso,turno,carrera,modalidad,alta,id} = division;
  return (
    <tr> 
    <td  style={{ fontSize: '13px' }}>{curso}</td>
    <td  style={{ fontSize: '13px' }}>{divisionCurso} </td>
    <td  style={{ fontSize: '13px' }}>{turno} </td>
    <td  style={{ fontSize: '13px' }}>{carrera} </td>
    <td  style={{ fontSize: '13px' }}>{modalidad} </td>
    <td  style={{ fontSize: '13px' }}>{alta}</td>
    <td  style={{ fontSize: '13px' }}>COMPLETAR!</td>
    <td><Link to={`/division/ver/${id}`} className='btn btn-light btn-sm p-1'><FontAwesomeIcon icon={faMagnifyingGlass} size="2xs"/> Ver</Link></td>
  </tr>
  )
}
