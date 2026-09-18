"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, ShieldCheck, Video, MapPin, Sparkles, RefreshCw, AlertCircle } from "lucide-react";

export default function AppointmentSection() {
  const [patientStatus, setPatientStatus] = useState<"new" | "returning">("new");
  const [visitType, setVisitType] = useState<"in-clinic" | "telehealth">("in-clinic");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("10:30 AM");
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
    reason: "Diabetes & Blood Sugar Control",
    notes: ""
  });

  const timeSlots = [
    { time: "09:30 AM", session: "Morning" },
    { time: "10:30 AM", session: "Morning" },
    { time: "11:30 AM", session: "Morning" },
    { time: "12:30 PM", session: "Morning" },
    { time: "04:30 PM", session: "Evening" },
    { time: "05:30 PM", session: "Evening" },
    { time: "06:30 PM", session: "Evening" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = "RS-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="py-20 bg-ivory relative overflow-hidden border-t border-slateBlue-100">
      
      {/* Background Subtle Accent Lines */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-slateBlue-100/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>Direct Online Scheduling</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Book Your Consultation
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Reserve a dedicated, unhurried time slot with Dr. Rajeshwari Sharma. Instant SMS &amp; WhatsApp confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Booking Form Container */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-card-soft border border-slateBlue-100">
              
              {submitted ? (
                /* Instant Booking Confirmation Screen */
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-trustGreen-bg text-trustGreen flex items-center justify-center mx-auto border border-trustGreen/30 shadow-md">
                    <CheckCircle2 className="w-10 h-10 text-trustGreen" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-gold-dark uppercase tracking-wider block mb-1">
                      Appointment Confirmed
                    </span>
                    <h3 className="font-heading font-bold text-2xl text-slateBlue-900">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-xs text-slateBlue-600 mt-1">
                      Booking Reference ID: <span className="font-mono font-bold text-slateBlue-900 bg-slateBlue-50 px-2.5 py-1 rounded border border-slateBlue-200">{bookingRef}</span>
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-ivory p-6 rounded-xl border border-slateBlue-100 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-slateBlue-200/60 pb-2">
                      <span className="text-slateBlue-600 font-medium">Patient Status:</span>
                      <span className="font-bold text-slateBlue-900 capitalize">{patientStatus} Patient</span>
                    </div>
                    <div className="flex justify-between border-b border-slateBlue-200/60 pb-2">
                      <span className="text-slateBlue-600 font-medium">Visit Type:</span>
                      <span className="font-bold text-slateBlue-900 capitalize">{visitType === "in-clinic" ? "In-Clinic (Malviya Nagar)" : "Telehealth Video Visit"}</span>
                    </div>
                    <div className="flex justify-between border-b border-slateBlue-200/60 pb-2">
                      <span className="text-slateBlue-600 font-medium">Scheduled Date:</span>
                      <span className="font-bold text-slateBlue-900">{formData.date}</span>
                    </div>
                    <div className="flex justify-between border-b border-slateBlue-200/60 pb-2">
                      <span className="text-slateBlue-600 font-medium">Time Slot:</span>
                      <span className="font-bold text-gold-dark">{selectedTimeSlot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slateBlue-600 font-medium">Primary Reason:</span>
                      <span className="font-bold text-slateBlue-900">{formData.reason}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slateBlue-600 max-w-md mx-auto">
                    A WhatsApp message and SMS with clinic directions and pre-consultation guidelines have been sent to <strong>{formData.phone}</strong>. No advance payment is required for in-person clinic visits.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-slateBlue-500 text-white px-5 py-2.5 rounded-xl font-semibold text-xs hover:bg-slateBlue-600 transition-colors"
                    >
                      <RefreshCw className="w-4 h-4 text-gold" />
                      <span>Book Another Appointment</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Booking Form */
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Step 1: Patient Status & Visit Type Toggles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slateBlue-100">
                    
                    {/* Patient Status */}
                    <div>
                      <label className="block text-xs font-bold text-slateBlue-900 uppercase tracking-wider mb-2">
                        1. Patient Status
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setPatientStatus("new")}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border ${
                            patientStatus === "new"
                              ? "bg-slateBlue-500 text-ivory border-slateBlue-500 shadow-xs"
                              : "bg-ivory text-slateBlue-700 border-slateBlue-200/80 hover:bg-slateBlue-50"
                          }`}
                        >
                          New Patient
                        </button>
                        <button
                          type="button"
                          onClick={() => setPatientStatus("returning")}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border ${
                            patientStatus === "returning"
                              ? "bg-slateBlue-500 text-ivory border-slateBlue-500 shadow-xs"
                              : "bg-ivory text-slateBlue-700 border-slateBlue-200/80 hover:bg-slateBlue-50"
                          }`}
                        >
                          Returning Patient
                        </button>
                      </div>
                    </div>

                    {/* Visit Type */}
                    <div>
                      <label className="block text-xs font-bold text-slateBlue-900 uppercase tracking-wider mb-2">
                        2. Consultation Mode
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setVisitType("in-clinic")}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border ${
                            visitType === "in-clinic"
                              ? "bg-slateBlue-500 text-ivory border-slateBlue-500 shadow-xs"
                              : "bg-ivory text-slateBlue-700 border-slateBlue-200/80 hover:bg-slateBlue-50"
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5 text-gold" />
                          <span>In-Clinic Visit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setVisitType("telehealth")}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border ${
                            visitType === "telehealth"
                              ? "bg-slateBlue-500 text-ivory border-slateBlue-500 shadow-xs"
                              : "bg-ivory text-slateBlue-700 border-slateBlue-200/80 hover:bg-slateBlue-50"
                          }`}
                        >
                          <Video className="w-3.5 h-3.5 text-gold" />
                          <span>Telehealth Visit</span>
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Step 2: Patient Contact Info */}
                  <div>
                    <label className="block text-xs font-bold text-slateBlue-900 uppercase tracking-wider mb-3">
                      3. Patient Information
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slateBlue-700 mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slateBlue-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            name="fullName"
                            placeholder="e.g. Ramesh Sharma"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full pl-9 pr-3 py-2.5 bg-ivory border border-slateBlue-200 rounded-xl text-xs font-semibold text-slateBlue-900 focus:outline-none focus:ring-2 focus:ring-slateBlue-500/50"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-semibold text-slateBlue-700 mb-1">
                          Mobile Number (for WhatsApp SMS) *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slateBlue-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            name="phone"
                            placeholder="+91 98290 12345"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-9 pr-3 py-2.5 bg-ivory border border-slateBlue-200 rounded-xl text-xs font-semibold text-slateBlue-900 focus:outline-none focus:ring-2 focus:ring-slateBlue-500/50"
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Step 3: Date & Time Slot Selection */}
                  <div className="space-y-4 pt-2">
                    <label className="block text-xs font-bold text-slateBlue-900 uppercase tracking-wider mb-1">
                      4. Preferred Date &amp; Time Slot
                    </label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-slateBlue-700 mb-1">
                          Select Date *
                        </label>
                        <input
                          type="date"
                          required
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 bg-ivory border border-slateBlue-200 rounded-xl text-xs font-semibold text-slateBlue-900 focus:outline-none focus:ring-2 focus:ring-slateBlue-500/50"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slateBlue-700 mb-1">
                          Select Available Time Slot *
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {timeSlots.map((slot, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedTimeSlot(slot.time)}
                              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                                selectedTimeSlot === slot.time
                                  ? "bg-gold text-slateBlue-900 font-bold shadow-xs border border-gold-dark"
                                  : "bg-ivory hover:bg-slateBlue-50 text-slateBlue-800 border border-slateBlue-200/80"
                              }`}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Reason for Visit & Notes */}
                  <div className="space-y-4 pt-2 border-t border-slateBlue-100">
                    <label className="block text-xs font-bold text-slateBlue-900 uppercase tracking-wider mb-1">
                      5. Primary Medical Concern
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slateBlue-700 mb-1">
                          Primary Reason *
                        </label>
                        <select
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 bg-ivory border border-slateBlue-200 rounded-xl text-xs font-semibold text-slateBlue-900 focus:outline-none focus:ring-2 focus:ring-slateBlue-500/50"
                        >
                          <option value="Diabetes & Blood Sugar Control">Diabetes &amp; Blood Sugar Control</option>
                          <option value="Hypertension & BP Titration">Hypertension &amp; BP Titration</option>
                          <option value="Thyroid & Endocrine Symptoms">Thyroid &amp; Endocrine Symptoms</option>
                          <option value="Comprehensive Health Checkup">Comprehensive Health Checkup</option>
                          <option value="Post-COVID / Chronic Fatigue">Post-COVID / Chronic Fatigue</option>
                          <option value="Fever / Acute Symptoms">Fever / Acute Symptoms</option>
                          <option value="General Physician Consultation">General Physician Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slateBlue-700 mb-1">
                          Brief Symptoms / Additional Notes (Optional)
                        </label>
                        <textarea
                          rows={2}
                          name="notes"
                          placeholder="e.g. Duration of symptoms, current medications..."
                          value={formData.notes}
                          onChange={handleInputChange}
                          className="w-full p-2.5 bg-ivory border border-slateBlue-200 rounded-xl text-xs font-medium text-slateBlue-900 focus:outline-none focus:ring-2 focus:ring-slateBlue-500/50 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-slateBlue-500 hover:bg-slateBlue-600 text-ivory py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg border border-gold/40 flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5 text-gold" />
                      <span>Confirm &amp; Reserve Appointment Slot</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Practice Trust & Phone Booking Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Phone Booking Box */}
            <div className="bg-slateBlue-900 text-white rounded-2xl p-6 border border-gold/40 shadow-card-soft space-y-4">
              <div className="w-10 h-10 rounded-xl gold-gradient-badge text-slateBlue-900 flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-white">
                  Prefer Phone Booking?
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Our clinic reception team is available Mon – Sat from 9:00 AM to 7:00 PM for immediate telephone slot reservation.
                </p>
              </div>

              <a
                href="tel:+911412345678"
                className="w-full bg-gold hover:bg-gold-light text-slateBlue-900 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 141 234 5678</span>
              </a>
            </div>

            {/* Privacy & Trust Indicators */}
            <div className="bg-white rounded-2xl p-6 border border-slateBlue-100 shadow-card-soft space-y-4">
              <h4 className="font-heading font-bold text-base text-slateBlue-900 pb-2 border-b border-slateBlue-100">
                Patient Privacy &amp; Booking Guarantee
              </h4>

              <div className="space-y-3 text-xs text-slateBlue-700 font-medium">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-trustGreen shrink-0 mt-0.5" />
                  <span><strong>100% Confidential:</strong> Your medical details are encrypted and strictly protected.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-trustGreen shrink-0 mt-0.5" />
                  <span><strong>No Advance Payment:</strong> Pay at clinic desk after your consultation.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-trustGreen shrink-0 mt-0.5" />
                  <span><strong>Zero Wait Guarantee:</strong> Slot pre-booking ensures prompt entry upon arrival.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
