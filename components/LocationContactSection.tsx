"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ExternalLink, CheckCircle2, Navigation, MessageSquare, Sparkles } from "lucide-react";

export default function LocationContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    phoneOrEmail: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Subtle Accent Lines */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>Visit Our Clinic</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Location, Hours &amp; Contact
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Conveniently located at Apex Circle, Malviya Nagar, Jaipur. Reach us via phone, email, or visit in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details, Hours Table & Map Placeholder */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Contact Info Cards */}
            <div className="bg-ivory rounded-2xl p-6 sm:p-8 border border-slateBlue-100 shadow-card-soft space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slateBlue-500 text-gold flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slateBlue-900 mb-1">
                    Clinic Address
                  </h4>
                  <p className="text-xs sm:text-sm text-slateBlue-800 font-medium leading-relaxed">
                    Dr. Rajeshwari Sharma Practice<br />
                    Apex Circle, Opposite Apex Hospital, Main Calgiri Marg,<br />
                    Malviya Nagar, Jaipur, Rajasthan 302017
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4 pt-4 border-t border-slateBlue-200/60">
                <div className="w-10 h-10 rounded-xl bg-slateBlue-500 text-gold flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slateBlue-900 mb-1">
                    Telephone &amp; WhatsApp
                  </h4>
                  <p className="text-xs sm:text-sm text-slateBlue-800 font-medium leading-relaxed">
                    Clinic Landline: <a href="tel:+911412345678" className="font-bold text-slateBlue-900 hover:text-gold-dark">+91 141 234 5678</a><br />
                    WhatsApp Appointments: <a href="tel:+919829012345" className="font-bold text-slateBlue-900 hover:text-gold-dark">+91 98290 12345</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-slateBlue-200/60">
                <div className="w-10 h-10 rounded-xl bg-slateBlue-500 text-gold flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slateBlue-900 mb-1">
                    Email Contact
                  </h4>
                  <p className="text-xs sm:text-sm text-slateBlue-800 font-medium leading-relaxed">
                    <a href="mailto:contact@drrajeshwarisharma.com" className="hover:text-gold-dark">contact@drrajeshwarisharma.com</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Operating Hours Table Card */}
            <div className="bg-ivory rounded-2xl p-6 border border-slateBlue-100 shadow-card-soft space-y-4">
              <div className="flex items-center gap-2 text-slateBlue-900 font-heading font-bold text-base border-b border-slateBlue-200/60 pb-3">
                <Clock className="w-5 h-5 text-gold" />
                <span>Clinic Operating Hours</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slateBlue-800">Monday – Saturday (Morning OPD):</span>
                  <span className="font-bold text-slateBlue-900">09:00 AM – 01:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slateBlue-800">Monday – Saturday (Evening OPD):</span>
                  <span className="font-bold text-slateBlue-900">04:30 PM – 07:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 text-gold-dark font-medium">
                  <span className="font-semibold">Sunday:</span>
                  <span className="font-bold">Emergency / By Appointment</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder Graphic Frame */}
            <div className="photo-card-frame bg-white p-6 shadow-card-soft border border-slateBlue-100 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slateBlue-900 text-white h-56 flex flex-col justify-between p-6 border border-slateBlue-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-slateBlue-900 via-slateBlue-800 to-slateBlue-600 opacity-90"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-xl"></div>

                <div className="relative z-10 flex justify-between items-start">
                  <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/40">
                    Interactive Map Location
                  </span>
                  <span className="text-xs text-slate-300">Apex Circle, Jaipur</span>
                </div>

                <div className="relative z-10 my-auto text-center space-y-2">
                  <div className="w-12 h-12 rounded-full gold-gradient-badge text-slateBlue-900 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <Navigation className="w-6 h-6 text-slateBlue-900" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-white">
                    Dr. Rajeshwari Sharma Practice
                  </h4>
                  <p className="text-xs text-slate-200">
                    Opposite Apex Hospital, Calgiri Marg, Malviya Nagar
                  </p>
                </div>

                <div className="relative z-10 bg-white/10 backdrop-blur-sm p-2 rounded-xl text-center text-xs text-gold font-semibold">
                  Click below for live GPS Turn-by-Turn Directions
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-slateBlue-500 hover:bg-slateBlue-600 text-ivory py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs border border-gold/40"
              >
                <Navigation className="w-4 h-4 text-gold" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold ml-1" />
              </a>
            </div>

          </div>

          {/* Right Column: General Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-ivory rounded-2xl p-6 sm:p-10 border border-slateBlue-100 shadow-card-soft space-y-6">
              
              <div>
                <span className="text-xs font-bold text-gold-dark uppercase tracking-wider block mb-1">
                  Send a Direct Message
                </span>
                <h3 className="font-heading font-bold text-2xl text-slateBlue-900">
                  General Inquiry &amp; Feedback
                </h3>
                <p className="text-xs sm:text-sm text-slateBlue-600 mt-1">
                  Have a question about lab reports, hospital panels, or general medical queries? Drop us a message below.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-white p-8 rounded-xl text-center space-y-4 border border-trustGreen/30 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-trustGreen-bg text-trustGreen flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-trustGreen" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slateBlue-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slateBlue-600">
                    Thank you for reaching out. Our reception team will review your inquiry and get back to you within 2 to 4 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-slateBlue-600 underline hover:text-slateBlue-900"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-xs font-semibold text-slateBlue-800 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singh"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slateBlue-200 rounded-xl text-xs font-semibold text-slateBlue-900 focus:outline-none focus:ring-2 focus:ring-slateBlue-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slateBlue-800 mb-1">
                      Phone Number or Email *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mobile number or email address"
                      value={contactData.phoneOrEmail}
                      onChange={(e) => setContactData({ ...contactData, phoneOrEmail: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slateBlue-200 rounded-xl text-xs font-semibold text-slateBlue-900 focus:outline-none focus:ring-2 focus:ring-slateBlue-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slateBlue-800 mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slateBlue-200 rounded-xl text-xs font-semibold text-slateBlue-900 focus:outline-none focus:ring-2 focus:ring-slateBlue-500/50"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Lab Report Follow-up">Lab Report Follow-up</option>
                      <option value="Hospital Admission Query">Hospital Admission Query</option>
                      <option value="Community Camp Inquiry">Community Health Camp</option>
                      <option value="Feedback / Experience">Feedback &amp; Testimonial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slateBlue-800 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your message or question here..."
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full p-3 bg-white border border-slateBlue-200 rounded-xl text-xs font-medium text-slateBlue-900 focus:outline-none focus:ring-2 focus:ring-slateBlue-500/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slateBlue-500 hover:bg-slateBlue-600 text-ivory py-3 px-6 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 border border-gold/40"
                  >
                    <span>Send Message to Reception</span>
                    <Send className="w-4 h-4 text-gold" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
