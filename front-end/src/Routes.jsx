import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import CadastroUsuario from './pages/CadastroUsuario'
import Tags from './pages/Tags'
import Home from './pages/Home'
import CadastroCasas from './pages/CadastroCasas'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<CadastroUsuario />} />
      <Route path="tags" element={<Tags />} />
      <Route path="index" element={<Home />} />
      <Route path="cadastro-casas" element={<CadastroCasas />} />
    </Routes>
  )
}

export default AppRoutes
