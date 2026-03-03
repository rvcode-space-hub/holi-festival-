{/* 🌌 Premium Dark Radial Background */}
<div className="absolute inset-0 -z-20 
bg-[radial-gradient(ellipse_at_30%_20%,#1a0533_0%,#0d0515_60%)]" />

{/* 💎 Glow Border Effect */}
<div className="absolute inset-0 rounded-3xl 
bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 
opacity-20 blur-2xl -z-10" />

<motion.h1
  initial={{ opacity: 0, y: -40, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-4xl md:text-7xl mt-2 font-extrabold 
  bg-gradient-to-r 
  from-pink-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500
  bg-[length:400%_400%] 
  bg-clip-text text-transparent 
  animate-gradientMove"
>
  🎉 Happy Holi
</motion.h1>