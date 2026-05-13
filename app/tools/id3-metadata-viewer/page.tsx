import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { ID3MetadataViewer } from '@/components/id3-metadata-viewer'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/id3-metadata-viewer`

export const metadata: Metadata = {
  title: 'ID3 Metadata Viewer',
  description: 'Free ID3 Metadata Viewer — inspect MP3, MP4, M4A, AIFF, and WAV audio files. View title, artist, album, cover art, BPM, and all ID3 tags instantly. Your data stays local.',
  keywords: [
    'ID3 metadata viewer',
    'MP3 metadata viewer',
    'ID3 tag reader',
    'audio metadata viewer',
    'MP3 tag editor online',
    'view ID3 tags',
    'audio file metadata',
    'ID3 tag viewer online',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'ID3 Metadata Viewer | Free Audio Tag Inspector',
    description: 'Inspect ID3 tags in MP3, MP4, M4A, AIFF, and WAV files. View title, artist, album art, BPM, and more — all in your browser.',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'ID3 Metadata Viewer' }],
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ID3 Metadata Viewer | Free Audio Tag Inspector',
    description: 'View all ID3 tags in your audio files instantly. No uploads. Your data stays local.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'ID3 Metadata Viewer',
  'Free online ID3 Metadata Viewer. Inspect MP3, MP4/M4A, AIFF, WAV, OGG, and FLAC audio files — view title, artist, album, year, genre, cover art, BPM, and all embedded ID3 tags instantly in your browser.',
  PAGE_URL,
  'Audio Tools'
)

const howToSchema = generateHowToSchema(
  'How to View ID3 Metadata in an Audio File',
  'Use our free ID3 Metadata Viewer to inspect all tags embedded in any audio file.',
  [
    { name: 'Select your audio file', description: 'Click "Select file" or drag and drop your MP3, MP4/M4A, AIFF, WAV, OGG, or FLAC file onto the drop zone.' },
    { name: 'Click View metadata', description: 'Press the green "View metadata" button. The tool loads jsmediatags in your browser to parse the ID3 tag data.' },
    { name: 'Inspect the results', description: 'The right panel displays all found tags: title, artist, album, year, genre, track number, BPM, composer, lyrics, and embedded album artwork.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What are ID3 tags?',
    answer: 'ID3 tags are metadata containers embedded inside audio files — most commonly MP3s. They store information like the track title, artist name, album, year, genre, track number, and even cover artwork.',
  },
  {
    question: 'What audio formats does this viewer support?',
    answer: 'The viewer supports MP3, MP4/M4A, AIFF, WAV, OGG, and FLAC files. Any file containing ID3v1, ID3v2, or equivalent metadata tags will be read.',
  },
  {
    question: 'Is my audio file uploaded to a server?',
    answer: 'No. All metadata reading happens entirely in your browser using the jsmediatags JavaScript library. Your audio file never leaves your device.',
  },
  {
    question: 'Can I see the album artwork?',
    answer: 'Yes. If the audio file contains an embedded cover image, it will be displayed in the File info panel alongside the other tag fields.',
  },
  {
    question: 'What if no tags are found?',
    answer: 'If the file has no embedded ID3 tags, the tool will display the file-level information (name, size, MIME type, last modified date) and a notice that no tags were detected.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'ID3 Metadata Viewer', url: PAGE_URL },
])

const toolData: ToolData = getToolData('id3-metadata-viewer')

export default function ID3MetadataViewerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="id3-metadata-viewer">
        <ToolLayout
          toolId="id3-metadata-viewer"
          toolName="ID3 Metadata Viewer"
          toolDescription="Our free ID3 Metadata Viewer lets you inspect every tag embedded in any audio file — title, artist, album, cover art, BPM, lyrics, and more — directly in your browser with no uploads required."
          toolComponent={<ID3MetadataViewer />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
