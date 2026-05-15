import { HomepageLayout } from "@/components/homepage-layout"
import { PageSchemaMarkup } from "@/components/schema-markup"
import type { Metadata } from "next"
import { generateWebPageSchema, generateHowToSchema, generateFAQSchema } from "@/lib/schema-markup"

export const metadata: Metadata = {
  title: { absolute: "Letters To Numbers Converter" },
  description: "Letters To Numbers Converter — convert A=1, B=2 … Z=26 instantly. Free browser-based tool with 100+ encoders, decoders, cipher solvers, and converters. No sign-up required.",
  keywords: [
    "letters to numbers converter",
    "letter to number converter",
    "A1Z26 cipher decoder",
    "alphabet to numbers",
    "text to numbers converter",
    "free online tools",
    "cipher decoder",
    "encode decode online",
  ],
  openGraph: {
    title: "Letters to Numbers Converter — 100+ Free Online Tools",
    description: "Convert letters to numbers instantly with A1Z26, ASCII, hex, and binary. Plus 100+ free browser-based tools for ciphers, files, images, and word games.",
    url: "https://www.letters2numbersconverter.com",
    type: "website",
    images: [
      {
        url: "https://www.letters2numbersconverter.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Letters to Numbers Converter — Free Online Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letters to Numbers Converter — 100+ Free Online Tools",
    description: "Convert letters to numbers instantly. Plus ciphers, file tools, image editors, and word games — all free, all in your browser.",
    images: ["https://www.letters2numbersconverter.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com",
  },
}

export default function Home() {
  const homePageSchema = generateWebPageSchema(
    "Letters to Numbers Converter — 100+ Free Online Tools",
    "Free Letters to Numbers Converter and 100+ browser-based online tools. Convert A=1 B=2 Z=26 instantly. Supports A1Z26, ASCII, hex, binary, ciphers, file conversion, image tools, and word games.",
    "https://www.letters2numbersconverter.com",
    undefined,
    undefined,
    ["https://www.letters2numbersconverter.com/og-image.png"]
  )

  const howToSchema = generateHowToSchema(
    "How to Convert Letters to Numbers",
    "Use our free Letters to Numbers Converter to instantly translate any text to its numeric equivalent.",
    [
      { name: "Open the Letters to Numbers Converter", description: "Visit the tool at letters2numbersconverter.com or search for it in the site search bar." },
      { name: "Type or paste your text", description: "Enter the letters or message you want to convert in the input panel on the left." },
      { name: "Choose your encoding format", description: "Select A1Z26 (A=1), A0Z25 (A=0), ASCII, Hexadecimal, or Binary from the format options." },
      { name: "Copy your result", description: "The converted numbers appear instantly in the output panel. Click Copy to clipboard or download the result." },
    ]
  )

  const faqSchema = generateFAQSchema([
    {
      question: "What is a Letters to Numbers Converter?",
      answer: "A Letters to Numbers Converter transforms alphabetic characters into their numeric equivalents. The most common standard is A1Z26, where A=1, B=2, up to Z=26. Our tool also supports A0Z25, ASCII, hexadecimal, and binary.",
    },
    {
      question: "Is the Letters to Numbers Converter free?",
      answer: "Yes, our Letters to Numbers Converter and all 100+ tools are completely free. No registration or payment is required.",
    },
    {
      question: "Is my data private?",
      answer: "Yes. All conversions happen entirely in your browser. We never store, send, or log any data you enter.",
    },
    {
      question: "Can I decode numbers back to letters?",
      answer: "Yes. All tools support bidirectional conversion. Enter numbers in decode mode to get the original letters back.",
    },
    {
      question: "What other tools does the site offer?",
      answer: "Beyond the Letters to Numbers Converter, the site offers 100+ tools including cipher decoders, Morse code translator, PDF/Word converters, image tools, word game solvers, Base32 converter, Roman numeral converter, and much more.",
    },
  ])

  return (
    <>
      <PageSchemaMarkup schema={homePageSchema} />
      <PageSchemaMarkup schema={howToSchema} />
      <PageSchemaMarkup schema={faqSchema} />
      <HomepageLayout />
    </>
  )
}
