import { Routes, Route } from 'react-router-dom';

//import App from './App';
import Home from './pages/Home'
import Login from './Login';
import Cadastro from './pages/Cadastro';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />
            <Route
                path='login'
                element={<Login />}
            />
            <Route
                path='cadastro'
                element={<Cadastro />}
            />
        </Routes>
    );
};

export default AppRoutes;
