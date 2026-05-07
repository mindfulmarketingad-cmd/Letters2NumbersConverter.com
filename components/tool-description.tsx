'use client'

import Link from 'next/link'
import { getToolRegistry } from '@/lib/tool-registry'

interface ToolDescriptionProps {
  toolName: string
  toolDescription: string
}

export function ToolDescription({ toolName, toolDescription }: ToolDescriptionProps) {
  const toolRegistry = getToolRegistry()

  return (
    <div className="space-y-8">
      {/* Tool Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">{toolName}</h1>
        <p className="text-lg text-muted-foreground">{toolDescription}</p>
      </div>

      {/* How It Works */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <p className="text-muted-foreground">
          Use the interactive tool on the left to encode, decode, or solve your input. The tool provides real-time results as you type or make selections.
        </p>
      </div>

      {/* Features */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Real-time processing with instant results</li>
          <li>Works completely offline - no data sent to servers</li>
          <li>Copy results to clipboard easily</li>
          <li>Free and always available</li>
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
              <div className="font-semibold group-hover:text-green-600 transition-colors">{tool.name}</div>
              <div className="text-sm text-muted-foreground">{tool.description}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-green-600/10 border border-green-600/20 rounded-lg p-4">
        <h3 className="font-semibold mb-2">Your Privacy Matters</h3>
        <p className="text-sm text-muted-foreground">
          All processing happens in your browser. We never store, send, or log your data. Completely private and secure.
        </p>
      </div>
    </div>
  )
}
