function Header() {
  return (
    <header class="bg-white drop-shadow-lg">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="logotipo.png" alt="" />
          </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Início</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Acolhimento</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Depoimentos</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Sobre</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Contato</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <button href="#" class="text-sm font-semibold leading-6 text-gray-900 px-6 py-1 rounded-lg bg-yellow-200 border-solid border-2 border-fuchsia-500 hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Entrar</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;