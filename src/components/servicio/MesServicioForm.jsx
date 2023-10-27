import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker';
import { UserContext } from '../../context/UserContext';
const mesFormInit = {
    mes: 0,
    anio: 0
}

export const MesServicioForm = ({ handlerCloseFormMes, idEscuela }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [mesForm, setmesForm] = useState(mesFormInit)
    const { getServicio } = useContext(UserContext);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        setmesForm({
            ...mesForm,
            anio: year,
            mes: month,
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const { mes, anio } = mesForm
        getServicio(idEscuela, 0, mes, anio)
        handlerCloseFormMes()
    }

    return (
        <form onSubmit={onSubmit}>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                showMonthYearPicker
                dateFormat="MM/yyyy"
                inline

            />
            <div className="d-flex justify-content-start mt-3">
                <button className='btn btn-light btn-sm' type='button' onClick={handlerCloseFormMes}>
                    Cancelar
                </button>
                <button className='btn btn-primary btn-sm ms-2' type='submit' >
                    Seleccionar
                </button>
            </div>

        </form>
    );
};

