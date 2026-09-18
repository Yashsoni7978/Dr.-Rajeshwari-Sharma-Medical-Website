"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, Calendar, Phone } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      id: "walk-in-appointment",
      question: "Do I need a prior appointment, or do you accept walk-in patients?",
      answer: "Prior appointment booking is strongly recommended so we can allocate a dedicated 20–30 minute consultation slot for you without waiting. However, emergency walk-in patients and acute medical cases are accommodated based on clinical urgency.",
      category: "Appointments"
    },
    {
      id: "what-to-bring",
      question: "What should I bring for my first consultation with Dr. Rajeshwari Sharma?",
      answer: "Please bring all prior medical records (previous lab reports, hospital discharge summaries, X-rays/ECGs), your current prescription medications or pill boxes, a valid photo ID, and any recent blood sugar or blood pressure logs.",
      category: "First Visit"
    },
    {
      id: "insurance-tpa",
      question: "Are health insurance policies (TPA / Cashless) accepted at the clinic?",
      answer: "Outpatient consultations at our Malviya Nagar clinic are billed directly on a transparent fee-for-service basis with official GST tax invoices for tax claims. For patients requiring hospital admission at our panel hospitals (Fortis, Apex, SMS attached units), full cashless TPA insurance coverage is facilitated.",
      category: "Insurance & Fees"
    },
    {
      id: "consultation-duration",
      question: "How long does a typical consultation with Dr. Sharma take?",
      answer: "First-time comprehensive consultation visits take 25 to 30 minutes for an in-depth medical history review, vital checks, physical examination, and plain-language report discussion. Follow-up consultations typically take 15 to 20 minutes.",
      category: "Care Quality"
    },
    {
      id: "telehealth-virtual",
      question: "Can I consult Dr. Sharma online via Telehealth / Video Consultation?",
      answer: "Yes. We offer structured video consultations for follow-up report reviews, diabetes/hypertension dosage titrations, and second opinions for non-emergency conditions. You will receive an official digital prescription immediately following your call.",
      category: "Telehealth"
    },
    {
      id: "lab-tests-ecg",
      question: "Does the clinic offer on-site laboratory testing and ECG facilities?",
      answer: "Yes. We have point-of-care facilities for 12-lead digital ECG recording, 24-hr Ambulatory BP Monitoring (ABPM), rapid HbA1c testing, and sterile blood sample collection partnered with NABL-accredited diagnostic laboratories.",
      category: "Diagnostics"
    },
    {
      id: "chronic-follow-up",
      question: "How does Dr. Sharma handle long-term diabetes and hypertension monitoring?",
      answer: "Patients on chronic disease care plans receive personalized target logs (HbA1c, fasting glucose, home BP). Follow-ups are scheduled every 4 to 12 weeks depending on disease stability, supported by direct WhatsApp channel access for minor dosage queries.",
      category: "Chronic Care"
    },
    {
      id: "elderly-accessibility",
      question: "Is the clinic accessible for elderly patients or wheelchair users?",
      answer: "Absolutely. Our clinic is situated on the ground floor at Apex Circle, Malviya Nagar, featuring step-free ramp entrances, wide corridors, sanitized wheelchairs on site, and dedicated patient parking directly in front of the entrance.",
      category: "Accessibility"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-slateBlue-100/30 rounded-full blur-3xl -z-10 transform -translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Common Patient Questions &amp; Answers
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Everything you need to know about booking, consultation protocol, insurance, and medical services at our Jaipur practice.
          </p>
        </div>

        {/* 100% Server-Rendered Accordion List using Semantic HTML <details> */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group bg-ivory rounded-2xl border border-slateBlue-100 shadow-card-soft overflow-hidden transition-all duration-200 [&[open]]:border-gold/60 [&[open]]:bg-white [&[open]]:shadow-card-hover"
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none select-none font-heading font-bold text-base sm:text-lg text-slateBlue-900 group-hover:text-slateBlue-600 transition-colors">
                <div className="flex items-center gap-3 pr-4">
                  <span className="text-[11px] font-bold text-slateBlue-600 bg-slateBlue-50 px-2.5 py-1 rounded-md border border-slateBlue-200/60 shrink-0">
                    {faq.category}
                  </span>
                  <span>{faq.question}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slateBlue-50 text-slateBlue-600 group-open:bg-slateBlue-500 group-open:text-gold flex items-center justify-center shrink-0 transition-colors">
                  <ChevronDown className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-200" />
                </div>
              </summary>

              {/* 100% Server Rendered Full Content Body */}
              <div className="px-5 pb-6 sm:px-6 text-sm text-slateBlue-800 leading-relaxed border-t border-slateBlue-100/80 pt-4 font-normal">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Still Have Questions Banner */}
        <div className="bg-slateBlue-900 text-ivory rounded-2xl p-8 border border-gold/30 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full gold-gradient-badge text-slateBlue-900 flex items-center justify-center shrink-0 shadow-md">
              <MessageCircle className="w-6 h-6 text-slateBlue-900" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Have a specific question not answered here?
              </h4>
              <p className="text-xs text-slate-300">
                Our patient care desk is available Mon - Sat from 9:00 AM to 7:00 PM to assist you.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+911412345678"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-slateBlue-900 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 141 234 5678</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
