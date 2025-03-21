'use client';
import WindowShutters from '../open-window';

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen bg-[#fcd598]">
        <div className="absolute top-4 left-0 right-0 text-center font-bold text-[#d14d72] text-xl z-20 p-4 font-['Lovecraft']">
          Look around and click to uncover hidden clues...
        </div>
        
        {/* Only showing the window shutters component */}
        <WindowShutters/>
      </div>
    </main>
  );
}
