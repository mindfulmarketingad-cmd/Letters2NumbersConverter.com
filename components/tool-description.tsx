'use client'

import Link from 'next/link'
import { getToolRegistry } from '@/lib/tool-registry'
import type { ToolData } from '@/components/tool-layout'

interface ToolDescriptionProps {
  toolName: string
  toolDescription: string
  toolData?: ToolData
}

export function ToolDescription({ toolName, toolDescription, toolData }: ToolDescriptionProps) {
  const toolRegistry = getToolRegistry()

  return (
    <div className="space-y-8">
      {/* Site Logo */}
      <Link href="/" className="inline-flex items-center gap-3 group mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
          <span className="text-primary-foreground font-bold text-base tracking-tight">L2N</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Letters to Numbers</p>
          <p className="text-xs text-muted-foreground">Trusted Conversion Tools</p>
        </div>
      </Link>

      {/* Tool Header */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          {toolName.includes('Converter') ? (
            <>
              {toolName.replace('Converter', '').trim()}
              <span style={{ color: '#11a099' }}> Converter</span>
            </>
          ) : (
            toolName
          )}
        </h1>
        <p className="text-lg text-muted-foreground">{toolDescription}</p>
      </div>

      {/* Who Is It For */}
      {toolData?.whoIsItFor && toolData.whoIsItFor.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Who Is It For?</h2>
          <div className="space-y-2">
            {toolData.whoIsItFor.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-3">
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* How It Works */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <p className="text-muted-foreground">
          {toolData?.howItWorks || "Use the interactive tool on the left to encode, decode, or solve your input. The tool provides real-time results as you type or make selections."}
        </p>
      </div>

      {/* Features */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          {toolData?.features && toolData.features.length > 0 ? (
            toolData.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))
          ) : (
            <>
              <li>Real-time processing with instant results</li>
              <li>Works completely offline - no data sent to servers</li>
              <li>Copy results to clipboard easily</li>
              <li>Free and always available</li>
            </>
          )}
        </ul>
      </div>

      {/* Related Tools */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Other Tools</h2>
        <p className="text-muted-foreground text-sm">
          Explore more tools by clicking the <span className="font-semibold">+</span> button above
        </p>
        <div className="space-y-2">
          {toolRegistry.slice(0, 5).map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="block p-3 rounded-lg border border-border hover:bg-secondary transition-colors group"
            >
              <div className="font-semibold transition-colors" style={{ color: 'inherit' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#11a099')} onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}>{tool.name}</div>
              <div className="text-sm text-muted-foreground">{tool.description}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="border rounded-lg p-4" style={{ backgroundColor: 'rgba(17, 160, 153, 0.1)', borderColor: 'rgba(17, 160, 153, 0.2)' }}>
        <h3 className="font-semibold mb-2">Your Privacy Matters</h3>
        <p className="text-sm text-muted-foreground">
          All processing happens in your browser. We never store, send, or log your data. Completely private and secure.
        </p>
      </div>
    </div>
  )
}
