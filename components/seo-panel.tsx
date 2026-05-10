'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { getToolRegistry } from '@/lib/tool-registry'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'

export function SeoPanel() {
  const toolRegistry = getToolRegistry()

  // Default homepage content
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          Free Online <span style={{ color: '#11a099' }}>Web Tools</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Free online tool to convert letters to numbers using A1Z26, ASCII, hexadecimal, binary encoding and more. Instantly encode and decode text for cryptography, puzzles, geocaching, and data science.
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="space-y-3">
          {[
            'Multiple encoding formats (A1Z26, ASCII, Hex, Binary)',
            'Real-time conversion with instant results',
            'Support for letters, numbers, and special characters',
            'Copy to clipboard functionality',
            'Works completely offline - your data stays local',
            'All tools run locally in browser. No data is stored.',
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#11a099' }} />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Common Uses</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• <strong>Cryptography</strong> - Create and solve cipher puzzles</li>
          <li>• <strong>Geocaching</strong> - Decode waypoint coordinates and clues</li>
          <li>• <strong>Data Science</strong> - Convert text to numerical formats for analysis</li>
          <li>• <strong>Escape Rooms</strong> - Build and solve puzzle sequences</li>
          <li>• <strong>Educational</strong> - Learn about encoding and character systems</li>
          <li>• <strong>Coding</strong> - Work with ASCII and binary representations</li>
        </ul>
      </div>

      {/* Encoding Types */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Encoding Types Supported</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'A1Z26', desc: 'A=1, B=2... Z=26' },
            { name: 'A0Z25', desc: 'A=0, B=1... Z=25' },
            { name: 'ASCII', desc: 'American Standard Code for Information Interchange' },
            { name: 'Hexadecimal', desc: 'Base-16 representation (0-9, A-F)' },
            { name: 'Binary', desc: 'Base-2 representation (0s and 1s)' },
            { name: 'Atbash', desc: 'Reverse alphabet substitution' },
          ].map((type, index) => (
            <div key={index} className="p-3 rounded-lg bg-secondary/50">
              <strong className="text-foreground">{type.name}</strong>
              <p className="text-sm text-muted-foreground">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* All Tools */}
      <div>
        <h2 className="text-2xl font-bold mb-4">All Available Tools</h2>
        <p className="text-muted-foreground mb-4">
          Click the <span className="font-semibold">+</span> button to explore our complete collection of encoding, decoding, and cipher tools.
        </p>
        <Link
          href="/tools"
          className="inline-block px-6 py-2 rounded-lg text-white transition-colors"
          style={{ backgroundColor: '#11a099' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          View All Tools
        </Link>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is my data secure?',
              a: 'Yes. All conversions happen in your browser. No data is sent to our servers. Your privacy is always protected.',
            },
            {
              q: 'What encoding should I use?',
              a: 'A1Z26 is the most common for puzzles. Use ASCII for computer text. Binary for digital systems. Hex for programming.',
            },
            {
              q: 'Can I convert numbers back to letters?',
              a: 'Yes, most tools support bidirectional conversion. Simply use the decode function to reverse the process.',
            },
            {
              q: 'Are all online tools free?',
              a: 'Yes, all our online web tools are completely free to use. No registration, no hidden fees, just pure functionality.',
            },
            {
              q: 'How do I use the A1Z26 converter?',
              a: 'Select the A1Z26 Translator tool, paste your text, click Encode to convert letters to numbers (A=1, B=2, etc.), or Decode to reverse it.',
            },
            {
              q: 'What are the best tools for image processing?',
              a: 'We offer Grayscale Image Converter for black and white conversion, Black and White Photo to Color Converter for colorization, and Scan Words From Image for text extraction via OCR.',
            },
            {
              q: 'Can I use these tools offline?',
              a: 'Yes! All our web tools work completely offline once loaded. Your browser processes everything locally without requiring an internet connection.',
            },
            {
              q: 'What is URL percent encoding used for?',
              a: 'URL percent encoding converts special characters into a format safe for URLs. Use our URL Percent Encoding and Decoding tool to instantly encode or decode any URL safely.',
            },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-muted-foreground text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div>
        <TestimonialsCarousel />
      </div>

      {/* CTA */}
      <div className="rounded-lg border p-6" style={{ backgroundColor: 'rgba(17, 160, 153, 0.1)', borderColor: 'rgba(17, 160, 153, 0.2)' }}>
        <h3 className="font-bold text-lg mb-2">Ready to get started?</h3>
        <p className="text-muted-foreground mb-4">
          Select any tool from the left panel and start encoding or decoding right away.
        </p>
        <button className="px-6 py-2 rounded-lg text-white transition-colors" style={{ backgroundColor: '#11a099' }} 
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
          Start Converting
        </button>
      </div>
    </div>
  )
}
