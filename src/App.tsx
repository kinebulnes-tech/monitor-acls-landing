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
