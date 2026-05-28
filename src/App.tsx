import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProblemSolution } from './components/ProblemSolution'
import { Footer } from './components/Footer'

const RealtimeProductStage = lazy(() => import('./components/RealtimeProductStage').then(m => ({ default: m.RealtimeProductStage })))
const HowItWorks = lazy(() => import('./components/HowItWorks').then(m => ({ default: m.HowItWorks })))
const InteractiveClinicalCase = lazy(() => import('./components/InteractiveClinicalCase').then(m => ({ default: m.InteractiveClinicalCase })))
const ClinicalCapabilities = lazy(() => import('./components/ClinicalCapabilities').then(m => ({ default: m.ClinicalCapabilities })))
const TrustSection = lazy(() => import('./components/TrustSection').then(m => ({ default: m.TrustSection })))
const AudiencePlans = lazy(() => import('./components/AudiencePlans').then(m => ({ default: m.AudiencePlans })))
const TestimonialsFaq = lazy(() => import('./components/TestimonialsFaq').then(m => ({ default: m.TestimonialsFaq })))
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })))
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage').then(m => ({ default: m.CheckoutPage })))

function SectionFallback() {
  return <div className="min-h-[200px] bg-med-bg" aria-hidden="true" />
}

function Landing() {
  return (
    <div className="min-h-screen bg-med-bg text-med-text">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Suspense fallback={<SectionFallback />}>
          <RealtimeProductStage />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <InteractiveClinicalCase />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ClinicalCapabilities />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TrustSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AudiencePlans />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsFaq />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FaqSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
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
        <Route
          path="/checkout/individual"
          element={
            <Suspense fallback={<div className="min-h-screen bg-med-bg" />}>
              <CheckoutPage plan="individual" />
            </Suspense>
          }
        />
        <Route
          path="/checkout/institutional"
          element={
            <Suspense fallback={<div className="min-h-screen bg-med-bg" />}>
              <CheckoutPage plan="institutional" />
            </Suspense>
          }
        />
        <Route path="*" element={<Landing />} />
      </Routes>
    </MotionConfig>
  )
}

export default App
