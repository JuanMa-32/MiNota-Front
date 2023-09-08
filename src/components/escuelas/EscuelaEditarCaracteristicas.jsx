import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export const EscuelaEditarCaracteristicas = () => {

  const {  localidades, escuelaFormInit, handlerUpdateCaracteristicas,escuelaSeleccionada} = useContext(UserContext);

  const [escuelaForm, setescuelaForm] = useState(escuelaFormInit)

  useEffect(() => {
    setescuelaForm({ ...escuelaSeleccionada })
    
  }, [escuelaSeleccionada])

  const {
    ambito,
    modalidadCursado,
    comparteEntrada,
    servicioNutricional,
    especialidad,//educaion especial
    alimentacionGratuita,
    escuelaFrontera,
    sector,
    proyectosAsignados,
    jornadaExtendida,
    medioDeAcceso,
    lineasDeColectivosDeAcceso,
    escuelaAlbergue,
    equipamientoAlumnos,
    equipamientoDocentes,
    equipamientoAdministrativos,
    conectividad,
    proveedorServicio,
    anchoBanda,
    financiado,
    tipoDeConexion,
    accesodeConexion,
    aulasConConexion,
    funciona,
    aulas,
    cierrePerimetral,
    calefaccion,
    ventilacion,
    alarma,
    edificio,
    tipoGas,
    tipoLuz,
    agua,
    cloacas,
    serviciosMunicipales,
    laboratorioInformatica,
    laboratorioCiencias,
    espacioTechado,
    cancha,
    medidorLuz,
    medidorGaz,
    cocina,
    comedor,
    biblioteca,
    salonMusica,
    sum,
    bombaAgua,
    sereno,
    sistemaSeguridad,
    senialCelular } = escuelaForm;


  const onInputChange = ({ target }) => {
    const { name, value } = target;
   
    if (name === "localidad") {
      const selectedLocalidad = localidades.find(localidad => localidad.id === parseInt(value));
      console.log("Selected Localidad:", selectedLocalidad);
      setescuelaForm({
        ...escuelaForm,
        [name]: selectedLocalidad
      });
    } else {
      setescuelaForm({
        ...escuelaForm,
        [name]: value
      });
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    handlerUpdateCaracteristicas(escuelaForm);
    //setescuelaForm(escuelaFormInit);
  }


  return (
    <div className="col-md-10">
      <h3 className="mb-3">Características</h3>
      <form className="needs-validation" onSubmit={onSubmit}>
        <hr className="my-4" />
        <h5>Contexto</h5>
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Ámbito</label>
            <select className="form-select form-select-sm" id="country" name="ambito" value={ambito} onChange={onInputChange}>
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
            <label htmlFor="country" className="form-label">Modalidad de Cursado</label>
            <select className="form-select form-select-sm" id="country" name="modalidadCursado" value={modalidadCursado} onChange={onInputChange} >
              <option value="" disabled selected>Seleccionar</option>
              <option value="presencial">Presencial</option>
              <option value="semipresencial">Semipresencial</option>
              <option value="distancia">A distancia</option>
              <option value="albuergue">Albergue</option>
              <option value="internado">Internado</option>
              <option value="otra">Otra</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Servicio Nutricional</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="servicioNutricional" value={servicioNutricional} >
              <option value="" disabled selected>No</option>
              <option value="comedor">Comedor</option>
              <option value="vianda">Vianda</option>
              <option value="merienda">Merienda</option>
              <option value="otra">Otra</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Si comparte edificio ¿también comparte la entrada?</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="comparteEntrada" value={comparteEntrada}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>

            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Especialidad (SOLO Educación Especial)</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="especialidad" value={especialidad}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">SI CORRESPONDE</option>
              <option value="no">NO CORRESPONDE</option>
            </select>
          </div>
        </div>

        <hr className="my-4" />
        <h5>Datos Institucionales</h5>
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Beneficiario servicio alimentación gratuita</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="alimentacionGratuita" value={alimentacionGratuita}>
              <option value="" disabled selected>No</option>
              <option value="copa leche">Copa leche</option>
              <option value="almuerzo">Almuerzo</option>
              <option value="refrigerio">Refrigerio</option>
              <option value="cena">Cena</option>
              <option value="otros">Otros</option>

            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Escuela frontera</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="escuelaFrontera" value={escuelaFrontera}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Sector</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="sector" value={sector}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="Estatal Provincial">Estatal Provincial</option>
              <option value="Estatal Municipal">Estatal Municipal</option>
              <option value="Estatal Nacional">Estatal Nacional</option>
              <option value="Privada con Subsidio">Privada con Subsidio</option>
              <option value="Privada sin Subsidio">Privada sin Subsidio</option>

            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Programas/Proyectos asignados</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="proyectosAsignados" value={proyectosAsignados}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="MENDOZA EDUCA">MENDOZA EDUCA</option>
              <option value="Reparaciones Menores">Reparaciones Menores</option>
              <option value="Ampliación Primaria (Convenio Nación)">Ampliación Primaria (Convenio Nación)</option>
              <option value="Ninguno">Ninguno</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Jornada extendida</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="jornadaExtendida" value={jornadaExtendida}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Medio de Acceso</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="medioDeAcceso" value={medioDeAcceso}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="Transporte público">Transporte público</option>
              <option value="Transporte contratado">Transporte contratado</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Líneas de colectivo de acceso</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="Sin lineas" name="lineasDeColectivosDeAcceso" value={lineasDeColectivosDeAcceso} onChange={onInputChange} />
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Escuela Albergue</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="escuelaAlbergue" value={escuelaAlbergue}>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>

        </div>
        <hr className="my-4" />
        <h5>Infraestructura Tecnológica-Equipamiento</h5>
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Equipamiento informático Alumnos</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="equipamientoAlumnos" value={equipamientoAlumnos}>
              <option value="" disabled selected>No tiene</option>
              <option value="Aula Digital Movil">Aula Digital Movil</option>
              <option value="Sala de informatica">Sala de informatica</option>
              <option value="otro">Otro</option>

            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Equipamiento informático Administrativos</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="equipamientoAdministrativos" value={equipamientoAdministrativos}>
              <option value="" disabled selected>No tiene</option>
              <option value="Computadora ">Computadora </option>
              <option value="impresora ">Impresora </option>
              <option value="router ">Router </option>
              <option value="switch ">Switch </option>
              <option value="scanner ">Scanner </option>
              <option value="camara ">Camara </option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Equipamiento Informático Docente</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="equipamientoDocentes" value={equipamientoDocentes}>
              <option value="" disabled selected>No tiene</option>
              <option value="notbook ">Notbook </option>
              <option value="netbook ">Netbook </option>
              <option value="tablet ">Tablet </option>
            </select>
          </div>
        </div>

        <hr className="my-4" />
        <h5>Infraestructura Tecnológica-Conectividad</h5>
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Conectividad</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="conectividad" value={conectividad}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Proveedor del servicio</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="proveedorServicio" value={proveedorServicio}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="telefonica">Telefonica</option>
              <option value="arlink">Arlink</option>
              <option value="telecom">Telecom</option>
              <option value="movistar">Movistar</option>
              <option value="Personal">Personal</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Ancho de banda</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="-- Seleccionar --" name="anchoBanda" value={anchoBanda} onChange={onInputChange} />
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Financiado por</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="financiado" value={financiado} >
              <option value="" disabled selected>Seleccionar</option>
              <option value="Red WAN-DGE">Red WAN-DGE</option>
              <option value="Nacion">Nacion</option>
              <option value="Fondos escolares propios">Fondos escolares propios</option>
              <option value="Cooperadora">Cooperadora</option>
              <option value="Ninguno">Ninguno</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Tipo de conexión Interna</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="tipoDeConexion" value={tipoDeConexion}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="WIFI">WIFI</option>
              <option value="Cable UTP">Cable UTP</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Acceso de conexión a Internet</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="accesodeConexion" value={accesodeConexion}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="Fibra optica" >Fibra optica</option>
              <option value="Satelital" >Satelital</option>
              <option value="WIFI" >Acceso inalambrico (WIFI)</option>
              <option value="Linea electrica" >Linea electrica</option>
              <option value="Red de Telefonía Móvil">Red de Telefonía Móvil</option>

            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Cantidad de Aulas con conexión a Internet</label>
            <input type="number" className="form-control form-control-sm" id="lastName" placeholder="" onChange={onInputChange} name="aulasConConexion" value={aulasConConexion} />
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Funciona Internet?</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="funciona" value={funciona}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="No-Nunca funciono">No-Nunca funciono</option>
              <option value="No-Tengo conflictos institucionales">No-Tengo conflictos institucionales</option>
              <option value="No-Causa desconocida">No-Causa desconocida</option>
            </select>
          </div>
        </div>



        <hr className="my-4" />
        <h5>Infraestructura Edificia</h5>
        <div className="row g-3">

          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Cantidad de aulas (espacio físico)</label>
            <input type="number" className="form-control form-control-sm" id="lastName" placeholder="" onChange={onInputChange} name="aulas" value={aulas} />
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Cierre Perimetral</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="cierrePerimetral" value={cierrePerimetral}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Calefacción/Refrigeración</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="calefaccion" value={calefaccion} >
              <option value="" disabled selected>Seleccionar</option>
              <option value="Estufas">Estufas</option>
              <option value="Paneles">Paneles</option>
              <option value="Radiadores">Radiadores</option>
              <option value="Aire frio">Aire frio</option>
              <option value="Aire calor">Aire calor</option>
              <option value="Aire frio/calor">Aire frio/calor</option>
              <option value="Otro">Otro</option>
              <option value="no">No tiene</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Ventilación</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="ventilacion" value={ventilacion} >
              <option value="" disabled selected>Seleccionar</option>
              <option value="Ventilador de techo">Ventilador de techo</option>
              <option value="Ventilador de pie">Ventilador de pie</option>
              <option value="Ventilador de pared">Ventilador de pared</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Alarma</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="alarma" value={alarma}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Edificio</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="edificio" value={edificio}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="propio">Propio</option>
              <option value="Alquilado">Alquilado</option>
              <option value="Compartido">Compartido</option>
              <option value="Cedido">Cedido</option>

            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Tipo gas</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="tipoGas" value={tipoGas}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="Zeppelin">Zeppelin</option>
              <option value="Natural">Natural</option>
              <option value="Envasado">Envasado</option>
              <option value="No tiene">No tiene</option>

            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Tipo luz</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="tipoLuz" value={tipoLuz} >
              <option value="" disabled selected>Seleccionar</option>
              <option value="Red Eléctrica">Red Eléctrica </option>
              <option value="Generador">Generador</option>
              <option value="Otro">Otro</option>
              <option value="No tiene">No tiene</option>
              <option value="Energia solar">Energia solar</option>

            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Agua</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="agua" value={agua}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="potable">Potable</option>
              <option value="De pozo">De pozo</option>
              <option value="Envasada">Envasada</option>
              <option value="No tiene">No tiene</option>
              <option value="Otros">Otros</option>

            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Cloacas</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="cloacas" value={cloacas}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Servicios Municipales</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="serviciosMunicipales" value={serviciosMunicipales}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Laboratorio de Informática</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="laboratorioInformatica" value={laboratorioInformatica}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="Externo">Externo</option>
              <option value="Interno">Interno</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Laboratorio de ciencias</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="laboratorioCiencias" value={laboratorioCiencias}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Espacio techado</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="espacioTechado" value={espacioTechado}>
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>

            </select>
          </div>


          <div className="col-md-2">
            <label htmlFor="cancha" className="form-label">Cancha</label>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="cancha-si"
                name="cancha"
                value={true}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="cancha-si">Sí</label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="cancha-no"
                name="cancha"
                value={false}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="cancha-no">No</label>
            </div>
          </div>



          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Nº de medidor luz</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="medidorLuz" value={medidorLuz} onChange={onInputChange} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Nº de medidor gas / Nº boca de gas</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="medidorGaz" value={medidorGaz} onChange={onInputChange} />
          </div>


          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Cocina</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="cocina" value={cocina} >
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Comedor</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="comedor" value={comedor} >
              <option value="" disabled selected>Seleccionar</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="col-md-2">
            <label className="form-label">SUM (Salón Usos Múltiples)</label>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="sum-si"
                name="sum"
                value={true}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="sum-si">Sí</label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="sum-no"
                name="sum"
                value={false}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="sum-no">No</label>
            </div>
          </div>

          <div className="col-md-2">
            <label className="form-label">Bomba de agua</label>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="bombaAgua-si"
                name="bombaAgua"
                value={true}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="bombaAgua-si">Sí</label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="bombaAgua-no"
                name="bombaAgua"
                value={false}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="bombaAgua-no">No</label>
            </div>
          </div>


          <div className="col-md-2">
            <label className="form-label">Biblioteca</label>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="biblioteca-si"
                name="biblioteca"
                value={true}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="biblioteca-si">Sí</label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="biblioteca-no"
                name="biblioteca"
                value={false}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="biblioteca-no">No</label>
            </div>
          </div>


          <div className="col-md-2">
            <label className="form-label">Salon de Musica</label>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="salonMusica-si"
                name="salonMusica"
                value={true}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="salonMusica-si">Sí</label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="salonMusica-no"
                name="salonMusica"
                value={false}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="salonMusica-no">No</label>
            </div>
          </div>
          <div className="col-md-2">
            <label className="form-label">Sereno</label>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="sereno-si"
                name="sereno"
                value={true}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="sereno-si">Sí</label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="sereno-no"
                name="sereno"
                value={false}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="sereno-no">No</label>
            </div>
          </div>

          <div className="col-md-2">
            <label className="form-label">Señal de celular</label>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="senialCelular-si"
                name="senialCelular"
                value={true}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="senialCelular-si">Sí</label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="senialCelular-no"
                name="senialCelular"
                value={false}

                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="senialCelular-no">No</label>
            </div>
          </div>

          <div className="col-md-2">
            <label className="form-label">Sistema contra Incendios (mangueras)</label>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="sistemaSeguridad-si"
                name="sistemaSeguridad"
                value={true}
                
                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="sistemaSeguridad-si">Sí</label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                id="sistemaSeguridad-no"
                name="sistemaSeguridad"
                value={false}
                
                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="sistemaSeguridad-no">No</label>
            </div>
          </div>
        </div>

        <button className="btn btn-primary btn-sm mt-3" type="submit">Guardar</button>
        <Link to={`/`} className='btn btn-danger btn-sm mt-3 ms-2'>Cancelar</Link>

      </form>
    </div>

  )
}
