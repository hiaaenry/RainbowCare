import React, { useState } from 'react';

function Psicossocial() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
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
                                <h1 className="font-medium text-2xl text-fuchsia-500 ml-4 mb-4">Psicoterapia & Centros de Atenção Psicossocial: CAPS — Ministério da Saúde</h1>
                                <div className="border-b-2 border-fuchsia-500"></div>
                            </div>

                            <div className="relative">
                                <div className="flex justify-center pt-16">
                                    <div className="w-2/3 relative">
                                        <input
                                            type="search"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                            placeholder="Faça sua busca..."
                                            className="block w-full p-4 border rounded focus:outline-none"
                                        />
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
                                                <a href="https://www.psymeetsocial.com/">
                                                    Psymeet Terapia Online Social
                                                </a>
                                            </li>
                                            <li className="w-full px-4 py-2 border-b border-gray-200">
                                                <a href="https://cliniguia.com/unidades/paulista-pe/caps-ad-eliane-maria-jose-de-aguiar-5482747/">
                                                    CAPS AD Eliane Maria José Aguiar
                                                </a>
                                            </li>
                                            <li className="w-full px-4 py-2 border-b border-gray-200">
                                                <a href="https://consultalgbt.com.br/?gclid=CjwKCAiAvoqsBhB9EiwA9XTWGRqVnjveSG-CXJwxf7bUWnSwMn_mu_2sDnyLRPPdKYrGGLwuHoFvyxoC7HYQAvD_BwE">
                                                    Clínica LGBT+ Terapia Online Social
                                                </a>
                                            </li>
                                            <li className="w-full px-4 py-2 border-b border-gray-200">
                                                <a href="https://www.google.com/maps?s=web&sca_esv=592696311&lqi=CgtDQVBTIHJlY2lmZUiW7Mvg5YCAgAhaExAAGAAYASILY2FwcyByZWNpZmWSARVtZW50YWxfaGVhbHRoX3NlcnZpY2WqAT4QASoIIgRjYXBzKAwyHxABIhsQOFIPwqeNDRQAP7p8gKlKeDyFxa2bZt3KE5IyDxACIgtjYXBzIHJlY2lmZQ&vet=12ahUKEwj11v-jvZ-DAxX2rpUCHbrwAykQ1YkKegQIFxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=Ke-d-kRSGKsHMc-0HN5RtHBx&daddr=R.+Visc.+de+Taunay,+145+-+Casa+Amarela,+Recife+-+PE,+52070-220">
                                                    CAPS Esperança
                                                </a>
                                            </li>
                                            <li className="w-full px-4 py-2 border-b border-gray-200">
                                                <a href="https://www.google.com/maps/place/UNIDADE+CAP+PAULISTA/@-7.9157485,-34.8219427,15z/data=!4m2!3m1!1s0x0:0xe97b42c7e8e62c18?sa=X&ved=2ahUKEwjCm_HuvJ-DAxWvrpUCHd0aAI4Q_BJ6BAhMEAA">
                                                    Unidade CAPS Paulista
                                                </a>
                                            </li>
                                            <li className="w-full px-4 py-2 border-b border-gray-200">
                                                <a href="https://ubs.med.br/caps-saber-viver-6468853/">
                                                    CAPS Saber Vivier Igarassu</a>
                                            </li>
                                            <li className="w-full px-4 py-2 border-b border-gray-200">
                                                <a href="https://www.google.com/maps/place/CAPS+Tereza+Noronha/@-7.9251978,-34.8234946,15z/data=!4m2!3m1!1s0x0:0x467ef8af695109f5?sa=X&ved=2ahUKEwjM1KuRvZ-DAxUwrJUCHSbLBNYQ_BJ6BAgKEAA">
                                                    CAPS Tereza Noronha
                                                </a>
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
    );
}

export default Psicossocial;
