import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { UserContext } from './../context/UserContext';
import { AlumnosList } from './../components/alumnos/AlumnosList';
import { ModalBuscarAlumno } from './../components/alumnos/ModalBuscarAlumno';

export const AlumnosListPage = () => {

    const { idDivision } = useParams();
    const { getUsuarios, visibleBuscar, handlerOpenFormBuscar } = useContext(UserContext);

    useEffect(() => {
        getUsuarios(idDivision)
    }, [idDivision])


    return (
        <>
            {!visibleBuscar ||
                <ModalBuscarAlumno idDivision={idDivision} />}
            <Link className='btn btn-sm' style={{ background: '#445cff', color: 'white' }} to={`/alumno/editar/`}>Mover entre divisiones</Link>
            <Link className='btn btn-sm  ms-3' style={{ background: '#445cff', color: 'white' }} to={`/alumno/editar/`}>Pase a otra escuela</Link>
            <Link className='btn btn-success btn-sm ms-3' onClick={handlerOpenFormBuscar}>Agregar alumno nuevo</Link>
            <br /> <br />
            <AlumnosList></AlumnosList>
        </>
    )
}
