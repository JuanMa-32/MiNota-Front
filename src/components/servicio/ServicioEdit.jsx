import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export const ServicioEdit = ({ id }) => {

    const { servicioSelected, servicioInit, handlerEditServicio } = useContext(UserContext);
    const [servicioForm, setservicioForm] = useState(servicioInit)
    const { usuario, alta, baja, diasCumplir, obligacion, funcion, observacion, situacionRevista, motivoBaja } = servicioForm;


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setservicioForm({
            ...servicioForm,
            [name]: value
        })
    }
    useEffect(() => {
        setservicioForm({ ...servicioSelected })
    }, [servicioSelected])

    const onSubmit = (event) => {
        event.preventDefault();
        handlerEditServicio(id, servicioForm)
    }

    return (
        <form onSubmit={onSubmit}>
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
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="regimen" value={servicioForm.cargo?.regimen} />
                </div>
                <div className="col-sm-4">
                    <label htmlFor="lastName" className="form-label-sm">División</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={servicioForm.cargo?.division?.curso} />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="lastName" className="form-label-sm">Materia</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={servicioForm.cargo?.materia} />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="lastName" className="form-label-sm">Situación de revista</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={situacionRevista} />
                </div>
                <div className="col-sm-2">
                    <label htmlFor="lastName" className="form-label-sm">Liquidación</label>
                    <input type="text" diseabled className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" />
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
                    <input type="text" className="form-control form-control-sm" id="lastName" disabled placeholder="" name="cuil" value={motivoBaja} />
                </div>

                <div className="col-sm-12">
                    <label htmlFor="lastName" className="form-label-sm">Observaciones</label>
                    <input type="text" className="form-control form-control-sm" name="observacion" value={observacion} onChange={onInputChange} />
                </div>
            </div>
            <button className="btn btn-primary btn-sm mt-3" type="submit">Editar </button>
            <Link className='btn btn-light btn-sm mt-3 ms-2' to={`/`}>Cancelar</Link>
        </form>
    )
}
