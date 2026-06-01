"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Avatar, Button } from "@heroui/react";

/* Gravity UI Icons */
import { Bars, Xmark } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router= useRouter();
  const [open, setOpen] = useState(false);
   const { 
        data: session, 
     
    } = authClient.useSession() 

    const user=session?.user;
    const handleSignOut=async()=>{
      await authClient.signOut();
      router.push('/home');

    }
   

  const navLinks = [
    {
      name: "Browse Jobs",
      path: "/jobs",
    },
    {
      name: "Company",
      path: "/company",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
  ];

  return (
    <header className="border-b border-white/10 bg-[#0B1020]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        
        {/* Left Side */}
        <Link href="/" className="flex items-center gap-2">
          
          {/* Logo */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 shadow-lg">
            <span className="text-lg font-bold text-white">P</span>
          </div>

          {/* Website Name */}
          <div className="leading-none">
            <h1 className="text-sm font-semibold text-white">
              Programming
            </h1>
            <p className="text-xs text-gray-400">Hero</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          
          {/* Nav Links */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-sm text-gray-300 transition duration-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-5 w-[1px] bg-white/20"></div>
          {
            user?
            <> <Link
            href="/signup"
            className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            <Button onClick={handleSignOut} variant="danger">logOut</Button></Link>
            <p className="text-white font-bold">{user?.name.split(' ')[1]}</p>
             <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      
            </>:
            <> <Link
            href="/signup"
            className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            Sign Up
          </Link></>
          }

          
         


          {/* Button */}
          <Button
            radius="sm"
            className="border border-cyan-400 bg-white px-5 text-sm font-semibold text-black shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? (
            <Xmark className="h-6 w-6" />
          ) : (
            <Bars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0B1020] px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-sm text-gray-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <div className="h-[1px] w-full bg-white/10"></div>

            <Link
              href={'/signup'}
              className="text-sm font-medium text-indigo-400"
            >
              Sign up
            </Link>

            <Button
              radius="sm"
              className="w-full border border-cyan-400 bg-white text-sm font-semibold text-black"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;