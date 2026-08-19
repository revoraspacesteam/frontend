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
import Revdifference from "@/components/landing/revdifference";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TrustedPartner />
      <StructuredWorkflow />
      {/* <RevoraDifference /> */}
      <Revdifference />
      <Comparison />
      {/* <TailoredSectors /> */}
      {/* <CommunityImpact /> */}
      <OurStory />
      <MissionVision />
      {/* <Pricing /> */}
      <PricingPromise />
      <ProjectEstimator />
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
}
