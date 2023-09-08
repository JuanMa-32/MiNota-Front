import React from 'react'
import { Link } from 'react-router-dom'

export const EscuelaRow = ({ escuela }) => {

    return (<tr>
        <td>{escuela.numero}</td>
        <td>{escuela.nombre}</td>
        <td>
            <Link to={`/escuela/ver/${escuela.id}`} className='btn btn-light btn-sm p-1'>ver</Link>
        </td>
        <td>
            <Link to={`/escuela/ver/${escuela.id}`} className='btn btn-success btn-sm p-1'>+ usuario</Link>
        </td>
    </tr>
    )
}
