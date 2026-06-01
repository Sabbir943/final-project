import React from 'react';
// Replace these with Hero UI, Gravity UI, or Lucide icons based on your preferences
import { 
  Search, 
  TrendingUp, 
  Building2, 
  Bookmark, 
  MousePointerClick, 
  FileText, 
  Cpu, 
  LineChart 
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/[0.03] group">
      {/* Icon frame with dark UI look and pink/purple accented icon matching image_0de746.png */}
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 text-pink-400 group-hover:text-pink-300 group-hover:border-neutral-700 shadow-md transition-all duration-300">
        {icon}
      </div>
      {/* Text block */}
      <div className="flex flex-col justify-center">
        <h3 className="text-white font-medium text-base mb-1 tracking-wide">
          {title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed max-w-[240px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function FeaturesJobs() {
  const features = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently."
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring."
    },
    {
      icon: <Bookmark className="w-5 h-5" />,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard."
    },
    {
      icon: <MousePointerClick className="w-5 h-5" />,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience."
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips."
    }
  ];

  return (
    <section className="relative w-full bg-black py-20 px-4 md:px-8 lg:px-16 overflow-hidden select-none">
      
      {/* Decorative Blue Geometric Axis from image_0de746.png (Dashed line + Central Cross) */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block w-full max-w-6xl">
        <div className="relative flex items-center justify-center w-full">
          <div className="w-1/2 h-[1px] border-t border-dashed border-sky-500/40"></div>
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute w-6 h-[1px] bg-sky-400 rotate-45"></div>
            <div className="absolute w-6 h-[1px] bg-sky-400 -rotate-45"></div>
            <div className="absolute w-2 h-2 border border-sky-400 rotate-45 bg-black"></div>
          </div>
          <div className="w-1/2 h-[1px] border-t border-dashed border-sky-500/40"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Top Tagline Indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
            Features Job
          </span>
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
        </div>

        {/* Main Section Header */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white text-center tracking-tight leading-tight mb-16 max-w-xl">
          Everything you need <br /> to succeed
        </h2>

        {/* Fully Responsive Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-y-20 w-full mt-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}