"use client";

import React from "react";
import Link from "next/link";
import { CreditCard, CheckCircle2, Clock, FileText, Pill, Activity, ShieldCheck, ArrowRight, Calendar, Sparkles, AlertCircle } from "lucide-react";

export default function FeesAndExpectationsSection() {
  const feeCards = [
    {
      id: "first-visit",
      title: "First-Time Comprehensive Visit",
      fee: "₹800",
      duration: "25 – 30 Minutes",
      subtitle: "Full History, Examination & Custom Plan",
      description: "Recommended for all new patients or individuals with complex multi-system symptoms requiring in-depth medical evaluation.",
      inclusions: [
        "Complete clinical history & lifestyle intake",
        "Physical examination & vitals screening",
        "Detailed review of past medical files & labs",
        "Customized treatment, diet & lifestyle plan",
        "7-day complimentary report review window"
      ],
      badge: "Most Comprehensive",
      popular: true
    },
    {
      id: "follow-up",
      title: "Follow-Up Consultation",
      fee: "₹500",
      duration: "15 – 20 Minutes",
      subtitle: "Progress Review & Dosage Adjustment",
      description: "For existing patients returning within 30 days of their last visit to evaluate treatment progress and lab report updates.",
      inclusions: [
        "Medication response & symptom review",
        "Analysis of newly conducted laboratory tests",
        "Dosage adjustments (Insulin/BP meds)",
        "Updated digital prescription dispatch"
      ],
      badge: "Existing Patients",
      popular: false
    },
    {
      id: "telehealth-fee",
      title: "Telehealth Video Visit",
      fee: "₹600",
      duration: "15 – 20 Minutes",
      subtitle: "Remote Consultation & Digital Rx",
      description: "For follow-ups, report reviews, or second opinions from home via secure HD video link on WhatsApp/Google Meet.",
      inclusions: [
        "Private 1 to 1 HD video consultation",
        "Review of uploaded PDF reports & labs",
        "Official signed digital PDF prescription",
        "7 days WhatsApp chat support for queries"
      ],
      badge: "Remote Visit",
      popular: false
    }
  ];

  const checklistItems = [
    {
      icon: FileText,
      title: "Prior Medical Records & Lab Reports",
      description: "Bring all previous blood test reports (HbA1c, Kidney/Liver panels, Thyroid), recent ECGs, X-rays, and hospital discharge summaries."
    },
    {
      icon: Pill,
      title: "Current Medicines / Pill Boxes",
      description: "Bring physical strips or bottles of all prescription medications, daily supplements, or inhalers you are currently taking."
    },
    {
      icon: Activity,
      title: "Self-Monitoring Logs",
      description: "If managing diabetes or high BP, bring any home blood sugar (fasting/PP) or blood pressure readings recorded over the last 1-2 weeks."
    },
    {
      icon: ShieldCheck,
      title: "Government Photo Identification",
      description: "A valid photo ID (Aadhaar, Driving License, or Voter ID) for initial registration and creation of your encrypted digital EMR record."
    }
  ];

  return (
    <section id="fees" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Radial Blur */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <CreditCard className="w-3.5 h-3.5 text-gold" />
            <span>Transparent Pricing &amp; Patient Guide</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Consultation Fees &amp; What to Expect
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            No surprise charges. Upfront, transparent fee structure for all consultation types and a simple checklist for your visit.
          </p>
        </div>

        {/* 3 Fee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {feeCards.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                card.popular
                  ? "bg-ivory border-2 border-gold shadow-card-hover"
                  : "bg-ivory border border-slateBlue-100 shadow-card-soft hover:shadow-card-hover hover:border-gold/40"
              }`}
            >
              {card.popular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gold text-slateBlue-900 font-bold text-xs uppercase px-3.5 py-1 rounded-full shadow-xs">
                  {card.badge}
                </div>
              )}

              <div>
                {!card.popular && (
                  <span className="text-[11px] font-bold text-slateBlue-600 bg-white px-2.5 py-1 rounded-full border border-slateBlue-100 inline-block mb-3">
                    {card.badge}
                  </span>
                )}

                <h3 className="font-heading font-bold text-xl text-slateBlue-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-xs font-semibold text-gold-dark mb-4">
                  {card.subtitle}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-4 bg-white p-4 rounded-xl border border-slateBlue-100">
                  <span className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900">
                    {card.fee}
                  </span>
                  <span className="text-xs text-slateBlue-600 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold" /> {card.duration}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slateBlue-700 leading-relaxed font-normal mb-6">
                  {card.description}
                </p>

                {/* Inclusions List */}
                <div className="border-t border-slateBlue-200/60 pt-4 mb-6">
                  <span className="block text-xs font-bold text-slateBlue-800 uppercase tracking-wider mb-3">
                    What's Included:
                  </span>
                  <ul className="space-y-2">
                    {card.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slateBlue-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-trustGreen shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="#appointment"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  card.popular
                    ? "bg-slateBlue-500 text-ivory hover:bg-slateBlue-600 shadow-md border border-gold/40"
                    : "bg-white hover:bg-slateBlue-500 hover:text-white text-slateBlue-900 border border-slateBlue-200"
                }`}
              >
                <Calendar className="w-4 h-4 text-gold" />
                <span>Book This Visit Type</span>
              </Link>
            </div>
          ))}
        </div>

        {/* "What to Bring" Patient Checklist Card */}
        <div className="bg-ivory rounded-2xl p-8 sm:p-10 border border-slateBlue-100 shadow-card-soft mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold-dark uppercase tracking-wider block mb-1">
              Patient Preparation Guide
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slateBlue-900">
              What to Bring for Your Consultation
            </h3>
            <p className="text-xs sm:text-sm text-slateBlue-600 mt-1">
              Bringing these items helps Dr. Sharma gain a comprehensive view of your health history right from minute one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {checklistItems.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-slateBlue-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slateBlue-50 text-slateBlue-600 flex items-center justify-center shrink-0 border border-slateBlue-100">
                    <IconComp className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-slateBlue-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slateBlue-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* No Hidden Fees Guarantee Banner */}
        <div className="bg-slateBlue-900 text-ivory rounded-2xl p-8 border border-gold/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gold-gradient-badge text-slateBlue-900 flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6 text-slateBlue-900" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Zero Hidden Charges Guarantee
              </h4>
              <p className="text-xs text-slate-300 max-w-xl">
                All diagnostic tests (ECG, ABPM, blood draws) are quoted transparently before proceeding. Payment accepted via UPI (Google Pay, PhonePe), Cards, or Cash.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
