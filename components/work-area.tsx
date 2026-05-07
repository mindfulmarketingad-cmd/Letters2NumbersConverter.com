'use client'

import { Plus, RotateCcw, Share2, ArrowUp, Square } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'

interface WorkAreaProps {
  toolId: string | null
  onOpenSelector: () => void
}

// Dynamically import tool components
const toolComponents: Record<string, any> = {
  'a1z26-translator': dynamic(() =>
    import('@/components/a1z26-translator').then((mod) => mod.A1Z26Translator)
  ),
  'a0z25-cipher': dynamic(() =>
    import('@/components/a0z25-cipher-translator').then((mod) => mod.A0Z25CipherTranslator)
  ),
  'blossom-solver': dynamic(() =>
    import('@/components/blossom-solver').then((mod) => mod.BlossomSolver)
  ),
  'longest-word-solver': dynamic(() =>
    import('@/components/longest-word-solver').then((mod) => mod.LongestWordSolver)
  ),
  'playfair-cipher': dynamic(() =>
    import('@/components/playfair-cipher-solver').then((mod) => mod.PlayfairCipherSolver)
  ),
  'hexahue-cipher': dynamic(() =>
    import('@/components/hexahue-cipher-solver').then((mod) => mod.HexahueCipherSolver)
  ),
  'atbash-cipher': dynamic(() =>
    import('@/components/atbash-cipher-solver').then((mod) => mod.AtbashCipherSolver)
  ),
  'tapcode-translator': dynamic(() =>
    import('@/components/tapcode-translator').then((mod) => mod.TapcodeTranslator)
  ),
}

export function WorkArea({ toolId, onOpenSelector }: WorkAreaProps) {
  const ToolComponent = toolId ? toolComponents[toolId] : null

  return (
    <div className="flex flex-col h-full bg-secondary/50">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-4 border-b border-border bg-secondary">
        <button
          onClick={onOpenSelector}
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Select tool"
        >
          <Plus className="w-5 h-5" />
        </button>

        <button
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Undo"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Redo"
        >
          <Share2 className="w-5 h-5" />
        </button>

        <button
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Clear"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <button
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Save"
        >
          <Square className="w-5 h-5" />
        </button>
      </div>

      {/* Work Area */}
      <div className="flex-1 overflow-auto p-4">
        {ToolComponent ? (
          <ToolComponent />
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <Plus className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Press <span className="font-semibold">+</span> to select a tool
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
