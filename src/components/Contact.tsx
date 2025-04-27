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
        className="flex justify-between max-w-xl md:max-w-6xl mx-auto px-6 py-8 md:py-24 gap-12"
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
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
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
          <div>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>conleytjahjono2@gmail.com</motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>+1(562)3772110</motion.p>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="overflow-hidden py-4"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      >
        <div className="whitespace-nowrap text-[theme(colors.text-muted)] text-4xl font-bold">
          LETS CONNECT &nbsp; LETS CONNECT &nbsp; LETS CONNECT &nbsp; LETS CONNECT &nbsp;
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;