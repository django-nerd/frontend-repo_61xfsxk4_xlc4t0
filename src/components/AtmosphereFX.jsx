import React, { useEffect, useRef } from 'react';

// Subtle falling petals + drifting fog layers + light rain overlay
const AtmosphereFX = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create a handful of floating petals
    const petals = Array.from({ length: 18 }).map(() => {
      const el = document.createElement('div');
      el.className = 'absolute pointer-events-none select-none';
      const size = 6 + Math.random() * 10; // 6-16px
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      el.style.left = `${left}%`;
      el.style.top = `-10%`;
      el.style.width = `${size}px`;
      el.style.height = `${size * 0.7}px`;
      el.style.background = '#ff2e63';
      el.style.filter = 'drop-shadow(0 0 6px #b31217)';
      el.style.opacity = `${0.35 + Math.random() * 0.4}`;
      el.style.borderRadius = '60% 40% 60% 40%/50% 50% 50% 50%';
      el.style.transform = `rotate(${Math.random() * 360}deg)`;
      el.style.animation = `petalFall ${12 + Math.random() * 10}s linear ${delay}s infinite`;
      container.appendChild(el);
      return el;
    });

    return () => {
      petals.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-30">
      {/* Fog layers */}
      <div className="absolute inset-0 opacity-60" style={{
        background: 'radial-gradient(120% 70% at 50% 10%, rgba(255,255,255,0.08), rgba(0,0,0,0))'
      }} />
      <div className="absolute inset-0 mix-blend-screen opacity-20 animate-[fogMove_60s_linear_infinite]" style={{
        background: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80) repeat',
        backgroundSize: 'cover'
      }} />
      <div className="absolute inset-0 mix-blend-screen opacity-15 animate-[fogMove2_80s_linear_infinite]" style={{
        background: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80) repeat',
        backgroundSize: 'cover'
      }} />

      {/* Light rain overlay */}
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
        backgroundSize: '1px 12px',
        transform: 'skewX(-12deg)',
        animation: 'rainDrift 6s linear infinite'
      }} />

      <style>{`
        @keyframes petalFall {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); }
          50% { transform: translateY(50vh) translateX(-10vw) rotate(180deg); }
          100% { transform: translateY(110vh) translateX(10vw) rotate(360deg); }
        }
        @keyframes fogMove {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes fogMove2 {
          0% { background-position: 0 0; }
          100% { background-position: -1000px 0; }
        }
        @keyframes rainDrift {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
      `}</style>
    </div>
  );
};

export default AtmosphereFX;
