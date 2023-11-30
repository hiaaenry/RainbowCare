import Footer from "../layout/Footer";

function Cadastro() {
    return (
        <>
            <div className="relative z-20 flex bg-cover bg-center overflow-hidden bg-pink-300" style={{ backgroundImage: "url('./background/home-banner-4.png')" }}>
                <div className='container relative flex px-6 py-16 mx-auto'>

                    <div className="relative z-20 flex flex-col lg:w-2/5">
                        <div class="w-full md:max-w-md mt-6">
                            <div class="card rounded-lg px-6 py-10 mb-6 bg-white shadow-lg ">

                                <form action="#">

                                    <div class="flex justify-center mb-10 text-xl text-center font-semibold text-gray-300">
                                        <a href="#" class="-m-1.5 p-1.5">
                                            <img src="logotipo.png" alt="logo" class="h-8 w-auto" />
                                        </a>
                                    </div>

                                    <div class="flex flex-col">
                                        <input
                                            type="text"
                                            class="rounded-lg px-4 py-1 mx-4 mb-2 bg-white border border-fuchsia-500 text-gray-700 placeholder-gray-400 font-semibold focus:bg-white focus:outline-none"
                                            placeholder="Nome"
                                        />
                                        <input
                                            type="text"
                                            class="rounded-lg px-4 py-1 mx-4 mb-2 bg-white border border-fuchsia-500 text-gray-700 placeholder-gray-400 font-semibold focus:bg-white focus:outline-none"
                                            placeholder="Sobrenome"
                                        />
                                        <input
                                            type="text"
                                            class="rounded-lg px-4 py-1 mx-4 mb-2 bg-white border border-fuchsia-500 text-gray-700 placeholder-gray-400 font-semibold focus:bg-white focus:outline-none"
                                            placeholder="Digite o e-mail"
                                        />
                                        <input
                                            type="password"
                                            class="rounded-lg px-4 py-1 mx-4 mb-2 bg-white border border-fuchsia-500 text-gray-700 placeholder-gray-400 font-semibold focus:bg-white focus:outline-none"
                                            placeholder="Crie uma senha"
                                        />
                                        <input
                                            type="password"
                                            class="rounded-lg px-4 py-1 mx-4 mb-5 bg-white border border-fuchsia-500 text-gray-700 placeholder-gray-400 font-semibold focus:bg-white focus:outline-none"
                                            placeholder="Repita a senha"
                                        />
                                    </div>
                                    <div class="flex flex-col">
                                        <button
                                            class="mt-1 m-4 px-2 py-1 rounded-lg font-semibold text-fuchsia-500 bg-yellow-200 border-solid border-2 border-fuchsia-500 hover:shadow-lg"
                                        >
                                            Realizar Cadastro
                                        </button>
                                        <a href="/login" class="my-1 py-2 flex justify-start text-fuchsia-500 underline">
                                            Já possui cadastro?
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
    )
}

export default Cadastro;
