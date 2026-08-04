import type { ReactNode } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        !inView && 'motion-safe:opacity-0',
        inView &&
          'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:fill-mode-forwards motion-safe:duration-1000 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
