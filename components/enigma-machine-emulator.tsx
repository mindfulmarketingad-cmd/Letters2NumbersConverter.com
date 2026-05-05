"use client"

import { useState, useCallback } from "react"
import { Copy, RotateCcw, Info } from "lucide-react"
import { EnigmaMachine, ROTORS, REFLECTORS, NOTCHES } from "@/lib/enigma-machine"

const ROTOR_OPTIONS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"] as const;
const REFLECTOR_OPTIONS = ["B", "C"] as const;

export function EnigmaMachineEmulator() {
  const [model, setModel] = useState<"M3">("M3")
  const [reflector, setReflector] = useState<"B" | "C">("B")
  const [leftRotor, setLeftRotor] = useState<"I" | "II" | "III">("I" as any)
  const [middleRotor, setMiddleRotor] = useState<"II" | "III">("II" as any)
  const [rightRotor, setRightRotor] = useState<"III" | "IV">("III" as any)
  const [leftRing, setLeftRing] = useState(0)
  const [middleRing, setMiddleRing] = useState(0)
  const [rightRing, setRightRing] = useState(0)
  const [leftPosition, setLeftPosition] = useState(0)
  const [middlePosition, setMiddlePosition] = useState(0)
  const [rightPosition, setRightPosition] = useState(0)
  const [plugboard, setPlugboard] = useState("")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [copied, setCopied] = useState(false)

  const parsePlugboard = useCallback((pairs: string) => {
    const plugboardMap: { [key: string]: string } = {};
    const cleanPairs = pairs.toUpperCase().replace(/[^A-Z]/g, "").match(/.{1,2}/g) || [];
    
    let count = 0;
    for (const pair of cleanPairs) {
      if (pair.length === 2 && count < 10) {
        const [a, b] = pair.split("");
        if (a !== b) {
          plugboardMap[a] = b;
          plugboardMap[b] = a;
          count++;
        }
      }
    }
    return plugboardMap;
  }, [])

  const processText = useCallback((text: string, isEncrypt: boolean) => {
    if (!text) return "";

    const plugboardMap = parsePlugboard(plugboard);
    const machine = new EnigmaMachine({
      model,
      reflector,
      leftRotor: leftRotor as any,
      middleRotor: middleRotor as any,
      rightRotor: rightRotor as any,
      leftRing,
      middleRing,
      rightRing,
      leftPosition,
      middlePosition,
      rightPosition,
      plugboard: plugboardMap,
    });

    return machine.process(text.toUpperCase());
  }, [model, reflector, leftRotor, middleRotor, rightRotor, leftRing, middleRing, rightRing, leftPosition, middlePosition, rightPosition, plugboard, parsePlugboard])

  const handleEncrypt = () => {
    const result = processText(input, true);
    setOutput(result);
  }

  const handleDecrypt = () => {
    const result = processText(input, false);
    setOutput(result);
  }

  const handleReset = () => {
    setLeftPosition(0);
    setMiddlePosition(0);
    setRightPosition(0);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Settings Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Model Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Model</label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value as "M3")}
            className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground"
          >
            <option value="M3">3-rotor Enigma (M3)</option>
          </select>
          <p className="text-xs text-muted-foreground">M3 adds a thin rotor next to the reflector and uses rotor turnover and reflector settings.</p>
        </div>

        {/* Reflector */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Reflector</label>
          <select
            value={reflector}
            onChange={(e) => setReflector(e.target.value as "B" | "C")}
            className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground"
          >
            <option value="B">B (M3 default)</option>
            <option value="C">C (M3 default)</option>
          </select>
          <p className="text-xs text-muted-foreground">Use B or C for M3, or the B/C for M4. Reflectors determine how signals are redirected.</p>
        </div>
      </div>

      {/* Rotors Section */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Rotors</h3>
        <p className="text-sm text-muted-foreground">Set the rotors from the reflector side (left) to the keyboard entry side (right).</p>

        <div className="grid gap-4 sm:grid-cols-3">
          {/* Left Rotor */}
          <div className="space-y-3 bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Left rotor</label>
              <span className="text-xs text-muted-foreground">Slow</span>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Rotor</label>
              <select
                value={leftRotor}
                onChange={(e) => setLeftRotor(e.target.value as any)}
                className="w-full px-2 py-1 bg-background border border-border rounded text-sm"
              >
                {ROTOR_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-muted-foreground">Ring</label>
                <select value={leftRing} onChange={(e) => setLeftRing(Number(e.target.value))} className="w-full px-2 py-1 bg-background border border-border rounded text-sm">
                  {Array.from({length: 26}, (_, i) => (
                    <option key={i} value={i}>{String.fromCharCode(65 + i)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Position</label>
                <select value={leftPosition} onChange={(e) => setLeftPosition(Number(e.target.value))} className="w-full px-2 py-1 bg-background border border-border rounded text-sm">
                  {Array.from({length: 26}, (_, i) => (
                    <option key={i} value={i}>{String.fromCharCode(65 + i)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-center text-xs font-mono text-primary bg-background/50 p-2 rounded">
              {String.fromCharCode(65 + leftPosition)}
            </div>
          </div>

          {/* Middle Rotor */}
          <div className="space-y-3 bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Middle rotor</label>
              <span className="text-xs text-muted-foreground">Double-step</span>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Rotor</label>
              <select
                value={middleRotor}
                onChange={(e) => setMiddleRotor(e.target.value as any)}
                className="w-full px-2 py-1 bg-background border border-border rounded text-sm"
              >
                {ROTOR_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-muted-foreground">Ring</label>
                <select value={middleRing} onChange={(e) => setMiddleRing(Number(e.target.value))} className="w-full px-2 py-1 bg-background border border-border rounded text-sm">
                  {Array.from({length: 26}, (_, i) => (
                    <option key={i} value={i}>{String.fromCharCode(65 + i)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Position</label>
                <select value={middlePosition} onChange={(e) => setMiddlePosition(Number(e.target.value))} className="w-full px-2 py-1 bg-background border border-border rounded text-sm">
                  {Array.from({length: 26}, (_, i) => (
                    <option key={i} value={i}>{String.fromCharCode(65 + i)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-center text-xs font-mono text-primary bg-background/50 p-2 rounded">
              {String.fromCharCode(65 + middlePosition)}
            </div>
          </div>

          {/* Right Rotor */}
          <div className="space-y-3 bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Right rotor</label>
              <span className="text-xs text-muted-foreground">Fast</span>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Rotor</label>
              <select
                value={rightRotor}
                onChange={(e) => setRightRotor(e.target.value as any)}
                className="w-full px-2 py-1 bg-background border border-border rounded text-sm"
              >
                {ROTOR_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-muted-foreground">Ring</label>
                <select value={rightRing} onChange={(e) => setRightRing(Number(e.target.value))} className="w-full px-2 py-1 bg-background border border-border rounded text-sm">
                  {Array.from({length: 26}, (_, i) => (
                    <option key={i} value={i}>{String.fromCharCode(65 + i)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Position</label>
                <select value={rightPosition} onChange={(e) => setRightPosition(Number(e.target.value))} className="w-full px-2 py-1 bg-background border border-border rounded text-sm">
                  {Array.from({length: 26}, (_, i) => (
                    <option key={i} value={i}>{String.fromCharCode(65 + i)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-center text-xs font-mono text-primary bg-background/50 p-2 rounded">
              {String.fromCharCode(65 + rightPosition)}
            </div>
          </div>
        </div>
      </div>

      {/* Plugboard */}
      <div className="space-y-2 bg-card border border-border rounded-lg p-4">
        <label className="block text-sm font-medium text-foreground">Plugboard (Steckerbreit)</label>
        <textarea
          value={plugboard}
          onChange={(e) => setPlugboard(e.target.value)}
          placeholder="PAIRS LIKE AB CD EF&#10;Enter up to 10 letter pairs (A-Z). Leave blank for no plugboard."
          maxLength={20}
          className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground text-sm font-mono resize-none h-16"
        />
        <p className="text-xs text-muted-foreground">Enter up to 10 letter pairs (A-Z). Leave blank for no plugboard.</p>
      </div>

      {/* Input/Output */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type text to encrypt or decipher with your Enigma settings..."
            className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground h-32 resize-none"
          />
          <div className="flex gap-2">
            <button
              onClick={handleEncrypt}
              className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Encrypt
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Output</label>
          <textarea
            value={output}
            readOnly
            placeholder="The output will be shown here..."
            className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground h-32 resize-none"
          />
          <button
            onClick={copyToClipboard}
            className="w-full px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
          >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy Output"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="bg-card border border-border rounded-lg p-4 text-sm text-muted-foreground space-y-2">
        <p className="flex gap-2">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>Letters outside A-Z are left unchanged. Encryption and decryption use the same settings.</span>
        </p>
      </div>
    </div>
  );
}
