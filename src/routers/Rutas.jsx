import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/headers/NavBar'
import { SideBar } from '../components/headers/SideBar'
import { Footer } from './../components/Footer';
import { PublicacionList } from '../components/PublicacionList';
import { UserProvider } from './../context/UserProvider';
import { EscuelaForm } from '../components/escuelas/EscuelaForm';
import { VerEscuela } from './../page/VerEscuela';


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
                        <Route path="/escuela/ver/:id" element={<VerEscuela/>} />
                    </Routes>
                </div>
                <Footer></Footer>
            </UserProvider>
        </>
    )
}
