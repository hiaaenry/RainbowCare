import React from 'react'

function Banner() {
  return (
    <div id="Início">
      <div
        className="relative z-20 flex bg-cover bg-center overflow-hidden h-screen bg-gray-50"
        style={{ backgroundImage: "url('./background/home-banner-1.png')" }}
      >
        <div className="relative mt-8 ">
          <img
            src="name-rainbowcare-vector.svg"
            className="max-w-xs m-auto md:max-w-sm"
            alt=""
          />
          <p className="mt-2 mb-10 flex text-base text-center text-gray-900">
            A Plataforma de Acolhimento LGBT+ criada com o compromisso
            <br />
            inabalável de oferecer um espaço seguro, inclusivo e acolhedor para
            <br />
            todas as pessoas que fazem parte da comunidade e seus aliados.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-14">
          <a
            href="/cadastro"
            className="block w-full max-w-xs mx-auto bg-fuchsia-500 shadow-lg
                        hover:bg-pink-500 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl
                        text-white rounded-lg px-3 py-3 font-semibold text-center
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          >
            Quero participar
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
