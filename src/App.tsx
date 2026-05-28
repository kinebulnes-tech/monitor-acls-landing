import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { RealtimeProductStage } from './components/RealtimeProductStage'
import { InteractiveClinicalCase } from './components/InteractiveClinicalCase'
import { HowItWorks } from './components/HowItWorks'
import { ProblemSolution } from './components/ProblemSolution'
import { ClinicalCapabilities } from './components/ClinicalCapabilities'
import { AudiencePlans } from './components/AudiencePlans'
import { TrustSection } from './components/TrustSection'
import { TestimonialsFaq } from './components/TestimonialsFaq'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { trackCommercialEvent } from './lib/commercial'

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-med-bg text-med-text">
      <Navbar />
      <main>
        {/* 1 — Problema antes que solución */}
        <Hero />
        <ProblemSolution />

        {/* 2 — Solución y producto */}
        <RealtimeProductStage />
        <HowItWorks />

        {/* 3 — Experiencia real */}
        <InteractiveClinicalCase />

        {/* 4 — Evidencia y profundidad */}
        <ClinicalCapabilities />

        {/* 5 — Confianza antes de precio */}
        <TrustSection />

        {/* 6 — Decisión */}
        <AudiencePlans />

        {/* 7 — Cierre */}
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
