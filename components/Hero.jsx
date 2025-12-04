"use client";

import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] w-full bg-white pt-20 pb-20 flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl -z-10 animate-pulse-scale"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated badge */}
        <div className="inline-block animate-fade-in-up mb-8">
          <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/15 transition-all duration-300 hover:scale-105 cursor-pointer">
            ✨ Your Trusted Bookkeeping Partner
          </div>
        </div>

        {/* Main heading with animation */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up"
          style={{ fontFamily: "var(--font-playfair)", animationDelay: "0.1s" }}
        >
          Professional Bookkeeping Made
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient-shift">
            {" "}
            Simple & Affordable
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Turn to our expert team for professional digital bookkeeping services.
          We help small businesses and freelancers stay organized and
          stress-free.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button className="group px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 flex items-center gap-2 animate-pulse-glow hover:scale-105">
            <a href="https://www.webwizdurrani.com/">
              {" "}
              Get a Free Consultation{" "}
            </a>
            <ChevronRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary/5 transition-all duration-300 hover:scale-105">
            <a href="https://www.webwizdurrani.com/"> Learn More </a>
          </button>
        </div>

        {/* Trust indicators */}
        <div
          className="mt-16 pt-12 border-t border-border/30 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-sm text-foreground/50 mb-6">
            Trusted by leading businesses across Pakistan
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div
              className="text-center animate-bounce-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-2xl font-bold text-primary">10+</div>
              <p className="text-sm text-foreground/60">Happy Clients</p>
            </div>
            <div
              className="text-center animate-bounce-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-2xl font-bold text-primary">1+</div>
              <p className="text-sm text-foreground/60">Years Experience</p>
            </div>
            <div
              className="text-center animate-bounce-in"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="text-2xl font-bold text-primary">99%</div>
              <p className="text-sm text-foreground/60">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
