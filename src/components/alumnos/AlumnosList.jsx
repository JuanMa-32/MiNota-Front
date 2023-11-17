import React, { useContext, useEffect, useState } from 'react'
import { AlumnosRow } from './AlumnosRow'
import { UserContext } from '../../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser } from '@fortawesome/free-solid-svg-icons'
const filtrosInit = {
  documento: '',
  apellido: '',
  genero: '',
  condicion: '',
  desde: '',
  hasta: ''
}

export const AlumnosList = () => {
  const { alumnos } = useContext(UserContext);
  const [filtros, setfiltros] = useState(filtrosInit)
  const { documento, apellido, genero, condicion, desde, hasta } = filtros;


  const onChangeFiltros = ({ target }) => {
    const { name, value } = target;
    console.log(name + value);
    setfiltros({
      ...filtros,
      [name]: value
    })
  }


  


  let AlumnosFiltrados =[];
  const todosLosCamposVacios = Object.values(filtros).every((valor) => !valor);
  if (todosLosCamposVacios) {
    AlumnosFiltrados = alumnos;
  } else {
    AlumnosFiltrados = alumnos.filter((alumno) => {
      return (
        (!documento || alumno?.dni?.toLowerCase().includes(filtros.documento.toLowerCase())) &&
        (!apellido || alumno?.apellido?.toLowerCase().includes(apellido.toLowerCase())) &&
        (!genero || alumno?.genero?.toLowerCase().includes(genero.toLowerCase())) &&
        (!condicion || alumno?.condicion?.toLowerCase().includes(condicion.toLowerCase())) &&
        (!desde || alumno?.desde?.toLowerCase().includes(desde.toLowerCase())) &&
        (!hasta || alumno?.hasta?.toLowerCase().includes(hasta.toLowerCase()))

      );
    });

  }
  const restaurarFiltros = () => {
    setfiltros(filtrosInit)
  }
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
        <tr>

          <th scope="col" style={{ fontSize: '10px' }}>
            <input
              type="text"
              name="documento"
              placeholder="Documento"
              value={documento}
              onChange={onChangeFiltros}
            />
          </th>
          <th scope="col" style={{ fontSize: '10px' }}>
            <input
              type="text"
              name="apellido"
              placeholder="Alumno"
              value={apellido}
              onChange={onChangeFiltros}
            />
          </th>
          <th scope="col" style={{ fontSize: '10px' }}>
            <input
              type="text"
              name="genero"
              placeholder="Genero"
              value={genero}
              onChange={onChangeFiltros}
            />
          </th>
          <th scope="col" style={{ fontSize: '10px' }}>
            <input
              type="text"
              name="curso"
              placeholder="Cur"
              value={genero}
              onChange={onChangeFiltros}
            />
          </th>
          <th scope="col" style={{ fontSize: '10px' }}>
            <input
              type="text"
              name="division"
              placeholder="Div"
              value={genero}
              onChange={onChangeFiltros}
            />
          </th>
          <th scope="col" style={{ fontSize: '10px' }}>
            <input
              type="text"
              name="condicion"
              placeholder="Condicion"
              value={condicion}
              onChange={onChangeFiltros}
            />
          </th>
          <th scope="col" style={{ fontSize: '10px' }}>
            <input
              type="text"
              name="desde"
              placeholder="desde"
              value={desde}
              onChange={onChangeFiltros}
            />
          </th>
          <th scope="col" style={{ fontSize: '10px' }}>
            <input
              type="text"
              name="hasta"
              placeholder="hasta"
              value={hasta}
              onChange={onChangeFiltros}
            />
          </th>
          <th scope="col" style={{ fontSize: '14px' }}><button className='btn btn-sm btn-light ' onClick={() => restaurarFiltros()}><FontAwesomeIcon icon={faEraser} size="sm" /> Filtros</button></th>
        </tr>
      </thead>
      <tbody>
        {
          AlumnosFiltrados?.map(alumno =>
            <AlumnosRow key={alumno.id} alumno={alumno} ></AlumnosRow>
          )
        }
      </tbody>
    </table>
  )
}
