import React, { useState, useRef } from 'react'

import { TableContainer, LineTable as Lt } from './styles'

import ArrowDown from '../../assets/arrow-down.webp'

interface TableInterface {
  agenda: {
    city: string
    location: string
    clinical: string
    date: string[]
  }[]
}

const Table: React.FC<TableInterface> = ({ agenda }) => {
  return (
    <>
      <TableContainer>
        <div className="top">
          <div className="telemedicina" style={{ display: 'flex' }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 9.2L22.213 5.55C22.288 5.49746 22.3759 5.4665 22.4672 5.4605C22.5586 5.4545 22.6498 5.4737 22.731 5.51599C22.8122 5.55829 22.8802 5.62206 22.9276 5.70035C22.9751 5.77865 23.0001 5.86846 23 5.96V18.04C23.0001 18.1315 22.9751 18.2214 22.9276 18.2996C22.8802 18.3779 22.8122 18.4417 22.731 18.484C22.6498 18.5263 22.5586 18.5455 22.4672 18.5395C22.3759 18.5335 22.288 18.5025 22.213 18.45L17 14.8V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H2C1.73478 20 1.48043 19.8946 1.29289 19.7071C1.10536 19.5196 1 19.2652 1 19V5C1 4.73478 1.10536 4.48043 1.29289 4.29289C1.48043 4.10536 1.73478 4 2 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V9.2ZM5 8V10H7V8H5Z"
                fill="#04A6E1"
              />
            </svg>
            <div className="content-telemedicina">
              <h4>Consultas Telemedicina</h4>
              <div className="button">
                <a href="#formulario">Marcar Consulta</a>
              </div>
            </div>
          </div>
          <div className="local" style={{ display: 'flex' }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 20H23V22H1V20H3V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V20ZM8 11V13H11V11H8ZM8 7V9H11V7H8ZM8 15V17H11V15H8ZM13 15V17H16V15H13ZM13 11V13H16V11H13ZM13 7V9H16V7H13Z"
                fill="#04A6E1"
              />
            </svg>
            <h4>Consultas Locais</h4>
          </div>
          <span>Cidade</span>
        </div>

        <div className="content">
          {agenda.map((item, index) => {
            return (
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              <LineTable
                key={index}
                idKey={index}
                city={item.city}
                location={item.location}
                clinical={item.clinical}
                date={item.date}
              />
            )
          })}
        </div>
      </TableContainer>
    </>
  )
}

interface LineTableDTO {
  idKey: number
  city: string
  location: string
  clinical: string
  date: string[]
}

const LineTable: React.FC<LineTableDTO> = ({
  idKey,
  city,
  location,
  clinical,
  date
}) => {
  const [currentState, setCurrentState] = useState(false)

  return (
    <Lt>
      <div
        className="line-container"
        style={currentState ? {} : { marginBottom: 0 }}
      >
        <div className="city">
          <span>{city}</span>
        </div>
        <div className="expansion-button">
          <label htmlFor={`checkbox-drop-walet-${idKey}`}>
            <img
              src={ArrowDown}
              alt="Seta"
              style={
                currentState
                  ? {
                      transform: 'rotate(180deg)',
                      zIndex: 0
                    }
                  : {}
              }
            />
          </label>
          <input
            type="checkbox"
            name=""
            id={`checkbox-drop-walet-${idKey}`}
            defaultChecked={false}
            onChange={e => setCurrentState(e.target.checked)}
          />
        </div>
      </div>

      <div
        className="box-description"
        style={currentState ? { display: 'block' } : { display: 'none' }}
      >
        <div className="location">
          <span className="location-label">Localização</span>
          <span>{location}</span>
        </div>

        <div className="clinical">
          <span className="clinical-label">Clínica</span>
          <span>{clinical}</span>
        </div>

        <div className="date">
          <span className="date-label">Datas</span>
          <span>
            {date.map((item, index) => {
              if (index === date.length - 1) {
                return ` ${item}`
              } else {
                if (index === 0) {
                  return `${item} -`
                } else {
                  return ` ${item} -`
                }
              }
            })}
          </span>
        </div>
      </div>
    </Lt>
  )
}

export default Table
