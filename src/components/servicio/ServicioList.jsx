import React, { useContext, useState } from 'react'
import { UserContext } from './../../context/UserContext';
import { ServicioRow } from './ServicioRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

const filtroInit = {
    persona: '',
    alta: '',
    liquidacion: '',
    situacionRevista: '',
    curso: '',
    division: '',
    regimen: '',
    baja:''
}
export const ServicioList = ({handlerOpenFormBaja,handlerOpenFormNovedad}) => {

    const { servicios } = useContext(UserContext);
    const [filtros, setFiltros] = useState(filtroInit)
    const { persona, alta, liquidacion, situacionRevista, curso, division, regimen,baja } = filtros;

    const onChangeFiltros = ({ target }) => {
        const { name, value } = target;
        console.log(name + value);
        setFiltros({
            ...filtros,
            [name]: value
        })
    }

    let serviciosFiltrados;
    const todosLosCamposVacios = Object.values(filtros).every((valor) => !valor);
    if (todosLosCamposVacios) {
        serviciosFiltrados = servicios;
    } else {
        serviciosFiltrados = servicios.filter((servicio) => {
        return (
          (!persona || servicio.usuario.nombre?.toLowerCase().includes(filtros.persona.toLowerCase())) &&
          (!alta || servicio.alta.toLowerCase().includes(alta.toLowerCase())) &&
          (!liquidacion || servicio?.division?.divisionCurso?.toLowerCase().includes(division.toLowerCase())) &&
          (!situacionRevista || servicio.situacionRevista?.toLowerCase().includes(situacionRevista.toLowerCase())) &&
          (!curso|| servicio?.cargo?.division?.curso?.toLowerCase().includes(curso.toLowerCase())) &&
          (!division || servicio?.cargo?.division?.divisionCurso?.toLowerCase().includes(division.toLowerCase())) &&
          (!regimen || servicio.cargo?.regimen?.toLowerCase().includes(regimen.toLowerCase())) &&
          (!baja || servicio.baja.toLowerCase().includes(baja.toLowerCase())) 
        );
      });
    }

    const restaurarFiltros = () => {
        setFiltros(filtroInit)
    }

    return (
        
            <table className="table table-sm table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col" style={{ fontSize: '14px' }}></th>
                        <th scope="col" style={{ fontSize: '14px' }}>Persona</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Alta</th>
                        <th scope="col" style={{ fontSize: '14px' }}>liquidación</th>
                        <th scope="col" style={{ fontSize: '14px' }}>S.R.</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Cur</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Div</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Régimen/Materia</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Hs.</th>
                        <th scope="col" style={{ fontSize: '14px' }}>Baja</th>
                        <th scope="col" style={{ fontSize: '14px' }}></th>
                    </tr>

                    <tr>
                        <th scope="col" style={{ fontSize: '14px' }}></th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="persona"
                                placeholder="persona"
                                value={persona}
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
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="liquidacion"
                                placeholder="liquidación"
                                value={liquidacion}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="situacionRevista"
                                placeholder="Situacion Revista"
                                value={situacionRevista}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="curso"
                                placeholder="Curso"
                                value={curso}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="division"
                                placeholder="Division"
                                value={division}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="regimen"
                                placeholder="Regimen"
                                value={regimen}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '14px' }}></th>
                        <th scope="col" style={{ fontSize: '10px' }}>
                            <input
                                type="text"
                                name="baja"
                                placeholder="Baja"
                                value={baja}
                                onChange={onChangeFiltros}
                            />
                        </th>
                        <th scope="col" style={{ fontSize: '14px' }}><button className='btn btn-sm btn-light ' onClick={() => restaurarFiltros()}><FontAwesomeIcon icon={faEraser} size="sm" /> Filtros</button></th>
                    </tr>

                </thead>
                <tbody>
                    {serviciosFiltrados?.map(servicio =>
                        <ServicioRow key={servicio.id} servicio={servicio} handlerOpenFormNovedad={handlerOpenFormNovedad} handlerOpenFormBaja={handlerOpenFormBaja} />
                        
                    )}
                </tbody>
            </table>
    )
}
