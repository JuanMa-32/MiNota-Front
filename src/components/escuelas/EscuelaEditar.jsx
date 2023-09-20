import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export const EscuelaEditar = () => {

  const { hanlderAddLocalidades, escuelaFormInit, handlerUpdate, escuelaSeleccionada } = useContext(UserContext);

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
    console.log('holaaa');
    handlerUpdate(escuelaForm);
    //setescuelaForm(escuelaFormInit);
  }


  return (
    <div className="col-md-10">
     <br></br> <br></br>
     
     
      <form className="needs-validation" onSubmit={onSubmit}>
        <div className="row g-3">
          <div className="col-sm-2">
          <input name="id" value={id} hidden />
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
            <input  type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="subCue" value={subCue} onChange={onInputChange} />
          </div>
          <div className="col-sm-5">
            <label htmlFor="lastName" className="form-label">Nombre</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="nombre" value={nombre} onChange={onInputChange}  />
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
              <option value="No comparte">No comparte</option>
              <option value="Si">Si</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Calle</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="calle" value={calle} onChange={onInputChange}  />
          </div>
          <div className="col-sm-1">
            <label htmlFor="lastName" className="form-label">Número</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroCalle" value={numeroCalle} onChange={onInputChange}  />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Barrio/Seccion</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="barrio" value={barrio} onChange={onInputChange}  />
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
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="codigoPostal" value={codigoPostal} onChange={onInputChange}  />
          </div>

          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Teléfono</label>
            <input type="number" className="form-control form-control-sm" id="lastName" placeholder="" name="telefono" value={telefono} onChange={onInputChange}  />
          </div>


          <div className="col-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control form-control-sm" id="email" placeholder="you@example.com" name="email" value={email} onChange={onInputChange}  />
          </div>
          <div className="col-4">
            <label htmlFor="email" className="form-label">Email Alternativo</label>
            <input type="email" className="form-control form-control-sm" id="email" placeholder="you@example.com" name="emailAlternativo" value={emailAlternativo} onChange={onInputChange}  />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Fecha de Creación</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="fechaCreacion" value={fechaCreacion} onChange={onInputChange}  />
          </div>
          <div className="col-sm-3">
            <label htmlFor="lastName" className="form-label">Año Resolución</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="anioResolucion" value={anioResolucion} onChange={onInputChange}  />
          </div>
          <div className="col-sm-4">
            <label htmlFor="lastName" className="form-label">Número Resolución</label>
            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="numeroResolucion" value={numeroResolucion} onChange={onInputChange}  />
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
        <button className="btn btn-primary btn-sm mt-3" type="submit">Guardar</button>
        <Link to={`/`} className='btn btn-danger btn-sm mt-3 ms-2'>Cancelar</Link>

      </form>
    </div>

  )
}
