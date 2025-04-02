'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showOverlay, setShowOverlay] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-04-10T20:00:00');
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
    // Show overlay after 3 seconds
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <div className="relative min-h-screen bg-[#fcd598]">
        {/* Base logo */}
        <div className={`grid place-items-center min-h-screen ${showOverlay ? 'hidden' : ''}`}>
          <Image 
            src="/fulllogo.png" 
            alt="LDOC" 
            className="w-[80vw] h-auto animate-fadeIn"
            width={1500}
            height={1500}
            priority
          />
        </div>

        {/* Overlay content */}
        <div className={`absolute inset-0 bg-[#fcd598] flex flex-col items-center transition-opacity duration-1000 ${showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="relative pt-2 md:pt-4">
            <Image 
              src="/fulllogo.png" 
              alt="LDOC" 
              className="w-[35vw] h-auto"
              width={1500}
              height={1500}
            />
          </div>
          {/* Centered countdown */}
          {/* <!-- LDOC's the biggest Party in the USA --> */}
          <div className="-mt-[2%] md:-mt-[0.75%] flex-1 w-full bg-[#fcd598] z-10 flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-center font-[family-name:var(--font-love-craft)] text-[#d14d72]">
              <div className="text-[15vw] md:text-[6vw] font-bold">
                <span className="text-[#ef959e]">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[4.5vw] md:text-[2vw] block">Days</span>
              </div>
              <div className="text-[15vw] md:text-[6vw] font-bold">
                <span className="text-[#ef959e]">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[4.5vw] md:text-[2vw] block">Hours</span>
              </div>
              <div className="text-[15vw] md:text-[6vw] font-bold">
                <span className="text-[#ef959e]">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[4.5vw] md:text-[2vw] block">Minutes</span>
              </div>
              <div className="text-[15vw] md:text-[6vw] font-bold">
                <span className="text-[#ef959e]">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[4.5vw] md:text-[2vw] block">Seconds</span>
              </div>
            </div>
            <div className="text-[8vw] md:text-[4vw] mt-2 text-center font-bold font-[family-name:var(--font-love-craft)] text-[#d14d72]">
              Until Artist Reveal
            </div>
            <div className="text-[4vw] md:text-[2vw] mt-1 text-center font-bold font-[family-name:var(--font-love-craft)] text-[#d14d72]">
              On Abele Quad!
            </div>
            <button 
              onClick={() => router.push('/lavardoc')}
              className="cursor-pointer block mt-8 px-8 py-4 text-[4vw] md:text-[3vw] font-[family-name:var(--font-love-craft)] text-[#ef959e] border-4 border-[#ef959e] hover:bg-[#ef959e] hover:text-[#fcd598] transition-colors rounded-lg"
            >
              New Clues 🤗
            </button>
            <button 
              onClick={() => router.push('/hint')}
              className="cursor-pointer block mt-8 px-8 py-4 text-[4vw] md:text-[3vw] font-[family-name:var(--font-love-craft)] text-[#ef959e] border-4 border-[#ef959e] hover:bg-[#ef959e] hover:text-[#fcd598] transition-colors rounded-lg mb-10"
            >
              Old Clues 😴
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}