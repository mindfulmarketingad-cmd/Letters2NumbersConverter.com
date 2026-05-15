import { Metadata } from "next"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/letter-number-converter`

const toolSchema = generateToolPageSchema(
  "Letter Number Converter",
  "Free online letter to number converter using A1Z26 cipher. Convert letters to numbers, numbers to letters with multiple encoding methods (ASCII, HEX, BINARY, A0Z25). Supports 25+ languages. Perfect for cryptography, coding, puzzles, and educational use.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Letter Number Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Letter To Number Converter" },
  description: "Free online letter to number converter using A1Z26 cipher. Convert letters to numbers, numbers to letters with multiple encoding methods (ASCII, HEX, BINARY, A0Z25). Supports 25+ languages. Perfect for cryptography, coding, puzzles, and educational use.",
  keywords: [
    "letter to number converter",
    "A1Z26 cipher",
    "letters to numbers",
    "number to letter converter",
    "A1Z26 encoder",
    "alphanumeric converter",
    "character to number",
    "cipher converter",
    "letter number encoding",
    "ASCII converter",
    "cryptography tool",
    "text to number converter",
    "alphabet to numbers",
    "letter cipher"
  ],
  openGraph: {
    title: "Letter to Number Converter - A1Z26 Cipher Encoder & Decoder",
    description: "Convert letters to numbers and numbers to letters using A1Z26 and other encoding methods. Free online converter with 25+ language support.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/letter-number-converter",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Letter to Number Converter - A1Z26 Cipher & Alphanumeric Encoding" }],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/letter-number-converter",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Letter to Number Converter - A1Z26 Cipher & Alphanumeric Encoding", description: "Free online letter to number converter using A1Z26 cipher. Convert letters to numbers, numbers to letters with multiple encoding methods (ASCII, HEX, BINARY, A0Z25). Supports 25+ languages. Perfect fo", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = {
  howItWorks: "Our letter to number converter transforms text into numeric values using multiple encoding methods. Enter any text in the input panel and select your desired conversion method: A1Z26 (A=1, Z=26) for classic alphabet-to-number conversion, A0Z25 for A=0 format, ASCII for computer character codes, HEX for hexadecimal encoding, or BINARY for binary representation. The letter number converter instantly displays the numeric conversion in real-time, supporting 25+ languages and character sets. Works bidirectionally—convert letters to numbers or numbers back to letters with a single click.",
  features: [
    "Convert letters to numbers using A1Z26 cipher method",
    "A1Z26 encoder and decoder with instant results",
    "Alternative A0Z25 alphabet-to-number conversion",
    "ASCII character to number encoding",
    "Hexadecimal (HEX) conversion from letters",
    "Binary encoding for computer science applications",
    "Numbers to letters reverse conversion",
    "Bidirectional letter number transformer",
    "Support for 25+ languages and character sets",
    "Real-time letter to number conversion as you type",
    "Copy numeric results to clipboard instantly",
    "Batch processing for converting long texts",
    "Visual character mapping and encoding breakdown",
    "Works completely offline - no server uploads",
    "Multiple encoding methods in one letter converter tool",
    "Educational explanations of each encoding system"
  ],
  whoIsItFor: [
    {
      title: "Cryptography & Security Enthusiasts",
      description: "Learn fundamental cipher techniques using the letter to number converter to understand A1Z26 encoding, character substitution, and basic cryptographic principles used in information security."
    },
    {
      title: "Students & Computer Science Learners",
      description: "Use the letter number converter to understand character encoding, ASCII values, numerical representations, and how computers process text as numbers in programming and data science."
    },
    {
      title: "Programmers & Software Developers",
      description: "Utilize the letter to number converter for debugging character encoding issues, understanding ASCII tables, testing alphanumeric conversions, and learning character-to-number mappings in development."
    },
    {
      title: "Puzzle & Game Solvers",
      description: "Solve cryptograms, word puzzles, treasure hunts, and challenge codes efficiently using the letter number converter to quickly decode numeric representations and find hidden messages."
    },
    {
      title: "Educators & Teachers",
      description: "Use the letter to number converter as an educational tool to teach character encoding, cryptography basics, alphabet sequences, and numerical representation to students of all ages."
    },
    {
      title: "Writers & Content Creators",
      description: "Incorporate letter to number conversion techniques into stories, puzzles, codes, and interactive content using the converter for instant alphanumeric encoding and decoding."
    }
  ]
}

export default function LetterNumberConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="letter-number-converter">
    <ToolLayout
      toolId="letters-to-numbers"
      toolName="Letter to Number Converter"
      toolDescription="The Letter Number Converter is a versatile bidirectional tool for converting letters to numbers and numbers back to letters using the most common encoding systems, including A1Z26 (where A=1 and Z=26), ASCII, hexadecimal, and binary formats. Whether you need to encode a message, decode an alphanumeric cipher, or explore character encoding for educational purposes, this tool delivers real-time results with zero delay. It supports over 25 languages and character sets, making it practical for international text and multilingual data. From cryptography enthusiasts to software developers debugging encoding issues, the letter number converter handles every use case in a single, easy-to-use interface."
      toolComponent={<LetterNumberConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
