import React, { useContext } from 'react'
import { UserContext } from './../../context/UserContext';

export const ServicioView = () => {
    const { servicioSelected } = useContext(UserContext);
    const { usuario, situacionRevista, alta, baja, observacion } = servicioSelected;
    
    return (
        <div className="row g-3">

            <div className="col-sm-3">
                <label htmlFor="lastName" className="form-label">CUIL</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label">Apellido</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="resolucionCreacion" value={usuario?.apellido} />
            </div>
            <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label">Nombre</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="resolucionCreacion" value={usuario?.nombre} />
            </div>
            <div className="col-sm-3">
                <label htmlFor="lastName" className="form-label">Régimen</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-3">
                <label htmlFor="lastName" className="form-label">División</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-2">
                <label htmlFor="lastName" className="form-label">Materia</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label">Situación de revista</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-2">
                <label htmlFor="lastName" className="form-label">Liquidación</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-2">
                <label htmlFor="lastName" className="form-label">Fecha Alta</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-2">
                <label htmlFor="lastName" className="form-label">Fecha Baja</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-3">
                <label htmlFor="lastName" className="form-label">Motivo Baja</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-5">
                <label htmlFor="lastName" className="form-label">Reemplaza a </label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-5">
                <label htmlFor="lastName" className="form-label">Artículo reemplazo</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-5">
                <label htmlFor="lastName" className="form-label">Concepto celador</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
            <div className="col-sm-12">
                <label htmlFor="lastName" className="form-label">Observaciones</label>
                <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
            </div>
        </div>
    )
}
