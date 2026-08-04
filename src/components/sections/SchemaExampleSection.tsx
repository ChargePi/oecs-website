import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MESSY_VENDOR_SPEC_EXCERPTS, SAMPLE_OECS_SCHEMA } from '@/data/sample-schema'

function MessyPdfPane() {
  return (
    <div className="flex flex-col gap-3">
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

function CleanSchemaPane() {
  return (
    <Card>
      <div className="px-4">
        <Badge variant="outline">oecs-schema.json</Badge>
      </div>
      <pre className="overflow-x-auto px-4 font-mono text-xs text-foreground sm:text-sm">
        {JSON.stringify(SAMPLE_OECS_SCHEMA, null, 2)}
      </pre>
    </Card>
  )
}

export function SchemaExampleSection() {
  return (
    <section id="schema" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">See it for yourself</h2>
        <p className="mt-4 text-muted-foreground">
          Three vendors, three different ways of describing the same 22kW, 3-phase, Type 2 charger.
          Here's what that looks like normalized.
        </p>
      </div>

      <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2">
        <MessyPdfPane />
        <CleanSchemaPane />
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
