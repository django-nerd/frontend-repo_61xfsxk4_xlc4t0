import React from 'react';
import { motion } from 'framer-motion';

const Scene = ({ title, subtitle, lines, accentLine }) => {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-[#f4f4f4] flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_50%_30%,rgba(179,18,23,0.15),rgba(0,0,0,0))]" />
      <div className="relative z-10 max-w-4xl px-6 text-center">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-3 text-sm tracking-[0.35em] text-[#f4f4f4]/60 uppercase"
          >
            {subtitle}
          </motion.p>
        )}

        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide"
          >
            {title}
          </motion.h2>
        )}

        <div className="mt-6 space-y-5">
          {lines?.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`text-lg sm:text-xl leading-relaxed ${l.highlight ? 'text-[#ff2e63] drop-shadow-[0_0_12px_#b31217]' : 'text-[#f4f4f4]/90'}`}
            >
              {l.text}
            </motion.p>
          ))}
        </div>

        {accentLine && (
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.6 }}
            className="mt-8 text-xl sm:text-2xl text-[#ff2e63] italic drop-shadow-[0_0_18px_#b31217]"
          >
            “{accentLine}”
          </motion.blockquote>
        )}
      </div>
    </section>
  );
};

export default Scene;
