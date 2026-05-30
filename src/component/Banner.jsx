import Image from "next/image";
import React from "react";
import { Briefcase, Persons, Star, Factory } from "@gravity-ui/icons";

const Banner = () => {
  const stats = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      icon: <Factory className="h-6 w-6" />,
      value: "12K",
      label: "Companies",
    },
    {
      icon: <Persons className="h-6 w-6" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      icon: <Star className="h-6 w-6" />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-center items-center py-24">
      
      {/* Background Glow - Centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square rounded-full bg-violet-600/20 blur-[140px] pointer-events-none" />

      {/* Globe Background Image - Centered and Using Object Fit */}
      <div className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none select-none">
        <div className="relative w-full h-full max-w-[1100px] max-h-[700px]">
          <Image
            src="/assets/globe.png"
            alt="Globe background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full flex flex-col items-center">
        
        {/* Heading & Paragraph - Centered */}
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          <h1 className="text-xl font-bold leading-tight text-white md:text-4xl tracking-tight">
            Connecting Talent With{" "}
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Dream Opportunities
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Assisting over 15,000 job seekers find their dream positions.
          </p>
        </div>

        {/* Stats Cards - Grid Layout with Inner Items Perfectly Centered */}
        <div className="mt-40 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center rounded-2xl border border-white/10 bg-gradient-to-b from-[#0A0A0A]/90 to-[#111111]/90 p-8 backdrop-blur-md transition duration-300 hover:border-violet-500/40"
            >
              {/* Icon Container centered */}
              <div className="mb-4 flex items-center justify-center text-violet-400">
                {item.icon}
              </div>

              {/* Value Text centered */}
              <h3 className="text-4xl font-bold text-white tracking-tight">
                {item.value}
              </h3>

              {/* Label Text centered */}
              <p className="mt-2 text-sm font-medium text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;