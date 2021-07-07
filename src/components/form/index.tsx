/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

import { FormContainer, Button } from './styles'
import Input from './input'
import toast, { Toaster } from 'react-hot-toast'

// assets
import UserEmoji from '../../assets/user-emoji.webp'
import EmailEmoji from '../../assets/email-emoji.webp'
import PhoneEmoji from '../../assets/phone-emoji.webp'
import PinEmoji from '../../assets/pin-emoji.webp'
import CalenderEmoji from '../../assets/calender-emoji.webp'

interface FormInterface {
  listOfCitys: {
    city: string
    location: string
    clinical: string
    date: string[]
  }[]
  sectionId: string
}

const Form: React.FC<FormInterface> = ({ listOfCitys, sectionId }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  // const [date, setDate] = useState('')

  const [elementIdCity, updateElementIdCity] = useState<
    | 'button-jiparana'
    | 'button-cacoal'
    | 'button-porto-velho'
    | 'button-vilhena'
    | 'button-ariquemes'
    | 'button-jaru'
  >()

  const [datesOfSelectedCity, updateDatesOfSelectedCity] = useState<string[]>(
    []
  )

  const [submitState, setSubmitState] = useState<'active' | 'blocked'>(
    'blocked'
  )

  const [requestState, setRequestState] = useState<'notSending' | 'sending'>(
    'notSending'
  )

  interface ValidationInterface {
    name: boolean
    phone: boolean
    email: boolean
    city: boolean
    // date: boolean
  }
  const [validation, setValidation] = useState<ValidationInterface>({
    name: false,
    phone: false,
    email: false,
    city: false
    // date: false
  })

  interface UpdateValidationInterface {
    field: 'name' | 'phone' | 'email' | 'city'
    value: boolean
  }
  function updateValidation({ field, value }: UpdateValidationInterface): void {
    if (field === 'name') {
      const { name, ...othesStates } = validation
      setValidation({
        name: value,
        ...othesStates
      })
    }

    if (field === 'email') {
      const { email, ...othesStates } = validation
      setValidation({
        email: value,
        ...othesStates
      })
    }

    if (field === 'phone') {
      const { phone, ...othesStates } = validation
      setValidation({
        phone: value,
        ...othesStates
      })
    }

    if (field === 'city') {
      const { city, ...othesStates } = validation
      setValidation({
        city: value,
        ...othesStates
      })
    }

    // if (field === 'date') {
    //   const { date, ...othesStates } = validation
    //   setValidation({
    //     date: value,
    //     ...othesStates
    //   })
    // }
  }

  function updateNameState(value: string): void {
    setName(value)
  }

  function updatePhoneState(value: string): void {
    setPhone(value)
  }

  function updateEmailState(value: string): void {
    setEmail(value)
  }

  function updateCityState(value: string): void {
    setCity(value)

    if (value === 'Ji-Paraná/RO') {
      updateElementIdCity('button-jiparana')
    } else if (value === 'Cacoal/RO') {
      updateElementIdCity('button-cacoal')
    } else if (value === 'Porto Velho/RO') {
      updateElementIdCity('button-porto-velho')
    } else if (value === 'Vilhena/RO') {
      updateElementIdCity('button-vilhena')
    } else if (value === 'Ariquemes/RO') {
      updateElementIdCity('button-ariquemes')
    } else if (value === 'Jaru/RO') {
      updateElementIdCity('button-jaru')
    }
  }

  // function updateDateState(value: string): void {
  //   setDate(value)
  // }

  useEffect(() => {
    const correspondingCity = listOfCitys.find(item => item.city === city)

    if (correspondingCity) {
      updateDatesOfSelectedCity(correspondingCity.date)
      // setDate(correspondingCity.date);
    } else {
      updateDatesOfSelectedCity([])
      // setDate("");
    }
  }, [city])

  useEffect(() => {
    if (
      validation.name &&
      validation.phone &&
      validation.email &&
      validation.city
      // validation.date
    ) {
      setSubmitState('active')
    } else {
      setSubmitState('blocked')
    }
  }, [validation])

  async function sendLead() {
    toast.success('Solicitação enviada com sucesso!', {
      duration: 8000,
      style: {
        width: '600px'
      }
    })

    setRequestState('sending')

    const response = await axios.post('/api/mail', {
      name,
      email,
      city,
      // date,
      phone
    })
    await axios
      .post('/api/leadPgPrincipal', { name, email, city, phone })
      // removido date
      .then(() => {
        'deu certo'
      })
      .catch(() => {
        'deu erro'
      })

    setRequestState('notSending')

    // link de redirecionamento whatsapp
    // const url = `https://api.whatsapp.com/send?phone=5569999908000&text=Ol%C3%A1!%20Meu%20nome%20%C3%A9%20${name}%2C%20gostaria%20de%20marcar%20um%20agendamento%20na%20cidade%20de%3A%20${city}.%20Entre%20as%20datas%3A%20${date}.`
    // window.location.href = url
  }

  return (
    <FormContainer id={sectionId}>
      <div className="head-form">
        <h2>Faça seu agendamento!</h2>
        <p>Preencha o formulário abaixo para fazer seu agendamento!!</p>
      </div>

      <div className="inner-content">
        {requestState === 'notSending' ? (
          <>
            <Input
              iconPath={UserEmoji}
              label="Nome"
              inputType="name"
              updateState={updateNameState}
              updateValidation={updateValidation}
            />

            <Input
              iconPath={PhoneEmoji}
              label="Telefone"
              inputType="phone"
              updateState={updatePhoneState}
              updateValidation={updateValidation}
            />

            <Input
              iconPath={EmailEmoji}
              label="Email"
              inputType="email"
              updateState={updateEmailState}
              updateValidation={updateValidation}
            />

            <Input
              iconPath={PinEmoji}
              label="Cidade"
              inputType="city"
              listOfCitys={listOfCitys}
              updateState={updateCityState}
              updateValidation={updateValidation}
            />

            {/* <Input
              iconPath={CalenderEmoji}
              label="Data"
              inputType="date"
              updateValidation={updateValidation}
              updateState={updateDateState}
              dates={datesOfSelectedCity}
            /> */}

            <div className="container-button">
              <Button
                // eslint-disable-next-line no-unneeded-ternary
                id={elementIdCity ? elementIdCity : 'form-buttom'}
                state={submitState}
                onClick={() => sendLead()}
                style={
                  submitState === 'blocked'
                    ? { pointerEvents: 'none' }
                    : { pointerEvents: 'auto' }
                }
              >
                {submitState === 'active' ? <>Solicitar horário</> : <></>}

                {submitState === 'blocked' ? (
                  <>
                    Preencha os dados acima
                    <FontAwesomeIcon
                      icon="exclamation-triangle"
                      size="sm"
                      style={{ marginLeft: '1.2rem' }}
                    />
                  </>
                ) : (
                  <></>
                )}
              </Button>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
          </>
        ) : (
          <>
            <span className="request-status">
              <FontAwesomeIcon
                icon="clock"
                size="sm"
                style={{ marginRight: '1.2rem' }}
              />
              Formulário enviado, obrigado.
            </span>
          </>
        )}
      </div>
    </FormContainer>
  )
}

export default Form
