import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { NavBarSecundario } from './../headers/NavBarSecundario';

export const EscuelaView = () => {

  const { hanlderAddLocalidades, escuelaFormInit, hanlderAddEscuela, escuelaSeleccionada } = useContext(UserContext);

  const [escuelaForm, setescuelaForm] = useState(escuelaFormInit)

  useEffect(() => {
    setescuelaForm({ ...escuelaSeleccionada })
    hanlderAddLocalidades()
  }, [escuelaSeleccionada])


  const {
    id,
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

    sessionStorage.setItem('idEscuela', id);

  useEffect(() => {
    hanlderAddLocalidades()
  }, [])

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name + value);
    setescuelaForm({
      ...escuelaForm,
      [name]: value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    hanlderAddEscuela(escuelaForm);
    //setescuelaForm(escuelaFormInit);
  }


  return (
    <div className="col-md-10">
    
       
        <Link className="dropdown-item" to={`/division/listar/${id}`}>ver Cursos y divisiones</Link>
       
      <h4 className="mb-3"> Escuela {nombre}</h4>
      <Link to={`/escuela/editar/${id}`} className='btn btn-primary btn-sm p-1 ms-4 mt-3 mb-5'>Editar Datos</Link>
      <Link to={`/escuela/caracteristicas/${id}`}className='btn btn-primary btn-sm p-1 ms-1 mt-3 mb-5'>Editar Caracteristicas</Link>
    

      <form className="needs-validation" onSubmit={onSubmit}>
        <div className="row g-3">
          <div className="col-sm-2">
            <label htmlFor="firstName" className="form-label">Nùmero</label>
            <input disabled type="text" className="form-control form-control-sm" id="firstName" placeholder="" name="numero" value={numero} onChange={onInputChange} />
          </div>
          <div className="col-sm-1">
            <label htmlFor="lastName" className="form-label">Anexo</label>
            <input disabled type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="anexo" value={anexo} onChange={onInputChange} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">CUE</label>
            <input disabled type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="cue" value={cue} onChange={onInputChange} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">SubCUE</label>
            <input disabled type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="subCue" value={subCue} onChange={onInputChange} />
          </div>
          <div className="col-sm-5">
            <label htmlFor="lastName" className="form-label">Nombre</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="nombre" value={nombre} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Dir. Linea</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="direccionLinea" value={direccionLinea} onChange={onInputChange} disabled />
          </div>

          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Nivel</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="nivel" value={nivel} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Lista de Regimenes</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="listaDeRegimenes" value={listaDeRegimenes} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Gestión</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="gestion" value={gestion} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Repartición</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="reparticion" value={reparticion} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">supervición</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="supervision" value={supervision} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Regional</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="regional" value={regional} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Delegación</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="delegacion" value={delegacion} onChange={onInputChange} disabled />
          </div>

          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Zona + Radio</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="zona" value={zona} onChange={onInputChange} disabled />
          </div>

          <div className="col-md-8">
            <label htmlFor="country" className="form-label">Comparte Edificio</label>
            <select className="form-select form-select-sm" id="country" name="comparteEdificio" value={comparteEdificio} onChange={onInputChange} disabled>
              <option>{comparteEdificio}</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Calle</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="calle" value={calle} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-1">
            <label htmlFor="lastName" className="form-label">Número</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroCalle" value={numeroCalle} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Barrio/Seccion</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="barrio" value={barrio} onChange={onInputChange} disabled />
          </div>
          <div className="col-md-4">
            <label htmlFor="country" className="form-label">Localidad</label>
            <select
              className="form-select form-select-sm"
              id="country"
              name="localidad"
              value={localidad} // Asume que localidad es un objeto con una propiedad "id"
              onChange={onInputChange}
              disabled
            >
              <option value={localidad.id}>
                {localidad.localidad} - {localidad.municipio}
              </option>
            </select>
          </div>


          <div className="col-sm-1">
            <label htmlFor="lastName" className="form-label">C.P.</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="codigoPostal" value={codigoPostal} onChange={onInputChange} disabled />
          </div>

          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Teléfono</label>
            <input type="number" className="form-control form-control-sm" id="lastName" placeholder="" name="telefono" value={telefono} onChange={onInputChange} disabled />
          </div>


          <div className="col-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control form-control-sm" id="email" placeholder="you@example.com" name="email" value={email} onChange={onInputChange} disabled />
          </div>
          <div className="col-4">
            <label htmlFor="email" className="form-label">Email Alternativo</label>
            <input type="email" className="form-control form-control-sm" id="email" placeholder="you@example.com" name="emailAlternativo" value={emailAlternativo} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Fecha de Creación</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="fechaCreacion" value={fechaCreacion} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Año Resolución</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="anioResolucion" value={anioResolucion} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-4">
            <label htmlFor="lastName" className="form-label">Número Resolución</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroResolucion" value={numeroResolucion} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Fecha Cierre</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="fechaCierre" value={fechaCierre} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Año Resolución Cierre</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="anioResolucionCierre" value={anioResolucionCierre} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Número Resolución Cierre</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroResolucionCierre" value={numeroResolucionCierre} onChange={onInputChange} disabled />
          </div>
        </div>

        <hr className="my-4" />
        <h5>Contexto</h5>
        <div className="row g-3">
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Ámbito</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="ambito" value={ambito} onChange={onInputChange} disabled />
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Modalidad de Cursado</label>
            <select className="form-select form-select-sm" id="country" name="modalidadCursado" value={modalidadCursado} onChange={onInputChange} disabled>
              <option value="Presencial">{modalidadCursado}</option>

            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Servicio Nutricional</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="servicioNutricional" value={servicioNutricional} disabled>
              <option value="Comedor,Merienda">{servicioNutricional}</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Si comparte edificio ¿también comparte la entrada?</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="comparteEntrada" value={comparteEntrada} disabled>
              <option value="si">{comparteEntrada}</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Especialidad (SOLO Educación Especial)</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="especialidad" value={especialidad} disabled>
              <option value="SI CORRESPONDE">{especialidad}</option>
            </select>
          </div>
        </div>

        <hr className="my-4" />
        <h5>Datos Institucionales</h5>
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Beneficiario servicio alimentación gratuita</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="alimentacionGratuita" value={alimentacionGratuita} disabled>
              <option value="Almuerzo,Refrigerio">{alimentacionGratuita}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Escuela frontera</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="escuelaFrontera" value={escuelaFrontera} disabled>
              <option value="si">{escuelaFrontera}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Sector</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="sector" value={sector} disabled>
              <option value="Estatal Provincial">{sector}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Programas/Proyectos asignados</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="proyectosAsignados" value={proyectosAsignados} disabled>
              <option value="">{proyectosAsignados}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Jornada extendida</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="jornadaExtendida" value={jornadaExtendida} disabled>
              <option value="si">{jornadaExtendida}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Medio de Acceso</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="medioDeAcceso" value={medioDeAcceso} disabled>
              <option value="Transporte público,Transporte contratado">{medioDeAcceso}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Líneas de colectivo de acceso</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="lineasDeColectivosDeAcceso" value={lineasDeColectivosDeAcceso} disabled>
              <option value="300 Prestaciones">{lineasDeColectivosDeAcceso}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Escuela Albergue</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="escuelaAlbergue" value={escuelaAlbergue} disabled>
              <option value="si">{escuelaAlbergue}</option>
            </select>
          </div>

        </div>
        <hr className="my-4" />
        <h5>Infraestructura Tecnológica-Equipamiento</h5>
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Equipamiento informático Alumnos</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="equipamientoAlumnos" value={equipamientoAlumnos} disabled>
              <option value="Aula Digital Movil">{equipamientoAlumnos}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Equipamiento informático Administrativos</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="equipamientoAdministrativos" value={equipamientoAdministrativos} disabled>
              <option value="Computadora ">{equipamientoAdministrativos} </option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Equipamiento Informático Docente</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="equipamientoDocentes" value={equipamientoDocentes} disabled>
              <option value="No tiene">{equipamientoDocentes}</option>
            </select>
          </div>
        </div>

        <hr className="my-4" />
        <h5>Infraestructura Tecnológica-Conectividad</h5>
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Conectividad</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="conectividad" value={conectividad} disabled>
              <option value="si">{conectividad}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Proveedor del servicio</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="proveedorServicio" value={proveedorServicio} disabled>
              <option value="">{proveedorServicio}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Ancho de banda</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="anchoBanda" value={anchoBanda} disabled>
              <option value="">{anchoBanda}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Financiado por</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="financiado" value={financiado} disabled>
              <option value="Ninguno">{financiado}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Tipo de conexión Interna</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="tipoDeConexion" value={tipoDeConexion} disabled>
              <option value="">{tipoDeConexion}</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Acceso de conexión a Internet</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="accesodeConexion" value={accesodeConexion} disabled>
              <option value="Red de Telefonía Móvil">{accesodeConexion}</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Cantidad de Aulas con conexión a Internet</label>
            <input type="number" className="form-control form-control-sm" id="lastName" placeholder="" onChange={onInputChange} name="aulasConConexion" value={aulasConConexion} disabled />
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">Funciona Internet?</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="funciona" value={funciona} disabled>
              <option value="si">{funciona}</option>
            </select>
          </div>
        </div>



        <hr className="my-4" />
        <h5>Infraestructura Edificia</h5>
        <div className="row g-3">

          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Cantidad de aulas (espacio físico)</label>
            <input type="number" className="form-control form-control-sm" id="lastName" placeholder="" onChange={onInputChange} name="aulas" value={aulas} disabled />
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Cierre Perimetral</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="cierrePerimetral" value={cierrePerimetral} disabled>
              <option value="si">{cierrePerimetral}</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Calefacción/Refrigeración</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="calefaccion" value={calefaccion} disabled >
              <option value="Estufas ">{calefaccion} </option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Ventilación</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="ventilacion" value={ventilacion} disabled>
              <option value="Ventilador de pared">{ventilacion}</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Alarma</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="alarma" value={alarma} disabled>
              <option value="si">{alarma}</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Edificio</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="edificio" value={edificio} disabled>
              <option value="propio">{edificio}</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Tipo gas</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="tipoGas" value={tipoGas} disabled>
              <option value="Zeppelin">{tipoGas}</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Tipo luz</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="tipoLuz" value={tipoLuz} disabled>
              <option value="Red Eléctrica ">{tipoLuz}</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Agua</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="agua" value={agua} disabled>
              <option value="potable">{agua}</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Cloacas</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="cloacas" value={cloacas} disabled>
              <option>{cloacas}</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Servicios Municipales</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="serviciosMunicipales" value={serviciosMunicipales} disabled>
              <option value="si">{serviciosMunicipales}</option>

            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Laboratorio de Informática</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="laboratorioInformatica" value={laboratorioInformatica} disabled>
              <option value="Externo">{laboratorioInformatica}</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Laboratorio de ciencias</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="laboratorioCiencias" value={laboratorioCiencias} disabled>
              <option value="si">{laboratorioCiencias}</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Espacio techado</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="espacioTechado" value={espacioTechado} disabled>
              <option value="si">{espacioTechado}</option>
            </select>
          </div>


          <div className="col-md-2">
            <label htmlFor="cancha" className="form-label">Cancha</label>
            <div className="form-check ">
              <input
                disabled
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
                disabled
              />
              <label className="form-check-label" htmlFor="cancha-no">No</label>
            </div>
          </div>



          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Nº de medidor luz</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="medidorLuz" value={medidorLuz} onChange={onInputChange} disabled />
          </div>
          <div className="col-sm-2">
            <label htmlFor="lastName" className="form-label">Nº de medidor gas / Nº boca de gas</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="medidorGaz" value={medidorGaz} onChange={onInputChange} disabled />
          </div>


          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Cocina</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="cocina" value={cocina} disabled>
              <option value="si">{cocina}</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="country" className="form-label">Comedor</label>
            <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="comedor" value={comedor} disabled>
              <option value="si">{comedor}</option>
            </select>
          </div>

          <div className="col-md-2">
            <label className="form-label">SUM (Salón Usos Múltiples)</label>
            <div className="form-check ">
              <input
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
      </form>
      <Link to={`/`} className='btn btn-danger btn-sm mt-3 ms-2'>Volver</Link>
    </div>

  )
}
