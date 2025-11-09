import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/AhxNsyzD5VQ6UhOp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient vignettes that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_30%,rgba(179,18,23,0.25),rgba(0,0,0,0))]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-widest text-[#f4f4f4]">
          THE NIGHT BELONGS TO HER
        </h1>
        <p className="mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-[#f4f4f4]/80">
          A cinematic love-letter from the Dark Knight to his Vampire Queen —
          <span className="ml-2 font-semibold text-[#ff2e63] drop-shadow-[0_0_12px_#b31217]">Douae</span>
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.35em] text-[#f4f4f4]/60">
          Drift slowly. Breathe with the storm.
        </p>
      </div>
    </section>
  );
};

export default HeroCover;
