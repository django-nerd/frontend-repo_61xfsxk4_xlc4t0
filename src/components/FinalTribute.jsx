import React from 'react';
import { motion } from 'framer-motion';

const FinalTribute = () => {
  return (
    <section className="relative min-h-[100vh] w-full bg-black text-[#f4f4f4] flex items-center justify-center overflow-hidden">
      {/* Ambient crimson haze */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(139,0,0,0.35),rgba(0,0,0,0))]" />

      {/* Photo frame placeholder. Replace src with the provided real photo later. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true, amount: 0.6 }}
        className="relative z-10 mx-6 max-w-xl w-full"
      >
        <div className="relative rounded-lg overflow-hidden border border-[#8B0000]/40 shadow-[0_0_40px_rgba(179,18,23,0.35)]">
          <img
            src="https://images.unsplash.com/photo-1542326237-94b1c5a538c0?q=80&w=1400&auto=format&fit=crop"
            alt="Douae tribute"
            className="w-full h-[420px] object-cover grayscale contrast-125"
          />
          {/* Vignette + rain */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_50%,rgba(0,0,0,0)_60%,rgba(0,0,0,0.85))]" />
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '1px 14px',
            transform: 'skewX(-12deg)'
          }} />
        </div>
        <p className="mt-6 text-center text-xl sm:text-2xl italic text-[#ff2e63] drop-shadow-[0_0_18px_#b31217]">
          Douae — the reason the night still breathes.
        </p>
      </motion.div>
    </section>
  );
};

export default FinalTribute;
