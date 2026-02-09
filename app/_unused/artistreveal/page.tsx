'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show overlay after 3 seconds
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#fcd598]">
      <div className="relative min-h-screen">
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
          
          {/* YouTube embed space */}
          <div className="w-full max-w-4xl aspect-video mt-0 mb-5">
            {/* Add your YouTube iframe here */}
            <div className="w-full h-full rounded-lg flex items-center justify-center">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/2s6w1ytPiMY?si=FFUeCEHNfAfeZ9Zn" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
            </div>
          </div>

          {/* <div className="text-center mb-6">
            <p className="font-[family-name:var(--font-love-craft)] text-[#ff69b4] text-[6vw] md:text-[4vw]">
              ABELE QUAD @ 8 PM TODAY
            </p>
          </div> */}

          <div className="flex flex-col items-center gap-4 mb-10">
            <button 
              onClick={() => router.push('/lavardoc')}
              className="cursor-pointer px-8 py-6 text-[4vw] md:text-[4vw] font-[family-name:var(--font-love-craft)] text-[#ef959e] border-4 border-[#ef959e] hover:bg-[#ef959e] hover:text-[#fcd598] transition-colors rounded-lg"
            >
              New Clues 🤗
            </button>
            <button 
              onClick={() => router.push('/hint')}
              className="cursor-pointer px-8 py-6 text-[4vw] md:text-[4vw] font-[family-name:var(--font-love-craft)] text-[#ef959e] border-4 border-[#ef959e] hover:bg-[#ef959e] hover:text-[#fcd598] transition-colors rounded-lg"
            >
              Old Clues 😴
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}