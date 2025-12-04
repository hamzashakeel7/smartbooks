"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ready to Simplify Your Bookkeeping?
        </h2>
        <p
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Join hundreds of businesses already saving time and money with
          SmartBooks. Start your free trial today with no credit card required.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <button className="group px-10 py-4 bg-white text-primary font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
            Start Free Trial
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
          <button className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/10 transition">
            Schedule Demo
          </button>
        </div>
        <p className="text-white/70 mt-8 text-sm">
          No credit card required • Free 30-day trial • Full access to all
          features
        </p>
      </div>
    </section>
  );
}
