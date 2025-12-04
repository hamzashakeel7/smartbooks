"use client";

export default function TrustSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-slide-in-left">
            <h2
              className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Trusted by Pakistan's Leading Businesses
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              For years, SmartBooks has been the go-to bookkeeping partner for
              small businesses, freelancers, and consultants across Pakistan.
              We've helped hundreds of clients streamline their financial
              operations and achieve growth.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Affordable & Transparent Pricing
                  </h4>
                  <p className="text-foreground/60">
                    50% more affordable than traditional accountants
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Expert Team with Real Experience
                  </h4>
                  <p className="text-foreground/60">
                    40+ years of combined accounting expertise
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    24/7 Support & Consultation
                  </h4>
                  <p className="text-foreground/60">
                    Always available when you need us
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-primary/5 rounded-xl hover:bg-primary/10 transition">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-foreground/60 font-medium">
                  Satisfied Clients
                </p>
              </div>
              <div className="p-8 bg-primary/5 rounded-xl hover:bg-primary/10 transition">
                <div className="text-4xl font-bold text-primary mb-2">1+</div>
                <p className="text-foreground/60 font-medium">
                  Years Experience
                </p>
              </div>
              <div className="p-8 bg-primary/5 rounded-xl hover:bg-primary/10 transition">
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <p className="text-foreground/60 font-medium">Accuracy Rate</p>
              </div>
              <div className="p-8 bg-primary/5 rounded-xl hover:bg-primary/10 transition">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-foreground/60 font-medium">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
