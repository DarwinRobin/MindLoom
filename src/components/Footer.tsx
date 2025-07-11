import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0a0e1d] to-[#1a1f40] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <BrainCircuit className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-2xl font-bold text-white">MindLoom</span>
          </div>
          <p className="mb-4">
            Built and maintained by Darwin Robin. Your destination for psychology learning and community.
          </p>
          <p><strong>Phone:</strong> +254 715 904 047</p>
          <p><strong>Email:</strong> darwinrobin1485@gmail.com</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Platform</h3>
          <ul className="space-y-2">
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/research" className="hover:text-white">Research Hub</Link></li>
            <li><Link href="/community" className="hover:text-white">Community</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/forum" className="hover:text-white">Forums</Link></li>
            <li><Link href="/papers" className="hover:text-white">Research Papers</Link></li>
            <li><Link href="/support" className="hover:text-white">Help Center</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-sm">
        © {new Date().getFullYear()} MindLoom. All rights reserved.
      </div>
    </footer>
);
}
