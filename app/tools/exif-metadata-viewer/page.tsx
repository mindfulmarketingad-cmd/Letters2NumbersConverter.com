import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { ExifMetadataViewer } from '@/components/exif-metadata-viewer'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/exif-metadata-viewer`

export const metadata: Metadata = {
  title: 'Exif Metadata Viewer',
  description: 'Free Exif Metadata Viewer — inspect JPEG, TIFF, and WebP images. View camera make/model, GPS, date taken, focal length, ISO, shutter speed, and all EXIF tags instantly. Your data stays local.',
  keywords: [
    'Exif metadata viewer',
    'EXIF viewer online',
    'image metadata viewer',
    'JPEG EXIF reader',
    'photo metadata viewer',
    'view EXIF data',
    'EXIF tag reader',
    'image EXIF online',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Exif Metadata Viewer | Free Image EXIF Inspector',
    description: 'View all EXIF metadata in JPEG, TIFF, and WebP images — camera, GPS, date, focal length, ISO, and more. No uploads. Your data stays local.',
    type: 'website',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exif Metadata Viewer | Free Image EXIF Inspector',
    description: 'Inspect EXIF metadata in any image file instantly. Camera, GPS, date, settings — all in your browser.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Exif Metadata Viewer',
  'Free online Exif Metadata Viewer. Inspect JPEG, TIFF, and WebP image files — view camera make/model, GPS coordinates, date taken, focal length, ISO, shutter speed, aperture, and all embedded EXIF tags instantly in your browser.',
  PAGE_URL,
  'Image Tools'
)

const howToSchema = generateHowToSchema(
  'How to View EXIF Metadata in an Image',
  'Use our free Exif Metadata Viewer to inspect all metadata embedded in any photo or image file.',
  [
    { name: 'Select your image', description: 'Click "Select file" or drag and drop your JPEG, TIFF, WebP, or PNG image onto the drop zone. A thumbnail preview appears immediately.' },
    { name: 'Click View metadata', description: 'Press the green "View metadata" button. The tool parses the EXIF data locally in your browser.' },
    { name: 'Inspect the results', description: 'The right panel displays all found EXIF fields grouped into File Info, Camera, Date & Time, and Camera Settings sections.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is EXIF metadata?',
    answer: 'EXIF (Exchangeable Image File Format) metadata is information embedded in image files by cameras and smartphones. It records details like the camera make and model, date and time the photo was taken, GPS location, focal length, ISO speed, shutter speed, and aperture.',
  },
  {
    question: 'What image formats does this viewer support?',
    answer: 'The viewer supports JPEG/JPG, TIFF, WebP, PNG, HEIC, and HEIF image files. EXIF data is most commonly found in JPEG files taken by cameras and smartphones.',
  },
  {
    question: 'Is my image uploaded to a server?',
    answer: 'No. All EXIF parsing is performed entirely in your browser using JavaScript. Your image file never leaves your device.',
  },
  {
    question: 'Why does my image show no EXIF data?',
    answer: 'Some images have their EXIF data stripped — this commonly happens when images are shared via social media platforms, resaved in certain editors, or exported as screenshots. PNG files typically do not contain EXIF data.',
  },
  {
    question: 'Can I see GPS coordinates from the image?',
    answer: 'If the photo was taken with GPS location enabled on the camera or phone and the EXIF data has not been stripped, the GPS coordinates will be displayed in the Camera Settings section.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Exif Metadata Viewer', url: PAGE_URL },
])

const toolData: ToolData = getToolData('exif-metadata-viewer')

export default function ExifMetadataViewerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="exif-metadata-viewer">
        <ToolLayout
          toolId="exif-metadata-viewer"
          toolName="Exif Metadata Viewer"
          toolDescription="Our free Exif Metadata Viewer instantly reads all EXIF tags embedded in any image — camera make and model, date taken, GPS location, focal length, ISO, shutter speed, aperture, and more — entirely in your browser with no uploads."
          toolComponent={<ExifMetadataViewer />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
