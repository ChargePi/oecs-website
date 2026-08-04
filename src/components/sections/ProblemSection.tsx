import { FileWarning, Ruler, SearchX } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const PROBLEMS = [
  {
    icon: Ruler,
    title: 'Inconsistent terminology',
    description:
      '"Rated Amperage", "Max Output Current" and "Nominal Current" can all describe the same field — named differently by every vendor.',
  },
  {
    icon: FileWarning,
    title: 'Unstructured documents',
    description:
      'Specs live in PDFs, not data. There is no reliable way to query, filter, or diff them programmatically.',
  },
  {
    icon: SearchX,
    title: "Manual comparison doesn't scale",
    description:
      'Evaluating five vendors means opening five PDFs and cross-referencing every field by hand.',
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          Comparing chargers means reading PDFs. A lot of them.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Every vendor documents the same handful of features — differently.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PROBLEMS.map((problem) => (
          <Card key={problem.title}>
            <CardHeader>
              <problem.icon className="size-5 text-muted-foreground" aria-hidden="true" />
              <CardTitle className="mt-2 text-base">{problem.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
