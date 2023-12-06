import Footer from "../layout/Footer";

function CadastroUsuario() {
    return (
        <>
            <div className="relative z-20 flex bg-cover bg-center overflow-hidden bg-gray-50" style={{ backgroundImage: "url('./background/register-bg.png')" }}>
                <div className='container relative flex px-6 py-16 mx-auto'>

                    <div className="bg-white text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
                        <div className="md:flex w-full">

                            <div className="bg-sky-400 hidden md:block w-1/2 py-10 px-10 bg-cover bg-center">
                                <img src="login-img.png" alt="Login Image" className="w-full h-auto" />
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
                                                Nome
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-account-outline text-gray-400 text-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                                                    placeholder="Digite seu nome"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">
                                                Sobrenome
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-account-outline text-gray-400 text-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                                                    placeholder="Digite seu sobrenome"
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
                                                    placeholder="nome@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-1/2 px-3 mb-12">
                                            <label for="" className="text-xs font-semibold px-1">
                                                Crie uma senha
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-account-outline text-gray-400 text-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <input
                                                    type="password"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                                                    placeholder="************"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-3 mb-12">
                                            <label for="" className="text-xs font-semibold px-1">
                                                Repita a senha
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-account-outline text-gray-400 text-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                                                        </svg>
                                                    </i>
                                                </div>
                                                <input
                                                    type="password"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                                                    placeholder="************"
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
                                    <a href="/login" class="flex my-1 py-2 justify-center text-fuchsia-500 hover:text-fuchsia-600 font-semibold underline">
                                        Já possui cadastro?
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

export default CadastroUsuario;
