import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';


export const CargoEdit = () => {
    const { handlerAddCargo, cargoFormInit, errorsCargo, cargoSelected, handlerEditCargo } = useContext(UserContext);

    const [cargoForm, setcargoForm] = useState(cargoFormInit)

    const { id, motivo, fundamento, carrera, materia, regimen, condicionCargo, turno, resolucionCreacion
        , codigoJunta, division, observacion } = cargoForm;

    const idEsc = sessionStorage.getItem('idEscuela');
    useEffect(() => {
        setcargoForm({ ...cargoSelected })
    }, [cargoSelected])


    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setcargoForm({
            ...cargoForm,
            [name]: value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(cargoForm);
        handlerEditCargo(id, cargoForm)
    }

    return (
        <div className="col-md-12">
            <h5 className="mb-3">Editar cargo</h5>
            <form className="needs-validation" onSubmit={onSubmit}>
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
                        <select className="form-select form-select-sm" id="country" name="condicionCargo" disabled value={condicionCargo} >
                            <option value="" disabled selected>{condicionCargo} </option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Turno</label>
                        <select className="form-select form-select-sm" id="country" name="turno" value={turno} onChange={onInputChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Mañana">Mañana </option>
                            <option value="Completo">Completo</option>
                            <option value="Indefinido">Indefinido</option>
                        </select>
                    </div>
                    <div className="col-sm-5">
                        <label htmlFor="lastName" className="form-label">Resolución de creación</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="resolucionCreacion" value={resolucionCreacion} onChange={onInputChange} />
                        <p className='text-danger'>{errorsCargo?.resolucionCreacion}</p>
                    </div>
                    <div className="col-sm-5">
                        <label htmlFor="lastName" className="form-label">Código junta</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="codigoJunta" value={codigoJunta} onChange={onInputChange} />
                        <p className='text-danger'>{errorsCargo?.codigoJunta}</p>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label-sm">Observaciones</label>
                        <input type="text" diseabled className="form-control form-control-sm" name="observacion" value={observacion} onChange={onInputChange} />
                    </div>

                </div>
                <button className="btn btn-primary btn-sm mt-3" type="submit">Editar </button>
                <Link className='btn btn-light btn-sm mt-3 ms-2' to={`/cargo/listar/${idEsc}/0`}>Cancelar</Link>
            </form>
        </div>
    )
}
