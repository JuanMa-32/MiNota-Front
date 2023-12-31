import React, { useContext } from 'react'
import { UserContext } from './../../context/UserContext';
import { Link } from 'react-router-dom';

export const ServicioView = () => {
    const { servicioSelected } = useContext(UserContext);
    const { usuario, regimen, situacionRevista, alta, baja, motivoBaja, observacion, cargo } = servicioSelected;

    return (
        <>
            <Link className='btn btn-success btn-sm mt-3 ms-2' to={`/servicio/editar/${servicioSelected.id}`}>Editar</Link>
            <br /><br></br>
            <div className="row g-3">
                <div className="col-sm-2">
                    <label htmlFor="lastName" className="form-label-sm">CUIL</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario?.cuil} />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="lastName" className="form-label-sm">Apellido</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="resolucionCreacion" value={usuario?.apellido} />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="lastName" className="form-label-sm">Nombre</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="resolucionCreacion" value={usuario?.nombre} />
                </div>
                <div className="col-sm-4">
                    <label htmlFor="lastName" className="form-label-sm">Régimen</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={regimen} />
                </div>
                <div className="col-sm-4">
                    <label htmlFor="lastName" className="form-label-sm">División</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario?.division?.nombre} />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="lastName" className="form-label-sm">Materia</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={cargo?.materia} />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="lastName" className="form-label-sm">Situación de revista</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={situacionRevista} />
                </div>
                <div className="col-sm-2">
                    <label htmlFor="lastName" className="form-label-sm">Liquidación</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={usuario.cuil} />
                </div>
                <div className="col-sm-2">
                    <label htmlFor="lastName" className="form-label-sm">Fecha Alta</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={alta} />
                </div>
                <div className="col-sm-2">
                    <label htmlFor="lastName" className="form-label-sm">Fecha Baja</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={baja} />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="lastName" className="form-label-sm">Motivo Baja</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={servicioSelected?.motivoBaja} />
                </div>

                <div className="col-sm-12">
                    <label htmlFor="lastName" className="form-label-sm">Observaciones</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={observacion} />
                </div>
            </div>
        </>
    )
}
