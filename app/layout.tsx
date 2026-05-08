import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingToc } from '@/components/floating-toc'
import { ThemeProvider } from '@/components/theme-provider'
import { SchemaMarkup } from '@/components/schema-markup'
import { AuthProvider } from '@/lib/auth-context'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: 'Letter to Number Converter | Fast and Easy Conversion',
    template: '%s | Letters to Numbers Converter Tool',
  },
  description: 'Free letters to numbers converter tool. Convert A=1, B=2 through Z=26 instantly. Supports A1Z26, ASCII, hexadecimal, and binary encoding for puzzles, cryptography, and data science.',
  keywords: ['letters to numbers converter tool', 'letter to number', 'A1Z26 cipher', 'alphabet to numbers', 'letter number conversion', 'ASCII converter', 'text to numbers', 'alphabet cipher decoder'],
  authors: [{ name: 'Letters to Numbers' }],
  creator: 'Letters to Numbers',
  publisher: 'Letters to Numbers',
  other: {
    'google-adsense-account': 'ca-pub-2173008413459742',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.letters2numbersconverter.com',
    siteName: 'Letters to Numbers Converter Tool',
    title: 'Letters to Numbers Converter Tool | Free Online A1Z26 Decoder',
    description: 'Free letters to numbers converter tool. Convert A=1, B=2 through Z=26 instantly. Supports A1Z26, ASCII, hexadecimal, and binary encoding.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letters to Numbers Converter Tool | Free Online A1Z26 Decoder',
    description: 'Free letters to numbers converter tool. Convert A=1, B=2 through Z=26 instantly. Supports multiple encoding types.',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://www.letters2numbersconverter.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <SchemaMarkup />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SZGFN2SL75"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SZGFN2SL75', {
                page_path: window.location.pathname,
                stream_id: '14771988193',
              });
            `,
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2173008413459742"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-background">
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <FloatingToc />
          </ThemeProvider>
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

