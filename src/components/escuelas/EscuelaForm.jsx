import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './../../context/UserContext';

export const EscuelaForm = () => {

  const { hanlderAddLocalidades, localidades, escuelaFormInit, hanlderAddEscuela } = useContext(UserContext);

  const [escuelaForm, setescuelaForm] = useState(escuelaFormInit)

  const {
    numero,
    anexo,
    cue,
    subCue,
    nombre,
    direccionLinea,
    nivel,
    listaDeRegimenes,
    gestion,
    reparticion,
    supervision,
    regional,
    delegacion,
    zona,
    comparteEdificio,
    calle,
    numeroCalle,
    barrio,
    localidad,
    codigoPostal,
    telefono,
    email,
    emailAlternativo,
    fechaCreacion,
    anioResolucion,
    numeroResolucion,
    fechaCierre,
    anioResolucionCierre,
    numeroResolucionCierre,
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


  useEffect(() => {
    hanlderAddLocalidades()

  }, [])

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name + value);
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
    hanlderAddEscuela(escuelaForm);
    //setescuelaForm(escuelaFormInit);
  }


  return (
    <div className="col-md-10">
      <h3 className="mb-3">Formulario Escuela</h3>
      <form className="needs-validation" onSubmit={onSubmit}>
        <div className="row g-3">
          <div className="col-sm-2">
            <label htmlFor="firstName" className="form-label">Nùmero</label>
            <input type="text" className="form-control form-control-sm" id="firstName" placeholder="" name="numero" value={numero} onChange={onInputChange} />
          </div>
          <div className="col-sm-1">
            <label htmlFor="lastName" className="form-label">Anexo</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="anexo" value={anexo} onChange={onInputChange} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">CUE</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="cue" value={cue} onChange={onInputChange} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">SubCUE</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="subCue" value={subCue} onChange={onInputChange} />
          </div>
          <div className="col-sm-5">
            <label htmlFor="lastName" className="form-label">Nombre</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="nombre" value={nombre} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Dir. Linea</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="direccionLinea" value={direccionLinea} onChange={onInputChange} />
          </div>

          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Nivel</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="nivel" value={nivel} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Lista de Regimenes</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="listaDeRegimenes" value={listaDeRegimenes} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Gestión</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="gestion" value={gestion} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Repartición</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="reparticion" value={reparticion} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">supervición</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="supervision" value={supervision} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Regional</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="regional" value={regional} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Delegación</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="delegacion" value={delegacion} onChange={onInputChange} />
          </div>

          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Zona + Radio</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="zona" value={zona} onChange={onInputChange} />
          </div>

          <div className="col-md-8">
            <label htmlFor="country" className="form-label">Comparte Edificio</label>
            <select className="form-select form-select-sm" id="country" name="comparteEdificio" value={comparteEdificio} onChange={onInputChange}>
              <option value="No comparte">No comparte</option>
              <option value="Si">Si</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Calle</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="calle" value={calle} onChange={onInputChange} />
          </div>
          <div className="col-sm-1">
            <label htmlFor="lastName" className="form-label">Número</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroCalle" value={numeroCalle} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Barrio/Seccion</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="barrio" value={barrio} onChange={onInputChange} />
          </div>
          <div className="col-md-4">
            <label htmlFor="country" className="form-label">Localidad</label>
            <select
              className="form-select form-select-sm"
              id="country"
              name="localidad"
              value={localidad.id}
              onChange={onInputChange}
            >
              {localidades.map(localidad => (
                <option key={localidad.id} value={localidad.id}>
                  {localidad.localidad} - {localidad.municipio}
                </option>
              ))}
            </select>
          </div>
          <div className="col-sm-1">
            <label htmlFor="lastName" className="form-label">C.P.</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="codigoPostal" value={codigoPostal} onChange={onInputChange} />
          </div>

          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Teléfono</label>
            <input type="number" className="form-control form-control-sm" id="lastName" placeholder="" name="telefono" value={telefono} onChange={onInputChange} />
          </div>


          <div className="col-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control form-control-sm" id="email" placeholder="you@example.com" name="email" value={email} onChange={onInputChange} />
          </div>
          <div className="col-4">
            <label htmlFor="email" className="form-label">Email Alternativo</label>
            <input type="email" className="form-control form-control-sm" id="email" placeholder="you@example.com" name="emailAlternativo" value={emailAlternativo} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Fecha de Creación</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="fechaCreacion" value={fechaCreacion} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Año Resolución</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="anioResolucion" value={anioResolucion} onChange={onInputChange} />
          </div>
          <div className="col-sm-4">
            <label htmlFor="lastName" className="form-label">Número Resolución</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroResolucion" value={numeroResolucion} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Fecha Cierre</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="fechaCierre" value={fechaCierre} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Año Resolución Cierre</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="anioResolucionCierre" value={anioResolucionCierre} onChange={onInputChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Número Resolución Cierre</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroResolucionCierre" value={numeroResolucionCierre} onChange={onInputChange} />
          </div>
        </div>

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
              <option value="comedor merienda">Comedor,Merienda</option>
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
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Ancho de banda</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="anchoBanda" value={anchoBanda}>
              <option value="">Seleccionar</option>
              <option value="Megabits "> Megabits </option>
              <option value="Gigabits  "> Gigabits  </option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Financiado por</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="financiado" value={financiado}>
              <option value="Ninguno">Ninguno</option>
              <option>United States</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Tipo de conexión Interna</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="tipoDeConexion" value={tipoDeConexion}>
              <option value="">Seleccionar</option>
              <option>United States</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Acceso de conexión a Internet</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="accesodeConexion" value={accesodeConexion}>
              <option value="Red de Telefonía Móvil">Red de Telefonía Móvil</option>
              <option>United States</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Cantidad de Aulas con conexión a Internet</label>
            <input type="number" className="form-control form-control-sm" id="lastName" placeholder="" onChange={onInputChange} name="aulasConConexion" value={aulasConConexion} />
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Funciona Internet?</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="funciona" value={funciona}>
              <option value="si">Si</option>
              <option value="no">No</option>
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
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Calefacción/Refrigeración</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="calefaccion" value={calefaccion} >
              <option value="Estufas ">Estufas </option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Ventilación</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="ventilacion" value={ventilacion} >
              <option value="Ventilador de pared">Ventilador de pared</option>
              <option>United States</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Alarma</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="alarma" value={alarma}>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Edificio</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="edificio" value={edificio}>
              <option value="propio">Propio</option>
              <option>United States</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Tipo gas</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="tipoGas" value={tipoGas}>
              <option value="Zeppelin">Zeppelin</option>
              <option>United States</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Tipo luz</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="tipoLuz" value={tipoLuz} >
              <option value="Red Eléctrica ">Red Eléctrica </option>
              <option>United States</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Agua</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="agua" value={agua}>
              <option value="potable">Potable</option>
              <option>United States</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Cloacas</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="cloacas" value={cloacas}>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Servicios Municipales</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="serviciosMunicipales" value={serviciosMunicipales}>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Laboratorio de Informática</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="laboratorioInformatica" value={laboratorioInformatica}>
              <option value="Externo">Externo</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Laboratorio de ciencias</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="laboratorioCiencias" value={laboratorioCiencias}>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Espacio techado</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="espacioTechado" value={espacioTechado}>
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
                checked={cancha === true}
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
                checked={cancha === false}
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
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Comedor</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="comedor" value={comedor} >
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
                checked={sum === true}
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
                checked={sum === false}
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
                checked={bombaAgua === true}
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
                checked={bombaAgua === false}
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
                checked={biblioteca === true}
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
                checked={biblioteca === false}
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
                checked={salonMusica === true}
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
                checked={salonMusica === false}
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
                checked={sereno === true}
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
                checked={sereno === false}
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
                checked={senialCelular === true}
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
                checked={senialCelular === false}
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
                checked={sistemaSeguridad === true}
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
                checked={sistemaSeguridad === false}
                onChange={onInputChange}
              />
              <label className="form-check-label" htmlFor="sistemaSeguridad-no">No</label>
            </div>
          </div>
        </div>

        <button className="btn btn-primary btn-sm mt-3" type="submit">Cargar Escuela</button>
        <button className="btn btn-danger btn-sm mt-3" type="submit">cancelar</button>
      </form>
    </div>

  )
}
