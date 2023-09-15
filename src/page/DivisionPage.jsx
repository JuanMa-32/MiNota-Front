import React, { useContext, useEffect } from 'react'
import { DivisionView } from '../components/division/DivisionView'
import { UserContext } from '../context/UserContext'
import { Link, useParams } from 'react-router-dom'

export const DivisionPage = () => {

  const { hanlderDivisionSelected,handlerDeleteDivision } = useContext(UserContext);
  const { id } = useParams();
  const idEsc = sessionStorage.getItem('idEscuela');

  useEffect(() => {
    hanlderDivisionSelected(id)
  }, [id])

  return (
    <div className='container'>
       <h4 className="mb-3">División</h4>
      <Link to={`/division/editar/${id}`} className='btn btn-success btn-sm mt-3 ms-2'>Editar</Link>
      <button className='btn btn-danger btn-sm mt-3 ms-2' onClick={() => handlerDeleteDivision(id,idEsc)} >Eliminar</button>
      <hr />
      <DivisionView ></DivisionView>
      <hr />

      <table className="table table-bordered  table-sm table-hover">
        <thead>
          <tr>
            <th colSpan="4" className="text-center">Cargos</th>
          </tr>
          <tr>
            <th style={{ fontSize: '14px' }}>Nombre de Campo 1</th>
            <th style={{ fontSize: '14px' }}>Nombre de Campo 2</th>
            <th style={{ fontSize: '14px' }}>Nombre de Campo 3</th>
            <th style={{ fontSize: '14px' }}>Nombre de Campo 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
            <td>Dato 4</td>
          </tr>
          <tr>
            <td>Dato 5</td>
            <td>Dato 6</td>
            <td>Dato 7</td>
            <td>Dato 8</td>
          </tr>

        </tbody>
      </table>

      <table className="table table-bordered table-sm table-hover">
        <thead>
          <tr>
            <th colSpan="4" className="text-center">Alumnos</th>
          </tr>
          <tr>
            <th style={{ fontSize: '14px' }}>Nombre de Campo 1</th>
            <th style={{ fontSize: '14px' }}>Nombre de Campo 2</th>
            <th style={{ fontSize: '14px' }}>Nombre de Campo 3</th>
            <th style={{ fontSize: '14px' }}>Nombre de Campo 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontSize: '13px' }}>Dato 1</td>
            <td style={{ fontSize: '13px' }}>Dato 2</td>
            <td style={{ fontSize: '13px' }}>Dato 3</td>
            <td style={{ fontSize: '13px' }}>Dato 4</td>
          </tr>
          <tr>
            <td>Dato 5</td>
            <td>Dato 6</td>
            <td>Dato 7</td>
            <td>Dato 8</td>
          </tr>

        </tbody>
      </table>


    </div>

  )
}
