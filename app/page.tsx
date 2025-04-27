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
  const [showFoodSpecials, setShowFoodSpecials] = useState(false);
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
      <div className="min-h-screen bg-[#fcd598]">
        <div className="absolute inset-0 bg-[#fcd598] flex flex-col items-center">
          <div className="relative pt-2 md:pt-4 flex justify-center">
            <Image 
              src="/fulllogo.png" 
              alt="LDOC" 
              className="w-[35vw] h-auto"
              width={1500}
              height={1500}
            />
          </div>

          <div className="container mx-auto px-4 py-4 md:py-8 flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-center text-3xl md:text-[4vw] font-[family-name:var(--font-love-craft)] text-[#d14d72] mb-2 md:mb-4">
              LDOC 2025 is a wrap.
            </h1>
            <p className="text-center text-xl md:text-2xl font-[family-name:var(--font-love-craft)] text-[#ef959e]">
              See you next year! - Your LDOC Committee 🙂
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a 
                href="/schedule" 
                className="px-6 py-3 bg-[#d14d72] text-white rounded-lg hover:bg-[#ef959e] transition-colors duration-200 font-[family-name:var(--font-love-craft)]"
              >
                Schedule
              </a>
              <a 
                href="/artistreveal" 
                className="px-6 py-3 bg-[#d14d72] text-white rounded-lg hover:bg-[#ef959e] transition-colors duration-200 font-[family-name:var(--font-love-craft)]"
              >
                Artist Reveal
              </a>
              <a 
                href="/lavardoc" 
                className="px-6 py-3 bg-[#d14d72] text-white rounded-lg hover:bg-[#ef959e] transition-colors duration-200 font-[family-name:var(--font-love-craft)]"
              >
                Lavardoc
              </a>
              <a 
                href="/hint" 
                className="px-6 py-3 bg-[#d14d72] text-white rounded-lg hover:bg-[#ef959e] transition-colors duration-200 font-[family-name:var(--font-love-craft)]"
              >
                Original Clues
              </a>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a 
                href="https://www.instagram.com/dukeldoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent border-2 border-[#d14d72] text-[#d14d72] rounded-lg hover:bg-[#d14d72]/10 transition-colors duration-200 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#d14d72" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://duuke.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent border-2 border-[#d14d72] text-[#d14d72] rounded-lg hover:bg-[#d14d72]/10 transition-colors duration-200 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#d14d72" viewBox="0 0 24 24">
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-sm text-[#d14d72]">
        <div className="flex items-center gap-2">
          <span>Developed by Tiki</span>
          <span>|</span>
          <a 
            href="mailto:kartikeye.gupta@duke.edu" 
            className="hover:text-[#ef959e] transition-colors duration-200"
          >
            Email
          </a>
          <span>|</span>
          <a 
            href="https://github.com/kartikeyegupta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#ef959e] transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
