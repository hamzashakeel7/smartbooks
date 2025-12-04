"use client";

import {
  FileText,
  Receipt,
  CreditCard,
  TrendingUp,
  Users,
  Calculator,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Receipt,
      title: "Invoicing & Billing",
      description:
        "Professional invoice management and automated billing systems",
    },
    {
      icon: CreditCard,
      title: "Payroll Processing",
      description:
        "Complete payroll management with tax compliance and reporting",
    },
    {
      icon: FileText,
      title: "Bank Reconciliation",
      description: "Accurate reconciliation of bank statements and accounts",
    },
    {
      icon: TrendingUp,
      title: "Financial Reports",
      description:
        "Comprehensive financial statements and performance analytics",
    },
    {
      icon: Calculator,
      title: "Tax Filing",
      description:
        "Expert tax filing and compliance services for your business",
    },
    {
      icon: Users,
      title: "Consultation",
      description:
        "Professional financial guidance and strategic accounting advice",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4 animate-fade-in-up"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Services
          </h2>
          <p
            className="text-lg text-foreground/60 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Comprehensive bookkeeping solutions tailored to meet your business
            needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-xl border border-border/50 hover:border-primary hover:shadow-xl transition-all duration-300 group cursor-pointer animate-fade-in-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-spin transition-all duration-300">
                  <Icon
                    size={28}
                    className="text-primary group-hover:text-white transition"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
