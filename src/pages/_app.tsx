import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import Iframe from '../components/Iframe'

import IframeProvider, { useIframe } from '../contexts/Iframe'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const ContollerIframe: React.FC = () => {
  const { visibility } = useIframe()

  return <>{visibility && <Iframe />}</>
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <IframeProvider>
        <ContollerIframe />
        <Component {...pageProps} />
      </IframeProvider>
    </ThemeProvider>
  )
}

export default MyApp
