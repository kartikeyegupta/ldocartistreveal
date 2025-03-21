'use client';
import WindowShutters from '../open-window';

export default function Home() {
  return (
    <main className="bg-[#fcd598]">
      <div className="mobile-rotate-container bg-[#fcd598]">
        <div className="relative min-h-scree bg-[#fcd598]">
          <div className="absolute top-4 left-0 right-0 text-center font-bold text-[#d14d72] text-xl z-20 p-4 font-['Lovecraft'] mb-[5%]">
            Look around and click to uncover hidden clues...
          </div>
          <WindowShutters />
        </div>
      </div>
    </main>
  );
}
