"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GetStartedDialog from "./GetStartedDialog";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-[60px] py-[30px] w-full z-50 relative max-md:px-5">
        <Link href="/" className="block relative w-[140px] h-[50px]">
          <Image
            src="/images/teamz-dark-logo-transparent.png"
            alt="TEAMZ"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex items-center gap-[5px] text-[0.95rem] transition-colors duration-300 text-[#ccc] hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 max-md:hidden">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-[#a8f348] text-[#1a1a1a] px-7 py-3 rounded-[30px] font-semibold text-[0.95rem] transition-transform duration-200 hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="hidden max-md:block text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1a1a1a] z-[100] flex flex-col items-center justify-center p-5">
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <ul className="flex flex-col gap-8 text-center mb-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-2xl text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 w-full max-w-[200px]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsDialogOpen(true);
              }}
              className="bg-[#a8f348] text-[#1a1a1a] px-7 py-3 rounded-[30px] font-semibold text-lg text-center transition-transform duration-200 hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Get Started Dialog */}
      <GetStartedDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
