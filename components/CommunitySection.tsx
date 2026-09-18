"use client";

import React from "react";
import { Heart, Users, MapPin, Calendar, CheckCircle2, ShieldCheck, Sparkles, Activity } from "lucide-react";

export default function CommunitySection() {
  const initiatives = [
    {
      id: "diabetic-camps",
      title: "Free Diabetic Neuropathy & Eye Screening Camps",
      frequency: "Monthly (1st Sunday)",
      location: "Malviya Nagar & Sangeet Colony Centers",
      impact: "4,500+ Citizens Screened",
      description: "Free HbA1c blood sugar checks, biothesiometry foot neuropathy screening, and fundus examination to catch diabetic microvascular complications early.",
      features: [
        "Free Fasting & HbA1c Testing",
        "Digital Biothesiometry Foot Check",
        "Retinopathy Eye Referral",
        "Free Diabetic Dietary Booklets"
      ],
      badge: "Monthly Drive"
    },
    {
      id: "hypertension-drive",
      title: "World Hypertension Day & Park BP Kiosks",
      frequency: "Annual & Quarterly Drives",
      location: "Public Parks & RWA Centers across Jaipur",
      impact: "8,000+ Free BP Checks",
      description: "Mobile blood pressure screening kiosks set up in public parks during morning hours, providing immediate hypertension risk stratification and salt restriction education.",
      features: [
        "Dual-Reading Digital BP Checks",
        "Dietary Sodium Reduction Counseling",
        "Free Home BP Tracking Logs",
        "High-Risk Doctor Referrals"
      ],
      badge: "Public Screening"
    },
    {
      id: "bone-health-seniors",
      title: "Senior Citizen Bone Health & Osteoporosis Camps",
      frequency: "Bi-Monthly (2nd Saturday)",
      location: "Jaipur Pensioners Welfare Association",
      impact: "1,800+ Bone Scans Done",
      description: "Specialized calcaneal ultrasound bone mineral density screening for elderly citizens, combined with fall prevention physical therapy guidance.",
      features: [
        "Ultrasound Bone Density Check",
        "Vitamin D3 Deficiency Screening",
        "Fall Prevention Physical Guidance",
        "Free Calcium Supplement Distribution"
      ],
      badge: "Elderly Outreach"
    },
    {
      id: "dengue-fever-campaign",
      title: "Post-Monsoon Fever & Vector Control Campaign",
      frequency: "Seasonal (Aug – Nov)",
      location: "Suburban Jaipur Schools & Housing Societies",
      impact: "12,000+ Families Reached",
      description: "Community workshops educating residents on vector-borne disease prevention (Dengue, Chikungunya, Typhoid), early warning signs, and hydration protocols.",
      features: [
        "Vector Control & Stagnant Water Education",
        "Early Dengue Symptom Checklists",
        "ORS & Electrolyte Distribution",
        "School Student Awareness Workshops"
      ],
      badge: "Seasonal Campaign"
    }
  ];

  return (
    <section id="community" className="py-20 bg-ivory relative overflow-hidden border-t border-slateBlue-100">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-trustGreen-bg/50 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Heart className="w-3.5 h-3.5 text-trustGreen" />
            <span>Social Responsibility &amp; Outreach</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Community Health &amp; Preventive Camps
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Extending preventive healthcare beyond our clinic walls to educate, screen, and protect families across Jaipur.
          </p>
        </div>

        {/* 4 Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((init) => (
            <div
              key={init.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-card-soft border border-slateBlue-100/80 hover:border-gold/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-trustGreen-dark bg-trustGreen-bg px-3 py-1 rounded-full border border-trustGreen/20">
                    {init.badge}
                  </span>
                  <span className="text-xs font-semibold text-gold-dark bg-gold-subtle px-2.5 py-1 rounded-md">
                    {init.impact}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-slateBlue-900 mb-2 group-hover:text-slateBlue-600 transition-colors">
                  {init.title}
                </h3>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slateBlue-600 font-medium mb-4 pb-3 border-b border-slateBlue-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" /> {init.frequency}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slateBlue-500" /> {init.location}
                  </span>
                </div>

                <p className="text-sm text-slateBlue-700 leading-relaxed font-normal mb-6">
                  {init.description}
                </p>

                {/* Features List */}
                <div className="bg-ivory p-4 rounded-xl border border-slateBlue-100 mb-2">
                  <span className="block text-[11px] font-bold text-slateBlue-800 uppercase tracking-wider mb-2">
                    Camp Offerings &amp; Services:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {init.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slateBlue-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-trustGreen shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership & NGO Callout Banner */}
        <div className="bg-slateBlue-900 text-ivory rounded-2xl p-8 border border-gold/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-gold text-xs font-bold uppercase">
              <Users className="w-4 h-4 text-gold" />
              <span>Community Partnerships</span>
            </div>
            <h4 className="font-heading font-bold text-xl text-white">
              Want to host a free health screening camp in your locality or RWA?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 font-normal max-w-2xl">
              We partner with Jaipur Resident Welfare Associations (RWAs), senior citizen clubs, and non-profit organizations to deliver free preventive healthcare drives.
            </p>
          </div>

          <a
            href="tel:+911412345678"
            className="shrink-0 bg-gold hover:bg-gold-light text-slateBlue-900 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
          >
            <span>Organize Community Camp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
