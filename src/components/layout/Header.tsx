import { Menu, Zap } from 'lucide-react'
import { GithubIcon } from '@/components/icons/github-icon'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { GITHUB_URL, NAV_LINKS, OECS_HUB_URL } from '@/lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="flex items-center gap-2 font-heading text-lg font-semibold">
          <Zap className="size-5 text-primary" aria-hidden="true" />
          OECS
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {OECS_HUB_URL && (
            <Button asChild variant="ghost" size="sm">
              <a href={OECS_HUB_URL} target="_blank" rel="noreferrer">
                OECS Hub
              </a>
            </Button>
          )}
          <Button asChild variant="ghost" size="icon">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="View on GitHub">
              <GithubIcon className="size-5" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 sm:max-w-xs">
            <SheetTitle className="px-4 pt-4">Navigate</SheetTitle>
            <nav className="flex flex-col gap-1 px-4 pb-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex h-11 items-center text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              {OECS_HUB_URL && (
                <Button asChild variant="outline" className="mt-2">
                  <a href={OECS_HUB_URL} target="_blank" rel="noreferrer">
                    OECS Hub
                  </a>
                </Button>
              )}
              <Button asChild className="mt-2">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
