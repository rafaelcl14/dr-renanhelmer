import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  max-width: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.6rem auto;

  .top {
    border-bottom: solid 2px #ebebeb;
    padding-bottom: 0.4rem;

    .telemedicina {
      justify-content: center;
      svg {
        margin-right: 10px;
      }

      .content-telemedicina {
        .button {
          margin-top: 20px;
          border-radius: 8px;
          min-width: 160px;
          min-height: 40px;
          background-color: #04a6e1;
          display: flex;
          align-items: center;
          justify-content: center;

          :hover {
            background-color: #19bffc;
          }

          a {
            color: #fff;
            border: none;
            outline: none;
            cursor: pointer;
            text-decoration: none;
          }
        }
      }
    }

    .local {
      margin-top: 40px;
      margin-bottom: 10px;
      svg {
        margin-right: 10px;
      }
    }

    span {
      display: block;
      font-weight: bold;
    }
  }
`

export const LineTable = styled.div`
  padding: 2.4rem 0;

  border-bottom: solid 2px #ebebeb;

  .line-container {
    width: 100%;

    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;

    .city {
    }

    .expansion-button {
      label img {
        transition: ease 0.5s;
        z-index: 0;
      }

      input {
        display: none;
      }
    }
  }

  .box-description {
    background: #f1f1f1;
    padding: 1.6rem;
    border-radius: 0.8rem;

    .location {
      //display: flex;
      margin-bottom: 2rem;

      span:first-child {
        display: block;
        margin-bottom: 0.8rem;
      }

      .location-label {
        font-weight: bold;
        margin-right: 1.2rem;
      }
    }

    .clinical {
      /* display: flex; */
      margin-bottom: 2rem;

      span:first-child {
        display: block;
        margin-bottom: 0.8rem;
      }

      .clinical-label {
        font-weight: bold;
        margin-right: 1.2rem;
      }
    }

    .date {
      /* display: flex; */
      /* margin-bottom: 2rem; */

      span:first-child {
        display: block;
        margin-bottom: 0.8rem;
      }

      .date-label {
        font-weight: bold;
        margin-right: 1.2rem;
      }
    }
  }
`
