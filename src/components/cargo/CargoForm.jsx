import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './../../context/UserContext';
import { Link } from 'react-router-dom';


export const CargoForm = ({ idEscuela }) => {
    const { handlerAddCargo, cargoFormInit, getDivisiones, divisiones, errorsCargo } = useContext(UserContext);
    const [cargoForm, setcargoForm] = useState(cargoFormInit)
    const { motivo, fundamento, carrera, materia, regimen, condicionCargo, turno, resolucionCreacion
        , codigoJunta, division } = cargoForm;

    useEffect(() => {
        getDivisiones(idEscuela);
    }, [idEscuela])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        if (name === "division") {
            if (value === "") {
                setcargoForm({
                    ...cargoForm,
                    [name]: null, 
                });
            } else {
                const selectedDivision = divisiones.find(division => division.id === parseInt(value));
                console.log(selectedDivision);
                setcargoForm({
                    ...cargoForm,
                    [name]: selectedDivision
                });
            }
        } else {
            setcargoForm({
                ...cargoForm,
                [name]: value
            });
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        handlerAddCargo(idEscuela, cargoForm)
    }

    return (
        <div className="col-md-10">
            <h5 className="mb-3">Agregar cargos</h5>
            <form className="needs-validation" onSubmit={onSubmit}>
                <div className="row g-3">
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Motivo</label>
                        <select className="form-select form-select-sm" id="country" name="motivo" value={motivo} onChange={onInputChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Alta por baja de cargo">Alta por baja de cargo</option>
                            <option value="Cambio de curricula">Cambio de curricula</option>
                            <option value="Aprobado por supervicion">Aprobado por supervicion</option>
                            <option value="Aprobado por direccion de linea">Aprobado por direccion de linea</option>
                        </select>
                        <p  className='text-danger'>{errorsCargo?.motivo}</p>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Fundamento</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="fundamento" value={fundamento} onChange={onInputChange} />
                        <p  className='text-danger'>{errorsCargo?.fundamento}</p>
                    </div>
                </div>

                <hr className="my-4" />
                <h5>Cargo a solicitar</h5>
                <div className="row g-3">
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">División</label>
                        <select className="form-select form-select-sm" id="country" name="division" value={division?.id} onChange={onInputChange}>
                            <option value="">SIN DIVISION</option>
                            {divisiones.map(div => (
                                <option key={div.id} value={div.id}>
                                    {div.curso}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Carrera</label>
                        <select className="form-select form-select-sm" id="country" name="carrera" value={carrera} onChange={onInputChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Educacion Primaria (Res. 3556/19)">Educacion Primaria (Res. 3556/19)</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Materia</label>
                        <select className="form-select form-select-sm" id="country" name="materia" value={materia} onChange={onInputChange} >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Educación Compensatoria y Optimizadora (Espacio Abierto)">Educación Compensatoria y Optimizadora (Espacio Abierto)</option>
                            <option value="Formación Ética y Ciudadana">Formación Ética y Ciudadana</option>
                            <option value="Tecnología">Tecnología</option>
                            <option value="Lengua Extranjera-Inglés">Lengua Extranjera-Inglés</option>
                            <option value="HORTALIZAS Y MANEJO DE HUERTAS">HORTALIZAS Y MANEJO DE HUERTAS</option>
                            <option value="Ciencias Naturales">Ciencias Naturales</option>
                            <option value="Ciencias Sociales">Ciencias Sociales</option>
                            <option value="Educación Artística (A,B,C) Teatro, Música, Artes Visuales">Educación Artística (A,B,C) Teatro, Música, Artes Visuales</option>
                            <option value="Educación Física">Educación Física</option>
                            <option value="Lengua">Lengua</option>
                            <option value="Matemática">Matemática</option>
                            <option value="Danzas Latinoamericanas">Danzas Latinoamericanas</option>
                            <option value="Educación Plástica">Educación Plástica</option>
                            <option value="Otra (Aclarar en observaciones)">Otra (Aclarar en observaciones)</option>
                            <option value="Auxiliar de informática Educativa">Auxiliar de informática Educativa</option>
                            <option value="Danza (Jornada Extendida)">Danza (Jornada Extendida)</option>
                            <option value="Inglés (Jornada Extendida)">Inglés (Jornada Extendida)</option>
                            <option value="Música (Jornada Extendida)">Música (Jornada Extendida)</option>
                            <option value="Teatro (Jornada Extendida)">Teatro (Jornada Extendida)</option>
                            <option value="Arters Visuales (Jornada Extendida)">Arters Visuales (Jornada Extendida)</option>
                            <option value="Acompañamiento a la Trayectoria (Jornada Extendida)">Acompañamiento a la Trayectoria (Jornada Extendida)</option>
                            <option value="Coordinación Jornada Extendida">Coordinación Jornada Extendida</option>
                            <option value="Expresión Corporal">Expresión Corporal</option>
                            <option value="Auxiliar de informática Educativa (Jornada Extendida)">Auxiliar de informática Educativa (Jornada Extendida)</option>
                        </select>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="country" className="form-label">Régimen</label>
                        <select className="form-select form-select-sm" id="country" name="regimen" value={regimen} onChange={onInputChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="0111125 CELADOR">0111125 CELADOR</option>
                            <option value="122110 MAESTRO M. ESPECIALES COMUN">122110 MAESTRO M. ESPECIALES COMUN</option>
                            <option value="122111 MAESTRO ENSEÑANZA COMUN">122111 MAESTRO ENSEÑANZA COMUN</option>
                            <option value="122112 MAESTRO SECRETARIO COMUN">122112 MAESTRO SECRETARIO COMUN</option>
                            <option value="122113 VICEDIRECTOR COMUN">122113 VICEDIRECTOR COMUN</option>
                            <option value="122114 DIRECTOR MAESTRO PERSONAL UNICO COMUN">122114 DIRECTOR MAESTRO PERSONAL UNICO COMUN</option>
                            <option value="122115 DIRECTOR LIBRE COMUN">122115 DIRECTOR LIBRE COMUN</option>
                            <option value="122116 HORAS CATEDRA COMUNES">122116 HORAS CATEDRA COMUNES</option>
                        </select>
                        <p  className='text-danger'>{errorsCargo?.regimen}</p>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Condición de cargo</label>
                        <select className="form-select form-select-sm" id="country" name="condicionCargo" value={condicionCargo} onChange={onInputChange} >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Normal">Normal </option>
                            <option value="Servicio Domiciliario">Servicio Domiciliario</option>
                            <option value="Servicio Hospitalario">Servicio Hospitalario</option>
                            <option value="PME">PME</option>
                            <option value="MATE">MATE</option>
                            <option value="Referente TEM (Ex FinEs)">Referente TEM (Ex FinEs)</option>
                            <option value="PEFyC">PEFyC</option>
                            <option value="Proyecto Institucional">Proyecto Institucional</option>
                            <option value="Disponibilidad">Disponibilidad</option>
                            <option value="Horas de Gestión">Horas de Gestión</option>
                            <option value="Eq. apoyo Incl itinerate">Eq. apoyo Incl itinerate</option>
                            <option value="Jefautra">Jefautra</option>
                            <option value="Coordinación Carrera">Coordinación Carrera</option>
                            <option value="Coordinación Sede">Coordinación Sede</option>
                            <option value="Tutoria">Tutoria</option>
                            <option value="Coordicnación de Área">Coordicnación de Área</option>
                            <option value="PPAP">PPAP</option>
                        </select>
                        <p  className='text-danger'>{errorsCargo?.condicionCargo}</p>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Turno</label>
                        <select className="form-select form-select-sm" id="country" name="turno" value={turno} onChange={onInputChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Mañana">Mañana </option>
                            <option value="Completo">Completo</option>
                            <option value="Indefinido">Indefinido</option>
                        </select>
                        <p  className='text-danger'>{errorsCargo?.turno}</p>
                    </div>
                    <div className="col-sm-5">
                        <label htmlFor="lastName" className="form-label">Resolución de creación</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="resolucionCreacion" value={resolucionCreacion} onChange={onInputChange} />
                        <p  className='text-danger'>{errorsCargo?.resolucionCreacion}</p>
                    </div>
                    <div className="col-sm-5">
                        <label htmlFor="lastName" className="form-label">Código junta</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="codigoJunta" value={codigoJunta} onChange={onInputChange} />
                        <p  className='text-danger'>{errorsCargo?.codigoJunta}</p>
                    </div>
                </div>
                <button className="btn btn-primary btn-sm mt-3" type="submit">Cargar </button>
                <Link className='btn btn-secondary btn-sm mt-3 ms-2' to={`/cargo/listar/${idEscuela}/0`}>Cancelar</Link>
            </form>
        </div>
    )
}
