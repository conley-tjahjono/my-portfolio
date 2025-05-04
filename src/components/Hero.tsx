'use client';

import { contactSocials } from '@/constants/socials';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="portrait:max-h-screen landscape:min-h-screen px-7 md:px-10 flex flex-col landscape:flex-row md:flex-row items-center landscape:items-start justify-between max-w-xl md:max-w-6xl mx-auto gap-6 pt-[60px] md:pt-[60px] lg:pt-[120px]">
      <motion.div
        className="flex-0 md:flex-1 self-start content-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl tracking-wider font-extrabold leading-[1.1] md:text-6xl lg:text-8xl"
        >
          <span className="block">FRONTEND</span>
          <span className="block">DEVELOPER</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mt-2 mb-6 text-[theme(colors.text-primary)] md:mb-60 lg:text-3xl"
        >
          with a UX Mindset
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col space-y-2 justify-between text-xs md:space-y-0 md:flex-row md:space-x-6 md:text-sm lg:text-xl font-semibold"
        >
          <motion.span
            className="text-[theme(colors.text-primary)] inline-block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            social.
          </motion.span>
          <div className="space-x-3 md:space-x-6">
          {contactSocials.map(({ label, href }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline uppercase tracking-wider inline-block"
              download={label.toUpperCase() === "RESUME" ? "Conley-Tjahjono-Resume.pdf" : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
             {label.toUpperCase() === "RESUME" ? (
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {label}
              </motion.span>
            ) : (
              label
            )}
            </motion.a>
          ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex flex-col items-end"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src="/conley.jpeg"
          alt="Conley Tjahjono"
          width={360}
          height={360}
          className="rounded-xl object-cover"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 text-[theme(colors.text-secondary)] text-sm text-center landscape:text-right font-light max-w-xs md:text-right md:text-base"
        >
          Hi I’m Conley Tjahjono, a Frontend Engineer crafting intuitive experiences
        </motion.p>
      </motion.div>
    </section>
  );
};
export default Hero;