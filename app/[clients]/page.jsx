"use client";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {useParams} from "next/navigation";
import { Yatra_One } from "next/font/google";
import CornerParticles from "../../components/CornerParticles";
import BackgroundMusic from "../../components/BackgroundMusic";


const Burstcolors = [
  "#00FF7F",  // Neon Green
  "#1E90FF",  // Electric Blue
  "#FF1744",  // Deep Red
  "#FF8C00",  // Dark Orange
  "#FFD700",  // Rich Yellow
  "#8A2BE2",  // Deep Purple
];

const yatra = Yatra_One({
  weight: "400",  
  subsets: ["latin"],
}); 

const colors = [
  "#FF3CAC",
  "#F7971E",
  "#FFD200",
  "#21D190",
  "#784BA0",
  "#2B86C5",
];

export default function HoliGreeting() {
  const params = useParams();
  const clients = params.clients;

  const [show, setShow] = useState(false);

const clientList = [
  "nancy choudhary",
    "gajendra sir",
    "manoj sir",
    "kashish",
    "ragini bhabhi",
  "ankit sir",
  "divyansh",
  "anu",
  "frients",
  "kashish moto rani",
  "vicky mami",
  "sonu mamu",
  "su",
  "lovely singh"
];

const playlistMap = {
  "lovely singh": [
    { src: "/Lovely.mp3", duration: 20000 },
    { src: "/Lovely1.mp3", duration: 13000 },
    { src: "/Lovely2.mp3", duration: 13000 },
    { src: "/Lovely3.mp3", duration: 20000 },
    { src: "/Lovely4.mp3", duration: 20000 },
    { src: "/Lovely5.mp3", duration: 25000 },
    
  ],

 " nancy choudhary": [
    { src: "/Lovely.mp3", duration: 20000 },
    { src: "/Lovely1.mp3", duration: 13000 },
    { src: "/Lovely2.mp3", duration: 13000 },
    { src: "/Lovely3.mp3", duration: 20000 },
    { src: "/Lovely4.mp3", duration: 20000 },
    { src: "/Lovely5.mp3", duration: 25000 },
  ],

  "ankit sir": [
    { src: "/Common.mp3", duration: 10000 },
    { src: "/Friend.mp3", duration: 22000 },
  ],

  divyansh: [
    { src: "/Common.mp3", duration: 11000 },
    { src: "/Lovely5.mp3", duration: 15000 },
      { src: "/Lovely4.mp3", duration: 20000 },
    
  ],

  anu: [
     { src: "/Common.mp3", duration: 20000 },
    { src: "/Frients.mp3", duration: 20000 },
   
  ],

  frients: [
    { src: "/Common.mp3", duration: 11000 },
    { src: "/Frients.mp3", duration: 20000 },
  ],

  "kashish moto rani": [
    { src: "/Common.mp3", duration: 10000 },
    { src: "/Frients.mp3", duration: 20000 },
    { src: "/Lovely4.mp3", duration: 15000 },

  ],

  "gajendra sir": [
    { src: "/Common.mp3", duration: 10000 },
    { src: "/Friend.mp3", duration: 20000 },
  ],

  "vicky mami": [
    { src: "/Common.mp3", duration: 15000 },
    { src: "/Friend.mp3", duration: 15000 },

  ],

  "sonu mamu": [
     { src: "/Common.mp3", duration: 11000 },
    { src: "/Friend.mp3", duration: 15000 },
   
  ],

 " manoj sir": [
    { src: "/Common.mp3", duration: 10000 },
    { src: "/Friend.mp3", duration: 20000 },
  ],

   kashish: [
    { src: "/Lovely.mp3", duration: 20000 },
    { src: "/Lovely2.mp3", duration: 13000 },
    { src: "/Lovely3.mp3", duration: 20000 },
    { src: "/Lovely4.mp3", duration: 20000 },
    { src: "/Lovely5.mp3", duration: 25000 },
    { src: "/Lovely1.mp3", duration: 13000 },
  ],

"ragini bhabhi": [
    { src: "/Lovely.mp3", duration: 20000 },
    { src: "/Lovely2.mp3", duration: 13000 },
    { src: "/Lovely3.mp3", duration: 20000 },
    { src: "/Lovely4.mp3", duration: 20000 },
    { src: "/Lovely5.mp3", duration: 25000 },
    { src: "/Lovely1.mp3", duration: 13000 },
  ],

};

  const clientName = decodeURIComponent(clients || "").toLowerCase();
  const isValidClient = clientList.includes(clientName);
  const selectedPlaylist = playlistMap[clientName];
  console.log("Client Name:", clientName);
  console.log("Is Valid Client:", isValidClient);

  useEffect(() => {
    if (clients && isValidClient) {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
    }
  }, [clients, isValidClient]);

  if (!clients) return <h1>No Client Found</h1>;
  if (!isValidClient) return <h1>Client is not available</h1>;

  return (

    
    
<div className=" fixed inset-0 flex items-center justify-center overflow-hidden bg-black relative">      {/* 🔥 Animated Gradient Background */}
      < CornerParticles />
      {selectedPlaylist && (
  <BackgroundMusic playlist={selectedPlaylist} />
)}

      <motion.div
        className="absolute inset-0"
       
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #ff3cac55, transparent 60%), radial-gradient(circle at 80% 70%, #21d19055, transparent 60%), #0d0515",
            "radial-gradient(circle at 80% 40%, #f7971e55, transparent 60%), radial-gradient(circle at 30% 80%, #784ba055, transparent 60%), #0d0515",
            "radial-gradient(circle at 50% 20%, #2b86c555, transparent 60%), radial-gradient(circle at 60% 80%, #ffd20055, transparent 60%), #0d0515",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
        {/* 💥 Burst Effects (Visible Now) */}
      {/* Top Left */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 rounded-full blur-xl z-20 mix-blend-screen"
        style={{ background: `radial-gradient(circle, ${Burstcolors[0]}, transparent)` }}
        animate={{ scale: [0, 2.5], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Top Right */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-xl z-20 mix-blend-screen"
        style={{ background: `radial-gradient(circle, ${Burstcolors[1]}, transparent)` }}
        animate={{ scale: [0, 1.5], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />

      {/* Bottom Left */}
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-xl z-20 mix-blend-screen"
        style={{ background: `radial-gradient(circle, ${Burstcolors[2]}, transparent)` }}
        animate={{ scale: [0, 1.5], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      {/* Bottom Right */}
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-xl z-20 mix-blend-screen"
        style={{ background: `radial-gradient(circle, ${Burstcolors[3]}, transparent)` }}
        animate={{ scale: [0, 1.5], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />

      {/* 💎 Floating Glow Blobs */}
      <motion.div
        className="absolute w-125 h-125 bg-pink-500/20 rounded-full blur-3xl inset-0 z-0"
        animate={{x: [0, 200, -100, 0], y: [0, -150, 100, 0]}}
        transition={{duration: 18, repeat: Infinity}}
      />

      <motion.div
        className="absolute w-100 h-100 bg-yellow-400/20 rounded-full blur-3xl right-0 bottom-0"
        animate={{x: [0, -200, 100, 0], y: [0, 150, -100, 0]}}
        transition={{duration: 22, repeat: Infinity}}
      />

      {/* 🎨 Center Content */}
     <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4">
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{opacity: 0, scale: 0.8, y: 40}}
              animate={{opacity: 1, scale: 1, y: 0}}
              transition={{duration: 0.8}}
              className="relative w-[90%] max-w-3xl p-17 rounded-3xl
              bg-white/5 backdrop-blur-2xl
              border border-white/10
              shadow-[0_0_40px_rgba(255,60,172,0.4)]
              flex flex-col items-center text-center
              bg-[radial-gradient(ellipse_at_30%_20%,#1a0533_0%,#0d0515_60%)] "
            >
              {/* 💎 Glow Border Effect */}
              <div
                className="absolute inset-0 rounded-3xl bg-linear-to-r from-pink-500 via-yellow-400 to-green-400 
opacity-20 blur-2xl -z-10"
              />

              <motion.h1
                initial={{opacity: 0, y: -40, scale: 0.9}}
                animate={{opacity: 1, y: 0, scale: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
                className={`${yatra.className} text-3xl md:text-4xl mt-2 font-extrabold 
bg-linear-to-r 
from-pink-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500
bg-size-[400%_400%] 
bg-clip-text text-transparent 
animate-gradientMove`}
              >
                🎉 Happy Holi <span className="mt-2  inline-block">
                  {decodeURIComponent(clients).toUpperCase()}
                </span>
                
              </motion.h1>
            
              

              <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.6}}
                className="mt-4 uppercase tracking-[0.4em] text-white/70 font-bold text-center"
              >
                Festival of Colours
              </motion.p>

              <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.8}}
                className="mt-6 text-white/90 font-medium font-serif text-center text-base max-w-md"
              >
                May this Holi paint your life with beautiful moments, cherished memories, and a rainbow of endless blessings. 🌸
              </motion.p>

              {/* 🎨 Color Pulse Dots */}
              <div className="flex justify-center gap-3 mt-6">
                {colors.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{scale: 0}}
                    animate={{scale: [1, 1.3, 1]}}
                    transition={{
                      delay: 1 + i * 0.2,
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="w-4 h-4 rounded-full"
                    style={{background: c}}
                  />
                ))}
              </div>

              <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.4}}
                className="mt-8 text-xs tracking-widest text-white/40 text-center"
              >
                ✦ Premium Holi Celebration ✦
              </motion.p>
            </motion.div>
          )}
        
        </AnimatePresence>

        {/* 👇 Developer Credit Bottom Center */}
 <div className="mt-11 mb-8 w-full flex justify-center px-4">
  <motion.h1
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.6 }}
    className={`${yatra.className}
      text-xl sm:text-2xl 
      text-center
      font-bold tracking-wide
      bg-linear-to-r from-purple-600 via-yellow-400 to-green-400
      bg-clip-text text-transparent`}
    style={{
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Developer By Ravi Shankar Singh
  </motion.h1>
</div>

        
      </div>
    </div>
  );
}
