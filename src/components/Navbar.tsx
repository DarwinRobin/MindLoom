'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { BrainCircuit, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
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
    { name: 'Resources', href: '/resources' },
    { name: 'Community', href: '/community' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="border-b border-white/10 backdrop-blur-sm bg-gradient-to-b from-[#0d1224]/90 to-[#0d1224]/70 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <BrainCircuit className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-xl font-bold">MindLoom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center">
            {!isClient || status === 'loading' ? (
              <div className="bg-gray-700 rounded-full w-9 h-9 animate-pulse" />
            ) : session?.user ? (
              <div className="relative group">
                <button className="flex items-center">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt="User Avatar"
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="bg-gray-700 border-2 border-dashed rounded-full w-9 h-9" />
                  )}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-[#0d1224] border border-white/10 rounded-lg shadow-lg py-2 invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100">
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/api/auth/signout"
                    className="block px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white border-t border-white/10 mt-1"
                  >
                    Sign Out
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="ml-4 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 px-4 py-2 rounded-lg transition-all"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#0d1224] to-[#1a1f40] border-t border-white/10">
          <div className="px-3 pt-2 pb-3 space-y-1">
            {/* User Info (Mobile) */}
            {isClient && session?.user && (
              <>
                <div className="flex items-center px-3 py-2">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt="User Avatar"
                      width={36}
                      height={36}
                      className="rounded-full mr-3"
                    />
                  ) : (
                    <div className="bg-gray-700 border-2 border-dashed rounded-full w-9 h-9 mr-3" />
                  )}
                  <div>
                    <p className="font-medium">{session.user.name}</p>
                    <p className="text-sm text-gray-400">{session.user.email}</p>
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
                >
                  Dashboard
                </Link>
              </>
            )}

            {/* Navigation Links (Mobile) */}
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Auth Buttons (Mobile) */}
            {isClient && !session?.user && (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 mt-1 rounded-md text-base font-medium bg-gradient-to-r from-purple-600 to-indigo-700"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;