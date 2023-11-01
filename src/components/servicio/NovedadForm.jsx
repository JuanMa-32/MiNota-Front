import React, { useContext, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import { format, isBefore, startOfMonth, differenceInDays } from 'date-fns';
import { UserContext } from '../../context/UserContext';

const novedadInit = {
    articulo: '',
    desde: '',
    hasta: '',
    dias: 0
};

export const NovedadForm = ({ idServicio, handlerCloseFormNovedad }) => {
    const [novedadForm, setNovedadForm] = useState(novedadInit);
    const { articulo, desde, hasta } = novedadForm;
    const [diasDiferencia, setDiasDiferencia] = useState(0);
    const { handlerAddNovedad, errorsNovedad, handlerServicioSelected, servicioSelected } = useContext(UserContext)

    useEffect(() => {
        handlerServicioSelected(idServicio)
    }, [idServicio])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setNovedadForm({
            ...novedadForm,
            [name]: value,
        });
    };

    const handleDesdeChange = (date) => {

        if (!hasta || isBefore(date, hasta)) {
            setNovedadForm({
                ...novedadForm,
                desde: date,
            });
        }
    };

    const handleHastaChange = (date) => {

        if (!desde || isBefore(desde, date)) {
            setNovedadForm({
                ...novedadForm,
                hasta: date,
            });
        }
    };

    useEffect(() => {
        if (desde && hasta) {
            const diff = differenceInDays(hasta, desde);
            setDiasDiferencia(diff);
            setNovedadForm({
                ...novedadForm,
                dias: diff,
            });
        } else {
            setDiasDiferencia(0);
        }
    }, [desde, hasta]);

    const fechaHoy = new Date();
    const primerDiaDelMes = startOfMonth(fechaHoy);

    const onSubmit = (event) => {
        event.preventDefault();
        handlerAddNovedad(idServicio, novedadForm);
        handlerCloseFormNovedad()
    };
    return (
        <>
            <form onSubmit={onSubmit} className="">
                <div className="">
                    <label htmlFor="country" className="form-label-sm">
                        Artículo
                    </label>
                    <select
                        className="form-select form-select-sm"
                        id="country"
                        onChange={onInputChange}
                        name="articulo"
                        value={articulo}
                    >
                        <option value="" disabled selected>
                            --Seleccionar artículo--
                        </option>
                        <option value="00-0 DIAS PREVIOS AL ALTA">00-0 DIAS PREVIOS AL ALTA</option>
                        <option value="05-3 TRASLADO TRANSITORIO (Reserva de Cargo)">05-3 TRASLADO TRANSITORIO (Reserva de Cargo)</option>
                        <option value="05-4 TRASLADO PREVENTIVO-RESERVA CARGO">05-4 TRASLADO PREVENTIVO-RESERVA CARGO</option>
                        <option value="06-3 LIC. POR ESTUDIO-L-LEY-4934">06-3 LIC. POR ESTUDIO-L-LEY-4934</option>
                        <option value="06-4 LIC. POR BECA-LL-LEY-4934">06-4 LIC. POR BECA-LL-LEY-4934</option>
                        <option value="09-0 SUSPENCIÓN">09-0 SUSPENCIÓN</option>
                        <option value="10-0 INASISTENCIA INJUSTIFICADA">10-0 INASISTENCIA INJUSTIFICADA</option>
                        <option value="37-0 VACACIONES">37-0 VACACIONES</option>
                        <option value="38-0 VACACIONES NO JOZADAS">38-0 VACACIONES NO JOZADAS</option>
                        <option value="40-0 ENFERMEDAD">40-0 ENFERMEDAD</option>
                        <option value="44-0 ACCIDENTE TRABAJO">44-0 ACCIDENTE TRABAJO</option>
                        <option value="99-0 PARO DOCENTE">99-0 PARO DOCENTE</option>
                        <option value="54-0 MATERNIDAD/ADOPCION">54-0 MATERNIDAD/ADOPCION</option>
                        <option value="50-4 FALLECIMIENTO FAMILIAR DIRECTO">50-4 FALLECIMIENTO FAMILIAR DIRECTO</option>
                        <option value="50-5 FALLECIMIENTO FAMILIAR INDIRECTO">50-5 FALLECIMIENTO FAMILIAR INDIRECTO</option>
                        <option value="50-7 DONACION DE SANGRE">50-7 DONACION DE SANGRE</option>
                        <option value="50-9 RAZONES PARTICULARES">50-9 RAZONES PARTICULARES</option>
                        <option value="96-0 CITACION JUDICIAL">96-0 CITACION JUDICIAL</option>
                        <option value="50-7 CUIDADO FAMILIAR ENFERMO">50-7 CUIDADO FAMILIAR ENFERMO</option>
                        <option value="50-8 LEY 26.485-VIOLENCIA DE GENERO">50-8 LEY 26.485-VIOLENCIA DE GENERO</option>
                        <option value="52-0 LIC.APROBADA POR DIRECTOR">52-0 LIC.APROBADA POR DIRECTOR</option>
                        <option value="61-0 LICENCIA DEPORTIVA">61-0 LICENCIA DEPORTIVA</option>
                        <option value="65-0 TARDANZAS">65-0 TARDANZAS</option>
                    </select>
                    <p className='text-danger'>{errorsNovedad?.articulo}</p>
                </div>

                <div className="d-flex  justify-content-center align-items-center">
                    <div className="w-40 mb-3" style={{ marginRight: '5%' }}>
                        <label htmlFor="country" className="form-label-sm">
                            Desde
                        </label>
                        <input
                            type="text"
                            value={desde ? format(desde, 'dd/MM/yyyy') : ''}
                            className="form-control form-control-sm"
                        />
                        <div style={{ marginTop: '10px' }}>
                            <ReactDatePicker
                                selected={desde}
                                minDate={primerDiaDelMes}
                                onChange={handleDesdeChange}
                                inline
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                        <p className='text-danger'>{errorsNovedad?.desde}</p>
                    </div>

                    <div className="w-40 mb-3">
                        <label htmlFor="country" className="form-label-sm">
                            Hasta
                        </label>
                        <input
                            type="text"
                            value={hasta ? format(hasta, 'dd/MM/yyyy') : ''}
                            className="form-control form-control-sm"
                        />
                        <div style={{ marginTop: '10px' }}>
                            <ReactDatePicker
                                selected={hasta}
                                minDate={primerDiaDelMes}
                                onChange={handleHastaChange}
                                inline
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                        <p className='text-danger'>{errorsNovedad?.hasta}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between" >
                    <div className="w-40">
                        <label htmlFor="country" className="form-label-sm">
                            Días
                        </label>
                        <input
                            type="number"
                            value={diasDiferencia}
                            className="form-control form-control-sm"
                            disabled
                        />
                    </div>
                </div>

<br />
                <h6>Novedades Servicio</h6>
                <table className="table table-sm" >
                    <thead>
                        <tr>
                            <th scope="col" style={{ fontSize: '13px' }}>Artículo</th>
                            <th scope="col" style={{ fontSize: '13px' }}>Desde</th>
                            <th scope="col" style={{ fontSize: '13px' }}>Hasta</th>
                            <th scope="col" style={{ fontSize: '13px' }}>Días</th>

                        </tr>
                    </thead>
                    <tbody>
                        {servicioSelected?.novedades?.map(novedad =>

                            <tr key={novedad.id}>
                                <td style={{ fontSize: '12px' }}>{novedad.articulo}</td>
                                <td style={{ fontSize: '12px' }}>{novedad.desde}</td>
                                <td style={{ fontSize: '12px' }}>{novedad.hasta}</td>
                                <td style={{ fontSize: '12px' }}>{novedad.dias}</td>
                            </tr>
                        )}

                    </tbody>
                </table>

                <div className="d-flex justify-content-start mt-3">
                    <button className="btn btn-light btn-sm" type="button" onClick={handlerCloseFormNovedad} >
                        Cancelar
                    </button>
                    <button className="btn btn-primary btn-sm ms-2" type="submit">
                        Guardar
                    </button>
                </div>
            </form>
        </>
    );
};
