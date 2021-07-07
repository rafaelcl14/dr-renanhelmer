import React from 'react'

import { Agenda as AgendaContent } from '../content/Home.content'

import Form from '../components/formAgenda'
import { Head } from 'next/document'

export default function Agenda() {
  return (
    <>
      <title>Renan Helmer</title>

      <div>
        <Form sectionId="formulario" listOfCitys={AgendaContent.citys} />
      </div>
    </>
  )
}
