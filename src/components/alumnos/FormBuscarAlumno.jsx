import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { UserContext } from './../../context/UserContext';
import { Link } from 'react-router-dom';

export const FormBuscarAlumno = ({ handlerCloseFormBuscar }) => {
    const { restablecerUsuario, handlerUsuarioDni,usuarioDni } = useContext(UserContext);
    const [dni, setdni] = useState(0)


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
            <button className="btn btn-light btn-sm" type="button" onClick={handlerCloseFormBuscar} >
                Cancelar
            </button>
        </form>

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
                <td style={{ fontSize: '11px' }}><Link to={`/`} className='btn btn-light btn-sm p-1'> </Link>agregar</td>
              </tr>
            
          
        </tbody>
      </table>
        </>
    )
}
