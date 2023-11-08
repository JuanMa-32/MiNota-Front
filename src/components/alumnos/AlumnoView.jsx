import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';

export const AlumnoView = () => {
  const { usuarioInit, alumnoSelected, hanlderAddLocalidades, localidades, handlerEditAlumno } = useContext(UserContext)


  const [alumnoForm, setalumnoForm] = useState(usuarioInit)

  useEffect(() => {
    setalumnoForm({
      ...alumnoSelected,
    })
  }, [alumnoSelected])
  useEffect(() => {
    hanlderAddLocalidades()
  }, [])


  const onInputChange = ({ target }) => {
    const { name, value } = target;
    if (name === "localidad") {
      const selectedLocalidad = localidades.find(localidad => localidad.id === parseInt(value));
      alumnoForm({
        ...alumnoForm,
        [name]: selectedLocalidad
      });
    } else {
      setalumnoForm({
        ...alumnoForm,
        [name]: value
      })
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    handlerEditAlumno(alumnoForm)
  }

  const [activeTab, setActiveTab] = useState('DATOS DOMICILIO');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="col-md-12">
      <h5>Datos personales</h5>
      <form className="needs-validation" onSubmit={onSubmit}>

        <div className="row g-3">
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label-sm">CUIL</label>
            <input disabled type="number" className="form-control form-control-sm" id="lastName" name="cuil" onChange={onInputChange} value={alumnoForm.cuil} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label-sm">Documento</label>
            <input disabled type="text" className="form-control form-control-sm" name="dni" value={alumnoForm.dni} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label-sm">Apellidos</label>
            <input disabled type="text" className="form-control form-control-sm" name="apellido" value={alumnoForm.apellido} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label-sm">Nombres</label>
            <input disabled type="text" className="form-control form-control-sm" name="nombre" value={alumnoForm.nombre} onChange={onInputChange} />
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label-sm ">Género</label>
            <select disabled className="form-select form-select-sm" name="genero" value={alumnoForm.genero} onChange={onInputChange}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label-sm ">Nacionalidad</label>
            <select disabled className="form-select form-select-sm" name="nacionalidad" value={alumnoForm.nacionalidad} onChange={onInputChange}>
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
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="fecha">Fecha de Nacimiento</label>
              <input disabled type="date" className="form-control form-control-sm" id="fecha" name="nacimiento" value={alumnoForm.nacimiento} onChange={onInputChange} />
            </div>
          </div>



        </div>
        <br />
        <ul className="nav nav-tabs">
          <li className={`nav-item ${activeTab === 'DATOS DOMICILIO' ? 'active' : ''}`}>
            <button
              className="nav-link"
              onClick={() => handleTabChange('DATOS DOMICILIO')}
              type='button'
            >
              Datos Domicilio
            </button>
          </li>
          <li className={`nav-item ${activeTab === 'DATOS PERSONALES' ? 'active' : ''}`}>
            <button
              className="nav-link"
              onClick={() => handleTabChange('DATOS PERSONALES')}
              type='button'
            >
              Datos Personales
            </button>
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === 'DATOS DOMICILIO' && (
            <div className="row g-3">

              <div className="col-sm-3">
                <label htmlFor="lastName" className="form-label-sm">Calle</label>
                <input disabled type="text" className="form-control form-control-sm"
                  name="calle" onChange={onInputChange} value={alumnoForm.calle} />
              </div>
              <div className="col-sm-1">
                <label htmlFor="lastName" className="form-label-sm">Número</label>
                <input disabled type="text" className="form-control form-control-sm"
                  name="numero" onChange={onInputChange} value={alumnoForm.numero} />
              </div>
              <div className="col-sm-1">
                <label htmlFor="lastName" className="form-label-sm">Depto</label>
                <input disabled type="text" className="form-control form-control-sm"
                  name="depto" onChange={onInputChange} value={alumnoForm.depto} />
              </div>
              <div className="col-sm-1">
                <label htmlFor="lastName" className="form-label-sm">Piso</label>
                <input disabled type="text" className="form-control form-control-sm" name="piso" value={alumnoForm.piso} onChange={onInputChange} />
              </div>
              <div className="col-md-4">
                <label htmlFor="country" className="form-label-sm">Localidad</label>
                <select
                  className="form-select form-select-sm"
                  name="localidad"
                  disabled
                  value={alumnoForm?.localidad?.id}
                  onChange={onInputChange}
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
                <input disabled type="text" className="form-control form-control-sm"
                  name="codigoPostal" onChange={onInputChange} value={alumnoForm.codigoPostal} />
              </div>
              <div className="col-sm-2">
                <label htmlFor="lastName" className="form-label-sm">Barrio</label>
                <input disabled type="text" className="form-control form-control-sm"
                  name="barrio" onChange={onInputChange} value={alumnoForm.barrio} />
              </div>
              <div className="col-sm-2">
                <label htmlFor="lastName" className="form-label-sm">Manzana</label>
                <input disabled type="text" className="form-control form-control-sm"
                  name="manzana" onChange={onInputChange} value={alumnoForm.manzana} />
              </div>
              <div className="col-sm-2">
                <label htmlFor="lastName" className="form-label-sm">Casa</label>
                <input disabled type="text" className="form-control form-control-sm"
                  name="casa" onChange={onInputChange} value={alumnoForm.casa} />
              </div>
              <div className="col-sm-12">
                <label htmlFor="lastName" className="form-label-sm">Referencia de Domicilio</label>
                <input disabled type="text" className="form-control form-control-sm"
                  name="referenciaDomicilio" onChange={onInputChange} value={alumnoForm.referenciaDomicilio} />
              </div>
            </div>
          )}
          {activeTab === 'DATOS PERSONALES' && (
            <div className="row g-3">
              <div className="col-md-3">
                <label htmlFor="country" className="form-label-sm ">Nivel de estudios</label>
                <select disabled className="form-select form-select-sm" name="nivelEstudio" value={alumnoForm.nivelEstudio} onChange={onInputChange} >
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
                <select disabled className="form-select form-select-sm" name="ocupacion" onChange={onInputChange} value={alumnoForm.ocupacion} >
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
                <input disabled type="text" className="form-control form-control-sm"
                  name="telefonoFijo" onChange={onInputChange} value={alumnoForm.telefonoFijo} />
              </div>
              <div className="col-md-3">
                <label htmlFor="country" className="form-label-sm ">Prestadora</label>
                <select disabled className="form-select form-select-sm" name="prestadora" onChange={onInputChange} value={alumnoForm.prestadora}  >
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
                <input disabled type="text" className="form-control form-control-sm"
                  name="celular" onChange={onInputChange} value={alumnoForm.celular} />
              </div>
              <div className="col-md-3">
                <label htmlFor="country" className="form-label-sm ">Estado Civil</label>
                <select disabled className="form-select form-select-sm" name="estadoCivil" onChange={onInputChange} value={alumnoForm.estadoCivil} >
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
                <select disabled className="form-select form-select-sm" name="obraSocial" onChange={onInputChange} value={alumnoForm.obraSocial}>
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
                  <option value="obra social ferroviarios">Obra Social de Ferroviarios</option>
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
                <select disabled className="form-select form-select-sm" name="grupoSanguineo" onChange={onInputChange} value={alumnoForm.grupoSanguineo}>
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
              <div className="col-sm-12">
                <label htmlFor="lastName" className="form-label-sm">Observaciones</label>
                <input disabled type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="observacion" onChange={onInputChange} value={alumnoForm.obvservacionesd} />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
