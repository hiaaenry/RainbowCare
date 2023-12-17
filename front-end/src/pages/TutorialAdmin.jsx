import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import CheckboxLink from '../components/Checkbox';

import Header from '../layout/Header'
import Footer from '../layout/Footer';


const TutorialAdmin = () => {
  const [isTermAccepted, setTermAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setTermAccepted(!isTermAccepted);
  }

  return (
    <>
      <Header/>

      <div className="relative z-20 flex bg-cover bg-center overflow-hidden bg-gray-50">
        <div className="container relative flex px-20 py-10 mx-auto">
          <div className="bg-gray text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
            <div className="md:flex w-full">
              <div className="bg-purple-100 hidden md:block w-1/2 py-10 px-10 bg-cover bg-center">
                <img
                  src="admin.png"
                  className="mb-20"
                  alt=""
                />
                <img
                  src="tutorial-admin.png"
                  className=""
                  alt=""
                />
              </div>
        
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="flex justify-center mb-10 text-xl">
                  <a href="/">
                    <img
                      src="logotipo.png"
                      alt="logo"
                      className="h-12 w-auto"
                    />
                  </a>
                </div>

                <div>
                  <h1 className="text-2xl font-semibold mb-5 text-center ">
                    Tutorial para se tornar um Administrador do RainbowCare!
                  </h1>
                  <p>
                    Bem-vindo(a) ao tutorial sobre como se tornar um administrador
                    da plataforma RainbowCare, onde nosso objetivo é apoiar a comunidade
                    LGBTQIAP+. 
                  </p>

                  <h3 className="text-xl font-semibold italic mb-2 mt-3">Regras e Diretrizes importantes que o
                    administrador deve seguir:</h3>

                  <h3 className="text-2x2 font-semibold mb-2 mt-3">Respeito à Diversidade:</h3>
                    <ul className="list-disc list-inside">
                      <li>Respeitar e promover a diversidade e inclusão de identidades de gênero e orientações sexuais.</li>
                      <li>Evitar comportamentos discriminatórios com base na orientação sexual, identidade de gênero, raça, etnia, religião, etc.</li>
                    </ul>
                  <h3 className="text-2x2 font-semibold mb-2 mt-3">Confidencialidade e Privacidade:</h3>
                    <ul className="list-disc list-inside">
                      <li>Respeitar a privacidade dos usuários da comunidade.</li>
                      <li>Manter a confidencialidade das informações pessoais dos usuários.</li>
                    </ul>
                  <h3 className="text-2x2 font-semibold mb-2 mt-3">Colaboração com a Comunidade:</h3>
                    <ul className="list-disc list-inside">
                      <li>Colaborar com com os newsletter da plataforma.</li>
                      <li>Envolver a comunidade à plataforma sempre que possível.</li>
                    </ul>
                  <h3 className="text-2x2 font-semibold mb-2 mt-3">Atualização Constante:</h3>
                    <ul className="list-disc list-inside">
                      <li>Manter-se atualizado sobre questões e desafios enfrentados pela comunidade LGBTQIAP+.</li>
                      <li>Adaptar as políticas e procedimentos conforme necessário para melhor atender às necessidades da comunidade.</li>
                    </ul>

                  <p className="mt-5">
                    Para continuar, marque abaixo a caixa "Termo de Compromisso" se concordar com as regras e responsabilidades.
                  </p>
                  <div className="mt-3">

                  <CheckboxLink checked={isTermAccepted} onChange={handleCheckboxChange} />

                  </div>
                  <p className="mt-1 mb-2 italic">
                    {isTermAccepted
                      ? 'Obrigado por se comprometer!'
                      : 'Por favor, aceite o Termo de Compromisso.'}
                  </p>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mt-5">
                    <Link
                      to={isTermAccepted ? "/cadastro" : "#"}
                      className={`block w-fit mx-auto bg-fuchsia-500 ${
                        isTermAccepted
                          ? "hover:bg-fuchsia-600 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl"
                          : "cursor-not-allowed opacity-50"
                      } text-white rounded-lg px-10 py-3 font-semibold`}> 
                      Cadastre-se
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TutorialAdmin