"use client";

import React from "react";
import { Award, GraduationCap, HeartHandshake, Stethoscope, CheckCircle2, Bookmark, FileCheck, Shield, ChevronRight } from "lucide-react";

export default function AboutSection() {
  const educationTimeline = [
    {
      year: "2001 – 2006",
      title: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
      institution: "Sawai Man Singh (SMS) Medical College, Jaipur",
      description: "Graduated with Honors in Physiology & Pharmacology. Completed rigorous 1-year compulsory rotating internship across clinical departments.",
      badge: "Medical School",
    },
    {
      year: "2007 – 2010",
      title: "MD in Internal Medicine",
      institution: "SMS Hospital & Medical College, Jaipur",
      description: "Specialized post-graduate residency focusing on acute medical emergencies, intensive cardiac care, metabolic disorders, and infectious disease management.",
      badge: "Post-Graduate Residency",
    },
    {
      year: "2011 – 2012",
      title: "Post-Doctoral Fellowship in Diabetology & Endocrinology",
      institution: "RSSDI Center of Excellence / AIIMS New Delhi",
      description: "Advanced training in complex diabetes management, insulin therapy protocols, gestational diabetes, thyroid disorders, and metabolic health.",
      badge: "Fellowship",
    },
    {
      year: "2016",
      title: "Fellowship of the Indian College of Physicians (FICP)",
      institution: "Indian College of Physicians (ICP / API)",
      description: "Conferred national fellowship in recognition of outstanding clinical service, research contributions, and ethical practice in internal medicine.",
      badge: "National Fellowship",
    },
    {
      year: "2019",
      title: "Fellowship of the American College of Physicians (FACP)",
      institution: "American College of Physicians (Philadelphia, USA)",
      description: "Awarded international fellowship status for demonstration of leadership, clinical expertise, and dedication to medical education.",
      badge: "International Fellowship",
    },
    {
      year: "2021 – Present",
      title: "Senior Consultant Physician & Medical Director",
      institution: "Dr. Rajeshwari Sharma Practice, Malviya Nagar, Jaipur",
      description: "Leading an independent internal medicine practice delivering personalized, high-trust healthcare to over 25,000 patients across Rajasthan.",
      badge: "Current Practice",
    }
  ];

  const philosophyPillars = [
    {
      icon: Stethoscope,
      title: "Patient-Centered Diagnostics",
      description: "We believe thorough clinical examination and detailed patient history form the cornerstone of accurate medical diagnosis before ordering targeted lab tests."
    },
    {
      icon: FileCheck,
      title: "Evidence-Based Medicine",
      description: "Treatment plans adhere strictly to guidelines from ICMR, RSSDI, and international medical colleges, adapted for individualized patient needs."
    },
    {
      icon: Shield,
      title: "Preventive & Holistic Focus",
      description: "Preventing organ damage and disease progression by actively managing early-stage metabolic risk factors like high blood pressure and blood sugar."
    },
    {
      icon: HeartHandshake,
      title: "Continuity of Care",
      description: "Building long-term doctor-patient relationships. You see the same trusted doctor at every visit, ensuring consistent monitoring and personal care."
    }
  ];

  const certifications = [
    "Medical Council of India (NMC) Registration No: 23412 (Rajasthan Medical Council)",
    "Fellow of the American College of Physicians (FACP, USA)",
    "Fellow of the Indian College of Physicians (FICP)",
    "Life Member — Association of Physicians of India (API)",
    "Life Member — Research Society for the Study of Diabetes in India (RSSDI)",
    "Life Member — Indian Medical Association (IMA Jaipur Branch)",
    "Certified Specialist in Clinical Diabetology (RSSDI)",
    "Advanced Certificate in Thyroid Disorders (Thyroid Association of India)"
  ];

  return (
    <section id="about" className="py-20 bg-ivory relative overflow-hidden border-t border-slateBlue-100">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-slateBlue-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Award className="w-3.5 h-3.5 text-gold" />
            <span>Practice Founder &amp; Chief Consultant</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            About Dr. Rajeshwari Sharma
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Dedicated to delivering comprehensive, evidence-based internal medicine and empathetic care to families in Jaipur and across Rajasthan.
          </p>
        </div>

        {/* Top Split Block: Doctor Biography & Illustrated Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Detailed Biography Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-card-soft border border-slateBlue-100 relative">
              <span className="absolute top-0 left-0 w-2 h-full bg-slateBlue-500 rounded-l-2xl"></span>
              
              <h3 className="font-heading font-bold text-2xl text-slateBlue-900 mb-4 flex items-center gap-3">
                <span>Senior Consultant Physician (Internal Medicine)</span>
              </h3>
              
              <p className="text-slateBlue-800 leading-relaxed text-base mb-4">
                Dr. Rajeshwari Sharma is one of Jaipur’s most trusted Senior Consultant Physicians, with over 18 years of dedicated clinical experience in internal medicine, metabolic disease management, and adult primary healthcare.
              </p>
              <p className="text-slateBlue-800 leading-relaxed text-base mb-4">
                After completing her MBBS and MD in Internal Medicine from the prestigious SMS Medical College, Jaipur, she pursued specialized fellowships in diabetology and endocrinology. Her practice combines rigorous diagnostic accuracy with genuine compassion, taking the time to listen to each patient’s story.
              </p>
              <p className="text-slateBlue-800 leading-relaxed text-base">
                Whether managing long-standing hypertension, designing personalized diabetes remission plans, or diagnosing obscure chronic symptoms, Dr. Sharma prioritizes preventive health to protect long-term vital organ function.
              </p>

              {/* Quick Spec Highlights */}
              <div className="mt-6 pt-6 border-t border-slateBlue-100 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs text-slateBlue-500 font-semibold uppercase">Primary Practice</span>
                  <span className="text-sm font-semibold text-slateBlue-900">Internal Medicine &amp; Diabetology</span>
                </div>
                <div>
                  <span className="block text-xs text-slateBlue-500 font-semibold uppercase">Location</span>
                  <span className="text-sm font-semibold text-slateBlue-900">Malviya Nagar, Jaipur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Illustrated Consultation Room Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md photo-card-frame bg-white p-6 shadow-card-soft">
              
              {/* Illustrated Clinic / Consultation Graphic */}
              <div className="relative rounded-xl overflow-hidden bg-slateBlue-900 text-white p-6 h-80 flex flex-col justify-between border border-slateBlue-700">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
                
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center border border-gold/40">
                    <Stethoscope className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-xs bg-trustGreen/80 text-white font-medium px-2.5 py-1 rounded-full border border-white/20">
                    Clinical Excellence
                  </span>
                </div>

                <div className="my-auto py-4">
                  <h4 className="font-heading font-bold text-xl text-ivory mb-2">
                    "Healthcare is not just treating a disease; it is caring for the human being who has it."
                  </h4>
                  <p className="text-xs text-slate-300 italic">
                    — Dr. Rajeshwari Sharma (MD, FICP, FACP)
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/10 flex items-center justify-between text-xs">
                  <span>Jaipur Medical Practice</span>
                  <span className="text-gold font-semibold">Internal Medicine</span>
                </div>
              </div>

              {/* Consultation Room Note */}
              <div className="mt-4 flex items-center gap-3 text-xs text-slateBlue-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-trustGreen shrink-0" />
                <span>Modern diagnostic facilities &amp; comfortable consultation environment</span>
              </div>
            </div>
          </div>

        </div>

        {/* Philosophy of Care Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading font-bold text-2xl text-slateBlue-900">
              Our Philosophy of Care
            </h3>
            <p className="text-slateBlue-600 text-sm mt-2">
              Four fundamental principles that guide every consultation and treatment plan at our practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-card-soft border border-slateBlue-100 hover:border-gold/50 transition-all hover:shadow-card-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slateBlue-50 text-slateBlue-500 flex items-center justify-center mb-4 group-hover:bg-slateBlue-500 group-hover:text-gold transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slateBlue-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slateBlue-700 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education, Fellowships & Career Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slateBlue-600 uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4 text-gold" />
              <span>Qualifications &amp; Training</span>
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slateBlue-900">
              Education &amp; Medical Fellowships
            </h3>
            <p className="text-slateBlue-700 text-sm mt-2">
              A timeline of rigorous medical education, board residency, and international fellowships.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Center Line */}
            <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-slateBlue-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {educationTimeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Point Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-white shadow transform -translate-x-1/2 mt-6 z-10"></div>

                  {/* Content Box */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="bg-white p-6 rounded-2xl shadow-card-soft border border-slateBlue-100 hover:shadow-card-hover transition-shadow relative">
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-gold-dark bg-gold-subtle px-2.5 py-1 rounded-md border border-gold/20">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-semibold text-slateBlue-600 bg-slateBlue-50 px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="font-heading font-bold text-base sm:text-lg text-slateBlue-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-slateBlue-600 mb-3 flex items-center gap-1">
                        <Bookmark className="w-3 h-3 text-gold" />
                        <span>{item.institution}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-slateBlue-700 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Board Certifications & Professional Affiliations Card */}
        <div className="bg-white rounded-2xl p-8 shadow-card-soft border border-slateBlue-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <div className="w-12 h-12 rounded-xl bg-slateBlue-50 text-slateBlue-500 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slateBlue-900 mb-2">
                Board Certifications &amp; Professional Memberships
              </h3>
              <p className="text-xs sm:text-sm text-slateBlue-600 leading-relaxed">
                Registered and active member of leading national and international medical bodies, upholding the highest ethical standards.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 bg-ivory p-3.5 rounded-xl border border-slateBlue-100/80 text-xs sm:text-sm font-medium text-slateBlue-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-trustGreen shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
