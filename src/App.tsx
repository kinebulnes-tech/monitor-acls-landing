import { Routes, Route } from 'react-router-dom'
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
import { CheckoutPage } from './pages/CheckoutPage'
import { trackCommercialEvent } from './lib/commercial'

function Landing() {
  return (
    <div className="min-h-screen bg-med-bg text-med-text">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <RealtimeProductStage />
        <HowItWorks />
        <InteractiveClinicalCase />
        <ClinicalCapabilities />
        <TrustSection />
        <AudiencePlans />
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
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/checkout/individual" element={<CheckoutPage plan="individual" />} />
        <Route path="/checkout/institutional" element={<CheckoutPage plan="institutional" />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </MotionConfig>
  )
}

export default App
