import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import ConditionsSection from "@/components/ConditionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import InsuranceSection from "@/components/InsuranceSection";
import CareTeamSection from "@/components/CareTeamSection";
import AwardsSection from "@/components/AwardsSection";
import TelehealthSection from "@/components/TelehealthSection";
import CommunitySection from "@/components/CommunitySection";
import FeesAndExpectationsSection from "@/components/FeesAndExpectationsSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import BlogTeaserSection from "@/components/BlogTeaserSection";
import AppointmentSection from "@/components/AppointmentSection";
import LocationContactSection from "@/components/LocationContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-slateBlue-900">
      {/* Top Utility Bar & Navigation Header */}
      <NavBar />

      {/* Hero Section & 4-Stat Trust Strip */}
      <Hero />

      {/* Section 1: About Dr. Sharma */}
      <AboutSection />

      {/* Section 2: Specializations / Services */}
      <SpecializationsSection />

      {/* Section 3: Conditions Treated */}
      <ConditionsSection />

      {/* Section 4: Why Choose This Practice */}
      <WhyChooseUsSection />

      {/* Section 5: Clinic Facilities / Gallery */}
      <FacilitiesSection />

      {/* Section 6: How It Works */}
      <HowItWorksSection />

      {/* Section 7: Patient Testimonials */}
      <TestimonialsSection />

      {/* Section 8: FAQ */}
      <FaqSection />

      {/* Section 9: Insurance & Hospital Affiliations */}
      <InsuranceSection />

      {/* Section 10: Meet the Care Team */}
      <CareTeamSection />

      {/* Section 11: Awards & Recognition */}
      <AwardsSection />

      {/* Section 12: Telehealth / Online Consultation */}
      <TelehealthSection />

      {/* Section 13: Community Health Initiatives */}
      <CommunitySection />

      {/* Section 14: Consultation Fees & What to Expect */}
      <FeesAndExpectationsSection />

      {/* Section 15: Accessibility & Clinic Info */}
      <AccessibilitySection />

      {/* Section 16: Health Tips / Blog Teaser */}
      <BlogTeaserSection />

      {/* Section 17: Book Appointment */}
      <AppointmentSection />

      {/* Section 18: Location & Contact */}
      <LocationContactSection />

      {/* Section 19: Footer */}
      <Footer />
    </main>
  );
}
