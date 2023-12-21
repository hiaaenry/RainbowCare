import React, { useState } from 'react';
import Modal from './Modal';

const Suggestions = ({ suggestions, onSuggestionClick }) => {
  return (
    <ul className="absolute left-0 w-full mt-2 bg-white border rounded shadow-md">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="p-2 cursor-pointer hover:bg-blue-100"
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

function Casas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = ['Casa Acalanto', 'Novos Rumos', 'Casa Raio de Luz'];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <>
      <div
        className="relative z-20 flex bg-cover bg-center overflow-hidden bg-white"
        style={{ backgroundImage: "url('./background/tags-bg.png')" }}
      >
        <div className="container relative flex flex-row mx-auto py-8">
          <div className="bg-white rounded-3xl shadow-xl w-full overflow-hidden px-8 py-4">
            <div className="w-full">

              <div className="block my-8">
                <h1 className="font-medium text-2xl text-fuchsia-500 ml-4 mb-4">Casas de Acolhimento</h1>
                <div className="border-b-2 border-fuchsia-500"></div>
              </div>

              <div className="relative">

                <div className="my-6">
                  <button
                    onClick={openModal}
                    className="absolute right-0 top-0 bg-fuchsia-500 hover:bg-fuchsia-600 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl text-white rounded-lg px-3 py-3"
                  >
                    Adicionar
                  </button>
                  {isModalOpen && <Modal closeModal={closeModal} />}
                </div>

                <div className="flex justify-center pt-16">
                  <div className="w-2/3 relative">
                    <input
                      type="search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      onClick={() => setShowSuggestions(true)}
                      placeholder="Faça sua busca por casas de acolhimento..."
                      className="block w-full p-4 border rounded focus:outline-none"
                    />
                    {showSuggestions && (
                      <Suggestions
                        suggestions={suggestions}
                        onSuggestionClick={handleSuggestionClick}
                      />
                    )}
                    <button
                      type="submit"
                      className="absolute top-0 end-0 px-5 py-2.5 text-sm font-medium h-full text-white bg-fuchsia-500 rounded-e-lg border border-fuchsia-500 hover:bg-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-fuchsia-300"
                    >
                      <i className="mdi mdi-account-outline text-white text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                      </i>
                    </button>
                  </div>
                </div>

                <div className="flex justify-center py-8">
                  <div className="w-2/3 relative">
                    <ul className="font-light text-gray-900 bg-white border border-gray-200 rounded-lg">
                      <li className="w-full px-4 py-2 border-b border-gray-200">
                        <a href="https://comdica.recife.pe.gov.br/casa-de-acolhida-acalanto-governamental">Casa de Acolhimento Acalanto</a>
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200">
                        <a href="https://acolhimento.municipal.com.br/acolhimento-unidade-de-acolhimento-casa-da-madalena-recife-pe/">Unidade de Acolhimento Casa da Madalena</a>
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200">
                        <a href="https://comdica.recife.pe.gov.br/casa-de-acolhida-novos-rumos-governamental">Casa de Acolhimento Novos Rumos</a>
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200">
                        <a href="https://comdica.recife.pe.gov.br/casa-de-acolhida-raio-de-luz-governamental">Casa de Acolhimento Raio de Luz</a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Casas
