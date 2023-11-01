import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { UserContext } from './../context/UserContext';
import { AlumnosList } from './../components/alumnos/AlumnosList';
import { ModalBuscarAlumno } from './../components/alumnos/ModalBuscarAlumno';

export const AlumnosListPage = () => {

    const { idDivision } = useParams();
    const { getUsuarios } = useContext(UserContext);
    const [visibleBuscar, setvisibleBuscar] = useState(false);

    useEffect(() => {
        getUsuarios(idDivision)
    }, [idDivision])

    const handlerOpenFormBuscar = () => {
        setvisibleBuscar(true);
    }
    const handlerCloseFormBuscar = () => {
        setvisibleBuscar(false)
    }
    return (
        <>
            {!visibleBuscar ||
             <ModalBuscarAlumno handlerCloseFormBuscar={handlerCloseFormBuscar} />}
            <Link className='btn btn-success btn-sm mt-3 ms-3'  onClick={handlerOpenFormBuscar}>Agregar</Link>
            <AlumnosList></AlumnosList>
        </>
    )
}
