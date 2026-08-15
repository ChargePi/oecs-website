import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GITHUB_URL, OECS_HUB_URL } from '@/lib/constants'

function GetInvolvedCard() {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl bg-card px-6 py-16 text-center ring-1 ring-foreground/10">
      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Get involved</h2>
      <p className="mt-4 max-w-xl text-muted-foreground">
        OECS is early and open. Help shape the schema, propose new fields, or just follow along.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="h-11 px-6">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-11 px-6">
          <a href={`${GITHUB_URL}/issues`} target="_blank" rel="noreferrer">
            Open an issue
          </a>
        </Button>
      </div>
    </div>
  )
}

export function CtaSection() {
  if (!OECS_HUB_URL) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <GetInvolvedCard />
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <GetInvolvedCard />

        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          or
        </span>

        <div className="flex w-full flex-col items-center rounded-2xl bg-primary/10 px-6 py-16 text-center ring-1 ring-primary/30">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Browse the Hub</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            See the schema in action — search, filter, and compare real charger specs built on OECS.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="h-11 px-6">
              <a href={OECS_HUB_URL} target="_blank" rel="noreferrer">
                Explore the Hub
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
