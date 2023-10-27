import React from 'react'
import { MesServicioForm } from './MesServicioForm'

export const MesServicioModal = ({handlerCloseFormMes,idEscuela}) => {
    return (
        <div className='abrir-modal animacion fadeIn'>
          <div className='modal' style={{ display:"block"}} tabIndex="-1">
            <div className='modal-dialog modal-sm' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title'>
                   Cambiar Mes
                  </h5>
                </div>
                <div className='modal-body'>
               <MesServicioForm handlerCloseFormMes={handlerCloseFormMes} idEscuela={idEscuela}></MesServicioForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}
