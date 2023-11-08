function Header() {
  return (
    <>
      <header class="bg-white drop-shadow-lg">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <img src="logotipo.png" alt="logo" class="h-8 w-auto"/>
            </a>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-fuchsia-500">Início</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-fuchsia-500">Acolhimento</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-fuchsia-500">Depoimentos</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-fuchsia-500">Sobre</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-fuchsia-500">Contato</a>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <button href="Login.jsx"
              class="text-sm font-semibold leading-6 text-fuchsia-500 px-7 py-1 mr-4 rounded-lg bg-transparent border-solid border-2 border-fuchsia-500
            hover:text-fuchsia-400 hover:border-fuchsia-400" >
              Entrar
            </button>
            <button href="#"
              class="text-sm font-semibold leading-6 text-fuchsia-500 px-2 py-1 ml-4 rounded-lg bg-yellow-200 border-solid border-2 border-fuchsia-500
              hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300" >
              Cadastre-se
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;