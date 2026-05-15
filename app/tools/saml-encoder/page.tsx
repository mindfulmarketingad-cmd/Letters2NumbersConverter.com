import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { SAMLEncoder } from '@/components/saml-encoder'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/saml-encoder`

export const metadata: Metadata = {
  title: { absolute: "SAML Encoder and Decoder" },
  description: 'Free SAML encoder and decoder. Encode XML to Base64 SAMLResponse or deflated SAMLRequest. Decode SAMLRequest and SAMLResponse parameters back to XML instantly. No uploads, works in your browser.',
  keywords: [
    'saml encoder',
    'saml decoder',
    'saml encoder decoder',
    'decode saml request',
    'decode saml response',
    'samlrequest decoder',
    'samlresponse decoder',
    'base64 saml decoder',
    'saml debugger',
    'saml token decoder',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'SAML Encoder and Decoder — Free Online Tool',
    description: 'Encode XML to SAMLRequest or SAMLResponse format, or decode either parameter back to readable XML. Handles deflate and Base64 automatically.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'SAML Encoder and Decoder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAML Encoder and Decoder — Free Online Tool',
    description: 'Decode SAMLRequest and SAMLResponse parameters to XML. Encode XML to SAML format. No sign-up.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'SAML Encoder and Decoder',
  'Free online SAML encoder and decoder. Encode XML to Base64 SAMLResponse or deflated SAMLRequest parameters, or decode either back to readable XML. Handles the deflate-raw + Base64 pipeline used by SAML 2.0 redirect binding.',
  PAGE_URL,
  'Utility'
)

const howToSchema = generateHowToSchema(
  'How to Decode a SAMLRequest or SAMLResponse',
  'Use our free SAML Encoder and Decoder to decode SAML parameters to readable XML.',
  [
    { name: 'Select the SAML type', description: 'Choose SAMLRequest (redirect binding — deflated + Base64) or SAMLResponse (POST binding — Base64 only).' },
    { name: 'Set mode to Decode', description: 'Click the "Decode" toggle at the top of the tool.' },
    { name: 'Paste the parameter value', description: 'Copy the raw value after SAMLRequest= or SAMLResponse= from your URL or form data and paste it into the input box. URL-decoding is handled automatically.' },
    { name: 'Click Decode', description: 'The tool deflates (if SAMLRequest) and Base64-decodes the value, then displays the prettified XML output.' },
    { name: 'Copy the XML', description: 'Use the Copy button to copy the decoded XML to your clipboard for debugging or logging.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is a SAML encoder?',
    answer: 'A SAML encoder converts XML assertions or requests into the Base64 format required by the SAML 2.0 protocol. For SAMLRequest (redirect binding), it also applies raw DEFLATE compression before Base64 encoding. For SAMLResponse (POST binding), only Base64 encoding is used.',
  },
  {
    question: 'What is the difference between SAMLRequest and SAMLResponse encoding?',
    answer: 'SAMLRequest (used in redirect binding) is compressed with raw DEFLATE first, then Base64-encoded, then URL-encoded. SAMLResponse (used in POST binding) is only Base64-encoded — no compression. This tool handles both automatically.',
  },
  {
    question: 'How do I decode a SAMLRequest from a URL?',
    answer: 'Copy the value after "SAMLRequest=" in the URL, select "SAMLRequest" type and "Decode" mode in this tool, paste the value, and click Decode. URL-decoding is applied automatically. The tool will inflate and Base64-decode the value to reveal the XML.',
  },
  {
    question: 'How do I decode a SAMLResponse?',
    answer: 'Select "SAMLResponse" and "Decode" mode, paste the Base64 value from the hidden form field, and click Decode. The tool Base64-decodes it and displays the XML assertion.',
  },
  {
    question: 'Is my SAML data sent to your servers?',
    answer: 'No. All encoding and decoding happens entirely in your browser using the Web Cryptography API and CompressionStream. No data is uploaded or stored anywhere.',
  },
  {
    question: 'What SAML bindings does this tool support?',
    answer: 'This tool supports SAML 2.0 HTTP Redirect Binding (SAMLRequest: deflate-raw + Base64 + URL encode) and HTTP POST Binding (SAMLResponse: Base64 only). These are the two most common bindings in production SSO systems.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'SAML Encoder', url: PAGE_URL },
])

const toolData: ToolData = getToolData('saml-encoder')

export default function SAMLEncoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="saml-encoder">
        <ToolLayout
          toolId="saml-encoder"
          toolName="SAML Encoder and Decoder"
          toolDescription="Our free SAML Encoder and Decoder handles the full SAML 2.0 encoding pipeline in your browser. Decode SAMLRequest parameters (Base64 + raw DEFLATE) or SAMLResponse parameters (Base64-only) back to readable XML — or encode XML into either format for testing. Includes an optional URL-encode step and a built-in format guide explaining the difference between redirect and POST binding."
          toolComponent={<SAMLEncoder />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
