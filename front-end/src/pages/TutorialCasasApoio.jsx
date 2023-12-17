import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckboxLink from '../components/Checkbox';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

const TutorialCasasApoio = () => {
  
  const [isTermAccepted, setTermAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setTermAccepted(!isTermAccepted);
  };

  return (
    <>
      <Header />

      <div className="relative z-20 flex bg-cover bg-center overflow-hidden bg-gray-50">
        <div className="container relative flex px-20 py-10 mx-auto">
          <div className="bg-gray text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
            <div className="md:flex w-full">
              <div className="bg-purple-100 hidden md:block w-1/2 py-10 px-10 bg-cover bg-center">
                <img
                  src="casas-de-apoio.png"
                  className="mb-20"
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
                    Passo a Passo: Criando Casas de Apoio!
                  </h1>

                  <p>
                    Bem-vindo(a) ao tutorial sobre como criar casas de apoio
                    para a comunidade LGBTQIAP+ na plataforma RainbowCare.
                  </p>

                  <h3 className="text-xl font-semibold italic mb-2 mt-3">Regras e Diretrizes:</h3>

                  <h3 className="text-2x2 font-semibold mb-2 mt-3">Pesquisa e Planejamento:</h3>
                    <ul className="list-disc list-inside">
                      <li>Realize uma pesquisa abrangente sobre as necessidades específicas da comunidade LGBT na sua região.</li>
                      <li>Identifique os desafios enfrentados pela comunidade, como discriminação, falta de moradia segura, 
                        apoio emocional, etc.</li>
                        <li>Planeje o escopo da sua casa de apoio, incluindo capacidade, localização, serviços oferecidos e orçamento estimado.</li>
                    </ul>
                  <h3 className="text-2x2 font-semibold mb-2 mt-3">Parcerias e Colaborações:</h3>
                    <ul className="list-disc list-inside">
                      <li>Estabeleça parcerias com organizações locais, grupos ativistas, instituições de ensino e profissionais de saúde.</li>
                      <li>Busque orientação e apoio de organizações que tenham experiência no trabalho com a comunidade LGBT.</li>
                    </ul>

                      <p className='text-sm mt-5 font-semibold italic'>"Caso você só deseje inscrever uma casa de apoio, garanta que a casa seja inclusiva e 
                      respeite a diversidade dentro da comunidade LGBT, considerando diferentes identidades e experiências." </p>

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

                  <div className="flex items-center mt-7">
                    <button
                      type="button"
                      className="text-sm font-semibold mx-auto px-10 py-3 rounded-lg bg-transparent border-solid border-2 border-fuchsia-500 text-fuchsia-500 hover:text-gray-900 hover:border-gray-900"
                    >
                      <Link to="/">Voltar</Link>
                    </button>
                    <Link
                      to={isTermAccepted ? "/tutorial-adm" : "#"}
                      className={`block mx-auto bg-fuchsia-500 ${
                        isTermAccepted
                          ? "hover:bg-fuchsia-600 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl"
                          : "cursor-not-allowed opacity-50"
                      } text-white rounded-lg px-10 py-3 font-semibold`}
                    >
                      Se tornar Administrador
                    </Link>
      
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

export default TutorialCasasApoio;
