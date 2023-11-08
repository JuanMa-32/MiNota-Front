import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'

export const FormAlumno = ({ idDivision }) => {
    const { usuarioInit, handlerAddAlumno } = useContext(UserContext)

    const [alumnoForm, setalumnoForm] = useState(usuarioInit)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setalumnoForm({
            ...alumnoForm,
            [name]: value
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        handlerAddAlumno(idDivision, alumnoForm)
    }
    return (
        <div className="col-md-12">
            <h6>Verifique que los datos del alumno a incorporar al curso actual sean correctos.</h6>
            <form className="needs-validation" onSubmit={onSubmit}>
                <div className="row g-3">
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Documento</label>
                        <input type="text" className="form-control form-control-sm" name="dni" value={alumnoForm.dni} onChange={onInputChange} />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Apellido</label>
                        <input type="text" className="form-control form-control-sm" name="apellido" value={alumnoForm.apellido} onChange={onInputChange} />

                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Nombre</label>
                        <input type="text" className="form-control form-control-sm" name="nombre" value={alumnoForm.nombre} onChange={onInputChange} />

                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label htmlFor="fecha">Fecha de Nacimiento</label>
                            <input type="date" className="form-control form-control-sm" id="fecha" name="nacimiento" value={alumnoForm.nacimiento} onChange={onInputChange} />
                        </div>
                    </div>
                    <p>Ingrese la fecha, causa de entrada y ciclo lectivo</p>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm">Condición</label>
                        <select className="form-select form-select-sm" name="condicion" value={alumnoForm.condicion} onChange={onInputChange}>
                            <option value="" disabled >Seleccionar</option>
                            <option value="Aceleración">Aceleración</option>
                            <option value="Condicional">Condicional</option>
                            <option value="Egreso no efectivo">Egreso no efectivo</option>
                            <option value="Escolaridad protegida">Escolaridad protegida</option>
                            <option value="Libre">Libre</option>
                            <option value="Promoción condicionada">Promoción condicionada</option>
                            <option value="Recursante">Recursante</option>
                            <option value="Regular">Regular</option>
                            <option value="Transitoria">Transitoria</option>
                        </select>
                    </div>

                    <div className="col-sm-2">
                        <div className="form-group">
                            <label htmlFor="fecha">Desde</label>
                            <input type="date" className="form-control form-control-sm" id="fecha" name="desde" value={alumnoForm.desde} onChange={onInputChange} />
                        </div>
                    </div>

                 

                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm">Causa de entrada</label>
                        <select className="form-select form-select-sm" name="modalidad" onChange={onInputChange}>
                            <option value="" disabled >Seleccionar</option>
                            <option value="ALTA en Apoyo modalidad Especial">ALTA en Apoyo modalidad Especial</option>
                            <option value="COMPENSACIÓN PRIMARIA">COMPENSACIÓN PRIMARIA</option>
                            <option value="Con Pase de otra Seccion del mismo Establecimiento">Con Pase de otra Seccion del mismo Establecimiento</option>
                            <option value="Con Pase de Otro Establecimiento de la Provincia">Con Pase de Otro Establecimiento de la Provincia</option>
                            <option value="Con Pase de Otro Establecimiento fuera de la Prov.">Con Pase de Otro Establecimiento fuera de la Prov.</option>
                            <option value="CONTINUA">CONTINUA</option>
                            <option value="DESCONOCIDA">DESCONOCIDA</option>
                            <option value="INSCRIPCIÓN SIN PASE">INSCRIPCIÓN SIN PASE</option>
                            <option value="INTENSIFICACIÓN PRIMARIA">INTENSIFICACIÓN PRIMARIA</option>
                            <option value="PERMANENCIA">PERMANENCIA</option>
                            <option value="PREINSCRIPCIÓN">PREINSCRIPCIÓN</option>
                            <option value="PROMOCIÓN">PROMOCIÓN</option>
                            <option value="REPITENCIA">REPITENCIA</option>
                        </select>

                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                            <label htmlFor="fecha">Ciclo lectivo</label>
                            <input type="date" className="form-control form-control-sm" id="fecha" />
                        </div>

                    </div>
                </div>
                <button className="btn btn-primary btn-sm mt-3" type="submit">Guardar y editar alumno</button>
            </form>
        </div>
    )
}
