import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CustomizeSection } from "@/components/home/CustomizeSection";
import { ManageSection } from "@/components/home/ManageSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Features />
      <CustomizeSection />
      <ManageSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
};

export default Index;
