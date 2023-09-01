import { useReducer, useState } from "react"
import { PublicacionReducer } from "../reducers/PublicacionReducer"
import { findAll, save, update } from "../services/publicacionService"
import Swal from "sweetalert2"

const publicacionInitial = {
  id: 0,
  titulo: '',
  cuerpo: ''
}

export const usePublicacion = () => {
  const [publicaciones, dispatch] = useReducer(PublicacionReducer, [])
  const [visibleFrom, setvisibleFrom] = useState(false);

  const [errors, seterrors] = useState(publicacionInitial)
  const [publicacionSelected, setpublicacionSelected] = useState(publicacionInitial)

  const getPublicaciones = async () => {
    const response = await findAll();
    dispatch({
      type: 'loadingPublicaciones',
      payload: response.data
    })
  }

  const hanlderAddPublicacion = async (publicacion) => {
    try {
      let response;
      if (publicacion.id === 0) {
        response = await save(publicacion);
      } else {
        response = await update(publicacion);
      }
      dispatch({
        type: (publicacion.id === 0) ? 'addPublicacion' : 'updatePublicacion',
        payload: response.data
      })
      Swal.fire(
        (publicacion.id === 0 ? 'Anuncio publicado!' : 'Anuncio Actualizado!'),
        (publicacion.id === 0 ? 'El Anuncio ha sido publicado.' : 'Anuncio actualizado!'),
        'success'
      )
      handlerCloseForm();
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status == 400) {
        seterrors(error.response.data)
      }
    }
  }

  const handlerUserSelectedForm = (publicacion) => {
    // console.log(user)
    setvisibleFrom(true);
    setpublicacionSelected({ ...publicacion });
  }

  const handlerOpenForm = () => {
    setvisibleFrom(true);
  }
  const handlerCloseForm = () => {
    setvisibleFrom(false)
    setpublicacionSelected(publicacionInitial);
    seterrors(publicacionInitial)
  }


  return {
    //FUNCIONES
    getPublicaciones,
    hanlderAddPublicacion,
    handlerOpenForm,
    handlerCloseForm,
    handlerUserSelectedForm,
    //VARIABLES
    publicaciones,
    publicacionInitial,
    visibleFrom,
    errors,
    publicacionSelected
  }
}
