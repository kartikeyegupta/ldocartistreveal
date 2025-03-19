'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import WindowShutters from './open-window';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-04-08T19:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-love-craft)] bg-[#fcd598]">
        <div className="relative">
          <Image 
            src="/logo.png" 
            alt="LDOC" 
            className="w-[80vw] h-auto animate-fadeIn"
            width={1500}
            height={1500}
            priority
          />
          <Image 
            src="/flower.png"
            alt="Flower"
            className="absolute w-[30vw] h-auto top-1/2 left-[41%] -translate-y-1/2 animate-fadeIn"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
      
      {/* New viewport to scroll to */}
      <div className="min-h-screen bg-[#fcd598] flex flex-col items-center">
        <div className="pt-8">
          <div className="flex items-center gap-8 text-center font-[family-name:var(--font-love-craft)] text-[#d14d72]">
            <div className="text-[6vw] font-bold">
              <span className="text-[#ef959e]">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-[2vw] block">Days</span>
            </div>
            <div className="text-[6vw] font-bold">
              <span className="text-[#ef959e]">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[2vw] block">Hours</span>
            </div>
            <div className="text-[6vw] font-bold">
              <span className="text-[#ef959e]">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[2vw] block">Minutes</span>
            </div>
            <div className="text-[6vw] font-bold">
              <span className="text-[#ef959e]">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[2vw] block">Seconds</span>
            </div>
          </div>
          <div className="text-[4vw] mt-4 text-center font-bold font-[family-name:var(--font-love-craft)] text-[#d14d72]">
            Until Artist Reveal
          </div>
        </div>
        
        <WindowShutters/>
      </div>
    </main>
  );
}
