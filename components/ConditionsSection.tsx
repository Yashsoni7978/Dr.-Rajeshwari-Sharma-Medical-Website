"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, Stethoscope, CheckCircle2, AlertCircle, ArrowRight, BookOpen, Layers } from "lucide-react";

interface ConditionItem {
  id: string;
  name: string;
  category: "metabolic" | "cardio" | "digestive" | "respiratory" | "senior";
  categoryLabel: string;
  symptoms: string[];
  diagnosticWorkup: string;
  careApproach: string;
}

const conditionsData: ConditionItem[] = [
  // Metabolic & Endocrine
  {
    id: "t2-diabetes",
    name: "Type 2 Diabetes Mellitus",
    category: "metabolic",
    categoryLabel: "Metabolic & Endocrine",
    symptoms: ["Increased thirst", "Frequent urination", "Unexplained fatigue", "Slow wound healing"],
    diagnosticWorkup: "Fasting Blood Sugar, Post-Prandial Glucose, HbA1c, Urinary Microalbumin, Lipid Profile.",
    careApproach: "Individualized glycemic target setting, dietary integration, modern oral hypoglycemic agents, insulin optimization."
  },
  {
    id: "t1-diabetes",
    name: "Type 1 Diabetes Mellitus",
    category: "metabolic",
    categoryLabel: "Metabolic & Endocrine",
    symptoms: ["Rapid weight loss", "Extreme hunger", "Ketoacidosis risk", "Severe tiredness"],
    diagnosticWorkup: "C-Peptide levels, Anti-GAD antibodies, HbA1c, Frequent SMBG log review.",
    careApproach: "Multiple daily injection (MDI) regimen, carbohydrate counting, Continuous Glucose Monitoring (CGM) training."
  },
  {
    id: "hypothyroidism",
    name: "Hypothyroidism & Hashimoto's",
    category: "metabolic",
    categoryLabel: "Metabolic & Endocrine",
    symptoms: ["Weight gain", "Cold intolerance", "Dry skin & hair fall", "Lethargy & constipation"],
    diagnosticWorkup: "Serum TSH, Free T3, Free T4, Anti-TPO Antibodies, Thyroid Ultrasound.",
    careApproach: "Weight-adjusted Levothyroxine replacement, morning dosing discipline, 6-8 week periodic TSH monitoring."
  },
  {
    id: "hyperthyroidism",
    name: "Hyperthyroidism & Graves' Disease",
    category: "metabolic",
    categoryLabel: "Metabolic & Endocrine",
    symptoms: ["Palpitations & rapid heart rate", "Unintended weight loss", "Hand tremors", "Heat sensitivity"],
    diagnosticWorkup: "Serum T3/T4, Ultra-sensitive TSH, TSH Receptor Antibodies (TRAb), Radioactive Iodine Uptake.",
    careApproach: "Antithyroid medications (Methimazole/PTU), Beta-blockers for symptom relief, endocrinology co-management."
  },
  {
    id: "gout-hyperuricemia",
    name: "Gout & Hyperuricemia",
    category: "metabolic",
    categoryLabel: "Metabolic & Endocrine",
    symptoms: ["Sudden severe joint pain", "Swollen red big toe", "Joint tenderness", "Recurrent flare-ups"],
    diagnosticWorkup: "Serum Uric Acid, Renal Function Test, Joint Fluid Crystal Analysis, X-Rays.",
    careApproach: "Acute anti-inflammatory relief (Colchicine/NSAIDs), long-term Xanthine Oxidase Inhibitors (Allopurinol/Febuxostat), low-purine diet."
  },
  {
    id: "metabolic-syndrome",
    name: "Metabolic Syndrome & Obesity",
    category: "metabolic",
    categoryLabel: "Metabolic & Endocrine",
    symptoms: ["Abdominal obesity", "Borderline high blood sugar", "Elevated triglycerides", "Sluggishness"],
    diagnosticWorkup: "Waist circumference, Lipid Fractionation, Fasting Insulin & HOMA-IR index, Liver Function Test.",
    careApproach: "Structured weight management, GLP-1 receptor agonist evaluation, cardiovascular risk mitigation."
  },

  // Cardiovascular & Circulation
  {
    id: "essential-hypertension",
    name: "Essential (Primary) Hypertension",
    category: "cardio",
    categoryLabel: "Cardiovascular",
    symptoms: ["Occasional morning headaches", "Dizziness", "Shortness of breath on exertion", "Often asymptomatic"],
    diagnosticWorkup: "Repeated BP readings, 24-hr Ambulatory BP Monitoring, ECG, Echocardiogram, Kidney Panel.",
    careApproach: "Stepwise antihypertensive drug selection (ACEi/ARBs, CCBs, Diuretics), dietary sodium restriction (<2g/day)."
  },
  {
    id: "secondary-hypertension",
    name: "Secondary & Resistant Hypertension",
    category: "cardio",
    categoryLabel: "Cardiovascular",
    symptoms: ["Uncontrolled BP on 3+ drugs", "Young age onset (<30 yrs)", "Sudden spikes in stable BP"],
    diagnosticWorkup: "Renal Artery Doppler, Plasma Aldosterone/Renin Ratio, Serum Creatinine, Sleep Apnea Study.",
    careApproach: "Identifying root anatomical or endocrine cause, multi-drug combination tailoring, specialist referral."
  },
  {
    id: "dyslipidemia",
    name: "Dyslipidemia (High Cholesterol)",
    category: "cardio",
    categoryLabel: "Cardiovascular",
    symptoms: ["Asymptomatic", "Detected during routine blood checks", "Xanthelasma (fatty deposits around eyes)"],
    diagnosticWorkup: "Fasting Lipid Profile (Total Cholesterol, LDL, HDL, Triglycerides, ApoB, Lp(a)).",
    careApproach: "Statin therapy, Ezetimibe additions, low-saturated-fat cardiovascular diet, ASCVD 10-year risk calculation."
  },
  {
    id: "cad-prevention",
    name: "Coronary Artery Disease Risk",
    category: "cardio",
    categoryLabel: "Cardiovascular",
    symptoms: ["Mild exertional chest tightness", "Unexplained fatigue during stairs", "Palpitations"],
    diagnosticWorkup: "Treadmill Stress Test (TMT), hs-CRP, Coronary Calcium Score, Echocardiography.",
    careApproach: "Aggressive secondary prevention, antiplatelet therapy where indicated, lifestyle risk reduction."
  },

  // Gastrointestinal & Hepatic
  {
    id: "nafld-fatty-liver",
    name: "Non-Alcoholic Fatty Liver (NAFLD)",
    category: "digestive",
    categoryLabel: "Gastrointestinal & Liver",
    symptoms: ["Right upper abdomen fullness", "Fatigue", "Elevated liver enzymes on routine checkup"],
    diagnosticWorkup: "SGOT/SGPT, Gamma-GT, Abdominal Ultrasound, FibroScan (Liver Elastography).",
    careApproach: "Gradual weight loss (7-10%), insulin sensitizers, Vitamin E supplementation, hepatoprotective monitoring."
  },
  {
    id: "gerd-acid-reflux",
    name: "GERD & Acid Reflux Disease",
    category: "digestive",
    categoryLabel: "Gastrointestinal & Liver",
    symptoms: ["Heartburn after meals", "Sour throat taste", "Regurgitation", "Difficulty swallowing"],
    diagnosticWorkup: "Upper GI Endoscopy (if red flag symptoms), H. Pylori Stool Antigen Test.",
    careApproach: "Short-course PPIs / H2 blockers, meal timing modifications, avoidance of trigger foods, head-of-bed elevation."
  },
  {
    id: "ibs",
    name: "Irritable Bowel Syndrome (IBS)",
    category: "digestive",
    categoryLabel: "Gastrointestinal & Liver",
    symptoms: ["Alternating diarrhea & constipation", "Abdominal cramping relieved by stool", "Bloating"],
    diagnosticWorkup: "Stool Routine & Culture, Complete Blood Count, Celiac Serology (tTG-IgA) to rule out organic disease.",
    careApproach: "Low-FODMAP dietary trial, gut-directed antispasmodics, stress management, probiotic balance."
  },

  // Respiratory & Post-Viral
  {
    id: "long-covid",
    name: "Long-COVID & Post-Viral Fatigue",
    category: "respiratory",
    categoryLabel: "Respiratory & Post-Viral",
    symptoms: ["Brain fog", "Post-exertional malaise", "Persistent dyspnea", "Autonomic palpitations"],
    diagnosticWorkup: "Post-COVID Pulmonary Function Test (PFT), Inflammatory Markers (D-Dimer, Ferritin, hs-CRP), Chest CT.",
    careApproach: "Paced physical activity, pulmonary rehab exercises, anti-inflammatory supportive regimens, symptom tracking."
  },
  {
    id: "bronchial-asthma",
    name: "Adult Asthma & Chronic Bronchitis",
    category: "respiratory",
    categoryLabel: "Respiratory & Post-Viral",
    symptoms: ["Wheezing", "Nocturnal cough", "Chest tightness", "Seasonal breathlessness"],
    diagnosticWorkup: "Spirometry with Bronchodilator Reversibility, Absolute Eosinophil Count, Serum IgE.",
    careApproach: "Inhaled Corticosteroids (ICS) + LABA therapy, inhaler technique education, allergy trigger avoidance."
  },

  // Geriatric, Renal & General
  {
    id: "early-ckd",
    name: "Early Stage Chronic Kidney Disease",
    category: "senior",
    categoryLabel: "Geriatric, Renal & General",
    symptoms: ["Leg/ankle swelling", "Foamy urine", "Uncontrolled BP", "Early fatigue"],
    diagnosticWorkup: "eGFR calculation, Urine Protein/Creatinine Ratio, Renal Ultrasound, Serum Electrolytes.",
    careApproach: "Renoprotective medication (SGLT2 inhibitors, ACEi/ARBs), protein intake modulation, nephrotoxic drug avoidance."
  },
  {
    id: "osteoporosis",
    name: "Osteoporosis & Bone Density Loss",
    category: "senior",
    categoryLabel: "Geriatric, Renal & General",
    symptoms: ["Back pain", "Loss of height over time", "Bone fractures from minor falls"],
    diagnosticWorkup: "DEXA Scan (T-Score), Serum Calcium, Vitamin D3, Intact PTH, Kidney Function.",
    careApproach: "Calcium & high-dose Vitamin D3 correction, Antiresorptive Bisphosphonates, weight-bearing exercise regimen."
  },
  {
    id: "polypharmacy",
    name: "Polypharmacy in Elderly Patients",
    category: "senior",
    categoryLabel: "Geriatric, Renal & General",
    symptoms: ["Multiple prescription pills (>5)", "Dizziness when standing", "Confusion", "Medication side effects"],
    diagnosticWorkup: "Comprehensive Drug-Drug Interaction Audit, Renal/Hepatic Clearance Assessment.",
    careApproach: "Deprescribing unnecessary or redundant drugs, simplifying daily dose schedules, pillbox organization."
  }
];

