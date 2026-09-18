"use client";

import React from "react";
import Link from "next/link";
import { Clock, UserCheck, ShieldCheck, HeartHandshake, MessageSquareText, MapPin, Check, X, Calendar, Sparkles, Award } from "lucide-react";

export default function WhyChooseUsSection() {
  const differentiators = [
    {
      icon: Clock,
      title: "Unhurried 30-Minute Consultations",
      subtitle: "Dedicated Time for Every Patient",
      description: "Unlike crowded hospital OPDs where visits are rushed in 3-5 minutes, Dr. Sharma dedicates 20 to 30 minutes per appointment to understand your full medical history, review reports, and answer every question.",
      highlight: "No Rushed Visits"
    },
    {
      icon: UserCheck,
      title: "Direct Senior Doctor Access",
      subtitle: "Continuity of Care with Dr. Sharma",
      description: "You see Dr. Rajeshwari Sharma personally at every single consultation—never rotating resident doctors or junior physician assistants. This guarantees deep familiarity with your ongoing health history.",
      highlight: "100% Doctor Continuity"
    },
    {
      icon: ShieldCheck,
      title: "Rational, Minimalist Prescriptions",
      subtitle: "Evidence-Based & Ethical",
      description: "We strictly adhere to ethical clinical guidelines. We avoid over-prescribing unnecessary medications or ordering redundant laboratory tests, focusing instead on targeted, root-cause healing.",
      highlight: "Ethical Medicine"
    },
    {
      icon: HeartHandshake,
      title: "Holistic Lifestyle & Diet Integration",
      subtitle: "Beyond Just Medication",
      description: "Medical treatments for diabetes and hypertension are combined with customized nutrition guidance, stress management, and activity routines tailored to North Indian/Rajasthani dietary habits.",
      highlight: "Diet & Lifestyle Focused"
    },
    {
      icon: MessageSquareText,
      title: "Transparent Patient Communication",
      subtitle: "Plain-Language Diagnostics",
      description: "We explain every blood value, X-ray result, and diagnostic report in simple, clear Hindi and English so you are fully informed and empowered in your healthcare decisions.",
      highlight: "Clear Explanations"
    },
    {
      icon: MapPin,
      title: "Modern & Patient-Friendly Clinic",
      subtitle: "Apex Circle, Malviya Nagar",
      description: "Our clinic is easily accessible with ground-floor wheelchair entry, ample parking, digital lab report access, and a comfortable, hygienic waiting lounge designed for maximum patient comfort.",
      highlight: "Easy Access & Parking"
    }
  ];

  const comparisonPoints = [
    {
      feature: "Consultation Time",
      hospital: "3 – 5 minutes average per visit",
      practice: "20 – 30 minutes dedicated per visit",
    },
    {
      feature: "Attending Doctor",
      hospital: "Rotating junior doctors or interns",
      practice: "Always Dr. Rajeshwari Sharma (Senior Consultant)",
    },
    {
      feature: "Waiting Time",
      hospital: "1 – 3 hours crowded token queue",
      practice: "Minimal wait time with pre-booked slot",
    },
    {
      feature: "Lab & Report Explanations",
      hospital: "Brief or handed off to reception",
      practice: "Detailed, line-by-line explanation by doctor",
    },
    {
      feature: "Prescription Philosophy",
      hospital: "High volume, standardized drug cocktails",
      practice: "Rationalized, minimal effective dose approach",
    },
    {
      feature: "Follow-up Continuity",
      hospital: "Different doctor on subsequent visits",
      practice: "Consistent long-term relationship & tracking",
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Practice Differentiators</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Why Choose Our Jaipur Practice?
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            We put the human connection back into healthcare. Discover how our patient-first model delivers better health outcomes and peace of mind.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentiators.map((diff, index) => {
            const IconComp = diff.icon;
            return (
              <div
                key={index}
                className="bg-ivory rounded-2xl p-6 border border-slateBlue-100/80 shadow-card-soft hover:shadow-card-hover hover:border-gold/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slateBlue-500 text-gold flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-trustGreen-dark bg-trustGreen-bg px-2.5 py-1 rounded-full border border-trustGreen/20">
                      {diff.highlight}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slateBlue-900 mb-1">
                    {diff.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-dark mb-3">
                    {diff.subtitle}
                  </p>
                  <p className="text-sm text-slateBlue-700 leading-relaxed font-normal">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table vs Rushed OPD */}
        <div className="bg-ivory rounded-2xl p-6 sm:p-10 shadow-card-soft border border-slateBlue-100 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold-dark uppercase tracking-wider block mb-1">
              Transparent Comparison
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slateBlue-900">
              The Difference in Care Quality
            </h3>
            <p className="text-xs sm:text-sm text-slateBlue-600 mt-1">
              Comparing standard crowded hospital OPDs with our personalized consultancy approach.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-slateBlue-200">
                  <th className="py-3 px-4 font-heading font-bold text-sm text-slateBlue-900 w-1/3">
                    Care Aspect
                  </th>
                  <th className="py-3 px-4 font-heading font-bold text-sm text-slate-500 w-1/3 bg-slate-100/60 rounded-t-lg">
                    Typical Hospital OPD
                  </th>
                  <th className="py-3 px-4 font-heading font-bold text-sm text-slateBlue-900 w-1/3 bg-slateBlue-500 text-ivory rounded-t-lg">
                    Dr. Rajeshwari Sharma Practice
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slateBlue-100 text-xs sm:text-sm">
                {comparisonPoints.map((row, i) => (
                  <tr key={i} className="hover:bg-white/60 transition-colors">
                    <td className="py-4 px-4 font-semibold text-slateBlue-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-600 bg-slate-50/50 flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{row.hospital}</span>
                    </td>
                    <td className="py-4 px-4 text-slateBlue-900 font-medium bg-slateBlue-50/60">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-trustGreen shrink-0 mt-0.5" />
                        <span>{row.practice}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Patient Promise Callout Box */}
        <div className="bg-slateBlue-900 text-ivory rounded-2xl p-8 sm:p-10 shadow-lg border border-gold/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gold text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Our Practice Promise</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white">
              "We take the time to care because your health is personal."
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-normal">
              Schedule your visit today and experience internal medicine consultation with the attention, dignity, and rigor you deserve.
            </p>
          </div>

          <Link
            href="#appointment"
            className="shrink-0 bg-gold hover:bg-gold-light text-slateBlue-900 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-slateBlue-900" />
            <span>Book Your Appointment</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
