import React, { createContext, useContext, useState } from 'react'

interface InterfaceUpdateValueFunction {
  (field: 'name' | 'email' | 'phone', value: string): void
}

interface InterfaceContextIframe {
  name: string
  email: string
  phone: string
  updateValue: InterfaceUpdateValueFunction
  visibility: boolean
  switchIframe: () => void
}

const IframeContext = createContext<InterfaceContextIframe>({
  name: '',
  email: '',
  phone: '',
  updateValue: null,
  visibility: false,
  switchIframe: null
})

const IframeProvider: React.FC = ({ children }) => {
  const [visibility, updateVisibility] = useState<boolean>(false)

  const [name, updateName] = useState<string>('')
  const [email, updateEmail] = useState<string>('')
  const [phone, updatePhone] = useState<string>('')

  const updateValue: InterfaceUpdateValueFunction = (field, value) => {
    field === 'name' && updateName(value)
    field === 'email' && updateEmail(value)
    field === 'phone' && updatePhone(value)
  }

  function switchIframe() {
    visibility && updateVisibility(false)
    !visibility && updateVisibility(true)
  }

  return (
    <IframeContext.Provider
      value={{
        name,
        email,
        phone,
        updateValue,
        visibility,
        switchIframe
      }}
    >
      {children}
    </IframeContext.Provider>
  )
}
export default IframeProvider

export function useIframe(): InterfaceContextIframe {
  const {
    name,
    email,
    phone,
    updateValue,
    switchIframe,
    visibility
  } = useContext(IframeContext)

  return { name, email, phone, updateValue, switchIframe, visibility }
}