export default function ConditionsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Client-side visual filter derived from 100% server-rendered data
  const filteredConditions = conditionsData.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.symptoms.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.careApproach.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="conditions" className="py-20 bg-ivory border-t border-slateBlue-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>Clinical Conditions Directory</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Conditions Diagnosed &amp; Managed
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Explore specific medical ailments, diagnostic procedures, and tailored management protocols offered by Dr. Rajeshwari Sharma.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-card-soft border border-slateBlue-100 mb-12 space-y-4">
          
          {/* Top Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slateBlue-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by condition name, symptom (e.g. fatigue, headache), or test..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-ivory border border-slateBlue-200 rounded-xl text-sm font-medium text-slateBlue-900 focus:outline-none focus:ring-2 focus:ring-slateBlue-500/50 transition-all placeholder:text-slateBlue-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-slateBlue-500 hover:text-slateBlue-900"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slateBlue-100">
            <span className="text-xs font-semibold text-slateBlue-500 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>

            {[
              { id: "all", label: "All Conditions" },
              { id: "metabolic", label: "Metabolic & Endocrine" },
              { id: "cardio", label: "Cardiovascular" },
              { id: "digestive", label: "Gastrointestinal & Liver" },
              { id: "respiratory", label: "Respiratory & Post-Viral" },
              { id: "senior", label: "Geriatric & General" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-slateBlue-500 text-ivory shadow-xs"
                    : "bg-ivory hover:bg-slateBlue-50 text-slateBlue-700 border border-slateBlue-200/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 100% Server-Rendered Condition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {conditionsData.map((item) => {
            const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
            const matchesSearch =
              searchQuery === "" ||
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.symptoms.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
              item.careApproach.toLowerCase().includes(searchQuery.toLowerCase());
            const isVisible = matchesCategory && matchesSearch;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-6 shadow-card-soft border border-slateBlue-100 hover:border-gold/50 transition-all ${
                  isVisible ? "flex flex-col justify-between" : "hidden"
                }`}
              >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-slateBlue-600 bg-slateBlue-50 px-2.5 py-1 rounded-md border border-slateBlue-100">
                    {item.categoryLabel}
                  </span>
                  <Stethoscope className="w-4 h-4 text-gold" />
                </div>

                {/* Condition Title */}
                <h3 className="font-heading font-bold text-lg text-slateBlue-900 mb-3">
                  {item.name}
                </h3>

                {/* Common Symptoms Pill Tag list */}
                <div className="mb-4">
                  <span className="block text-[11px] font-bold text-slateBlue-500 uppercase tracking-wider mb-2">
                    Common Symptoms:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.symptoms.map((sym, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-ivory text-slateBlue-800 px-2 py-0.5 rounded border border-slateBlue-100"
                      >
                        {sym}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Diagnostic Workup */}
                <div className="mb-4 bg-slateBlue-50/60 p-3 rounded-xl border border-slateBlue-100/60">
                  <span className="block text-[11px] font-bold text-slateBlue-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-gold" /> Diagnostic Workup:
                  </span>
                  <p className="text-xs text-slateBlue-800 font-medium leading-relaxed">
                    {item.diagnosticWorkup}
                  </p>
                </div>

                {/* Doctor's Care Approach */}
                <div className="mb-4">
                  <span className="block text-[11px] font-bold text-trustGreen-dark uppercase tracking-wider mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-trustGreen" /> Management Approach:
                  </span>
                  <p className="text-xs text-slateBlue-700 leading-relaxed font-normal">
                    {item.careApproach}
                  </p>
                </div>
              </div>

              {/* Consultation Link */}
              <div className="pt-3 border-t border-slateBlue-100">
                <Link
                  href="#appointment"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slateBlue-600 hover:text-slateBlue-900 transition-colors"
                >
                  <span>Schedule Evaluation for {item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </Link>
              </div>
            </div>
            );
          })}
        </div>

        {/* Fallback if search returns empty */}
        {filteredConditions.length === 0 && (
          <div className="bg-white p-8 rounded-2xl text-center max-w-md mx-auto border border-slateBlue-100 shadow-card-soft">
            <AlertCircle className="w-10 h-10 text-gold mx-auto mb-3" />
            <h4 className="font-heading font-bold text-lg text-slateBlue-900 mb-1">
              No matching condition found
            </h4>
            <p className="text-xs text-slateBlue-600 mb-4">
              We treat a broad range of general internal medicine concerns. Contact our clinic directly to confirm treatment for your specific symptoms.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="bg-slateBlue-500 text-ivory text-xs px-4 py-2 rounded-lg font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
