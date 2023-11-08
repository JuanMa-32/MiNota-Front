import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { findCargoDivision } from '../../services/divisionesService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export const DivisionView = () => {


  const { divisionFormInit, divisionSelected } = useContext(UserContext)
  const [cargoDivision, setcargoDivision] = useState({})//aca traigo el cargo que contiene esa division

  const [divisionForm, setdivisionForm] = useState(divisionFormInit)
  const { curso, divisionCurso, turno, resolucion, carrera, modalidad, alta, baja } = divisionForm;


  useEffect(() => {
    setdivisionForm({
      ...divisionSelected
    })
    getCargoDivision();
  }, [divisionSelected])


  //funcion para traer el cargo
  const getCargoDivision = async () => {
    try {
      const response = await findCargoDivision(divisionSelected.id)
      setcargoDivision(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="col-md-12">
      <form className="needs-validation" >
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label-sm">Curso</label>
            <select className="form-select form-select-sm" id="country" name="curso" value={curso} disabled>
              <option value="" disabled selected>Seleccionar Curso</option>
              <option value="1º Primario">1º Primario </option>
              <option value="2º Primario">2º Primario</option>
              <option value="3º Primario">3º Primario</option>
              <option value="4º Primario">4º Primario</option>
              <option value="5º Primario">5º Primario</option>
              <option value="6º Primario">6º Primario</option>
              <option value="7º Primario">7º Primario</option>
            </select>

          </div>
          <div className="col-sm-1">
            <label htmlFor="lastName" className="form-label-sm">División</label>
            <input type="text" className="form-control form-control-sm" name="division" value={divisionCurso} disabled />

          </div>

          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label-sm">Turno</label>
            <input disabled type="text" className="form-control form-control-sm" name="turno" value={turno} />

          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label-sm">Numero Resolución</label>
            <input type="text" className="form-control form-control-sm" name="resolucion" value={resolucion} disabled />

          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label-sm">Carrera</label>
            <select className="form-select form-select-sm" name="carrera" value={carrera} disabled>

              <option value="Educacion primaria (Res. 3556/19)"> {carrera}</option>
            </select>

          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label-sm">Modalidad</label>
            <select className="form-select form-select-sm" name="modalidad" value={modalidad} disabled>

              <option value="presencial">{modalidad}</option>
            </select>

          </div>

          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="fecha">Fecha de Alta</label>
              <input type="date" className="form-control form-select-sm" name="alta" value={alta} disabled />
            </div>

          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="fecha">Fecha de Baja</label>
              <input type="date" className="form-control form-select-sm" name="baja" value={baja} disabled />
            </div>
          </div>
        </div>
      </form>

      <br></br>
      <table className="table table-sm table-bordered table-hover">
        <thead>
          <tr>
            <th colSpan="5" style={{ fontSize: '15px', textAlign: 'center' }}>Cargos</th>
          </tr>
          <tr>
            <th scope="col" style={{ fontSize: '14px' }}>Condiciòn</th>
            <th scope="col" style={{ fontSize: '14px' }}>Materia</th>
            <th scope="col" style={{ fontSize: '14px' }}>Hs.</th>
            <th scope="col" style={{ fontSize: '14px' }}>Régimen</th>

          </tr>
        </thead>
        <tbody>
          <tr >
            <td style={{ fontSize: '13px' }}>{cargoDivision.condicionCargo}</td>
            <td style={{ fontSize: '13px' }}></td>
            <td style={{ fontSize: '13px' }}></td>
            <td style={{ fontSize: '13px' }}>{cargoDivision.regimen}</td>
          </tr>
          <tr>

            <td colspan="1" style={{ fontSize: '13px' }}></td>
            {cargoDivision?.servicio?.map((servicio, index) => (
              <div key={index}>
                <tr></tr>
                <td style={{ fontSize: '13px' }}>
                  {servicio.situacionRevista}
                </td>

                <td style={{ fontSize: '13px' }}>
                  {servicio.usuario.cuil}
                </td>
                <td style={{ fontSize: '13px' }}>
                  {servicio.usuario.apellido}, {servicio.usuario.nombre}
                </td>
              </div>
            ))}
          </tr>
        </tbody>
      </table>

      <br></br>

      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th colSpan="5" className="text-center" style={{ fontSize: '14px' }}>
              Alumnos ({divisionForm?.alumnos?.length})
            </th>
          </tr>
          <tr>
            <th scope="col" style={{ fontSize: '14px' }}>C. lectivo</th>
            <th scope="col" style={{ fontSize: '14px' }}>Condición</th>
            <th scope="col" style={{ fontSize: '14px' }}>Documento</th>
            <th scope="col" style={{ fontSize: '14px' }}>Persona</th>
            <th scope="col" style={{ fontSize: '14px' }}> F. Nacimiento</th>
            <th scope="col" style={{ fontSize: '14px' }}>Género</th>
            <th scope="col" style={{ fontSize: '14px' }}>Desde </th>
            <th scope="col" style={{ fontSize: '14px' }}></th>
          </tr>
        
        </thead>
        <tbody>
          {divisionForm?.alumnos?.map((alumno) => (
            <tr>
              <td style={{ fontSize: '11px' }} className="text-sm">{alumno.nombre}</td>
              <td style={{ fontSize: '11px' }} className="text-sm">{alumno.nombre}</td>
              <td style={{ fontSize: '11px' }} className="text-sm">{alumno.dni}</td>
              <td style={{ fontSize: '11px' }} className="text-sm">{alumno.apellido}, {alumno.nombre}</td>
              <td style={{ fontSize: '11px' }} className="text-sm">{alumno.nacimiento}</td>
              <td style={{ fontSize: '11px' }} className="text-sm">{alumno.genero}</td>
              <td style={{ fontSize: '11px' }} className="text-sm">{alumno.desde}</td>
              <td>
                <Link to={`/alumno/ver/${alumno.id}`} className="btn btn-light btn-sm p-1">
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="2xs" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}
