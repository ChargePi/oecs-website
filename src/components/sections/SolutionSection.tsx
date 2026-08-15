import { Blocks, Code2, GitBranch, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { STAGGER_DELAYS } from '@/lib/constants'

const VALUE_PROPS = [
  {
    icon: Code2,
    title: 'Machine-readable',
    description: 'A JSON/YAML schema you can validate, diff, and query with standard tooling.',
  },
  {
    icon: ShieldCheck,
    title: 'Vendor-neutral',
    description:
      'Field names and enums are defined once, independent of how any single vendor labels them.',
  },
  {
    icon: GitBranch,
    title: 'Open source',
    description:
      'The schema is public and versioned — propose changes, track history, no vendor lock-in.',
  },
  {
    icon: Blocks,
    title: 'Extensible',
    description: 'New charger capabilities get added as fields, not another unstructured PDF.',
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          OECS: one schema, every vendor
        </h2>
        <p className="mt-4 text-muted-foreground">
          A vendor-neutral, open specification for describing charger hardware — versioned,
          structured, and free to use.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {VALUE_PROPS.map((prop, i) => (
          <Reveal key={prop.title} delay={STAGGER_DELAYS[i]} duration={700} className="flex">
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center gap-2">
                <prop.icon className="size-5 text-primary" aria-hidden="true" />
                <CardTitle className="text-base">{prop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{prop.description}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
