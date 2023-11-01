import React from 'react'
import { FormBuscarAlumno } from './FormBuscarAlumno'

export const ModalBuscarAlumno = ({ handlerCloseFormBuscar }) => {
    return (
        <div className='abrir-modal animacion fadeIn'>
            <div className='modal' style={{ display: "block" }} tabIndex="-1">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>
                                Buscar alumno a agregar
                            </h5>
                        </div>
                        <div className='modal-body'>
                            <FormBuscarAlumno handlerCloseFormBuscar={handlerCloseFormBuscar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
