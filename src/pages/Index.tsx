import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandIntro from "@/components/BrandIntro";
import WhyArrad from "@/components/WhyArrad";
import IndustriesSection from "@/components/IndustriesSection";
import ProductCategories from "@/components/ProductCategories";
import TechnicalServices from "@/components/TechnicalServices";
import TreatmentActivities from "@/components/TreatmentActivities";
import VisionMission from "@/components/VisionMission";
import Certifications from "@/components/Certifications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandIntro />
      <WhyArrad />
      <IndustriesSection />
      <ProductCategories />
      <TechnicalServices />
      <TreatmentActivities />
      <VisionMission />
      <Certifications />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
