// src/app/donation/page.tsx
import Link from 'next/link';

export default function DonationPage() {
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-bold">Support MindLoom</h2>
      <p className="text-gray-600">
        Your donation helps us keep creating top‑quality psychology content.
      </p>
      <Link
        href="/api/donate" // replace with your actual Paystack endpoint
        className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
      >
        Donate Now
      </Link>
    </div>
  );
}
