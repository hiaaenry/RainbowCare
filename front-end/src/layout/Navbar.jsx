/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
      <div className="center">
        <div className="menu">
          <div className="logo">
            <img src="cat.png" alt="Cat" />
          </div>

          <div className="logo-title">
            <h3>RainbowCare</h3>
          </div>

          <div className="item-menu">
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Depoimentos</a>
            <a href="#">Contatos</a>
          </div>

          <div className="item-menu-but">
            <a href="#">Login</a>
            <a href="#">Cadastro</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
