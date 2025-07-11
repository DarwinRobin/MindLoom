// src/app/login/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import SignInForm from '@/components/auth/SignInForm';
import { BrainCircuit } from 'lucide-react';

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1224] to-[#1a1f40]">
      <div className="w-full max-w-md p-8 bg-gradient-to-br from-[#1a2139] to-[#151a30] rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <BrainCircuit className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold">Sign In to MindLoom</h1>
          <p className="text-gray-400 mt-2">Continue your psychology journey</p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
