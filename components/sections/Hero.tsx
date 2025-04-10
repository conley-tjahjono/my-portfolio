'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SocialSidebar from '../layout/SocialSidebar';


export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row justify-between px-6 max-w-7xl mx-auto">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 max-w-xl flex flex-col h-full justify-between gap-60"
      >
        <SocialSidebar></SocialSidebar>
        
        <div>
            <h1 className="text-9xl font-medium">
            Frontend Developer
            </h1>
            <p className="text-5xl font-medium">
                with a <span className="text-red-500 text-5xl font-medium">UX Mindset</span>
            </p>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-50 justify-between h-full mt-10 md:mt-0"
      >
        <Image
          src="/profile.jpg"
          alt="Conley headshot"
          width={380}
          height={380}
          className="rounded-2xl object-cover self-end"
        />
        <div className="font-semibold text-xl text-right">
            <p>Hi I’m Conley Tjahjono,</p>
            <p>a Frontend Engineer</p>
            <p>crafting intuitive</p>
            <p>experiences</p>
        </div>
      </motion.div>
    </section>
  );
}
