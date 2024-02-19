// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const { name, email, password } = req.body

    const response = await fetch(`${process.env.SERVER_API_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then((resp) => resp.json())
    console.log(`response:`, response)

    res.status(200).json({ name: 'John Doe' })
  } catch (e) {
    console.log(`e:`, e)
    return e
  }
}
