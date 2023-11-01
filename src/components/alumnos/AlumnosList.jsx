import React, { useContext } from 'react'
import { AlumnosRow } from './AlumnosRow'
import { UserContext } from '../../context/UserContext'

export const AlumnosList = () => {
  const { alumnos } = useContext(UserContext);
  return (
    <table className="table table-sm table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col" style={{ fontSize: '14px' }}>Documento</th>
          <th scope="col" style={{ fontSize: '14px' }}>Alumno</th>
          <th scope="col" style={{ fontSize: '14px' }}>Género</th>
          <th scope="col" style={{ fontSize: '14px' }}>Cur</th>
          <th scope="col" style={{ fontSize: '14px' }}>Div</th>
          <th scope="col" style={{ fontSize: '14px' }}>Condición</th>
          <th scope="col" style={{ fontSize: '14px' }}>Desde</th>
          <th scope="col" style={{ fontSize: '14px' }}>Hasta</th>
          <th scope="col" style={{ fontSize: '14px' }}></th>
        </tr>
      </thead>
      <tbody>
        {
          alumnos?.map(alumno =>
            <AlumnosRow alumno={alumno} ></AlumnosRow>
          )
        }
      </tbody>
    </table>
  )
}
