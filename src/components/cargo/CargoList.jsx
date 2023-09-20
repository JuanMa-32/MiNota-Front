import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { CargoRow } from './CargoRow';

export const CargoList = () => {
  const { cargos } = useContext(UserContext);
  return (
    <div className='container'>
      <table className="table table-sm table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" style={{ fontSize: '14px' }}></th>
            <th scope="col" style={{ fontSize: '14px' }}>Condición</th>
            <th scope="col" style={{ fontSize: '14px' }}>Cur</th>
            <th scope="col" style={{ fontSize: '14px' }}>Div</th>
            <th scope="col" style={{ fontSize: '14px' }}>Tur</th>
            <th scope="col" style={{ fontSize: '14px' }}>Régimen/Materia</th>
            <th scope="col" style={{ fontSize: '14px' }}>Hs.</th>
            <th scope="col" style={{ fontSize: '14px' }}>Servicios</th>
            <th scope="col" style={{ fontSize: '14px' }}>Persona Actual</th>
            <th scope="col" style={{ fontSize: '14px' }}></th>

          </tr>
        </thead>
        <tbody>
          {cargos?.map(cargo =>
            <CargoRow key={cargo.id} cargo={cargo} />
          )}
        </tbody>
      </table>
    </div>
  )
}
