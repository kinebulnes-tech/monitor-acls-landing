import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { RealtimeProductStage } from './components/RealtimeProductStage'
import { InteractiveClinicalCase } from './components/InteractiveClinicalCase'
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
import { hasSimulatorUrl, trackCommercialEvent } from './lib/commercial'

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-med-bg text-med-text">
      <Navbar />
      <main>
        <Hero />
        {!hasSimulatorUrl() ? (
          <section className="border-b border-white/10 bg-med-bg" id="simulador-proximamente">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-med-cyan">Acceso institucional</p>
                <h2 className="mt-1 text-lg font-extrabold text-med-text">Acceso directo disponible con tu licencia</h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-med-muted">
                El simulador se habilita tras la configuración institucional. Agenda una demo para ver el flujo completo con tu equipo.
              </p>
            </div>
          </section>
        ) : null}
        <RealtimeProductStage />
        <InteractiveClinicalCase />
        <ProblemSolution />
        <InstitutionalBenefits />
        <TrustSection />
        <HowItWorks />
        <ClinicalUseCases />
        <MultiUserArchitecture />
        <FeaturesGrid />
        <AudiencePlans />
        <VideoDemoSection />
        <TestimonialsFaq />
        <ContactSection />
      </main>
      <a
        href="#contacto"
        onClick={() => trackCommercialEvent('click_demo', { source: 'mobile_fixed' })}
        className="fixed bottom-4 left-4 right-4 z-40 rounded-xl border border-med-blue/35 bg-med-bg/90 px-4 py-3 text-center text-xs font-extrabold uppercase tracking-wider text-med-cyan shadow-blue backdrop-blur-md md:hidden"
      >
        Agendar demo
      </a>
      <Footer />
    </div>
    </MotionConfig>
  )
}

export default App
