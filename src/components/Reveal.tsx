import type { ReactNode } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

type RevealDelay = 0 | 75 | 100 | 150 | 200 | 300 | 400 | 500 | 600 | 700 | 1000
type RevealDuration = 300 | 500 | 700 | 1000

const DELAY_CLASSES: Record<RevealDelay, string> = {
  0: '',
  75: 'delay-75',
  100: 'delay-100',
  150: 'delay-150',
  200: 'delay-200',
  300: 'delay-300',
  400: 'delay-400',
  500: 'delay-500',
  600: 'delay-600',
  700: 'delay-700',
  1000: 'delay-1000',
}

const DURATION_CLASSES: Record<RevealDuration, string> = {
  300: 'duration-300',
  500: 'duration-500',
  700: 'duration-700',
  1000: 'duration-1000',
}

// Every Reveal uses the same fade + slide-up motion — one consistent transition
// language across the page rather than a different effect per section.
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 1000,
}: {
  children: ReactNode
  className?: string
  delay?: RevealDelay
  duration?: RevealDuration
}) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        !inView && 'opacity-0',
        inView &&
          cn(
            'animate-in fade-in fill-mode-forwards ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:slide-in-from-bottom-8',
            DELAY_CLASSES[delay],
            DURATION_CLASSES[duration],
          ),
        className,
      )}
    >
      {children}
    </div>
  )
}
