'use client';

import { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';

export default function MBIConverter() {
  const [mbi, setMbi] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [mbiResult, setMbiResult] = useState('');
  const [nameResult, setNameResult] = useState('');
  const [copiedMbi, setCopiedMbi] = useState(false);
  const [copiedName, setCopiedName] = useState(false);

  // Telephone keypad mapping
  const telephoneKeypadMap: { [key: string]: string } = {
    'A': '2', 'B': '2', 'C': '2',
    'D': '3', 'E': '3', 'F': '3',
    'G': '4', 'H': '4', 'I': '4',
    'J': '5', 'K': '5', 'L': '5',
    'M': '6', 'N': '6', 'O': '6',
    'P': '7', 'Q': '7', 'R': '7', 'S': '7',
    'T': '8', 'U': '8', 'V': '8',
    'W': '9', 'X': '9', 'Y': '9', 'Z': '9',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
    '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
  };

  const convertToTelephoneKeypad = (input: string): string => {
    return input
      .toUpperCase()
      .split('')
      .map(char => telephoneKeypadMap[char] || '')
      .join('');
  };

  const handleMbiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setMbi(value);
    if (value.length > 0) {
      const result = convertToTelephoneKeypad(value);
      setMbiResult(result);
    } else {
      setMbiResult('');
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setBeneficiaryName(value);
    if (value.length > 0) {
      const result = convertToTelephoneKeypad(value);
      setNameResult(result);
    } else {
      setNameResult('');
    }
  };

  const copyToClipboard = useCallback((text: string, isMbi: boolean) => {
    navigator.clipboard.writeText(text);
    if (isMbi) {
      setCopiedMbi(true);
      setTimeout(() => setCopiedMbi(false), 2000);
    } else {
      setCopiedName(true);
      setTimeout(() => setCopiedName(false), 2000);
    }
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <div className="space-y-8">
        {/* MBI Converter Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Medicare Beneficiary Identifier (MBI)</h2>
          <p className="text-foreground/80">
            Enter a Medicare number to convert to telephone keypad numbers:
          </p>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              MBI Number:
            </label>
            <input
              type="text"
              value={mbi}
              onChange={handleMbiChange}
              placeholder="Enter Medicare number (e.g., 1ABC-DEFG-HIJK)"
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              maxLength={50}
            />
          </div>

          {mbiResult && (
            <div className="bg-secondary/50 p-4 rounded-lg space-y-3">
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2">TELEPHONE KEYPAD SEQUENCE:</p>
                <div className="text-2xl font-mono font-bold text-foreground tracking-wider">
                  {mbiResult}
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(mbiResult, true)}
                className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
              >
                {copiedMbi ? <Check size={16} /> : <Copy size={16} />}
                {copiedMbi ? 'Copied!' : 'Copy Result'}
              </button>
            </div>
          )}
        </div>

        <div className="border-t border-border" />

        {/* Beneficiary Name Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Beneficiary Name</h2>
          <p className="text-foreground/80">
            Enter the first letter of the patient&apos;s first name and first six letters of their last name:
          </p>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              Enter Name:
            </label>
            <input
              type="text"
              value={beneficiaryName}
              onChange={handleNameChange}
              placeholder="e.g., JSMITH (J from first name, SMITH from last name)"
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              maxLength={50}
            />
          </div>

          {nameResult && (
            <div className="bg-secondary/50 p-4 rounded-lg space-y-3">
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2">TELEPHONE KEYPAD SEQUENCE:</p>
                <div className="text-2xl font-mono font-bold text-foreground tracking-wider">
                  {nameResult}
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(nameResult, false)}
                className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
              >
                {copiedName ? <Check size={16} /> : <Copy size={16} />}
                {copiedName ? 'Copied!' : 'Copy Result'}
              </button>
            </div>
          )}
        </div>

        {/* Reference Section */}
        <div className="bg-background/50 border border-border rounded-lg p-4 mt-8">
          <h3 className="font-semibold text-foreground mb-3">Telephone Keypad Reference</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><span className="font-semibold">2:</span> ABC</div>
            <div><span className="font-semibold">3:</span> DEF</div>
            <div><span className="font-semibold">4:</span> GHI</div>
            <div><span className="font-semibold">5:</span> JKL</div>
            <div><span className="font-semibold">6:</span> MNO</div>
            <div><span className="font-semibold">7:</span> PQRS</div>
            <div><span className="font-semibold">8:</span> TUV</div>
            <div><span className="font-semibold">9:</span> WXYZ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
