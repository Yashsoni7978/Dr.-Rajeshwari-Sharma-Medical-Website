"use client";

import React from "react";
import Link from "next/link";
import { Stethoscope, Phone, Mail, MapPin, Clock, ShieldCheck, Heart, Award, ChevronRight, AlertTriangle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slateBlue-900 text-white pt-16 pb-8 border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slateBlue-700/80">
          
          {/* Column 1: Doctor Credentials & Practice Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl gold-gradient-badge text-slateBlue-900 flex items-center justify-center font-bold shadow-md">
                <Stethoscope className="w-6 h-6 text-slateBlue-900" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg md:text-xl text-ivory leading-tight">
                  Dr. Rajeshwari Sharma
                </div>
                <p className="text-xs text-gold font-semibold">
                  MD, FICP, FACP • Senior Consultant Physician
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Over 18+ years of dedicated clinical practice in Internal Medicine, Diabetology, Hypertension, and Preventive Healthcare in Jaipur, Rajasthan.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-slate-300">
              <span className="bg-slateBlue-800 px-2.5 py-1 rounded border border-slateBlue-700">
                NMC Reg No: 23412
              </span>
              <span className="bg-slateBlue-800 px-2.5 py-1 rounded border border-slateBlue-700 text-gold font-semibold">
                FACP Fellow (USA)
              </span>
              <span className="bg-slateBlue-800 px-2.5 py-1 rounded border border-slateBlue-700">
                FICP Fellow
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-ivory uppercase tracking-wider text-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#about" className="hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" /> About Dr. Sharma
                </Link>
              </li>
              <li>
                <Link href="#specializations" className="hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" /> Specializations &amp; Services
                </Link>
              </li>
              <li>
                <Link href="#conditions" className="hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" /> Conditions Index
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" /> Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" /> Clinic Facilities
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" /> Patient Stories
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" /> Patient FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-ivory uppercase tracking-wider text-gold">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><Link href="#specializations" className="hover:text-gold">Diabetes Care</Link></li>
              <li><Link href="#specializations" className="hover:text-gold">Hypertension</Link></li>
              <li><Link href="#specializations" className="hover:text-gold">Thyroid Care</Link></li>
              <li><Link href="#specializations" className="hover:text-gold">Executive Checkup</Link></li>
              <li><Link href="#specializations" className="hover:text-gold">Geriatric Care</Link></li>
              <li><Link href="#telehealth" className="hover:text-gold">Telehealth Video</Link></li>
              <li><Link href="#fees" className="hover:text-gold">Fee Structure</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm text-slate-300">
            <h4 className="font-heading font-bold text-sm text-ivory uppercase tracking-wider text-gold">
              Jaipur Practice Desk
            </h4>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>Apex Circle, Malviya Nagar, Jaipur, Rajasthan 302017</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+911412345678" className="hover:text-gold">+91 141 234 5678 / +91 98290 12345</a>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:contact@drrajeshwarisharma.com" className="hover:text-gold">contact@drrajeshwarisharma.com</a>
            </div>

            <div className="flex items-start gap-2 pt-2 border-t border-slateBlue-800">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>Mon – Sat: 9:00 AM – 1:30 PM | 4:30 PM – 7:30 PM</span>
            </div>
          </div>

        </div>

        {/* Emergency Medical Disclaimer Bar */}
        <div className="py-6 border-b border-slateBlue-800 text-xs text-slate-400 space-y-1">
          <div className="flex items-center gap-1.5 text-gold font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Emergency Medical Disclaimer</span>
          </div>
          <p className="leading-relaxed font-normal">
            The medical information provided on this website is for patient education and appointment scheduling only. It does not constitute formal medical diagnosis or emergency advice. If you are experiencing acute chest pain, severe breathlessness, sudden weakness, or stroke symptoms, please call emergency services (108) or visit the nearest hospital casualty room immediately.
          </p>
        </div>

        {/* Bottom Legal & Agency Portfolio Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Dr. Rajeshwari Sharma Practice. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span>Built by</span>
            <span className="font-bold text-gold">Siyara Innovations</span>
            <span className="text-[10px] bg-slateBlue-800 px-2 py-0.5 rounded border border-slateBlue-700 text-slate-300">
              Portfolio Demo #5 of 7
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
