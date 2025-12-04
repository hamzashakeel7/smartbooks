"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              <Image
                src="/logo2.png"
                alt="SmartBooks Logo"
                width={45}
                height={45}
              />
            </div>
            <span
              className="text-xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              SmartBooks
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Services
            </a>
            <a
              href="#why-choose"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Why Us
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              About
            </a>
            <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition">
              <a href="https://www.webwizdurrani.com/"> Get Started </a>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <a
              href="#services"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary"
            >
              Services
            </a>
            <a
              href="#why-choose"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary"
            >
              Why Us
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary"
            >
              About
            </a>
            <button className="w-[calc(100%-32px)] m-4 px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
