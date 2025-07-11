import { useState } from 'react';
import { PaystackButton } from './PaystackButton';

export const DonateButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="mt-6">
      <button 
        onClick={() => setShowForm(true)}
        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition"
      >
        Support MindLoom ❤️
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Donate to MindLoom</h3>
              <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-bold text-center">₦5,000.00</p>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-lg p-3"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="flex justify-center">
                <PaystackButton 
                  amount={10} // Amount in dollars
                  email={email}
                  onSuccess={() => setShowForm(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
