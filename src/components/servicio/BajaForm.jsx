import { useContext, useState } from "react"
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {  startOfMonth, endOfMonth, addMonths, format } from 'date-fns';
import { UserContext } from './../../context/UserContext';
const bajaInit = {
  motivoBaja: '',
  baja: ''
}
const fechaHoy = new Date(); // Obtén la fecha actual.
const primerDiaDelMes = startOfMonth(fechaHoy); 
const ultimoDiaDelMes = endOfMonth(fechaHoy); 

export const BajaForm = ({ handlerCloseFormBaja, idServicio }) => {

  const [bajaForm, setbajaForm] = useState(bajaInit)
  const { motivoBaja, baja } = bajaForm;
  const [selectedDate, setSelectedDate] = useState(null);

const {handlerBaja} = useContext(UserContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setbajaForm({
      ...bajaForm,
      baja: date
    }
    )
  };
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    
    setbajaForm({
      ...bajaForm,
      [name]: value
    }
    )
  }

  const onSubmit = (event) => {
    event.preventDefault();
    handlerBaja(idServicio,bajaForm)
  }

  return (
    <form onSubmit={onSubmit} className="d-flex flex-column">
   

      <label htmlFor="country" className="form-label-sm">Motivo baja</label>
      <select className="form-select form-select-sm" id="country" onChange={onInputChange} name="motivoBaja" value={motivoBaja}>
        <option value="" disabled selected>--Seleccionar articulo</option>
        <option value="02-0 FALLECIMIENTO">02-0 FALLECIMIENTO</option>
        <option value="02-1 RENUNCIA RAZONES PARTICULARES">02-1 RENUNCIA RAZONES PARTICULARES</option>
        <option value="02-2 RENUNCIA JUBILACION">02-2 RENUNCIA JUBILACION </option>
        <option value="02-3 RENUNCIA CONDICIONADA JUB">02-3 RENUNCIA CONDICIONADA JUB</option>
        <option value="02-4 BAJA SERVICIO / FIN DE REEMPLAZO">02-4 BAJA SERVICIO / FIN DE REEMPLAZO</option>
        <option value="02-5 BAJA POR CESANTIA">02-5 BAJA POR CESANTIA</option>
        <option value="03-0 BAJA POR SUSPENCION">03-0 BAJA POR SUSPENCION</option>
        <option value="05-2 TRASLADO DEFINITIVO-BAJA">05-2 TRASLADO DEFINITIVO-BAJA</option>
        <option value="06-0 CIERRE DE CARGO">06-0 CIERRE DE CARGO</option>
        <option value="07-0 BAJA POR REUBICACION">07-0 BAJA POR REUBICACION</option>
        <option value="97-0 ABANDONO DE SERVICIO">97-0 ABANDONO DE SERVICIO</option>
      </select>

<div className="d-flex flex-column align-items-start">
  <div className="d-flex justify-content-end align-items-center">
    <ReactDatePicker
     selected={selectedDate}
     onChange={handleDateChange}
     inline
     dateFormat="dd/MM/yyyy"
     minDate={primerDiaDelMes}
     maxDate={ultimoDiaDelMes}
    />
    <div className="d-flex flex-column align-items-start">
      <label htmlFor="country" className="form-label-sm">Desde</label>
      <input
        type="text"
        value={selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''}
      />
    </div>
  </div>
</div>




      <div className="d-flex justify-content-start mt-3">
        <button className='btn btn-light btn-sm' type='button' onClick={handlerCloseFormBaja}>
          Cancelar
        </button>
        <button className='btn btn-danger btn-sm ms-2' type='submit' >
          Dar de baja
        </button>
      </div>
    </form>
  )
}
