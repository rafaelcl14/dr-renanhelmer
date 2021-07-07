import nodemailer from 'nodemailer'

interface SendEmailInterface {
  name: string
  email: string
  city: string
  date: string
}
export default async function sendEmail({
  name,
  email,
  city,
  date
}: SendEmailInterface): Promise<void> {
  // const trasporter = nodemailer.createTransport({
  //   host: 'smtp.umbler.com',
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: 'contato@renanhelmer.com.br',
  //     pass: 'Renan#09876'
  //   }
  // })
  // await trasporter.sendMail({
  //   from: 'Dr. Renan Helmer, contato@renanhelmer.com.br',
  //   to: `${email}`,
  //   subject: 'Agendamento de consulta - Dr. Renan Helmer',
  //   html: `
  //     <p style="margin-bottom:22px; font-size: 18px" >
  //       Olá <strong>${name}</strong>, aqui é o Dr. Renan.
  //     </p>
  //     <p style="margin-bottom:22px; font-size: 18px" >
  //       Vemos aqui que você deseja realizar uma agendamento conosco na cidade de <strong>${city}</strong> nas seguintes datas: <strong>${date}</strong> .Se você nos <strong>enviou a mensagem no Whatsapp</strong> em breve iremos  entrar em contato com você para dar sequência no agendamento.
  //     </p>
  //     <p style="font-size: 18px" >
  //       Até breve!!
  //     </p>
  //   `
  // })
}
