"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ShieldCheck, Award, Users, Star, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-ivory via-white to-ivory pt-8 pb-16 overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slateBlue-100/40 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Status / Location Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-trustGreen-bg text-trustGreen-dark px-3.5 py-1.5 rounded-full border border-trustGreen/20 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-trustGreen animate-pulse"></span>
              <span>Accepting New Patients • Consultation Clinic in Jaipur</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slateBlue-900 leading-tight">
              Advanced Clinical Care &amp; <span className="text-slateBlue-500 underline decoration-gold/60 underline-offset-8">Compassionate</span> Internal Medicine
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
              Specialized diagnosis and holistic management for Diabetes, Hypertension, Thyroid Disorders, and Complex Chronic Illnesses. Partnering with you for long-term health and preventive longevity.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slateBlue-800 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-trustGreen shrink-0" />
                <span>Evidence-Based Diagnostics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-trustGreen shrink-0" />
                <span>Direct Doctor Access &amp; Care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-trustGreen shrink-0" />
                <span>Comprehensive Health Checkups</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-trustGreen shrink-0" />
                <span>Modern Clinic in Malviya Nagar</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 bg-slateBlue-500 hover:bg-slateBlue-600 text-ivory px-6 py-3.5 rounded-xl font-semibold text-base transition-all shadow-md hover:shadow-lg border border-gold/40 group"
              >
                <Calendar className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                <span>Book In-Person Visit</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-80 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+911412345678"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slateBlue-50 text-slateBlue-900 border border-slateBlue-200 px-6 py-3.5 rounded-xl font-semibold text-base transition-all shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-slateBlue-500" />
                <span>Call +91 141 234 5678</span>
              </a>
            </div>

            {/* Affiliation / Rating Tag */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slateBlue-600">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-semibold text-slateBlue-800">4.9 / 5.0</span>
              <span>• Over 500+ Verified Patient Reviews</span>
            </div>

          </div>

          {/* Right Column: Illustrated Photo Card Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Gold framing accent glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold/30 to-slateBlue-400/30 rounded-3xl blur-xl opacity-70 -z-10"></div>
              
              {/* Main Photo Card Frame */}
              <div className="photo-card-frame bg-white p-4 sm:p-6 text-center">
                {/* Visual Canvas for Doctor Portrait Illustration */}
                <div className="relative rounded-2xl overflow-hidden photo-card-gradient h-80 sm:h-96 flex items-end justify-center pt-8 border border-white/20">
                  {/* Background Radial Light Accent */}
                  <div className="absolute top-6 w-48 h-48 rounded-full bg-white/10 blur-xl"></div>
                  
                  {/* Illustrated Vector Graphic of Senior Female Consultant Physician */}
                  <svg
                    viewBox="0 0 320 380"
                    className="w-full h-full object-contain relative z-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Soft Shadow Base */}
                    <ellipse cx="160" cy="365" rx="100" ry="12" fill="#1b2a3b" fillOpacity="0.25" />

                    {/* Stethoscope around neck */}
                    <path
                      d="M115 210 C115 260, 205 260, 205 210"
                      stroke="#C9A227"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <circle cx="205" cy="210" r="10" fill="#2E4C6D" stroke="#C9A227" strokeWidth="4" />

                    {/* Doctor Shoulders & Lab Coat */}
                    <path
                      d="M60 380 Q160 220 260 380 Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M100 240 L160 380 L220 240"
                      stroke="#e1ebf4"
                      strokeWidth="3"
                      fill="none"
                    />
                    
                    {/* Inner Formal Professional Outfit */}
                    <path
                      d="M135 240 L160 290 L185 240 Z"
                      fill="#2E4C6D"
                    />
                    <path
                      d="M145 220 L160 240 L175 220 Z"
                      fill="#FAF8F3"
                    />

                    {/* Neck */}
                    <rect x="145" y="180" width="30" height="40" rx="8" fill="#e0b094" />

                    {/* Face Base */}
                    <path
                      d="M120 120 C120 75, 200 75, 200 120 C200 165, 175 190, 160 190 C145 190, 120 165, 120 120 Z"
                      fill="#f2c1a2"
                    />

                    {/* Hair (Elegant Short Medical Professional Hairstyle) */}
                    <path
                      d="M110 120 C110 70, 140 50, 160 50 C190 50, 215 70, 215 120 C215 130, 210 145, 205 135 C195 90, 125 90, 115 135 Z"
                      fill="#2a1f1d"
                    />

                    {/* Glasses */}
                    <rect x="130" y="115" width="24" height="16" rx="4" fill="none" stroke="#2E4C6D" strokeWidth="2.5" />
                    <rect x="166" y="115" width="24" height="16" rx="4" fill="none" stroke="#2E4C6D" strokeWidth="2.5" />
                    <line x1="154" y1="123" x2="166" y2="123" stroke="#2E4C6D" strokeWidth="2.5" />

                    {/* Eyes & Smile */}
                    <circle cx="142" cy="123" r="2.5" fill="#1b2a3b" />
                    <circle cx="178" cy="123" r="2.5" fill="#1b2a3b" />
                    <path d="M146 155 Q160 168 174 155" stroke="#a65846" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>

                  {/* Overlaid Gold Badge on Photo Card */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-gold/40 text-left shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full gold-gradient-badge flex items-center justify-center text-white shrink-0 font-bold text-xs shadow-xs">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-slateBlue-900 leading-tight">
                          Dr. Rajeshwari Sharma
                        </h4>
                        <p className="text-[11px] text-slateBlue-600 font-medium">
                          MD (Internal Medicine), FICP, FACP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Subtitle */}
                <div className="mt-3 flex items-center justify-between text-xs text-slateBlue-700 font-medium px-1">
                  <span className="flex items-center gap-1 text-trustGreen">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Practitioner
                  </span>
                  <span className="text-gold-dark font-semibold">Jaipur, Rajasthan</span>
                </div>
              </div>

              {/* Floating Stat Pill (Top Right) */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slateBlue-100 p-3 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slateBlue-50 flex items-center justify-center text-slateBlue-500">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-heading font-bold text-slateBlue-900 text-sm">18+ Years</div>
                  <div className="text-[11px] text-slateBlue-600">Clinical Excellence</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Stat Trust Strip (Full Width Container Below Hero) */}
        <div className="mt-16 bg-white rounded-2xl shadow-card-soft border border-slateBlue-100 p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slateBlue-100">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center p-2">
              <div className="w-12 h-12 rounded-xl bg-slateBlue-50 text-slateBlue-500 flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <span className="font-heading font-bold text-2xl md:text-3xl text-slateBlue-900">18+ Years</span>
              <span className="text-xs sm:text-sm text-slateBlue-600 mt-1 font-medium">Clinical Practice</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center p-2 pt-6 md:pt-2">
              <div className="w-12 h-12 rounded-xl bg-slateBlue-50 text-slateBlue-500 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-trustGreen" />
              </div>
              <span className="font-heading font-bold text-2xl md:text-3xl text-slateBlue-900">25,000+</span>
              <span className="text-xs sm:text-sm text-slateBlue-600 mt-1 font-medium">Patients Treated</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center p-2 pt-6 md:pt-2">
              <div className="w-12 h-12 rounded-xl bg-slateBlue-50 text-slateBlue-500 flex items-center justify-center mb-3">
                <Star className="w-6 h-6 fill-gold text-gold" />
              </div>
              <span className="font-heading font-bold text-2xl md:text-3xl text-slateBlue-900">4.9 / 5.0</span>
              <span className="text-xs sm:text-sm text-slateBlue-600 mt-1 font-medium">Patient Satisfaction</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center p-2 pt-6 md:pt-2">
              <div className="w-12 h-12 rounded-xl bg-slateBlue-50 text-slateBlue-500 flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6 text-slateBlue-500" />
              </div>
              <span className="font-heading font-bold text-2xl md:text-3xl text-slateBlue-900">MD, FICP, FACP</span>
              <span className="text-xs sm:text-sm text-slateBlue-600 mt-1 font-medium">Board Certified</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
