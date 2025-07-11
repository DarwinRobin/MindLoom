// src/components/payments/DonationButton.tsx
'use client';
import { usePaystackPayment } from 'react-paystack';

export default function DonationButton() {
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com", // Get from user session
    amount: 500000, // 5000 NGN in kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <button
      onClick={() => {
        initializePayment({
          onSuccess: () => {
            alert('Donation successful! Thank you for supporting MindLoom.');
          },
          onClose: () => console.log('Payment closed'),
        })
      }}
      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-lg hover:from-purple-700 hover:to-indigo-800 transition-all"
    >
      Support MindLoom
    </button>
  );
}