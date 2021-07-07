import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const InputContainer = styled.div`
  width: 100%;

  padding: 1.2rem;

  border-radius: 0.8rem;

  .label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1.2rem;

    color: ${props => props.theme.colors.content};

    figure {
      display: flex;
      align-items: center;
      margin-right: 0.8rem;
    }
  }
`

interface InputElementDTO {
  // eslint-disable-next-line camelcase
  current_state: 'error' | 'success'
}

export const InputElement = styled.input<InputElementDTO>`
  width: 100%;
  outline: none;
  /* border: none; */
  border-radius: 0.8rem;
  height: 44px;
  padding: 0.6rem;
  background: #f3f3f3;

  transition: border ease 0.5s;

  border: ${props =>
    // eslint-disable-next-line eqeqeq
    props.current_state == 'success'
      ? 'solid 2px #80b918'
      : 'solid 2px #c33bda'};

  color: ${props => props.theme.colors.content};
  font-size: 1.4rem;
`

interface InputElementPhoneDTO {
  // eslint-disable-next-line camelcase
  current_state: 'error' | 'success'
}

export const InputElementPhone = styled(InputMask)<InputElementPhoneDTO>`
  width: 100%;
  outline: none;
  border-radius: 0.8rem;
  height: 44px;
  padding: 0.6rem;
  background: #f3f3f3;

  transition: border ease 0.5s;

  border: ${props =>
    // eslint-disable-next-line eqeqeq
    props.current_state == 'success'
      ? 'solid 2px #80b918'
      : 'solid 2px #c33bda'};

  color: ${props => props.theme.colors.content};
  font-size: 1.4rem;
`

interface DropDownDTO {
  // eslint-disable-next-line camelcase
  current_state: 'success' | 'error'
}

export const DropDown = styled.select<DropDownDTO>`
  width: 100%;
  outline: none;
  /* border: none; */
  border-radius: 0.8rem;
  height: 44px;
  padding: 0.6rem;
  background: #f3f3f3;

  color: ${props => props.theme.colors.content};

  transition: border ease 0.5s;

  border: ${props =>
    // eslint-disable-next-line eqeqeq
    props.current_state == 'success'
      ? 'solid 2px #80b918'
      : 'solid 2px #c33bda'};
`
