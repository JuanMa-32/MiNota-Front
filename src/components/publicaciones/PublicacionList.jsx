import React, { useContext, useEffect } from 'react'
import { PublicacionView } from './PublicacionView';
import { UserContext } from '../../context/UserContext';
import { PublicacionModal } from './PublicacionModal';

export const PublicacionList = () => {

  const { getPublicaciones, publicaciones, visibleFrom, handlerOpenForm } = useContext(UserContext)

  useEffect(() => {
    getPublicaciones();
  }, [])


  return (
    <div className="">
      {!visibleFrom || <PublicacionModal />}
      <div className="text-end mb-3">
        {visibleFrom || <button className="btn btn-sm btn-outline-secondary boton-esquina" onClick={handlerOpenForm}>
          + Publicacion
        </button>}
      </div>
      {publicaciones.map(publicacion => (
        <PublicacionView key={publicacion.id} publicacion={publicacion} />
      ))}
    </div>
  )
}
