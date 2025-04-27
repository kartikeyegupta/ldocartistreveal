'use client';

import Image from 'next/image';

export default function Schedule() {
  return (
    <main>
      <div className="min-h-screen bg-[#fcd598]">
        <div className="absolute inset-0 bg-[#fcd598] flex flex-col items-center">
          <div className="relative pt-2 md:pt-4 flex justify-center">
            <Image 
              src="/fulllogo.png" 
              alt="LDOC" 
              className="w-[35vw] h-auto"
              width={1500}
              height={1500}
            />
          </div>

          <div className="container mx-auto px-4 py-4 md:py-8 flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-center text-3xl md:text-[4vw] font-[family-name:var(--font-love-craft)] text-[#d14d72] mb-2 md:mb-4">
              LDOC 2025 is a wrap.
            </h1>
            <p className="text-center text-xl md:text-2xl font-[family-name:var(--font-love-craft)] text-[#ef959e]">
              See you next year! - Your LDOC Committee 🙂
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a 
                href="/schedule" 
                className="px-6 py-3 bg-[#d14d72] text-white rounded-lg hover:bg-[#ef959e] transition-colors duration-200 font-[family-name:var(--font-love-craft)]"
              >
                Schedule
              </a>
              <a 
                href="/artistreveal" 
                className="px-6 py-3 bg-[#d14d72] text-white rounded-lg hover:bg-[#ef959e] transition-colors duration-200 font-[family-name:var(--font-love-craft)]"
              >
                Artist Reveal
              </a>
              <a 
                href="/lavardoc" 
                className="px-6 py-3 bg-[#d14d72] text-white rounded-lg hover:bg-[#ef959e] transition-colors duration-200 font-[family-name:var(--font-love-craft)]"
              >
                Lavardoc
              </a>
              <a 
                href="/hint" 
                className="px-6 py-3 bg-[#d14d72] text-white rounded-lg hover:bg-[#ef959e] transition-colors duration-200 font-[family-name:var(--font-love-craft)]"
              >
                Original Clues
              </a>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a 
                href="https://www.instagram.com/dukeldoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent border-2 border-[#d14d72] text-[#d14d72] rounded-lg hover:bg-[#d14d72]/10 transition-colors duration-200 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#d14d72" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://duuke.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent border-2 border-[#d14d72] text-[#d14d72] rounded-lg hover:bg-[#d14d72]/10 transition-colors duration-200 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#d14d72" viewBox="0 0 24 24">
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-sm text-[#d14d72]">
        <div className="flex items-center gap-2">
          <span> Developed by Kartikeye (Tiki) Gupta </span>
          <span>|</span>
          <a 
            href="mailto:kartikeye.gupta@duke.edu" 
            className="hover:text-[#ef959e] transition-colors duration-200"
          >
            Email
          </a>
          <span>|</span>
          <a 
            href="https://github.com/kartikeyegupta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#ef959e] transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
