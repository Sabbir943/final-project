'use client'
import React, { useState } from 'react';
import { Crown, BarChart3, Plus, ArrowRight } from 'lucide-react';
import { Siren } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' | 'yearly'

  const plans = [
    {
      name: "Starter",
      icon: <Crown className="w-4 h-4 text-pink-400" />,
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited"
      ],
      isPopular: false,
    },
    {
      name: "Growth",
      icon: <BarChart3 className="w-4 h-4 text-purple-400" />,
      monthlyPrice: 17,
      yearlyPrice: 12, // Represents discounted price per month when billed annually
      description: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited"
      ],
      isPopular: true, // Highlights the button with a white filled design matching the center card in image_0d6f42.png
    },
    {
      name: "Premium",
      icon: <Siren className="w-4 h-4 text-fuchsia-400" />,
      monthlyPrice: 99,
      yearlyPrice: 74,
      description: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)"
      ],
      isPopular: false,
    }
  ];

  return (
    <section className="relative w-full bg-black py-24 px-4 md:px-8 lg:px-16 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Top Section Tagline Indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
            Pricing
          </span>
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
        </div>

        {/* Main Heading Text */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center tracking-tight leading-tight mb-10 max-w-2xl">
          Pay for the leverage, not the listings
        </h2>

        {/* Billing Period Switcher Pill */}
        <div className="p-1 rounded-full bg-neutral-900/80 border border-neutral-800 flex items-center mb-16 gap-1">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
              billingPeriod === 'monthly'
                ? 'bg-white text-black shadow-lg'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide flex items-center gap-2 transition-all duration-300 ${
              billingPeriod === 'yearly'
                ? 'bg-white text-black shadow-lg'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>Yearly</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              billingPeriod === 'yearly' ? 'bg-pink-600 text-white' : 'bg-pink-600/20 text-pink-400'
            }`}>
              25%
            </span>
          </button>
        </div>

        {/* Responsive Pricing Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
   animate={{
    boxShadow: [
      "0 0 0px rgba(255,255,255,0.1)",
      "0 0 30px rgba(255,255,255,0.25)",
      "0 0 0px rgba(255,255,255,0.1)",
    ],
    scale: [1, 1.02, 1],
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{
    scale: 1.05,
    y: -10,
  }}         
              className={`flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-neutral-900/30 border transition-all duration-300 ${
                plan.isPopular 
                  ? 'border-neutral-700 bg-neutral-900/50 shadow-2xl scale-[1.02] md:scale-105 z-10' 
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                {/* Header Row inside Card Frame */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                      {plan.icon}
                    </div>
                    <span className="text-white font-medium text-lg tracking-wide">{plan.name}</span>
                  </div>
                  
                  {/* Fluid Price Logic Anchor */}
                  <div className="flex items-baseline text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-4xl font-bold tracking-tight transition-all duration-300">
                      {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-neutral-500 text-xs ml-1">/month</span>
                  </div>
                </div>

                {/* Subtitle list descriptor */}
                <p className="text-neutral-300 text-sm font-medium mb-6">
                  {plan.description}
                </p>

                {/* Plus-Signed Features Checklist Block */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed">
                      <div className="mt-0.5 w-4 h-4 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-neutral-500">
                        <Plus className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger Button */}
              <button 
                className={`w-full group py-3.5 px-5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] ${
                  plan.isPopular
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-neutral-900/90 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white'
                }`}
              >
                <span>Choose This Plan</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}