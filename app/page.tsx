import { HomepageLayout } from "@/components/homepage-layout"
import { PageSchemaMarkup } from "@/components/schema-markup"
import type { Metadata } from "next"
import { generateWebPageSchema, generateHowToSchema, generateFAQSchema } from "@/lib/schema-markup"

export const metadata: Metadata = {
  title: "#1 Letters to Numbers Converter | Free Online A1Z26 Decoder",
  description: "Free letters to numbers converter tool. Convert A=1, B=2 through Z=26 instantly. Supports A1Z26, ASCII, hexadecimal, and binary encoding for puzzles, cryptography, geocaching, and data science.",
  keywords: ["letters to numbers converter tool", "letter to number converter", "A1Z26 cipher decoder", "alphabet to numbers", "text to numbers converter"],
  openGraph: {
    title: "Letters to Numbers Converter Tool | Free Online A1Z26 Decoder",
    description: "Free letters to numbers converter. Convert A=1, B=2 through Z=26 instantly with multiple encoding formats.",
    url: "https://www.letters2numbersconverter.com",
    type: "website",
    images: [
      {
        url: "https://www.letters2numbersconverter.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Letters to Numbers Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letters to Numbers Converter | Free A1Z26 Decoder",
    description: "Convert letters to numbers instantly with our free online A1Z26 converter",
    images: ["https://www.letters2numbersconverter.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com",
  },
}

export default function Home() {
  const homePageSchema = generateWebPageSchema(
    "Letters to Numbers Converter Tool | Free Online A1Z26 Decoder",
    "Free letters to numbers converter tool. Convert A=1, B=2 through Z=26 instantly. Supports A1Z26, ASCII, hexadecimal, and binary encoding.",
    "https://www.letters2numbersconverter.com",
    undefined,
    undefined,
    ["https://www.letters2numbersconverter.com/og-image.png"]
  )

  const howToSchema = generateHowToSchema(
    "How to Convert Letters to Numbers",
    "Learn how to convert letters to numbers using various encoding methods",
    [
      {
        name: "Enter Your Text",
        description: "Type or paste the text you want to convert into the input field",
      },
      {
        name: "Choose Encoding Type",
        description: "Select your preferred encoding format: A1Z26, ASCII, Hexadecimal, or Binary",
      },
      {
        name: "View Results",
        description: "The converter instantly displays the converted numbers",
      },
      {
        name: "Copy or Download",
        description: "Copy the results to clipboard or download as needed",
      },
    ]
  )

  const faqSchema = generateFAQSchema([
    {
      question: "What is a letters to numbers converter?",
      answer: "A letters to numbers converter is a tool that transforms alphabetic characters into their numeric equivalents. The most common method is A1Z26 where A=1, B=2, up to Z=26.",
    },
    {
      question: "What encoding formats are supported?",
      answer: "Our converter supports A1Z26, A0Z25, ASCII codes, Hexadecimal, and Binary encoding methods.",
    },
    {
      question: "Is the converter free to use?",
      answer: "Yes, our letters to numbers converter is completely free. No registration or payment required.",
    },
    {
      question: "Are my texts stored or monitored?",
      answer: "No, all conversions happen in your browser. We do not store, monitor, or track any data you enter.",
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
