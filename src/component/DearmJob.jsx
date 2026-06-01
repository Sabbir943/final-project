'use client'
import React from 'react';

import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase } from 'lucide-react';
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const sentence = "Building modern web experiences";
const text = " Find Your Dream Job Today";
export default function DearmJob() {
  const trendingPositions = [
    "Product Designer",
    "AI Engineering",
    "Dev-Ops Engineer"
  ];

  return (
    <section className="relative w-full min-h-[85vh] bg-black text-white flex flex-col items-center justify-center px-4 overflow-hidden select-none">
      
      {/* 1. Curved Blue Glowing Accents from image_0d7763.png */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Glowing Arc */}
        <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[120%] rounded-full border-t border-r border-sky-500/30 blur-[2px] hidden md:block"></div>
        {/* Right Glowing Arc */}
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[120%] rounded-full border-t border-l border-sky-500/30 blur-[2px] hidden md:block"></div>
      </div>

      {/* 2. Particle Dots Background Style */}
      <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-neutral-700 rounded-full opacity-60"></div>
      <div className="absolute bottom-24 right-1/4 w-1.5 h-1.5 bg-neutral-600 rounded-full opacity-40"></div>
      <div className="absolute bottom-16 right-1/3 w-1 h-1 bg-neutral-500 rounded-full opacity-50"></div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
        
        {/* Top Notification pill */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/60 border border-neutral-800/80 mb-8 backdrop-blur-md shadow-inner">
          <Briefcase className="w-4 h-4 text-amber-600 fill-amber-600/20" />
          <span className="text-[11px] md:text-xs font-mono font-medium tracking-wider text-neutral-200">
            50,000+ <span className="text-neutral-400">NEW JOBS THIS MONTH</span>
          </span>
        </div>

        {/* Header Title */}
        <h1  className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 max-w-2xl leading-[1.1]">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }} // Very small distance for a gentle float
          animate={{ opacity: 1, y: 0 }}   // Smooth transition to final state
          transition={{
            duration: 0.6,                 // Individual letter animation takes 0.8s (slow & soft)
            ease: "easeOut",               // Smooth deceleration
            delay: index * 0.04,           // Creates a soft, tight letter-by-letter sequence
            repeat: Infinity,
            repeatDelay: 2,                // Pauses at the end before restarting the whole sentence
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
        <h1>
         
        </h1>

        {/* Subtitle Description */}
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl font-light leading-relaxed mb-12 px-2">
          HireLoop connects top talent with world-class companies. Browse thousands of 
          curated opportunities and land your next role — faster.
        </p>

        {/* Search Engine Interface Frame */}
        <div className="w-full max-w-3xl p-2 rounded-2xl md:rounded-full bg-neutral-900/50 border border-neutral-800/90 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center gap-3 md:gap-0 mb-8">
          
          {/* Job Scope Search Input Component */}
          <div className="w-full flex items-center gap-3 px-4 py-2 md:py-0">
            <Search className="w-5 h-5 text-neutral-500 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-500 outline-none border-none focus:ring-0"
            />
          </div>

          {/* Minimal Divider Element */}
          <div className="hidden md:block w-[1px] h-6 bg-neutral-800"></div>

          {/* Location Focus Input Component */}
          <div className="w-full flex items-center gap-3 px-4 py-2 md:py-0">
            <MapPin className="w-5 h-5 text-neutral-500 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Location or Remote"
              className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-500 outline-none border-none focus:ring-0"
            />
          </div>

          {/* CTA Search Execution Button */}
          <button className="w-full md:w-12 h-12 rounded-xl md:rounded-full bg-blue-600 hover:bg-blue-500 active:scale-95 text-white flex items-center justify-center transition-all shadow-lg shadow-blue-600/20 flex-shrink-0">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Trending Keywords Footnote */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs md:text-sm text-neutral-500">
          <span className="font-medium">Trending Position</span>
          <div className="flex flex-wrap justify-center gap-2">
            {trendingPositions.map((position, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:border-neutral-700 transition-colors cursor-pointer text-xs"
              >
                {position}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}