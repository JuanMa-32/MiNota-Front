import { faMagnifyingGlass, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { UserContext } from './../../context/UserContext';
import { Link } from 'react-router-dom';

export const FormBuscarAlumno = ({ idDivision }) => {
    const { restablecerUsuario, handlerUsuarioDni, usuarioDni, handlerAddAlumnoExistente } = useContext(UserContext);
    const [dni, setdni] = useState('')


    const onInputChange = ({ target }) => {
        setdni(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        handlerUsuarioDni(dni)
    }
    return (
        <>
            <form className="needs-validation" onSubmit={onSubmit}>
                <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label-sm">Documento</label>
                    <div className="input-group">
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="dni" value={dni} onChange={onInputChange} />
                        <div className="input-group-append">
                            <button className="btn btn-light btn-sm" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                            <button type='button' className="btn btn-light btn-sm" onClick={restablecerUsuario}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                    </div>
                </div>
            </form>
            <br></br>
            <>
                {usuarioDni?.nombre ?
                    (
                        <>
                            <table className="table table-sm table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ fontSize: '12px' }}>Documento</th>
                                        <th scope="col" style={{ fontSize: '12px' }}>Nombre</th>
                                        <th scope="col" style={{ fontSize: '12px' }}>F. Nacimiento</th>
                                        <th scope="col" style={{ fontSize: '12px' }}></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr >
                                        <td style={{ fontSize: '11px' }}>{usuarioDni.dni}</td>
                                        <td style={{ fontSize: '11px' }}>{usuarioDni.apellido},{usuarioDni.nombre}</td>
                                        <td style={{ fontSize: '11px' }}>{usuarioDni.nacimiento}</td>
                                        <td style={{ fontSize: '11px' }}>
                                            <button className='btn btn-success btn-sm' onClick={() => handlerAddAlumnoExistente(usuarioDni.id, idDivision)}>
                                                Agregar
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p style={{ fontSize: '11px' }}>
                                Si luego de corroborar que los datos ingresados en la búsqueda son correctos el sistema no devuelve a la persona que se desea cargar, deberá
                                <span style={{ marginLeft: '5px', marginRight: '5px' }}>
                                    <Link className='btn buttonAgregar ' to={`/alumno_division/agregar_nuevo/${idDivision}`}>
                                    <FontAwesomeIcon icon={faPlus} /> Agregar 
                                    </Link>
                                </span>
                            </p>
                        </>
                    ) :
                    (
                        <>
                            <table className="table table-sm table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ fontSize: '12px' }}>Documento</th>
                                        <th scope="col" style={{ fontSize: '12px' }}>Nombre</th>
                                        <th scope="col" style={{ fontSize: '12px' }}>F. Nacimiento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td style={{ fontSize: '11px', textAlign: 'center' }} colSpan="4">Ningún dato disponible en esta tabla</td>

                                    </tr>
                                </tbody>
                            </table>
                            <p style={{ fontSize: '11px' }}>
                                Si luego de corroborar que los datos ingresados en la búsqueda son correctos el sistema no devuelve a la persona que se desea cargar, deberá
                                <span style={{ marginLeft: '5px', marginRight: '5px' }}>
                                    <Link className='btn buttonAgregar' to={`/alumno_division/agregar_nuevo/${idDivision}`}>
                                    <FontAwesomeIcon icon={faPlus} /> Agregar
                                    </Link>
                                </span>
                            </p>

                        </>
                    )}
            </>

    
    
    
    
    
    
    
    
    
    
    


    
    
    
    
    
    
    
    
    
    
    



        </>)
}
