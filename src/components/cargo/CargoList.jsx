import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { CargoRow } from './CargoRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
const filtroInit = {
  condicion: '',
  curso: '',
  division: '',
  turno: '',
  regimen: '',
  servicio: '',
}
export const CargoList = () => {
  const { cargos } = useContext(UserContext);
  const [filtros, setFiltros] = useState(filtroInit);
  const {condicion,curso,division,turno,regimen,servicio} = filtros;

  const onChangeFiltros = ({target}) => {
    const{name,value} = target;
    console.log(name+value);
    setFiltros({
      ...filtros,
      [name]:value
    })
  }

  

  let cargosFiltrados;
  const todosLosCamposVacios = Object.values(filtros).every((valor) => !valor);
  if (todosLosCamposVacios) {
    cargosFiltrados = cargos;
  } else {
    cargosFiltrados = cargos.filter((cargo) => {
      return (
        (!condicion || cargo.condicionCargo?.toLowerCase().includes(filtros.condicion.toLowerCase())) &&
        (!curso || cargo?.division?.curso?.toLowerCase().includes(curso.toLowerCase())) &&
        (!division || cargo?.division?.divisionCurso?.toLowerCase().includes(division.toLowerCase())) &&
        (!turno || cargo.turno?.toLowerCase().includes(turno.toLowerCase())) &&
        (!regimen || cargo.regimen?.toLowerCase().includes(regimen.toLowerCase())) &&
        (!servicio || cargo?.servicio.some(serv => serv.usuario.nombre.toLowerCase().includes(servicio.toLowerCase())))
      );
    });
    
  }
  const restaurarFiltros = () => {
    setFiltros(filtroInit)
  }
  
  
  

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

          <tr>
            <th scope="col" style={{ fontSize: '14px' }}></th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="condicion"
                placeholder="Condición"
                value={condicion}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="curso"
                placeholder="Curso"
                value={curso}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="division"
                placeholder="Division"
                value={division}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="turno"
                placeholder="Turno"
                value={turno}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="regimen"
                placeholder="Regimen/Materia"
                value={regimen}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '14px' }}></th>
            <th scope="col" style={{ fontSize: '14px' }}></th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="servicio"
                placeholder="Persona Actual"
                value={servicio}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '14px' }}><button className='btn btn-sm btn-light ' onClick={() => restaurarFiltros()}><FontAwesomeIcon icon={faEraser} size="sm" /> Filtros</button></th>
          </tr>

        </thead>
        <tbody>
          {cargosFiltrados?.map(cargo =>
            <CargoRow key={cargo.id} cargo={cargo} />
          )}
        </tbody>
      </table>
    </div>
  )
}
