import React, { useContext } from 'react'
import { FormBuscarAlumno } from './FormBuscarAlumno'
import { UserContext } from '../../context/UserContext'

export const ModalBuscarAlumno = ({ idDivision }) => {
    const { handlerCloseFormBuscar } = useContext(UserContext);
    return (
        <div className='abrir-modal animacion fadeIn'>
            <div className='modal' style={{ display: "block" }} tabIndex="-1">
                <div className='modal-dialog custom-modal-alumno '>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>
                                Buscar alumno a agregar
                            </h5>
                        </div>
                        <div className='modal-body'>
                            <FormBuscarAlumno idDivision={idDivision} />
                            <br />
                            <button className="btn btn-light btn-sm" type="button" onClick={handlerCloseFormBuscar} >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
