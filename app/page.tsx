'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Schedule() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [expandedBreakfast, setExpandedBreakfast] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedDance, setExpandedDance] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAlcoholPolicy, setShowAlcoholPolicy] = useState(false);
  const [expandedConcert, setExpandedConcert] = useState(true);
  const [expandedFoodTrucks, setExpandedFoodTrucks] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{[key: string]: boolean}>({});
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Show overlay after 1.5 seconds
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Show alcohol policy after overlay appears
  useEffect(() => {
    if (showOverlay) {
      const timer = setTimeout(() => {
        setShowAlcoholPolicy(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [showOverlay]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Group breakfast events
  const breakfastEvents = [
    { sponsor: "Duke Stores", location: "Wannamaker Quad" },
    { sponsor: "Nasher Museum", location: "Craven Quad" },
    { sponsor: "Career Center", location: "Few Quad" },
    { sponsor: "Duke Libraries", location: "Kilgo Quad" },
    { sponsor: "Alumni Engagement and Development", location: "Keohane Quad" },
    { sponsor: "NSFP", location: "Edens Quad" },
    { sponsor: "OUE", location: "Crowell Quad" },
    { sponsor: "Marketing and Communications", location: "Hollows Quad" }
  ];

  const events = [
    { 
      time: "9:00 AM - 11:00 AM", 
      event: "Breakfast", 
      location: "", 
      categories: ["Food"],
      isBreakfast: true,
      subEvents: breakfastEvents
    },
    { time: "10:00 AM - 2:00 PM", event: "Chapel Activities - Lawn Games, Cotton Candy, Popcorn, and T-shirts", location: "Chapel Quad", categories: ["Food", "Interactive Events", "Giveaways"] },
    { time: "10:00 AM - 2:00 PM", event: "Poetry Fox", location: "WU", categories: ["Interactive Events"] },
    { time: "10:00 AM - 12:00 PM", event: "VR Escape Room", location: "Link MPS Studio - Between Link and Bostock", categories: ["Interactive Events", "Substance Free"] },
    { 
      time: "10:00 AM - 10:45 AM", 
      event: "Yoga", 
      location: "K-Ville", 
      categories: ["Interactive Events", "Substance Free"],
      description: "Start your LDOC the chill way with an outdoor yoga session on Kville! Flow, stretch, and vibe with us at 10AM– no experience needed. Bring a mat if you have one; we've got extras if you don't. Let's soak up the sun and good energy before the celebrations begin!"
    },
    { time: "10:30 AM - 12:30 PM", event: "DuWell Narcan Training", location: "BC Plaza", categories: ["Interactive Events", "Substance Free"] },
    { 
      time: "11:00 AM - 12:40 PM", 
      event: "Dance/Singing Performances", 
      location: "BC Plaza Stage", 
      categories: ["Interactive Events"],
      isDance: true,
      subEvents: [
        { group: "Swing", time: "11:00 AM - 11:20 AM" },
        { group: "Out of the Blue", time: "11:20 AM - 11:40 AM" },
        { group: "Deja Blue", time: "11:40 AM - 12:00 PM" },
        { group: "Street Med", time: "12:00 PM - 12:20 PM" },
        { group: "Sabrosura", time: "12:20 PM - 12:40 PM" }
      ]
    },
    { 
      time: "5:30 PM - 10:30 PM", 
      event: "LDOC Concert", 
      location: "Abele Quad", 
      categories: ["Concert"],
      isConcert: true,
      subEvents: [
        { artist: "Hannon Stern", time: "5:30 PM - 6:00 PM" },
        { artist: "Penelope Road", time: "6:30 PM - 7:30 PM" },
        { artist: "Rich The Kid", time: "8:00 PM - 9:00 PM" },
        { artist: "Natasha Bedingfield", time: "9:30 PM - 10:30 PM" },
        { artist: "Ansh & Anna", time: "In Between Sets" }
      ]
    },
    { time: "10:00 AM - 12:00 PM", event: "VisArts Flower Crown Making + Cowboy Hat Decorating", location: "Chapel Quad", categories: ["Giveaways", "Interactive Events"] },
    { time: "11:00 AM - 3:00 PM", event: "Duke Rec Lawn Games", location: "K-Ville", categories: ["Interactive Events", "Substance Free"] },
    { time: "11:00 AM - 2:00 PM", event: "Food Trucks", location: "Wellness Lot", categories: ["Food"], isFoodTruck: true, subEvents: [
      { vendor: "Latin Effect", time: "11:00 AM - 2:00 PM" },
      { vendor: "Bon Fritay", time: "11:00 AM - 2:00 PM" },
      { vendor: "Bulkogi", time: "11:00 AM - 2:00 PM" },
      { vendor: "The Flat Drum", time: "11:00 AM - 2:00 PM" }
    ] },
    { time: "11:30 AM - 2:30 PM", event: "Chapel Climbs - SIGN UP ON DUKEGROUPS!", location: "Chapel", categories: ["Interactive Events", "Substance Free"] },
    { 
      time: "11:30 AM - 4:30 PM", 
      event: "Sensory Friendly Programming", 
      location: "Academic Resource Center - East Campus", 
      categories: ["Interactive Events", "Substance Free"],
      description: "Drop by the ARC for a low-key, sensory-friendly craft and snack hang out. Stay as long as you like - no pressure. Ideal for students who want to get creative and meet people but prefer smaller groups. All materials provided."
    },
    { 
      time: "12:00 PM - 2:00 PM", 
      event: "SPEV Wall Art", 
      location: "BC Plaza", 
      categories: ["Interactive Events"],
      description: "DUU Special Events, (aka Spev) hosts a variety of large, campus-wide events that cater towards the ever-changing needs of the diverse Duke body. On LDOC, join Spev outside WU to celebrate the end of classes with a burst of color! Come add your paint, your style, and your voice to our collaborative Graffiti Wall!"
    },
    { time: "12:00 PM - 3:30 PM", event: "Zim Zoom - Photo Booth", location: "BC Plaza", categories: ["Interactive Events"] },
    { time: "12:00 PM - 2:00 PM", event: "Tote Bags", location: "Chapel Quad", categories: ["Giveaways", "Interactive Events"] },
    { time: "12:00 PM - 3:00 PM", event: "Tarot Card Readings", location: "Chapel Quad", categories: ["Interactive Events"] },
    { time: "12:00 PM - 2:00 PM", event: "Cynanotypes with DukeArts", location: "Chapel Quad", categories: ["Giveaways", "Interactive Events"] },
    { time: "12:00 PM - 2:00 PM", event: "Mindfulness Painting", location: "Wellness Center, 2nd Floor Atrium", categories: ["Interactive Events", "Substance Free"] },
    { 
      time: "12:30 PM - 2:30 PM", 
      event: "STR Postcards", 
      location: "BC Plaza Stage", 
      categories: ["Interactive Events", "Giveaways"],
      description: "Join Small Town Records and take a minute out of your LDOC to write a postcard to a friend or loved one📬 LDOC x STR postcards will be set up on the BC Plaza stage starting at 12:30. Stamps and supplies included! And don't miss STR's Hannon Stern performing at 5:30 on Abele Quad!"
    },
    { 
      time: "12:30 PM - 2:00 PM", 
      event: "Jazz@", 
      location: "BC Plaza Bookstore Stage", 
      categories: ["Interactive Events"],
      description: "Jazz@ is a student organization that seeks to connect the jazz artist with the jazz audience at Duke. We provide live jazz concerts and jazz-related events across campus throughout the year, including favorites like Jazz@ the Mary Lou and the annual Vocal Night. Come join us on and around the Duke Store stage (the bookstore side) 12:30pm on LDOC for lots of jazz tunes, great energy, and special Jazz@ LDOC merch!"
    },
    { time: "12:30 PM - 2:30 PM", event: "Succulents/Mini Pot Station", location: "BC Plaza", categories: ["Interactive Events", "Giveaways"] },
    { time: "1:00 PM - 3:00 PM", event: "Ice cream,  Popcorn, Cotton Candy", location: "BC Plaza", categories: ["Food"] },
    { time: "1:00 PM - 3:00 PM", event: "Face Painting", location: "BC Plaza", categories: ["Interactive Events"] },
    { 
      time: "1:00 PM - 5:00 PM", 
      event: "The Devil's Blooming Garden", 
      location: "Crowell Quad - Pike & Wayne", 
      categories: ["Darties"],
      description: "Join Pike and Wayne at the Devil's Blooming Garden in Crowell Quad. Music that embraces nature will permeate the space, daring the listeners to surrender themselves to the beauty of spring. Everyone is welcome in the Garden. Good music. Good eats. Good times."
    },
    { time: "1:00 PM - 4:00 PM", event: "BSA Cookout", location: "Keohane Quad", categories: ["Food"] },
    { 
      time: "1:00 PM - 5:00 PM", 
      event: "Summer in the Spring", 
      location: "Few GG/HH Quad - Theta Chi", 
      categories: ["Darties"],
      description: "Join Theta Chi in the Few GG/HH Quad for a fun-filled summer-vibe-themed event! Join us for delicious food, refreshing summer drinks, music, and lawn games that will transport you to sunny paradise. Bring your friends and soak up the good vibes"
    },
    { 
      time: "1:00 PM - 5:00 PM", 
      event: "Flowers for Finals", 
      location: "Few FF/GG Quad - Sigma Chi & Pikapp", 
      categories: ["Darties"],
      description: "Come party into the LDOC performances with Sigma Chi and Pikapp at Flowers for Finals! As the afternoon passes, DJs will light up Few FF/GG quad with B2Bs and music for all. Join us in celebrating the Spring weather and taking a break from the workload of classes with drinks, food, and fun for all. Bring your friends, soak up the sun, and let's make this LDOC one to remember!"
    },
    { 
      time: "1:00 PM - 5:00 PM", 
      event: "Sunny Spring Bash", 
      location: "Quad between Few and Craven - ATO & SNU", 
      categories: ["Darties"],
      description: "Join ATO & SNU in celebrating LDOC with food, drinks, and outdoor games that capture the spirit of spring! Enjoy delicious refreshments and engage in fun activities like cornhole as we bid farewell to the semester and welcome the sunny days ahead!"
    },
    { 
      time: "1:00 PM - 5:00 PM", 
      event: "Spring into Summer", 
      location: "Craven Quad - ADPhi & KA", 
      categories: ["Darties"],
      description: "ADPhi and KA are bringing sunshine and fun times to Craven Quad for LDOC! Join in celebrating the joy of spring with delicious food, cold treats, and good fun. Come for the food and activities and leave with LDOC memories!"
    },
    { 
      time: "1:00 PM - 5:00 PM", 
      event: "Sunflower Power Hour", 
      location: "Kilgo Quad - Mirecourt, Illyria, Browstone, Round Table, Maxwell & Duke Dhamaka", 
      categories: ["Darties"],
      description: "Join the SLGs and Duke Dhamaka in Kilgo Quad where we combine vibrant spring-themed activities with cultural heritage! Enjoy flower crown making, beaded jewelry, and a fun contest to crown the Spring Queen/King, all while celebrating the Punjabi harvest festival with music, dance, and delicious food. Don't forget the classic GrillGo with lots of yums coming from the Kilgo grills!"
    },
    { 
      time: "1:00 PM - 4:00 PM", 
      event: "East Farewell Fiesta", 
      location: "Wannamaker Quad - Class of 2028 & East Campus Council ", 
      categories: ["Darties"],
      description: "Join the Class of 2028 outside Wannamaker Quad for a lively celebration hosted by the East Campus Council! Enjoy music, food, fun activities, and more as we bid farewell to Easton this LDOC and welcome the exciting experience of living on West!"
    },
    { 
      time: "2:00 PM - 6:00 PM", 
      event: "LLDOC: Senior Sendoff", 
      location: "Clocktower Quad - Class of 2025, Blue Light, Swift & Hollows Quad Councils", 
      categories: ["Darties"],
      description: "The Class of 2025, along with the Blue Light, Swift, and Hollows Quad Councils, invite all seniors to Clocktower Quad for their LAST Last Day of Classes and a memorable sendoff celebration! Enjoy a festive beer garden atmosphere with delicious food, refreshing drinks, and don't miss the champagne toast at 5 PM (make sure you are in the beer garden by 4:45 to participate!) to celebrate your achievements and the exciting journey ahead!"
    },
    { time: "1:00 PM - 4:00 PM", event: "Casino Games", location: "Outside Kraft - WU", categories: ["Interactive Events"] },
    { time: "1:00 PM - 2:00 PM", event: "Duke@Nite Trivia", location: "Inside Kraft - WU", categories: ["Interactive Events"] },
    { time: "2:00 PM - 4:00 PM", event: "I&E Events - Polaroids, Popsicles, Lawn Games", location: "BC Plaza", categories: ["Interactive Events", "Giveaways", "Food", "Substance Free"] },
    { time: "2:00 PM - 3:30 PM", event: "Stuff-a-Critter", location: "Chapel Quad", categories: ["Interactive Events", "Giveaways"] },
    { time: "2:00 PM - 4:00 PM", event: "Karaoke", location: "Wellness Center, Rm 148", categories: ["Interactive Events", "Substance Free"] },
    { time: "3:00 PM - 6:00 PM", event: "Penn Pavilion BBQ", location: "Penn Pavilion", categories: ["Food"] },
    { time: "3:30 PM - 5:00 PM", event: "Duke PAWS - Therapy Dogs", location: "BC Plaza", categories: ["Interactive Events", "Substance Free"] },
    { time: "10:00 PM - 11:59 PM", event: "Food Trucks", location: "Wellness Lot", categories: ["Food"], isFoodTruck: true, subEvents: [
      { vendor: "Bruster's", time: "10:00 PM - 11:59 PM" },
      { vendor: "Sister Liu's", time: "10:00 PM - 11:59 PM" },
      { vendor: "Gussy's", time: "10:00 PM - 11:59 PM" },
      { vendor: "Yalla!", time: "10:00 PM - 11:59 PM" }
    ] },
    { time: "10:00 PM - 10:30 PM", event: "Midnight Pizza", location: "Chapel Quad", categories: ["Food"] }
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
    // Combine WU locations
    if (event.location.includes('Inside Kraft - WU') || event.location.includes('Outside Kraft - WU')) {
      return 'WU';
    }
    // Combine Wellness locations
    if (event.location.includes('Wellness') || event.location.includes('Wellness Lot')) {
      return 'Wellness';
    }
    // Cut Down Clocktower locations
    if (event.location.includes('Clocktower Quad')) {
      return 'Clocktower Quad';
    }
    // Cut Down Craven locations
    if (event.location.includes('Craven Quad')) {
      return 'Craven Quad';
    }
   // Cut Down Crowell locations
   if (event.location.includes('Crowell Quad')) {
    return 'Crowell Quad';
  }
  // Cut Down Kilgo locations
  if (event.location.includes('Kilgo Quad')) {
    return 'Kilgo Quad';
  }
  // Cut Down Quad between Few and Craven locations
  if (event.location.includes('Quad between Few and Craven')) {
    return 'Quad between Few and Cravend';
  }
  // Cut Down Wannamaker locations
  if (event.location.includes('Wannamaker Quad')) {
    return 'Wannamaker Quad';
  }
  if (event.location.includes('Link MPS Studio')) {
    return 'Perkins Link';
  }
    return event.location;
  }))).filter(location => location.trim() !== '').sort();

  const filteredEvents = sortedEvents
    .filter(event => {
      if (activeFilter && !event.categories.includes(activeFilter)) {
        return false;
      }
      if (selectedLocation) {
        // Handle combined location filtering
        if (selectedLocation === 'WU' && 
            (event.location.includes('Inside Kraft - WU') || 
             event.location.includes('Outside Kraft - WU'))) {
          return true;
        }
        if (selectedLocation === 'Clocktower Quad' && 
          (event.location.includes('Clocktower Quad'))) {
        return true;
        }
        if (selectedLocation === 'Craven Quad' && 
          (event.location.includes('Craven Quad'))) {
        return true;
        }
        if (selectedLocation === 'Crowell Quad' && 
          (event.location.includes('Crowell Quad'))) {
        return true;
        }
        if (selectedLocation === 'Kilgo Quad' && 
          (event.location.includes('Kilgo Quad'))) {
        return true;
        }
        if (selectedLocation === 'Wannamaker Quad' && 
          (event.location.includes('Wannamaker Quad'))) {
        return true;
        }
        if (selectedLocation === 'Quad between Few and Craven' && 
          (event.location.includes('Quad between Few and Craven'))) {
        return true;
        }
        if (selectedLocation === 'Perkins Link' && 
          (event.location.includes('Link MPS Studio'))) {
        return true;
        }
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
      {showOverlay && showBanner && (
        <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#d14d72] to-[#ef959e] text-white z-50 shadow-lg">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-base sm:text-lg">🎟️</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-love-craft)] text-base sm:text-lg">Wristbanding </span>
                  <span className="text-xs sm:text-sm text-white/90">Duke ID required for entry</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-love-craft)]">21</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-[family-name:var(--font-love-craft)] text-sm sm:text-base">April 21</span>
                    <span className="text-xs sm:text-sm text-white/90">10:30AM – 7:30PM | Wellness 148 </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-love-craft)]">22</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-[family-name:var(--font-love-craft)] text-sm sm:text-base">April 22 </span>
                    <span className="text-xs sm:text-sm text-white/90">9:30AM – 4:45PM | Wellness 148</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowBanner(false)}
                className="absolute right-2 top-2 sm:relative sm:right-auto sm:top-auto p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Dismiss"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-[#fcd598]">
        {/* Base logo */}
        <div className={`grid place-items-center min-h-screen ${showOverlay ? 'hidden' : ''}`}>
          <Image 
            src="/poster.png" 
            alt="LDOC" 
            className="w-[90vw] md:w-[45vw] h-auto animate-fadeIn"
            width={1500}
            height={1500}
            priority
          />
        </div>

        {/* Overlay content */}
        <div className={`absolute inset-0 bg-[#fcd598] flex flex-col items-center transition-opacity duration-1000 ${showBanner && showOverlay ? 'mt-40 lg:mt-25 md:mt-30 sm:mt-30' : ''} ${showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
            <h1 className="text-center text-3xl md:text-[4vw] font-[family-name:var(--font-love-craft)] text-[#d14d72] mb-2 md:mb-4">
              LDOC Schedule
            </h1>
            <p className="text-center text-xl md:text-2xl font-[family-name:var(--font-love-craft)] text-[#ef959e] mb-6 md:mb-12">
              Wednesday, April 23, 2025
            </p>

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
                All
              </button>
              <button
                onClick={() => setActiveFilter("Food")}
                className={`px-4 py-2 rounded-full font-[family-name:var(--font-love-craft)] transition-colors ${
                  activeFilter === "Food"
                    ? 'bg-[#d14d72] text-white'
                    : 'bg-white/10 text-[#d14d72] hover:bg-[#ef959e] hover:text-white'
                }`}
              >
                Food
              </button>
              <button
                onClick={() => setActiveFilter("Interactive Events")}
                className={`px-4 py-2 rounded-full font-[family-name:var(--font-love-craft)] transition-colors ${
                  activeFilter === "Interactive Events"
                    ? 'bg-[#d14d72] text-white'
                    : 'bg-white/10 text-[#d14d72] hover:bg-[#ef959e] hover:text-white'
                }`}
              >
                Interactive
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
              <button
                onClick={() => {
                  setActiveFilter("Concert");
                  setExpandedConcert(true);
                }}
                className={`px-4 py-2 rounded-full font-[family-name:var(--font-love-craft)] transition-colors ${
                  activeFilter === "Concert"
                    ? 'bg-[#d14d72] text-white'
                    : 'bg-white/10 text-[#d14d72] hover:bg-[#ef959e] hover:text-white'
                }`}
              >
                Concert
              </button>
              <button
                onClick={() => setActiveFilter("Substance Free")}
                className={`px-4 py-2 rounded-full font-[family-name:var(--font-love-craft)] transition-colors ${
                  activeFilter === "Substance Free"
                    ? 'bg-[#d14d72] text-white'
                    : 'bg-white/10 text-[#d14d72] hover:bg-[#ef959e] hover:text-white'
                }`}
              >
                Substance Free
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
                  <div className="absolute left-[10px] md:left-[17px] top-[50%] w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#ef959e] group-hover:bg-[#d14d72] transition-colors"/>

                  {/* Event content */}
                  <div className="ml-8 md:ml-12 p-2 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-[#ef959e] w-full">
                    <div className="text-xs md:text-base font-[family-name:var(--font-love-craft)] text-[#ef959e] group-hover:text-[#d14d72] transition-colors">
                      {event.time}
                    </div>
                    <div className="text-base md:text-xl font-[family-name:var(--font-love-craft)] text-[#d14d72]">
                      {event.event}
                    </div>
                    <div className="text-xs md:text-sm font-[family-name:var(--font-love-craft)] text-[#ef959e]">
                      {event.location}
                    </div>
                    {event.isBreakfast && (
                      <div className="mt-2">
                        <button
                          onClick={() => setExpandedBreakfast(!expandedBreakfast)}
                          className="w-full px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-[#d14d72] font-[family-name:var(--font-love-craft)] flex items-center justify-between transition-colors text-sm"
                        >
                          <span>View Locations</span>
                          <span className="text-base">{expandedBreakfast ? '▼' : '▶'}</span>
                        </button>
                        {expandedBreakfast && (
                          <div className="mt-2 space-y-1">
                            {event.subEvents.map((breakfast, i) => (
                              <div 
                                key={i} 
                                className="px-3 py-1 rounded-lg bg-white/10 border border-[#ef959e]/30 hover:bg-white/20 transition-colors text-sm"
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
                    {event.isDance && (
                      <div className="mt-2">
                        <button
                          onClick={() => setExpandedDance(!expandedDance)}
                          className="w-full px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-[#d14d72] font-[family-name:var(--font-love-craft)] flex items-center justify-between transition-colors text-sm"
                        >
                          <span>View Groups</span>
                          <span className="text-base">{expandedDance ? '▼' : '▶'}</span>
                        </button>
                        {expandedDance && (
                          <div className="mt-2 space-y-1">
                            {event.subEvents.map((dance, i) => (
                              <div 
                                key={i} 
                                className="px-3 py-1 rounded-lg bg-white/10 border border-[#ef959e]/30 hover:bg-white/20 transition-colors text-sm"
                              >
                                <div className="text-[#d14d72] font-[family-name:var(--font-love-craft)]">
                                  {dance.group} - {dance.time}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {event.isConcert && (
                      <div className="mt-2">
                        <button
                          onClick={() => setExpandedConcert(!expandedConcert)}
                          className="w-full px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-[#d14d72] font-[family-name:var(--font-love-craft)] flex items-center justify-between transition-colors text-sm"
                        >
                          <span>View Lineup</span>
                          <span className="text-base">{expandedConcert ? '▼' : '▶'}</span>
                        </button>
                        {expandedConcert && (
                          <div className="mt-2 space-y-1">
                            {event.subEvents.map((concert, i) => (
                              <div 
                                key={i} 
                                className="px-3 py-1 rounded-lg bg-white/10 border border-[#ef959e]/30 hover:bg-white/20 transition-colors text-sm"
                              >
                                <div className="text-[#d14d72] font-[family-name:var(--font-love-craft)]">
                                  {concert.artist} - {concert.time}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {event.isFoodTruck && (
                      <div className="mt-2">
                        <button
                          onClick={() => setExpandedFoodTrucks(!expandedFoodTrucks)}
                          className="w-full px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-[#d14d72] font-[family-name:var(--font-love-craft)] flex items-center justify-between transition-colors text-sm"
                        >
                          <span>View Food Trucks</span>
                          <span className="text-base">{expandedFoodTrucks ? '▼' : '▶'}</span>
                        </button>
                        {expandedFoodTrucks && (
                          <div className="mt-2 space-y-1">
                            {event.subEvents.map((truck, i) => (
                              <div 
                                key={i} 
                                className="px-3 py-1 rounded-lg bg-white/10 border border-[#ef959e]/30 hover:bg-white/20 transition-colors text-sm"
                              >
                                <div className="text-[#d14d72] font-[family-name:var(--font-love-craft)]">
                                  {truck.vendor} - {truck.time}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {event.categories.length > 0 && !event.isBreakfast && !event.isDance && !event.isConcert && !event.isFoodTruck && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {event.categories.map((category, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveFilter(category)}
                            className="text-xs px-2 py-0.5 rounded-full bg-[#ef959e] text-white hover:bg-[#d14d72] transition-colors cursor-pointer font-[family-name:var(--font-love-craft)]"
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    )}
                    {event.description && (
                      <div className="mt-2">
                        <button
                          onClick={() => setExpandedDescriptions(prev => ({
                            ...prev,
                            [event.event]: !prev[event.event]
                          }))}
                          className="w-full px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-[#d14d72] font-[family-name:var(--font-love-craft)] flex items-center justify-between transition-colors text-sm"
                        >
                          <span>View Description</span>
                          <span className="text-base">{expandedDescriptions[event.event] ? '▼' : '▶'}</span>
                        </button>
                        {expandedDescriptions[event.event] && (
                          <div className="mt-2 px-3 py-2 rounded-lg bg-white/10 border border-[#ef959e]/30 text-[#d14d72] font-[family-name:var(--font-love-craft)] text-sm">
                            {event.description}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alcohol Policy Popup */}
        {showAlcoholPolicy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="relative bg-[#fcd598] p-4 sm:p-6 rounded-lg w-[75%] sm:w-[70%] md:w-[40%] lg:w-[40%] xl:w-[30%] max-h-[90vh] overflow-y-auto">
              <div className="flex flex-col items-center">
                <Image 
                  src="/alcoholpolicy.png" 
                  alt="LDOC Alcohol Policy" 
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
                <button
                  onClick={() => setShowAlcoholPolicy(false)}
                  className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-[#d14d72] text-white rounded-full font-[family-name:var(--font-love-craft)] text-base sm:text-lg hover:bg-[#ef959e] transition-colors"
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#d14d72] flex items-center justify-center shadow-lg hover:bg-[#ef959e] transition-colors z-50"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </main>
  );
}
