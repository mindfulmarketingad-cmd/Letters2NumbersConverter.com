import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AudioSpectrogram } from "@/components/audio-spectrogram"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Spectrogram Decoder - Audio Frequency Analyzer",
  description: "Free online spectrogram decoder to analyze audio frequencies. Upload WAV, FLAC, OGG, MP3, or M4A files to visualize spectrograms. Detect hidden messages in audio steganography. All processing done locally in your browser.",
  keywords: ["spectrogram decoder", "audio spectrogram analyzer", "spectrogram visualizer", "frequency analysis", "steganography", "audio steganography", "hidden audio messages", "WAV analyzer", "MP3 spectrogram"],
  openGraph: {
    title: "Spectrogram Decoder - Audio Frequency Analyzer",
    description: "Free online spectrogram decoder. Upload audio files to visualize frequencies and detect hidden messages.",
    type: "website",
  },
}

export default function SpectrogramDecoderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-foreground transition-colors">Tools</Link>
            <span>/</span>
            <span className="text-foreground">Spectrogram Decoder</span>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Audio Analysis Tool
            </div>
            <h1 id="spectrogram-decoder" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              Spectrogram Decoder
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Decode audio frequencies with our free spectrogram decoder. Upload WAV, FLAC, OGG, MP3, or M4A files to visualize frequency content over time. Perfect for audio analysis, music production, and detecting hidden messages in audio steganography.
            </p>
          </div>

          {/* Tool */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 mb-12">
            <AudioSpectrogram />
          </div>

          {/* Who Is This For Section */}
          <div id="who-is-this-for" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Who Is This Tool For?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This spectrogram decoder is designed for anyone who needs to visualize and analyze audio content:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>CTF (Capture The Flag) competitors looking for hidden messages in audio</li>
              <li>Audio engineers and music producers analyzing frequency content</li>
              <li>Forensic analysts examining audio files for hidden data</li>
              <li>Researchers studying audio steganography techniques</li>
              <li>Hobbyists interested in audio visualization and analysis</li>
              <li>Puzzle solvers working on audio-based challenges</li>
            </ul>
          </div>

          {/* How It Works Section */}
          <div id="how-it-works" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">How Does the Spectrogram Decoder Work?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A spectrogram is a visual representation of the spectrum of frequencies in a sound as they vary with time. The spectrogram decoder uses Fast Fourier Transform (FFT) to convert the audio signal from the time domain to the frequency domain.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground">1. Upload Your Audio</h3>
                <p>Select or drag and drop an audio file. Supported formats include WAV, FLAC, OGG, MP3, and M4A.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">2. Configure Settings</h3>
                <p>Adjust frequency range, scale (linear or logarithmic), window size, and zoom level to focus on specific frequency bands.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">3. Generate Spectrogram</h3>
                <p>Click &quot;Update spectrogram&quot; to process the audio and generate the visualization. Brighter colors indicate higher intensity at that frequency.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">4. Download Results</h3>
                <p>Save the spectrogram image for further analysis or documentation.</p>
              </div>
            </div>
          </div>

          {/* Audio Steganography Section */}
          <div id="audio-steganography" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Audio Steganography Detection</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Spectrograms are commonly used to detect hidden messages embedded in audio files. In CTF challenges and real-world scenarios, data can be hidden in audio using various techniques that a spectrogram decoder can help reveal:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Visual patterns:</strong> Images or text encoded as frequency patterns visible in the spectrogram</li>
              <li><strong>LSB encoding:</strong> Data hidden in the least significant bits of audio samples</li>
              <li><strong>Phase coding:</strong> Information encoded in the phase of frequency components</li>
              <li><strong>Spread spectrum:</strong> Data spread across multiple frequencies</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              When analyzing audio for hidden content with the spectrogram decoder, try adjusting the frequency range and using logarithmic scale to reveal patterns that might not be visible with default settings.
            </p>
          </div>

          {/* Tips Section */}
          <div id="tips" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Tips for Better Spectrogram Analysis</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Use larger window sizes (2048-4096) for better frequency resolution</li>
              <li>Use smaller window sizes (256-512) for better time resolution</li>
              <li>Try logarithmic scale for music analysis to better match human hearing</li>
              <li>Adjust frequency range to focus on specific bands (e.g., 0-8000 Hz for voice)</li>
              <li>Increase X axis scaling to zoom in on short audio clips</li>
              <li>For hidden images, look for patterns that stand out from the natural audio</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div id="related-tools" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Related Tools</h2>
            <p className="text-muted-foreground mb-4">
              Check out our other encoding and analysis tools:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link 
                href="/" 
                className="block p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground">Letters to Numbers Converter</h3>
                <p className="text-sm text-muted-foreground">Convert text to numbers using A1Z26, ASCII, hex, or binary.</p>
              </Link>
              <Link 
                href="/tools/cipher-identifier" 
                className="block p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground">Cipher Identifier</h3>
                <p className="text-sm text-muted-foreground">Automatically detect cipher types from encrypted text.</p>
              </Link>
              <Link 
                href="/tools/nato-phonetic-alphabet" 
                className="block p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground">NATO Phonetic Alphabet</h3>
                <p className="text-sm text-muted-foreground">Translate text to NATO phonetic alphabet.</p>
              </Link>
              <Link 
                href="/tools/letter-to-phone-number-converter" 
                className="block p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground">Phone Number Converter</h3>
                <p className="text-sm text-muted-foreground">Convert vanity phone numbers to digits.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
