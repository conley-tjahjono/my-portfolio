'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-inherit shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        {/* Name */}
        <span className="text-lg font-semibold">conley tjahjono</span>

        {/* Nav links */}
        <div className="space-x-6 text-large font-semibold">
          <Link href="#projects" className="hover:text-gray-600 transition-all duration-200">
            projects
          </Link>
          <Link href="#skills" className="hover:text-gray-600 transition-all duration-200">
            skills
          </Link>
          <Link href="#contact" className="hover:text-gray-600 transition-all duration-200">
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
