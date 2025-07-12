// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold hover:text-indigo-400">
          MindLoom
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/community">Community</Link>
          <Link href="/about">About</Link>
          <Link href="/login" className="text-indigo-400 hover:underline">
            Sign In
          </Link>
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-800 px-6 pb-6 space-y-4">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/community">Community</Link>
          <Link href="/about">About</Link>
          <Link href="/login" className="block text-indigo-400">
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}
