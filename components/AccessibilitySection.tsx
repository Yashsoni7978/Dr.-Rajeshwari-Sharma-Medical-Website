"use client";

import React from "react";
import { Accessibility, Car, Languages, Bus, CheckCircle2, MapPin, Sparkles, HeartHandshake } from "lucide-react";

export default function AccessibilitySection() {
  const accessibilityCards = [
    {
      id: "wheelchair-access",
      title: "Wheelchair & Mobility Access",
      subtitle: "Step-Free, Ground-Floor Clinic",
      icon: Accessibility,
      color: "text-trustGreen",
      bgColor: "bg-trustGreen-bg",
      description: "Our clinic is designed to accommodate senior citizens and patients with physical mobility challenges.",
      highlights: [
        "Ground-floor entrance with non-slip ramps",
        "36-inch wide doorways for wheelchairs & walkers",
        "Sanitised wheelchairs available at door on request",
        "Barrier-free accessible restroom with grab bars"
      ]
    },
    {
      id: "free-parking",
      title: "Reserved Patient Parking",
      subtitle: "Ample Parking & Covered Drop-Off Zone",
      icon: Car,
      color: "text-slateBlue-500",
      bgColor: "bg-slateBlue-50",
      description: "Hassle-free parking directly in front of the clinic with a dedicated drop-off area for elderly patients.",
      highlights: [
        "Free reserved car & two-wheeler patient parking",
        "Covered doorstep patient drop-off & pick-up lane",
        "Traffic assistant available during peak hours",
        "EV charging stations nearby at Apex Circle"
      ]
    },
    {
      id: "multilingual-care",
      title: "Multilingual Consultations",
      subtitle: "Hindi, English & Rajasthani / Marwari",
      icon: Languages,
      color: "text-gold-dark",
      bgColor: "bg-gold-subtle",
      description: "Dr. Sharma and staff communicate fluently in regional languages so every patient feels understood.",
      highlights: [
        "Hindi (हिंदी) — Fluent consultation & explanation",
        "English — Complete diagnostic & report review",
        "Rajasthani / Marwari — Native fluency for elders",
        "Plain-language prescription explanations"
      ]
    },
    {
      id: "transport-directions",
      title: "Public Transport & Directions",
      subtitle: "Apex Circle, Malviya Nagar, Jaipur",
      icon: Bus,
      color: "text-slateBlue-600",
      bgColor: "bg-slateBlue-50",
      description: "Centrally located in Malviya Nagar with direct connectivity from major Jaipur transit hubs.",
      highlights: [
        "Landmark: Opposite Apex Hospital, Calgiri Marg",
        "JCTSL Bus Stop at Apex Circle (Routes 7, 9, AC-1)",
        "10-12 min auto connection from Metro Station",
        "Direct Ola / Uber GPS pin: Dr. Rajeshwari Practice"
      ]
    }
  ];

  return (
    <section id="accessibility" className="py-20 bg-ivory relative overflow-hidden border-t border-slateBlue-100">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-slateBlue-100/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Accessibility className="w-3.5 h-3.5 text-gold" />
            <span>Convenience &amp; Inclusivity</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Clinic Accessibility &amp; Patient Info
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Ensuring a comfortable, barrier-free, and welcoming healthcare visit for senior citizens, families, and patients with special needs.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {accessibilityCards.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-card-soft border border-slateBlue-100/80 hover:border-gold/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${card.bgColor} ${card.color} flex items-center justify-center shadow-xs border border-slateBlue-100 group-hover:scale-105 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slateBlue-600 bg-ivory px-2.5 py-1 rounded-full border border-slateBlue-200/80">
                      Jaipur Clinic Feature
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slateBlue-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-dark mb-3">
                    {card.subtitle}
                  </p>
                  <p className="text-sm text-slateBlue-700 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Highlights List */}
                  <div className="bg-ivory p-4 rounded-xl border border-slateBlue-100">
                    <span className="block text-[11px] font-bold text-slateBlue-800 uppercase tracking-wider mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-2">
                      {card.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slateBlue-800 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-trustGreen shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inclusivity & Patient Comfort Callout Banner */}
        <div className="bg-slateBlue-900 text-ivory rounded-2xl p-8 border border-gold/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gold-gradient-badge text-slateBlue-900 flex items-center justify-center shrink-0 shadow-md">
              <HeartHandshake className="w-6 h-6 text-slateBlue-900" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Dedicated to Compassionate, Barrier-Free Healthcare
              </h4>
              <p className="text-xs text-slate-300 max-w-xl">
                Need special assistance or wheelchair support upon arrival? Call our front desk 15 minutes before reaching, and our team will meet you at the door.
              </p>
            </div>
          </div>

          <a
            href="tel:+911412345678"
            className="shrink-0 bg-gold hover:bg-gold-light text-slateBlue-900 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
          >
            <span>Request Assistance (+91 141 234 5678)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
