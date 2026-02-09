'use client';

import { useState, useEffect } from 'react';

const BASE_TEXT = 'loading';
const TYPING_INTERVAL = 120;
const DOTS_INTERVAL = 400;

export default function Schedule() {
  const [visibleLength, setVisibleLength] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (visibleLength >= BASE_TEXT.length) return;
    const t = setTimeout(() => setVisibleLength((n) => n + 1), TYPING_INTERVAL);
    return () => clearTimeout(t);
  }, [visibleLength]);

  useEffect(() => {
    if (visibleLength < BASE_TEXT.length) return;
    const steps = ['.', '..', '...'];
    let i = 0;
    const id = setInterval(() => {
      setDots(steps[i % 3]);
      i++;
    }, DOTS_INTERVAL);
    return () => clearInterval(id);
  }, [visibleLength]);

  const visibleText = BASE_TEXT.slice(0, visibleLength);

  return (
    <main className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Futuristic grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Subtle scanline overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />

      <div className="flex-1 flex flex-col items-center justify-center gap-10 relative z-10 px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-mono tracking-[0.3em] select-none uppercase">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-100 to-cyan-300"
            style={{ textShadow: '0 0 30px rgba(0, 245, 255, 0.4)' }}
          >
            {visibleText}
          </span>
          <span className="text-cyan-300/90">{dots}</span>
          <span
            className="inline-block w-[0.2em] h-[1em] ml-0.5 align-middle bg-cyan-400 rounded-sm animate-cursor-blink"
            style={{ boxShadow: '0 0 10px rgba(0, 245, 255, 0.7)' }}
            aria-hidden
          />
        </p>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm uppercase tracking-[0.4em] text-cyan-300/90 transition-all duration-300"
        >
          {/* Glow layer */}
          <span
            className="absolute inset-0 rounded-sm bg-cyan-500/10 blur-xl group-hover:bg-cyan-400/20 transition-colors duration-300"
            aria-hidden
          />
          {/* Border / frame */}
          <span
            className="absolute inset-0 rounded-sm border border-cyan-400/50 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300"
            aria-hidden
          />
          {/* Corner accents */}
          <span
            className="absolute top-0 left-0 w-4 h-px bg-gradient-to-r from-cyan-400 to-transparent"
            aria-hidden
          />
          <span
            className="absolute top-0 left-0 h-4 w-px bg-gradient-to-b from-cyan-400 to-transparent"
            aria-hidden
          />
          <span
            className="absolute bottom-0 right-0 w-4 h-px bg-gradient-to-l from-cyan-400 to-transparent"
            aria-hidden
          />
          <span
            className="absolute bottom-0 right-0 h-4 w-px bg-gradient-to-t from-cyan-400 to-transparent"
            aria-hidden
          />
          {/* Button content */}
          <span className="relative z-10 group-hover:text-cyan-200 transition-colors duration-300">
            Initiate
          </span>
        </a>
      </div>

    </main>
  );
}
