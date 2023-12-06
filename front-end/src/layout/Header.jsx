import { Link } from 'react-router-dom';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';

import React, { useState, useEffect } from 'react';

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className={`bg-white drop-shadow-lg ${isScrolled ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img src="logotipo.png" alt="logo" class="h-8 w-auto" />
          </a>
        </div>

        <div class="hidden lg:flex lg:gap-x-12">
          <button onClick={scrollToTop} class="text-sm leading-6 text-gray-900 hover:text-fuchsia-500">
            Início
          </button>

          <LinkScroll to='#' smooth={true} offset={50} class="text-sm leading-6 text-gray-900 hover:text-fuchsia-500">
            Acolhimento
          </LinkScroll>

          <a href="#" class="text-sm leading-6 text-gray-900 hover:text-fuchsia-500">
            Depoimentos
          </a>

          <LinkScroll to='sobre' smooth={true} offset={-100} duration={800} class="text-sm leading-6 text-gray-900 hover:text-fuchsia-500">
            Sobre
          </LinkScroll>

          <LinkScroll to='footer' smooth={true} offset={-100} duration={800} class="text-sm leading-6 text-gray-900 hover:text-fuchsia-500">
            Contato
          </LinkScroll>
        </div>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <button class="text-sm leading-6 px-7 py-1 mr-4 rounded-full bg-transparent border-solid border-2 border-fuchsia-500 text-fuchsia-500 hover:text-gray-900 hover:border-gray-900" >
            <Link to={'/login'}>
              Entrar
            </Link>
          </button>
          <button class="text-sm leading-6 px-2 py-1 ml-4 rounded-full text-white bg-fuchsia-500 hover:bg-fuchsia-600 hover:shadow-lg" >
            <Link to={'/cadastro'}>
              Cadastre-se
            </Link>
          </button>
        </div>

      </nav>
    </header>
  )
}

export default Header;
