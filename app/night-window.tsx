"use client"

import { useState } from "react"
import Image from "next/image"
import Stars from "./stars"

export default function NightShutters() {
  const [areOpen, setAreOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const handleItemClick = (item: string) => {
    setSelectedItem(selectedItem === item ? null : item)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-8 bg-[#000000]">
      <Stars />
      <div className="relative mx-auto w-full max-w-[70vw] aspect-[4/3] bg-[#000000] mt-[7vh]">
        {/* Window frame */}
        <div className="relative h-full overflow-hidden rounded-lg border-[1vw] border-stone-900/80 bg-transparent shadow-2xl">
          {/* Window depth effect */}
          <div className="absolute inset-0 border-[0.5vw] border-stone-950/40"></div>

          {/* Window sill */}
          <div className="absolute bottom-0 left-0 right-0 h-[4vh] bg-gradient-to-b from-stone-800/50 to-stone-900/50 shadow-inner"></div>

          {/* Window content */}
          <div className="relative h-full overflow-hidden bg-[#000000]">
            <Image 
              src="/ghiblifyfinal.png" 
              alt="Ghibli style artwork"
              fill
              className="object-cover"
            />

            {/* Clickable areas - only visible when shutters are open */}
            {areOpen && (
              <div className="absolute inset-0 z-10">
                {/* Ice Cream Freezer */}
                <button
                  className="absolute right-[0%] bottom-[19%] h-[36%] w-[27%] cursor-pointer bg-transparent"
                  onClick={() => handleItemClick("freezer")}
                  aria-label="Ice Cream Freezer"
                />
                {/* Rocking Horse */}
                <button
                  className="absolute left-[10%] bottom-[20%] h-[35%] w-[30%] cursor-pointer bg-transparent"
                  onClick={() => handleItemClick("horse")}
                  aria-label="Rocking Horse"
                />
                 {/* Word Tiles */}
                 <button
                  className="absolute left-[17%] bottom-[3%] h-[13%] w-[35%] cursor-pointer bg-transparent"
                  onClick={() => handleItemClick("tiles")}
                  aria-label="Word Tiles"
                />
                {/* Clock Seconds Hand */}
                <button
                  className="absolute right-[8.5%] top-[4%] h-[20%] w-[15%] cursor-pointer bg-transparent"
                  onClick={() => handleItemClick("clock")}
                  aria-label="Clock Seconds Hand"
                />
                {/* Jet */}
                 <button
                  className="absolute right-[44%] top-[8%] h-[10%] w-[15%] cursor-pointer bg-transparent"
                  onClick={() => handleItemClick("jet")}
                  aria-label="Jet"
                />
                {/* Roulette */}
                <button
                  className="absolute left-[50%] bottom-[17%] h-[20%] w-[20%] cursor-pointer bg-transparent"
                  onClick={() => handleItemClick("roulette")}
                  aria-label="Roulette"
                />
              </div>
            )}

            {/* Highlight circles for selected items */}
            {areOpen && selectedItem && (
              <div className="absolute inset-0 z-10 pointer-events-none">
                {selectedItem === "freezer" && (
                  <div className="absolute right-[-7%] bottom-[19%] h-[38%] w-[36%] rounded-full border-4 border-red-500 animate-pulse"></div>
                )}
                {selectedItem === "tiles" && (
                  <div className="absolute left-[17%] bottom-[3%] h-[13%] w-[35%] rounded-full border-4 border-red-500 animate-pulse"></div>
                )}
                {selectedItem === "horse" && (
                  <div className="absolute left-[8%] bottom-[17%] h-[48%] w-[44%] rounded-full border-4 border-red-500 animate-pulse"></div>
                )}
                {selectedItem === "clock" && (
                  <div className="absolute right-[8.5%] top-[4%] h-[20%] w-[15%] rounded-full border-4 border-red-500 animate-pulse"></div>
                )}
                {selectedItem === "jet" && (
                  <div className="absolute right-[44%] top-[8%] h-[10%] w-[15%] rounded-full border-4 border-red-500 animate-pulse"></div>
                )}
                {selectedItem === "tent" && (
                  <div className="absolute left-[15%] top-[20%] h-[40%] w-[20%] rounded-full border-4 border-red-500 animate-pulse"></div>
                )}
                {selectedItem === "roulette" && (
                  <div className="absolute left-[47%] bottom-[15%] h-[23%] w-[25%] rounded-full border-4 border-red-500 animate-pulse"></div>
                )}
              </div>
            )}

          </div>
              {/* Window glass effect - subtle reflection */}
              <div className="absolute inset-0 bg-sky-900 opacity-10 pointer-events-none"></div>

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
                  <div className="h-full w-full bg-gradient-to-r from-stone-900 to-stone-800 p-2 shadow-md">
                    {/* Shutter panels */}
                    <div className="grid h-full w-full grid-rows-3 gap-2 bg-stone-800">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center rounded border-2 border-stone-950 bg-gradient-to-br from-stone-700 to-stone-800 p-2 shadow-inner"
                        >
                          <div className="h-full w-full rounded border border-stone-600 shadow-inner"></div>
                        </div>
                      ))}
                    </div>

                    {/* Edge detail */}
                    <div className="absolute -right-1 inset-y-0 w-1 bg-stone-950"></div>
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
                  <div className="h-full w-full bg-gradient-to-l from-stone-900 to-stone-800 p-2 shadow-md">
                    {/* Shutter panels */}
                    <div className="grid h-full w-full grid-rows-3 gap-2 bg-stone-800">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center rounded border-2 border-stone-950 bg-gradient-to-br from-stone-700 to-stone-800 p-2 shadow-inner"
                        >
                          <div className="h-full w-full rounded border border-stone-600 shadow-inner"></div>
                        </div>
                      ))}
                    </div>

                    {/* Edge detail */}
                    <div className="absolute -left-1 inset-y-0 w-1 bg-stone-950"></div>
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

        {/* Controls */}
        </div>
        </div>
        <div className="w-full mt-4 flex justify-center gap-4 bg-[#000000]">
          <button
            onClick={() => setAreOpen(!areOpen)}
            className="font-[family-name:var(--font-love-craft)] cursor-pointer rounded-md bg-[#fcd598] px-4 py-2 text-[#000000] transition-colors hover:bg-[#e6c088]"
          >
            {areOpen ? "Close Shutters" : "Open Shutters"}
          </button>
        </div>
    </div>
  )
}
