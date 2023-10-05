import React, { useContext } from 'react'
import { UserContext } from './../context/UserContext';
import { Link } from 'react-router-dom';

export const Paginator = ({ id,url,paginator }) => {
  

    return (
        <div className='container'>
            <nav aria-label="Page navigation example">
                {paginator?.lenght === 0 ||
                    <ul className="pagination pagination-sm justify-content-end">
                        <li className={paginator.first ? 'page-item disabled' : 'page-item'} ><Link to={`${url}/${id}/${0}`} className="page-link" >Primera</Link></li>
                        {paginator.number == 0 ||
                            <li className="page-item"><Link className="page-link" to={`${url}/${id}/${paginator.number - 1}`} >Atras</Link></li>
                        }
                        {paginator.number >= paginator.totalPages - 1 ||
                            <li className="page-item"><Link className="page-link" to={`${url}/${id}/${paginator.number + 1}`} >Siguiente</Link></li>
                            }
                        <li className={paginator.last ? 'page-item disabled' : 'page-item'} ><Link to={`${url}/${id}/${paginator.totalPages - 1}`} className="page-link" >Ultima</Link></li>
                    </ul>
                }
            </nav>
        </div>
    )
}
