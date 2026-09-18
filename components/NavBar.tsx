"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Clock, MapPin, Calendar, Menu, X, ShieldCheck, Stethoscope } from "lucide-react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Utility Bar (Classic WordPress Medical Theme Style) */}
      <div className="bg-slateBlue-900 text-white text-xs py-2 px-4 border-b border-slateBlue-700/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Left Info items */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-200">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM | Sun: Emergency/By Appt</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 border-l border-slateBlue-700 pl-4">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Apex Circle, Malviya Nagar, Jaipur</span>
            </div>
          </div>

          {/* Right Info & Phone */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+911412345678"
              className="flex items-center gap-1.5 hover:text-gold transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 141 234 5678</span>
            </a>
            <span className="text-slateBlue-600">|</span>
            <div className="flex items-center gap-1 text-trustGreen-light font-medium bg-trustGreen-dark/30 px-2 py-0.5 rounded border border-trustGreen/30">
              <ShieldCheck className="w-3 h-3 text-trustGreen-light" />
              <span>Accepting New Patients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav className="bg-ivory border-b border-slateBlue-100/80 shadow-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Doctor Logo & Credentials */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-slateBlue-500 flex items-center justify-center text-ivory shadow-md group-hover:bg-slateBlue-600 transition-colors border border-gold/40">
              <Stethoscope className="w-6 h-6 text-gold" />
            </div>
            <div>
              <div className="font-heading font-bold text-lg md:text-xl text-slateBlue-900 leading-tight group-hover:text-slateBlue-500 transition-colors">
                Dr. Rajeshwari Sharma
              </div>
              <p className="text-xs text-slateBlue-600 font-medium">
                MD, FICP, FACP • Senior Consultant Physician
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 font-medium text-sm text-slateBlue-800">
            <Link href="#about" className="hover:text-slateBlue-500 transition-colors py-1 border-b-2 border-transparent hover:border-gold">
              About
            </Link>
            <Link href="#specializations" className="hover:text-slateBlue-500 transition-colors py-1 border-b-2 border-transparent hover:border-gold">
              Specializations
            </Link>
            <Link href="#conditions" className="hover:text-slateBlue-500 transition-colors py-1 border-b-2 border-transparent hover:border-gold">
              Conditions
            </Link>
            <Link href="#why-us" className="hover:text-slateBlue-500 transition-colors py-1 border-b-2 border-transparent hover:border-gold">
              Why Choose Us
            </Link>
            <Link href="#facilities" className="hover:text-slateBlue-500 transition-colors py-1 border-b-2 border-transparent hover:border-gold">
              Clinic
            </Link>
            <Link href="#testimonials" className="hover:text-slateBlue-500 transition-colors py-1 border-b-2 border-transparent hover:border-gold">
              Testimonials
            </Link>
            <Link href="#faq" className="hover:text-slateBlue-500 transition-colors py-1 border-b-2 border-transparent hover:border-gold">
              FAQ
            </Link>
            <Link href="#contact" className="hover:text-slateBlue-500 transition-colors py-1 border-b-2 border-transparent hover:border-gold">
              Contact
            </Link>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="#appointment"
              className="hidden sm:inline-flex items-center gap-2 bg-slateBlue-500 hover:bg-slateBlue-600 text-ivory px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow border border-gold/30"
            >
              <Calendar className="w-4 h-4 text-gold" />
              <span>Book Appointment</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slateBlue-900 rounded-md hover:bg-slateBlue-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 flex flex-col gap-3 pb-2 px-2 text-slateBlue-900">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slateBlue-50 text-sm font-medium"
            >
              About Dr. Sharma
            </Link>
            <Link
              href="#specializations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slateBlue-50 text-sm font-medium"
            >
              Specializations & Services
            </Link>
            <Link
              href="#conditions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slateBlue-50 text-sm font-medium"
            >
              Conditions Treated
            </Link>
            <Link
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slateBlue-50 text-sm font-medium"
            >
              Why Choose Practice
            </Link>
            <Link
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slateBlue-50 text-sm font-medium"
            >
              Clinic Facilities
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slateBlue-50 text-sm font-medium"
            >
              Patient Testimonials
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slateBlue-50 text-sm font-medium"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slateBlue-50 text-sm font-medium"
            >
              Location & Contact
            </Link>
            <Link
              href="#appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center bg-slateBlue-500 text-ivory py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-gold" />
              Book Appointment
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
