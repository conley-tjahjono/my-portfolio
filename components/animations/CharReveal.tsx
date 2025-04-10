'use client';

import { motion } from 'framer-motion';

export default function CharReveal({ text }: { text: string }) {
  return (
    <div className="flex gap-[2px]">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04, duration: 0.3 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
