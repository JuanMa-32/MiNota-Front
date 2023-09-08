import { useReducer, useState } from "react"
import { divisionReducer } from "../reducers/divisionReducer"
import { findAll, save } from './../services/divisionesService';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const divisionFormInit = {
  curso: '',
  division: '',
  turno: 'Mañana',
  resolucion: '',
  carrera: '',
  modalidad: 'Presencial',
  alta: '2023-08-01',
  baja: ''
}

const initialErrors = {
  curso: '',
  division: '',
  turno: '',
  resolucion: '',
  carrera: '',
  modalidad: '',
  alta: '',
}

export const useDivision = () => {

  const [divisiones, dispatch] = useReducer(divisionReducer, []);

  const [errors, seterrors] = useState(initialErrors);


  const getDivisiones = async (id) => {
    try {
      const response = await findAll(id);
      dispatch({
        type:'loadingDivisiones',
        payload:response.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  const hanlderAddDivision = async (division, id) => {
    try {
      const response = await save(division, id);
      dispatch({
        type:'addDivision',
        payload:response.data
      })
      
      Swal.fire('Division cargada', 'la division fue cargada con exito', "success")
    } catch (error) {
      if(error.response && error.response.status == 400){
        seterrors(error.response.data)
        console.log(errors);
      }else{
        throw error;
      }
     
    }
  }

  return {

    //Variables
    divisionFormInit,
    divisiones,
    errors,

    //Funciones
    hanlderAddDivision,
    getDivisiones
  }
}
