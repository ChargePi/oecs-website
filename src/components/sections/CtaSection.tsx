import { Button } from '@/components/ui/button'
import { GITHUB_URL } from '@/lib/constants'

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <div className="flex flex-col items-center rounded-2xl bg-card px-6 py-16 text-center ring-1 ring-foreground/10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Get involved</h2>
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
    </section>
  )
}
