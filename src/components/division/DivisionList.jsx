import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { DivisionRow } from "./DivisionRow"

export const DivisionList = () => {

  const { divisiones } = useContext(UserContext)
 
  return (
    <div className='container'>
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
        </thead>
        <tbody>
          {divisiones.map(division => 
            <DivisionRow  key={division.id} division={division}/>
           )}

        </tbody>
      </table>
    </div>
  )
}
