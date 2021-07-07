import { NextApiRequest, NextApiResponse } from 'next/types'

import sendToSolite from '../../utils/sendToSolite'
import sendEmail from '../../utils/sendEmail'
import sendNotification from '../../utils/sendNotification'

export default async function mail(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    const { name, email, city, date, phone } = req.body

    await sendToSolite({
      name,
      email,
      phone,
      clientFk: 'c164fcba-866a-4a32-8089-a5ee3ae1cbce'
    })
    // sendEmail({ name, email, city, date })
    sendNotification({ name, email, phone, city, date })

    return res.status(200).json({ success: 'email is send' })
  } else {
    return res.status(400).json({ error: 'invalid request method' })
  }
}
