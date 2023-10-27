import React from 'react'
import { FormPublicacion } from './FormPublicacion';

export const PublicacionModal = () => {
  return (
    <div className='abrir-modal animacion fadeIn'>
      <div className='modal' style={ { display:"block"}} tabIndex="-1">
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>
               Publicar Anuncio
              </h5>
            </div>
            <div className='modal-body'>
            <FormPublicacion/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
