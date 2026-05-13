import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { BookCipherDecoder } from "@/components/book-cipher-decoder"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/book-cipher-decoder`

const toolSchema = generateToolPageSchema(
  "Book Cipher Decoder",
  "Decode hidden messages from books",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Book Cipher Decoder", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Book Cipher Decoder",
  description: "Decode hidden messages from books",
  keywords: [],
  openGraph: {
    title: "Book Cipher Decoder",
    description: "Decode hidden messages from books",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Book Cipher Decoder" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Book Cipher Decoder", description: "Decode hidden messages from books", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("book-cipher-decoder")

export default function BookCipherDecoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="book-cipher-decoder">
    <ToolLayout
      toolId="book-cipher-decoder"
      toolName="Book Cipher Decoder"
      toolDescription="Decode hidden messages from books"
      toolComponent={<BookCipherDecoder />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
