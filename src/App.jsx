import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import HowItWorks from './components/HowItWorks'
import PricingSection from './components/PricingSection'
import FAQ from './components/FAQ'

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <PricingSection />
        <FAQ />
      </div>
    </>
  )
}

export default App

