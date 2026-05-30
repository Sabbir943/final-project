"use client";

import Link from "next/link";
import React from "react";
import {
  LogoFacebook,
  LogoLinkedin,
  LogoPinterest,
} from "@gravity-ui/icons";
import {LogoGithub} from '@gravity-ui/icons';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full border border-violet-500/20"></div>
        <div className="absolute -top-20 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full border border-violet-500/10"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        
        {/* Top Footer */}
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Left Side */}
          <div>
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500">
                <span className="text-lg font-bold text-white">P</span>
              </div>

              <div className="leading-none">
                <h1 className="text-sm font-semibold">
                  Programming
                </h1>
                <p className="text-xs text-gray-400">Hero</p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              The AI-native career platform. Built for
              people who take their work seriously.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition hover:bg-violet-500"
              >
                <LogoFacebook className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition hover:bg-violet-500"
              >
                <LogoGithub className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition hover:bg-violet-500"
              >
                <LogoLinkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h2 className="mb-5 text-sm font-semibold text-violet-400">
              Product
            </h2>

            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-white">
                Job discovery
              </Link>

              <Link href="#" className="hover:text-white">
                Worker AI
              </Link>

              <Link href="#" className="hover:text-white">
                Companies
              </Link>

              <Link href="#" className="hover:text-white">
                Salary data
              </Link>
            </div>
          </div>

          {/* Navigations */}
          <div>
            <h2 className="mb-5 text-sm font-semibold text-violet-400">
              Navigations
            </h2>

            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-white">
                Help center
              </Link>

              <Link href="#" className="hover:text-white">
                Career library
              </Link>

              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="mb-5 text-sm font-semibold text-violet-400">
              Resources
            </h2>

            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-white">
                Brand Guideline
              </Link>

              <Link href="#" className="hover:text-white">
                Newsroom
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
          
          <p>
            Copyright 2024 — Programming Hero
          </p>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white">
              Terms & Policy
            </Link>

            <Link href="#" className="hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;