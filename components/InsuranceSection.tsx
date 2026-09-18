"use client";

import React from "react";
import { ShieldCheck, Building, CheckCircle2, Award, ExternalLink, PhoneCall, Sparkles, HeartPulse } from "lucide-react";

export default function InsuranceSection() {
  const insurancePartners = [
    { name: "Star Health & Allied Insurance", badge: "Direct Cashless Panel" },
    { name: "Max Bupa / Niva Bupa Health", badge: "Accepted Partner" },
    { name: "HDFC ERGO General Insurance", badge: "Pre-Approved Claims" },
    { name: "ICICI Lombard Health Insurance", badge: "TPA Cashless Network" },
    { name: "Care Health Insurance (Religare)", badge: "Instant Approval" },
    { name: "Bajaj Allianz General Insurance", badge: "Full Coverage Panel" },
    { name: "SBI General Insurance", badge: "Government & Corporate" },
    { name: "Reliance General Insurance", badge: "Direct Empaneled" }
  ];

  const hospitalAffiliations = [
    {
      id: "fortis-jaipur",
      name: "Fortis Escorts Hospital",
      location: "Malviya Nagar, Jaipur",
      role: "Visiting Senior Consultant Physician",
      description: "Super-specialty tertiary care hospital with state-of-the-art ICU, Cath Lab, and multi-organ critical care units. Dr. Sharma admits and manages complex internal medicine inpatients here.",
      badge: "Tertiary Inpatient Care"
    },
    {
      id: "apex-hospitals",
      name: "Apex Hospitals",
      location: "Apex Circle, Malviya Nagar, Jaipur",
      role: "Empaneled Senior Consultant",
      description: "Multi-specialty hospital located adjacent to our clinic. Facilitates seamless emergency admissions, advanced radiological imaging (CT/MRI), and inpatient medical care.",
      badge: "Adjacent Facility"
    },
    {
      id: "ehcc-jaipur",
      name: "Eternal Heart Care Centre (EHCC)",
      location: "Jawahar Circle, Jaipur",
      role: "Affiliated Medical Consultant",
      description: "Premier cardiac and multi-specialty institute. Dr. Sharma coordinates advanced cardiovascular workups and high-risk cardiac patient admissions with EHCC specialists.",
      badge: "Cardiac & ICU Panel"
    },
    {
      id: "rungta-hospital",
      name: "Rungta Hospital",
      location: "Calgiri Marg, Malviya Nagar, Jaipur",
      role: "Panel Consultant Physician",
      description: "Established general and surgical hospital providing round-the-clock emergency medical admissions, dialysis services, and inpatient room facilities.",
      badge: "24/7 Emergency Panel"
    },
    {
      id: "sms-hospital",
      name: "SMS Medical College & Hospital Network",
      location: "JL N Marg, Jaipur",
      role: "Alumni & Clinical Referral Liaison",
      description: "Dr. Sharma's alma mater. Maintains strong academic and tertiary referral links for rare, complex diagnostic cases requiring specialized state medical board review.",
      badge: "Academic Referral"
    }
  ];

  return (
    <section id="insurance" className="py-20 bg-ivory relative overflow-hidden border-t border-slateBlue-100">
      
      {/* Background Radial Light */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-slateBlue-100/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>Empaneled Networks &amp; Admissions</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Insurance TPAs &amp; Hospital Affiliations
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            We partner with India's leading health insurance TPAs and premier hospitals in Jaipur to ensure seamless inpatient care and claim processing.
          </p>
        </div>

        {/* Accepted Insurance TPAs Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold-dark uppercase tracking-wider block mb-1">
              Hassle-Free Reimbursements &amp; TPA Cashless
            </span>
            <h3 className="font-heading font-bold text-2xl text-slateBlue-900">
              Accepted Health Insurance Partners
            </h3>
            <p className="text-xs sm:text-sm text-slateBlue-600 mt-1">
              Official tax invoices provided for outpatient OPD claims. Full cashless TPA support at panel hospitals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {insurancePartners.map((ins, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-slateBlue-100/80 shadow-card-soft hover:shadow-card-hover hover:border-gold/40 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slateBlue-50 text-slateBlue-600 flex items-center justify-center shrink-0 border border-slateBlue-100">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slateBlue-900 leading-tight">
                    {ins.name}
                  </h4>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slateBlue-100 text-[11px]">
                  <span className="text-trustGreen-dark font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-trustGreen" /> {ins.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Government Scheme Note */}
          <div className="mt-4 bg-white/80 p-4 rounded-xl border border-slateBlue-100 text-center text-xs text-slateBlue-700 font-medium max-w-3xl mx-auto">
            <span className="text-gold-dark font-bold">Government Reimbursements: </span>
            CGHS, RGHS (Rajasthan Government Health Scheme), and ECHS prescription compliance for state &amp; central government beneficiaries.
          </div>
        </div>

        {/* Hospital Affiliations Cards */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-slateBlue-600 uppercase tracking-wider block mb-1">
              Inpatient &amp; Critical Care Support
            </span>
            <h3 className="font-heading font-bold text-2xl text-slateBlue-900">
              Empaneled Hospital Panels in Jaipur
            </h3>
            <p className="text-xs sm:text-sm text-slateBlue-600 mt-1">
              If hospitalization is required, Dr. Sharma oversees your admission and medical care at top Jaipur tertiary hospitals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalAffiliations.map((hosp) => (
              <div
                key={hosp.id}
                className="bg-white rounded-2xl p-6 shadow-card-soft border border-slateBlue-100/80 hover:border-gold/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slateBlue-500 text-gold flex items-center justify-center shadow-md">
                      <Building className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slateBlue-600 bg-slateBlue-50 px-2.5 py-1 rounded-full border border-slateBlue-100">
                      {hosp.badge}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-xl text-slateBlue-900 mb-1 group-hover:text-slateBlue-600 transition-colors">
                    {hosp.name}
                  </h4>
                  <p className="text-xs font-semibold text-gold-dark mb-1">
                    {hosp.location}
                  </p>
                  <p className="text-xs font-bold text-trustGreen-dark mb-3 bg-trustGreen-bg px-2.5 py-1 rounded-md inline-block">
                    Role: {hosp.role}
                  </p>
                  <p className="text-sm text-slateBlue-700 leading-relaxed font-normal mb-6">
                    {hosp.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slateBlue-100 flex items-center justify-between text-xs font-semibold text-slateBlue-800">
                  <span className="flex items-center gap-1 text-trustGreen">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Admission Privileges
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Admission Assistance Box */}
        <div className="bg-slateBlue-900 text-white rounded-2xl p-8 shadow-lg border border-gold/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-gold text-xs font-bold uppercase">
              <HeartPulse className="w-4 h-4 text-gold animate-pulse" />
              <span>Inpatient Emergency Assistance</span>
            </div>
            <h4 className="font-heading font-bold text-xl text-ivory">
              Need Direct Inpatient Admission Support in Jaipur?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 font-normal max-w-2xl">
              Our clinical desk coordinates immediate admission notes and ICU bed bookings at Fortis, Apex, and EHCC hospitals.
            </p>
          </div>

          <a
            href="tel:+911412345678"
            className="shrink-0 bg-gold hover:bg-gold-light text-slateBlue-900 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Admission Helpline</span>
          </a>
        </div>

      </div>
    </section>
  );
}
