import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  0 {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 1.5rem);
  }

  100% {
    transform: translate(0, 0);
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 30;
  background-color: #1b56b4d0;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    border-radius: 1.6rem;
    width: 100%;
    max-width: 36rem;
    padding: 2.4rem;
    /* height: 100%; */
    background-color: #f7f7f7;
    position: relative;

    button.close {
      width: 5.2rem;
      height: 5.2rem;
      position: absolute;
      top: -2.4rem;
      right: -2.4rem;
      border-radius: 50%;
      border: none;
      background-color: #374151;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      cursor: pointer;

      figure {
        display: flex;
        align-items: center;
      }
    }

    span {
      display: block;
      text-align: center;
      font-size: 2rem;
      color: #333;
    }

    span.message-sending {
      margin-top: 2.4rem;
      color: #1b56b4d0;
    }

    input,
    select {
      width: 100%;
      height: 5rem;
      border: #dddddd 2px solid;
      border-radius: 0.8rem;
      padding: 0 0.8rem;
      font-size: 2rem;
      outline: none;
      color: #797979;
    }

    input:not(:first-child),
    select:not(:first-child) {
      margin-top: 1.2rem;
    }

    button.send {
      height: 5rem;
      width: 100%;
      margin-top: 2.4rem;
      border-radius: 0.8rem;
      color: #f7f7f7;
      font-size: 2rem;
      font-weight: bold;
      border: none;
      background-color: ${props => props.theme.colors.primary};
      outline: none;
      cursor: pointer;
    }

    .line-loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;

      .ball {
        width: 24px;
        height: 24px;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 50%;
      }

      .ball:nth-last-child(1) {
        animation: ${loadingAnimation} 0.6s 0.1s linear infinite;
      }

      .ball:nth-last-child(2) {
        animation: ${loadingAnimation} 0.6s 0.2s linear infinite;
      }

      .ball:nth-last-child(3) {
        animation: ${loadingAnimation} 0.6s 0.3s linear infinite;
      }

      .ball:not(:first-child) {
        margin-left: 8px;
      }
    }
  }
`
