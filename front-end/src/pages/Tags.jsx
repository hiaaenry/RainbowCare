import React from 'react'
import { Navigate } from 'react-router-dom'
import Footer from '../layout/Footer'
import { useAuth } from '../components/AuthContext'

function Tags() {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <div
        className="relative z-20 flex bg-cover bg-center overflow-hidden bg-gray-50"
        style={{ backgroundImage: "url('./background/tags-bg.png')" }}
      >
        <div className="container relative flex py-14 mx-auto">
          <div className="bg-white text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden px-8 py-4">
            <div className="md:flex w-full">
              <div className="w-full py-10 px-5 md:px-10">
                <div className="block justify-center mb-14 text-xl">
                  <img src="logotipo.png" alt="logo" className="h-10 w-auto" />
                  <p className="inline-flex mt-4 justify-center text-base text-center text-gray-900">
                    Mantemos um compromisso inabalável em proporcionar a você um
                    ambiente seguro, inclusivo e acolhedor. Com o objetivo de
                    personalizar sua experiência, convidamos você a escolher 5
                    tags que melhor representem seus interesses:
                  </p>
                </div>

                <div className="grid grid-flow-row-dense grid-cols-5 gap-5">
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />

                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />

                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                  <input
                    type="button"
                    className="bg-lime-200 hover:bg-fuchsia-400 focus:bg-fuchsia-400 hover:shadow-xl focus:shadow-xl text-gray-900 rounded-lg px-3 py-3 justify-center font-semibold"
                    value="Digite"
                  />
                </div>

                <div className="flex mt-14">
                  <button
                    type="button"
                    className="block w-full max-w-xs mx-auto bg-fuchsia-500 hover:bg-fuchsia-600 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    Continuar
                  </button>
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

export default Tags
