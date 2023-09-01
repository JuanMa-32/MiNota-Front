
import { Navigate, Route, Routes } from 'react-router-dom';
import { Rutas } from './routers/Rutas';
function MiNotaApp() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<Rutas />} />
        <Route path='/*' element={<Navigate to="/escritorio" />} />
      </Routes>
    </>
  )
}

export default MiNotaApp
