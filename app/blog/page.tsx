import Link from "next/link"
import type { Metadata } from "next"
import { BlogSearchContainer } from "@/components/blog-search-container"

export const metadata: Metadata = {
  title: "Blog | Letters to Numbers Converter Tool",
  description: "Explore our collection of articles about letter-to-number conversion, encoding systems, ciphers, decoding guides, puzzles, and cryptography.",
  keywords: ["letters to numbers blog", "letter number conversion articles", "A1Z26 guides", "cryptography tutorials", "cipher decoder guides", "puzzle solving tips"],
}

const blogPosts = [
  // A1Z26 & Core Ciphers
  { slug: "a0z25-cipher", title: "A0Z25 Cipher", description: "Complete guide to the A0Z25 cipher — a zero-indexed letter-to-number encoding system where A=0 and Z=25, used in programming, cryptography, and puzzle solving.", category: "Ciphers & Codes" },
  { slug: "a1z26-cipher-decoder-guide", title: "A1Z26 Cipher Decoder Guide", description: "Comprehensive guide to decoding the A1Z26 cipher: A=1 through Z=26. Includes step-by-step examples and common use cases.", category: "Ciphers & Codes" },
  { slug: "a1z26-cipher-examples", title: "A1Z26 Cipher Examples", description: "Real-world examples of A1Z26 cipher encoding and decoding with worked solutions.", category: "Ciphers & Codes" },
  { slug: "a1z26-cipher-for-escape-rooms", title: "A1Z26 Cipher for Escape Rooms", description: "How to use the A1Z26 cipher in escape room puzzles and number-lock challenges.", category: "Puzzles & Games" },
  { slug: "a1z26-conversion-chart", title: "A1Z26 Conversion Chart", description: "Printable A1Z26 conversion chart showing the full A=1 to Z=26 alphabet-number mapping.", category: "Ciphers & Codes" },
  { slug: "a1z26-translator", title: "A1Z26 Translator", description: "Use our free A1Z26 translator to convert letters to numbers and numbers to letters. The A1Z26 cipher assigns A=1, B=2 through Z=26.", category: "Ciphers & Codes" },
  { slug: "abc-to-number-code", title: "ABC to Number Code: Simple Guide for Everyone", description: "Learn the ABC to number code system for converting alphabet letters to numbers. Perfect for kids, educators, and puzzle enthusiasts.", category: "Education" },
  { slug: "alpha-bravo-charlie-code-list", title: "Alpha Bravo Charlie Code List", description: "Complete NATO phonetic alphabet list from Alpha to Zulu. Learn the standard military and aviation spelling alphabet.", category: "Ciphers & Codes" },
  { slug: "alphabet-to-numbers-converter", title: "Alphabet to Numbers Converter", description: "Free alphabet to numbers converter tool. Convert any letter A-Z to its numerical position 1-26 instantly.", category: "Ciphers & Codes" },
  { slug: "alphanumeric-code-translator", title: "Alphanumeric Code Translator", description: "Translate alphanumeric codes between letters and numbers across multiple encoding systems.", category: "Ciphers & Codes" },
  { slug: "alphanumeric-converter", title: "Alphanumeric Converter", description: "Free alphanumeric converter tool to transform text into numbers, ASCII codes, hex, and binary. Convert between letters and numeric representations.", category: "Ciphers & Codes" },

  // Best / Reviews
  { slug: "best-cipher-locks", title: "Best Cipher Locks — Reviews & Buying Guide", description: "Discover the top cipher locks on Amazon. Read detailed reviews, compare features, and find the perfect combination padlock for your needs.", category: "Tools & Reviews" },
  { slug: "best-decoder", title: "Best Decoder Tools", description: "A roundup of the best online decoder tools for ciphers, encoding formats, and cryptographic puzzles.", category: "Tools & Reviews" },
  { slug: "best-decoder-online", title: "Best Decoder Online", description: "Find the best online decoder tools for Base64, hex, URL encoding, Morse code, and cipher decryption.", category: "Tools & Reviews" },
  { slug: "best-decoder-web-app", title: "Best Decoder Web App", description: "Comparison of the top decoder web apps with features, speed, and supported encoding formats.", category: "Tools & Reviews" },
  { slug: "best-letter-number-ciphers", title: "Best Letter Number Ciphers for Beginners and Experts", description: "Discover the best letter number ciphers from simple A1Z26 to complex ASCII encoding. Learn which cipher is right for your needs.", category: "Ciphers & Codes" },

  // Comparisons
  { slug: "boxentriq-vs-letters2numbersconverter", title: "Boxentriq vs Letters2NumbersConverter", description: "Side-by-side comparison of Boxentriq and Letters2NumbersConverter for cipher solving and decoding tools.", category: "Comparisons" },
  { slug: "cryptii-vs-letters2numbersconverter", title: "Cryptii vs Letters2NumbersConverter", description: "Compare Cryptii and Letters2NumbersConverter: features, encoding support, and ease of use.", category: "Comparisons" },

  // Caesar Cipher series
  { slug: "caesar-cipher-examples", title: "Caesar Cipher Examples", description: "Worked examples of the Caesar cipher with different shift values. Encode and decode messages step by step.", category: "Ciphers & Codes" },
  { slug: "caesar-cipher-history", title: "Caesar Cipher History", description: "The history of the Caesar cipher from ancient Rome to modern cryptography education.", category: "Cryptography" },
  { slug: "caesar-cipher-shift-13", title: "Caesar Cipher Shift 13 (ROT13)", description: "Explains why shift-13 is special: encoding and decoding with the same key. The basis of ROT13.", category: "Ciphers & Codes" },
  { slug: "how-to-crack-caesar-cipher", title: "How to Crack the Caesar Cipher", description: "Step-by-step guide to cracking Caesar cipher encrypted messages using frequency analysis and brute force.", category: "Cryptography" },

  // ROT13 series
  { slug: "rot13-cipher-explained", title: "ROT13 Cipher Explained", description: "Everything about ROT13: how it works, why it's self-inverting, and common uses online.", category: "Ciphers & Codes" },
  { slug: "rot13-python", title: "ROT13 in Python", description: "How to implement ROT13 encoding and decoding in Python with code examples.", category: "Education" },
  { slug: "rot13-vs-caesar-cipher", title: "ROT13 vs Caesar Cipher", description: "Comparing ROT13 and Caesar cipher: similarities, differences, and when to use each.", category: "Cryptography" },
  { slug: "rot13-reddit-decoder", title: "ROT13 Reddit Decoder", description: "How Reddit uses ROT13 for spoiler tags and how to decode them instantly.", category: "Ciphers & Codes" },

  // Vigenère & Pigpen
  { slug: "vigenere-cipher-decoder", title: "Vigenère Cipher Decoder", description: "How to decode the Vigenère cipher with a key: includes the full Vigenère square and step-by-step decryption.", category: "Cryptography" },
  { slug: "pigpen-cipher", title: "Pigpen Cipher", description: "Complete guide to the Pigpen (Masonic) cipher: how to encode and decode using the grid symbol system.", category: "Ciphers & Codes" },
  { slug: "skip-cipher", title: "Skip Cipher", description: "Skip Cipher (Jump Cipher) is a transposition cipher that reorders message letters by extracting every nth character.", category: "Cryptography" },

  // Decoding how-to guides
  { slug: "how-to-decode-qr-code-algorithm", title: "How To Decode QR Code Algorithm", description: "How the QR code decoding algorithm works: finder patterns, format information, data modules, Reed-Solomon error correction, and character encoding modes.", category: "Decoding Guides" },
  { slug: "how-decode-jwt-token", title: "How Decode JWT Token", description: "How to decode a JWT token step by step: split on dots, Base64url-decode the header and payload, parse JSON claims. Includes security warnings.", category: "Decoding Guides" },
  { slug: "how-do-you-decode-numbers-to-letters", title: "How Do You Decode Numbers To Letters", description: "How to convert numbers back to letters using A1Z26 (1=A), A0Z25 (0=A), ASCII decimal values, and phone keypad encoding.", category: "Decoding Guides" },
  { slug: "how-to-decode-a-text-message", title: "How To Decode A Text Message", description: "How to decode a text message: identify the encoding (Base64, hex, URL, Morse, A1Z26) and decode it step by step.", category: "Decoding Guides" },
  { slug: "how-to-decode-encoded-text", title: "How To Decode Encoded Text", description: "How to decode encoded text across all major formats: Base64, hex, URL encoding, Morse code, ROT13, A1Z26, and binary.", category: "Decoding Guides" },
  { slug: "how-to-decode-hex-file", title: "How To Decode Hex File", description: "How to decode a hex file: understand the hexadecimal number system, convert byte pairs to ASCII, and use JavaScript and Python to decode hex strings.", category: "Decoding Guides" },

  // Encoding how-to guides
  { slug: "how-to-encode-a-url", title: "How To Encode A URL", description: "How to encode a URL using percent-encoding (RFC 3986): which characters must be encoded, encodeURIComponent vs encodeURI in JavaScript, and Python/PHP equivalents.", category: "Decoding Guides" },
  { slug: "how-to-encode-html-code", title: "How To Encode HTML Code", description: "How to encode HTML code: convert & < > \" ' to safe HTML entities, prevent XSS attacks, and use htmlspecialchars in PHP and html.escape in Python.", category: "Decoding Guides" },
  { slug: "how-to-encode-php-code", title: "How To Encode PHP Code", description: "PHP encoding functions explained: urlencode, rawurlencode, htmlspecialchars, base64_encode, json_encode, and password_hash — with a decision table.", category: "Decoding Guides" },
  { slug: "how-to-url-encode", title: "How To URL Encode", description: "How to URL encode a string: percent-encoding explained with a character table, plus code examples in JavaScript (encodeURIComponent), Python (urllib.parse.quote), and PHP (rawurlencode).", category: "Decoding Guides" },
  { slug: "how-to-use-unicode-in-html", title: "How To Use Unicode in HTML", description: "How to use Unicode in HTML: set UTF-8 charset, insert characters as direct text, named entities (&amp;euro;), or numeric references (&#x20AC;). Includes 15-row character reference table.", category: "Decoding Guides" },
  { slug: "how-to-encode-python-code", title: "How To Encode Python Code", description: "Python encoding functions explained: base64, urllib.parse, html.escape, json.dumps, and str.encode — with real code examples and a use-case decision table.", category: "Decoding Guides" },

  // Image & Media
  { slug: "how-to-change-photo-to-high-resolution", title: "How to Change a Photo to High Resolution", description: "Methods to upscale and improve photo resolution using AI tools and image editors.", category: "Image & Media" },
  { slug: "how-to-convert-image-to-text-in-excel", title: "How to Convert Image to Text in Excel", description: "Step-by-step guide to extracting text from images and importing it into Excel using OCR tools.", category: "Image & Media" },
  { slug: "how-to-convert-image-to-word-text", title: "How to Convert Image to Word Text", description: "How to convert images with text into editable Word documents using OCR software.", category: "Image & Media" },
  { slug: "how-to-make-an-image-grayscale", title: "How to Make an Image Grayscale", description: "Quick methods to convert color images to grayscale using free online tools and image editors.", category: "Image & Media" },

  // Education & Data Science
  { slug: "educational-uses-letter-number-conversion", title: "Educational Uses of Letter-Number Conversion", description: "Explore how letter-to-number conversion is used in education for teaching mathematics, coding concepts, and critical thinking.", category: "Education" },
  { slug: "letter-number-conversion-data-science", title: "Letter-Number Conversion in Data Science", description: "Discover how letter-to-number conversion techniques are used in data science for feature engineering and machine learning.", category: "Education" },
  { slug: "history-letter-number-systems", title: "History of Letter-Number Systems", description: "From ancient Greek isopsephy to modern ASCII: the history of letter-to-number encoding systems across cultures.", category: "Education" },

  // Cryptography
  { slug: "letter-number-converters-cryptography", title: "Letter to Number Converters in Cryptography", description: "Learn how letter-to-number conversion forms the foundation of cryptography, from ancient ciphers to modern encryption.", category: "Cryptography" },
  { slug: "what-is-url-encoding", title: "What Is URL Encoding?", description: "Understand percent-encoding (URL encoding): why it exists, how %XX sequences work, and how to encode and decode URLs.", category: "Cryptography" },
  { slug: "understanding-ascii-character-encoding", title: "Understanding ASCII and Character Encoding", description: "Learn about ASCII character encoding, how computers convert letters to numbers, and the history of character encoding systems.", category: "Cryptography" },

  // Puzzles & Games
  { slug: "puzzle-solving-letter-number-conversion", title: "Puzzle Solving with Letter-Number Conversion", description: "Master puzzle solving techniques using letter-to-number conversion for geocaching, escape rooms, and CTF challenges.", category: "Puzzles & Games" },
  { slug: "how-to-solve-letter-number-puzzles", title: "How to Solve Letter Number Puzzles", description: "Expert tips and strategies for solving letter-number puzzles in geocaching, escape rooms, and competitions.", category: "Puzzles & Games" },
  { slug: "letter-number-substitution-puzzles", title: "Letter Number Substitution Puzzles", description: "Master letter number substitution puzzles with our complete guide covering different cipher types and solving techniques.", category: "Puzzles & Games" },
  { slug: "letter-number-codes-geocaching", title: "Letter Number Codes in Geocaching", description: "Master letter number codes for geocaching puzzle caches. Learn how to decode A1Z26 ciphers and convert coordinates.", category: "Puzzles & Games" },
  { slug: "escape-room-letter-codes", title: "Escape Room Letter Codes", description: "Learn how to solve escape room letter codes and number lock puzzles with expert strategies for decoding under pressure.", category: "Puzzles & Games" },
  { slug: "build-your-own-escape-room", title: "Build Your Own Escape Room", description: "Create cipher puzzles, design challenges, and share with friends using our free escape room builder.", category: "Puzzles & Games" },
  { slug: "number-word-games-activities", title: "Number Word Games and Activities", description: "Discover engaging number word games and activities using letter-to-number codes. Perfect for families and classrooms.", category: "Puzzles & Games" },
  { slug: "secret-codes-with-letters-numbers", title: "How to Create Secret Codes with Letters and Numbers", description: "Learn how to create your own secret codes using letters and numbers. Perfect for kids and anyone who wants to send encrypted messages.", category: "Puzzles & Games" },

  // Converters / Translators
  { slug: "letter-to-numbers-code", title: "Letter to Numbers Code: Complete Guide to A1Z26", description: "Learn how the letter to numbers code works. Convert A=1, B=2 through Z=26 with our complete guide to the A1Z26 cipher system.", category: "Ciphers & Codes" },
  { slug: "letters-to-numbers-translator", title: "Letters to Numbers Translator", description: "Use our free letters to numbers translator to instantly convert any text to numerical values.", category: "Ciphers & Codes" },
  { slug: "how-to-manually-check-letter-number-conversion", title: "How to Manually Check Letter to Number Conversion", description: "Step-by-step methods for manually converting letters to numbers using A1Z26, ASCII, hexadecimal, and binary encoding.", category: "Decoding Guides" },

  // Misc
  { slug: "military-abc-codes-list", title: "Military ABC Codes List", description: "Complete list of military alphabet codes (Alpha, Bravo, Charlie...) with pronunciations and historical context.", category: "Ciphers & Codes" },
  { slug: "nato-alphanumeric-alphabet", title: "NATO Alphanumeric Alphabet", description: "The full NATO phonetic alphabet: Alpha through Zulu, used by military, aviation, and emergency services worldwide.", category: "Ciphers & Codes" },
  { slug: "find-hackathon-team-members", title: "How to Find Hackathon Team Members", description: "Strategies for assembling a strong hackathon team: where to look, what skills to recruit, and how to collaborate effectively.", category: "Education" },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Letters to Numbers Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {blogPosts.length}+ guides, tutorials, and articles on ciphers, decoding, cryptography, and puzzles.
              </p>
            </header>

            <BlogSearchContainer posts={blogPosts} />

            <div className="mt-16 p-8 bg-muted/30 rounded-xl text-center">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Ready to Convert Letters to Numbers?
              </h2>
              <p className="text-muted-foreground mb-6">
                Try our free converter tool for instant letter-to-number and number-to-letter conversions.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open Converter Tool
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
