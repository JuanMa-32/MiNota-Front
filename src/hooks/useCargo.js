import { useReducer, useState } from "react";
import { cargoReducer } from './../reducers/cargoReducer';
import { findAll, findById, save } from './../services/cargoService';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const cargoFormInit = {
  motivo: '',
  fundamento: '',
  carrera: '',
  materia: '',
  regimen: '',
  condicionCargo: '',
  turno: '',
  resolucionCreacion: '',
  codigoJunta: '',
  division: null,
};
const errorsInit = {
  motivo: '',
  fundamento: '',
  regimen: '',
  condicionCargo: '',
  turno: '',
  resolucionCreacion: '',
  codigoJunta: '',
}

export const useCargo = () => {
  const [cargos, dispatch] = useReducer(cargoReducer, [])
  const [errorsCargo, seterrorsCargo] = useState(errorsInit)
  const [paginator, setpaginator] = useState([])
  const [cargoSelected, setcargoSelected] = useState(cargoFormInit)

  const navigate = useNavigate();

  const handlerAddCargo = async (id, cargo) => {
    try {
      const response = await save(id, cargo);
      dispatch({
        type: 'addCargo',
        payload: response.data
      })
      Swal.fire('Cargo agregado', 'el cargo fue agregado', 'success')
      navigate(`/cargo/listar/${id}/0`)
    } catch (error) {
      if (error.response && error.response.status == 400) {

      } else {
        throw error;
      }
    }
  }

  const getCargos = async (id, page = 0) => {
    try {
      const response = await findAll(id, page);
      console.log(response);
      setpaginator(response.data)
      dispatch({
        type: 'loadingCargos',
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handlerCargoSelected = async (id) => {
    try {
      const response = await findById(id);
      setcargoSelected({ ...response.data })
    } catch (error) {
      console.log(error);
    }
  }

  return {
    //funciones
    handlerAddCargo,
    getCargos,
    handlerCargoSelected,
    //variables
    cargoFormInit,
    errorsCargo,
    cargos,
    paginator,
    cargoSelected
  }
}
