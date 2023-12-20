/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"
import Footer from "../layout/Footer"
import { useAuth } from "../components/AuthContext"

function CadastroCasas() {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to="/login" />
  }

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [street, setStreet] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [houseNumber, setHouseNumber] = useState("")
  const [state, setState] = useState("")
  const [site, setSite] = useState("")
  const [socialNetwork, setSocialNetwork] = useState("")
  // const [tags, setTags] = useState([])

  const doRegister = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:3333/foster-home",
        {
          name,
          tags: ["JOB"],
          description,
          neighborhood,
          phone_number: phoneNumber,
          site,
          social_network: socialNetwork,
          state,
          street,
          house_number: houseNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      console.log("Like:", response.data)
    } catch (error) {
      console.error("Lascou:", error.response)
    }
  }
  return (
    <>
      <div
        className="relative z-20 flex bg-cover bg-center overflow-hidden bg-gray-50"
        style={{ backgroundImage: "url('./background/tags-bg.png')" }}
      >
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="bg-white text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
            <div className="md:flex w-full">
              <div className="bg-teal-200 hidden md:block w-1/2 py-10 px-10 bg-cover bg-center">
                <img
                  src="cadastro-casas-img.png"
                  className="w-full h-auto"
                  alt=""
                />
              </div>

              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="flex justify-center mb-10 text-xl">
                  <a href="/">
                    <img
                      src="logotipo.png"
                      alt="logo"
                      className="h-10 w-auto"
                    />
                  </a>
                </div>

                <div>
                  <form onSubmit={doRegister}>
                    <div className="flex -mx-3">
                      <div className="w-1/2 px-3 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Nome da casa de acolhimento
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                              >
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                              </svg>
                            </i>
                          </div>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                            placeholder="Digite o nome da casa"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Número de telefone
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path d="M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 009.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 001.5-1.5v-1.148a1.5 1.5 0 00-1.175-1.465l-3.223-.716a1.5 1.5 0 00-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 01-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 001.052-1.767l-.716-3.223A1.5 1.5 0 004.648 2H3.5zM16.72 2.22a.75.75 0 111.06 1.06L14.56 6.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22z" />
                              </svg>
                            </i>
                          </div>
                          <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                            placeholder="+55 (xx) xxxx-xxxx"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Descrição
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-description text-gray-400 text-lg" />
                          </div>
                          <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full h-20 -ml-10 pl-10 pr-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300 resize-none"
                            placeholder="Digite a descrição"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex -mx-3">
                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Rua
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-map-marker-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="text"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                            placeholder="Digite o nome da rua"
                          />
                        </div>
                      </div>

                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Número da casa
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-home-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="text"
                            value={houseNumber}
                            onChange={(e) => setHouseNumber(e.target.value)}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                            placeholder="Digite o número da casa"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex -mx-3">
                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Bairro
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-map-marker-multiple-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="text"
                            value={neighborhood}
                            onChange={(e) => setNeighborhood(e.target.value)}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                            placeholder="Digite o nome do bairro"
                          />
                        </div>
                      </div>

                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Estado
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-map text-gray-400 text-lg" />
                          </div>
                          <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                            placeholder="Digite o estado"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex -mx-3">
                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Rede Social
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-social-instagram text-gray-400 text-lg" />
                          </div>
                          <input
                            type="text"
                            value={socialNetwork}
                            onChange={(e) => setSocialNetwork(e.target.value)}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                            placeholder="Digite o nome da rede social"
                          />
                        </div>
                      </div>

                      <div className="w-1/2 px-3 mb-5">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Site
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                                />
                              </svg>
                            </i>
                          </div>
                          <input
                            type="text"
                            value={site}
                            onChange={(e) => setSite(e.target.value)}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-300"
                            placeholder="www.exemplo.com.br"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-12">
                        <button
                          type="submit"
                          className="block w-full max-w-xs mx-auto bg-fuchsia-500 hover:bg-fuchsia-600 focus:bg-fuchsia-600 hover:shadow-xl focus:shadow-xl text-white rounded-lg px-3 py-3 font-semibold"
                        >
                          Finalizar Cadastro
                        </button>
                      </div>
                    </div>

                    <a
                      href="/index"
                      className="flex my-1 py-2 justify-center text-fuchsia-500 hover:text-fuchsia-600 font-semibold underline"
                    >
                      Voltar
                    </a>
                  </form>
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

export default CadastroCasas
