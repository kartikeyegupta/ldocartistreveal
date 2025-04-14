'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Schedule() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [expandedBreakfast, setExpandedBreakfast] = useState(false);

  // Group breakfast events
  const breakfastEvents = [
    { sponsor: "Duke Stores", location: "Wannamaker Quad" },
    { sponsor: "Nasher Museum", location: "Craven Quad" },
    { sponsor: "Career Center", location: "Few Quad" },
    { sponsor: "Duke Libraries", location: "Kilgo Quad" },
    { sponsor: "Alumni Engagement and Development", location: "Keohane Quad" },
    { sponsor: "NSFP", location: "Edens Quad" },
    { sponsor: "OUE", location: "Crowell Quad" }
  ];

  const events = [
    { 
      time: "9:00 AM - 11:00 AM", 
      event: "Breakfast", 
      location: "", 
      categories: ["Free Food"],
      isBreakfast: true,
      subEvents: breakfastEvents
    },
    { time: "10:00 AM - 2:00 PM", event: "Chapel Activities - Lawn Games, Cotton Candy, Popcorn, and T-shirts", location: "Chapel Quad", categories: ["Giveaways"] },
    { time: "10:00 AM - 2:00 PM", event: "Poetry Fox", location: "WU", categories: ["Giveaways"] },
    { time: "10:00 AM - 12:00 PM", event: "VR Escape Room", location: "Link", categories: ["Giveaways"] },
    { time: "10:00 AM - 10:45 AM", event: "Yoga", location: "K-Ville", categories: [] },
    { time: "10:30 AM - 12:30 PM", event: "DuWell Narcan Training", location: "BC Plaza", categories: [] },
    { time: "11:00 AM - 12:40 PM", event: "Dance Performances", location: "BC Plaza Stage", categories: [] },
    { time: "11:00 AM - 1:00 PM", event: "VisArts Flower Crown Making + Cowboy Hat Decorating", location: "Chapel Quad", categories: ["Giveaways"] },
    { time: "11:00 AM - 3:00 PM", event: "Duke Rec Lawn Games", location: "K-Ville", categories: [] },
    { time: "11:00 AM - 2:00 PM", event: "Food Trucks", location: "Wellness Lot", categories: ["Free Food"] },
    { time: "11:30 AM - 2:30 PM", event: "Chapel Climbs", location: "Chapel", categories: [] },
    { time: "11:30 AM - 4:30 PM", event: "Sensory Friendly Programming", location: "Academic Resource Center - East Campus", categories: [] },
    { time: "12:00 PM - 2:00 PM", event: "SPEV Wall Art", location: "BC Plaza", categories: ["Giveaways"] },
    { time: "12:00 PM - 3:30 PM", event: "Zim Zoom - Photo Booth", location: "BC Plaza", categories: [] },
    { time: "12:00 PM - 2:00 PM", event: "Tote Bags", location: "Chapel Quad", categories: ["Giveaways"] },
    { time: "12:00 PM - 3:00 PM", event: "Tarot Card Readings", location: "Chapel Quad", categories: [] },
    { time: "12:00 PM - 2:00 PM", event: "Cynanotypes with DukeArts", location: "Chapel Quad", categories: ["Giveaways"] },
    { time: "12:00 PM - 2:00 PM", event: "Mindfulness Painting", location: "Wellness", categories: [] },
    { time: "12:30 PM - 2:30 PM", event: "STR Postcards", location: "BC Plaza Stage", categories: ["Giveaways"] },
    { time: "12:30 PM - 2:00 PM", event: "Jazz@", location: "BC Plaza Bookstore Stage", categories: [] },
    { time: "12:30 PM - 2:30 PM", event: "Succulents/Mini Pot Station", location: "BC Plaza", categories: ["Giveaways"] },
    { time: "1:00 PM - 3:00 PM", event: "Ice cream, Popcorn, Cotton Candy", location: "BC Plaza", categories: ["Free Food"] },
    { time: "1:00 PM - 3:00 PM", event: "Face Painting", location: "BC Plaza", categories: [] },
    { time: "1:00 PM - 5:00 PM", event: "The Devil's Blooming Garden", location: "Crowell Quad", categories: ["Darties"] },
    { time: "1:00 PM - 4:00 PM", event: "BSA Cookout", location: "Keohane Quad", categories: ["Free Food"] },
    { time: "1:00 PM - 5:00 PM", event: "Summer in the Spring", location: "Few GG/HH Quad", categories: ["Darties"] },
    { time: "1:00 PM - 5:00 PM", event: "Spring Fling", location: "Few FF/GG Quad", categories: ["Darties"] },
    { time: "1:00 PM - 5:00 PM", event: "Sunny Spring Bash", location: "Quad between Few and Craven", categories: ["Darties"] },
    { time: "1:00 PM - 5:00 PM", event: "Spring into Summer", location: "Craven Quad", categories: ["Darties"] },
    { time: "1:00 PM - 5:00 PM", event: "Sunflower Power Hour", location: "Kilgo Quad", categories: ["Darties"] },
    { time: "1:00 PM - 4:00 PM", event: "East Farewell Fiesta", location: "Wannamaker Quad", categories: ["Darties"] },
    { time: "2:00 PM - 6:00 PM", event: "LLDOC: Senior Sendoff", location: "Clocktower Quad", categories: ["Darties"] },
    { time: "1:00 PM - 4:00 PM", event: "Casino Games", location: "Outside Kraft - WU", categories: [] },
    { time: "1:00 PM - 2:00 PM", event: "Duke@Nite Trivia", location: "Inside Kraft - WU", categories: [] },
    { time: "2:00 PM - 4:00 PM", event: "I&E Events - Polaroids, Popsicles, Lawn Games", location: "BC Plaza", categories: ["Giveaways", "Free Food"] },
    { time: "2:00 PM - 3:30 PM", event: "Stuff-a-Critter", location: "Chapel Quad", categories: ["Giveaways"] },
    { time: "2:00 PM - 4:00 PM", event: "Karaoke", location: "Wellness", categories: [] },
    { time: "3:00 PM - 6:00 PM", event: "Penn Pavilion BBQ", location: "Penn Pavilion", categories: ["Free Food"] },
    { time: "3:30 PM - 5:00 PM", event: "Duke PAWS", location: "BC Plaza", categories: [] },
    { time: "10:00 PM - 11:59 PM", event: "Food Trucks", location: "Wellness Lot", categories: ["Free Food"] },
    { time: "10:00 PM - 10:30 PM", event: "Midnight Pizza", location: "Chapel Quad", categories: ["Free Food"] }
  ];

  // Function to parse time string into minutes since midnight
  const parseTimeToMinutes = (timeStr: string) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    return (hours % 12 + (period === 'PM' ? 12 : 0)) * 60 + minutes;
  };

  // Function to get start and end times from time range
  const getEventTimes = (timeRange: string) => {
    const [startTime, endTime] = timeRange.split(' - ');
    return {
      start: parseTimeToMinutes(startTime),
      end: parseTimeToMinutes(endTime)
    };
  };

  // Sort events by start time, then by end time
  const sortedEvents = [...events].sort((a, b) => {
    const aTimes = getEventTimes(a.time);
    const bTimes = getEventTimes(b.time);
    if (aTimes.start !== bTimes.start) {
      return aTimes.start - bTimes.start;
    }
    return aTimes.end - bTimes.end;
  });

  // Get unique locations
  const locations = Array.from(new Set(sortedEvents.map(event => {
    // Combine Few Quad locations
    if (event.location.includes('Few Quad') || event.location.includes('Few GG/HH Quad') || event.location.includes('Few FF/GG Quad')) {
      return 'Few Quad';
    }
    // Combine BC Plaza locations
    if (event.location.includes('BC Plaza') || event.location.includes('BC Plaza Stage') || event.location.includes('BC Plaza Bookstore Stage')) {
      return 'BC Plaza';
    }
    // Combine Wellness locations
    if (event.location.includes('Wellness') || event.location.includes('Wellness Lot')) {
      return 'Wellness';
    }
    return event.location;
  }))).sort();

  const filteredEvents = sortedEvents
    .filter(event => {
      if (activeFilter && !event.categories.includes(activeFilter)) {
        return false;
      }
      if (selectedLocation) {
        // Handle combined location filtering
        if (selectedLocation === 'Few Quad' && 
            (event.location.includes('Few Quad') || 
             event.location.includes('Few GG/HH Quad') || 
             event.location.includes('Few FF/GG Quad'))) {
          return true;
        }
        if (selectedLocation === 'BC Plaza' && 
            (event.location.includes('BC Plaza') || 
             event.location.includes('BC Plaza Stage') || 
             event.location.includes('BC Plaza Bookstore Stage'))) {
          return true;
        }
        if (selectedLocation === 'Wellness' && 
            (event.location.includes('Wellness') || 
             event.location.includes('Wellness Lot'))) {
          return true;
        }
        // Handle breakfast event locations
        if (event.isBreakfast) {
          return event.subEvents.some(breakfast => {
            if (selectedLocation === 'Few Quad' && breakfast.location.includes('Few Quad')) return true;
            if (selectedLocation === 'BC Plaza' && breakfast.location.includes('BC Plaza')) return true;
            if (selectedLocation === 'Wellness' && breakfast.location.includes('Wellness')) return true;
            return breakfast.location === selectedLocation;
          });
        }
        if (event.location !== selectedLocation) {
          return false;
        }
      }
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          event.event.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query) ||
          event.time.toLowerCase().includes(query) ||
          (event.isBreakfast && event.subEvents.some(breakfast => 
            breakfast.sponsor.toLowerCase().includes(query) ||
            breakfast.location.toLowerCase().includes(query)
          ))
        );
      }
      return true;
    });

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

        <div className="container mx-auto px-4 py-4 md:py-8">
          <h1 className="text-center text-3xl md:text-[4vw] font-[family-name:var(--font-love-craft)] text-[#d14d72] mb-6 md:mb-12">
            LDOC 2025 Schedule
          </h1>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6 md:mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events, locations, or times..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white/10 border-2 border-[#ef959e] text-[#d14d72] placeholder-[#ef959e] focus:outline-none focus:border-[#d14d72] font-[family-name:var(--font-love-craft)] text-sm md:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ef959e] hover:text-[#d14d72]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-4 py-2 rounded-full font-[family-name:var(--font-love-craft)] transition-colors ${
                activeFilter === null
                  ? 'bg-[#d14d72] text-white'
                  : 'bg-white/10 text-[#d14d72] hover:bg-[#ef959e] hover:text-white'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveFilter("Free Food")}
              className={`px-4 py-2 rounded-full font-[family-name:var(--font-love-craft)] transition-colors ${
                activeFilter === "Free Food"
                  ? 'bg-[#d14d72] text-white'
                  : 'bg-white/10 text-[#d14d72] hover:bg-[#ef959e] hover:text-white'
              }`}
            >
              Free Food
            </button>
            <button
              onClick={() => setActiveFilter("Giveaways")}
              className={`px-4 py-2 rounded-full font-[family-name:var(--font-love-craft)] transition-colors ${
                activeFilter === "Giveaways"
                  ? 'bg-[#d14d72] text-white'
                  : 'bg-white/10 text-[#d14d72] hover:bg-[#ef959e] hover:text-white'
              }`}
            >
              Giveaways
            </button>
            <button
              onClick={() => setActiveFilter("Darties")}
              className={`px-4 py-2 rounded-full font-[family-name:var(--font-love-craft)] transition-colors ${
                activeFilter === "Darties"
                  ? 'bg-[#d14d72] text-white'
                  : 'bg-white/10 text-[#d14d72] hover:bg-[#ef959e] hover:text-white'
              }`}
            >
              Darties
            </button>
          </div>

          {/* Location Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <select
                value={selectedLocation || ''}
                onChange={(e) => setSelectedLocation(e.target.value || null)}
                className="w-full px-4 py-3 rounded-full bg-white/10 border-2 border-[#ef959e] text-[#d14d72] font-[family-name:var(--font-love-craft)] text-sm md:text-base appearance-none cursor-pointer focus:outline-none focus:border-[#d14d72]"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#ef959e]">
                ▼
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {filteredEvents.map((event, index) => (
              <div 
                key={index} 
                className="mb-4 md:mb-8 relative flex items-center group hover:transform hover:scale-105 transition-transform"
              >
                {/* Timeline dot and line */}
                <div className="absolute left-[12px] md:left-[20px] top-0 bottom-0 w-1 bg-[#ef959e] group-hover:bg-[#d14d72] transition-colors"/>
                <div className="absolute left-[8px] md:left-[16px] top-[50%] w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#ef959e] group-hover:bg-[#d14d72] transition-colors"/>

                {/* Event content */}
                <div className="ml-8 md:ml-12 p-3 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-[#ef959e] w-full">
                  <div className="text-sm md:text-[2vw] font-[family-name:var(--font-love-craft)] text-[#ef959e] group-hover:text-[#d14d72] transition-colors">
                    {event.time}
                  </div>
                  <div className="text-lg md:text-[3vw] font-[family-name:var(--font-love-craft)] text-[#d14d72]">
                    {event.event}
                  </div>
                  <div className="text-xs md:text-[1.5vw] font-[family-name:var(--font-love-craft)] text-[#ef959e]">
                    {event.location}
                  </div>
                  {event.isBreakfast && (
                    <div className="mt-3">
                      <button
                        onClick={() => setExpandedBreakfast(!expandedBreakfast)}
                        className="w-full px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-[#d14d72] font-[family-name:var(--font-love-craft)] flex items-center justify-between transition-colors"
                      >
                        <span>View Locations</span>
                        <span className="text-lg">{expandedBreakfast ? '▼' : '▶'}</span>
                      </button>
                      {expandedBreakfast && (
                        <div className="mt-3 space-y-2">
                          {event.subEvents.map((breakfast, i) => (
                            <div 
                              key={i} 
                              className="px-4 py-2 rounded-lg bg-white/10 border border-[#ef959e]/30 hover:bg-white/20 transition-colors"
                            >
                              <div className="text-[#d14d72] font-[family-name:var(--font-love-craft)]">
                                {breakfast.sponsor} - {breakfast.location}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {event.categories.length > 0 && !event.isBreakfast && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {event.categories.map((category, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-[#ef959e] text-white"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
