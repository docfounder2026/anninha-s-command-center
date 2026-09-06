import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TransparencySection } from "@/components/TransparencySection";
import { SavingsExample } from "@/components/SavingsExample";
import { ReportPreview } from "@/components/ReportPreview";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { PartnersSection } from "@/components/PartnersSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

const TITLE = "ANNINHA CONSTRUÇÕES | Gestão de Compras e Acompanhamento de Obras";
const DESCRIPTION =
  "A ANNINHA CONSTRUÇÕES cuida de cotações, fornecedores, compras, entregas e acompanhamento operacional da sua obra.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <HowItWorks />
        <PricingSection />
        <ProjectsSection />
        <BenefitsSection />
        <TransparencySection />
        <SavingsExample />
        <ReportPreview />
        <TargetAudienceSection />
        <PartnersSection />
        <FAQSection />
        <FinalCTA />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
