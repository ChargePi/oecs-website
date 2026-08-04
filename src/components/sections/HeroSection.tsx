import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GITHUB_URL } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[90svh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center md:px-8">
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
        One standard schema for every charger spec.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
        Vendors ship inconsistent PDF spec sheets for the same charger features. OECS normalizes
        them into a single, computer-readable schema — so you can compare hardware for your use case
        in seconds, not hours.
      </p>
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
    </section>
  )
}
