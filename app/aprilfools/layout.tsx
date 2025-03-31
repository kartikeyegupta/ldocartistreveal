'use client';

export default function AprilFoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#1a3942]">
      <div className="mobile-rotate-container bg-[#1a3942]">
        <div className="relative min-h-screen bg-[#1a3942] bg-gradient-to-b from-[#1a3942] to-[#152f36]">
          {children}
        </div>
      </div>
    </main>
  );
} 