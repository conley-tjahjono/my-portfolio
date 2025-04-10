import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Conley Tjahjono',
  description: 'Frontend Developer with a UX Mindset',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="scroll-smooth">
        <Navbar />
        <main className="pt-20">{children}</main> {/* Adjust pt to match nav height */}
      </body>
    </html>
  );
}
