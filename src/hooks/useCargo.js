import { useReducer, useState } from "react";
import { cargoReducer } from './../reducers/cargoReducer';
import { findAll, findById, remove, save, update } from './../services/cargoService';
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
      seterrorsCargo(errorsInit)
      navigate(`/cargo/listar/${id}/0`)
    } catch (error) {
      if (error.response && error.response.status == 400) {
        console.log(error);
        seterrorsCargo(error.response.data)
      } else {
        throw error;
      }
    }
  }
  const handlerEditCargo = async (id, cargo) => {
    try {
      const response = await update(id, cargo);
      dispatch({
        type: 'updateCargo',
        payload: response.data
      })
      Swal.fire('Cargo Actualizado', 'el cargo fue editado', 'success')
    } catch (error) {
      if (error.response && error.response.status == 400) {
        seterrorsCargo(error.response.data)
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

  const hanlderDivisionSelected =async (id) => {
    const response = await findById(id);
    setdivisionSelected(response.data)
  }

  const handlerDeleteCargo = async (id,idEsc) => {
    console.log(id,idEsc);
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
                  type: 'RemoveCargo',
                  payload: id,
              });
              Swal.fire(
                  'Cargo Eliminado!',
                  'El cargo ha sido eliminado con exito!',
                  'success'
              );
              navigate(`/cargo/listar/${idEsc}/${0}`)
          } catch (error) {
              console.log(error);
          }
      }
  })
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
    handlerEditCargo,
    handlerDeleteCargo,
    //variables
    cargoFormInit,
    errorsCargo,
    cargos,
    paginator,
    cargoSelected
  }
}
