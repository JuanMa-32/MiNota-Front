import React from 'react'


export const CargoForm = () => {
    return (
        <div className="col-md-10">
            <h5 className="mb-3">Agregar cargos</h5>
            <form className="needs-validation" >
                <div className="row g-3">
                <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Motivo</label>
                        <select className="form-select form-select-sm" id="country" name="ambito" >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Alta por baja de cargo">Alta por baja de cargo</option>
                            <option value="Cambio de curricula">Cambio de curricula</option>
                            <option value="Aprobado por supervicion">Aprobado por supervicion</option>
                            <option value="Aprobado por direccion de linea">Aprobado por direccion de linea</option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Fundamento</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroResolucionCierre" />
                    </div>
                </div>

                <hr className="my-4" />
                <h5>Cargo a solicitar</h5>
                <div className="row g-3">
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">División</label>
                        <select className="form-select form-select-sm" id="country" name="ambito" >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="urbano">Urbano </option>
                            
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Carrera</label>
                        <select className="form-select form-select-sm" id="country" name="ambito" >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Educacion Primaria (Res. 3556/19)">Educacion Primaria (Res. 3556/19)</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Materia</label>
                        <select className="form-select form-select-sm" id="country" name="ambito" >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="urbano">Urbano </option>
                            <option value="urbano marginal">Urbano marginal</option>
                            <option value="marginal">Marginal</option>
                            <option value="rural">Rural </option>
                            <option value="hibrural frontera">Rural frontera</option>
                            <option value="rural marginal">Rural marginal</option>
                            <option value="otra">Otra</option>
                        </select>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="country" className="form-label">Régimen</label>
                        <select className="form-select form-select-sm" id="country" name="ambito" >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="urbano">Urbano </option>
                            <option value="urbano marginal">Urbano marginal</option>
                            <option value="marginal">Marginal</option>
                            <option value="rural">Rural </option>
                            <option value="hibrural frontera">Rural frontera</option>
                            <option value="rural marginal">Rural marginal</option>
                            <option value="otra">Otra</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Condición de cargo</label>
                        <select className="form-select form-select-sm" id="country" name="ambito" >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="urbano">Urbano </option>
                            <option value="urbano marginal">Urbano marginal</option>
                            <option value="marginal">Marginal</option>
                            <option value="rural">Rural </option>
                            <option value="hibrural frontera">Rural frontera</option>
                            <option value="rural marginal">Rural marginal</option>
                            <option value="otra">Otra</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Turno</label>
                        <select className="form-select form-select-sm" id="country" name="ambito" >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="urbano">Urbano </option>
                            <option value="urbano marginal">Urbano marginal</option>
                            <option value="marginal">Marginal</option>
                            <option value="rural">Rural </option>
                            <option value="hibrural frontera">Rural frontera</option>
                            <option value="rural marginal">Rural marginal</option>
                            <option value="otra">Otra</option>
                        </select>
                    </div>
                    <div className="col-sm-5">
                        <label htmlFor="lastName" className="form-label">Resolución de creación</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroResolucionCierre" />
                    </div>
                    <div className="col-sm-5">
                        <label htmlFor="lastName" className="form-label">Código junta</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroResolucionCierre" />
                    </div>
                </div>
            </form>
        </div>
    )
}
