"use client"

import { useState, useEffect } from "react"

export default function WindowShutters() {
  const [areOpen, setAreOpen] = useState(false)
  const [rainingClouds, setRainingClouds] = useState<number[]>([])
  const [ferrisRotation, setFerrisRotation] = useState(0)
  const [sunTextVisible, setSunTextVisible] = useState(false)
  const [freezerLightsOn, setFreezerLightsOn] = useState(false)
  const [butterflies, setButterflies] = useState<
    Array<{ id: number; x: number; y: number; scale: number; speed: number; delay: number; color: string }>
  >([])

  // Ferris wheel rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFerrisRotation(prev => (prev + 0.5) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Create just 2 butterflies with better positioning and properties
    const newButterflies = [
      {
        id: 0,
        x: 25, // Left side of window
        y: 30, // Upper middle area
        scale: 1.2, // Slightly larger
        speed: 15, // Slower, more graceful movement
        delay: 0, // Start immediately
        color: "from-orange-300 via-amber-200 to-yellow-300", // Monarch-like colors
      },
      {
        id: 1,
        x: 65, // Right side of window
        y: 40, // Middle area
        scale: 1, // Standard size
        speed: 18, // Different speed for variety
        delay: 2, // Delayed start for asynchronous movement
        color: "from-blue-300 via-sky-200 to-cyan-300", // Blue morpho-like colors
      },
    ]

    setButterflies(newButterflies)
  }, [])

  // Repositioned clouds higher up with slower speeds
  const clouds = [
    { id: 1, initialLeft: 0, top: 7, scale: 1.2, speed: 30 },
    { id: 2, initialLeft: 0, top: 17.5, scale: 1, speed: 50 },
    { id: 3, initialLeft: 0, top: 30, scale: 0.9, speed: 80 },
  ]

  const [cloudPositions] = useState(clouds)

  // Handle cloud click
  const handleCloudClick = (cloudId: number) => {
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
    // Create three layers of rain for depth effect
    const layers = [
      { count: 20, speedMultiplier: 1.2, opacity: 0.9 },
      { count: 15, speedMultiplier: 1, opacity: 0.7 },
      { count: 12, speedMultiplier: 0.8, opacity: 0.5 }
    ];

    return layers.map((layer, layerIndex) =>
      Array(layer.count).fill(0).map((_, i) => {
        const leftPos = 20 + Math.random() * 90; // Full width distribution
        const delay = Math.random() * 0.8; // Longer max delay for more natural effect
        const width = (0.08 + Math.random() * 0.08) * scale; // Thinner raindrops
        const height = (1.2 + Math.random() * 0.8) * scale; // Slightly shorter raindrops
        const speed = 0.4 + Math.random() * 0.3; // Slightly faster base speed

        return (
          <div
            key={`raindrop-${cloudId}-${layerIndex}-${i}`}
            className="absolute bg-gradient-to-b from-blue-400/0 via-blue-400 to-blue-400/0"
            style={{
              left: `${leftPos}%`,
              width: `${width}vw`,
              height: `${height}vh`,
              opacity: layer.opacity,
              transform: `scale(${scale}) translateY(0)`,
              animation: `rainFall ${speed * layer.speedMultiplier}s linear ${delay}s infinite`,
            }}
          />
        );
      })
    );
  }

  // Effect to auto-hide the sun text after 3 seconds
  useEffect(() => {
    if (sunTextVisible) {
      const timer = setTimeout(() => {
        setSunTextVisible(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [sunTextVisible])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-8 bg-[#fcd598]">

      <div className="relative mx-auto w-full max-w-[90vw] h-[80vh] bg-[#fcd598]">
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
              {/* Sun with click interaction */}
              <button 
                onClick={() => setSunTextVisible(prev => !prev)}
                className="absolute right-[5%] top-[5%] h-[8vw] w-[8vw] rounded-full bg-yellow-200 shadow-[0_0_40px_20px_rgba(255,247,237,0.7)] hover:bg-yellow-300 transition-colors focus:outline-none"
              />
              {/* Sun text modal */}
              {sunTextVisible && (
                <>
                  {/* Backdrop overlay */}
                  <div className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300" />
                  {/* Modal */}
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                      <p className="text-6xl">👖</p>
                  </div>
                </>
              )}
              {/* Clouds - ENHANCED CLICKABILITY */}
              <div className="absolute inset-0 pointer-events-none overflow-visible">
                {cloudPositions.map((cloud) => (
                  <div
                    key={cloud.id}
                    className="absolute pointer-events-auto"
                    style={{
                      left: `${cloud.top * 2.5}%`,  // Using top value to space clouds horizontally
                      top: `${cloud.top * 0.75}%`,
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
                        <div className="absolute top-[5vw] -left-[4vw] w-[13vw]">
                          {generateRaindrops(cloud.id, cloud.scale)}
                        </div>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Carnival Tent - Very Simple */}
              <div className="absolute bottom-[5%] left-[2%] w-[28vw] h-[45vh] z-10">
                {/* Tent poles */}
                <div className="absolute bottom-0 left-[10%] w-[0.8vw] h-[70%] bg-amber-800"></div>
                <div className="absolute bottom-0 right-[10%] w-[0.8vw] h-[70%] bg-amber-800"></div>

                {/* Tent top - cone shape */}
                <div className="absolute bottom-[70%] left-0 right-0 h-[30%] overflow-hidden">
                  <div className="w-full h-full bg-red-600" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
                    <div className="absolute left-[20%] h-full w-[20%] bg-white"></div>
                    <div className="absolute left-[60%] h-full w-[20%] bg-white"></div>
                  </div>
                </div>

                {/* Tent body */}
                <div className="absolute bottom-0 left-[10%] right-[10%] h-[70%] bg-red-600">
                  {/* White stripes */}
                  <div className="absolute left-[20%] h-full w-[20%] bg-white"></div>
                  <div className="absolute left-[60%] h-full w-[20%] bg-white"></div>

                  {/* Tent entrance */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[60%] bg-black"></div>
                </div>

                {/* Tent decorative edge */}
                <div className="absolute bottom-[70%] left-[5%] right-[5%]">
                  <div className="relative h-[1.5vh] w-full flex">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="h-full bg-yellow-300 border-t border-amber-600 flex-1 rounded-b-full"
                      ></div>
                    ))}
                  </div>
                  
                  {/* Hanging sign with strings */}
                  <div className="absolute top-[200%] left-1/2 -translate-x-1/2">
                    {/* Sign board */}
                    <div className="w-[8vw] h-[3vh] bg-amber-800 border-2 border-amber-950 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2009</span>
                    </div>
                  </div>
                </div>

                {/* Flag on top */}
                <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2">
                  <div className="w-[0.5vw] h-[3vh] bg-amber-800"></div>
                  <div className="absolute top-0 left-[0.5vw] w-0 h-0 border-b-[2vh] border-b-sky-400 border-r-[3vh] border-r-transparent"></div>
                </div>

              </div>

              

              {/* Ice Cream Freezer - Simplified */}
              <div className="absolute bottom-[5%] left-[32%] w-[8vw] h-[15vh] z-10">
                {/* Freezer body */}
                <div className="absolute inset-0 bg-sky-400 rounded-md border-2 border-gray-700">
                  {/* Top lid */}
                  <div className="absolute top-0 inset-x-0 h-[20%] bg-gray-700 rounded-t-md">
                    <div className="absolute inset-[0.5vh] bg-gray-500 flex">
                      <div className={`flex-1 border border-gray-600 mx-1 ${freezerLightsOn ? 'bg-yellow-300' : 'bg-gray-400'}`}></div>
                      <div className={`flex-1 border border-gray-600 mx-1 ${freezerLightsOn ? 'bg-yellow-300' : 'bg-gray-400'}`}></div>
                    </div>
                  </div>

                  {/* Control panel */}
                  <div className="absolute right-[5%] top-1/2 w-[15%] h-[30%] bg-gray-700 rounded-sm">
                    <div className="absolute h-[2px] bg-gray-400 w-[80%] left-[10%] top-[20%]"></div>
                    <div className="absolute h-[2px] bg-gray-400 w-[80%] left-[10%] top-[50%]"></div>
                    <div className="absolute h-[2px] bg-gray-400 w-[80%] left-[10%] top-[80%]"></div>
                  </div>

                  {/* Ice cream displays */}
                  <div className="absolute left-[10%] top-[40%] flex space-x-[0.8vw]">
                    {/* Popsicle */}
                    <div className="relative w-[1.5vw] h-[6vh]">
                      <div className="absolute top-0 w-full h-[70%] bg-green-300 rounded-t-lg border border-gray-700"></div>
                      <div className="absolute top-[30%] left-[20%] w-[0.4vw] h-[60%] bg-green-700 rounded-full"></div>
                      <div className="absolute top-[30%] right-[20%] w-[0.4vw] h-[60%] bg-green-700 rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[0.4vw] h-[40%] bg-amber-300 border border-gray-700"></div>
                    </div>

                    {/* Ice cream cone */}
                    <div className="relative w-[1.8vw] h-[6vh]">
                      <div className="absolute top-0 w-full h-[50%] bg-red-400 rounded-full border border-gray-700 overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-amber-200 rounded-t-lg"></div>
                      </div>
                      <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1.5vw] h-[60%] bg-amber-300 border border-gray-700"
                        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Freezer feet */}
                <div className="absolute -bottom-[1vh] left-[5%] w-[1vw] h-[0.8vh] bg-gray-800 rounded-b"></div>
                <div className="absolute -bottom-[1vh] right-[5%] w-[1vw] h-[0.8vh] bg-gray-800 rounded-b"></div>
              </div>

              {/* Ground/Grass */}
              <div className="absolute bottom-0 inset-x-0 h-[5vh] bg-green-600"></div>

              {/* Power Strip on Ground */}
              <div className="absolute bottom-[2.5vh] left-[45%] z-20">
                {/* Power strip with perspective */}
                <div
                  className="relative w-[10vw] h-[2.5vh] bg-gradient-to-b from-gray-700 to-gray-900 rounded-md shadow-lg"
                  style={{ transform: "perspective(500px) rotateX(30deg)" }}
                >
                  {/* Power strip sockets */}
                  <div className="absolute top-[20%] left-[10%] right-[10%] h-[60%] flex justify-around items-center">
                    {/* Socket 1 */}
                    <div className="relative w-[1.5vw] h-[1.2vh] bg-gray-800 rounded-sm flex justify-center items-center">
                      <div className="absolute w-[0.3vw] h-[0.8vh] bg-gray-600 rounded-full mx-[0.2vw]"></div>
                      <div className="absolute w-[0.3vw] h-[0.8vh] bg-gray-600 rounded-full mx-[0.2vw] translate-x-[0.5vw]"></div>
                    </div>

                    {/* Socket 2 - with plug inserted */}
                    <div className="relative w-[1.5vw] h-[1.2vh] bg-gray-800 rounded-sm flex justify-center items-center">
                      {/* Plug inserted */}
                      <div className="absolute -top-[1.5vh] w-[1.2vw] h-[1.5vh] bg-gray-300 rounded-t-sm shadow-md">
                        {/* Prongs (hidden inside socket) */}
                        <div className="absolute bottom-0 left-[25%] w-[0.25vw] h-[0.6vh] bg-gray-500"></div>
                        <div className="absolute bottom-0 right-[25%] w-[0.25vw] h-[0.6vh] bg-gray-500"></div>
                      </div>

                      {/* Cable coming out of plug */}
                      <div
                        className="absolute -top-[3.5vh] -right-[-.5vw] w-[9.5vw] h-[0.5vh] bg-black rounded-full"
                        style={{ transform: "rotate(15deg)" }}
                      ></div>
                    </div>

                    {/* Socket 3 */}
                    <div className="relative w-[1.5vw] h-[1.2vh] bg-gray-800 rounded-sm flex justify-center items-center">
                      <div className="absolute w-[0.3vw] h-[0.8vh] bg-gray-600 rounded-full mx-[0.2vw]"></div>
                      <div className="absolute w-[0.3vw] h-[0.8vh] bg-gray-600 rounded-full mx-[0.2vw] translate-x-[0.5vw]"></div>
                    </div>
                  </div>

                  {/* Power indicator light */}
                  <div 
                    onClick={() => setFreezerLightsOn(prev => !prev)}
                    className="absolute top-[30%] right-[3%] w-[0.4vw] h-[0.4vw] rounded-full bg-red-500 shadow-[0_0_5px_2px_rgba(239,68,68,0.5)] cursor-pointer hover:brightness-125"
                  ></div>
                </div>
              </div>

              {/* Ferris Wheel - Fixed positioning */}
              <div className="absolute bottom-[5%] right-[10%] w-[35vh] h-[35vh] z-10">
                {/* Main support structure */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[4vh] h-[5vh] bg-gray-800 rounded-md"></div>

                {/* Central column */}
                <div className="absolute bottom-[5vh] left-1/2 -translate-x-1/2 w-[2vh] h-[15vh] bg-gray-700"></div>

                {/* Diagonal supports that actually connect to the wheel */}
                <div
                  className="absolute bottom-[5vh] left-[40%] w-[1.5vh] h-[18vh] bg-gray-700"
                  style={{ transform: "rotate(30deg)", transformOrigin: "bottom left" }}
                ></div>
                <div
                  className="absolute bottom-[5vh] right-[40%] w-[1.5vh] h-[18vh] bg-gray-700"
                  style={{ transform: "rotate(-30deg)", transformOrigin: "bottom right" }}
                ></div>

                {/* Cross supports */}
                <div className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 w-[15vh] h-[1.2vh] bg-gray-600"></div>
                <div className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 w-[10vh] h-[1.2vh] bg-gray-600"></div>

                {/* Connection point to wheel */}
                <div className="absolute bottom-[19vh] left-1/2 -translate-x-1/2 w-[3vh] h-[3vh] rounded-full bg-gray-800 z-20"></div>

                {/* Wheel - Properly centered */}
                <div
                  className="absolute bottom-[5.5vh] left-1/2 -translate-x-1/2 w-[30vh] h-[30vh] rounded-full border-[1vh] border-gray-600"
                  style={{ transform: `rotate(${ferrisRotation}deg)` }}
                >
                  {/* Spokes */}
                  {[...Array(8)].map((_, i) => {
                    const angle = i * 45
                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-[13vh] h-[0.6vh] bg-gray-500"
                        style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
                      ></div>
                    )
                  })}

                  {/* Cabins */}
                  {[...Array(8)].map((_, i) => {
                    const angle = i * 45
                    const radians = (angle * Math.PI) / 180
                    const x = Math.sin(radians) * 13
                    const y = -Math.cos(radians) * 13

                    // Alternate cabin colors
                    const cabinColors = i % 2 === 0 
                      ? { background: '#ef4444', borderColor: '#dc2626' }  // red-500 and red-600
                      : { background: '#facc15', borderColor: '#eab308' }  // yellow-400 and yellow-500

                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}vh), calc(-50% + ${y}vh))`,
                        }}
                      >
                        {/* Cabin attachment - visible rod */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.4vh] h-[1.5vh] bg-gray-700"></div>

                        {/* Cabin */}
                        <div
                          className="w-[4vh] h-[5vh] border rounded-md mt-[1.5vh]"
                          style={{
                            background: cabinColors.background,
                            borderColor: cabinColors.borderColor,
                            transform: `rotate(${-ferrisRotation}deg)`,
                          }}
                        >
                          {/* Cabin window */}
                          <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[20%] bg-sky-200 rounded-sm"></div>
                        </div>
                      </div>
                    )
                  })}

                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3vh] h-[3vh] rounded-full bg-gray-800 border-4 border-gray-600 z-10"></div>

                  {/* Decorative lights around the wheel - Fixed to the wheel */}
                  {[...Array(24)].map((_, i) => {
                    const angle = i * 15
                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-[0.8vh] h-[0.8vh] rounded-full bg-yellow-300"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translate(14vh, 0)`,
                          boxShadow: "0 0 5px 2px rgba(253, 224, 71, 0.5)",
                        }}
                      ></div>
                    )
                  })}
                </div>
              </div>
              {/* Butterflies - Improved design */}
              {butterflies.map((butterfly) => (
                <div
                  key={`butterfly-${butterfly.id}`}
                  className="absolute pointer-events-none z-20"
                  style={{
                    left: `${butterfly.x}%`,
                    top: `${butterfly.y}%`,
                    transform: `scale(${butterfly.scale})`,
                    animation: `butterflyFloat ${butterfly.speed}s ease-in-out ${butterfly.delay}s infinite alternate`,
                  }}
                >
                  {/* Butterfly body */}
                  <div className="relative">
                    {/* Body */}
                    <div className="absolute left-1/2 top-1/2 h-[2vh] w-[0.5vh] -translate-x-1/2 -translate-y-1/2 bg-black rounded-full z-10"></div>

                    {/* Head */}
                    <div className="absolute left-1/2 -top-[0.2vh] h-[0.8vh] w-[0.8vh] -translate-x-1/2 rounded-full bg-black z-10"></div>

                    {/* Left wing top */}
                    <div
                      className={`absolute -left-[3vh] -top-[2vh] h-[3vh] w-[3vh] rounded-tl-full bg-gradient-to-br ${butterfly.color} opacity-90 border-r border-b border-black/20`}
                      style={{
                        transformOrigin: "bottom right",
                        animation: "butterflyWingTop 0.6s ease-in-out infinite alternate-reverse",
                        boxShadow: "0 0 5px rgba(255,255,255,0.5)",
                      }}
                    ></div>

                    {/* Left wing bottom */}
                    <div
                      className={`absolute -left-[3vh] top-[0.5vh] h-[3vh] w-[3vh] rounded-bl-full bg-gradient-to-tr ${butterfly.color} opacity-80 border-r border-t border-black/20`}
                      style={{
                        transformOrigin: "top right",
                        animation: "butterflyWingBottom 0.6s ease-in-out infinite alternate-reverse",
                        boxShadow: "0 0 5px rgba(255,255,255,0.5)",
                      }}
                    ></div>

                    {/* Right wing top */}
                    <div
                      className={`absolute -right-[3vh] -top-[2vh] h-[3vh] w-[3vh] rounded-tr-full bg-gradient-to-bl ${butterfly.color} opacity-90 border-l border-b border-black/20`}
                      style={{
                        transformOrigin: "bottom left",
                        animation: "butterflyWingTop 0.6s ease-in-out infinite alternate",
                        boxShadow: "0 0 5px rgba(255,255,255,0.5)",
                      }}
                    ></div>

                    {/* Right wing bottom */}
                    <div
                      className={`absolute -right-[3vh] top-[0.5vh] h-[3vh] w-[3vh] rounded-br-full bg-gradient-to-tl ${butterfly.color} opacity-80 border-l border-t border-black/20`}
                      style={{
                        transformOrigin: "top left",
                        animation: "butterflyWingBottom 0.6s ease-in-out infinite alternate",
                        boxShadow: "0 0 5px rgba(255,255,255,0.5)",
                      }}
                    ></div>

                    {/* Antenna */}
                    <div className="absolute left-1/2 -top-[1vh] h-[1.5vh] w-[0.15vh] -translate-x-[0.3vh] rotate-[-20deg] bg-black"></div>
                    <div className="absolute left-1/2 -top-[1vh] h-[1.5vh] w-[0.15vh] -translate-x-[0.7vh] rotate-[20deg] bg-black"></div>
                    <div className="absolute left-1/2 -top-[1vh] h-[0.3vh] w-[0.3vh] -translate-x-[0.3vh] -translate-y-[0.3vh] rounded-full bg-black"></div>
                    <div className="absolute left-1/2 -top-[1vh] h-[0.3vh] w-[0.3vh] -translate-x-[0.7vh] -translate-y-[0.3vh] rounded-full bg-black"></div>
                  </div>
                </div>
              ))}
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
        </div>

        {/* Remove the floatCloud keyframe animation */}
        <style jsx global>{`
          @keyframes rainFall {
            0% {
              transform: translateY(0) scale(1);
            }
            90% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(2000%) scale(1);
              opacity: 0;
            }
          }
          @keyframes butterflyFloat {
            0% {
              transform: translate(0, 0) rotate(-5deg);
            }
            20% {
              transform: translate(5vh, -3vh) rotate(8deg);
            }
            40% {
              transform: translate(-2vh, 5vh) rotate(-10deg);
            }
            60% {
              transform: translate(-7vh, -2vh) rotate(5deg);
            }
            80% {
              transform: translate(3vh, 4vh) rotate(-8deg);
            }
            100% {
              transform: translate(6vh, -5vh) rotate(10deg);
            }
          }

          @keyframes butterflyWingTop {
            0% {
              transform: rotateY(0deg) rotateX(15deg);
            }
            100% {
              transform: rotateY(60deg) rotateX(5deg);
            }
          }

          @keyframes butterflyWingBottom {
            0% {
              transform: rotateY(0deg) rotateX(-15deg);
            }
            100% {
              transform: rotateY(60deg) rotateX(-5deg);
            }
        `}</style>

        {/* Controls */}
        <div className="mt-6 flex justify-center gap-4 bg-[#fcd598]">
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
