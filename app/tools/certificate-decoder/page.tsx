import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { CertificateDecoder } from '@/components/certificate-decoder'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/certificate-decoder`

export const metadata: Metadata = {
  title: 'Certificate Decoder — Decode SSL/TLS Certs, CSRs & Keys Online',
  description: 'Free online Certificate Decoder. Instantly decode SSL/TLS certificates, CSRs, and private keys in PEM, DER, Base64, or hex format. View subject, issuer, SANs, expiry, key size, and fingerprints. Your data stays local.',
  keywords: [
    'certificate decoder',
    'SSL certificate decoder',
    'TLS certificate viewer',
    'PEM decoder online',
    'CSR decoder',
    'DER decoder',
    'X.509 certificate viewer',
    'decode SSL certificate online',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Certificate Decoder | Free SSL/TLS Certificate Inspector',
    description: 'Decode SSL/TLS certificates, CSRs, and keys online. View subject, issuer, SANs, expiry, fingerprints, and key details — all in your browser.',
    type: 'website',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certificate Decoder | Free SSL/TLS Certificate Inspector',
    description: 'Instantly decode PEM, DER, Base64, or hex certificates and CSRs. No uploads. Your data stays local.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Certificate Decoder',
  'Free online Certificate Decoder. Instantly decode SSL/TLS X.509 certificates, CSRs, PKCS#7 chains, and private keys in PEM, DER, Base64, or hex format. Inspect subject, issuer, validity dates, SANs, key algorithm, key size, signature algorithm, and SHA-1/SHA-256 fingerprints — entirely in your browser.',
  PAGE_URL,
  'Security Tools'
)

const howToSchema = generateHowToSchema(
  'How to Decode an SSL/TLS Certificate Online',
  'Use our free Certificate Decoder to instantly inspect any X.509 certificate, CSR, or key.',
  [
    { name: 'Paste or upload your certificate', description: 'Switch to "Text" mode and paste your PEM block, Base64, or hex string — or switch to "File / binary" mode and drop a .pem, .crt, .cer, or .der file.' },
    { name: 'Click Decode', description: 'Press the green "Decode" button. The tool parses the ASN.1 DER structure entirely in your browser.' },
    { name: 'Inspect the results', description: 'The right panel displays the subject, issuer, validity dates, Subject Alternative Names, public key details, signature algorithm, serial number, and SHA-1/SHA-256 fingerprints.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is a certificate decoder?',
    answer: 'A certificate decoder (also called an X.509 viewer or PEM decoder) parses the ASN.1 DER binary structure of an SSL/TLS certificate and presents its fields in a human-readable format — subject, issuer, validity dates, Subject Alternative Names, public key details, and fingerprints.',
  },
  {
    question: 'What formats does this tool support?',
    answer: 'The tool supports PEM-encoded certificates (-----BEGIN CERTIFICATE-----), raw Base64, and hex-encoded DER binary. For files, it accepts .pem, .crt, .cer, .der, .p7b, and .csr extensions.',
  },
  {
    question: 'Is my certificate uploaded to a server?',
    answer: 'No. All decoding happens entirely in your browser using JavaScript. Your certificate data never leaves your device. This makes it safe to decode certificates containing sensitive information.',
  },
  {
    question: 'What is the difference between a certificate and a CSR?',
    answer: 'A certificate (X.509) is a signed document issued by a Certificate Authority (CA) that binds a public key to an identity. A CSR (Certificate Signing Request) is an unsigned request you send to a CA, containing the public key and identity information you want certified.',
  },
  {
    question: 'What are Subject Alternative Names (SANs)?',
    answer: 'Subject Alternative Names (SANs) are domain names and IP addresses that the certificate is valid for. Modern TLS certificates list all valid domains in the SANs extension rather than relying on the Common Name (CN) alone.',
  },
  {
    question: 'How do I check if my certificate is expired?',
    answer: 'After decoding, the Validity section shows the "Not before" and "Not after" dates. The status badge in the top-right of the results panel will show "Expired" in red, "Expiring Soon" in orange, or "Valid" in green.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Certificate Decoder', url: PAGE_URL },
])

const toolData: ToolData = getToolData('certificate-decoder')

export default function CertificateDecoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="certificate-decoder">
        <ToolLayout
          toolId="certificate-decoder"
          toolName="Certificate Decoder"
          toolDescription="Our free Certificate Decoder instantly parses SSL/TLS certificates, CSRs, PKCS#7 chains, and private keys — displaying subject, issuer, validity dates, Subject Alternative Names, key algorithm, key size, fingerprints, and more, entirely in your browser with no uploads."
          toolComponent={<CertificateDecoder />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
