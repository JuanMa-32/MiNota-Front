import { useReducer, useState } from "react"
import { editar, editarCaracteristicas, findAllEscuelas, getEscuelaId, getLocalidades, save } from './../services/escuelaService';
import { escuelaReducer } from './../reducers/escuelaReducer';
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

const escuelaFormInit = {
  id:0,
  numero:'',
  anexo:'',
  cue:'',
  subCue:'',
  nombre:'',
  direccionLinea:'',
  nivel:'',
  listaDeRegimenes:'',
  gestion:'',
  reparticion:'',
  supervision:'',
  regional:'',
  delegacion:'',
  zona:'',
  comparteEdificio:'',
  calle:'',
  numeroCalle:'',
  barrio:'',
  localidad:0,
  codigoPostal:'',
  telefono:0,
  email:'',
  emailAlternativo:'',
  fechaCreacion:'',
  anioResolucion:'',
  numeroResolucion:'',
  fechaCierre:'',
  anioResolucionCierre:'',
  numeroResolucionCierre:'',
  ambito:'',
  modalidadCursado:'',
  comparteEntrada:'',
  servicioNutricional:'',
  especialidad:'',//educaion especial
  alimentacionGratuita:'',
  escuelaFrontera:'',
  sector:'',
  proyectosAsignados:'',
  jornadaExtendida:'',
  medioDeAcceso:'',
  lineasDeColectivosDeAcceso:'',
  escuelaAlbergue:'',
  equipamientoAlumnos:'',
  equipamientoDocentes:'',
  equipamientoAdministrativos:'',
  conectividad:'',
  proveedorServicio:'',
  anchoBanda:'',
  financiado:'',
  tipoDeConexion:'',
  accesodeConexion:'',
  aulasConConexion:0,
  funciona:'',
  aulas:0,
  cierrePerimetral:'',
  calefaccion:'',
  ventilacion:'',
  alarma:'',
   edificio:'',
  tipoGas:'',
  tipoLuz:'',
  agua:'',
  cloacas:'',
  serviciosMunicipales:'',
  laboratorioInformatica:'',
  laboratorioCiencias:'',
  espacioTechado:'',
  cancha:false,
  medidorLuz:'',
  medidorGaz:'',
  cocina:'',
  comedor:'',
  biblioteca:false,
  salonMusica:false,
  sum:false,
  bombaAgua:false,
  sereno:false,
  sistemaSeguridad:false,
  senialCelular:false,
}
export const useEscuela = () => {

  const [escuelas, dispatch] = useReducer(escuelaReducer, [])
  const [localidades, setlocalidades] = useState([])
  const [escuelaSeleccionada, setescuelaSeleccionada] = useState(escuelaFormInit)
  const navigate = useNavigate();

  const hanlderAddEscuela = async (escuela) => {
    let response;
    try {
        response =await save(escuela)
        // response = update(escuela)
      
      dispatch({
        type: (escuela.id === 0) ? 'addEscuela' : 'updateEscuela',
        payload: response.data
      })
      Swal.fire(
        'Escuela cargada' , 'Escuela subida al sistema!',  'success'
      )
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const handlerUpdate = async (escuela) => {
    const {id} = escuela;
    console.log(id);
    try {
      const response = await editar(escuela,id);
      dispatch({
        type:'update',
        payload:response.data
      })
      Swal.fire(
        'Escuela Actualizada' , `${escuela.nombre} fue actualizada!`,  'success'
      )
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const handlerUpdateCaracteristicas = async (escuela) => {
    const {id} = escuela;
    console.log(id);
    try {
      const response = await editarCaracteristicas(escuela,id);
      dispatch({
        type:'update',
        payload:response.data
      })
      Swal.fire(
        'Escuela Actualizada' , `${escuela.nombre} fue actualizada!`,  'success'
      )
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const getEscuelas = async () => {
    try {
      const response = await findAllEscuelas();
      console.log(response.data);
      dispatch({
        type:'loadingEscuelas',
        payload:response.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  const hanlderAddLocalidades = async () => {
    const response = await getLocalidades();
    setlocalidades(response.data);
  }

  const hanlderEscuelaSeleccionada =async (id) => {
    try {
      console.log(id);
      const response = await getEscuelaId(id);

      setescuelaSeleccionada({...response.data});
      
    } catch (error) {
      console.log(error);
    }
  }

  return {
    //funciones
    hanlderAddLocalidades,
    hanlderAddEscuela,
    hanlderEscuelaSeleccionada,
    getEscuelas,
    handlerUpdate,
    handlerUpdateCaracteristicas,
    //variables
    localidades,
    escuelaFormInit,
    escuelaSeleccionada,
    escuelas
  }
}
