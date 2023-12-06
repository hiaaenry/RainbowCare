import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage'
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Tags from './pages/Tags';
import Home from './pages/Home'

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<LandingPage />}
            />
            <Route
                path='login'
                element={<Login />}
            />
            <Route
                path='cadastro'
                element={<Cadastro />}
            />
            <Route
                path='tags'
                element={<Tags />}
            />
            <Route
                path='index'
                element={<Home />}
            />
        </Routes>
    );
};

export default AppRoutes;
