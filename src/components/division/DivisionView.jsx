import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';


export const DivisionView = () => {

    
    const { divisionFormInit,divisionSelected } = useContext(UserContext)

  const [divisionForm, setdivisionForm] = useState(divisionFormInit)
  const { curso, division, turno, resolucion, carrera, modalidad, alta, baja } = divisionForm;

  useEffect(() => {
    setdivisionForm({
      ...divisionSelected
    })
  }, [divisionSelected])
  
  return (
    <div className="col-md-10">
     
      <form className="needs-validation" >
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Curso</label>
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
            <label htmlFor="lastName" className="form-label">División</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="division" value={division} disabled />
          
          </div>

          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Turno</label>
            <input disabled type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="turno" value={turno}  />
          
          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Numero Resolución</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="resolucion" value={resolucion}  disabled/>
            
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Carrera</label>
            <select className="form-select form-select-sm" id="country" name="carrera" value={carrera} disabled>
              <option value="" disabled selected>Seleccionar</option>
              <option value="Educacion primaria (Res. 3556/19)">Educacion primaria (Res. 3556/19)</option>
            </select>
          
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Modalidad</label>
            <select className="form-select form-select-sm" id="country" name="modalidad" value={modalidad} disabled>
              <option value="" disabled selected>Seleccionar</option>
              <option value="presencial">Presencial</option>
            </select>
           
          </div>

          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="fecha">Fecha de Alta</label>
              <input type="date" className="form-control" id="fecha" name="alta" value={alta}  disabled/>
            </div>
           
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="fecha">Fecha de Baja</label>
              <input type="date" className="form-control" id="fecha" name="baja" value={baja} disabled  />
            </div>
          </div>

        </div>

      </form>
    </div>
  )
}
