import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { RealtimeProductStage } from './components/RealtimeProductStage'
import { HowItWorks } from './components/HowItWorks'
import { ClinicalUseCases } from './components/ClinicalUseCases'
import { ProblemSolution } from './components/ProblemSolution'
import { InstitutionalBenefits } from './components/InstitutionalBenefits'
import { MultiUserArchitecture } from './components/MultiUserArchitecture'
import { FeaturesGrid } from './components/FeaturesGrid'
import { AudiencePlans } from './components/AudiencePlans'
import { VideoDemoSection } from './components/VideoDemoSection'
import { TrustSection } from './components/TrustSection'
import { TestimonialsFaq } from './components/TestimonialsFaq'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-med-bg text-med-text">
      <Navbar />
      <main>
        <Hero />
        <RealtimeProductStage />
        <HowItWorks />
        <ProblemSolution />
        <ClinicalUseCases />
        <InstitutionalBenefits />
        <MultiUserArchitecture />
        <FeaturesGrid />
        <AudiencePlans />
        <VideoDemoSection />
        <TrustSection />
        <TestimonialsFaq />
        <ContactSection />
      </main>
      <a
        href="#contacto"
        className="fixed bottom-4 left-4 right-4 z-40 rounded-xl border border-med-blue/35 bg-med-blue/15 px-4 py-3 text-center text-xs font-black uppercase tracking-wider text-med-blue shadow-blue md:hidden"
      >
        Solicitar demo institucional
      </a>
      <Footer />
    </div>
  )
}

export default App
