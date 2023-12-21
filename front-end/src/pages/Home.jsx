import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Casas from '../components/Casas'
import Oportunidades from '../components/Oportunidades'
import Psicossocial from '../components/Psicossocial'

function Home() {
  return (
    <div className="App">
      <Header />
      <Casas />
      <Oportunidades />
      <Psicossocial />
      <Footer />
    </div>
  )
}

export default Home
