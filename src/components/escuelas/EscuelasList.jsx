import { useContext, useEffect } from "react"
import { UserContext } from './../../context/UserContext';
import { EscuelaRow } from "./EscuelaRow";


export const EscuelasList = () => {
    const { escuelas, getEscuelas } = useContext(UserContext);

    useEffect(() => {
        getEscuelas();

    }, [])

    return (
        <div className="container">
            <h4>Escuelas de Mi nota escolar</h4>
            <hr />
            <table className="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">Número</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Ver</th>
                        <th scope="col">Agregar usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        escuelas.map(escuela =>
                            <EscuelaRow key={escuela.id} escuela={escuela}></EscuelaRow>)
                    }
                </tbody>
            </table>
        </div>
    )
}
