"use client"

import { useState } from "react"

export default function WindowShutters() {
  const [areOpen, setAreOpen] = useState(true)
  const [rainingClouds, setRainingClouds] = useState<number[]>([])
  const [debugMessage, setDebugMessage] = useState("")

  // Repositioned clouds higher up with slower speeds
  const clouds = [
    { id: 1, initialLeft: 0, top: 15, scale: 1.2, speed: 30 },
    { id: 2, initialLeft: 0, top: 30, scale: 1, speed: 50 },
    { id: 3, initialLeft: 0, top: 45, scale: 0.9, speed: 80 },
  ]

  const [cloudPositions, setCloudPositions] = useState(clouds)

  // Handle cloud click
  const handleCloudClick = (cloudId: number) => {
    setDebugMessage(`Cloud ${cloudId} clicked!`)
    console.log(`Cloud ${cloudId} clicked!`)

    // Only add to raining clouds if not already raining
    if (!rainingClouds.includes(cloudId)) {
      setRainingClouds([...rainingClouds, cloudId])

      // Remove from raining clouds after animation completes (2 seconds)
      setTimeout(() => {
        setRainingClouds((prev) => prev.filter((id) => id !== cloudId))
      }, 2000)
    }
  }

  // Check if a cloud is raining
  const isRaining = (cloudId: number) => {
    return rainingClouds.includes(cloudId)
  }

  // Generate random raindrops for a cloud
  const generateRaindrops = (cloudId: number, scale: number) => {
    return Array(10)
      .fill(0)
      .map((_, i) => {
        const leftPos = 10 + Math.random() * 80 // Random position within cloud width
        const delay = Math.random() * 0.5 // Random delay for natural effect
        const duration = 1 + Math.random() * 1 // Random duration
        const width = 0.2 + Math.random() * 0.2 // Random width in vw
        const height = 1 + Math.random() * 2 // Random height in vh

        return (
          <div
            key={`raindrop-${cloudId}-${i}`}
            className="absolute bg-blue-500 rounded-b-full opacity-80"
            style={{
              left: `${leftPos}%`,
              width: `${width}vw`,
              height: `${height}vh`,
              animation: `singleRainDrop ${duration}s linear ${delay}s forwards`,
              transform: `scale(${scale})`,
            }}
          />
        )
      })
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-8">
      {/* Debug message */}
      {debugMessage && <div className="absolute top-4 left-4 bg-white p-2 rounded shadow z-50">{debugMessage}</div>}

      <div className="relative mx-auto w-full max-w-[90vw] h-[80vh]">
        {/* Window frame */}
        <div className="relative h-full overflow-hidden rounded-lg border-[1vw] border-stone-700/50 bg-transparent shadow-2xl">
          {/* Window depth effect */}
          <div className="absolute inset-0 border-[0.5vw] border-stone-800/20"></div>

          {/* Window sill */}
          <div className="absolute bottom-0 left-0 right-0 h-[4vh] bg-gradient-to-b from-stone-600/30 to-stone-800/30 shadow-inner"></div>

          {/* Window content */}
          <div className="relative h-full overflow-hidden">
            {/* Sky background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-400 to-sky-200">
              {/* Sun */}
              <div className="absolute right-[15%] top-[20%] h-[8vw] w-[8vw] rounded-full bg-yellow-200 shadow-[0_0_40px_20px_rgba(255,247,237,0.7)]"></div>

              {/* Clouds - ENHANCED CLICKABILITY */}
              <div className="absolute inset-0 pointer-events-none overflow-visible">
                {cloudPositions.map((cloud) => (
                  <div
                    key={cloud.id}
                    className="absolute pointer-events-auto"
                    style={{
                      left: `${cloud.top * 2}%`,  // Using top value to space clouds horizontally
                      top: `${cloud.top}%`,
                      zIndex: 15,
                    }}
                  >
                    {/* Clickable area - much larger than the cloud */}
                    <button
                      className="relative p-8 -m-8 focus:outline-none"
                      onClick={() => handleCloudClick(cloud.id)}
                      style={{ transform: `scale(${cloud.scale})` }}
                    >
                      {/* Cloud shape */}
                      <div className="relative">
                        <div className="absolute -left-[4vw] top-0 h-[5vw] w-[5vw] rounded-full bg-white opacity-90 shadow-md"></div>
                        <div className="absolute -left-[2vw] -top-[2vw] h-[6vw] w-[6vw] rounded-full bg-white opacity-90 shadow-md"></div>
                        <div className="absolute left-[2vw] -top-[1vw] h-[7vw] w-[7vw] rounded-full bg-white opacity-90 shadow-md"></div>
                        <div className="absolute left-[4vw] top-[1vw] h-[5vw] w-[5vw] rounded-full bg-white opacity-90 shadow-md"></div>
                        <div className="absolute left-0 top-[1vw] h-[4vw] w-[8vw] rounded-full bg-white opacity-90 shadow-md"></div>
                      </div>

                      {/* Simple rain effect - one-time animation */}
                      {isRaining(cloud.id) && (
                        <div className="absolute top-[100%] left-0 w-full">
                          {generateRaindrops(cloud.id, cloud.scale)}
                        </div>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Window glass effect - subtle reflection */}
            <div className="absolute inset-0 bg-sky-100 opacity-10 pointer-events-none"></div>

            {/* 3D perspective wrapper */}
            <div className="absolute inset-0 z-20 pointer-events-none" style={{ perspective: "1000px" }}>
              {/* Left shutter */}
              <div
                className="absolute left-0 top-0 h-full w-1/2"
                style={{
                  transformOrigin: "left center",
                  transform: areOpen ? "rotateY(-90deg)" : "rotateY(0deg)",
                  transition: "transform 1s ease-in-out",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Shutter frame */}
                <div className="h-full w-full bg-gradient-to-r from-amber-900 to-amber-800 p-2 shadow-md">
                  {/* Shutter panels */}
                  <div className="grid h-full w-full grid-rows-3 gap-2 bg-amber-800">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center rounded border-2 border-amber-950 bg-gradient-to-br from-amber-700 to-amber-800 p-2 shadow-inner"
                      >
                        <div className="h-full w-full rounded border border-amber-600 shadow-inner"></div>
                      </div>
                    ))}
                  </div>

                  {/* Edge detail */}
                  <div className="absolute -right-1 inset-y-0 w-1 bg-amber-950"></div>
                </div>

                {/* Hinges */}
                <div className="absolute -left-2 top-[15%] h-10 w-4 rounded-l-lg bg-gradient-to-r from-stone-900 to-stone-700 shadow-md"></div>
                <div className="absolute -left-2 top-[75%] h-10 w-4 rounded-l-lg bg-gradient-to-r from-stone-900 to-stone-700 shadow-md"></div>

                {/* Hinge screws */}
                <div className="absolute -left-1 top-[17%] h-1.5 w-1.5 rounded-full bg-stone-400 shadow-inner"></div>
                <div className="absolute -left-1 top-[23%] h-1.5 w-1.5 rounded-full bg-stone-400 shadow-inner"></div>
                <div className="absolute -left-1 top-[77%] h-1.5 w-1.5 rounded-full bg-stone-400 shadow-inner"></div>
                <div className="absolute -left-1 top-[83%] h-1.5 w-1.5 rounded-full bg-stone-400 shadow-inner"></div>
              </div>

              {/* Right shutter */}
              <div
                className="absolute right-0 top-0 h-full w-1/2"
                style={{
                  transformOrigin: "right center",
                  transform: areOpen ? "rotateY(90deg)" : "rotateY(0deg)",
                  transition: "transform 1s ease-in-out",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Shutter frame */}
                <div className="h-full w-full bg-gradient-to-l from-amber-900 to-amber-800 p-2 shadow-md">
                  {/* Shutter panels */}
                  <div className="grid h-full w-full grid-rows-3 gap-2 bg-amber-800">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center rounded border-2 border-amber-950 bg-gradient-to-br from-amber-700 to-amber-800 p-2 shadow-inner"
                      >
                        <div className="h-full w-full rounded border border-amber-600 shadow-inner"></div>
                      </div>
                    ))}
                  </div>

                  {/* Edge detail */}
                  <div className="absolute -left-1 inset-y-0 w-1 bg-amber-950"></div>
                </div>

                {/* Hinges */}
                <div className="absolute -right-2 top-[15%] h-10 w-4 rounded-r-lg bg-gradient-to-l from-stone-900 to-stone-700 shadow-md"></div>
                <div className="absolute -right-2 top-[75%] h-10 w-4 rounded-r-lg bg-gradient-to-l from-stone-900 to-stone-700 shadow-md"></div>

                {/* Hinge screws */}
                <div className="absolute -right-1 top-[17%] h-1.5 w-1.5 rounded-full bg-stone-400 shadow-inner"></div>
                <div className="absolute -right-1 top-[23%] h-1.5 w-1.5 rounded-full bg-stone-400 shadow-inner"></div>
                <div className="absolute -right-1 top-[77%] h-1.5 w-1.5 rounded-full bg-stone-400 shadow-inner"></div>
                <div className="absolute -right-1 top-[83%] h-1.5 w-1.5 rounded-full bg-stone-400 shadow-inner"></div>
              </div>
            </div>

            {/* Shutter latch (visible when closed) */}
            <div
              className={`absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 pointer-events-none ${
                areOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="h-10 w-6 rounded-md bg-gradient-to-b from-stone-600 to-stone-800 shadow-md"></div>
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-400 shadow-inner"></div>
            </div>
          </div>
        </div>

        {/* Remove the floatCloud keyframe animation */}
        <style jsx global>{`
          @keyframes singleRainDrop {
            0% {
              transform: translateY(0);
              opacity: 0.8;
            }
            80% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(200px);
              opacity: 0;
            }
          }
        `}</style>

        {/* Controls */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setAreOpen(!areOpen)}
            className="rounded-md bg-amber-800 px-4 py-2 text-white transition-colors hover:bg-amber-700"
          >
            {areOpen ? "Close Shutters" : "Open Shutters"}
          </button>
        </div>

      </div>
    </div>
  )
}
