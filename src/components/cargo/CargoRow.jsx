import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const CargoRow = ({ cargo }) => {
  return (
    <tr>
      <td style={{ fontSize: '13px' }}>+</td>
      <td style={{ fontSize: '13px' }}>{cargo.condicionCargo}</td>
      <td style={{ fontSize: '13px' }}>{cargo?.division?.curso} </td>
      <td style={{ fontSize: '13px' }}>{cargo?.division?.divisionCurso}</td>
      <td style={{ fontSize: '13px' }}>{cargo.turno} </td>
      <td style={{ fontSize: '13px' }}>{cargo.regimen}<br></br>{cargo.materia} </td>
      <td style={{ fontSize: '13px' }}>--</td>
      <td style={{ fontSize: '13px' }}>0</td>
      <td style={{ fontSize: '13px' }}>juan m</td>
      <td style={{ fontSize: '13px' }}><Link to={`/cargo/ver/${cargo.id}`} className='btn btn-light btn-sm p-1'><FontAwesomeIcon icon={faMagnifyingGlass} size="2xs" /> Ver</Link></td>
    </tr>
  )
}
