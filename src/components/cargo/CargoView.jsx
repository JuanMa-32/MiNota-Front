import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const CargoView = () => {

    const {cargoSelected}=useContext(UserContext);
    const {division,carrera,materia,regimen,condicionCargo,turno,resolucionCreacion,codigoJunta} = cargoSelected;

    return (
        <div className="row g-3">
              <div className="col-md-3">
                        <label htmlFor="country" className="form-label">División</label>
                        <select className="form-select form-select-sm" id="country" name="division" value={division} disabled >
                            <option value={division?.id} >{division?.curso}  {division?.divisionCurso} </option>
                        </select>
                    </div>
            <div className="col-md-3">
                <label htmlFor="country" className="form-label">Carrera</label>
                <select className="form-select form-select-sm" id="country" name="carrera" value={carrera} disabled>
                    <option value="" disabled selected>{carrera} </option>
                   
                </select>
            </div>
            <div className="col-md-3">
                <label htmlFor="country" className="form-label">Materia</label>
                <select className="form-select form-select-sm" id="country" name="materia" value={materia} disabled >
                    <option value="" disabled selected>{materia} </option>
                </select>
            </div>
            <div className="col-md-5">
                <label htmlFor="country" className="form-label">Régimen</label>
                <select className="form-select form-select-sm" id="country" name="regimen" value={regimen} disabled>
                    <option value="" disabled selected>{regimen} </option>
                </select>
            </div>
            <div className="col-md-3">
                <label htmlFor="country" className="form-label">Condición de cargo</label>
                <select className="form-select form-select-sm" id="country" name="condicionCargo"disabled value={condicionCargo} >
                    <option value="" disabled selected>{condicionCargo} </option>
                </select>
            </div>
            <div className="col-md-3">
                <label htmlFor="country" className="form-label">Turno</label>
                <select className="form-select form-select-sm" id="country" name="turno"disabled value={turno}>
                    <option value="" disabled selected>{turno} </option>

                </select>
            </div>
            <div className="col-sm-5">
                <label htmlFor="lastName" className="form-label">Resolución de creación</label>
                <input type="text"diseabled className="form-control form-control-sm" id="lastName"disabled placeholder="" name="resolucionCreacion" value={resolucionCreacion} />
            </div>
            <div className="col-sm-5">
                <label htmlFor="lastName" className="form-label">Código junta</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName"disabled placeholder="" name="codigoJunta" value={codigoJunta} />
            </div>
        </div>
    )
}
