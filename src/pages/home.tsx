import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import {
  Navbar,
  Header,
  Tratamentos,
  Doctor,
  Trataments,
  Agenda,
  ProvaSocial,
  Footer,
  WhatsappButton
} from '../styles/Home.styles'

import {
  Navbar as NavbarContent,
  Header as HeaderContent,
  Tratamentos as TratamentosContent,
  Doctor as DoctorContent,
  Trataments as ListaTatamentosContent,
  Agenda as AgendaContent
} from '../content/Home.content'

import Table from '../components/Table'
import Form from '../components/form'
import FooterItem from '../components/FooterItem'

// HOOKS
import { useIframe } from '../contexts/Iframe'

// ASSETS IMPORT
import Logo from '../assets/logo.png'
import DoctorImage from '../assets/doctor.webp'

import Foto1 from '../assets/foto1.webp'
import Foto2 from '../assets/foto2.webp'
import Foto3 from '../assets/foto3.webp'

import Slide4 from '../assets/slide-4.webp'
import Slide5 from '../assets/slide-5.webp'
import Slide6 from '../assets/slide-6.webp'
import Slide7 from '../assets/slide-7.webp'
import Slide8 from '../assets/slide-8.webp'
import Slide9 from '../assets/slide-9.webp'
import Slide10 from '../assets/slide-10.webp'

import whatsappIcon from '../assets/whatsapp.svg'
import Formula from '../components/Formula'

const Home: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const { switchIframe } = useIframe()

  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollPosition(this.scrollY)
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Renan Helmer</title>
      </Head>
      <main>
        <Navbar scrollPosition={scrollPosition}>
          <div className="container">
            <div className="logo-block">
              <h2>
                <a href="#">
                  <img src={Logo} alt="Dr. Renan" />
                </a>
              </h2>
            </div>
            <div className="menu-block">
              <ul>
                {NavbarContent.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url}>{item.label}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Navbar>

        <Header id="inicio">
          <div className="container">
            <div className="left">
              <h2>
                {HeaderContent.title.doctor} <br />{' '}
                {HeaderContent.title.content}{' '}
                <span>{HeaderContent.title.year}</span>
              </h2>

              <p>{HeaderContent.paragraph}</p>
            </div>
            <div className="right">
              <figure>
                <img src={DoctorImage} alt="Dr. Renan" />
              </figure>
            </div>
          </div>
        </Header>

        <Tratamentos id="tratamentos">
          <div className="container">
            <div className="advanced-title">
              <h2>{TratamentosContent.title.head}</h2>
              <p>{TratamentosContent.title.content}</p>
            </div>

            <div className="blocks">
              <div className="row">
                {TratamentosContent.content.map((item, index) => {
                  return (
                    <div className="block" key={index}>
                      <img src={item.image} alt={item.label} />
                      <span>{item.label}</span>
                      <p>{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Tratamentos>

        <Doctor id="sobre" bgFirtRow={DoctorContent.firstRow.image.file}>
          <div className="row">
            <div className="left"></div>
            <div className="right">
              <div className="title">
                <div className="figure">
                  <img src={DoctorContent.firstRow.title.emoji} alt="" />
                </div>

                <div className="text">
                  <h2>{DoctorContent.firstRow.title.DoctorName}</h2>
                  {/* <span>{DoctorContent.firstRow.title.especialization}</span>  */}
                </div>
              </div>

              <p className="description">{DoctorContent.firstRow.span}</p>

              <div className="figure-calc-container">
                <img src={DoctorContent.firstRow.emojisCalc} alt="" />
              </div>
            </div>
          </div>
        </Doctor>

        <Trataments bg={ListaTatamentosContent.background}>
          <div className="row">
            <div className="left">
              <div className="content">
                <div className="title">
                  <h2>{ListaTatamentosContent.title.label}</h2>
                  <figure>
                    <img
                      src={ListaTatamentosContent.title.image.file}
                      alt={ListaTatamentosContent.title.image.alt}
                    />
                  </figure>
                </div>

                <div className="items-list">
                  <ul>
                    {ListaTatamentosContent.tratamentsList.map(
                      (item, index) => {
                        return (
                          <li key={index}>
                            <figure>
                              <img
                                src={ListaTatamentosContent.iconList}
                                alt=""
                              />
                            </figure>
                            {item}
                          </li>
                        )
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </Trataments>
        <Formula />

        <Agenda id="agenda">
          <div className="container">
            <div className="title">
              <span className="bk">
                <h2>{AgendaContent.title.label}</h2>
              </span>
              <span>{AgendaContent.title.description}</span>
            </div>

            <div className="content">
              <Table agenda={AgendaContent.citys} />
            </div>
          </div>
        </Agenda>

        <ProvaSocial>
          <div className="container">
            <figure>
              <img src={Foto1} alt="" />
              <img src={Foto2} alt="" />
              <img src={Foto3} alt="" />

              <img className="to-hidden" src={Slide4} alt="" />
              <img className="to-hidden" src={Slide5} alt="" />
              <img className="to-hidden" src={Slide6} alt="" />
              <img className="to-hidden" src={Slide7} alt="" />
              <img className="to-hidden" src={Slide8} alt="" />
              <img className="to-hidden" src={Slide9} alt="" />
              <img className="to-hidden" src={Slide10} alt="" />
            </figure>
          </div>
        </ProvaSocial>

        <Form sectionId="formulario" listOfCitys={AgendaContent.citys} />

        <Footer>
          <div className="container">
            <FooterItem type="location" />
            <FooterItem
              type="email"
              href="mailto:atendimento@renanhelmer.com.br"
            />
            <FooterItem type="phone" href="tel:999908000" />
            <div className="social-media">
              <a href="https://www.facebook.com/drrenanhelmer/" target="blank">
                <FooterItem type="facebook" />
              </a>
              <a href="https://www.instagram.com/drrenanhelmer/" target="blank">
                <FooterItem type="instagram" />
              </a>
            </div>
          </div>
        </Footer>

        <WhatsappButton onClick={() => switchIframe()}>
          <figure>
            <img src={whatsappIcon} alt="WhatsApp" />
          </figure>
        </WhatsappButton>
      </main>
    </div>
  )
}

export default Home
