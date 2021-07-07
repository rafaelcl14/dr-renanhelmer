import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { Container } from './styles'

interface FooterItemInterface {
  type: 'location' | 'email' | 'phone' | 'facebook' | 'instagram'
  href?: string
}

const FooterItem: React.FC<FooterItemInterface> = ({ type, href }) => {
  return (
    <Container>
      <figure>
        {type === 'location' && (
          <FontAwesomeIcon icon="map-marker-alt" size="lg" />
        )}

        {type === 'email' && <FontAwesomeIcon icon="envelope" size="lg" />}

        {type === 'phone' && <FontAwesomeIcon icon="phone-alt" size="lg" />}

        {type === 'facebook' && <FontAwesomeIcon icon={faFacebook} size="lg" />}

        {type === 'instagram' && (
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        )}
      </figure>
      <div className="info">
        <span className="title">
          {type === 'location' && 'Localização'}
          {type === 'email' && 'Críticas, Sugestões ou demais Dúvidas:'}
          {type === 'phone' && 'Contato'}
        </span>

        <a className="description" href={href}>
          {type === 'location' &&
            ' Av. Transcontinental, 1196, Casa Preta. Espaço Saúde. 76900-093 Ji-Paraná, RO'}
          {type === 'email' && 'atendimento@renanhelmer.com.br'}
          {type === 'phone' && '(69) 9 9990-8000'}
        </a>
      </div>
    </Container>
  )
}

export default FooterItem
