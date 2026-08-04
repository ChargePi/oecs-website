import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Reveal } from '@/components/Reveal'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { SchemaExampleSection } from '@/components/sections/SchemaExampleSection'
import { CtaSection } from '@/components/sections/CtaSection'

function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <HeroSection />
        <Reveal>
          <ProblemSection />
        </Reveal>
        <Reveal>
          <SolutionSection />
        </Reveal>
        <Reveal>
          <SchemaExampleSection />
        </Reveal>
        <Reveal>
          <CtaSection />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
