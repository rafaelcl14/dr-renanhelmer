import axios from 'axios'

interface sendToSoliteInterface {
  name: string
  phone: string
  clientFk: string
  email: string
}
export default async function sendToSolite({
  name,
  phone,
  clientFk,
  email
}: sendToSoliteInterface): Promise<void> {
  await axios.post('https://api.solite.tk/leads', {
    name,
    phone,
    client_fk: clientFk,
    email
  })
}
