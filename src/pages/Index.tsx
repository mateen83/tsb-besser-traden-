import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhyTradeSection } from "@/components/landing/WhyTradeSection";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { JoinCTASection } from "@/components/landing/JoinCTASection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyTradeSection />
        <ReviewsSection />
        <ResultsSection />
        <JoinCTASection />
        <ComparisonSection />
        <AboutSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
