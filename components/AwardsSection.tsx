"use client";

import React from "react";
import { Award, Trophy, Medal, Star, CheckCircle2, Bookmark, Sparkles, ShieldCheck } from "lucide-react";

export default function AwardsSection() {
  const awards = [
    {
      id: "api-physician-2023",
      year: "2023",
      title: "Outstanding Physician of the Year",
      issuingBody: "Association of Physicians of India (API Jaipur Chapter)",
      category: "Clinical Excellence",
      citation: "Conferred in recognition of exemplary diagnostic precision, patient safety compliance, and leadership in community diabetology screening initiatives across Rajasthan.",
      icon: Trophy
    },
    {
      id: "fortis-excellence-2021",
      year: "2021",
      title: "Excellence in Internal Medicine",
      issuingBody: "Fortis Escorts Hospital Medical Board, Jaipur",
      citation: "Recognized for outstanding inpatient clinical management, zero hospital-acquired infection record, and consistently high patient satisfaction scores.",
      category: "Hospital Honors",
      icon: Medal
    },
    {
      id: "facp-fellowship-2019",
      year: "2019",
      title: "Fellowship Designation (FACP)",
      issuingBody: "American College of Physicians (Philadelphia, USA)",
      citation: "Awarded international fellowship status in recognition of professional leadership, clinical dedication, and ongoing contributions to adult primary healthcare.",
      category: "International Honor",
      icon: Award
    },
    {
      id: "ima-preventive-2017",
      year: "2017",
      title: "Best Preventive Healthcare Initiative",
      issuingBody: "Indian Medical Association (IMA Rajasthan Branch)",
      citation: "Honored for organizing free diabetic retinopathy & neuropathy screening camps across suburban and rural Jaipur districts.",
      category: "Community Service",
      icon: Star
    },
    {
      id: "ficp-fellowship-2016",
      year: "2016",
      title: "Fellowship Designation (FICP)",
      issuingBody: "Indian College of Physicians (ICP / API)",
      citation: "Conferred national fellowship status for distinguished clinical service, ethical practice, and academic contributions to internal medicine.",
      category: "National Fellowship",
      icon: Award
    },
    {
      id: "rssdi-scholar-2012",
      year: "2012",
      title: "Young Investigator Diabetology Scholar Award",
      issuingBody: "Research Society for the Study of Diabetes in India (RSSDI)",
      citation: "Awarded for research paper presentation on insulin resistance patterns and early metabolic markers in South Asian adults.",
      category: "Academic Research",
      icon: Bookmark
    }
  ];

  return (
    <section id="awards" className="py-20 bg-ivory relative overflow-hidden border-t border-slateBlue-100">
      
      {/* Background Accent Lines */}
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Trophy className="w-3.5 h-3.5 text-gold" />
            <span>Honors &amp; Recognition</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Awards &amp; Professional Recognition
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Honored by premier medical associations and healthcare institutions for clinical diagnostic excellence, patient safety, and medical leadership.
          </p>
        </div>

        {/* 6 Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award) => {
            const IconComp = award.icon;
            return (
              <div
                key={award.id}
                className="bg-white rounded-2xl p-6 shadow-card-soft border border-slateBlue-100/80 hover:border-gold/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Year & Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-gold-dark bg-gold-subtle px-3 py-1 rounded-full border border-gold/30">
                      {award.year}
                    </span>
                    <span className="text-[11px] font-semibold text-slateBlue-600 bg-slateBlue-50 px-2.5 py-1 rounded-md border border-slateBlue-100">
                      {award.category}
                    </span>
                  </div>

                  {/* Trophy Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-slateBlue-500 text-gold flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Award Title & Issuing Body */}
                  <h3 className="font-heading font-bold text-xl text-slateBlue-900 mb-1">
                    {award.title}
                  </h3>
                  <p className="text-xs font-bold text-gold-dark mb-3 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{award.issuingBody}</span>
                  </p>

                  {/* Citation */}
                  <p className="text-sm text-slateBlue-700 leading-relaxed font-normal mb-6">
                    {award.citation}
                  </p>
                </div>

                {/* Bottom Verified Badge */}
                <div className="pt-3 border-t border-slateBlue-100 flex items-center justify-between text-xs text-trustGreen font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Recognition
                  </span>
                  <span className="text-[11px] text-slateBlue-400 font-semibold">{award.year}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment to Medical Ethics Banner */}
        <div className="bg-slateBlue-900 text-ivory rounded-2xl p-8 border border-gold/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gold-gradient-badge text-slateBlue-900 flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6 text-slateBlue-900" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Guided by Medical Ethics &amp; Continuous Improvement
              </h4>
              <p className="text-xs text-slate-300">
                Awards reflect our commitment, but our true measure of success is every healthy patient who walks out of our clinic door.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
