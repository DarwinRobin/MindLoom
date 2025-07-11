'use client';

import { signIn } from 'next-auth/react';
import { Github, Mail } from 'lucide-react';

export default function SignInForm() {
  return (
    <div className="space-y-4">
      <button
        onClick={() => signIn('google')}
        className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded-md hover:bg-gray-200 transition"
      >
        <Mail className="w-5 h-5" />
        Sign in with Google
      </button>
      <button
        onClick={() => signIn('github')}
        className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
      >
        <Github className="w-5 h-5" />
        Sign in with GitHub
      </button>
    </div>
  );
}
