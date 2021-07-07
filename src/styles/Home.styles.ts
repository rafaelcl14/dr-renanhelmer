import styled, { keyframes } from 'styled-components'

export const Navbar = styled.div<{ scrollPosition: number }>`
  width: 100%;
  height: 124px;

  position: fixed;

  background: ${props =>
    props.scrollPosition === 0 ? 'none' : props.theme.colors.primary};

  transition: background ease 0.5s;

  box-shadow: ${props =>
    props.scrollPosition === 0 ? 'none' : '0 0 10px rgba(27 ,77 , 177, 0.5)'};

  @media (max-width: 675px) {
    height: 80px;
  }

  .container {
    width: 100%;
    max-width: 1032px;
    margin: 0 auto;
    padding: 12px;

    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    justify-content: center;

    /* &:first-child {
      justify-content: flex-start;
    } */

    @media (max-width: 675px) {
      justify-content: center;
    }

    .logo-block {
      width: fit-content;
      margin-right: 3.8rem;

      @media (max-width: 675px) {
        margin-right: 0;
      }

      h2 {
        img {
          width: 13.8rem;

          @media (max-width: 675px) {
            width: 8rem;
          }
        }
      }
    }

    .menu-block {
      width: fit-content;

      ul {
        list-style: none;

        @media (max-width: 675px) {
          display: none;
        }

        li {
          display: inline-block;
          list-style: none;
          margin-left: 24px;

          a {
            color: ${props => props.theme.colors.whiteContent};
            text-decoration: none;
            font-size: 2.2rem;
            font-weight: bold;
          }
        }

        li:first-child {
          margin-left: 0;
        }
      }
    }
  }
`

export const Header = styled.div`
  width: 100%;

  background-image: url('./bg-header.webp');
  background-size: cover;

  padding-top: 14.4rem;

  .container {
    width: 100%;
    max-width: 1032px;
    margin: 0 auto;
    padding: 0 2.4rem;

    display: flex;

    width: 100%;

    .left {
      width: 50%;

      padding-top: 6.2rem;

      @media (max-width: 946px) {
        width: 100%;
      }

      h2 {
        font-size: 5rem;
        line-height: 6.6rem;
        display: block;
        color: ${props => props.theme.colors.whiteContent};

        span {
          padding: 0 1.2rem;

          border: solid 4px ${props => props.theme.colors.whiteContent};
          border-radius: 4rem;
          font-size: 4.6rem;
        }
      }

      p {
        font-size: 2.2rem;
        line-height: 2.8rem;

        margin-top: 4.6rem;

        color: ${props => props.theme.colors.whiteContent};
      }
    }

    .right {
      width: 50%;

      @media (max-width: 946px) {
        width: 100%;
      }

      img {
        width: 100%;
        max-width: 464px;
      }

      @media (max-width: 946px) {
        max-width: 100%;

        display: flex;
        justify-content: center;

        padding-top: 3.2rem;
      }
    }

    @media (max-width: 946px) {
      flex-direction: column;
    }
  }
`

export const Tratamentos = styled.section`
  padding: 9rem 2.4rem;

  .container {
    .advanced-title {
      h2 {
        text-align: center;
        font-size: 4rem;
      }

      p {
        text-align: center;
        font-size: 2.4rem;
      }
    }

    .blocks {
      margin-top: 3.2rem;

      .row {
        /* display: flex;
        justify-content: space-between; */
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr; */
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

        .block {
          width: 100%;
          max-width: 214px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          margin: 0 auto;

          img {
            width: 9.3rem;
            margin-bottom: 1.7rem;
          }

          span {
            text-align: center;
            font-size: 2.8rem;
            font-weight: bold;
            display: block;

            margin-bottom: 0.6rem;
          }

          p {
            text-align: center;
          }
        }
      }
    }
  }
`

export const Doctor = styled.section<{ bgFirtRow: string }>`
  .row {
    height: 100%;
    min-height: 458px;
    display: flex;
    flex-direction: row;

    @media (max-width: 946px) {
      flex-direction: column;
    }

    .left {
      width: 50%;
      background-image: url(${props => props.bgFirtRow});
      background-repeat: no-repeat;
      background-size: cover;

      @media (max-width: 946px) {
        display: none;
      }
    }

    .right {
      width: 50%;

      padding: 10rem 7.4rem;

      @media (max-width: 946px) {
        width: 100%;
        padding: 10rem 2.4rem;
      }

      .title {
        display: flex;
        .figure {
          img {
            width: 5rem;
          }
        }

        .text {
          margin-left: 0.8rem;

          h2 {
            color: ${props => props.theme.colors.primary};
            font-size: 3.2rem;
            line-height: 3.2rem;
          }

          span {
            font-weight: bold;
            line-height: 1.4rem;
            font-size: 1.4rem;
          }
        }
      }

      .description {
        font-size: 2rem;
        max-width: 46.4rem;

        margin-left: 5.6rem;
        margin-top: 2.4rem;

        @media (max-width: 946px) {
          max-width: 100%;
        }
      }

      .figure-calc-container {
        display: flex;
        justify-content: center;
        max-width: 46.4rem;

        margin-top: 2.4rem;

        @media (max-width: 946px) {
          max-width: 100%;
        }
      }
    }
  }
`

