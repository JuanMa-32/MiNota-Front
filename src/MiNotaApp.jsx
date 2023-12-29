
import { Navigate, Route, Routes } from 'react-router-dom';
import { Rutas } from './routers/Rutas';
import { AuthContext } from './auth/context/AuthContext';
import { useContext } from 'react';
import { LoginPage } from './auth/pages/LoginPage';
function MiNotaApp() {
  const { login } = useContext(AuthContext);
  return (
    <>
      <Routes>
        {
                login.isAuth
                    ? (
                      <Route path='/*' element={<Rutas />} />
                    )
                    : <>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/*' element={<Navigate to="/login" /> } />
                    </>
                    
            }
      </Routes>
    </>
  )
}

export default MiNotaApp
