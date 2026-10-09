"use client";

import React from "react";
import Image from "next/image";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]">
      <motion.div 
        className="relative w-48 h-48 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Outer Ring */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="#facc15" // Theme primary color
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="301.59" // 2 * pi * 48
            strokeDashoffset={301.59 - (301.59 * progress) / 100}
            className="transition duration-300 ease-out"
          />
        </svg>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <Image src="/logos/logo-dark.png" alt="Mewar Hi-Tech" className="h-6 opacity-80"  loading="lazy" width={800} height={600} />
          <span className="text-white font-oswald text-2xl font-bold tracking-wider">
            {Math.round(progress)}%
          </span>
        </div>
      </motion.div>
      
      <motion.p 
        className="mt-8 text-white/50 text-sm font-medium tracking-widest uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Preparing Interactive Experience...
      </motion.p>
    </div>
  );
};

export default Loader;
