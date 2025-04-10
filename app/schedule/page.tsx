'use client';

import Image from 'next/image';

export default function Schedule() {
  const events = [
    { time: "4:00 PM", event: "Gates Open", location: "Abele Quad" },
    { time: "5:00 PM", event: "Opening Act", location: "Main Stage" },
    { time: "6:30 PM", event: "Special Performance", location: "Main Stage" },
    { time: "8:00 PM", event: "Headliner", location: "Main Stage" },
    { time: "10:00 PM", event: "LDOC 2024 Ends", location: "Main Stage" },
  ];

  return (
    <main>
      <div className="min-h-screen bg-[#fcd598]">
        <div className="relative pt-2 md:pt-4 flex justify-center">
          <Image 
            src="/fulllogo.png" 
            alt="LDOC" 
            className="w-[35vw] h-auto"
            width={1500}
            height={1500}
          />
        </div>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-center text-[6vw] md:text-[4vw] font-[family-name:var(--font-love-craft)] text-[#d14d72] mb-12">
            LDOC 2024 Schedule
          </h1>

          <div className="max-w-3xl mx-auto">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="mb-8 relative flex items-center group hover:transform hover:scale-105 transition-transform"
              >
                {/* Timeline dot and line */}
                <div className="absolute left-[20px] top-0 bottom-0 w-1 bg-[#ef959e] group-hover:bg-[#d14d72] transition-colors"/>
                <div className="absolute left-[16px] top-[50%] w-[10px] h-[10px] rounded-full bg-[#ef959e] group-hover:bg-[#d14d72] transition-colors"/>

                {/* Event content */}
                <div className="ml-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-[#ef959e] w-full">
                  <div className="text-[5vw] md:text-[2vw] font-[family-name:var(--font-love-craft)] text-[#ef959e] group-hover:text-[#d14d72] transition-colors">
                    {event.time}
                  </div>
                  <div className="text-[6vw] md:text-[3vw] font-[family-name:var(--font-love-craft)] text-[#d14d72]">
                    {event.event}
                  </div>
                  <div className="text-[4vw] md:text-[1.5vw] font-[family-name:var(--font-love-craft)] text-[#ef959e]">
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
