"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Clock, Calendar, ArrowRight, UserCheck, Sparkles, Send, CheckCircle2 } from "lucide-react";

export default function BlogTeaserSection() {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const articles = [
    {
      id: "hba1c-guide",
      title: "Understanding HbA1c: What Your 3-Month Blood Sugar Test Really Means",
      category: "Diabetes Management",
      readTime: "5 min read",
      date: "Sept 12, 2026",
      excerpt: "A comprehensive guide explaining why HbA1c is the gold standard for diabetes control, how stress and diet affect readings, and practical steps to lower your score safely.",
      author: "Dr. Rajeshwari Sharma (MD, FACP)",
      badgeColor: "bg-slateBlue-50 text-slateBlue-700"
    },
    {
      id: "silent-hypertension",
      title: "5 Common Silent Signs of High Blood Pressure You Shouldn't Ignore",
      category: "Cardiovascular Health",
      readTime: "4 min read",
      date: "Aug 28, 2026",
      excerpt: "Hypertension is often called the silent killer because it shows few early symptoms. Learn to spot subtle warning signs like morning head tightness, exertional dizziness, and fatigue.",
      author: "Dr. Rajeshwari Sharma (MD, FACP)",
      badgeColor: "bg-trustGreen-bg text-trustGreen-dark"
    },
    {
      id: "thyroid-fatigue",
      title: "Thyroid vs. Fatigue: Is Your Sluggishness a Hormonal Imbalance?",
      category: "Endocrine Wellness",
      readTime: "6 min read",
      date: "Aug 15, 2026",
      excerpt: "Feeling constantly exhausted despite 8 hours of sleep? Discover how hypothyroidism affects your metabolic engine, the role of TSH & T4 levels, and simple dietary steps.",
      author: "Dr. Rajeshwari Sharma (MD, FACP)",
      badgeColor: "bg-gold-subtle text-gold-dark"
    },
    {
      id: "dengue-prevention",
      title: "Seasonal Health Guide: Preventing Dengue & Monsoon Fevers in Jaipur",
      category: "Preventive Care",
      readTime: "4 min read",
      date: "Jul 30, 2026",
      excerpt: "Essential monsoon precautions for Jaipur households — recognizing early warning signs of Dengue and Typhoid, electrolyte management, and when to seek immediate medical care.",
      author: "Dr. Rajeshwari Sharma (MD, FACP)",
      badgeColor: "bg-slateBlue-50 text-slateBlue-700"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() !== "") {
      setSubscribed(true);
    }
  };

  return (
    <section id="blog" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slateBlue-50 text-slateBlue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-slateBlue-200/60 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-gold" />
            <span>Preventive Health Guides</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 tracking-tight">
            Doctor's Health Journal &amp; Advice
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-slateBlue-700 leading-relaxed font-normal">
            Practical medical insights, evidence-based health articles, and lifestyle guidance written by Dr. Rajeshwari Sharma.
          </p>
        </div>

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-ivory rounded-2xl p-6 sm:p-8 shadow-card-soft border border-slateBlue-100/80 hover:border-gold/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border border-slateBlue-200/60 ${art.badgeColor}`}>
                    {art.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slateBlue-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" /> {art.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {art.date}
                    </span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="font-heading font-bold text-xl text-slateBlue-900 mb-3 group-hover:text-slateBlue-600 transition-colors leading-snug">
                  {art.title}
                </h3>

                {/* Article Excerpt */}
                <p className="text-sm text-slateBlue-700 leading-relaxed mb-6 font-normal">
                  {art.excerpt}
                </p>
              </div>

              {/* Author & Action Footer */}
              <div className="pt-4 border-t border-slateBlue-200/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slateBlue-500 text-gold flex items-center justify-center text-[10px] font-bold">
                    RS
                  </div>
                  <span className="text-xs font-semibold text-slateBlue-800">
                    {art.author}
                  </span>
                </div>

                <Link
                  href="#appointment"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slateBlue-600 hover:text-slateBlue-900 group-hover:text-gold-dark transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </article>
          ))}
        </div>

        {/* Health Newsletter / Broadcast Subscription Box */}
        <div className="bg-slateBlue-900 text-ivory rounded-2xl p-8 sm:p-10 border border-gold/40 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl -z-0"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold text-gold uppercase tracking-wider block">
                Monthly Health Broadcast
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                Subscribe to Dr. Sharma's Wellness Journal
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-normal max-w-xl">
                Get monthly evidence-based health tips, seasonal fever precautions, and diabetes management guides sent straight to your email or WhatsApp. No spam, ever.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-trustGreen-bg text-trustGreen-dark p-4 rounded-xl border border-trustGreen/30 text-center text-sm font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trustGreen" />
                  <span>Thank you! You are subscribed to health updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email or WhatsApp number..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-4 py-3 bg-white text-slateBlue-900 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold border border-slateBlue-200 placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-gold hover:bg-gold-light text-slateBlue-900 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
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
