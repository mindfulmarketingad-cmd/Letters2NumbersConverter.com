'use client'

import { useState } from 'react'
import { Copy, Download } from 'lucide-react'

export function IVRAlphanumericConverter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  // Mapping of letters to telephone keypad numbers
  const letterToKeypad: Record<string, string> = {
    'A': '2', 'B': '2', 'C': '2',
    'D': '3', 'E': '3', 'F': '3',
    'G': '4', 'H': '4', 'I': '4',
    'J': '5', 'K': '5', 'L': '5',
    'M': '6', 'N': '6', 'O': '6',
    'P': '7', 'Q': '7', 'R': '7', 'S': '7',
    'T': '8', 'U': '8', 'V': '8',
    'W': '9', 'X': '9', 'Y': '9', 'Z': '9',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
    '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
  }

  const handleConvert = () => {
    if (!input.trim()) {
      setOutput('')
      return
    }

    const converted = input
      .toUpperCase()
      .split('')
      .map(char => {
        // If it's a letter or number, convert it
        if (letterToKeypad[char]) {
          return letterToKeypad[char]
        }
        // If it's a space or dash, keep it
        if (char === ' ' || char === '-') {
          return char
        }
        // Otherwise, skip it
        return ''
      })
      .join('')

    setOutput(converted)
  }

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    if (!output) return
    
    const element = document.createElement('a')
    const file = new Blob([`IVR Key Sequence: ${output}\n\nOriginal Input: ${input}`], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'ivr-key-sequence.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConvert()
    }
  }

  return (
    <div className="w-full space-y-8">
      {/* Introduction */}
      <div className="space-y-4">
        <p className="text-base text-muted-foreground leading-relaxed">
          With this easy tool, you can convert your patient&apos;s Medicare Beneficiary ID number (MBI), Provider Transaction Access Number (PTAN), or Document Control Number (DCN) into the telephone key pad button sequence required by the IVR as an alternative to speaking. The sequence should be entered into the IVR <strong>exactly</strong> as it appears in the box below.
        </p>
      </div>

      {/* Using the tool section */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Using the tool:</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="font-semibold text-foreground flex-shrink-0">•</span>
            <span>Type the alphanumeric PTAN, DCN, or patient&apos;s Medicare Beneficiary ID number</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground flex-shrink-0">•</span>
            <span>Press the convert button</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground flex-shrink-0">•</span>
            <span>The sequence that is required by the IVR will appear in the box</span>
          </li>
        </ul>
      </div>

      {/* Input Section */}
      <div className="space-y-3">
        <label className="text-base font-semibold">
          Alphanumeric (PTAN, DCN, or patient&apos;s Medicare Beneficiary ID number):
        </label>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your text here..."
          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono"
        />
      </div>

      {/* Output Section */}
      <div className="space-y-3">
        <label className="text-base font-semibold">
          Enter this key sequence into the IVR when prompted:
        </label>
        <div className="w-full px-4 py-3 border border-border rounded-lg bg-card min-h-12 flex items-center font-mono text-lg tracking-widest font-semibold text-primary">
          {output || <span className="text-muted-foreground text-sm font-normal tracking-normal">Key sequence will appear here...</span>}
        </div>
        
        {/* Output Actions */}
        {output && (
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary rounded-lg transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        )}
      </div>

      {/* Convert Button */}
      <div className="flex gap-3">
        <button
          onClick={handleConvert}
          disabled={!input.trim()}
          className="px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded transition-colors"
        >
          Convert
        </button>
      </div>

      {/* Reference Info */}
      <div className="bg-card border border-border rounded-lg p-4 space-y-3">
        <h4 className="font-semibold">Telephone Keypad Reference:</h4>
        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div>2: ABC</div>
          <div>3: DEF</div>
          <div>4: GHI</div>
          <div>5: JKL</div>
          <div>6: MNO</div>
          <div>7: PQRS</div>
          <div>8: TUV</div>
          <div>9: WXYZ</div>
        </div>
      </div>

      {/* Info Note */}
      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          For more detailed instructions on how to utilize the IVR and the options offered, please see the Self-Service Tools area.
        </p>
      </div>
    </div>
  )
}
