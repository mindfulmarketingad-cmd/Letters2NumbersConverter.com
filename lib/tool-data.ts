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
      howItWorks: 'Our Egyptian Numbers Converter transforms decimal numbers into authentic ancient Egyptian hieroglyphic numerals. Simply enter any number and the converter instantly displays the Egyptian hieroglyphic representation using symbols that ancient Egyptians used in the Nile Valley. Learn how the Egyptian numeral system worked with its base-10 structure. The converter includes detailed explanations of each hieroglyphic symbol and its value, providing insight into how ancient Egyptian mathematicians counted and recorded numbers on papyrus and temple walls.',
      features: [
        'Convert decimal numbers to Egyptian hieroglyphic numerals',
        'Display authentic ancient Egyptian number symbols',
        'Detailed breakdown of each hieroglyphic value',
        'Historical context for Egyptian number systems',
        'Visual representation of Egyptian mathematical symbols',
        'Educational explanations of ancient Egyptian mathematics',
        'Symbol reference guide with meanings',
        'Support for large numbers in Egyptian numerals',
        'Beautiful visual hieroglyphic display',
        'Learn ancient Egyptian counting methods',
        'Compare modern vs. ancient Egyptian numbers',
        'Perfect for Egyptology research and education'
      ],
      whoIsItFor: [
        { 
          title: 'Egyptology Enthusiasts & Scholars', 
          description: 'Explore ancient Egyptian mathematics and numeral systems using the Egyptian Numbers Converter to understand how pharaohs and scribes represented numbers with hieroglyphic symbols.' 
        },
        { 
          title: 'History & Ancient Civilization Teachers', 
          description: 'Use the Egyptian Numbers Converter to create engaging lessons on ancient Egyptian culture, mathematics, and numerals. Demonstrate how ancient Egyptians counted and recorded numbers without the modern decimal system.' 
        },
        { 
          title: 'Art & Design Students', 
          description: 'Study hieroglyphic design elements and symbolism through the Egyptian Numbers Converter. Learn authentic Egyptian artistic representations of numbers and mathematical concepts.' 
        },
        { 
          title: 'Academic Researchers', 
          description: 'Reference the Egyptian Numbers Converter for accurate Egyptian hieroglyphic numeral conversions in research papers, archaeological studies, and academic publications on ancient Egypt.' 
        },
        { 
          title: 'Museum Educators & Curators', 
          description: 'Enhance museum exhibits and educational programs using the Egyptian Numbers Converter to demonstrate how ancient Egyptian numbers worked to museum visitors and students.' 
        },
        { 
          title: 'Students Learning Ancient Languages', 
          description: 'Study Egyptian hieroglyphics and ancient languages with the Egyptian Numbers Converter as an educational tool for understanding numerals in historical context.' 
        }
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
      howItWorks: 'Our Mayan Numeral Converter transforms decimal numbers into authentic ancient Mayan base-20 numerals. Simply enter any number and the converter instantly displays the Mayan representation using the iconic dot-and-bar notation system used by Mesoamerican civilizations. The Mayan numeral converter explains the unique base-20 (vigesimal) structure and shows how ancient Mayans used dots (representing 1) and bars (representing 5) to perform sophisticated mathematical calculations. Learn how Mayan numerals related to their calendar systems and astronomical observations.',
      features: [
        'Convert decimal numbers to Mayan base-20 numerals',
        'Authentic dot-and-bar symbol representation',
        'Display of Mayan numeral notation system',
        'Value breakdown by vertical position',
        'Historical context for Mayan mathematics',
        'Support for large numbers in Mayan converter',
        'Vigesimal (base-20) system explanation',
        'Visual representation of Mayan numerals',
        'Educational annotations for learning',
        'Connection to Mayan calendar systems',
        'Mesoamerican number system demonstration',
        'Perfect for archaeological research and education'
      ],
      whoIsItFor: [
        { 
          title: 'Archaeology & Anthropology Students', 
          description: 'Use the Mayan numeral converter to study Mesoamerican civilizations, understand how ancient Mayans performed mathematics, and learn the base-20 numeral system used in Mayan astronomical calculations.' 
        },
        { 
          title: 'History & Ancient Civilization Educators', 
          description: 'Teach students about Mayan numerals and base-20 mathematics using the Mayan numeral converter as an interactive educational tool to demonstrate ancient Mesoamerican numerical systems.' 
        },
        { 
          title: 'Comparative Mathematics Enthusiasts', 
          description: 'Study different cultural approaches to mathematics with the Mayan numeral converter, comparing vigesimal systems to modern decimal and exploring ancient civilizations\' mathematical sophistication.' 
        },
        { 
          title: 'Archaeology Researchers & Scholars', 
          description: 'Reference the Mayan numeral converter when analyzing Mayan texts, codices, and archaeological findings that contain numerical information and calendar calculations.' 
        },
        { 
          title: 'Museum Educators & Curators', 
          description: 'Enhance museum exhibits and educational programs with the Mayan numeral converter to demonstrate how ancient Mayans represented numbers and performed calculations.' 
        },
        { 
          title: 'Students Learning Ancient History', 
          description: 'Deepen your understanding of Mayan civilization by using the Mayan numeral converter to explore the mathematical sophistication and numerical systems of Mesoamerican cultures.' 
        }
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
      howItWorks: 'Our PX to VW converter instantly transforms pixel measurements into viewport width units and vice versa. Enter a pixel value and select your viewport width (or use preset device sizes), and the calculator converts to vw units using the formula: vw = (px / viewport width) × 100. The px to vw converter supports custom viewport widths for any device, predefined breakpoints for mobile, tablet, and desktop, and real-time conversion as you type. Perfect for creating responsive CSS, fluid typography, scalable designs that adapt across all screen sizes and devices.',
      features: [
        'Bidirectional px to vw and vw to px conversion',
        'Support for multiple viewport presets and breakpoints',
        'Custom viewport width calculation',
        'Real-time px-vw converter calculations',
        'Common device sizes (iPhone, iPad, desktop)',
        'Responsive design breakpoint conversion',
        'Fluid typography CSS calculations',
        'Copy converted values to clipboard instantly',
        'PX to VW formula display and explanation',
        'Batch conversion for multiple values',
        'Mobile-first responsive design support',
        'Viewport width visualization',
        'Pixel to viewport width converter with precision',
        'CSS scaling and animation calculations'
      ],
      whoIsItFor: [
        {
          title: 'Front-End Web Developers',
          description: 'Use the px to vw converter to transform pixel measurements into viewport-relative units for responsive CSS, media queries, and fluid layouts that scale seamlessly across devices.'
        },
        {
          title: 'Responsive Web Design Specialists',
          description: 'Convert between px and vw units efficiently using the px to vw converter to create mobile-first responsive designs that maintain visual consistency across mobile, tablet, and desktop screens.'
        },
        {
          title: 'UI/UX Designers',
          description: 'Calculate vw values from pixel measurements using the px to vw converter to translate design specifications into responsive CSS that maintains proportions across different viewport sizes.'
        },
        {
          title: 'Full-Stack Developers',
          description: 'Streamline CSS development using the px to vw converter for converting fixed pixel values to relative viewport width units when building scalable web applications.'
        },
        {
          title: 'CSS Framework Developers',
          description: 'Build responsive component systems with the px to vw converter by calculating viewport-relative measurements for typography, spacing, and flexible layouts.'
        },
        {
          title: 'Mobile-First Development Teams',
          description: 'Accelerate responsive development workflows using the px to vw converter to quickly calculate viewport-width measurements for adaptive designs starting from mobile screens.'
        }
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
      howItWorks: 'Our word to number translator instantly converts English words and phrases into numerical sequences. Simply type any word in the input panel and select your desired encoding method: A1Z26 (A=1, Z=26), A0Z25 (A=0, Z=25), ASCII, HEX, or BINARY. The word to number converter displays real-time conversion results with a detailed character-by-character breakdown showing exactly how each letter maps to its numeric value. Works bidirectionally—convert words to numbers or reverse the process by entering numeric sequences to get words back. Perfect for cryptography, word puzzle solving, understanding text encoding, and data analysis.',
      features: [
        'Convert words to numbers using multiple encoding methods',
        'A1Z26 word to number conversion (A=1 through Z=26)',
        'A0Z25 word encoding format (A=0 through Z=25)',
        'ASCII character code conversion from words',
        'Hexadecimal (HEX) word to number encoding',
        'Binary (BINARY) word encoding and conversion',
        'Bidirectional word-to-number and number-to-word translator',
        'Real-time conversion as you type words or numbers',
        'Character-by-character numeric breakdown visualization',
        'Support for phrases and multi-word text conversion',
        'Copy converted word numbers to clipboard instantly',
        'Works completely offline - no data sent to servers',
        'Perfect for cryptography, word puzzles, and cryptograms',
        'Understanding text encoding and numerical representation'
      ],
      whoIsItFor: [
        { 
          title: 'Word Puzzle & Cryptogram Enthusiasts', 
          description: 'Solve word-based puzzles, cryptograms, and riddles using the word to number translator to convert words into numeric codes and discover hidden patterns.' 
        },
        { 
          title: 'Cryptography & Security Learners', 
          description: 'Learn fundamental cryptographic principles with the word to number translator to understand how words are converted to numbers in encryption and encoding systems.' 
        },
        { 
          title: 'Students & Educators', 
          description: 'Use the word to number translator as an educational tool to teach character encoding, numerical representation of text, and fundamental computer science concepts.' 
        },
        { 
          title: 'Data Science & Analytics Professionals', 
          description: 'Convert categorical word data to numerical format using the word to number translator for machine learning models, data analysis, and statistical computations.' 
        },
        { 
          title: 'Game Designers & Puzzle Creators', 
          description: 'Develop word-based games, codes, and challenges using the word to number translator to create engaging puzzles that require word-to-number conversions.' 
        },
        { 
          title: 'Language & Linguistics Students', 
          description: 'Study character encoding, text representation, and linguistic analysis using the word to number translator to explore how words map to numeric values.' 
        }
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
      howItWorks: 'Our batch file editor lets you write, edit, and analyze batch files with ease. Simply type or paste your batch script commands into the editor and watch real-time syntax highlighting update as you work. The batch file editor provides instant statistics for your script including character count, word count, line count, and total file size. Once your batch file is complete, easily download it as a .bat file or copy the entire script to your clipboard. Perfect for Windows batch scripting, command automation, and system administration tasks requiring batch file creation.',
      features: [
        'Full-featured batch file code editor with syntax highlighting',
        'Batch file line numbering with real-time display',
        'Real-time character, word, line, and size statistics',
        'Dark theme editor optimized for batch script coding',
        'Copy batch script to clipboard with one click',
        'Download batch files as .bat format directly',
        'Batch file syntax-aware editing and validation',
        'File size calculation in B/KB/MB formats',
        'Batch script command recommendations and helpers',
        'Support for Windows batch commands and parameters',
        'Batch file formatting and indentation tools',
        'Common batch file templates and snippets'
      ],
      whoIsItFor: [
        { title: 'Windows System Administrators', description: 'Create batch scripts for system automation, maintenance tasks, and managing multiple computers. Use our batch file editor to develop batch files for scheduled tasks, system updates, and server administration.' },
        { title: 'Software Developers', description: 'Write batch files for deployment automation, build scripts, and development environment setup. Our batch file editor streamlines the creation of batch scripts for Windows development workflows.' },
        { title: 'IT Professionals', description: 'Maintain batch file libraries and develop command scripts for server administration. The batch file editor helps IT teams manage and create batch files for network management and system maintenance.' },
        { title: 'DevOps Engineers', description: 'Build batch scripts for CI/CD pipelines and automated deployment. Use the batch file editor to create Windows-compatible batch files for continuous integration environments.' },
        { title: 'Students & Learners', description: 'Learn batch scripting, Windows command-line programming, and batch file syntax. The batch file editor provides an interactive environment for studying batch commands and creating practice batch files.' }
      ]
    },
    'rgb-to-pantone-converter': {
      howItWorks: 'Our RGB to Pantone Color Converter transforms digital RGB colors into professional Pantone (PMS) codes for accurate print production. Enter RGB values (0-255) using interactive sliders or numeric inputs, or use the visual color picker to select colors directly. The RGB to Pantone converter instantly calculates the closest Pantone color match, displays the equivalent hex code, and shows alternative Pantone matches with color distance metrics for precision. Perfect for digital-to-print workflows, ensuring brand color consistency across all media and production methods.',
      features: [
        'Convert RGB colors to Pantone (PMS) format instantly',
        'RGB to Pantone color matching algorithm',
        'Interactive RGB sliders with 0-255 range control',
        'Visual color picker with gradient selector',
        'Real-time color preview and display',
        'Multiple Pantone color alternatives and variants',
        'Distance metric for color accuracy measurement',
        'Hex color code conversion from RGB values',
        'CMYK color format support for print workflows',
        'Copy Pantone PMS codes to clipboard instantly',
        'Color name identification and suggestions',
        'Professional print color matching accuracy',
        'Batch color conversion for multiple RGB values',
        'Color harmony and complementary color suggestions'
      ],
      whoIsItFor: [
        { 
          title: 'Web & Graphic Designers', 
          description: 'Use the RGB to Pantone converter to bridge digital design work with print production, ensuring your web colors translate accurately to Pantone specifications for printed materials.' 
        },
        { 
          title: 'Brand & Marketing Professionals', 
          description: 'Maintain color consistency across digital and print channels using the RGB to Pantone converter to ensure brand colors remain accurate in all media and promotional materials.' 
        },
        { 
          title: 'Print Shop Managers & Printers', 
          description: 'Convert digital RGB color specifications to Pantone matching system codes using the RGB to Pantone converter for accurate print production and color matching.' 
        },
        { 
          title: 'Product Packaging Designers', 
          description: 'Use the RGB to Pantone converter to ensure package designs display accurately when printed, maintaining color fidelity from design mockup to physical product.' 
        },
        { 
          title: 'UI/UX Designers', 
          description: 'Convert RGB interface colors to Pantone specifications using the RGB to Pantone converter when creating digital products that will have physical printed counterparts.' 
        },
        { 
          title: 'Marketing Agencies & Creative Teams', 
          description: 'Streamline color workflows with the RGB to Pantone converter for seamless collaboration between digital designers and print vendors ensuring consistent brand representation.' 
        }
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
    'convert-oxps-to-pdf': {
      howItWorks: 'Upload your OXPS file by clicking the upload button or dragging and dropping into the converter. The tool processes your Open XML Paper Specification document and transforms it into a universally compatible PDF format. Once conversion completes, download your PDF file instantly. All processing happens securely with files deleted immediately after conversion.',
      features: [
        'Convert OXPS to PDF instantly online',
        'Drag and drop file upload support',
        'Preserves all formatting, fonts, and images',
        'No software installation required',
        'Works directly in your browser',
        'Supports files up to 100 MB',
        'Secure processing with automatic file deletion',
        'Free with no registration needed'
      ],
      whoIsItFor: [
        { title: 'Business Professionals', description: 'Converting OXPS documents received from Windows systems to universally compatible PDF for sharing with clients and colleagues' },
        { title: 'IT Administrators', description: 'Batch converting legacy OXPS files to PDF format for document management and archival purposes' },
        { title: 'Students & Educators', description: 'Converting OXPS school documents and assignments to PDF for easier submission and compatibility across devices' },
        { title: 'Legal & Compliance Teams', description: 'Transforming OXPS files to PDF format for standardized document storage and regulatory compliance' }
      ]
    },
    'webp-to-gif': {
      howItWorks: 'Upload your WebP image by clicking the upload button or dragging and dropping into the converter. The tool processes your WebP file and transforms it into a widely compatible GIF format while preserving image quality and animation data. Once conversion completes, download your GIF file instantly. All processing happens securely with files deleted immediately after conversion.',
      features: [
        'Convert WebP to GIF instantly online',
        'Drag and drop file upload support',
        'Preserves image quality and animations',
        'No software installation required',
        'Works directly in your browser',
        'Supports files up to 100 MB',
        'Secure processing with automatic file deletion',
        'Free with no registration needed'
      ],
      whoIsItFor: [
        { title: 'Web Designers & Developers', description: 'Converting WebP images to GIF format for broader browser compatibility and better support across older platforms' },
        { title: 'Content Creators', description: 'Transforming WebP images and animations into GIF format for social media posting and better compatibility with various platforms' },
        { title: 'Digital Marketers', description: 'Converting WebP promotional images to GIF format for email campaigns and platforms that have limited WebP support' },
        { title: 'IT Professionals', description: 'Converting WebP files to GIF for system compatibility and archival purposes across legacy systems' }
      ]
    },
    'base32-converter': {
      howItWorks: 'Select Encode or Decode in the middle panel, then choose your Base32 variant from the dropdown. Type or paste your input in the left panel — the tool processes it instantly using a pure JavaScript implementation with no server calls. For encoding, every 5 bytes of input are grouped into 8 Base32 characters; padding (=) is added if needed. For decoding, Base32 characters are mapped back to their 5-bit values, reassembled into bytes, and decoded as UTF-8 text. The alphabet reference at the bottom shows exactly which characters the selected variant uses.',
      features: [
        'Encode text to Base32 or decode Base32 back to text',
        'Four variants: RFC 4648, Base32 Hex, z-base-32, Crockford\'s Base32',
        'Three-panel layout: input, operation settings, output — matching industry-standard encoder UIs',
        'Live character count showing encoded/decoded length',
        'Alphabet reference panel showing the full character set for each variant',
        'One-click copy to clipboard',
        '100% browser-based — no data ever leaves your device',
      ],
      whoIsItFor: [
        { title: 'Developers & Engineers', description: 'Encoding API tokens, secret keys, and binary data in Base32 for use in URLs, QR codes, and case-insensitive systems.' },
        { title: 'Security & Cryptography Students', description: 'Understanding binary-to-text encoding schemes and the differences between Base32 variants as part of cryptography coursework.' },
        { title: 'DevOps & SRE Teams', description: 'Decoding Base32-encoded configuration values, TOTP secrets, and OTP tokens when troubleshooting authentication systems.' },
        { title: 'Data Engineers', description: 'Working with Base32-encoded identifiers in data pipelines, distributed systems, and storage keys.' },
        { title: 'CTF & Puzzle Solvers', description: 'Decoding Base32-encoded clues in capture-the-flag competitions and online puzzle challenges.' },
      ],
    },
    'text-to-roman-numerals': {
      howItWorks: 'Select your input mode — "Text (ASCII)" converts each character to its ASCII numeric value and then to Roman numerals (e.g. "hi" → h=104=CIV, i=105=CV → "CIV CV"), while "Numbers" converts space or comma-separated integers directly. The separator dropdown lets you choose how Roman numerals are delimited in the output. Switch "Convert to" to decode mode and paste Roman numerals to reverse the process back to numbers or text. Everything runs instantly in your browser.',
      features: [
        'Two input modes: Text (ASCII values) and Numbers (direct integers)',
        'Bidirectional: encode to Roman numerals or decode back to text/numbers',
        'Customisable separator — space, comma, hyphen, period, newline, or custom',
        'Real-time output as you type',
        'Character count badges on both panels',
        'Expandable Roman numeral reference chart (I through M)',
        'One-click copy to clipboard',
        '100% browser-based — no data sent to servers',
      ],
      whoIsItFor: [
        { title: 'Students & Educators', description: 'Learning Roman numerals, practising conversions, and checking homework answers instantly.' },
        { title: 'Designers & Typographers', description: 'Generating Roman numeral sequences for clock faces, chapter headings, wedding invitations, and decorative numbering.' },
        { title: 'Puzzle & Cipher Enthusiasts', description: 'Encoding or decoding text using Roman numeral ASCII substitution for escape room puzzles and ARGs.' },
        { title: 'Historians & Classicists', description: 'Converting dates, inscriptions, and ancient numbering systems for research or academic writing.' },
        { title: 'Developers & QA Engineers', description: 'Testing Roman numeral parsing logic and generating test data for numeral conversion algorithms.' },
      ],
    },
    'sims-language-translator': {
      howItWorks: 'Type or paste any English text into the left panel and the translator instantly maps each word against a 200+ word confirmed Simlish dictionary compiled from across The Sims game series. Known words are replaced with their official Simlish equivalents; words not in the dictionary are converted using Simlish phonetic rules (consonant-vowel-consonant patterns, characteristic sound substitutions like "th"→"f" and "-tion"→"sha") to produce plausible-sounding Simlish output. Switch to "Simlish → English" mode to reverse-translate. Hit "Generate Random Sentence" for a pre-built example, or tap any phrase chip to insert a common Simlish expression.',
      features: [
        '200+ confirmed Simlish words and phrases from The Sims 1, 2, 3, and 4',
        'Bidirectional translation: English → Simlish and Simlish → English',
        'Phonetic fallback for words not in the official dictionary',
        '15 random sentence examples with one click',
        'Quick-reference phrase chips for the most common Simlish expressions',
        'Swap button to flip output back into input',
        'One-click copy to clipboard',
        '100% browser-based — no data sent to servers',
      ],
      whoIsItFor: [
        { title: 'Sims Players & Fans', description: 'Sending fun Simlish messages to friends, understanding what Sims are "saying," and deepening immersion in the game world.' },
        { title: 'Content Creators & Streamers', description: 'Adding authentic Simlish captions, titles, or dialogue to Sims Let\'s Play videos, screenshots, and social media posts.' },
        { title: 'Cosplayers & Convention Attendees', description: 'Writing Simlish signs, costumes, or props for Sims-themed cosplay and gaming events.' },
        { title: 'Teachers & Classroom Fun', description: 'Using Simlish as a playful introduction to linguistics, constructed languages, and phonology in class activities.' },
        { title: 'Game Developers & Writers', description: 'Referencing Simlish as a model for designing fictional languages in games, interactive fiction, or world-building projects.' },
      ],
    },
    'sentence-unscrambler': {
      howItWorks: 'Paste your scrambled words or sentences into the input box and press "Generate Output". The tool splits your text into individual sentences using punctuation boundaries, then evaluates candidate word orderings using capitalisation, punctuation placement, and grammatical heuristics (content words before stop words, proper capitalisation at the start, punctuation at the end). The highest-scoring arrangement is returned instantly, all computed in your browser with no server calls.',
      features: [
        'Instantly unscrambles single sentences and multi-sentence paragraphs',
        'Smart scoring based on capitalisation, punctuation, and word type',
        'Exhaustive permutation search for sentences up to 7 words',
        'Heuristic fast-path for longer sentences',
        'Language selector (English, Spanish, French, German, and more)',
        'Advanced options: case-sensitive ordering and punctuation preservation',
        'Live character, word, sentence, and paragraph counters',
        'One-click copy to clipboard',
        '100% browser-based — your text never leaves your device',
      ],
      whoIsItFor: [
        { title: 'Students & Language Learners', description: 'Practising sentence construction and grammar by unscrambling example sentences from textbooks or worksheets.' },
        { title: 'Teachers & Educators', description: 'Quickly checking answers to scrambled-sentence exercises or generating correctly ordered examples for lesson plans.' },
        { title: 'Puzzle & Game Enthusiasts', description: 'Solving word scramble puzzles, escape room challenges, and ARG (alternate reality game) clues that involve shuffled sentences.' },
        { title: 'Writers & Editors', description: 'Fixing accidentally shuffled text caused by copy-paste errors, OCR misreads, or document conversion artefacts.' },
        { title: 'Developers & QA Testers', description: 'Testing NLP pipelines and text-processing tools with scrambled sentence inputs and expected outputs.' },
      ],
    },
    'word-to-pdf-converter': {
      howItWorks: 'Upload any .docx or .doc Word file by clicking the button or dragging and dropping it. Mammoth.js (loaded in your browser) converts the Word document to HTML, preserving headings, paragraphs, and text formatting. html2pdf then renders that HTML as a properly paginated A4 PDF, which you can download instantly — nothing is ever sent to a server.',
      features: [
        '100% browser-based — your document never leaves your device',
        'Supports both .docx and .doc Word formats',
        'Preserves headings, paragraphs, and basic text formatting',
        'A4 page layout with standard margins',
        'High-quality PDF output (2× resolution rendering)',
        'Supports files up to 100 MB',
        'No sign-up or software installation required',
        'Workspace history — re-download previous conversions within the session',
      ],
      whoIsItFor: [
        { title: 'Students & Academics', description: 'Submitting assignments, theses, or reports as PDFs when institutions require a non-editable format.' },
        { title: 'Office Workers & Admins', description: 'Sending contracts, proposals, and reports as PDFs to clients or colleagues without needing Adobe Acrobat.' },
        { title: 'Job Seekers', description: 'Converting resumes and cover letters from Word to PDF to ensure consistent formatting across all devices.' },
        { title: 'Small Business Owners', description: 'Creating professional-looking PDF invoices, quotes, and brochures from existing Word templates.' },
        { title: 'Legal & HR Professionals', description: 'Locking down document formatting before sending agreements or policies for review or signature.' },
      ],
    },
    'morse-code-translator': {
      howItWorks: 'Type any text into the input box and the translator instantly converts each character to its Morse code equivalent using the international Morse code standard (dots and dashes, spaces between letters, word separators between words). Switch to decode mode to paste Morse code and get the plain text back. Hit "Play audio" to hear the Morse code played as audible tones at 15 WPM using the Web Audio API — no plugins needed.',
      features: [
        'Bidirectional translation: text → Morse and Morse → text',
        'Real-time output as you type',
        'Audio playback of Morse code at 15 WPM using the Web Audio API',
        'Swap button to reverse input and output instantly',
        'Supports A–Z, 0–9, and common punctuation',
        'Expandable Morse code reference chart for all characters',
        'One-click copy to clipboard',
        '100% browser-based — no data sent to servers',
      ],
      whoIsItFor: [
        { title: 'Amateur Radio Operators (Hams)', description: 'Practising CW (continuous wave) Morse code sending and receiving for licensing exams and on-air operation.' },
        { title: 'Escape Room Enthusiasts & Puzzle Solvers', description: 'Decoding Morse code clues in escape rooms, treasure hunts, and online puzzle challenges.' },
        { title: 'Students & History Buffs', description: 'Learning about Morse code as part of telecommunications history, WWII studies, or communications technology curricula.' },
        { title: 'Survival & Outdoors Enthusiasts', description: 'Learning SOS (... --- ...) and basic emergency Morse signals for wilderness situations.' },
        { title: 'Game Developers & Writers', description: 'Encoding hidden messages in Morse code for ARGs (alternate reality games), puzzles, or fictional narratives.' },
      ],
    },
    'pdf-to-word-converter': {
      howItWorks: 'Upload any PDF file by clicking the button or dragging and dropping it onto the upload area. The tool uses PDF.js — running entirely in your browser — to extract all text content page by page. It then packages that text into a properly structured Office Open XML (.docx) file, complete with paragraph styles and page breaks, which you can download and open in Microsoft Word, Google Docs, or LibreOffice instantly.',
      features: [
        '100% browser-based — your PDF never leaves your device',
        'Extracts text from all pages of multi-page PDFs',
        'Outputs a valid .docx file compatible with Microsoft Word, Google Docs, and LibreOffice',
        'Automatic heading detection for all-caps lines',
        'Page breaks preserved between PDF pages',
        'Supports PDF files up to 100 MB',
        'No sign-up or software installation required',
        'Workspace history — re-download previous conversions within the session',
      ],
      whoIsItFor: [
        { title: 'Students & Researchers', description: 'Editing and annotating academic PDFs, research papers, and textbook chapters in a familiar word processor.' },
        { title: 'Office Workers & Admins', description: 'Updating contracts, reports, and forms that were sent as PDFs when the original Word file is unavailable.' },
        { title: 'Legal & HR Professionals', description: 'Extracting and editing text from PDF agreements, policies, and compliance documents for revision or repurposing.' },
        { title: 'Journalists & Writers', description: 'Converting press releases, PDFs, and source documents into editable drafts to speed up research and writing.' },
        { title: 'Small Business Owners', description: 'Repurposing product catalogues, invoices, or brochures received as PDFs into editable Word files without paying for costly software.' },
      ],
    },
    'id3-metadata-viewer': {
      howItWorks: 'Drop or select any audio file (MP3, MP4/M4A, AIFF, WAV, OGG, or FLAC). Click "View metadata" and the tool loads the jsmediatags library in your browser to parse all embedded ID3 tags instantly — nothing is sent to a server. The right panel displays the track title, artist, album, year, genre, BPM, composer, lyrics, and any embedded cover artwork alongside file-level details.',
      features: [
        'Reads ID3v1, ID3v2, and equivalent metadata tags',
        'Supports MP3, MP4/M4A, AIFF, WAV, OGG, and FLAC formats',
        'Displays embedded album artwork in full colour',
        'Shows title, artist, album, year, genre, track number, BPM, composer, and lyrics',
        'File-level info: name, size, MIME type, and last-modified date',
        'Drag & drop or click-to-select file input',
        '100% browser-based — your audio file never leaves your device',
        'No sign-up or installation required',
      ],
      whoIsItFor: [
        { title: 'Music Producers & DJs', description: 'Quickly verifying that exported tracks have correct BPM, key, artist, and album art tags before distributing or uploading to streaming platforms.' },
        { title: 'Music Library Managers', description: 'Auditing large audio collections for missing or incorrect ID3 tags without needing desktop software like MusicBrainz Picard.' },
        { title: 'Podcast Creators', description: 'Confirming that episode files carry the right title, author, and description tags required by podcast directories.' },
        { title: 'Developers & QA Engineers', description: 'Inspecting ID3 output from audio processing pipelines, encoders, or DAW exports to verify correct tag embedding.' },
        { title: 'Music Enthusiasts', description: 'Checking the embedded metadata of downloaded or ripped audio files to ensure accurate track information and artwork.' },
      ],
    },
    'exif-metadata-viewer': {
      howItWorks: 'Drop or select any image file (JPEG, TIFF, WebP, or PNG). Click "View metadata" and the tool parses the EXIF data directly in your browser using a built-in reader — no external libraries, no uploads. The right panel groups all found EXIF fields into File Info, Camera, Date & Time, and Camera Settings sections for easy inspection.',
      features: [
        'Built-in EXIF parser — no external library or upload required',
        'Supports JPEG, TIFF, WebP, PNG, HEIC, and HEIF image formats',
        'Groups fields into File Info, Camera, Date & Time, and Camera Settings',
        'Shows camera make/model, focal length, ISO, shutter speed, aperture, and flash',
        'Displays GPS coordinates if present in the image',
        'Image thumbnail preview in the drop zone',
        '100% browser-based — your image never leaves your device',
        'No sign-up or installation required',
      ],
      whoIsItFor: [
        { title: 'Photographers & Photo Editors', description: 'Reviewing shooting parameters (ISO, aperture, shutter speed) embedded in RAW or JPEG exports to analyse what settings produced a given result.' },
        { title: 'Journalists & Fact-Checkers', description: 'Verifying image authenticity by inspecting the embedded camera make/model, date taken, and GPS coordinates.' },
        { title: 'Privacy-Conscious Users', description: 'Checking whether a photo contains GPS location data before sharing it online, and confirming EXIF data has been stripped.' },
        { title: 'Legal & Insurance Professionals', description: 'Extracting date-taken and GPS metadata from photographs for use as evidence in cases or claims.' },
        { title: 'Developers & Digital Forensics', description: 'Inspecting raw EXIF IFD entries from camera output to debug metadata pipelines or analyse image provenance.' },
      ],
    },
    'certificate-decoder': {
      howItWorks: 'Paste a PEM block, raw Base64, or hex-encoded DER certificate, CSR, or private key into the text area — or switch to "File / binary" mode and drop a .pem, .crt, .cer, .der, .p7b, or .pfx file. Click "Decode" and the tool parses the ASN.1 structure entirely in your browser, displaying the subject, issuer, validity dates, SANs, public key details, signature algorithm, and all extensions in a clean grouped panel. No data is ever sent to a server.',
      features: [
        'Decodes X.509 certificates, CSRs (certificate signing requests), and PKCS#7 chains',
        'Supports PEM blocks, raw Base64, and hex-encoded DER input',
        'File / binary mode accepts .pem, .crt, .cer, .der, .p7b, and .pfx files',
        'Displays subject, issuer, serial number, validity dates, and fingerprints (SHA-1, SHA-256)',
        'Shows all Subject Alternative Names (SANs) and key usage extensions',
        'Public key details: algorithm, key size, and curve (for EC keys)',
        '100% browser-based — your certificate data never leaves your device',
        'Optional password field for encrypted PFX/P12 files',
      ],
      whoIsItFor: [
        { title: 'DevOps & Site Reliability Engineers', description: 'Quickly inspecting SSL/TLS certificates on servers to verify expiry dates, SANs, and issuer chains without needing openssl commands.' },
        { title: 'Security Engineers & Pentesters', description: 'Analysing certificates during security assessments to spot weak key sizes, expired certs, or misconfigured SANs.' },
        { title: 'Web Developers', description: 'Debugging HTTPS configuration issues by decoding certificates to confirm the correct domain names and validity periods.' },
        { title: 'Certificate Authority Users', description: 'Verifying CSR contents before submitting them to a CA, ensuring the correct CN, SANs, and key algorithm are present.' },
        { title: 'IT Administrators', description: 'Auditing internal PKI infrastructure certificates to track expiry and ensure compliance with security policies.' },
      ],
    },
  }

  return toolDataMap[toolId] || {
    howItWorks: 'Use the interactive tool on the left to encode, decode, or solve your input. The tool provides real-time results as you type or make selections.',
    features: ['Real-time processing with instant results', 'Works completely offline - no data sent to servers', 'Copy results to clipboard easily', 'Free and always available'],
    whoIsItFor: []
  }
}
