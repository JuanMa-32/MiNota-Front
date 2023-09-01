import { useReducer, useState } from "react"
import { getEscuelaId, getLocalidades, save } from './../services/escuelaService';
import { escuelaReducer } from './../reducers/escuelaReducer';
import Swal from "sweetalert2"

const escuelaFormInit = {
  
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

  const hanlderAddEscuela = async (escuela) => {
   
    let response;
    try {
     
        console.log('entre');
        console.log(escuela);
        response =await save(escuela)
      
        // response = update(escuela)
      
      dispatch({
        type: (escuela.id === 0) ? 'addEscuela' : 'updateEscuela',
        payload: response.data
      })
      Swal.fire(
        'Escuela cargada' , 'Escuela subida al sistema!',  'success'
      )
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
      console.log(escuelaSeleccionada);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    //funciones
    hanlderAddLocalidades,
    hanlderAddEscuela,
    hanlderEscuelaSeleccionada,
    //variables
    localidades,
    escuelaFormInit,
    escuelaSeleccionada
  }
}
