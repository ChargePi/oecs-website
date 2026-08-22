import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { GITHUB_URL, STAGGER_DELAYS } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[90svh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center md:px-8">
      <Reveal delay={STAGGER_DELAYS[0]} duration={700}>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          One standard schema for every charger.
        </h1>
      </Reveal>
      <Reveal delay={STAGGER_DELAYS[1]} duration={700}>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Vendors provide long, inconsistent PDF spec sheets for their charger features. OECS normalizes
          them into a single, vendor-neutral schema — so you can compare hardware for your use case
          in seconds, not hours.
        </p>
      </Reveal>
      <Reveal delay={STAGGER_DELAYS[2]} duration={700}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-11 px-6">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11 px-6">
            <a href="#schema">
              See the schema
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
