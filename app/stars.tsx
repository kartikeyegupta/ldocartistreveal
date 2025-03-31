"use client"

import { useEffect, useState } from "react"

export default function Stars() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([])

  useEffect(() => {
    // Generate random stars
    const starCount = 50
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across screen
      y: Math.random() * 100, // percentage down screen
      size: Math.random() * 2 + 1, // size between 1-3px
      delay: Math.random() * 2, // random delay for animation
    }))

    setStars(newStars)

    return () => {}
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.7 + Math.random() * 0.3,
            boxShadow: "0 0 3px 1px rgba(255, 255, 255, 0.4)",
            animation: `starRise 2s ease-out ${star.delay}s forwards`,
            transform: "translateY(100vh)",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes starRise {
          from {
            transform: translateY(100vh);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: ${0.7 + Math.random() * 0.3};
          }
        }
      `}</style>
    </div>
  )
}

