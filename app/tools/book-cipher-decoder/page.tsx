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
  title: { absolute: "Book Cipher Decoder" },
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
      toolDescription="The Book Cipher Decoder encodes and decodes secret messages using any shared text as the cipher key, replicating one of history's most trusted covert communication methods used by spies, resistance fighters, and diplomats for centuries. In a book cipher, each number in the ciphertext points to a specific page, line, and word in the agreed-upon book, making the message completely unreadable to anyone without the exact same edition. Paste your reference text and your coded number sequence into the tool and it instantly resolves each coordinate to reveal the hidden plaintext, or works in reverse to encode a message you wish to conceal. The entire process runs in your browser without any server-side processing, so your secret texts and reference books never leave your device."
      toolComponent={<BookCipherDecoder />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
