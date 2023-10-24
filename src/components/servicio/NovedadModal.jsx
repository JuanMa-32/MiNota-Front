import React from 'react'
import { NovedadForm } from './NovedadForm'

export const NovedadModal = ({handlerCloseFormNovedad,idServicio}) => {
    return (
        <div className='abrir-modal animacion fadeIn'>
            <div className='modal' style={{ display: "block" }} tabIndex="-1">
                <div className='modal-dialog modal-lg' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>
                                Agregar novedad a
                            </h5>
                        </div>
                        <div className='modal-body'>
                            <NovedadForm handlerCloseFormNovedad={handlerCloseFormNovedad} idServicio={idServicio}></NovedadForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
