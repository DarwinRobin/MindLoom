import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { reference } = req.query;
  
  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    if (response.data.data.status === 'success') {
      return res.redirect('/payment-success');
    } else {
      return res.redirect('/payment-failed');
    }
  } catch (error) {
    console.error('Paystack verification error:', error);
    return res.redirect('/payment-failed');
  }
}
