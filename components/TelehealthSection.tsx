"use client";

import React from "react";
import Link from "next/link";
import { Video, Smartphone, FileCheck2, CheckCircle2, XCircle, Calendar, CreditCard, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export default function TelehealthSection() {
  const steps = [
    {
      step: "01",
      icon: Smartphone,
      title: "Book & Submit Reports",
      description: "Select 'Telehealth Visit' in our online form or WhatsApp desk. Upload prior lab reports and current symptoms."
    },
    {
      step: "02",
      icon: Video,
      title: "Join HD Video Call",
      description: "Receive a secure video link via WhatsApp/SMS. Join a 15–20 minute private video consultation with Dr. Sharma."
    },
    {
      step: "03",
      icon: FileCheck2,
      title: "Digital Prescription",
      description: "Receive an official signed PDF prescription sent directly to your phone, with 7 days of follow-up chat support."
    }
  ];

  const telehealthSuited = [
    "Follow-up lab report reviews (HbA1c, Thyroid, Lipid profile)",
    "Insulin & hypertension medication dosage titrations",
    "Second opinions on existing hospital diagnosis",
    "Out-of-station / traveling patient consultations",
    "Dietary & metabolic lifestyle follow-up guidance",
    "Minor chronic symptom check-ins"
  ];

  const inPersonRequired = [
    "First-time comprehensive medical health evaluations",
    "Severe chest pain, shortness of breath, or cardiac signs (Emergency)",
    "Abdominal pain requiring physical palpation & stethoscope exam",
    "High acute fever with chills or suspected severe infection",
    "Physical wound, joint swelling, or diabetic foot inspection",
    "Routine 12-lead ECG or on-site blood sample draw"
  ];

  return (
    <section id="telehealth" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-slateBlue-100/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Video className="w-3.5 h-3.5 text-gold" />
            <span>Convenient Digital Healthcare</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Telehealth &amp; Online Video Consultations
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Consult Dr. Rajeshwari Sharma securely from your home in Jaipur, across Rajasthan, or anywhere in India.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="bg-ivory rounded-2xl p-6 border border-slateBlue-100/80 shadow-card-soft hover:shadow-card-hover transition-all relative group"
              >
                <span className="absolute top-4 right-4 text-2xl font-heading font-bold text-slateBlue-200/80 group-hover:text-gold/40 transition-colors">
                  {s.step}
                </span>

                <div className="w-12 h-12 rounded-xl bg-slateBlue-500 text-gold flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-lg text-slateBlue-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slateBlue-700 leading-relaxed font-normal">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Suited vs In-Person Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Suited for Telehealth */}
          <div className="bg-ivory rounded-2xl p-6 sm:p-8 border border-trustGreen/30 shadow-card-soft">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-trustGreen" />
              <h3 className="font-heading font-bold text-xl text-slateBlue-900">
                Ideal for Telehealth / Virtual Visit
              </h3>
            </div>
            <p className="text-xs text-slateBlue-600 mb-6">
              Online visits are highly effective and convenient for the following clinical needs:
            </p>
            <ul className="space-y-3">
              {telehealthSuited.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slateBlue-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-trustGreen shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requires In-Person Visit */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slateBlue-200 shadow-card-soft">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-6 h-6 text-slateBlue-500" />
              <h3 className="font-heading font-bold text-xl text-slateBlue-900">
                Requires In-Person Clinic Visit
              </h3>
            </div>
            <p className="text-xs text-slateBlue-600 mb-6">
              For medical safety and physical examination, please visit our Jaipur clinic for:
            </p>
            <ul className="space-y-3">
              {inPersonRequired.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slateBlue-700 font-normal">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Pricing & Digital Rx Banner */}
        <div className="bg-slateBlue-900 text-ivory rounded-2xl p-8 border border-gold/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-wider">
              <CreditCard className="w-4 h-4" />
              <span>Transparent Telehealth Fee</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white">
              ₹600 <span className="text-sm font-normal text-slate-300">/ Virtual Session</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl font-normal">
              Includes 15–20 min private HD video consultation, official digital PDF prescription, and 7 days of WhatsApp chat follow-up for lab report reviews.
            </p>
          </div>

          <Link
            href="#appointment"
            className="shrink-0 bg-gold hover:bg-gold-light text-slateBlue-900 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center gap-2"
          >
            <Video className="w-4 h-4" />
            <span>Book Online Video Visit</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
