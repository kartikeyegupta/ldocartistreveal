'use client';
import NightShutters from '../night-window';
export default function Home() {
  return (
    <>
      <div className="absolute top-4 left-0 right-0 text-center font-bold text-[#fcd598] text-xl z-20 p-4 font-['Lovecraft'] mb-[5%] glow-text">
        Look around and click to uncover hidden clues...
      </div>
      <NightShutters />
    </>
  );
}
