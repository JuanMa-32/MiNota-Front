import React, { useContext, useEffect } from 'react'
import { PublicacionView } from './PublicacionView';
import { UserContext } from '../../context/UserContext';
import { PublicacionModal } from './PublicacionModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export const PublicacionList = () => {

  const { getPublicaciones, publicaciones, visibleFrom, handlerOpenForm } = useContext(UserContext)

  useEffect(() => {
    getPublicaciones();
  }, [])


  return (
    <div className="">
     
      {!visibleFrom || <PublicacionModal />}
      <div className="text-end mb-3">
        {visibleFrom || <button className="btn btn-sm boton-esquina" onClick={handlerOpenForm}>
        <FontAwesomeIcon icon={faPlus} /> Publicacion
        </button>}
      </div>
      {publicaciones.map(publicacion => (
        <PublicacionView key={publicacion.id} publicacion={publicacion} />
      ))}
    </div>
  )
}
