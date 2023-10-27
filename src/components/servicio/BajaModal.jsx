import { useContext } from 'react';
import { BajaForm } from './BajaForm';
import { UserContext } from '../../context/UserContext';

export const BajaModal = ({handlerCloseFormBaja,idServicio}) => {
  const {servicioSelected} = useContext(UserContext)
  return (
    <div className='abrir-modal animacion fadeIn'>
      <div className='modal' style={{ display:"block"}} tabIndex="-1">
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>
               Dar de baja a {servicioSelected.usuario.apellido}, {servicioSelected.usuario.nombre}
              </h5>
            </div>
            <div className='modal-body'>
            <BajaForm handlerCloseFormBaja={handlerCloseFormBaja} idServicio={idServicio}/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
