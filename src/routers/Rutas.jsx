import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/headers/NavBar'
import { SideBar } from '../components/headers/SideBar'
import { Footer } from './../components/Footer';
import { PublicacionList } from '../components/publicaciones/PublicacionList';
import { UserProvider } from './../context/UserProvider';
import { EscuelaForm } from '../components/escuelas/EscuelaForm';
import { VerEscuela } from './../page/VerEscuela';
import { EscuelasList } from '../components/escuelas/EscuelasList';
import { EditarEscuela } from '../page/EditarEscuela';
import { EditarCaracteristicasEscuela } from '../page/EditarCaracteristicasEscuela';
import { FormDivision } from '../page/FormDivision';
import { DivisionList } from '../components/division/DivisionList';
import { DivisionesCursos } from './../page/DivisionesCursos';
import { DivisionPage } from './../page/DivisionPage';
import { DivisionEditPage } from './../page/DivisionEditPage';
import { CargoFormPage } from '../page/CargoFormPage';


export const Rutas = () => {
    return (
        <>
            <UserProvider>
                <NavBar></NavBar>
                <div className="d-flex">
                    <SideBar></SideBar>
                    <Routes>
                        <Route path="escritorio" element={<PublicacionList />} />
                        <Route path="/" element={<Navigate to="/escritorio" />} />
                        <Route path="/escuela/registrar" element={<EscuelaForm/>} />
                        <Route path="/escuela/listar" element={<EscuelasList/>} />
                        <Route path="/escuela/ver/:id" element={<VerEscuela/>} />
                        <Route path="/escuela/editar/:id" element={<EditarEscuela/>} />
                        <Route path="/escuela/caracteristicas/:id" element={<EditarCaracteristicasEscuela/>}/>
                        <Route path="/division/agregar/:id" element={<FormDivision />} />
                        <Route path="/division/listar/:id" element={<DivisionesCursos />} />
                        <Route path="/division/ver/:id" element={<DivisionPage />} />
                        <Route path="/division/editar/:id" element={<DivisionEditPage />} />
                        <Route path="/cargo/agregar" element={<CargoFormPage />} />
                    </Routes>
                </div>
                <Footer></Footer>
            </UserProvider>
        </>
    )
}
