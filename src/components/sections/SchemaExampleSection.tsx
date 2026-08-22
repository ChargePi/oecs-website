import type { Ref } from 'react'
import { Reveal } from '@/components/Reveal'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MESSY_VENDOR_SPEC_EXCERPTS, SAMPLE_OECS_SCHEMA } from '@/data/sample-schema'
import { useElementHeight } from '@/hooks/use-element-height'
import { STAGGER_DELAYS } from '@/lib/constants'

function MessyPdfPane({ innerRef }: { innerRef?: Ref<HTMLDivElement> }) {
  return (
    <div ref={innerRef} className="flex flex-col gap-3">
      {MESSY_VENDOR_SPEC_EXCERPTS.map((excerpt) => (
        <Card key={excerpt.vendor} className="border-primary/20">
          <div className="px-4">
            <Badge variant="outline" className="border-primary/40 text-primary">
              {excerpt.vendor}
            </Badge>
          </div>
          <pre className="overflow-x-auto px-4 font-mono text-xs whitespace-pre-wrap text-muted-foreground sm:text-sm">
            {excerpt.text}
          </pre>
        </Card>
      ))}
    </div>
  )
}

function CleanSchemaPane({ maxHeight }: { maxHeight?: number }) {
  return (
    <Card
      className="flex flex-col overflow-hidden"
      style={maxHeight ? { maxHeight } : undefined}
    >
      <div className="px-4">
        <Badge variant="outline">oecs-schema.json</Badge>
      </div>
      <pre className="min-h-0 flex-1 overflow-auto px-4 font-mono text-xs text-foreground sm:text-sm">
        {JSON.stringify(SAMPLE_OECS_SCHEMA, null, 2)}
      </pre>
    </Card>
  )
}

export function SchemaExampleSection() {
  const { ref: pdfPaneRef, height: pdfPaneHeight } = useElementHeight<HTMLDivElement>()

  return (
    <section id="schema" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">See it for yourself</h2>
        <p className="mt-4 text-muted-foreground">
          Three vendors, three different ways of describing the same 22kW, 3-phase, Type 2 charger.
          Here's what that looks like in OECS.
        </p>
      </div>

      <div className="mt-12 hidden gap-6 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <Reveal delay={STAGGER_DELAYS[0]} duration={700}>
          <MessyPdfPane innerRef={pdfPaneRef} />
        </Reveal>
        <Reveal delay={STAGGER_DELAYS[1]} duration={700}>
          <CleanSchemaPane maxHeight={pdfPaneHeight} />
        </Reveal>
      </div>

      <Tabs defaultValue="pdfs" className="mt-12 md:hidden">
        <TabsList className="w-full">
          <TabsTrigger value="pdfs">Vendor PDFs</TabsTrigger>
          <TabsTrigger value="schema">OECS Schema</TabsTrigger>
        </TabsList>
        <TabsContent value="pdfs" className="mt-4">
          <MessyPdfPane />
        </TabsContent>
        <TabsContent value="schema" className="mt-4">
          <CleanSchemaPane />
        </TabsContent>
      </Tabs>
    </section>
  )
}
