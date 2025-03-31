'use client';
import { useState } from 'react';
import NightShutters from '../night-window';

export default function Home() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'committee') {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded text-black"
            placeholder="Enter password"
          />
          <button type="submit" className="block w-full px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <div className="absolute top-4 left-0 right-0 text-center font-bold text-[#fcd598] text-xl z-20 p-4 font-['Lovecraft'] mb-[5%] glow-text">
        Look around and click to uncover hidden clues...
      </div>
      <NightShutters />
    </>
  );
}
