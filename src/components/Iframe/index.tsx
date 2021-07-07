import React, { useState } from 'react'
import InputMask from 'react-input-mask'

import { Container } from './styles'
import { useIframe } from '../../contexts/Iframe'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Agenda as AgendaContent } from '../../content/Home.content'

const Iframe: React.FC = () => {
  const [sending, setSending] = useState<boolean>(false)
  const { switchIframe } = useIframe()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [city, setCity] = useState<string>('')

  async function sendLeadAndRedirect() {
    if (name.length > 0) {
      if (email.includes('@')) {
        if (!phone.includes('_') && phone.length > 0) {
          setSending(true)
          toast.success('Solicitação enviada com sucesso!', {
            duration: 8000,
            style: {
              width: '600px'
            }
          })

          await axios.post('https://api.solite.tk/leads', {
            name,
            phone,
            email,
            client_fk: 'c164fcba-866a-4a32-8089-a5ee3ae1cbce'
          })
          await axios // enviando dados para leadWhats
            .post('/api/leadWhats', { name, email, city, phone })
            .then(() => {
              'deu certo'
            })
            .catch(() => {
              'deu erro'
            })
          // window.location.href = `https://api.whatsapp.com/send?phone=5569999908000&text=${encodeURIComponent(
          //   `Olá! Eu sou o *${name}*. Tenho interrese em marcar uma consulta.`
          // )}`
        } else {
          alert('Verifique o campo "Telefone"')
        }
      } else {
        alert('Verifique o campo "Email"')
      }
    } else {
      alert('Verifique o campo "Nome"')
    }
  }

  return (
    <Container>
      <div className="box">
        <button className="close" onClick={() => switchIframe()}>
          <figure>
            <svg
              width="36"
              height="36"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5761 19.5456L18.0305 14.9999L22.5761 10.4542C23.1339 9.89644 23.1339 8.99173 22.5761 8.43393L21.566 7.42378C21.0082 6.86599 20.1035 6.86599 19.5457 7.42378L15 11.9695L10.4543 7.42378C9.89652 6.86599 8.9918 6.86599 8.43401 7.42378L7.42386 8.43393C6.86606 8.99173 6.86606 9.89644 7.42386 10.4542L11.9695 14.9999L7.42386 19.5456C6.86606 20.1034 6.86606 21.0081 7.42386 21.5659L8.43401 22.5761C8.9918 23.1339 9.89652 23.1339 10.4543 22.5761L15 18.0304L19.5457 22.5761C20.1035 23.1339 21.0082 23.1339 21.566 22.5761L22.5761 21.5659C23.1339 21.0081 23.1339 20.1034 22.5761 19.5456Z"
                fill="#EEEEEE"
              />
            </svg>
          </figure>
        </button>

        <span>Preencha este formulário.</span>

        {!sending && (
          <>
            <input
              type="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Seu nome"
            />
            <input
              type="mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Seu email"
            />
            <InputMask
              mask="(99) 9 9999-9999"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Seu telefone"
            />
            <select
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade onde reside"
            >
              <option value=""> Selecione uma cidade </option>
              {AgendaContent.citys.map((item, index) => {
                return (
                  <option key={index} value={item.city}>
                    {item.city}
                  </option>
                )
              })}
            </select>

            <button className="send" onClick={() => sendLeadAndRedirect()}>
              Enviar
            </button>
            <Toaster position="top-right" reverseOrder={false} />
          </>
        )}

        {sending && (
          <>
            <span className="message-sending">Dados enviados.</span>

            {/* <div className="line-loading">
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
            </div> */}
          </>
        )}
      </div>
    </Container>
  )
}

export default Iframe
