import styled from 'styled-components'
export const Container = styled.div`
  margin-top: 5rem;
  .containerImg {
    width: 100%;
    height: 800px;
    background: black;
    background-image: url('./formulaemagrecimento.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 75%;
    cursor: pointer;
  }

  .textInfo {
    margin-top: 2rem;
    text-align: center;
    font-family: Nunito, sans-serif;
    font-weight: 400;
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    //celular
    .containerImg {
      height: 250px;
    }
    .textInfo {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 780px) {
    //tablete
    .containerImg {
      height: 250px;
    }
  }
`
