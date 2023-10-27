import React, { useContext } from 'react'
import { NovedadForm } from './NovedadForm'
import { UserContext } from '../../context/UserContext'

export const NovedadModal = ({ handlerCloseFormNovedad, idServicio }) => {
    const {servicioSelected} =useContext(UserContext)
    
    return (
        <div className='abrir-modal animacion fadeIn'>
            <div className='modal ' style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog custom-modal">
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>
                                Agregar novedad a  {servicioSelected.usuario.apellido}, {servicioSelected.usuario.nombre}
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
