import styled from 'styled-components'
export const FormContainer = styled.div`
  width: 100%;

  height: 100vh;
  background: #111111 !important;

  padding: 2.4rem;
  position: relative;

  @media (max-width: 1400px) {
    height: 100%;
  }

  .sub-container {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 85rem;

    @media (max-width: 1400px) {
      display: block;
      margin: 0 auto;
      padding-left: 0;
    }

    @media (min-width: 1600px) {
      display: flex;
      justify-content: center;
    }

    .content-image {
      position: absolute;
      top: -5rem;
      left: -5rem;

      img {
        width: 90rem;
      }

      @media (min-width: 1600px) {
        img {
          top: -2.7rem;
          left: 3.2rem;
          width: 100%;
        }
      }

      @media (max-width: 850px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 46rem;
        }
      }

      @media (max-width: 1400px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 60rem;
        }
      }

      @media (max-width: 420px) {
        left: -40px;
        img {
          width: 45rem !important;
        }
      }

      @media (max-width: 540px) {
        left: -40px;
        img {
          width: 55rem;
        }
      }
    }
  }

  .inner-content {
    width: 100%;
    max-height: 100%;
    max-width: 513px;
    min-height: 516px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1400px) {
      display: block;
      margin: 50rem auto 0;
    }

    @media (max-width: 420px) {
      display: block;
      margin-top: 35rem !important;
    }

    @media (max-width: 540px) {
      display: block;
      margin-top: 45rem;
    }

    /* margin: 0 auto; */

    background: #fafafa;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);

    border-radius: 1.2rem;

    padding: 1.6rem;

    h2 {
      text-align: center;
      font-size: 3.2rem;
      background: -webkit-linear-gradient(#c33bda, #5990f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .container-button {
      padding: 1.2rem;
      width: 100%;
    }

    .request-status {
      display: block;
      font-size: 3.2rem;
      width: fit-content;
      margin: auto;
      margin-top: 3.2rem;
    }
  }
`

interface ButtonInterface {
  state: 'active' | 'blocked'
}

export const Button = styled.button<ButtonInterface>`
  width: 100%;
  height: 6rem;
  border-radius: 0.8rem;
  border: none;
  /* background: ${props =>
    props.state === 'active' ? '#1A9BCD' : '#e63946'}; */
  background: ${props => props.theme.colors.gradient};
  color: #fafafa;
  font-weight: bold;
  font-size: 2.4rem;
  font-family: Nunito, sans-serif;
  outline: none;
  cursor: pointer;
`
