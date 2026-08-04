import { ExternalLink, Zap } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { GITHUB_URL } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2 font-heading font-medium text-foreground">
          <Zap className="size-4 text-primary" aria-hidden="true" />
          OECS
        </div>
        <p className="text-center">
          Open, vendor-neutral charger specification schema. Not affiliated with any hardware
          vendor.
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 items-center gap-1.5 transition-colors hover:text-foreground"
        >
          GitHub
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
