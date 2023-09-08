import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';


export const DivisionForm = ({idEscuela}) => {

  const { divisionFormInit, hanlderAddDivision,errors } = useContext(UserContext)

  const [divisionForm, setdivisionForm] = useState(divisionFormInit)
  const { curso, division, turno, resolucion, carrera, modalidad, alta, baja } = divisionForm;

  const onInputChange = ({ target }) => {
    const {name,value} = target;
    setdivisionForm({
      ...divisionForm,
      [name]:value
    })
  }

  const onSubmit = (event) => {
    
    event.preventDefault();
    hanlderAddDivision(divisionForm,idEscuela);
    console.log(errors);
    //setdivisionForm(divisionFormInit);
  }
  return (
    <div className="col-md-10">
      <h3 className="mb-3">División</h3>
      <form className="needs-validation" onSubmit={onSubmit}>
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Curso</label>
            <select className="form-select form-select-sm" id="country" name="curso" value={curso} onChange={onInputChange}>
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
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="division" value={division} onChange={onInputChange} />
            <p className='text-danger'>{errors?.division}</p>
          </div>
         
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Turno</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="turno" value={turno} onChange={onInputChange} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Numero Resolución</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="resolucion" value={resolucion} onChange={onInputChange} />
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Carrera</label>
            <select className="form-select form-select-sm" id="country" name="carrera" value={carrera} onChange={onInputChange}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="Educacion primaria (Res. 3556/19)">Educacion primaria (Res. 3556/19)</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Modalidad</label>
            <select className="form-select form-select-sm" id="country" name="modalidad" value={modalidad} onChange={onInputChange}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="urbano marginal">Presencial</option>
            </select>
          </div>

          <div className="col-sm-3">
            <div className="form-group">
              <label for="fecha">Fecha de Alta</label>
              <input type="date" className="form-control" id="fecha" name="alta" value={alta} onChange={onInputChange}/>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label for="fecha">Fecha de Baja</label>
              <input type="date" className="form-control" id="fecha" name="baja" value={baja} disabled onChange={onInputChange}/>
            </div>
          </div>

        </div>
        <button className="btn btn-primary btn-sm mt-3" type="submit">Cargar </button>
        <Link to={`/division/listar/${idEscuela}`} className='btn btn-danger btn-sm mt-3 ms-2'>Volver</Link>
      </form>
    </div>
  )
}
