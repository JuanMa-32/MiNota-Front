import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './../../context/UserContext';
import { departamentosMdz } from '../../services/ServicioService';

export const ServicioForm = ({ idCargo }) => {

    const { servicioInit, handlerAddServicio, localidades, hanlderAddLocalidades, usuarioDni, handlerUsuarioDni, restablecerUsuario } = useContext(UserContext);

    const [servicioForm, setservicioForm] = useState(servicioInit)
    const { usuario, alta, baja, diasCumplir, obligacion, funcion, observacion, situacionRevista } = servicioForm;
    const [dni, setdni] = useState(0)

    const [departamentos, setdepartamentos] = useState([])
    const [usuario2, setusuario2] = useState({})
    const [isUser, setisUser] = useState(false)
    const getDpto = async () => {
        try {
            const response = await departamentosMdz();
            setdepartamentos(response.data.municipios)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        hanlderAddLocalidades()
        getDpto()
    }, [])

    useEffect(() => {
        setusuario2(usuarioDni)
        if (usuarioDni.cuil) {

            setisUser(true)
        } else {
            setisUser(false)
        }
    }, [usuarioDni])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
      
        setservicioForm({
            ...servicioForm,
            [name]: value
        })
    };
    const onInputUsuarioChange = ({ target }) => {
        const { name, value } = target;
        if (name === "localidad") {
            const selectedLocalidad = localidades.find(localidad => localidad.id === parseInt(value));
            console.log(selectedLocalidad);
            setusuario2({
                ...usuario2,
                [name]: selectedLocalidad
            });
        } else {
            setusuario2({
                ...usuario2,
                [name]: value
            })
        }
    };


    const onSubmit = (event) => {
        event.preventDefault();
        const updatedServicioForm2 = { ...servicioForm };
        updatedServicioForm2.usuario = usuario2;
        setservicioForm(updatedServicioForm2);
       
        handlerAddServicio(idCargo, updatedServicioForm2)
    }

    const onInputDni = ({ target }) => {
        setdni(target.value)
    }

    const onSubmitDni = (event) => {
        event.preventDefault();
        handlerUsuarioDni(dni)
    }

    return (
        <div className="col-md-10">
            <h5 className="mb-3">Agregar Servicio</h5>

            <form className="needs-validation" onSubmit={onSubmitDni}>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Documento</label>
                        <div className="input-group">
                            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="dni" value={dni} onChange={onInputDni} />
                            <div className="input-group-append">
                                <button className="btn btn-light btn-sm" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                                <button type='button' className="btn btn-light btn-sm" onClick={() => restablecerUsuario()}><FontAwesomeIcon icon={faXmark} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <br />
            <form className="needs-validation" onSubmit={onSubmit}>
                <div className="row g-3">
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">CUIL</label>
                        <input type="number" className="form-control form-control-sm" id="lastName"
                            name="cuil" value={usuario2?.cuil} onChange={onInputUsuarioChange}
                            disabled={isUser}
                        />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">dni</label>
                        <input type="number" className="form-control form-control-sm" disabled={isUser}
                            name="dni" value={usuario2?.dni} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="lastName" className="form-label-sm">Apellido</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="apellido" value={usuario2?.apellido} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="lastName" className="form-label-sm">Nombre</label>
                        <input type="text" className="form-control form-control-sm"
                            disabled={isUser} name="nombre" value={usuario2?.nombre} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="country" className="form-label-sm ">Género</label>
                        <select className="form-select form-select-sm" disabled={isUser} name="genero" value={usuario2?.genero} onChange={onInputUsuarioChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Fecha de Nacimiento</label>
                        <input type="date" className="form-control form-control-sm" disabled={isUser}
                            name="nacimiento" value={usuario2?.nacimiento} onChange={onInputUsuarioChange} />
                    </div>
                </div>

                <hr className="my-4" />
                <h5>Datos Persona</h5>
                <div className="row g-3">
                    <div className="col-sm-3">
                        <label htmlFor="lastName" className="form-label-sm">Calle</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="calle" value={usuario2?.calle} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Número</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="numero" value={usuario2?.numero} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Depto</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="depto" value={usuario2?.depto} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Piso</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser} name="piso" value={usuario2?.piso} onChange={onInputUsuarioChange} />

                    </div>
                    <div className="col-md-4">
                        <label htmlFor="country" className="form-label-sm">Localidad</label>
                        <select
                            className="form-select form-select-sm"
                            disabled={isUser}
                            name="localidad"
                            value={usuario?.localidad?.id}
                            onChange={onInputUsuarioChange}
                        >
                            <option value="" disabled selected>Seleccionar</option>
                            {localidades.map(localidad => (
                                <option key={localidad.id} value={localidad.id}>
                                    {localidad.localidad} - {localidad.municipio}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">C.P</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="codigoPostal" value={usuario2?.codigoPostal} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Barrio</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="barrio" value={usuario2?.barrio} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Manzana</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="manzana" value={usuario2?.manzana} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Casa</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="casa" value={usuario2?.casa} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-sm-12">
                        <label htmlFor="lastName" className="form-label-sm">Referencia de Domicilio</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="referenciaDomicilio" value={usuario2?.referenciaDomicilio} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm ">Nivel de estudios</label>
                        <select className="form-select form-select-sm" disabled={isUser} name="nivelEstudio" onChange={onInputUsuarioChange} value={usuario2?.nivelEstudio} >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="ANALFABETO">ANALFABETO</option>
                            <option value="CAPC. LABORAL">CAPC. LABORAL</option>
                            <option value="NO CONTESTA">NO CONTESTA</option>
                            <option value="NO CORRESPONDE">NO CORRESPONDE</option>
                            <option value="PRIMARIO COMPLETO">PRIMARIO COMPLETO</option>
                            <option value="PRIMARIO INCOMPLETO">PRIMARIO INCOMPLETO</option>
                            <option value="SECUNDARIO COMPLETO">SECUNDARIO COMPLETO</option>
                            <option value="SECUNDARIO INCOMPLETO">SECUNDARIO INCOMPLETO</option>
                            <option value="TERCIARIO COMPLETO">TERCIARIO COMPLETO</option>
                            <option value="TERCIARIO INCOMPLETO">TERCIARIO INCOMPLETO</option>
                            <option value="UNIVERSITARIO COMPLETO">UNIVERSITARIO COMPLETO</option>
                            <option value="UNIVERSITARIO INCOMPLETO">UNIVERSITARIO INCOMPLETO</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm ">Ocupación</label>
                        <select className="form-select form-select-sm" disabled={isUser} name="ocupacion" onChange={onInputUsuarioChange} value={usuario2?.ocupacion} >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="***FALLECIDO***">***FALLECIDO***</option>
                            <option value="AMA DE CASA">AMA DE CASA</option>
                            <option value="BENEFICIARIO DE PROGRAMA SOCIAL">BENEFICIARIO DE PROGRAMA SOCIAL</option>
                            <option value="EMPLEADO PUBLICO O PRIVADO">EMPLEADO PUBLICO O PRIVADO</option>
                            <option value="ESTUDIANTE">ESTUDIANTE</option>
                            <option value="JUBILADO/A">JUBILADO/A</option>
                            <option value="NO TRABAJA">NO TRABAJA</option>
                            <option value="PROFESIONAL">PROFESIONAL</option>
                            <option value="VOLUNATARIO">VOLUNATARIO</option>
                            <option value="TRABAJA POR SU CUENTA">TRABAJA POR SU CUENTA</option>
                        </select>
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="lastName" className="form-label-sm">Teléfono fijo</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="telefonoFijo" value={usuario2?.telefonoFijo} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm ">Prestadora</label>
                        <select className="form-select form-select-sm" disabled={isUser} name="prestadora" onChange={onInputUsuarioChange} value={usuario2?.prestadora} >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Claro">Claro</option>
                            <option value="Personal">Personal</option>
                            <option value="Movistar">Movistar</option>
                            <option value="Tuenti">Tuenti</option>
                            <option value="Nextel">Nextel</option>
                        </select>
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="lastName" className="form-label-sm">Celular</label>
                        <input type="text" className="form-control form-control-sm" disabled={isUser}
                            name="celular" value={usuario2?.celular} onChange={onInputUsuarioChange} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm ">Estado Civil</label>
                        <select className="form-select form-select-sm" disabled={isUser} name="estadoCivil" onChange={onInputUsuarioChange} value={usuario2?.estadoCivil} >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="Casado/a">Casado/a</option>
                            <option value="Casado/a 2º Nupcias">Casado/a 2º Nupcias</option>
                            <option value="Casado/a 3º Nupcias">Casado/a 3º Nupcias</option>
                            <option value="Concubinato">Concubinato</option>
                            <option value="Divorciado/a">Divorciado/a</option>
                            <option value="Separado/a Legal">Separado/a Legal</option>
                            <option value="Sin informar">Sin informar</option>
                            <option value="Soltero/a">Soltero/a</option>
                            <option value="Viudo/a">Viudo/a</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm ">Obra social</label>
                        <select className="form-select form-select-sm" disabled={isUser} name="obraSocial" value={usuario2?.obraSocial} onChange={onInputUsuarioChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="osde">OSDE</option>
                            <option value="swiss_medical">Swiss Medical</option>
                            <option value="medife">Medifé</option>
                            <option value="ioma">IOMA</option>
                            <option value="pami">PAMI</option>
                            <option value="accord_salud">Accord Salud</option>
                            <option value="galeno">Galeno</option>
                            <option value="sancor_salud">Sancor Salud</option>
                            <option value="union_personal">Unión Personal</option>
                            <option value="omint">OMINT</option>
                            <option value="medicus">Medicus</option>
                            <option value="iapos">IAPOS</option>
                            <option value="osecac">OSECAC</option>
                            <option value="obsba">Obra Social de la Ciudad de Buenos Aires (Obsba)</option>
                            <option value="ospjn">Obra Social del Poder Judicial de la Nación (OSPJN)</option>
                            <option value="luis_pasteur">Obra Social Luis Pasteur</option>
                            <option value="daspu">DASPU</option>
                            <option value="iaf">Instituto de Ayuda Financiera a la Acción Social (IAF)</option>
                            <option value="cobertura_social_banca">Cobertura Social Bancaria</option>
                            <option value="policia_federal">Obra Social de la Policía Federal Argentina</option>
                            <option value="policia_bonaerense">Obra Social de la Policía Bonaerense</option>
                            <option value="obera">Obra Social de Empleados de la Universidad Nacional de Oberá</option>
                            <option value="osep">Obra Social de Empleados Públicos (OSEP)</option>
                            <option value="suterh">Sindicato Único de Trabajadores de Edificios de Renta y Horizontal (SUTERH)</option>
                            <option value="osecacr">Obra Social de Empleados de Comercio y Actividades Civiles (OSECACR)</option>
                            <option value="ugl">Unión de Gremios de la Logística (UGL)</option>
                            <option value="osef">Obra Social de Empresarios y Familias (OSEF)</option>
                            <option value="puan">Obra Social de la Universidad Nacional de la Provincia de Buenos Aires (PUAN)</option>
                            <option value="obrasocialferroviarios">Obra Social de Ferroviarios</option>
                            <option value="sadaic">Sociedad Argentina de Autores y Compositores de Música (SADAIC)</option>
                            <option value="satsaid">Sindicato Argentino de Televisión (Satsaid)</option>
                            <option value="camioneros">Sindicato de Camioneros</option>
                            <option value="sadop">Sindicato Argentino de Docentes Privados (SADOP)</option>
                            <option value="uta">Unión Tranviarios Automotor (UTA)</option>
                            <option value="sat">Sindicato Argentino de Televisión (SAT)</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm ">Grupo sanguíneo</label>
                        <select className="form-select form-select-sm" disabled={isUser} name="grupoSanguineo" value={usuario2?.grupoSanguineo} onChange={onInputUsuarioChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm ">Lugar Nacimiento</label>
                        <select className="form-select form-select-sm" disabled={isUser} name="lugarNacimiento" value={usuario2?.lugarNacimiento?.id} onChange={onInputUsuarioChange}>
                            <option value="" disabled selected>Seleccionar</option>

                            {departamentos?.map(departamento => (
                                <option key={departamento.id} value={departamento.id}>
                                    {departamento.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm ">Nacionalidad</label>
                        <select className="form-select form-select-sm" disabled={isUser} name="nacionalidad" value={usuario2?.nacionalidad} onChange={onInputUsuarioChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="argentina">Argentina</option>
                            <option value="brasil">Brasil</option>
                            <option value="chile">Chile</option>
                            <option value="colombia">Colombia</option>
                            <option value="ecuador">Ecuador</option>
                            <option value="espana">España</option>
                            <option value="estados_unidos">Estados Unidos</option>
                            <option value="francia">Francia</option>
                            <option value="italia">Italia</option>
                            <option value="mexico">México</option>
                            <option value="peru">Perú</option>
                            <option value="reino_unido">Reino Unido</option>
                            <option value="rusia">Rusia</option>
                            <option value="sudafrica">Sudáfrica</option>
                            <option value="uruguay">Uruguay</option>
                        </select>
                    </div>
                </div>

                <hr className="my-4" />
                <h5>Servicio</h5>
                <div className="row g-3">
                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm">Situación de revista</label>
                        <select className="form-select form-select-sm" id="country" name="situacionRevista" value={situacionRevista} onChange={onInputChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="urbano">Titular</option>
                            <option value="Reemplazo">Reemplazo</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Fecha Alta</label>
                        <input type="date" className="form-control form-control-sm" id="lastName" placeholder="" name="alta" value={alta} onChange={onInputChange} />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Fecha Baja</label>
                        <input disabled type="date" className="form-control form-control-sm" id="lastName" placeholder="" name="baja" value={baja} onChange={onInputChange} />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="lastName" className="form-label-sm">Dias a cumplir en mes</label>
                        <input type="number" className="form-control form-control-sm" id="lastName" placeholder="" name="diasCumplir" value={diasCumplir} onChange={onInputChange} />
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="lastName" className="form-label-sm">Oblig. a cumplir en mes</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="obligacion" value={obligacion} onChange={onInputChange} />
                    </div>
                    <br />

                    <div className="col-md-3">
                        <label htmlFor="country" className="form-label-sm">Función</label>
                        <select className="form-select form-select-sm" id="country" name="funcion" value={funcion} onChange={onInputChange}>
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="ADMINISTRADOR DE RED">ADMINISTRADOR DE RED</option>
                            <option value="Administrativa">Administrativa</option>
                            <option value="Asesor Pedagógico">Asesor Pedagógico</option>
                            <option value="Aulas Virtuales">Aulas Virtuales</option>
                            <option value="Auxiliar de laboratorio">Auxiliar de laboratorio</option>
                            <option value="Auxiliar docente">Auxiliar docente</option>
                            <option value="Auxiliar informático">Auxiliar informático</option>
                            <option value="Celador">Celador</option>
                            <option value="Director Maestro">Director Maestro</option>
                            <option value="En cambio de funcion">En cambio de funcion</option>
                            <option value="En traslado de función">En traslado de función</option>
                            <option value="En traslado preventivo">En traslado preventivo</option>
                            <option value="En traslado transitorio">En traslado transitorio</option>
                            <option value="Frente Alumnos">Frente Alumnos</option>
                            <option value="Maestro Dormitorio">Maestro Dormitorio</option>
                            <option value="Maestro Integrador">Maestro Integrador</option>
                            <option value="Maestro Recuperador">Maestro Recuperador</option>
                            <option value="Psicologo">Psicologo</option>
                            <option value="Tutoria">Tutoria</option>
                        </select>
                    </div>
                    <div className="col-sm-12">
                        <label htmlFor="lastName" className="form-label-sm">Observaciones</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="observacion" value={observacion} onChange={onInputChange} />
                    </div>

                </div>
                <button className="btn btn-primary btn-sm mt-3" type="submit">Agregar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </button>
            </form>
        </div>
    )
}
