'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { BrainCircuit, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    setIsClient(true);
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Research Hub', href: '/research' },
    { name: 'Community', href: '/community' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="backdrop-blur bg-gradient-to-b from-[#1a1f40]/80 to-[#0d1224]/80 border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center text-white">
          <BrainCircuit className="h-8 w-8 text-indigo-400" />
          <span className="ml-2 text-2xl font-bold">MindLoom</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? 'text-indigo-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {!isClient || status === 'loading' ? (
            <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse" />
          ) : session?.user ? (
            <div className="relative group">
              <button className="rounded-full overflow-hidden">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt="avatar"
                    width={36}
                    height={36}
                  />
                ) : (
                  <div className="w-9 h-9 bg-gray-700 rounded-full" />
                )}
              </button>
              <div className="absolute right-0 mt-2 w-44 bg-[#1a1f40] rounded-lg border border-white/20 py-2 opacity-0 group-hover:opacity-100 transition">
                <Link href="/dashboard" className="block px-4 py-1 text-gray-200 hover:bg-white/10">
                  Dashboard
                </Link>
                <Link href="/profile" className="block px-4 py-1 text-gray-200 hover:bg-white/10">
                  Profile
                </Link>
                <Link href="/api/auth/signout" className="block px-4 py-1 text-red-400 hover:bg-white/10">
                  Sign Out
                </Link>
              </div>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-gray-300 hover:text-white">
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(o => !o)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1a1f40] border-t border-white/20">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`block transition ${
                  pathname === link.href
                    ? 'text-indigo-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {!session?.user && (
              <>
                <Link href="/login" className="block text-gray-300 hover:text-white">
                  Sign In
                </Link>
                <Link href="/register" className="block bg-indigo-500 text-white py-1 rounded-lg">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
);
}
