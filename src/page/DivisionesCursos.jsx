
import { useContext, useEffect } from 'react';
import { DivisionList } from './../components/division/DivisionList';
import { UserContext } from '../context/UserContext';
import { useParams, Link } from 'react-router-dom';

export const DivisionesCursos = () => {
    const {getDivisiones,escuelaSeleccionada} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
        getDivisiones(id);
    }, [id])
  return (
  <div className='container'>
    <h6>Divisiones de Esc.  {escuelaSeleccionada.numero} {escuelaSeleccionada.nombre}</h6>
    <Link to={`/division/agregar/${id}`}className='btn btn-success btn-sm mt-3 ms-2'>Agregar</Link>
    <hr />
    <DivisionList></DivisionList>
  </div>
  )
}
