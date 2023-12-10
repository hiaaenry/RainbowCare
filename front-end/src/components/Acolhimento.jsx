import React from 'react'

function Acolhimento() {
  return (
    <div className="home" id="sobre">
      <div className="center">
        <div className="sobre-page">
          <p>
            Nossa plataforma nasceu da paixão e dedicação de indivíduos que
            acreditam na importância de criar uma comunidade mais inclusiva e
            respeitosa. Desde o nosso início, crescemos e evoluímos graças ao
            apoio e à colaboração da comunidade LGBT+. Aqui oferecemos uma
            variedade de recursos e oportunidades para fortalecer nossa
            comunidade:
          </p>
          <div className="sobre1-1">
            <img src="sobre1-1.png" alt="" />
          </div>
          <div className="sobre1-2">
            <img src="sobre1-2.png" alt="" />
          </div>

          <div className="item-sobre">
            <ul>
              <li>
                {' '}
                <img src="ico-1.png" alt="" /> Casas de Acolhimento
              </li>
              <li>
                {' '}
                <img src="ico-3.png" alt="" /> Oportunidades de Desenvolvimento
              </li>
              <li>
                {' '}
                <img src="ico-5.png" alt="" /> Conexão com Centros de Saúde
                Mental
              </li>
              <li>
                {' '}
                <img src="ico-1.png" alt="" /> Conexão com Coletivos
              </li>
              <li>
                {' '}
                <img src="ico-4.png" alt="" /> Doações e Apoio à Comunidade
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acolhimento
