import Script from 'next/script'
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  combinedOrganizationSchema,
} from '@/lib/schema-markup'

export function SchemaMarkup() {
  const combinedSchema = combinedOrganizationSchema()

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchema, null, 2),
      }}
      strategy="afterInteractive"
    />
  )
}

export function PageSchemaMarkup({ schema }: { schema: any }) {
  return (
    <Script
      id="page-schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
      strategy="afterInteractive"
    />
  )
}
