import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { DivisionRow } from "./DivisionRow"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEraser } from "@fortawesome/free-solid-svg-icons"
const filtroInit = {
  curso: '',
  divisionFiltro: '',
  turno: '',
  carrera: '',
  modalidad: '',
  alta: '',
}
export const DivisionList = () => {

  const { divisiones } = useContext(UserContext)
  const [filtros, setFiltros] = useState(filtroInit);
  const {curso,divisionFiltro,turno,carrera,modalidad,alta} = filtros;

  const onChangeFiltros = ({target}) => {
    const{name,value} = target;
   
    setFiltros({
      ...filtros,
      [name]:value
    })
  }

  let divisionesFiltradas;
  const todosLosCamposVacios = Object.values(filtros).every((valor) => !valor);
  if (todosLosCamposVacios) {
    divisionesFiltradas = divisiones;
  } else {
    divisionesFiltradas = divisiones.filter((divisionF) => {
      return (
        (!curso || divisionF.curso?.toLowerCase().includes(filtros.curso.toLowerCase())) &&
        (!divisionFiltro || divisionF.divisionCurso?.toLowerCase().includes(divisionFiltro.toLowerCase())) &&
        (!turno || divisionF.turno?.toLowerCase().includes(turno.toLowerCase())) &&
        (!carrera || divisionF.carrera?.toLowerCase().includes(carrera.toLowerCase())) &&
        (!alta || divisionF.alta?.toLowerCase().includes(alta.toLowerCase())) &&
        (!modalidad || divisionF.modalidad?.toLowerCase().includes(modalidad.toLowerCase())) 
       
      );
    });
    
  }
  const restaurarFiltros = () => {
    setFiltros(filtroInit)
  }
  return (
    <div className=''>
      <table className="table table-sm table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Curso</th>
            <th scope="col">División</th>
            <th scope="col">Turno</th>
            <th scope="col">Carrera</th>
            <th scope="col">Modalidad</th>
            <th scope="col">Fecha Alta</th>
            <th scope="col">Horario</th>
            <th scope="col"></th>

          </tr>
          <tr>
          <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="curso"
                placeholder="curso"
                value={curso}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="divisionFiltro"
                placeholder="division"
                value={divisionFiltro}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="turno"
                placeholder="Turno"
                value={turno}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="carrera"
                placeholder="carrera"
                value={carrera}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="modalidad"
                placeholder="modalidad"
                value={modalidad}
                onChange={onChangeFiltros}
              />
            </th>
            <th scope="col" style={{ fontSize: '10px' }}>
              <input
                type="text"
                name="alta"
                placeholder="alta"
                value={alta}
                onChange={onChangeFiltros}
              />
            </th>
         
            <th scope="col" style={{ fontSize: '14px' }}></th>
            <th scope="col" style={{ fontSize: '14px' }}><button className='btn btn-sm btn-light ' onClick={() => restaurarFiltros()}><FontAwesomeIcon icon={faEraser} size="sm" /> Filtros</button></th>
          </tr>
        </thead>
        <tbody>
          {divisionesFiltradas?.map(division => 
            <DivisionRow  key={division.id} division={division}/>
           )}

        </tbody>
      </table>
    </div>
  )
}
