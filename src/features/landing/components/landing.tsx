import LandingHeader from "./landing-header";
import LandingHero from "./landing-hero";
import TrustedBy from "./trusted-by";
import PainPoints from "./pain-points";
import HowItWorks from "./how-it-works";
import ModulesGrid from "./modules-grid";
import DashboardPreview from "./dashboard-preview";
import FeatureShowcase from "./feature-showcase";
import Automation from "./automation";
import Stats from "./stats";
import MobileExperience from "./mobile-experience";
import Testimonials from "./testimonials";
import Pricing from "./pricing";
import FAQ from "./faq";
import FinalCta from "./final-cta";
import LandingFooter from "./landing-footer";

export default function Landing() {
  return (
    <div className="font-sans">
      <a
        href="#contenu"
        className="sr-only rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60]"
      >
        Aller au contenu principal
      </a>
      <LandingHeader />
      <main id="contenu">
        <LandingHero />
        <TrustedBy />
        <PainPoints />
        <HowItWorks />
        <ModulesGrid />
        <DashboardPreview />
        <FeatureShowcase />
        <Automation />
        <Stats />
        <MobileExperience />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}
