import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Vision } from "@/components/Vision";
import { AboutKora } from "@/components/AboutKora";
import { CPlusSection } from "@/components/CPlusSection";
import { Differentials } from "@/components/Differentials";
import { DataAndDashboards } from "@/components/DataAndDashboards";
import { Methodology } from "@/components/Methodology";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Vision />
        <AboutKora />
        <CPlusSection />
        <Differentials />
        <DataAndDashboards />
        <Methodology />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
