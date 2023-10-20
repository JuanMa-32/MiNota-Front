import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';


export const DivisionEdit = ({idEscuela}) => {

  const { divisionFormInit, hanlderAddDivision, errors,divisionSelected } = useContext(UserContext)

  const [divisionForm, setdivisionForm] = useState(divisionFormInit)
  const {id, curso, division, turno, resolucion, carrera, modalidad, alta, baja } = divisionForm;

  useEffect(() => {
    setdivisionForm({
      ...divisionSelected
    })
  }, [divisionSelected])

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setdivisionForm({
      ...divisionForm,
      [name]: value
    })
  }
  const onSubmit = (event) => {
    event.preventDefault();
    hanlderAddDivision(divisionForm,idEscuela);
  }
  return (
    <div className="col-md-10">
      <h4 className="mb-3">División</h4>
      <hr />
      <form className="needs-validation" onSubmit={onSubmit}>
        <input hidden name="id" value={id} />
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Curso</label>
            <select className="form-select form-select-sm" id="country" name="curso" value={curso} onChange={onInputChange} disabled>
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
            <label htmlFor="lastName" className="form-label">División</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="division" value={division} onChange={onInputChange} disabled />

          </div>

          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Turno</label>
            <input disabled type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="turno" value={turno} onChange={onInputChange} />
            <p className='text-danger'>{errors?.turno}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Numero Resolución</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="resolucion" value={resolucion} onChange={onInputChange} />
            <p className='text-danger'>{errors?.resolucion}</p>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Carrera</label>
            <select className="form-select form-select-sm" id="country" name="carrera" disabled value={carrera} onChange={onInputChange}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="Educacion primaria (Res. 3556/19)">Educacion primaria (Res. 3556/19)</option>
            </select>

          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label-sm">Modalidad</label>
            <select className="form-select form-select-sm" id="country" name="modalidad" value={modalidad} onChange={onInputChange}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="presencial">Presencial</option>
              <option value="distancia">Distancia</option>
              <option value="semi presencial">Semi Presencial</option>
            </select>
            <p className='text-danger'>{errors?.modalidad}</p>
          </div>

          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="fecha">Fecha de Alta</label>
              <input type="date" className="form-control  form-control-sm" id="fecha" name="alta" value={alta} onChange={onInputChange} />
            </div>
            <p className='text-danger'>{errors?.alta}</p>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="fecha">Fecha de Baja</label>
              <input type="date" className="form-control  form-control-sm" id="fecha" name="baja" value={baja} disabled onChange={onInputChange} />
            </div>
          </div>

        </div>
        <button className="btn btn-primary btn-sm mt-3" type="submit">Cargar </button>
        <Link to={`/division/ver/${id}`} className='btn btn-danger btn-sm mt-3 ms-2'>Cancelar</Link>
      </form>
    </div>
  )
}
