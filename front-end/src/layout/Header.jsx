/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <header
      className={`bg-white drop-shadow-xl ${
        isScrolled ? 'fixed top-0 left-0 w-full z-50' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8">
        <div className="flex flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img src="logotipo.png" alt="logo" className="h-8 w-auto" />
          </a>
        </div>

        <div className="flex gap-x-12">
          <button
            type="button"
            onClick={scrollToTop}
            className="text-sm leading-6 text-gray-900 hover:text-fuchsia-500"
          >
            Início
          </button>

          <LinkScroll
            to="#"
            smooth
            offset={50}
            class="text-sm leading-6 text-gray-900 hover:text-fuchsia-500"
          >
            Acolhimento
          </LinkScroll>

          <a
            href="/"
            className="text-sm leading-6 text-gray-900 hover:text-fuchsia-500"
          >
            Depoimentos
          </a>

          <LinkScroll
            to="sobre"
            smooth
            offset={-100}
            duration={800}
            class="text-sm leading-6 text-gray-900 hover:text-fuchsia-500"
          >
            Sobre
          </LinkScroll>

          <LinkScroll
            to="footer"
            smooth
            offset={-100}
            duration={800}
            class="text-sm leading-6 text-gray-900 hover:text-fuchsia-500"
          >
            Contato
          </LinkScroll>
        </div>

        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="text-sm leading-6 px-7 py-1 mr-4 rounded-full bg-transparent border-solid border-2 border-fuchsia-500 text-fuchsia-500 hover:text-gray-900 hover:border-gray-900"
          >
            <Link to="/login">Entrar</Link>
          </button>
          <button
            type="button"
            className="text-sm leading-6 px-2 py-1 ml-4 rounded-full text-white bg-fuchsia-500 hover:bg-fuchsia-600 hover:shadow-lg"
          >
            <Link to="/cadastro">Cadastre-se</Link>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
