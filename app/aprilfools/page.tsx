'use client';
import { useState, useEffect } from 'react';
import NightShutters from '../night-window';
import Image from 'next/image';
import Stars from '../stars';
export default function Home() {
  // const [password, setPassword] = useState('');
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showImage, setShowImage] = useState(true);
  const firstText = "Lavar again???";
  const secondText = "Lavar told us that the last clues were too hard..";
  const thirdText = "so we decided to give you more.. 😊 ";
  const fourthText = "April Fools! - your fav LDOC committee";

  useEffect(() => {
    if (showOverlay && !audioPlayed) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < firstText.length) {
          setTypedText(firstText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [showOverlay, audioPlayed]);

  const handleImageClick = () => {
    if (!audioPlayed) {
      const audio = new Audio('/lavarswervinginthecorner.mp3');
      audio.play();
      setAudioPlayed(true);
      setShowImage(false);
      setTypedText('');

      // Function to handle typing animation
      const typeText = (text: string, onComplete: () => void) => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentIndex < text.length) {
            setTypedText(text.slice(0, currentIndex + 1));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            onComplete();
          }
        }, 50);
      };

      // Chain the typing animations
      typeText(secondText, () => {
        setTimeout(() => {
          setTypedText('');
          typeText(thirdText, () => {
            setTimeout(() => {
              setTypedText('');
              typeText(fourthText, () => {
                setTimeout(() => {
                  setFadeOut(true);
                  setTimeout(() => setShowOverlay(false), 500);
                }, 1000);
              });
            }, 1000);
          });
        }, 2000);
      });
    }
  };

  return (
    <>
      {showOverlay && (
        <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <Stars />
          <div className="text-[#fcd598] text-xl mb-8 font-['Lovecraft'] glow-text">
            {typedText}
          </div>
          {showImage && (
            <Image
              src="/lavartrollwide.png"
              alt="Lavar"
              width={1000}
              height={500}
              className="object-contain cursor-pointer border-4 border-[#fcd598] rounded-lg z-20 max-h-[70vh] w-auto"
              onClick={handleImageClick}
            />
          )}
        </div>
      )}
      <div className="absolute top-4 left-0 right-0 text-center font-bold text-[#fcd598] text-xl z-20 p-4 font-['Lovecraft'] mb-[5%] glow-text">
        Same drill as last time..
      </div>
      {!showOverlay && <NightShutters />}
    </>
  );
}
