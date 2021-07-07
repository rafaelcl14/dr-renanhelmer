import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 2.4rem;

  .head-form {
    width: 100%;
    max-width: 1032px;
    margin: 0 auto;
    margin-bottom: 3.2rem;

    h2 {
      text-align: center;
      font-size: 3.2rem;
      color: ${props => props.theme.colors.primary};
    }

    p {
      text-align: center;
    }
  }

  .inner-content {
    width: 100%;
    height: 100%;
    max-width: 513px;
    min-height: 516px;

    margin: 0 auto;

    background: #fafafa;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);

    border-radius: 1.2rem;

    padding: 1.6rem;

    .container-button {
      padding: 1.2rem;
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
  height: 7rem;
  border-radius: 0.8rem;
  border: none;
  background: ${props => (props.state === 'active' ? '#4caf50' : '#04a6e1')};
  color: #fafafa;
  font-weight: bold;
  font-size: 2.4rem;
  font-family: Nunito, sans-serif;
  outline: none;
  cursor: pointer;
`
