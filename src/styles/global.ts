import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    @media (max-width: 946px) {
      font-size: 56%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.content};
    font: 400 16px Nunito, sans-serif;
  }

  .container {
    width: 100%;
    max-width: 1032px;
    margin: 0 auto;
  }
  @media (max-width: 810px) {
      #agenda {
        /* display:none; */
      }
    }

`
