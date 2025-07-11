'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function EnrollButton({ courseId }: { courseId: string }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleEnroll = async () => {
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId })
      });

      if (response.ok) {
        router.push(`/courses/${courseId}/start`);
      }
    } catch (error) {
      console.error('Enrollment failed:', error);
    }
  };

  return (
    <button
      onClick={handleEnroll}
      className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-purple-500/20"
    >
      {status === 'authenticated' ? 'Enroll Now' : 'Sign In to Enroll'}
    </button>
  );
}