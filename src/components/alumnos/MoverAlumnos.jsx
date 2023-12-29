import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
const filtrosInit = {
    documento: '',
    apellido: '',
    genero: '',
    condicion: '',
    desde: '',
    hasta: ''
}

export const MoverAlumnos = ({ id }) => {
    const { alumnos, divisiones, getDivisiones, handlerMoverAlumnos } = useContext(UserContext);
    const [filtros, setfiltros] = useState(filtrosInit)
    const { documento, apellido, genero, condicion, desde, hasta } = filtros;
    const [alumnosSeleccionados, setAlumnosSeleccionados] = useState([]);
    const [idDivisionDestino, setidDivisionDestino] = useState(0)

    const idEscuela = sessionStorage.getItem('idEscuela')

    const handleCheckboxChange = (alumno) => {
        const isSelected = alumnosSeleccionados.some((a) => a.id === alumno.id);
        if (!isSelected) {
            setAlumnosSeleccionados([...alumnosSeleccionados, alumno]);
        } else {
            const updatedAlumnos = alumnosSeleccionados.filter((a) => a.id !== alumno.id);
            setAlumnosSeleccionados(updatedAlumnos);
        }
    };
    const onInputChange = ({ target }) => {
        const { value } = target;
        setidDivisionDestino(value);
    }

    const onChangeFiltros = ({ target }) => {
        const { name, value } = target;
        setfiltros({
            ...filtros,
            [name]: value
        })
    }


    let AlumnosFiltrados;
    const todosLosCamposVacios = Object.values(filtros).every((valor) => !valor);
    if (todosLosCamposVacios) {
        AlumnosFiltrados = alumnos;
    } else {
        AlumnosFiltrados = alumnos.filter((alumno) => {
            return (
                (!documento || alumno?.dni?.toLowerCase().includes(filtros.documento.toLowerCase())) &&
                (!apellido || alumno?.apellido?.toLowerCase().includes(apellido.toLowerCase())) &&
                (!genero || alumno?.genero?.toLowerCase().includes(genero.toLowerCase())) &&
                (!condicion || alumno?.condicion?.toLowerCase().includes(condicion.toLowerCase())) &&
                (!desde || alumno?.desde?.toLowerCase().includes(desde.toLowerCase())) &&
                (!hasta || alumno?.hasta?.toLowerCase().includes(hasta.toLowerCase()))

            );
        });

    }
    const restaurarFiltros = () => {
        setfiltros(filtrosInit)
    }
    useEffect(() => {
        getDivisiones(idEscuela);
    }, [idEscuela])

    const onSubmit = (event) => {
        event.preventDefault()
        if ( idDivisionDestino === 0 || alumnosSeleccionados.length === 0) {
            Swal.fire(
                'Error',
                'Hay campos obligatorios que completar',
                'error'
            )
            return;
        }
        handlerMoverAlumnos(alumnosSeleccionados, idDivisionDestino, id)
    }
    return (
        <form onSubmit={onSubmit}>
            <p>Mover alumnos seleccionados al siguiente curso y division.</p>
            <div className="col-md-3">
                <label htmlFor="country" className="form-label-sm">División</label>
                <select className="form-select form-select-sm" id="country" name="division" onChange={onInputChange}>
                    <option value="">--Seleccionar division--</option>
                    {divisiones.map(div => (
                        <option key={div.id} value={div.id}>
                            {div.curso}
                        </option>
                    ))}

                </select>
            </div>
            <br></br>
            <table className="table table-sm table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col" style={{ fontSize: '14px' }}>Documento</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Alumno</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Género</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Cur</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Div</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Condición</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Desde</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Hasta</th>
                        <th scope="col" style={{ fontSize: '14px' }}></th>
                    </tr>
                    <tr>

                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="documento"
                                placeholder="Documento"
                                value={documento}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="apellido"
                                placeholder="Alumno"
                                value={apellido}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="genero"
                                placeholder="Genero"
                                value={genero}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="curso"
                                placeholder="Cur"
                                value={genero}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="division"
                                placeholder="Div"
                                value={genero}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="condicion"
                                placeholder="Condicion"
                                value={condicion}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="desde"
                                placeholder="desde"
                                value={desde}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="hasta"
                                placeholder="hasta"
                                value={hasta}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '14px' }}><button className='btn btn-sm btn-light ' onClick={() => restaurarFiltros()}><FontAwesomeIcon icon={faEraser} size="sm" /> Filtros</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AlumnosFiltrados?.map(alumno =>
                            <tr>
                                <td style={{ fontSize: '12px' }}>DNI {alumno.dni}</td>
                                <td style={{ fontSize: '12px' }}>{alumno.apellido}, {alumno.nombre} </td>
                                <td style={{ fontSize: '12px' }}>{alumno.genero} </td>
                                <td style={{ fontSize: '12px' }}>{alumno.nombre} </td>
                                <td style={{ fontSize: '12px' }}>{alumno.nombre} </td>
                                <td style={{ fontSize: '12px' }}>{alumno.condicion}</td>
                                <td style={{ fontSize: '12px' }}>{alumno.desde}</td>
                                <td style={{ fontSize: '12px' }}>{alumno.hasta}</td>
                                <td>

                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id={`flexSwitchCheckDefault-${alumno.id}`}
                                            onChange={() => handleCheckboxChange(alumno)}
                                            checked={alumnosSeleccionados.some((a) => a.id === alumno.id)}
                                        />
                                    </div>


                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <button className='btn btn-sm' style={{ background: '#445cff', color: 'white' }} >Mover alumnos</button>
        </form>
    )
}
