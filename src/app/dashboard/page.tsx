// src/app/dashboard/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Welcome back, {session.user?.name}</h1>
          <p className="text-gray-400">Continue your learning journey</p>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold">
            {session.user?.name?.charAt(0)}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Replace these with actual components when ready */}
          <div className="p-6 bg-[#1a2139] rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold">Course Progress</h2>
            <p className="text-gray-400 mt-2">Coming soon...</p>
          </div>
        </div>
        <div>
          <div className="p-6 bg-[#1a2139] rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <p className="text-gray-400 mt-2">Stay tuned!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
