import nodemailer from 'nodemailer'

interface sendMyNotificationInterface {
  name: string
  email: string
  city: string
  date: string
  phone: string
}
export default async function sendMyNotification({
  name,
  email,
  city,
  date,
  phone
}: sendMyNotificationInterface): Promise<void> {
  const trasporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false,
    auth: {
      user: 'marketing@lojasoi.com',
      pass: 'Lk2Ul^G%@1ri'
    }
  })
  await trasporter.sendMail({
    from: 'Marketing <marketing@lojasoi.com>',
    to: 'marketing@lojasoi.com',
    subject: 'Agendamento',
    html: `
      <p style="margin-bottom:22px; font-size: 18px" >
        Uma nova pessoa pretende fazer um agendamento.
      </p>
      <p style="margin-bottom:22px; font-size: 18px" >
        <strong>Nome: </strong>${name}<br/>
        <strong>Email: </strong>${email}<br/>
        <strong>Telefone: </strong>${phone}<br/>
        <strong>Cidade: </strong>${city}<br/>
        <strong>Data: </strong>${date}<br/>
      </p>
    `
  })
}
