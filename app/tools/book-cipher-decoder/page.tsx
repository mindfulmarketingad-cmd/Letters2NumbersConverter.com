import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { BookCipherDecoder } from "@/components/book-cipher-decoder"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Book Cipher Decoder",
  description: "Decode hidden messages from books",
  keywords: [],
  openGraph: {
    title: "Book Cipher Decoder",
    description: "Decode hidden messages from books",
    type: "website",
  },
}


const toolData: ToolData = getToolData("book-cipher-decoder")

export default function BookCipherDecoderPage() {
  return (
    <ToolPageWrapper toolSlug="book-cipher-decoder">
    <ToolLayout
      toolId="book-cipher-decoder"
      toolName="Book Cipher Decoder"
      toolDescription="Decode hidden messages from books"
      toolComponent={<BookCipherDecoder />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
