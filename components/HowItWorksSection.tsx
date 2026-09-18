"use client";

import React from "react";
import Link from "next/link";
import { Calendar, MessageSquare, Stethoscope, FileText, ArrowRight, CheckCircle2, Clock, Phone, Sparkles } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: Calendar,
      title: "Book Your Time Slot",
      subtitle: "Online Form or Phone Call",
      description: "Select your preferred date, time slot, and visit type (In-Clinic or Telehealth) using our simple online booking portal or by calling our Jaipur desk directly.",
      bullet: "Takes under 1 minute; no advance payment required for in-person visits."
    },
    {
      step: "02",
      icon: MessageSquare,
      title: "Receive Confirmation",
      subtitle: "Instant SMS / WhatsApp Details",
      description: "Get instant booking confirmation along with Google Maps clinic directions, parking guidance, and a quick 'What to Bring' checklist for your visit.",
      bullet: "Automated SMS reminder sent 2 hours before your scheduled appointment."
    },
    {
      step: "03",
      icon: Stethoscope,
      title: "Unhurried Consultation",
      subtitle: "20–30 Minutes with Dr. Sharma",
      description: "Arrive at our Malviya Nagar clinic. Dr. Rajeshwari Sharma personally conducts a thorough 20-30 minute consultation, vital signs check, and report review.",
      bullet: "Zero long queues; prompt slot entry in a comfortable AC lounge."
    },
    {
      step: "04",
      icon: FileText,
      title: "Care Plan & Follow-Up",
      subtitle: "Digital Rx & Ongoing Support",
      description: "Receive a clear digital prescription detailing medication, diet plans, and lifestyle steps. Access follow-up scheduling and digital lab report delivery.",
      bullet: "Direct WhatsApp support for medication dosage queries post-visit."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Streamlined Patient Journey</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            How Your Appointment Works
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Four simple steps designed to respect your time, remove medical stress, and ensure continuous healthcare support.
          </p>
        </div>

        {/* 4 Step Connected Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
          
          {steps.map((s, index) => {
            const IconComp = s.icon;
            return (
              <div
                key={index}
                className="bg-ivory rounded-2xl p-6 border border-slateBlue-100/80 shadow-card-soft hover:shadow-card-hover hover:border-gold/50 transition-all flex flex-col justify-between group relative"
              >
                {/* Step Number Watermark */}
                <div className="absolute top-4 right-4 text-3xl font-heading font-bold text-slateBlue-200/80 select-none group-hover:text-gold/30 transition-colors">
                  {s.step}
                </div>

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-slateBlue-500 text-gold flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slateBlue-900 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-dark mb-3">
                    {s.subtitle}
                  </p>
                  <p className="text-sm text-slateBlue-700 leading-relaxed mb-4 font-normal">
                    {s.description}
                  </p>
                </div>

                {/* Bottom Bullet */}
                <div className="pt-3 border-t border-slateBlue-200/60 flex items-start gap-1.5 text-xs text-slateBlue-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trustGreen shrink-0 mt-0.5" />
                  <span>{s.bullet}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA Banner */}
        <div className="bg-ivory rounded-2xl p-8 border border-slateBlue-100 shadow-card-soft flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-trustGreen-bg text-trustGreen-dark flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-slateBlue-900">
                Ready to schedule your appointment?
              </h4>
              <p className="text-xs text-slateBlue-600">
                Mon - Sat: 9:00 AM - 7:00 PM • Same-day appointments available for urgent concerns.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="#appointment"
              className="inline-flex items-center gap-2 bg-slateBlue-500 hover:bg-slateBlue-600 text-ivory px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md border border-gold/40"
            >
              <Calendar className="w-4 h-4 text-gold" />
              <span>Book Appointment Now</span>
            </Link>
            <a
              href="tel:+911412345678"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slateBlue-50 text-slateBlue-900 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-slateBlue-200"
            >
              <Phone className="w-4 h-4 text-slateBlue-500" />
              <span>Call Clinic</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
