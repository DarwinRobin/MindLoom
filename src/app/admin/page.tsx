// src/app/admin/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // If session is missing or user is not admin, redirect
  if (!session || (session.user as any).role !== 'admin') {
    redirect('/');
  }

  return (
    <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="bg-[#1a2139] p-8 rounded-xl border border-white/10">
        <p className="text-gray-400">Admin tools and analytics will appear here soon.</p>
      </div>
    </div>
  );
}
