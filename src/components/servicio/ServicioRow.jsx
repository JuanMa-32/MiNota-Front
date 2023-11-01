import { faCalendarMinus, faCalendarPlus, faCirclePlus, faMagnifyingGlass, faPeace, faPen, faPlug, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BajaModal } from './BajaModal';
import { UserContext } from '../../context/UserContext';

export const ServicioRow = ({ servicio, handlerOpenFormBaja, handlerOpenFormNovedad }) => {

  const { handlerAnularBaja } = useContext(UserContext);

  return (
    <>
      <tr>
        <td style={{ fontSize: '13px' }}>+</td>
        <td style={{ fontSize: '13px' }}>{servicio?.usuario.nombre}</td>
        <td style={{ fontSize: '13px' }}>{servicio.alta} </td>
        <td style={{ fontSize: '13px' }}>--</td>
        <td style={{ fontSize: '13px' }}>{servicio.situacionRevista}</td>
        <td style={{ fontSize: '13px' }}>{servicio?.cargo?.division?.curso}</td>
        <td style={{ fontSize: '13px' }}>{servicio?.cargo?.division?.divisionCurso}</td>
        <td style={{ fontSize: '13px' }}>{servicio?.cargo?.regimen}<br></br>{servicio?.cargo?.materia}</td>
        <td style={{ fontSize: '13px' }}>-------</td>
        <td style={{ fontSize: '13px' }}>{servicio?.baja}</td>
        <td style={{ fontSize: '13px' }}>
          <div className="btn-group">
            <Link className="btn btn-light btn-sm p-1" to={`/servicio/ver/${servicio.id}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="2xs" /> ver
            </Link>
            <button type="button" className="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu" style={{ margin: '0', padding: '0' }}>
              <li >
                <Link className="dropdown-item" to={`/servicio/editar/${servicio.id}`} style={{ background: '#FFA500', color: 'white' }}>
                  <FontAwesomeIcon icon={faPen} size="xs" /> Editar
                </Link>
              </li>
              {!servicio.baja && (<li>
                <button type='button' className="dropdown-item" onClick={() => handlerOpenFormNovedad(servicio.id)} style={{ background: '#6699CC', color: 'white' }}>
                  <FontAwesomeIcon icon={faCalendarPlus} size="xs" /> Agregar novedad
                </button>
              </li>)}

              {servicio.baja ?
                (<li>
                  <button type='button' className="dropdown-item" onClick={() => handlerAnularBaja(servicio.id)} >
                    <FontAwesomeIcon icon={faCalendarMinus} size="xs" /> Anular baja
                  </button>
                </li>) :
                (<li>
                  <button type='button' className="dropdown-item" onClick={() => handlerOpenFormBaja(servicio.id)} style={{ background: '#CC3333', color: 'white' }}>
                    <FontAwesomeIcon icon={faCalendarMinus} size="xs" /> Baja
                  </button>
                </li>)

              }


              <li>
                <Link className="dropdown-item" to={`/servicio/reemplazo/${servicio.cargo.id}`} style={{ background: '#008000', color: 'white' }}>
                  <FontAwesomeIcon icon={faCirclePlus} size="xs" /> Reemplazo
                </Link>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </>
  )
}
