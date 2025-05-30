'use client';

import { contactSocials } from '@/constants/socials';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      className="bg-[theme(colors.bg-muted)] text-[theme(colors.primary)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex justify-between max-w-xl md:max-w-6xl mx-auto px-7 md:px-10 py-8 md:py-24 pb-1 md:pb-8 gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ul className="space-y-0 text-sm lg:text-xl font-bold">
          {contactSocials.map(({ label, href }, index) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline tracking-wider uppercase"
                download={label === "RESUME" ? "Conley-Tjahjono-Resume.pdf" : undefined}
              >
                {label}
              </a>
            </motion.li>
          ))}
          </ul>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-[theme(colors.text-primary)] font-semibold"
          >
            social.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-between text-sm text-right lg:text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <div>
            <motion.p className="font-bold text-base lg:text-2xl" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>Conley Tjahjono</motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>New York, NY</motion.p>
          </div>
          <div className="flex flex-col items-end">
            <motion.a
              href="mailto:conleytjahjono2@gmail.com"
              className="hover:underline"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              conleytjahjono2@gmail.com
            </motion.a>
            <motion.a
              href="tel:+15623772110"
              className="hover:underline"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              +1(562)3772110
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative w-full overflow-hidden py-4 bg-[theme(colors.bg-muted)]">
        <motion.div
          className="flex w-max"
          animate={{ x: ['-20%', '0%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          }}
        >
          <div className="whitespace-nowrap text-4xl uppercase tracking-wider md:text-8xl font-bold text-[theme(colors.text-muted)]">
            {"LETS CONNECT  •  ".repeat(10)}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;