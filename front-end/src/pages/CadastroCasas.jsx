import Footer from "../layout/Footer";

function CadastroCasas() {
    return (
        <>
            <div className="relative z-20 flex bg-cover bg-center overflow-hidden bg-gray-50" style={{ backgroundImage: "url('./background/tags-bg.png')" }}>
                <div className='container relative flex px-6 py-16 mx-auto'>

                    <div className="bg-white text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
                        <div className="md:flex w-full">

                            <div className="bg-teal-200 hidden md:block w-1/2 py-10 px-10 bg-cover bg-center">
                                <img src="cadastro-casas-img.png" className="w-full h-auto" />
                            </div>

                            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">

                                <div className="flex justify-center mb-10 text-xl">
                                    <a href="/">
                                        <img src="logotipo.png" alt="logo" class="h-10 w-auto" />
                                    </a>
                                </div>

                                <div>
                                    <div className="flex -mx-3">
                                        <div className="w-1/2 px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">
                                                Nome da casa de acolhimento
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-account-outline text-gray-400 text-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                                                    placeholder="Digite o nome da casa"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">
                                                Número de telefone
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-account-outline text-gray-400 text-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                            <path d="M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 009.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 001.5-1.5v-1.148a1.5 1.5 0 00-1.175-1.465l-3.223-.716a1.5 1.5 0 00-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 01-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 001.052-1.767l-.716-3.223A1.5 1.5 0 004.648 2H3.5zM16.72 2.22a.75.75 0 111.06 1.06L14.56 6.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22z" />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <input
                                                    type="tel"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                                                    placeholder="+55 (xx) xxxx-xxxx"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">
                                                Endereço completo e número
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-email-outline text-gray-400 text-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                                                    placeholder="Digite o endereço e o número da casa"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">
                                                E-mail
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-email-outline text-gray-400 text-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <input
                                                    type="email"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                                                    placeholder="exemplo@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-12">
                                            <label for="" className="text-xs font-semibold px-1">
                                                Site ou rede social
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-email-outline text-gray-400 text-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                                                    placeholder="www.exemplo.com.br"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <button
                                                className="block w-full max-w-xs mx-auto bg-fuchsia-500 hover:bg-fuchsia-600 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl text-white rounded-lg px-3 py-3 font-semibold"
                                            >
                                                Finalizar Cadastro
                                            </button>
                                        </div>
                                    </div>
                                    <a href="/index" class="flex my-1 py-2 justify-center text-fuchsia-500 hover:text-fuchsia-600 font-semibold underline">
                                        Voltar
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default CadastroCasas;
