import { useReducer, useState } from "react"
import { divisionReducer } from "../reducers/divisionReducer"
import { findAll, findById, remove, save, update } from './../services/divisionesService';
import Swal from "sweetalert2";
import {  useNavigate } from 'react-router-dom';

const divisionFormInit = {
  id:0,
  curso: '',
  divisionCurso: '',
  turno: 'Mañana',
  resolucion: '',
  carrera: '',
  modalidad: 'Presencial',
  alta: '',
  baja: ''
}

const initialErrors = {
  curso: '',
  divisionCurso: '',
  turno: '',
  resolucion: '',
  carrera: '',
  modalidad: '',
  alta: '',
}

export const useDivision = () => {

  const [divisiones, dispatch] = useReducer(divisionReducer, []);

  const [errors, seterrors] = useState(initialErrors);
  const [divisionSelected, setdivisionSelected] = useState(divisionFormInit)

  const navigate = useNavigate();

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
    let response;
  
    try {
      if(division.id === 0){
        response = await save(division, id);
      }else{
        response = await update(division);
      }
      dispatch({
        type:(division.id === 0) ? 'addDivision' : 'updateDivision',
        payload:response.data
      })
      Swal.fire(
        (division.id === 0) ?
            'Division Creada' :
            'Division Actualizada',
        (division.id === 0) ?
            'La division ha sido creada con exito!' :
            'La division ha sido actualizada con exito!',
        'success'
    );
    navigate(`/division/listar/${id}`)
    } catch (error) {
      if(error.response && error.response.status == 400){
        console.log(error);
        seterrors(error.response.data)
      }else{
        throw error;
      }
    }
  }

  const hanlderDivisionSelected =async (id) => {
    const response = await findById(id);
    setdivisionSelected(response.data)
  }

  const handlerDeleteDivision = async (id,idEsc) => {
    Swal.fire({
      title: 'Esta seguro que desea eliminar?',
      text: "Cuidado la division sera eliminada!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
  }).then( async(result) => {
      if (result.isConfirmed) {

          try {
              await remove(id,idEsc);
              dispatch({
                  type: 'RemoveDivision',
                  payload: id,
              });
              Swal.fire(
                  'Division Eliminada!',
                  'La division ha sido eliminada con exito!',
                  'success'
              );
              navigate(`/division/listar/${idEsc}`)
          } catch (error) {
              console.log(error);
          }
      }
  })
  }

  return {

    //Variables
    divisionFormInit,
    divisiones,
    errors,
    divisionSelected,
   

    //Funciones
    hanlderAddDivision,
    getDivisiones,
    hanlderDivisionSelected,
    handlerDeleteDivision
  }
}
