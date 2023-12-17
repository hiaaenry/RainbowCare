import Header from '../layout/Header';
import Footer from '../layout/Footer';

function Perfil() {
    return (
        <>
            <Header />
            <div className="relative z-20 flex bg-cover bg-center overflow-hidden bg-gray-100">
                <div className="container relative flex py-14 mx-auto">

                    <div className="bg-white rounded-3xl shadow-xl w-full overflow-hidden px-8 py-4">
                        <div className="md:flex w-full">

                            <div className="w-full py-10 px-5 md:px-10">
                                <div className="block mb-14">
                                    <h1 className="font-medium text-2xl text-fuchsia-500 ml-4 mb-4">Olá, '$Nome'! </h1>
                                    <div className="border-b-2 border-fuchsia-500"></div>
                                </div>
                                <div className="block m-4">
                                    <h1 className="font-medium text-2xl text-gray-900">Minhas tags</h1>
                                </div>
                                <div className="block text-xl">
                                    <ul class="font-light text-gray-900 bg-white border border-gray-200 rounded-lg">
                                        <li class="flex justify-between w-full px-4 py-2 border-b border-gray-200">
                                            Item 1
                                            <button className="px-1 py-1 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl">
                                                <i className="mdi mdi-account-outline text-white text-base">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </i>
                                            </button>
                                        </li>
                                        <li class="flex justify-between w-full px-4 py-2 border-b border-gray-200">
                                            Item 2
                                            <button className="px-1 py-1 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl">
                                                <i className="mdi mdi-account-outline text-white text-base">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </i>
                                            </button>
                                        </li>
                                        <li class="flex justify-between w-full px-4 py-2 border-b border-gray-200">
                                            Item 3
                                            <button className="px-1 py-1 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl">
                                                <i className="mdi mdi-account-outline text-white text-base">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </i>
                                            </button>
                                        </li>
                                        <li class="flex justify-between w-full px-4 py-2 border-b border-gray-200">
                                            Item 4
                                            <button className="px-1 py-1 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl">
                                                <i className="mdi mdi-account-outline text-white text-base">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </i>
                                            </button>
                                        </li>

                                    </ul>
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

export default Perfil;