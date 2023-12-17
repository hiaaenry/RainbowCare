import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import CadastroUsuario from './pages/CadastroUsuario'
import Tags from './pages/Tags'
import Home from './pages/Home'
import CadastroCasas from './pages/CadastroCasas'
import TutorialAdmin from'./pages/TutorialAdmin'
import Perfil from './pages/Perfil'
import TutorialCasasApoio from './pages/TutorialCasasApoio'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<CadastroUsuario />} />
      <Route path="tags" element={<Tags />} />
      <Route path="index" element={<Home />} />
      <Route path="cadastro-casas" element={<CadastroCasas />} />
      <Route path="tutorial-adm" element={<TutorialAdmin />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="casas-de-apoio" element={<TutorialCasasApoio />} />
    </Routes>
  )
}

export default AppRoutes
