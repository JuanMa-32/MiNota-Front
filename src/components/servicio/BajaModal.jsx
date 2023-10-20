import { BajaForm } from './BajaForm';

export const BajaModal = ({handlerCloseFormBaja,idServicio}) => {
  return (
    <div className='abrir-modal animacion fadeIn'>
      <div className='modal' style={{ display:"block"}} tabIndex="-1">
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>
               Dar de baja a 
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
