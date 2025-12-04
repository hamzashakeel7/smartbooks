"use client";

import { CheckCircle2, BarChart3, Clock, Shield } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Expert Team",
      description:
        "Over 2 years of combined accounting expertise managing complex finances",
    },
    {
      icon: BarChart3,
      title: "Real-Time Reporting",
      description:
        "Access detailed financial reports and dashboards anytime, anywhere",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description:
        "Quick turnaround times for invoicing, payroll, and tax filing",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Bank-level encryption ensures your financial data is always protected",
    },
  ];

  return (
    <section
      id="why-choose"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wide">
            ACCOUNTING SERVICES YOU CAN RELY ON
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Choose SmartBooks?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            At SmartBooks, we understand the complexities of managing business
            finances and provide reliable, precise, and customized bookkeeping
            services that cater to your unique needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border/50 hover:border-primary/30 bg-white hover:bg-primary/5 transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-foreground/60">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="bg-muted/50 rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Our Credentials & Trust Badges
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl">⭐</span>
              </div>
              <p className="font-semibold text-foreground">5-Star Reviews</p>
              <p className="text-sm text-foreground/60">10+ Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl">🏆</span>
              </div>
              <p className="font-semibold text-foreground">Industry Award</p>
              <p className="text-sm text-foreground/60">
                Best Bookkeeping 2024
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl">✅</span>
              </div>
              <p className="font-semibold text-foreground">Certified</p>
              <p className="text-sm text-foreground/60">QuickBooks Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
