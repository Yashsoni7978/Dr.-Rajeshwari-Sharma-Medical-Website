"use client";

import React from "react";
import { Star, Quote, CheckCircle2, Heart, Award, Users, MapPin, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: "ramesh-agarwal",
      name: "Ramesh Agarwal",
      meta: "Age 54 • Businessman",
      location: "Vaishali Nagar, Jaipur",
      condition: "Type 2 Diabetes & Cholesterol",
      outcome: "HbA1c down from 9.4% to 6.6%",
      rating: 5,
      quote: "Dr. Rajeshwari Sharma listened to my concerns for over 25 minutes during our first meeting. Instead of just adding more heavy medications, she adjusted my dosage and gave me a realistic Rajasthani diet plan. My HbA1c is down to 6.6%, and I feel far more energetic.",
      initials: "RA"
    },
    {
      id: "sunita-mathur",
      name: "Sunita Mathur",
      meta: "Age 48 • Senior Educator",
      location: "Raja Park, Jaipur",
      condition: "Hypothyroidism & Fatigue",
      outcome: "TSH normalized & energy restored",
      rating: 5,
      quote: "For two years I was struggling with extreme tiredness and weight gain despite taking thyroid pills from different clinics. Dr. Sharma did a complete metabolic check, identified a severe Vitamin D deficiency and dosage mismatch. Within two months, I felt like myself again.",
      initials: "SM"
    },
    {
      id: "col-virendra-singh",
      name: "Col. Virendra Singh (Retd.)",
      meta: "Age 67 • Retd. Army Officer",
      location: "Malviya Nagar, Jaipur",
      condition: "Resistant Hypertension & Senior Care",
      outcome: "BP stabilized at 122/80 mmHg",
      rating: 5,
      quote: "As a senior citizen taking multiple medicines, I was worried about side effects and dizziness. Dr. Sharma rationalized my prescriptions, removing two redundant pills while keeping my blood pressure perfectly under control. Her clinic is so peaceful and respectful of elderly patients.",
      initials: "VS"
    },
    {
      id: "meenakshi-sharma",
      name: "Meenakshi Sharma",
      meta: "Age 36 • Software Professional",
      location: "Mansarovar, Jaipur",
      condition: "Post-COVID Fatigue & Cough",
      outcome: "Full respiratory recovery & stamina",
      rating: 5,
      quote: "After recovering from COVID-19, I suffered from brain fog and persistent breathlessness for over three months. Dr. Sharma’s post-viral rehabilitation protocol and lung care exercises made a world of difference. I cannot thank her enough for her patience.",
      initials: "MS"
    },
    {
      id: "dr-alok-khandelwal",
      name: "Dr. Alok K. Khandelwal",
      meta: "Age 61 • University Professor",
      location: "C-Scheme, Jaipur",
      condition: "Fatty Liver (NAFLD) & Hyperuricemia",
      outcome: "Liver enzymes normalized; zero gout flares",
      rating: 5,
      quote: "Being an academic myself, I value evidence-based medicine. Dr. Rajeshwari’s diagnostic precision is unmatched. She explained the exact mechanism behind my fatty liver and elevated uric acid. Her guidance has transformed my metabolic health.",
      initials: "AK"
    },
    {
      id: "pooja-vikas-shekhawat",
      name: "Pooja & Vikas Shekhawat",
      meta: "Caring Children of Elderly Patient",
      location: "Tonk Road, Jaipur",
      condition: "Geriatric Polypharmacy & Bone Care",
      outcome: "Pill schedule simplified from 8 to 4 drugs",
      rating: 5,
      quote: "We brought our 78-year-old mother to Dr. Sharma for a holistic health review. She treated our mother with immense warmth, simplified her daily 8-pill schedule down to 4 essential medicines, and guided us on bone health care. Truly a doctor who treats with heart.",
      initials: "PS"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-ivory relative overflow-hidden border-t border-slateBlue-100">
      
      {/* Background Radial Light Accent */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Patient Stories &amp; Health Outcomes
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Read real feedback from individuals and families across Jaipur who have experienced our compassionate, evidence-based medical care.
          </p>
        </div>

        {/* 6 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-card-soft border border-slateBlue-100 hover:border-gold/50 transition-all flex flex-col justify-between group relative"
            >
              <div>
                {/* Header: Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slateBlue-200 group-hover:text-gold/40 transition-colors" />
                </div>

                {/* Outcome Badge */}
                <div className="mb-4 bg-trustGreen-bg text-trustGreen-dark text-xs font-semibold px-3 py-1.5 rounded-lg border border-trustGreen/20 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trustGreen shrink-0" />
                  <span>Outcome: {t.outcome}</span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slateBlue-800 leading-relaxed mb-6 font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Patient Profile Footer */}
              <div className="pt-4 border-t border-slateBlue-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gold-gradient-badge text-white font-heading font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slateBlue-900 leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-slateBlue-600 font-medium">
                    {t.meta}
                  </p>
                  <p className="text-[10px] text-gold-dark font-semibold flex items-center gap-0.5 mt-0.5">
                    <MapPin className="w-2.5 h-2.5" /> {t.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate Ratings & Trust Stats Bar */}
        <div className="bg-slateBlue-900 text-ivory rounded-2xl p-8 shadow-lg border border-gold/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slateBlue-700">
            
            <div className="flex flex-col items-center p-2">
              <div className="flex items-center gap-1 text-gold mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-heading font-bold text-2xl text-white">4.9 / 5.0</span>
              <span className="text-xs text-slate-300 mt-1">Average Rating</span>
            </div>

            <div className="flex flex-col items-center p-2 pt-4 md:pt-2">
              <Users className="w-5 h-5 text-trustGreen-light mb-1" />
              <span className="font-heading font-bold text-2xl text-white">500+</span>
              <span className="text-xs text-slate-300 mt-1">Verified Patient Reviews</span>
            </div>

            <div className="flex flex-col items-center p-2 pt-4 md:pt-2">
              <Heart className="w-5 h-5 text-gold mb-1" />
              <span className="font-heading font-bold text-2xl text-white">98%</span>
              <span className="text-xs text-slate-300 mt-1">Recommendation Rate</span>
            </div>

            <div className="flex flex-col items-center p-2 pt-4 md:pt-2">
              <Award className="w-5 h-5 text-trustGreen-light mb-1" />
              <span className="font-heading font-bold text-2xl text-white">18+ Years</span>
              <span className="text-xs text-slate-300 mt-1">Jaipur Community Trust</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
