import { usePaystackPayment } from 'react-paystack';
import { toast } from 'react-hot-toast';

export const PaystackButton = ({ 
  amount, 
  email,
  onSuccess
}: { 
  amount: number; 
  email: string;
  onSuccess: () => void;
}) => {
  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: amount * 100, // Paystack uses kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <button
      onClick={() => {
        initializePayment({
          onSuccess: () => {
            toast.success('Payment successful!');
            onSuccess();
          },
          onClose: () => toast('Payment closed'),
        });
      }}
      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
    >
      Pay ₦{(amount * 500).toFixed(2)} {/* Convert to Naira */}
    </button>
  );
};
