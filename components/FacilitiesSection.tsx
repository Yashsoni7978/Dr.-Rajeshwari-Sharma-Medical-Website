"use client";

import React from "react";
import { Building2, Stethoscope, HeartPulse, Sparkles, CheckCircle2, ShieldCheck, Thermometer, Wind, Accessibility, Lock } from "lucide-react";

export default function FacilitiesSection() {
  const facilities = [
    {
      id: "consultation-chamber",
      title: "Doctor's Consultation Chamber",
      subtitle: "Private, Soundproof Consultation Room",
      description: "Designed for unhurried, confidential medical discussions. Equipped with an ergonomic examination couch, digital EHR review workstation, and comfortable seating for family members.",
      tags: ["Private & Soundproof", "Digital EHR Screen", "Family Seating Area", "Ergonomic Couch"],
      artType: "chamber"
    },
    {
      id: "reception-lounge",
      title: "Patient Reception & Lounge",
      subtitle: "Air-Conditioned, Peaceful Waiting Environment",
      description: "A clean, peaceful waiting area featuring air-conditioned comfort, sanitized seating, filtered drinking water, health reading literature, and an efficient check-in desk.",
      tags: ["Air-Conditioned", "Sanitizer Stations", "Filtered Water Lounge", "Quiet Ambience"],
      artType: "reception"
    },
    {
      id: "diagnostic-suite",
      title: "Point-of-Care Diagnostic Suite",
      subtitle: "Immediate On-Site Cardiac & Blood Pressure Testing",
      description: "Houses state-of-the-art diagnostic equipment including 12-lead digital ECG recording, 24-hour Ambulatory Blood Pressure monitors, and rapid metabolic testing kits.",
      tags: ["12-Lead Digital ECG", "24-Hr ABPM Recorders", "Rapid HbA1c Analyzer", "Oxygen Saturation"],
      artType: "diagnostic"
    },
    {
      id: "sample-station",
      title: "Hygienic Sample Collection Station",
      subtitle: "Sterile Phlebotomy & Vital Signs Check",
      description: "Dedicated station for safe, painless blood and urine sample collection. Staffed by certified phlebotomists with temperature-controlled sample storage for NABL partner labs.",
      tags: ["Certified Phlebotomist", "Sterile Blood Draw", "Cold-Chain Storage", "Automated Vitals Monitor"],
      artType: "sample"
    }
  ];

  const hygieneFeatures = [
    {
      icon: ShieldCheck,
      title: "Daily Medical Disinfection",
      description: "All consultation surfaces, examination couches, and instruments undergo strict medical-grade chemical & UV sterilization."
    },
    {
      icon: Wind,
      title: "HEPA Air Filtration",
      description: "Active indoor air purifiers equipped with HEPA filters and UV-C disinfection to maintain fresh, pathogen-free air."
    },
    {
      icon: Accessibility,
      title: "Wheelchair Accessible",
      description: "Ground-floor location with step-free entrance ramps, wide doorways, and accessible restroom facilities for elderly patients."
    },
    {
      icon: Lock,
      title: "EMR Privacy & Security",
      description: "100% confidential digital health records protected with encrypted storage adhering to patient privacy standards."
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-ivory relative overflow-hidden border-t border-slateBlue-100">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-slateBlue-100/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Building2 className="w-3.5 h-3.5 text-gold" />
            <span>Modern Clinical Infrastructure</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Clinic Facilities &amp; Diagnostic Tech
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Take a visual tour of our Malviya Nagar practice — meticulously designed for hygiene, accuracy, and patient tranquility.
          </p>
        </div>

        {/* Facilities Illustrated Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="photo-card-frame bg-white p-6 shadow-card-soft hover:shadow-card-hover border border-slateBlue-100/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Illustrated Graphic Canvas Box */}
                <div className="relative rounded-2xl overflow-hidden bg-slateBlue-900 h-56 sm:h-64 mb-6 border border-slateBlue-700/60 p-6 flex flex-col justify-between text-white">
                  {/* Decorative background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slateBlue-900 via-slateBlue-800 to-slateBlue-600 opacity-90"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-2xl"></div>

                  {/* Graphic Canvas Details depending on artType */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/40">
                      Jaipur Clinic Facility
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      Malviya Nagar
                    </span>
                  </div>

                  {/* Central Vector Art Illustration */}
                  <div className="relative z-10 my-auto flex items-center justify-center">
                    {fac.artType === "chamber" && (
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-gold border border-gold/30 mb-2">
                          <Stethoscope className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200">Doctor's Desk &amp; Examination Couch</span>
                      </div>
                    )}
                    {fac.artType === "reception" && (
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-trustGreen-light border border-trustGreen/30 mb-2">
                          <Building2 className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200">AC Patient Lounge &amp; Check-in</span>
                      </div>
                    )}
                    {fac.artType === "diagnostic" && (
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-gold border border-gold/30 mb-2">
                          <HeartPulse className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200">Digital 12-Lead ECG &amp; ABPM Suite</span>
                      </div>
                    )}
                    {fac.artType === "sample" && (
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-trustGreen-light border border-trustGreen/30 mb-2">
                          <Thermometer className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200">Sterile Phlebotomy &amp; Vitals Station</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Illustrated Label */}
                  <div className="relative z-10 bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                    <span className="font-heading font-semibold text-ivory">{fac.title}</span>
                    <span className="text-gold text-[11px] font-medium">Verified Facility</span>
                  </div>
                </div>

                {/* Content Details */}
                <h3 className="font-heading font-bold text-xl text-slateBlue-900 mb-1">
                  {fac.title}
                </h3>
                <p className="text-xs font-semibold text-gold-dark mb-3">
                  {fac.subtitle}
                </p>
                <p className="text-sm text-slateBlue-700 leading-relaxed mb-6 font-normal">
                  {fac.description}
                </p>

                {/* Facility Features Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slateBlue-100">
                  {fac.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-ivory text-slateBlue-800 px-2.5 py-1 rounded-md border border-slateBlue-200/80 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-trustGreen" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hygiene & Safety Standards Banner */}
        <div className="bg-white rounded-2xl p-8 shadow-card-soft border border-slateBlue-100">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-trustGreen-dark uppercase tracking-wider block mb-1">
              Safety &amp; Compliance Standards
            </span>
            <h3 className="font-heading font-bold text-2xl text-slateBlue-900">
              Our Hygiene &amp; Patient Safety Protocols
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hygieneFeatures.map((h, index) => {
              const IconComp = h.icon;
              return (
                <div key={index} className="bg-ivory p-5 rounded-xl border border-slateBlue-100">
                  <div className="w-10 h-10 rounded-lg bg-slateBlue-500 text-gold flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slateBlue-900 mb-1">
                    {h.title}
                  </h4>
                  <p className="text-xs text-slateBlue-600 leading-relaxed font-normal">
                    {h.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
