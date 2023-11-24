import React, { useState } from 'react';
import axios from 'axios';
import Footer from './components/surfaces/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333/sessions', {
        email: email,
        password: password,
      });

      console.log('Login bem-sucedido:', response.data);

    } catch (error) {
      console.error('Falha no login:', error.response);
    }
  };

  return (
    <>
      <div className="relative z-20 flex bg-cover bg-center overflow-hidden bg-gray-50" style={{ backgroundImage: "url('./background/login-bg.png')" }}>
        <div className='container relative flex px-6 py-16 mx-auto'>
          
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <img src="login-img.png" alt="Login Image" className="max-w-xs m-auto md:max-w-sm" />
          </div>
          
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <div className="w-full md:max-w-md mt-6">
              <div className="card rounded-lg px-6 py-10 mb-6 bg-white shadow-lg">
                
                <form onSubmit={handleLogin}>
                  <div className="flex justify-center mb-10 text-xl text-center font-semibold text-gray-300">   
                    <img src="logotipo.png" alt="Logo" className="h-8 w-auto" />                   
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-lg px-4 py-1 mx-4 mb-2 bg-white border border-fuchsia-500 text-gray-700 placeholder-gray-400 font-semibold focus:bg-white focus:outline-none"
                      placeholder="E-mail"
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="rounded-lg px-4 py-1 mx-4 mb-5 bg-white border border-fuchsia-500 text-gray-700 placeholder-gray-400 font-semibold focus:bg-white focus:outline-none"
                      placeholder="Senha"
                    />
                  </div>
                  <div className="flex flex-col">
                    <button
                      type="submit"
                      className="mt-1 m-4 px-2 py-1 rounded-lg font-semibold text-fuchsia-500 bg-yellow-200 border-solid border-2 border-fuchsia-500 hover:shadow-lg"
                    >
                      Entrar
                    </button>
                    <a href="/#" className="my-1 py-2 flex justify-start text-fuchsia-500 underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