export const Trataments = styled.section<{ bg: string }>`
  .row {
    min-height: 45.8rem;
    display: flex;

    .left {
      width: 50%;
      min-height: 45.8rem;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 946px) {
        width: 100%;

        padding: 0 2.4rem;
      }

      .title {
        width: fit-content;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        margin-bottom: 1.2rem;

        h2 {
          margin-left: 1.2rem;
        }
      }

      .items-list {
        margin-left: 5.6rem;

        ul {
          list-style: none;

          li {
            img {
              margin-right: 1.2rem;
            }
            font-size: 1.8rem;
            line-height: 2.8rem;
            display: flex;
          }
        }
      }
    }
    .right {
      width: 50%;
      height: 100%;
      min-height: 45.8rem;

      background-image: url(${props => props.bg});
      background-repeat: no-repeat;
      background-size: cover;

      @media (max-width: 946px) {
        display: none;
      }
    }
  }
`

export const Agenda = styled.section`
  .container {
    padding: 6.2rem 2.4rem;

    .title {
      .bk {
        width: 100%;
        background-color: #04a6e1;
      }
      h2 {
        font-size: 4rem;
        text-align: center;
        color: ${props => props.theme.colors.whiteContent};
      }

      span {
        display: block;
        font-size: 2rem;
        text-align: center;
      }
    }

    .top {
      width: 100%;
    }
    .local {
      width: 100%;
    }
    .content {
      width: 100%;
    }

    .form-container {
      .form {
        width: 100%;
        height: 100%;
        max-width: 51.4rem;
        min-height: 51.6rem;

        background: #fafafa;
        box-shadow: -5px 0px 50px rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        padding: 2.6rem;

        .input-container {
          width: 100%;
          height: 6rem;
          background: #f3f3f3;
          border-radius: 0.8rem;

          display: flex;
          align-items: center;

          padding: 0 1.2rem;

          margin-bottom: 2rem;

          .label {
            display: flex;
            margin-right: 1.2rem;
            align-items: center;

            figure {
              margin-right: 1.2rem;

              display: flex;
            }
          }

          input {
            width: 100%;
            min-height: 4rem;

            font-family: Nunito, sans-serif;
            font-size: 2rem;

            outline: none;
            border: none;
            /* background: none; */
            padding: 0.8rem;
            border-radius: 0.8rem;
          }
        }
      }
    }
  }
`

export const ProvaSocial = styled.section`
  background-color: ${props => props.theme.colors.primary};
  min-height: 584px;

  .container {
    max-width: 1032px;
    padding: 2.4rem 0;
    margin: 0 auto;
    overflow-x: auto;

    @media (min-width: 960px) {
      display: flex;
      justify-content: center;

      figure img.to-hidden {
        display: none;
      }
    }

    /*
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    */

    figure {
      width: 3046px;
      display: flex;
      justify-content: space-between;
      padding: 0 2.4rem;

      img {
        width: 274px;
      }

      @media (min-width: 960px) {
        .to-hidden {
          display: none;
        }
      }
    }
  }
`

export const Footer = styled.section`
  min-height: 96px;
  max-height: 300px;

  background-color: ${props => props.theme.colors.primary};

  .container {
    padding: 2.4rem;

    display: flex;
    justify-content: space-between;

    @media (max-width: 810px) {
      flex-direction: column;
      /* justify-content: start; */
      align-items: center;
      height: 300px;
      gap: 1rem;
      text-align: left;
    }

    .social-media {
      display: flex;
      cursor: pointer;

      a:first-child {
        margin-right: 10px;
      }
    }
  }
`
const BounceAnimation = keyframes`
  0 {
    transform: scale(1) rotate(0deg);
  }

  50% {
    transform: scale(1.3) rotate(-20deg);
  }

  100% {
    transform: scale(1) rotate(0deg);
  }
`

export const WhatsappButton = styled.button`
  width: 7rem;
  height: 7rem;

  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border: none;
  background: none;
  outline: none;

  img {
    width: 100%;
    animation: ${BounceAnimation} 3s ease infinite;
  }
  @media (max-width: 810px) {
    height: 5rem;
    right: 1rem;
    bottom: 2rem;
    img {
      width: 60%;
    }
  }
`
