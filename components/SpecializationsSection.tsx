"use client";

import React from "react";
import Link from "next/link";
import { Activity, HeartPulse, Sparkles, ShieldCheck, Users, Stethoscope, CheckCircle2, ArrowRight, Calendar, Heart } from "lucide-react";

export default function SpecializationsSection() {
  const specializations = [
    {
      id: "diabetes",
      title: "Diabetes & Metabolic Care",
      subtitle: "Comprehensive Blood Sugar Management & Complication Prevention",
      icon: Activity,
      color: "text-slateBlue-500",
      bgColor: "bg-slateBlue-50",
      description: "Specialized clinical care for Type 1, Type 2, and Gestational Diabetes. Focused on achieving optimal HbA1c targets while guarding against microvascular and macrovascular complications.",
      highlights: [
        "Type 1 & Type 2 Diabetes Custom Management",
        "Continuous Glucose Monitoring (CGM) Integration",
        "Insulin & GLP-1 Receptor Therapy Titration",
        "Diabetic Foot, Neuropathy & Nephropathy Screening",
        "Gestational Diabetes (Pregnancy-related Blood Sugar)",
        "Diabetes Reversal & Remission Guidance"
      ],
      badge: "Endocrine Focus"
    },
    {
      id: "hypertension",
      title: "Hypertension & Vascular Health",
      subtitle: "Advanced Blood Pressure Titration & Heart Protection",
      icon: HeartPulse,
      color: "text-trustGreen",
      bgColor: "bg-trustGreen-bg",
      description: "Accurate diagnosis and long-term control of essential, secondary, and resistant hypertension to prevent stroke, coronary artery disease, and renal impairment.",
      highlights: [
        "Essential & Secondary Hypertension Diagnosis",
        "24-Hour Ambulatory Blood Pressure Monitoring (ABPM)",
        "Hyperlipidemia (High Cholesterol & Triglycerides)",
        "Cardiovascular & CAD Risk Assessment",
        "Hypertensive Target Organ Damage Prevention",
        "Personalized Antihypertensive Regimens"
      ],
      badge: "Vascular Care"
    },
    {
      id: "thyroid",
      title: "Thyroid & Endocrine Disorders",
      subtitle: "Hormonal Balance & Metabolic Optimization",
      icon: Sparkles,
      color: "text-gold-dark",
      bgColor: "bg-gold-subtle",
      description: "Thorough evaluation and management of thyroid imbalances, metabolic syndrome, and adult hormonal disorders affecting energy, weight, and mood.",
      highlights: [
        "Hypothyroidism (Underactive Thyroid / Hashimoto's)",
        "Hyperthyroidism (Overactive Thyroid / Graves')",
        "Subclinical Thyroid Dysfunction Management",
        "Thyroid Nodule Evaluation & USG Guidance",
        "Metabolic Syndrome & Weight Imbalance",
        "Polycystic Ovarian Syndrome (PCOS) Medical Care"
      ],
      badge: "Hormonal Health"
    },
    {
      id: "preventive",
      title: "Preventive Health Checkups",
      subtitle: "Proactive Risk Screening & Longevity Care",
      icon: ShieldCheck,
      color: "text-slateBlue-600",
      bgColor: "bg-slateBlue-50",
      description: "Tailored executive and comprehensive health packages designed to detect silent diseases like fatty liver, early CKD, and cardiovascular risks early.",
      highlights: [
        "Executive & Senior Citizen Wellness Master Panels",
        "Early Malignancy & Cancer Screening Protocols",
        "Non-Alcoholic Fatty Liver Disease (NAFLD) Workup",
        "Kidney Function & Microalbuminuria Screening",
        "Bone Mineral Density & Osteoporosis Risk",
        "Age & Family-History Specific Risk Mapping"
      ],
      badge: "Proactive Wellness"
    },
    {
      id: "geriatric",
      title: "Geriatric & Multi-Morbidity Care",
      subtitle: "Holistic Care for Seniors & Complex Medical Conditions",
      icon: Users,
      color: "text-trustGreen-dark",
      bgColor: "bg-trustGreen-bg",
      description: "Dedicated medical management for senior citizens dealing with multiple chronic conditions, focused on maintaining independence and quality of life.",
      highlights: [
        "Polypharmacy Rationalization & Drug Interaction Review",
        "Cognitive Health & Memory Loss Screening",
        "Joint Care, Mobility & Fall Risk Mitigation",
        "Chronic Pain & Degenerative Condition Support",
        "Multi-organ Disease Coordination & Follow-up",
        "Family & Caregiver Guidance Consultations"
      ],
      badge: "Senior Health"
    },
    {
      id: "post-covid",
      title: "Post-COVID & Chronic Disease Recovery",
      subtitle: "Systematic Rehabilitation for Persistent Symptoms",
      icon: Heart,
      color: "text-slateBlue-500",
      bgColor: "bg-slateBlue-50",
      description: "Specialized clinical evaluation for long-COVID syndrome, post-viral fatigue, chronic respiratory symptoms, and multi-system illness recovery.",
      highlights: [
        "Long-COVID & Post-Viral Fatigue Management",
        "Persistent Respiratory & Lung Function Evaluation",
        "Unexplained Fever & Chronic Fatigue Workup",
        "Early-Stage Chronic Kidney Disease (CKD) Care",
        "Adult Immunization & Vaccination Schedules",
        "Holistic Physical Rehabilitation Guidance"
      ],
      badge: "Rehabilitation"
    }
  ];

  return (
    <section id="specializations" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Subtle Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slateBlue-400 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-gold" />
            <span>Comprehensive Clinical Services</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Specializations &amp; Primary Services
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Dr. Rajeshwari Sharma provides expert diagnosis, evidence-based medical treatment, and long-term care plans across key internal medicine specialties.
          </p>
        </div>

        {/* Specialization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specializations.map((spec) => {
            const IconComp = spec.icon;
            return (
              <div
                key={spec.id}
                className="bg-ivory rounded-2xl p-6 border border-slateBlue-100/80 shadow-card-soft hover:shadow-card-hover hover:border-gold/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top Icon & Badge Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${spec.bgColor} ${spec.color} flex items-center justify-center shadow-xs border border-slateBlue-100 group-hover:bg-slateBlue-500 group-hover:text-gold transition-colors`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slateBlue-600 bg-white px-2.5 py-1 rounded-full border border-slateBlue-200/80 shadow-xs">
                      {spec.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-bold text-xl text-slateBlue-900 mb-1 group-hover:text-slateBlue-600 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-dark mb-3">
                    {spec.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm text-slateBlue-700 leading-relaxed mb-6 font-normal">
                    {spec.description}
                  </p>

                  {/* Clinical Highlights List */}
                  <div className="border-t border-slateBlue-200/60 pt-4 mb-6">
                    <span className="block text-xs font-bold text-slateBlue-800 uppercase tracking-wider mb-3">
                      Key Clinical Services:
                    </span>
                    <ul className="space-y-2">
                      {spec.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slateBlue-800 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-trustGreen shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-2">
                  <Link
                    href="#appointment"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slateBlue-500 hover:text-white text-slateBlue-900 border border-slateBlue-200 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all group-hover:border-slateBlue-500 shadow-xs"
                  >
                    <span>Consult for {spec.title.split(" ")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Custom Consultation Inquiry Callout */}
        <div className="bg-slateBlue-900 text-white rounded-2xl p-8 md:p-10 shadow-lg border border-gold/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl -z-0"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-gold font-semibold text-xs uppercase tracking-wider block mb-1">
                Personalized Care Management
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-ivory mb-2">
                Have a Complex or Multi-System Medical Concern?
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                Dr. Rajeshwari Sharma specializes in evaluating intricate cases where multiple health factors overlap. Schedule a detailed 30-minute consultation today.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="#appointment"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-slateBlue-900 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <Calendar className="w-4 h-4 text-slateBlue-900" />
                <span>Book Clinical Consultation</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
