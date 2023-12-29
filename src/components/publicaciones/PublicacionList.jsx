import React, { useContext, useEffect } from 'react'
import { PublicacionView } from './PublicacionView';
import { UserContext } from '../../context/UserContext';
import { PublicacionModal } from './PublicacionModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './../../auth/context/AuthContext';


export const PublicacionList = () => {

  const { getPublicaciones, publicaciones, visibleFrom, handlerOpenForm } = useContext(UserContext)
  const { login } = useContext(AuthContext);
  useEffect(() => {
    getPublicaciones();
  }, [])


  return (
    <div >
      {!visibleFrom || <PublicacionModal />}
      <div className="text-end mb-3">
        {!login.user.isAdmin ||
          <button className="btn btn-sm boton-esquina" onClick={handlerOpenForm}>
            <FontAwesomeIcon icon={faPlus} /> Publicacion
          </button>
        }

      </div>
      {publicaciones.map(publicacion => (
        <PublicacionView key={publicacion.id} publicacion={publicacion} />
      ))}
    </div>
  )
}
