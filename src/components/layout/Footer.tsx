import { Mail, Zap } from 'lucide-react'
import { useState } from 'react'
import { GithubIcon } from '@/components/icons/github-icon'
import { Separator } from '@/components/ui/separator'
import { CONTACT_EMAIL, GITHUB_URL, OECS_HUB_URL } from '@/lib/constants'

export function Footer() {
  const [showEmail, setShowEmail] = useState(false)

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
        <div className="flex items-center gap-4">
          {OECS_HUB_URL && (
            <a
              href={OECS_HUB_URL}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              OECS Hub
            </a>
          )}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="View on GitHub"
            className="flex size-11 items-center justify-center transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center text-xs text-muted-foreground sm:flex-row">
        <span>
          Developed by{' '}
          <a
            href="https://github.com/ChargePi"
            target="_blank"
            rel="noreferrer"
            className="font-medium transition-colors hover:text-foreground"
          >
            ChargePi
          </a>
        </span>
        {CONTACT_EMAIL && (
          <>
            <span className="hidden sm:inline" aria-hidden="true">
              &middot;
            </span>
            {showEmail ? (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setShowEmail(true)}
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                <Mail className="size-3.5" aria-hidden="true" />
                Show contact email
              </button>
            )}
          </>
        )}
      </div>
    </footer>
  )
}
