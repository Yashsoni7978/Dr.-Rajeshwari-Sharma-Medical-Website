"use client";

import React from "react";
import { Users, Heart, Award, CheckCircle2, Stethoscope, Apple, Headphones, Sparkles } from "lucide-react";

export default function CareTeamSection() {
  const teamMembers = [
    {
      id: "sunita-choudhary",
      name: "Sunita Choudhary",
      title: "Senior Nurse & Clinical Coordinator",
      credentials: "B.Sc Nursing (RUHS) • 12+ Years Experience",
      role: "Clinical Care & Triage",
      bio: "Oversees vital signs checks, 12-lead ECG recordings, patient triage, and medication administration. Known for her gentle care and thoroughness during every clinic visit.",
      responsibilities: [
        "Patient Triage & Vital Signs Check",
        "Point-of-Care 12-Lead ECG Recording",
        "Sterile Blood Sample Collection",
        "Medication & Inhaler Guidance"
      ],
      avatarType: "nurse",
      color: "text-trustGreen",
      badgeColor: "bg-trustGreen-bg text-trustGreen-dark"
    },
    {
      id: "ananya-sharma",
      name: "Ananya Sharma",
      title: "Consultant Clinical Dietitian",
      credentials: "M.Sc Clinical Nutrition • Certified Diabetes Educator (CDE)",
      role: "Metabolic Nutrition",
      bio: "Designs personalized, culturally tailored North Indian and Rajasthani diet charts for diabetes management, fatty liver reversal, weight optimization, and hypertension control.",
      responsibilities: [
        "Diabetes & HbA1c Meal Planning",
        "Renal & Fatty Liver Nutrition",
        "Cardiovascular Low-Sodium Diets",
        "Weight & Metabolic Counseling"
      ],
      avatarType: "dietitian",
      color: "text-gold-dark",
      badgeColor: "bg-gold-subtle text-gold-dark"
    },
    {
      id: "vikramaditya-rathore",
      name: "Vikramaditya Rathore",
      title: "Front-Desk & Patient Experience Coordinator",
      credentials: "B.A. • Diploma in Healthcare Administration (8+ Yrs)",
      role: "Patient Relations",
      bio: "Handles appointment slot scheduling, TPA insurance documentation guidance, lab report dispatch, and ensures every patient experiences a smooth, zero-wait visit.",
      responsibilities: [
        "Appointment & Slot Scheduling",
        "Digital Report Dispatch & EMR",
        "TPA Insurance Paperwork Desk",
        "Elderly & Wheelchair Assistance"
      ],
      avatarType: "desk",
      color: "text-slateBlue-500",
      badgeColor: "bg-slateBlue-50 text-slateBlue-700"
    }
  ];

  return (
    <section id="care-team" className="py-20 bg-white relative overflow-hidden border-t border-slateBlue-100">
      
      {/* Decorative background accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-slateBlue-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Users className="w-3.5 h-3.5 text-gold" />
            <span>Supporting Clinical Professionals</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Meet Our Care Team
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Working alongside Dr. Rajeshwari Sharma to ensure personalized care, nutrition counseling, and smooth clinical support for every patient.
          </p>
        </div>

        {/* 3 Illustrated Staff Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="photo-card-frame bg-white p-6 shadow-card-soft hover:shadow-card-hover border border-slateBlue-100/80 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Illustrated Avatar Canvas Box */}
                <div className="relative rounded-2xl overflow-hidden photo-card-gradient h-64 mb-6 border border-white/20 p-4 flex flex-col items-center justify-center">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-slateBlue-900 px-2.5 py-1 rounded-full shadow-xs">
                    {member.role}
                  </div>

                  {/* Vector SVG Staff Graphic */}
                  <svg
                    viewBox="0 0 200 200"
                    className="w-40 h-40 object-contain relative z-10 drop-shadow-md"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Shadow base */}
                    <ellipse cx="100" cy="185" rx="55" ry="8" fill="#1b2a3b" fillOpacity="0.25" />

                    {/* Outfit & Shoulders */}
                    <path
                      d="M40 190 Q100 110 160 190 Z"
                      fill={member.avatarType === "nurse" ? "#3E7C59" : member.avatarType === "dietitian" ? "#2E4C6D" : "#2E4C6D"}
                    />
                    <path d="M70 140 L100 190 L130 140" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
                    
                    {/* Neck */}
                    <rect x="90" y="100" width="20" height="25" rx="5" fill="#f2c1a2" />

                    {/* Face Base */}
                    <circle cx="100" cy="75" r="30" fill="#f2c1a2" />

                    {/* Hair */}
                    {member.avatarType === "nurse" && (
                      <path d="M70 75 C70 45, 90 35, 100 35 C115 35, 130 45, 130 75 C130 85, 125 90, 120 85 C110 55, 80 55, 75 85 Z" fill="#1a1a1a" />
                    )}
                    {member.avatarType === "dietitian" && (
                      <path d="M68 75 C68 40, 92 32, 100 32 C118 32, 132 40, 132 75 C132 85, 126 92, 122 85 C110 50, 78 50, 72 85 Z" fill="#4a2c11" />
                    )}
                    {member.avatarType === "desk" && (
                      <path d="M72 70 C72 45, 88 35, 100 35 C112 35, 128 45, 128 70 Z" fill="#2b2b2b" />
                    )}

                    {/* Face details */}
                    <circle cx="90" cy="75" r="2.5" fill="#1b2a3b" />
                    <circle cx="110" cy="75" r="2.5" fill="#1b2a3b" />
                    <path d="M92 90 Q100 98 108 90" stroke="#a65846" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                    {/* Specialty Accessory Icon Overlay */}
                    {member.avatarType === "nurse" && (
                      <path d="M75 130 C75 155, 125 155, 125 130" stroke="#C9A227" strokeWidth="3" fill="none" />
                    )}
                    {member.avatarType === "dietitian" && (
                      <circle cx="140" cy="150" r="14" fill="#C9A227" />
                    )}
                    {member.avatarType === "desk" && (
                      <rect x="125" y="135" width="20" height="25" rx="3" fill="#FAF8F3" stroke="#2E4C6D" strokeWidth="2" />
                    )}
                  </svg>

                  {/* Overlaid Role Pill */}
                  <div className="absolute bottom-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-gold/30 text-center shadow-xs">
                    <span className="text-xs font-bold text-slateBlue-900 block">
                      {member.name}
                    </span>
                  </div>
                </div>

                {/* Staff Member Info */}
                <h3 className="font-heading font-bold text-xl text-slateBlue-900 mb-1">
                  {member.name}
                </h3>
                <p className={`text-xs font-bold mb-1 ${member.color}`}>
                  {member.title}
                </p>
                <p className="text-[11px] text-slateBlue-600 font-semibold mb-3">
                  {member.credentials}
                </p>

                <p className="text-sm text-slateBlue-700 leading-relaxed font-normal mb-6">
                  {member.bio}
                </p>

                {/* Responsibilities list */}
                <div className="border-t border-slateBlue-100 pt-4">
                  <span className="block text-xs font-bold text-slateBlue-800 uppercase tracking-wider mb-2">
                    Key Clinical Responsibilities:
                  </span>
                  <ul className="space-y-1.5">
                    {member.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-slateBlue-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-trustGreen shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Team Collaboration Banner */}
        <div className="bg-slateBlue-900 text-ivory rounded-2xl p-8 border border-gold/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gold-gradient-badge text-slateBlue-900 flex items-center justify-center shrink-0 shadow-md">
              <Heart className="w-6 h-6 text-slateBlue-900" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Collaborative, Multi-Disciplinary Healthcare
              </h4>
              <p className="text-xs text-slate-300">
                Our entire care team works together under Dr. Sharma’s direct supervision to ensure your health journey is complete and supported.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
