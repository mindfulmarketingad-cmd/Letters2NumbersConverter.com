'use client';

import { useState, useCallback } from 'react';
import { Copy, Check, AlertCircle } from 'lucide-react';

export default function MedicareIdConverter() {
  const [medicareId, setMedicareId] = useState('');
  const [idInfo, setIdInfo] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  // Medicare number validation and parsing
  const validateAndParseId = (input: string): any => {
    const cleanId = input.toUpperCase().replace(/[-\s]/g, '');
    const messages: string[] = [];

    // Check if it's an old HIC number (12 digits: SSN-prefix-suffix)
    if (/^\d{12}$/.test(cleanId)) {
      const ssn = cleanId.substring(0, 9);
      const prefix = cleanId.substring(9, 10);
      const suffix = cleanId.substring(10, 12);
      
      return {
        type: 'HIC (Old Format)',
        format: 'HIC Number (12 digits)',
        ssn: ssn,
        prefix: prefix,
        suffix: suffix,
        display: `${ssn}-${prefix}-${suffix}`,
        isValid: true,
        description: 'This is a legacy Medicare HIC number (Health Insurance Claim number) used before 2015.'
      };
    }

    // Check if it's a new MBI number (11 alphanumeric: 1ABC-DEFG-HIJK)
    if (/^[A-Z0-9]{11}$/.test(cleanId)) {
      return {
        type: 'MBI (New Format)',
        format: 'Medicare Beneficiary Identifier (11 characters)',
        mbi: cleanId,
        display: `${cleanId.substring(0, 1)}${cleanId.substring(1, 4)}-${cleanId.substring(4, 8)}-${cleanId.substring(8, 11)}`,
        isValid: true,
        description: 'This is a new Medicare Beneficiary Identifier (MBI) introduced in 2015 for improved privacy.'
      };
    }

    return {
      type: 'Invalid',
      isValid: false,
      description: 'Please enter a valid Medicare ID. Either an 11-character MBI (e.g., 1ABC-DEFG-HIJK) or a 12-digit HIC number (e.g., 123-45-6789-A-BC)'
    };
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMedicareId(value);
    
    if (value.trim().length > 0) {
      const result = validateAndParseId(value);
      setIdInfo(result);
      if (!result.isValid) {
        setValidationMessage(result.description);
      } else {
        setValidationMessage('');
      }
    } else {
      setIdInfo(null);
      setValidationMessage('');
    }
  };

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <div className="space-y-8">
        {/* Medicare ID Input Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Medicare ID Converter</h2>
          <p className="text-foreground/80">
            Enter a Medicare ID to identify and validate the format (HIC or MBI):
          </p>
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              Medicare ID Number:
            </label>
            <input
              type="text"
              value={medicareId}
              onChange={handleIdChange}
              placeholder="Enter HIC (12 digits) or MBI (11 characters)"
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              maxLength={50}
            />
            <p className="text-xs text-muted-foreground">
              Format: HIC (123-45-6789-A-BC) or MBI (1ABC-DEFG-HIJK)
            </p>
          </div>

          {/* Validation Message */}
          {validationMessage && (
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <p className="text-sm text-destructive">{validationMessage}</p>
            </div>
          )}

          {/* ID Information Display */}
          {idInfo && idInfo.isValid && (
            <div className="bg-secondary/50 p-4 rounded-lg space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground">ID TYPE:</p>
                <p className="text-lg font-bold text-foreground">{idInfo.type}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground">FORMAT:</p>
                <p className="text-foreground">{idInfo.format}</p>
              </div>

              {idInfo.type === 'HIC (Old Format)' && (
                <>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground">SOCIAL SECURITY NUMBER:</p>
                    <p className="text-foreground font-mono">{idInfo.ssn}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground">PREFIX:</p>
                    <p className="text-foreground font-mono">{idInfo.prefix}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground">SUFFIX:</p>
                    <p className="text-foreground font-mono">{idInfo.suffix}</p>
                  </div>
                </>
              )}

              {idInfo.type === 'MBI (New Format)' && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground">BENEFICIARY IDENTIFIER:</p>
                  <p className="text-foreground font-mono">{idInfo.mbi}</p>
                </div>
              )}

              <div className="bg-background p-3 rounded border border-border">
                <p className="text-foreground">{idInfo.description}</p>
              </div>

              <button
                onClick={() => copyToClipboard(idInfo.display)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy ID
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Reference Information */}
        <div className="bg-muted/50 p-6 rounded-lg space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Medicare ID Reference Guide</h3>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-sm text-foreground mb-1">HIC Number (Old Format)</p>
              <p className="text-sm text-foreground/80">12 digits: Social Security Number (9 digits) + Prefix (1 digit) + Suffix (2 digits). Used before 2015.</p>
            </div>
            
            <div>
              <p className="font-semibold text-sm text-foreground mb-1">MBI Number (New Format)</p>
              <p className="text-sm text-foreground/80">11 characters: Mix of letters and numbers. Introduced in 2015 for better privacy protection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
