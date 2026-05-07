import { Metadata } from "next"
import { BookCipherDecoder } from "@/components/bookcipherdecoder"
import { ToolLayout } from "@/components/tool-layout"

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

export default function BookCipherDecoderPage() {
  return (
    <ToolLayout
      toolId="book-cipher-decoder"
      toolName="Book Cipher Decoder"
      toolDescription="Decode hidden messages from books"
      toolComponent={<BookCipherDecoder />}
    />
  )
}
