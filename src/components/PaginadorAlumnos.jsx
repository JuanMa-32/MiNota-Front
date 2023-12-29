import React from 'react'
import { Link } from 'react-router-dom'

export const PaginadorAlumnos = ({ paginador, idDivision }) => {

    return (
        <>
            <nav aria-label="Page navigation example">
                {paginador?.length === 0 ||
                    <ul className="pagination  pagination-sm">
                        <li className={paginador.first ? 'page-item disabled' : 'page-item'}><Link to={`/division/alumnos/${idDivision}/0`} className='page-link'>Primera</Link> </li>
                        {paginador.number == 0 ||
                            <li className='page-item'> <Link to={`/division/alumnos/${idDivision}/${paginador.number - 1}`} className='page-link' >Atras</Link></li>
                        }
                        {paginador.number >= paginador.totalPages - 1 ||
                            <li className='page-item'> <Link to={`/division/alumnos/${idDivision}/${paginador.number + 1}`} className='page-link' >Siguiente</Link></li>
                        }

                        <li className={paginador.last ? 'page-item disabled' : 'page-item'}><Link to={`/division/alumnos/${idDivision}/${paginador.totalPages - 1}`} className='page-link'>Ultima</Link> </li>
                    </ul>
                }
            </nav>

        </>
    )
}
