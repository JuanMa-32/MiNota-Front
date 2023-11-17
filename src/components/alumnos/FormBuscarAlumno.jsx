import { faMagnifyingGlass, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './../../context/UserContext';
import { Link } from 'react-router-dom';
import { PaginadorAlumnos } from './../PaginadorAlumnos';


export const FormBuscarAlumno = ({ idDivision, page = 0 }) => {
    const { handlerAddAlumnoExistente, restablecerListAlumnos, alumnosPaginador, alumnosForm, getAlumnosForm } = useContext(UserContext);
    const [alumnoForm, setalumnoForm] = useState({})

    useEffect(() => {
        getAlumnosForm(page, alumnoForm)
        console.log(alumnosPaginador);
    }, [page])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setalumnoForm({
            ...alumnoForm,
            [name]: value
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        getAlumnosForm(page, alumnoForm)
    }

    return (
        <>
            <form className="needs-validation" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label-sm">Apellido</label>
                            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" name="apellido" value={alumnoForm?.apellido} onChange={onInputChange} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label-sm">Nombre</label>
                            <input type="text" className="form-control form-control-sm" id="firstName" placeholder="" name="nombre" value={alumnoForm?.nombre} onChange={onInputChange} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="">
                            <button className="btn btn-light btn-sm" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                            <button type='button' className="btn btn-light btn-sm" onClick={restablecerListAlumnos}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                    </div>
                </div>
            </form>

            <br></br>
            <>
                {Array.isArray(alumnosForm) && alumnosForm.length > 0 ?
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
                                    {alumnosForm?.map(alumno =>
                                        <tr key={alumno.id}>
                                            <td style={{ fontSize: '11px' }}>{alumno.dni}</td>
                                            <td style={{ fontSize: '11px' }}>{alumno.apellido},{alumno.nombre}</td>
                                            <td style={{ fontSize: '11px' }}>{alumno.nacimiento}</td>
                                            <td style={{ fontSize: '11px' }}>
                                                <button className='btn btn-success btn-sm' onClick={() => handlerAddAlumnoExistente(alumno.id, idDivision)}>
                                                    Agregar
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                    <PaginadorAlumnos paginador={alumnosPaginador} idDivision={idDivision}></PaginadorAlumnos>
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
