import axios from 'axios'
// import { Agenda } from '../../content/Home.content.js'

type LeadType = {
  name: string
  email: string
  phone: number
  // date: string
  city: string
}

export default async function lead(request, response) {
  function formatJson({ name, email, phone, city }: LeadType) {
    // excluído date
    const data = {
      token: '60ad4021fd348b000b9ee16c',
      deal: {
        name: `${name} - ${city}`, // NOME DA PESSOA - CIDADE
        user_id: '60ad4021fd348b000b9ee169',
        rating: 1,
        deal_stage_id: '60ad404af5199200124ce065',
        deal_custom_fields: [
          {
            custom_field_id: '60da0f07870744000bda95f8', // CIDADE
            value: `${city}`
          }
          // {
          //   custom_field_id: '60da0f1bc8ab64000fea85d9', // DATA DE AGENDAMENTO
          //   value: `${date}`
          // }
        ]
      },
      contacts: [
        {
          name: `${name}`, // NOME DA PESSOA
          emails: [
            { email: `${email}` } // E-MAIL DA PESSOA
          ],
          phones: [
            { phone: `${phone}` } // NUMERO DE TELEFONE
          ]
        }
      ],
      deal_source: {
        _id: '60db8c0e100df60018b10261'
      },
      organization: {
        name: `${name}` // NOME DA PESSOA
      }
    }
    return data
  }
  if (request.method === 'POST') {
    const { name, email, city, phone } = request.body
    // excluído date
    console.log(request.body)

    if (
      // date === undefined ||
      email === undefined ||
      name === undefined ||
      phone === undefined ||
      city === undefined
    ) {
      return response.status(400).json({ error: 'Invalid Field' })
    }
    // const findCity = allCitys.find(citys => citys.city === data)
    const dataFormated = formatJson({
      name,
      email,
      phone,
      city
    })

    await axios
      .post('https://plugcrm.net/api/v1/deals', dataFormated)
      .then(() => {
        return response.status(200).send('success')
      })
      .catch(() => {
        return response.status(400).json({ error: 'falha na conexão' })
      })
  }
}
