export const getToolData = (toolId: string) => {
  const toolDataMap: Record<string, any> = {
    'a0z25-cipher-translator': {
      howItWorks: 'Enter your text and select A0Z25 encoding to convert each letter to its corresponding number (A=0, B=1... Z=25). The tool processes instantly, displaying both the encoded result and a character mapping for reference.',
      features: ['A0Z25 alphabet mapping (A=0 to Z=25)', 'Real-time encoding and decoding', 'Character-by-character breakdown', 'Copy to clipboard functionality', 'Supports uppercase and lowercase', 'Clear visual mapping display'],
      whoIsItFor: [
        { title: 'Computer Science Students', description: 'Learning number systems and character encoding fundamentals' },
        { title: 'Cryptography Learners', description: 'Understanding alternative cipher systems beyond A1Z26' },
        { title: 'Developers', description: 'Testing and debugging encoding implementations' }
      ]
    },
    'a1z26-translator': {
      howItWorks: 'Input your text or numbers and the converter instantly transforms letters to numbers (A=1, B=2... Z=26) and vice versa. The tool displays both the encoded output and a complete mapping of all conversions.',
      features: ['A1Z26 alphabet mapping (A=1 to Z=26)', 'Bidirectional conversion', 'Real-time processing', 'Character mapping display', 'Batch processing support', 'One-click copy to clipboard'],
      whoIsItFor: [
        { title: 'Cipher Enthusiasts', description: 'Encoding and decoding messages with classic A1Z26 cipher' },
        { title: 'Game Players', description: 'Solving word games, crosswords, and puzzle challenges' },
        { title: 'Students', description: 'Learning about character encoding and numerical representation' }
      ]
    },
    'anagram-solver': {
      howItWorks: 'Input a set of letters and the solver instantly finds all possible anagrams using those letters. Filter by word length, exclude specific letters, and customize your search. Results are ranked by word frequency.',
      features: ['Instant anagram generation from any letters', 'Filter by word length or pattern', 'Exclude specific letters from results', 'Word frequency ranking', 'Support for partial anagrams', 'Copy entire word list to clipboard'],
      whoIsItFor: [
        { title: 'Word Game Players', description: 'Winning at Scrabble, Words with Friends, and similar games' },
        { title: 'Crossword Enthusiasts', description: 'Solving challenging crossword puzzles quickly' },
        { title: 'Writers & Wordsmiths', description: 'Finding perfect word combinations for creative projects' }
      ]
    },
    'atbash-cipher-decoder': {
      howItWorks: 'The Atbash cipher reverses the alphabet (A↔Z, B↔Y, etc.). Enter any text and the tool instantly applies the mirror substitution, transforming encrypted messages. It works both ways since Atbash is symmetrical.',
      features: ['Mirror alphabet substitution (A↔Z, B↔Y)', 'Symmetrical encoding/decoding', 'Case-sensitive conversion', 'Real-time processing', 'Character-by-character mapping', 'Preserve numbers and special characters'],
      whoIsItFor: [
        { title: 'Cryptography Students', description: 'Learning simple substitution cipher techniques' },
        { title: 'Ancient Text Enthusiasts', description: 'Understanding historical cipher methods' },
        { title: 'Puzzle Solvers', description: 'Decoding Atbash-encrypted messages and riddles' }
      ]
    },
    'audio-spectrogram': {
      howItWorks: 'Upload an audio file or record directly in your browser. The tool analyzes the frequency content and creates a visual spectrogram showing how frequencies change over time. Different colors represent different intensity levels.',
      features: ['Real-time audio spectrogram visualization', 'Upload or record audio directly', 'Adjustable frequency scale and resolution', 'Zoom and pan controls', 'Color intensity mapping', 'Export spectrogram as image'],
      whoIsItFor: [
        { title: 'Audio Engineers', description: 'Analyzing frequency characteristics and audio quality' },
        { title: 'Music Producers', description: 'Identifying frequencies for mixing and mastering' },
        { title: 'Researchers', description: 'Studying sound patterns and acoustic properties' }
      ]
    },
    'babylonian-numeral-converter': {
      howItWorks: 'Enter any decimal number and convert it to ancient Babylonian base-60 (sexagesimal) notation. The tool shows the visual cuneiform representation and breaks down the calculation step-by-step.',
      features: ['Decimal to base-60 conversion', 'Visual cuneiform symbol display', 'Step-by-step calculation breakdown', 'Historical context and explanations', 'Support for large numbers', 'Reverse conversion (base-60 to decimal)'],
      whoIsItFor: [
        { title: 'History Students', description: 'Learning about ancient Mesopotamian mathematics' },
        { title: 'Archaeology Enthusiasts', description: 'Understanding historical numeral systems' },
        { title: 'Mathematicians', description: 'Exploring alternative number bases and systems' }
      ]
    },
    'blossom-solver': {
      howItWorks: 'Our blossom solver finds all valid blossom answers from your 7 letters (one center letter and six petal letters). Enter your puzzle letters and the blossom puzzle solver instantly generates all possible words, organized by length and score. The solver identifies the target pangram - a word using all seven letters for maximum points. Perfect for tackling daily Merriam-Webster Blossom challenges and mastering blossom answers.',
      features: [
        'Find all blossom answers from any 7-letter combination',
        'Instant blossom puzzle solving with comprehensive word lists',
        'Identify the target pangram in your blossom puzzle',
        'Filter blossom answers by word length',
        'Highlight center letter requirement for blossom solver',
        'Score calculation for each blossom answer',
        'Difficulty level ranking for blossom puzzle words',
        'Dictionary-validated blossom answers',
        'Common word vs. all words toggle for blossom puzzles',
        'Word definitions to learn from blossom puzzle solutions'
      ],
      whoIsItFor: [
        { 
          title: 'Daily Puzzle Players', 
          description: 'Solve your Merriam-Webster Blossom daily challenges using our blossom solver to find all valid blossom answers and reach the pangram goal.' 
        },
        { 
          title: 'Word Game Enthusiasts', 
          description: 'Use the blossom puzzle solver to maximize your score by discovering every possible word from your blossom puzzle letters.' 
        },
        { 
          title: 'Competitive Blossom Players', 
          description: 'Master Merriam-Webster Blossom by using our blossom answers finder to consistently reach perfect scores and identify all blossom puzzle solutions.' 
        },
        { 
          title: 'Word Learners', 
          description: 'Expand your vocabulary through the blossom solver by discovering new words and learning blossom puzzle strategies.' 
        }
      ]
    },
    'book-cipher-decoder': {
      howItWorks: 'The book cipher uses a secret book as the encoding key. Each message character is replaced with a reference (page, line, word number) to that character in the book. Decode by having the same book and following the references.',
      features: ['Book-based cipher encoding/decoding', 'Multiple cipher variation support', 'Reference tracking and validation', 'Common book options (Bible, dictionary)', 'Message preservation', 'Error detection and correction'],
      whoIsItFor: [
        { title: 'Espionage Enthusiasts', description: 'Studying historical covert communication methods' },
        { title: 'Cryptography Students', description: 'Learning complex substitution techniques' },
        { title: 'Mystery Writers', description: 'Creating puzzles for books and games' }
      ]
    },
    'cipher-identifier': {
      howItWorks: 'Paste encrypted text into the tool. It analyzes patterns, letter frequency, and statistical properties to identify the most likely cipher type. Results show confidence levels for each cipher possibility.',
      features: ['Automated cipher type detection', 'Frequency analysis and pattern recognition', 'Confidence scoring', 'Support for 15+ common ciphers', 'Detailed analysis breakdown', 'Suggested decryption methods'],
      whoIsItFor: [
        { title: 'Cryptanalysts', description: 'Identifying unknown cipher types' },
        { title: 'CTF Competitors', description: 'Quickly recognizing cipher types in competitions' },
        { title: 'Security Researchers', description: 'Analyzing encrypted communications' }
      ]
    },
    'cistercian-numerals-converter': {
      howItWorks: 'Enter any decimal number and convert it to the unique Cistercian numeral system used by medieval monks. The tool displays the distinctive geometric symbol and breaks down the positional values.',
      features: ['Decimal to Cistercian numeral conversion', 'Visual symbol generation', 'Historical background and explanations', 'Support for 0-9999 range', 'Symbol meaning breakdown', 'Educational annotations'],
      whoIsItFor: [
        { title: 'History Buffs', description: 'Learning medieval notation systems' },
        { title: 'Numismatics Students', description: 'Understanding ancient numerical methods' },
        { title: 'Design Enthusiasts', description: 'Appreciating unique geometric number representations' }
      ]
    },
    'cryptogram-generator': {
      howItWorks: 'Enter text or choose from famous quotes. Select difficulty level and cipher type. The tool generates a cryptogram puzzle with or without a hint system. Share the puzzle with others.',
      features: ['Create custom cryptograms', 'Multiple cipher types (substitution, Caesar, Atbash)', 'Adjustable difficulty levels', 'Hint system generation', 'Puzzle sharing links', 'Answer key generation'],
      whoIsItFor: [
        { title: 'Puzzle Creators', description: 'Designing cryptograms for publications or websites' },
        { title: 'Teachers', description: 'Creating engaging puzzles for classroom learning' },
        { title: 'Event Organizers', description: 'Adding cryptogram challenges to escape rooms or hunts' }
      ]
    },
    'cryptogram-solver': {
      howItWorks: 'Paste your cryptogram puzzle text. The solver analyzes patterns, frequency analysis, and common words to find the most likely decryption. View partial solutions and refine the decryption with manual adjustments.',
      features: ['Automated cryptogram solving', 'Pattern recognition algorithm', 'Word frequency analysis', 'Manual letter substitution interface', 'Multiple solution suggestions', 'Hint system integration'],
      whoIsItFor: [
        { title: 'Puzzle Enthusiasts', description: 'Solving cryptogram challenges' },
        { title: 'Cryptography Students', description: 'Understanding automated decryption' },
        { title: 'Game Players', description: 'Solving word puzzle games' }
      ]
    },
    'cryptogram-solver-free': {
      howItWorks: 'Enter your cryptogram text line by line. Use the interactive solver interface to try letter substitutions, and see real-time pattern matching. The tool highlights common word patterns to guide solving.',
      features: ['Substitution cipher solving', 'Interactive solving interface', 'Pattern highlighting', 'Word bank suggestions', 'Undo/redo functionality', 'Progress tracking'],
      whoIsItFor: [
        { title: 'Daily Puzzle Solvers', description: 'Tackling newspaper cryptogram puzzles' },
        { title: 'Casual Gamers', description: 'Enjoying brain-teasing word puzzles' },
        { title: 'Students', description: 'Learning cipher-solving strategies' }
      ]
    },
    'decimal-to-hexadecimal-converter-online': {
      howItWorks: 'Enter a decimal number and instantly convert it to hexadecimal, binary, or octal. The tool shows the conversion process, bit breakdown, and value representations in all formats simultaneously.',
      features: ['Convert between decimal, hex, binary, and octal', 'Bit-level breakdown display', 'Color-coded digit grouping', 'Support for large numbers', 'Copy to clipboard', 'Reverse conversion support'],
      whoIsItFor: [
        { title: 'Programmers', description: 'Working with hex values in code and debugging' },
        { title: 'Students', description: 'Learning number systems and bases' },
        { title: 'System Administrators', description: 'Converting memory addresses and values' }
      ]
    },
    'egyptian-numbers-converter': {
      howItWorks: 'Enter any decimal number and convert it to ancient Egyptian hieroglyphic numerals. The tool displays the symbolic representation using authentic Egyptian number glyphs.',
      features: ['Decimal to Egyptian numeral conversion', 'Authentic hieroglyphic symbol display', 'Value breakdown explanation', 'Historical context', 'Symbol reference guide', 'Beautiful visual representation'],
      whoIsItFor: [
        { title: 'Egyptology Enthusiasts', description: 'Learning ancient Egyptian mathematics' },
        { title: 'History Teachers', description: 'Creating engaging lessons on ancient numerals' },
        { title: 'Art Students', description: 'Studying hieroglyphic design and symbolism' }
      ]
    },
    'enigma-machine-emulator': {
      howItWorks: 'Configure your Enigma machine settings (rotor positions, reflector, plugboard). Type a message and watch it encrypt character-by-character. Recipient with same settings can decrypt the message.',
      features: ['Full Enigma machine simulation', 'Configurable rotors and reflectors', 'Plugboard settings', 'Stepping and turnover simulation', 'Message history tracking', 'Educational annotations'],
      whoIsItFor: [
        { title: 'WW2 History Enthusiasts', description: 'Understanding WWII encryption technology' },
        { title: 'Cryptography Students', description: 'Learning rotor-based cipher mechanics' },
        { title: 'Museum Educators', description: 'Interactive historical demonstrations' }
      ]
    },
    'escape-room-builder': {
      howItWorks: 'Create escape room puzzles by setting challenges, defining solutions, and configuring difficulty levels. Preview the full puzzle experience. Generate shareable links for players.',
      features: ['Create custom escape room scenarios', 'Multiple puzzle types (cipher, logic, pattern)', 'Difficulty configuration', 'Time limit settings', 'Hint system creation', 'Progress tracking for players'],
      whoIsItFor: [
        { title: 'Event Creators', description: 'Designing engaging escape room experiences' },
        { title: 'Game Designers', description: 'Prototyping puzzle mechanics' },
        { title: 'Educators', description: 'Creating interactive learning challenges' }
      ]
    },
    'fill-in-the-blanks-equation-solver': {
      howItWorks: 'Enter an equation with blank spaces marked with underscores. The solver finds all valid combinations of digits and operators that satisfy the mathematical equation.',
      features: ['Equation completion solver', 'Multiple solution finding', 'Operator support (+, -, ×, ÷)', 'Digit verification', 'Solution ranking by complexity', 'Step-by-step explanation'],
      whoIsItFor: [
        { title: 'Math Students', description: 'Solving puzzle equations and math challenges' },
        { title: 'Puzzle Creators', description: 'Verifying equation puzzles are solvable' },
        { title: 'Brain Teaser Enthusiasts', description: 'Tackling mathematical logic puzzles' }
      ]
    },
    'hexahue-cipher': {
      howItWorks: 'Encode messages using colors. Each character maps to a specific color hex code. The tool generates a color palette representation of your message that can be decoded by others.',
      features: ['Color-based character encoding', 'Visual palette generation', 'Hex code reference mapping', 'Color blindness considerations', 'Share color palette codes', 'Beautiful visual output'],
      whoIsItFor: [
        { title: 'Visual Artists', description: 'Creating artistic color-coded messages' },
        { title: 'Designers', description: 'Exploring color communication systems' },
        { title: 'Puzzle Enthusiasts', description: 'Solving color-based challenges' }
      ]
    },
    'json-to-java-code-generator': {
      howItWorks: 'Paste your JSON data and the tool generates Java classes with proper field types, getters, setters, and constructors. Choose from multiple generator styles and annotation preferences.',
      features: ['Automatic Java class generation from JSON', 'Type inference for fields', 'Getter/setter generation', 'Constructor creation', 'Annotation support (Lombok, Jackson)', 'Nested object handling'],
      whoIsItFor: [
        { title: 'Java Developers', description: 'Quickly creating model classes from JSON responses' },
        { title: 'Backend Developers', description: 'Automating data binding code generation' },
        { title: 'Students', description: 'Learning JSON-to-object mapping' }
      ]
    },
    'letter-to-phone-number-converter': {
      howItWorks: 'Enter text and convert each letter to its corresponding phone keypad digit (2-9). A=2, B=C=2; D=E=F=3, etc. The tool shows the T9 mapping and generates the digit sequence.',
      features: ['Letters to phone keypad digits', 'T9 mapping reference', 'Multi-tap explanation', 'Text message speed dial codes', 'Reverse number-to-letter conversion', 'Historical phone keypad layout'],
      whoIsItFor: [
        { title: 'Nostalgic Phone Users', description: 'Understanding classic T9 texting' },
        { title: 'Mobile Dev Learners', description: 'Understanding phone input systems' },
        { title: 'Trivia Enthusiasts', description: 'Learning about phone technology history' }
      ]
    },
    'line-ending-converter': {
      howItWorks: 'Upload or paste text with any line ending format (LF, CRLF, CR). The tool detects the current format, then converts to your target format. Download the converted file.',
      features: ['Automatic line ending detection', 'Convert between LF, CRLF, and CR', 'Preview before conversion', 'Batch processing support', 'File upload and download', 'Statistics and conversion info'],
      whoIsItFor: [
        { title: 'Developers', description: 'Fixing line ending issues across platforms' },
        { title: 'DevOps Engineers', description: 'Standardizing config files' },
        { title: 'Cross-platform Users', description: 'Ensuring compatibility across Windows, Mac, Linux' }
      ]
    },
    'longest-word-solver': {
      howItWorks: 'Input available letters and the tool finds the longest possible words using those letters. Shows word length, definitions, and validity. Ranked by length for easy identification.',
      features: ['Find longest words from letters', 'Sort by word length', 'Definition display', 'Multiple solution paths', 'Filter by difficulty', 'Dictionary validation'],
      whoIsItFor: [
        { title: 'Word Game Players', description: 'Maximizing scores in Scrabble and word games' },
        { title: 'English Learners', description: 'Discovering new vocabulary' },
        { title: 'Puzzle Enthusiasts', description: 'Solving word-finding challenges' }
      ]
    },
    'mayan-numeral-converter': {
      howItWorks: 'Enter a decimal number and convert to ancient Mayan base-20 numerals. The tool displays the iconic dot-and-bar representation with visual clarity and historical context.',
      features: ['Decimal to Mayan base-20 conversion', 'Dot-and-bar symbol display', 'Value breakdown by position', 'Historical explanations', 'Support for large numbers', 'Educational annotations'],
      whoIsItFor: [
        { title: 'Archaeology Students', description: 'Learning Mesoamerican number systems' },
        { title: 'History Enthusiasts', description: 'Understanding Mayan civilization math' },
        { title: 'Comparative Numeral System Learners', description: 'Studying different cultural counting methods' }
      ]
    },
    'monoalphabetic-substitution-cipher': {
      howItWorks: 'Create a custom alphabet mapping or use a predefined key. Encrypt messages by substituting each letter according to your mapping. Share the key with recipients for decryption.',
      features: ['Create custom substitution keys', 'Random key generation', 'Encrypt/decrypt functionality', 'Key management and storage', 'Frequency analysis indicators', 'Educational cipher info'],
      whoIsItFor: [
        { title: 'Cryptography Students', description: 'Understanding basic substitution ciphers' },
        { title: 'Secret Message Creators', description: 'Simple encryption for private communications' },
        { title: 'Game Designers', description: 'Adding cipher elements to puzzles' }
      ]
    },
    'nato-phonetic-alphabet': {
      howItWorks: 'Type any text and convert each letter to its NATO phonetic alphabet equivalent (A→Alpha, B→Bravo, etc.). Useful for clear communication over phone or radio.',
      features: ['Letter to NATO phonetic conversion', 'Reverse conversion (phonetic to letter)', 'Phonetic alphabet reference chart', 'Audio pronunciation guides', 'International standard compliance', 'Custom alphabet options'],
      whoIsItFor: [
        { title: 'Military Personnel', description: 'Using NATO phonetic alphabet for radio communication' },
        { title: 'Customer Service Reps', description: 'Confirming information over the phone' },
        { title: 'Aviation Professionals', description: 'Standard communication protocol' }
      ]
    },
    'numbers-to-letters': {
      howItWorks: 'Enter numbers (1-26 or 0-25) and convert back to letters using A1Z26 or A0Z25 cipher. Input can be space, comma, or dash-separated. See both the conversion and character mapping.',
      features: ['Multiple number-to-letter mapping styles', 'Support for various separators', 'Both A1Z26 and A0Z25 modes', 'Batch processing', 'Character mapping display', 'Clear visual representation'],
      whoIsItFor: [
        { title: 'Cipher Solvers', description: 'Decoding numerical messages' },
        { title: 'Students', description: 'Learning reverse cipher operations' },
        { title: 'Puzzle Fans', description: 'Solving number-based riddles' }
      ]
    },
    'password-strength-tester': {
      howItWorks: 'Enter any password and the tester analyzes its strength based on length, character variety (uppercase, lowercase, numbers, symbols), and common patterns. Get detailed suggestions for improvement.',
      features: ['Entropy calculation', 'Strength scoring system', 'Common password detection', 'Pattern vulnerability analysis', 'Real-time strength indicator', 'Security recommendations'],
      whoIsItFor: [
        { title: 'Security Conscious Users', description: 'Creating strong passwords' },
        { title: 'IT Administrators', description: 'Enforcing password policies' },
        { title: 'Students', description: 'Learning about cybersecurity' }
      ]
    },
    'playfair-cipher': {
      howItWorks: 'Set up a Playfair cipher using a keyword. Encrypt digraphs (pairs of letters) by finding them in the key square and applying substitution rules. Decrypt with the same key.',
      features: ['Playfair key setup and management', 'Digraph encryption/decryption', 'Key square visualization', 'Filling rule guidance', 'Double letter handling', 'Historical background'],
      whoIsItFor: [
        { title: 'Cryptography Enthusiasts', description: 'Learning intermediate encryption' },
        { title: 'History Students', description: 'Understanding WWI-era encryption' },
        { title: 'Cipher Researchers', description: 'Studying classic cipher techniques' }
      ]
    },
    'px-vw-converter': {
      howItWorks: 'Enter a pixel value and viewport width to calculate the equivalent viewport unit (vw). Or enter a vw value to calculate pixels. Useful for responsive design calculations.',
      features: ['Bidirectional px ↔ vw conversion', 'Multiple viewport presets', 'Custom viewport calculations', 'Formula explanation', 'Common breakpoint values', 'Copy results instantly'],
      whoIsItFor: [
        { title: 'Web Designers', description: 'Creating responsive layouts' },
        { title: 'Frontend Developers', description: 'Converting between CSS units' },
        { title: 'UI Engineers', description: 'Scaling designs across devices' }
      ]
    },
    'skip-cipher': {
      howItWorks: 'Define a skip pattern (e.g., skip every 3rd letter). Enter your message and the tool encrypts by skipping letters according to your pattern. Recipients with the same pattern can decrypt.',
      features: ['Custom skip pattern definition', 'Encrypt/decrypt functionality', 'Pattern visualization', 'Security strength analysis', 'Multiple pattern examples', 'Educational explanations'],
      whoIsItFor: [
        { title: 'Cipher Enthusiasts', description: 'Exploring lesser-known cipher techniques' },
        { title: 'Educational Designers', description: 'Teaching intermediate cryptography' },
        { title: 'Puzzle Creators', description: 'Adding cipher variety to challenges' }
      ]
    },
    'tapcode-translator': {
      howItWorks: 'Convert text to tap code used by prisoners to communicate through walls. Each letter maps to two-digit coordinates in a 5×5 grid. Tap sequences encode your message.',
      features: ['Text to tap code conversion', '5×5 grid visualization', 'Tap sequence generation', 'Audio tap playback', 'Reverse tap-to-letter conversion', 'Historical context'],
      whoIsItFor: [
        { title: 'History Enthusiasts', description: 'Learning prison communication methods' },
        { title: 'Survivalists', description: 'Communication techniques without technology' },
        { title: 'Puzzle Fans', description: 'Solving tap code riddles' }
      ]
    },
    'yaml-to-ini-converter': {
      howItWorks: 'Paste YAML configuration and the tool converts to INI format (or vice versa). Maintains hierarchy and values. Preview changes before download.',
      features: ['YAML to INI bidirectional conversion', 'Hierarchy preservation', 'Nested structure handling', 'Comment preservation', 'Format validation', 'Download converted file'],
      whoIsItFor: [
        { title: 'DevOps Engineers', description: 'Converting config file formats across different deployment systems' },
        { title: 'System Administrators', description: 'Migrating configuration systems and standardizing config file formats' },
        { title: 'Developers', description: 'Working across different configuration standards in various frameworks and tools' }
      ]
    },
    'word-to-number-translator': {
      howItWorks: 'Enter words or numeric text in the left panel and choose your encoding method to convert words to numbers or numbers back to words. The translator instantly processes the conversion and displays the result with a character-by-character breakdown. Supports multiple encoding systems including A1Z26, A0Z25, ASCII, and more.',
      features: [
        'Convert English words to numerical sequences instantly',
        'Support for multiple encoding methods (A1Z26, A0Z25, ASCII, HEX, BINARY)',
        'Bidirectional conversion - words to numbers and numbers to words',
        'Real-time conversion as you type',
        'Character-by-character breakdown visualization',
        'Copy results to clipboard with one click',
        'Works completely offline - no data sent to servers',
        'Perfect for cryptography, puzzles, and data encoding'
      ],
      whoIsItFor: [
        { title: 'Puzzle Enthusiasts', description: 'Solving word-based cryptograms and numeric puzzles that require word-to-number conversion' },
        { title: 'Cryptography Learners', description: 'Understanding how words are encoded numerically in encryption systems' },
        { title: 'Students & Teachers', description: 'Educational tool for learning about character encoding and numerical representation of text' },
        { title: 'Data Science Professionals', description: 'Converting categorical word data to numerical format for analysis and machine learning' }
      ]
    },
    'cmyk-to-pantone-color-converter': {
      howItWorks: 'Enter CMYK color values (Cyan, Magenta, Yellow, Black) using the sliders or numeric inputs on the left. The converter instantly calculates the closest Pantone (PMS) color match and displays the equivalent hex color code. The tool shows the main color result plus five alternative Pantone options for precision color matching in print production.',
      features: [
        'Convert CMYK to Pantone (PMS) color format',
        'Interactive CMYK sliders (0-100% range)',
        'Real-time color preview display',
        'Shows closest Pantone match with distance calculation',
        'Alternative Pantone color suggestions',
        'Hex color code conversion and display',
        'Copy Pantone PMS code to clipboard',
        'Perfect for print design, branding, and color standardization'
      ],
      whoIsItFor: [
        { title: 'Graphic Designers', description: 'Converting CMYK colors from digital design to Pantone for accurate print production' },
        { title: 'Print Professionals', description: 'Matching spot colors in printing using Pantone standards' },
        { title: 'Branding Specialists', description: 'Ensuring consistent color representation across print and digital media' },
        { title: 'Marketing Teams', description: 'Standardizing brand colors across all marketing materials and collateral' }
      ]
    },
    'batch-file-editor': {
      howItWorks: 'Write or paste batch file commands into the editor. The tool provides real-time syntax highlighting, line numbering, and instant file statistics. Analyze your batch scripts by character count, word count, line count, and file size. Download your batch files directly or copy to clipboard for easy sharing and execution.',
      features: [
        'Full-featured batch file code editor',
        'Line numbering with real-time display',
        'Character, word, line, and size statistics',
        'Dark theme editor for coding comfort',
        'Copy to clipboard functionality',
        'Download as .bat file directly',
        'Batch file syntax-aware editing',
        'File size calculation in B/KB/MB'
      ],
      whoIsItFor: [
        { title: 'Windows System Administrators', description: 'Creating and editing batch scripts for system automation and maintenance' },
        { title: 'System Developers', description: 'Writing batch files for deployment, backups, and scheduled tasks' },
        { title: 'IT Professionals', description: 'Managing batch file libraries and scripts for server administration' },
        { title: 'Students & Learners', description: 'Learning batch scripting and Windows command-line programming' }
      ]
    },
    'rgb-to-pantone-converter': {
      howItWorks: 'Enter RGB color values (Red, Green, Blue) using the sliders or numeric inputs (0-255) on the left. The converter instantly calculates the closest Pantone (PMS) color match and displays the equivalent hex color code with a distance metric. The interactive color picker allows you to select colors visually, and the tool shows multiple Pantone alternatives for precise color matching.',
      features: [
        'Convert RGB to Pantone (PMS) color format',
        'Interactive RGB sliders (0-255 range)',
        'Real-time color preview display',
        'Visual color picker with gradient selector',
        'Distance metric for color accuracy',
        'Shows closest Pantone match plus alternatives',
        'Hex color code conversion and display',
        'Copy Pantone PMS code to clipboard'
      ],
      whoIsItFor: [
        { title: 'Web Designers', description: 'Converting RGB web colors to Pantone for print mockups and branding consistency' },
        { title: 'Graphic Designers', description: 'Bridging digital RGB colors to print-ready Pantone specifications' },
        { title: 'Brand Managers', description: 'Ensuring accurate color reproduction across digital and print materials' },
        { title: 'Print & Marketing Professionals', description: 'Matching screen colors to print production requirements and standards' }
      ]
    },
    'pantone-to-hex-converter': {
      howItWorks: 'Use the search panel to browse and select from an extensive Pantone color database, or use the visual color picker on the right to select any color and find its closest Pantone match. The tool instantly displays hex, RGB, and CMYK color values for seamless conversion between format types. Real-time color matching ensures accurate color reproduction across design and print workflows.',
      features: [
        'Searchable Pantone color database',
        'Visual color picker with interactive gradient',
        'Convert to hex, RGB, and CMYK formats',
        'Real-time color distance calculation',
        'Closest Pantone match identification',
        'Copy Pantone codes to clipboard',
        'Comprehensive color information display',
        'Works completely offline'
      ],
      whoIsItFor: [
        { title: 'Graphic & Print Designers', description: 'Finding and converting Pantone colors for design projects and print specifications' },
        { title: 'Brand Specialists', description: 'Maintaining consistent brand colors across digital and print media' },
        { title: 'Web Developers', description: 'Converting Pantone specifications to hex values for web implementation' },
        { title: 'Color Professionals', description: 'Color matching and format conversion for accurate reproduction across mediums' }
      ]
    },
    'base64-image-viewer': {
      howItWorks: 'Paste or input a base64-encoded image string into the left panel. The tool automatically decodes the base64 data and displays the decoded image in real-time on the right. Supports data URI prefixes (data:image/...) or raw base64 strings. Download the image or copy the base64 code for further use.',
      features: [
        'Decode and display base64-encoded images',
        'Support for PNG, JPEG, GIF, SVG, WebP formats',
        'Real-time image preview as you type',
        'Works with data URI prefixes or raw base64',
        'Copy base64 string to clipboard',
        'Download decoded images directly',
        'File size calculation and display',
        'Format auto-detection'
      ],
      whoIsItFor: [
        { title: 'Developers & Programmers', description: 'Decoding and previewing base64-encoded image data from APIs, databases, or code' },
        { title: 'Web Designers', description: 'Viewing embedded base64 images in HTML/CSS projects and converting to regular image files' },
        { title: 'Data Engineers', description: 'Inspecting base64-encoded images in data pipelines and ETL processes' },
        { title: 'Security Professionals', description: 'Analyzing suspicious or obfuscated base64 image data for security audits' }
      ]
    },
    'morse-to-base64-converter': {
      howItWorks: 'Enter or paste Morse code into the left panel using the configured separators (default: − for dash, · for dot, / for word spaces). The tool automatically decodes the Morse code to readable text and converts it to Base64 format on the right. Customize the separators to match your Morse code format. All processing happens offline on your device.',
      features: [
        'Decode Morse code to readable text',
        'Convert decoded text to Base64 format',
        'Customizable Morse code separators',
        'Real-time decoding and conversion',
        'Displays intermediate decoded text',
        'Copy decoded text and Base64 output',
        'Support for standard Morse alphabet',
        'Works completely offline'
      ],
      whoIsItFor: [
        { title: 'Amateur Radio Operators', description: 'Decoding received Morse code messages and converting to digital formats' },
        { title: 'History Enthusiasts', description: 'Translating historical Morse code communications and digital preservation' },
        { title: 'Cryptography Students', description: 'Learning encoding systems and practicing Morse code decryption' },
        { title: 'Data Analysts', description: 'Processing encoded Morse data and converting to Base64 for storage and transmission' }
      ]
    },
    'vernam-cipher-decoder': {
      howItWorks: 'Enter the ciphertext into the left panel and provide the original encryption key in the key field. Select your decryption mode (Vigenere for alphabetic cipher or XOR for bitwise operations). The tool decrypts the message in real-time using the selected algorithm. Toggle "Preserve case" to maintain original letter capitalization. All decryption happens locally in your browser with no data transmission.',
      features: [
        'Vigenere mode decryption for alphabetic ciphers',
        'XOR mode for bitwise one-time pad decryption',
        'Real-time decryption with instant results',
        'Preserve case option for maintaining formatting',
        'Copy decrypted text to clipboard',
        'Download decrypted messages as text files',
        'Character counting for both input and output',
        'Complete offline processing for security'
      ],
      whoIsItFor: [
        { title: 'Cryptography Enthusiasts', description: 'Understanding and implementing one-time pad ciphers and Vernam encryption' },
        { title: 'Security Researchers', description: 'Analyzing theoretically unbreakable cipher systems and encryption methods' },
        { title: 'Military & Intelligence Personnel', description: 'Decrypting historical and modern one-time pad communications' },
        { title: 'Computer Science Students', description: 'Learning advanced cryptography concepts and mathematical encryption principles' }
      ]
    },
    'ivr-alphanumeric-converter': {
      howItWorks: 'Type or paste the alphanumeric PTAN, DCN, or Medicare Beneficiary ID number (MBI) into the input field. Click the Convert button or press Enter. The tool instantly converts each letter to its corresponding telephone keypad number and displays the sequence exactly as it needs to be entered into the IVR system. Copy the result or download it as a reference file for your records.',
      features: [
        'Convert PTAN, DCN, and Medicare Beneficiary ID numbers',
        'Real-time conversion with instant results',
        'Telephone keypad reference guide included',
        'Copy converted sequence to clipboard easily',
        'Download sequences as text files for records',
        'Works with alphanumeric characters and dashes',
        'Supports Enter key for quick conversion',
        'Complete offline processing for privacy'
      ],
      whoIsItFor: [
        { title: 'Healthcare Administrators', description: 'Converting patient IDs for IVR system interactions and Medicare inquiries' },
        { title: 'Medical Office Staff', description: 'Processing PTAN and DCN codes for automated telephone system access' },
        { title: 'Insurance Specialists', description: 'Converting Medicare Beneficiary IDs for phone-based healthcare services' },
        { title: 'Patient Care Coordinators', description: 'Helping patients navigate healthcare IVR systems without speaking to representatives' }
      ]
    },
    'cm-to-pixels-converter': {
      howItWorks: 'Enter the centimeter value you want to convert in the input field and select your desired resolution (PPI/DPI). The tool instantly calculates and displays the equivalent pixel measurement. Use Quick Conversions for common values, or refer to the Popular Conversions table showing standard measurements at different print and screen resolutions.',
      features: [
        'Convert centimeters to pixels instantly',
        'Multiple resolution options (72 PPI, 96 PPI, 150 PPI, 300 PPI)',
        'Quick conversion buttons for common values (1-50 cm)',
        'Popular conversions reference table included',
        'Copy results to clipboard with one click',
        'Display conversions at both web and print resolutions',
        'Formula reference for manual calculations',
        'Accurate calculations for all measurement types'
      ],
      whoIsItFor: [
        { title: 'Web Designers', description: 'Converting design measurements from centimeters to pixels for accurate web layouts and responsive design' },
        { title: 'Print Designers', description: 'Calculating pixel-to-centimeter conversions for print media with high-resolution requirements' },
        { title: 'Graphic Designers', description: 'Converting between metric and digital measurements for cross-media design projects' },
        { title: 'UI/UX Developers', description: 'Determining exact pixel measurements from metric specifications in design mockups' }
      ]
    },
    'placeholder-image-creator': {
      howItWorks: 'Enter your desired width and height in pixels. Choose text and background colors using color pickers or the random color generator. Customize font properties like family, size, and weight. Add optional caption text or leave blank to display dimensions. Download the image in PNG, JPG, or WebP format, or copy the Data URI for direct embedding.',
      features: [
        'Create custom placeholder images with any dimensions',
        'Customize text and background colors',
        'Random color generator for quick styling',
        'Multiple font families and weights available',
        'Adjustable font size for text display',
        'Optional custom caption or auto-display dimensions',
        'Download in PNG, JPG, or WebP formats',
        'Copy Data URI for direct HTML/CSS embedding'
      ],
      whoIsItFor: [
        { title: 'Web Designers', description: 'Creating quick placeholder images for mockups and design compositions' },
        { title: 'Front-end Developers', description: 'Generating placeholder images for testing layouts and responsive designs' },
        { title: 'UI/UX Designers', description: 'Building wireframes and prototypes with custom placeholder graphics' },
        { title: 'Content Managers', description: 'Creating quick visual placeholders for content planning and documentation' }
      ]
    },
  }

  return toolDataMap[toolId] || {
    howItWorks: 'Use the interactive tool on the left to encode, decode, or solve your input. The tool provides real-time results as you type or make selections.',
    features: ['Real-time processing with instant results', 'Works completely offline - no data sent to servers', 'Copy results to clipboard easily', 'Free and always available'],
    whoIsItFor: []
  }
}
