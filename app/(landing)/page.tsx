import {
  CommunityImpact,
  Comparison,
  Contact,
  CorePhilosophy,
  FAQ,
  FinalCTA,
  Hero,
  MissionVision,
  OurStory,
  Pricing,
  PricingPromise,
  ProjectEstimator,
  RevoraDifference,
  StructuredWorkflow,
  TailoredSectors,
  Testimonials,
  TrustedPartner,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TrustedPartner />
      <StructuredWorkflow />
      <RevoraDifference />
      <Comparison />
      <TailoredSectors />
      <CommunityImpact />
      <CorePhilosophy />
      <Testimonials />
      <OurStory />
      <MissionVision />
      <Pricing />
      <PricingPromise />
      <ProjectEstimator />
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
}
