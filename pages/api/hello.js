// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';
export const homeTestdata = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/homepage`)
}

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}