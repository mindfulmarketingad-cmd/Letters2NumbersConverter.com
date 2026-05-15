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
    'rot13-decoder': {
      howItWorks: 'Paste any plain text or ROT13-encoded text into the input box and the transformed version appears instantly in the output panel — no button press needed. ROT13 is self-inverse: it shifts every letter 13 positions along the alphabet, and because the alphabet has 26 letters, applying the shift twice returns to the original. The same operation encodes and decodes. Non-letter characters (numbers, punctuation, spaces) pass through unchanged.',
      features: [
        'Real-time ROT13 encoding and decoding as you type',
        'Self-inverse — the same tool encodes and decodes',
        'Swap button to move output back to input for chaining',
        'Character, word, and shifted-letter statistics',
        'Expandable full ROT13 alphabet reference table',
        'One-click copy to clipboard',
        '100% browser-based — your text never leaves your device',
        'No sign-up or installation required',
      ],
      whoIsItFor: [
        { title: 'Reddit & Forum Users', description: 'Decoding ROT13 spoiler text in Reddit comments, Usenet posts, and forum threads where ROT13 was used before native spoiler tags existed.' },
        { title: 'Puzzle & Escape Room Enthusiasts', description: 'Decoding ROT13-encoded hints, answers, or clues embedded in puzzle games, escape rooms, and alternate reality games.' },
        { title: 'Developers & Programmers', description: 'Quickly verifying ROT13 output from code, decoding obfuscated strings in source files, or testing cipher implementations.' },
        { title: 'Students & Cryptography Learners', description: 'Understanding the simplest self-inverse cipher as a foundation for learning more complex substitution and transposition ciphers.' },
        { title: 'Writers & Game Designers', description: 'Encoding spoilers, hints, and puzzle answers in ROT13 for publication in forums, blog posts, or game documentation.' },
      ],
    },
    'get-song-bpm': {
      howItWorks: 'Upload any audio file and click "Detect BPM". The tool decodes the audio entirely in your browser, mixes it down to mono, computes an energy envelope by windowing the signal, calculates onset strength (the rate of energy change between windows), and runs autocorrelation over the onset signal to find the dominant beat period. Parabolic interpolation refines the peak for sub-sample precision, and the period is converted to BPM. The confidence score indicates how clearly the beat period stands out.',
      features: [
        'Autocorrelation-based BPM detection — no external library required',
        'Supports MP3, WAV, FLAC, M4A/AAC, OGG, AIFF, and WebM audio formats',
        'Confidence indicator showing how clear the detected beat is',
        'Half-time and double-time BPM variations displayed',
        'Classical tempo feel label (Largo, Andante, Allegro, Presto, etc.)',
        'Progress bar showing analysis stages',
        '100% browser-based — your audio never leaves your device',
        'No sign-up or installation required',
      ],
      whoIsItFor: [
        { title: 'DJs & Music Producers', description: 'Quickly finding the exact BPM of a track before mixing, beatmatching, or setting a DAW project tempo to match an existing recording.' },
        { title: 'Music Teachers & Students', description: 'Identifying the tempo of practice pieces, etudes, or song references to set a metronome correctly or understand the speed of a recording.' },
        { title: 'Fitness & Yoga Instructors', description: 'Checking the BPM of workout playlists to match music tempo to target heart rate zones or exercise cadence.' },
        { title: 'Game & Film Audio Designers', description: 'Matching music cues to scene lengths or sync points by knowing the precise BPM of source tracks.' },
        { title: 'Podcast & Video Editors', description: 'Finding the BPM of background music tracks to ensure cuts and transitions align with the beat.' },
      ],
    },
    'tempo-tapper': {
      howItWorks: 'Play your song in any music player, then click the large TAP button (or press Space) in time with the beat. Each tap records a precise timestamp. The tool calculates the time interval between consecutive taps and updates a rolling average BPM from the last 8 intervals in real time. If you stop tapping for 3 seconds the session auto-resets so you can start fresh.',
      features: [
        'Click or press Space to tap — works without any audio file',
        'Rolling average BPM from the last 8 tap intervals for stability',
        'Real-time interval history display (milliseconds per tap)',
        'BPM range showing min and max across recent taps',
        'Half-time and double-time BPM calculations',
        'Classical tempo feel label (Largo through Presto)',
        'Auto-reset after 3 seconds of inactivity',
        'Works completely offline — no audio analysis or uploads',
      ],
      whoIsItFor: [
        { title: 'Musicians & Instrumentalists', description: 'Finding the BPM of a song by ear to set a physical metronome or DAW tempo, without needing to upload the audio file.' },
        { title: 'DJs & Live Performers', description: 'Quickly tapping out the beat of a vinyl or CD track when digital analysis tools are not available, to prepare for a smooth mix.' },
        { title: 'Music Producers & Songwriters', description: 'Capturing the natural feel of a groove or rhythm idea tapped out by hand, then snapping the project tempo to match.' },
        { title: 'Dance & Choreography Teachers', description: 'Tapping along to a song during class to instantly know the BPM and communicate tempo to students without stopping the music.' },
        { title: 'Game Developers & Audio Designers', description: 'Tapping the beat of a reference track to determine tempo for procedural music systems or sync-to-beat gameplay mechanics.' },
      ],
    },
    'lufs-meter': {
      howItWorks: 'Upload any audio file and click "Measure loudness". The tool implements the full ITU-R BS.1770-4 pipeline in your browser: it applies a two-stage K-weighting filter (a high-shelf pre-filter at ~1682 Hz and a high-pass filter at ~38 Hz) to each channel, computes mean square power in overlapping 400 ms blocks, applies an absolute gate at -70 LKFS and a relative gate at -10 LU below the ungated mean, then calculates integrated loudness. Short-term and momentary peaks are derived from 3 s and 400 ms blocks respectively.',
      features: [
        'Full ITU-R BS.1770-4 K-weighting filter implementation',
        'Integrated loudness (LUFS) with absolute and relative gating',
        'Momentary peak LUFS (max 400 ms block)',
        'Short-term peak LUFS (max 3 s block)',
        'True peak approximation (dBTP)',
        'Loudness Range (LRA) — 10th–95th percentile spread',
        'Platform comparison table: Spotify, Apple Music, YouTube, Tidal, Amazon Music, SoundCloud, Netflix, EBU R128',
        '100% browser-based — your audio never leaves your device',
      ],
      whoIsItFor: [
        { title: 'Music Producers & Mixing Engineers', description: 'Checking final masters against streaming platform loudness targets (-14 LUFS for Spotify/YouTube, -16 LUFS for Apple Music) before delivery to avoid automatic gain reduction.' },
        { title: 'Mastering Engineers', description: 'Verifying that delivered masters meet client loudness specifications and platform normalization targets, including true peak limits and LRA requirements.' },
        { title: 'Podcast & Voice-Over Producers', description: 'Ensuring speech audio meets broadcast dialogue standards (-23 LUFS for broadcast, -16 LUFS for podcasts) for consistent playback across listening environments.' },
        { title: 'Video & Film Post-Production', description: 'Checking dialogue and music loudness against Netflix (-27 LUFS) or broadcast EBU R128 (-23 LUFS) delivery specifications.' },
        { title: 'Independent Artists & Bedroom Producers', description: 'Getting professional loudness analysis without expensive metering plugins — understanding whether a mix is too hot or too quiet for streaming before release.' },
      ],
    },
    'caesar-cipher-decoder': {
      howItWorks: 'Type or paste ciphertext into the input box. Use the shift slider (1–25) or +/− buttons to set the shift value, then select Decode to reverse the shift or Encode to apply it. The output updates instantly. If you do not know the shift, click "Show all 25 shifts" to reveal every possible decoded version simultaneously, each scored by English-language likelihood. The most probable shift is marked with a star — click it to apply.',
      features: [
        'Shift slider from 1 to 25 with keyboard-accessible +/− buttons',
        'Encode and Decode modes — switch without clearing text',
        '"13 = ROT13" label on the slider highlights the self-inverse shift',
        'Best-guess chip auto-detects the most likely shift for unknown ciphers',
        'Brute-force panel shows all 25 shifts ranked by English-likelihood score',
        'Click any brute-force row to instantly apply that shift',
        'Copy to clipboard and clear buttons',
        '100% browser-based — your text never leaves your device',
      ],
      whoIsItFor: [
        { title: 'Puzzle & Escape Room Enthusiasts', description: 'Cracking Caesar-shifted clues, hints, and answers without knowing the shift in advance — just paste the ciphertext and use brute-force mode.' },
        { title: 'CTF Competitors', description: 'Quickly testing all 25 Caesar shifts against captured ciphertext during Capture the Flag cryptography challenges.' },
        { title: 'Students & Cryptography Learners', description: 'Learning how Caesar ciphers work by encoding and decoding messages, exploring all 25 shift possibilities, and seeing how English-likelihood scoring identifies plaintext.' },
        { title: 'Teachers & Educators', description: 'Creating and grading Caesar cipher exercises by encoding messages with a chosen shift and decoding submitted answers.' },
        { title: 'Writers & Game Designers', description: 'Encoding secret messages, puzzle answers, or in-game lore with any shift value and verifying the ciphertext is correctly reversible.' },
      ],
    },
    'morse-code-decoder-and-encoder': {
      howItWorks: 'Select "Text → Morse" to encode or "Morse → Text" to decode using the mode toggle. Type or paste your message into the input box and the translation appears instantly in the output panel. Click "Play audio" to hear the Morse code as actual beeps — useful for learning or verifying. Use the Swap button to move the output back to input and continue chaining translations.',
      features: [
        'Real-time encoding: text to Morse code as you type',
        'Real-time decoding: Morse code to text as you type',
        'Audio playback at 15 WPM — hear the actual Morse beeps',
        'Supports full A–Z alphabet, digits 0–9, and common punctuation',
        'Swap button to flip input and output and reverse direction',
        'Copy to clipboard with one click',
        '100% browser-based — no file uploads',
        'No sign-up required',
      ],
      whoIsItFor: [
        { title: 'Ham Radio Operators & Enthusiasts', description: 'Encoding messages to practice Morse transmission or decoding received transmissions to verify their content.' },
        { title: 'Students & Educators', description: 'Learning the Morse code alphabet interactively — type a letter and immediately hear and see its Morse representation.' },
        { title: 'Puzzle & Escape Room Players', description: 'Decoding Morse code clues embedded in puzzles, escape rooms, ARGs, or geocaching hides.' },
        { title: 'Emergency Preparedness Enthusiasts', description: 'Practising encoding SOS and other emergency signals in Morse code for survival communication scenarios.' },
        { title: 'Developers & Accessibility Researchers', description: 'Testing Morse code input methods for accessibility applications, or verifying Morse encoding in software projects.' },
      ],
    },
    'saml-encoder': {
      howItWorks: 'Select the SAML type (SAMLRequest or SAMLResponse) and mode (Encode or Decode). To decode: paste the raw parameter value — URL-decoding is applied automatically, then the tool Base64-decodes and (for SAMLRequest) inflates the deflated payload to reveal the XML. To encode: paste your XML and the tool applies raw DEFLATE compression (for SAMLRequest) or skips compression (for SAMLResponse), then Base64-encodes the result. An optional URL-encode step can be applied for use in redirect URLs.',
      features: [
        'Decodes SAMLRequest (deflate-raw + Base64) back to XML',
        'Decodes SAMLResponse (Base64 only) back to XML',
        'Encodes XML to SAMLRequest or SAMLResponse format',
        'Automatic URL-decoding on paste — no manual step needed',
        'Optional URL-encode output for use in redirect URLs',
        'Pretty-prints decoded XML for readability',
        'Swap button to reverse encode/decode direction',
        '100% browser-based using CompressionStream API — no server uploads',
      ],
      whoIsItFor: [
        { title: 'Identity & SSO Engineers', description: 'Debugging SAML SSO flows by decoding SAMLRequest and SAMLResponse parameters to inspect the XML assertions, conditions, and attribute statements.' },
        { title: 'Security Analysts & Pentesters', description: 'Inspecting SAML tokens during security assessments to identify misconfigured assertions, weak conditions, or missing signature validation.' },
        { title: 'Integration Developers', description: 'Encoding test XML into SAML format for simulating IdP or SP requests during development and integration testing of SAML-based systems.' },
        { title: 'IT Administrators', description: 'Troubleshooting SAML login failures by decoding the raw parameters captured from browser network logs or proxy tools like Burp Suite.' },
        { title: 'QA Engineers', description: 'Verifying that encoded SAML assertions match expected XML schemas and contain the correct attributes and conditions.' },
      ],
    },
    'base64-encoder-decoder': {
      howItWorks: 'Select a mode (Encode or Decode) and a charset (Standard or URL-safe). In Encode mode, type or paste any text — the tool converts it to UTF-8 bytes first, then produces the Base64 string instantly. In Decode mode, paste a Base64 string and the tool reverses the process, decoding the bytes back to readable UTF-8 text. Switch to URL-safe mode when your Base64 output will appear in a URL or filename — it replaces + with -, / with _, and omits = padding.',
      features: [
        'Encode any text to Standard Base64 (RFC 4648 §4)',
        'Encode to URL-safe Base64 (RFC 4648 §5) with - and _ instead of + and /',
        'Decode Standard and URL-safe Base64 back to text',
        'Full UTF-8 support — handles emoji, accented letters, CJK, and all Unicode',
        'Shows input/output character counts and encoding size ratio',
        'Swap button to instantly flip encode ↔ decode with current output',
        'Clear error messages for invalid Base64 input',
        '100% browser-based — no data leaves your device',
      ],
      whoIsItFor: [
        { title: 'Developers & Engineers', description: 'Encoding API keys, tokens, binary payloads, and credentials for use in HTTP headers, JSON configs, or environment variables.' },
        { title: 'Security Analysts', description: 'Decoding Base64-encoded payloads found in malware samples, phishing emails, SAML assertions, or JWT tokens during security analysis.' },
        { title: 'Web Developers', description: 'Encoding images or fonts as Base64 data URIs for embedding directly in HTML/CSS, or decoding Base64 strings from API responses.' },
        { title: 'DevOps & SREs', description: 'Decoding Kubernetes secrets (which are Base64-encoded), Docker credentials, or TLS certificate data stored in base64 format.' },
        { title: 'Students & Learners', description: 'Understanding how Base64 encoding works as a fundamental part of learning about data encoding, email protocols (MIME), and web security.' },
      ],
    },
    'ascii-decoder': {
      howItWorks: 'Choose a mode (Decode or Encode) and a number format (Decimal, Hex, Binary, or Octal). In Decode mode, paste space- or comma-separated ASCII codes and the tool converts each code to the corresponding character. In Encode mode, type any ASCII text and the tool outputs the numeric codes in your chosen format with your preferred separator. Invalid codes and non-ASCII characters are flagged with descriptive error messages. Click any row in the ASCII reference table to insert that character or code directly into the input.',
      features: [
        'Decode decimal, hex, binary, or octal ASCII codes to text',
        'Encode any ASCII text to codes in any supported format',
        'Handles space-, comma-, and newline-separated token input',
        'Separator options for output: Space, Comma, Newline, or None',
        'Descriptive error messages for invalid or out-of-range codes',
        'Clickable ASCII reference table (characters 32–126)',
        'Swap button to flip input and output instantly',
        'Copy output to clipboard in one click',
        '100% browser-based — no data leaves your device',
      ],
      whoIsItFor: [
        { title: 'Developers & Programmers', description: 'Quickly decoding ASCII code dumps from logs, network captures, or debugging sessions to readable text without writing a script.' },
        { title: 'Students & Educators', description: 'Learning and teaching character encoding fundamentals — how letters map to numbers in decimal, hex, binary, and octal bases.' },
        { title: 'CTF & Puzzle Solvers', description: 'Decoding ASCII-encoded strings in Capture the Flag challenges, escape rooms, and cipher puzzles.' },
        { title: 'Security Analysts', description: 'Decoding obfuscated payloads or shellcode stored as ASCII decimal or hex sequences during malware analysis.' },
        { title: 'Hobbyist Coders', description: 'Exploring how computers represent text as numbers and experimenting with different numeric bases.' },
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
    'gradient-maker-from-image': {
      howItWorks: 'Upload any JPEG, PNG, WebP, or GIF image. The tool draws it onto an HTML5 Canvas, samples the pixel data, and runs k-means clustering to identify the most dominant colors. Those colors are sorted by luminance and arranged as gradient color stops. Choose Linear, Radial, or Conic gradient type, set the direction, adjust the palette swatch count, and copy the CSS gradient string or hex palette with one click — all inside your browser.',
      features: [
        'K-means color extraction from any uploaded image',
        'Extract 2–8 dominant colors with adjustable slider',
        'Colors sorted by luminance for a natural gradient flow',
        'Linear, radial, and conic gradient types',
        '8-direction compass for linear gradient angle',
        '3–12 palette swatches generated through RGB interpolation',
        'Click any color stop or swatch to copy its hex value',
        'Copy CSS gradient string and hex palette list to clipboard',
        '100% browser-based — image never leaves your device',
        'No sign-up, no watermarks, no file size limits',
      ],
      whoIsItFor: [
        { title: 'UI/UX Designers', description: 'Matching website gradients to a brand photo or hero image by extracting its exact dominant colors and converting them to CSS.' },
        { title: 'Web Developers', description: 'Generating CSS gradient backgrounds that complement a product image or photography without manual color picking.' },
        { title: 'Brand Designers', description: 'Building consistent color palettes sourced directly from brand photography or mood board images.' },
        { title: 'Social Media Creators', description: 'Creating gradient backgrounds for posts, stories, and thumbnails that match the colors of a featured photo.' },
        { title: 'Digital Artists', description: 'Deriving color palettes from reference images or artwork to use in Figma, Sketch, or Adobe tools.' },
      ],
    },
    'gradient-palette-generator': {
      howItWorks: 'Add between 2 and 6 color stops using the color pickers, then drag the position sliders to control where each color sits along the gradient. Choose Linear, Radial, or Conic gradient type and — for linear gradients — pick the direction using the 8-point compass. Adjust the Palette Swatches slider (3–12 steps) to expand or reduce the discrete color steps generated from your gradient. The live preview bar at the top updates instantly. Copy the ready-to-paste CSS gradient string or the full hex palette list with one click.',
      features: [
        'Up to 6 color stops with position control (0–100%)',
        '4-color gradient default targeting "4 color gradient generator" searches',
        'Linear, radial, and conic gradient types',
        '8-direction compass for linear gradients',
        '3–12 palette swatches generated from gradient interpolation',
        '6 one-click presets: Sunset, Ocean, Forest, Aurora, 4-Stop, Neon',
        'Random palette generator for instant inspiration',
        'Copy CSS gradient string and hex palette list to clipboard',
        'Click any swatch to copy its hex value instantly',
        '100% browser-based — no uploads, no sign-up',
      ],
      whoIsItFor: [
        { title: 'UI/UX Designers', description: 'Generating background gradients, button fills, and card overlays for web and app interfaces — then exporting ready-to-use CSS.' },
        { title: 'Web Developers', description: 'Copying CSS gradient strings directly into stylesheets, Tailwind configs, or CSS-in-JS without manual calculations.' },
        { title: 'Brand & Graphic Designers', description: 'Building consistent multi-color palettes that transition smoothly for presentations, print layouts, and social media graphics.' },
        { title: 'Digital Artists & Illustrators', description: 'Exploring color harmony and generating swatch palettes that can be imported into Figma, Sketch, or Adobe tools.' },
        { title: 'Social Media Creators', description: 'Creating gradient backgrounds for Instagram stories, YouTube thumbnails, and banner images using aesthetically matched color sets.' },
      ],
    },
    'hackathon-team-name-generator': {
      howItWorks: 'Choose a theme (Tech, Space, Nature, Mythology, Animals, or Puns), set how many names you want, and click Generate. The tool combines themed adjectives and nouns to produce creative team names instantly. Click any name to copy it, or use Copy All to grab the full list.',
      features: [
        'Six themes: Tech, Space, Nature, Mythology, Animals, and Puns',
        'Generate 1–50 names at once',
        'One-click copy for individual names or the full list',
        'Instant results — no page reload',
        'Works offline, no sign-up needed',
        'Regenerate as many times as you like',
      ],
      whoIsItFor: [
        { title: 'Hackathon Participants', description: 'Quickly settling on a memorable team name so you can get back to building your project.' },
        { title: 'Event Organisers', description: 'Generating a pool of pre-approved team name options to offer participants at the start of a hackathon.' },
        { title: 'Student Teams', description: 'Finding a fun name for class projects, coding competitions, and group assignments.' },
      ],
    },
    'bubble-text-generator': {
      howItWorks: 'Type or paste any text into the input field and the bubble text generator instantly converts it into 8 different bubble letter styles. Click Copy to grab any style to your clipboard, Preview to see it large, or Tweet to share directly on Twitter/X.',
      features: [
        '8 unique bubble text styles — circled, black bubble, alternating, parenthesis, squared, keycap, fullwidth, double struck',
        'Instant real-time conversion as you type',
        'One-click Copy to clipboard for every style',
        'Full-size Preview modal for each style',
        'Direct Tweet button to share on Twitter/X',
        'Supports letters, numbers, and spaces',
        'Works on Instagram, Discord, TikTok, WhatsApp, and more',
        'No sign-up required — free and instant',
      ],
      whoIsItFor: [
        { title: 'Social Media Creators', description: 'Stand out on Instagram, TikTok, and Twitter with bubble letters in bios, captions, and usernames.' },
        { title: 'Discord & Gaming Communities', description: 'Use bubble text in server names, channel descriptions, and messages for a unique visual identity.' },
        { title: 'Content Creators & Streamers', description: 'Add flair to YouTube descriptions, Twitch bios, and stream panels without design software.' },
        { title: 'Students & Educators', description: 'Create visually engaging notes and flashcards with bubble text to highlight key terms.' },
      ],
    },
    'ai-slop-checker': {
      howItWorks: 'Paste any text or upload an image, then click "Check." The AI Slop Checker sends your content to an advanced language model that analyzes linguistic patterns, stylistic fingerprints, and visual artifacts to determine whether a human or AI created it. Results include a 0–100 confidence score, a clear verdict, specific detected patterns, readability scores for text, and a one-click button to strip hidden AI fingerprints.',
      features: [
        'AI text detection — identifies ChatGPT, Gemini, Claude, and GPT-4 writing patterns',
        'AI image detection — spots deepfakes, AI faces, and synthetic photography',
        '0–100 AI confidence score with color-coded verdict label',
        'Detected patterns list with specific linguistic or visual signals',
        'Flesch Reading Ease score for pasted text',
        'Flesch-Kincaid Grade Level readability metric',
        'Clean AI Fingerprints — strips zero-width spaces, homoglyphs, and invisible characters',
        'Word count, sentence count, and avg sentence length stats',
        'Two-tab interface: Text analysis and Image analysis',
        'Drag-and-drop image upload',
        'No account required for basic checks',
        'Instant results — no queue, no waiting',
      ],
      whoIsItFor: [
        { title: 'Teachers & Professors', description: 'Detect AI-written student essays and homework without expensive plagiarism services. Paste any length of text for an instant AI score.' },
        { title: 'Journalists & Fact-Checkers', description: 'Verify whether quotes, press releases, or photos were human-authored. Check images for deepfake artifacts before publishing.' },
        { title: 'Online Daters', description: 'Check profile photos for AI-generated faces and detect chatbot-written messages before connecting with someone you met online.' },
        { title: 'HR & Hiring Teams', description: 'Screen cover letters and application essays for AI writing and verify headshots for AI generation artifacts.' },
      ],
    },
    'structural-formula-calculator': {
      howItWorks: 'Select a molecule from the library of 40+ compounds (searchable by name, formula, or SMILES, filterable by category) or switch to Custom SMILES mode and enter any valid SMILES string. The 2D structural formula renders instantly showing all atoms, bonds, and spatial arrangement. The properties panel displays molecular formula, molecular weight, bond counts, and a molecule description. In Custom SMILES mode, the tool detects functional groups and counts heavy atoms from your input. Toggle between light and dark canvas themes and download the structural diagram as a PNG image.',
      features: [
        '40+ molecule library: inorganic, hydrocarbons, aromatic, alcohols, carboxylic acids, aldehydes, ketones, sugars, amino acids, drugs, and more',
        'Custom SMILES input — render any molecule with valid SMILES notation',
        'Real-time 2D structural formula rendering with SmilesDrawer',
        'CPK color-coded atoms: oxygen (red), nitrogen (blue), sulfur (yellow), phosphorus (orange)',
        'Single, double, triple, and aromatic bond rendering',
        'Molecular properties: formula, molecular weight, bond counts, heavy atom count',
        'Functional group detection for custom SMILES (hydroxyl, carbonyl, acid, amide, amine, alkene, alkyne, aromatic, and more)',
        'Light and dark canvas themes',
        'Download structural diagram as PNG',
        'No sign-up required — free and instant',
      ],
      whoIsItFor: [
        { title: 'Chemistry Students', description: 'Visualize structural formulas of molecules you are studying and identify functional groups, bond types, and molecular properties.' },
        { title: 'Teachers & Educators', description: 'Generate 2D structural diagrams for slides and handouts without a full chemistry drawing application. Download as PNG.' },
        { title: 'Researchers & Chemists', description: 'Quickly verify SMILES notation by rendering the structure and identifying functional groups.' },
        { title: 'Pharmacy & Medical Students', description: 'Examine structural formulas of common drugs — aspirin, ibuprofen, paracetamol, caffeine, dopamine — with their functional groups.' },
      ],
    },
    'discriminant-formula-calculator': {
      howItWorks: 'Enter the three coefficients a, b, and c of your quadratic equation in the form ax² + bx + c = 0. The calculator instantly computes the discriminant D = b² − 4ac, shows full step-by-step working, identifies the nature of the roots (two distinct real, one repeated, or two complex), and solves for the roots using the quadratic formula. Exact rational roots are shown as simplified fractions; irrational roots as decimal approximations.',
      features: [
        'Real-time calculation — updates instantly as you type',
        'Full step-by-step discriminant working (6 numbered steps)',
        'Color-coded root nature result (two real, repeated, or complex)',
        'Exact rational roots shown as simplified fractions',
        'Decimal approximations for irrational roots (6 d.p.)',
        'Complex roots displayed in a ± bi form',
        'Quadratic formula shown with substituted values',
        'Parabola interpretation (upward/downward, x-axis relationship)',
        'Copy individual results or all results at once',
        'Handles negative, fractional, and decimal coefficients',
      ],
      whoIsItFor: [
        { title: 'High School Students', description: 'Check discriminant calculations for algebra homework and follow step-by-step working to understand the method.' },
        { title: 'Teachers & Tutors', description: 'Generate worked examples for any quadratic equation instantly for use in lessons or to check student answers.' },
        { title: 'Exam Preparation', description: 'Practice identifying the nature of roots across many equations efficiently before exams.' },
        { title: 'Engineers & Scientists', description: 'Evaluate discriminants from characteristic equations and systems analysis without manual calculation.' },
      ],
    },
    'jpg-to-grayscale-converter': {
      howItWorks: 'Upload any JPG, PNG, or WebP image. The tool draws your image onto an HTML canvas and converts every pixel to grayscale using the luminosity formula (0.299 × R + 0.587 × G + 0.114 × B). The result is displayed side-by-side with the original so you can compare instantly. Adjust the JPG quality slider to choose between smaller file size and maximum sharpness, then download your grayscale JPG. Everything runs in your browser — your image is never sent to a server.',
      features: [
        'Side-by-side before/after preview',
        'Luminosity formula for perceptually accurate grayscale',
        'Adjustable JPG output quality (50–100%)',
        'Before/after file size comparison with percentage change',
        'Image dimensions display',
        'Accepts JPG, PNG, WebP, BMP input — always outputs JPG',
        '100% browser-based — image never leaves your device',
        'No sign-up required — free and instant',
      ],
      whoIsItFor: [
        { title: 'Photographers', description: 'Convert color photos to black and white for a classic or dramatic aesthetic, or to prepare images for monochrome publications.' },
        { title: 'Web Designers', description: 'Convert images for UI mockups, grayscale placeholders, hover effects, or accessibility testing.' },
        { title: 'Content Creators', description: 'Create black-and-white social media images without opening a full photo editor.' },
        { title: 'Students & Educators', description: 'Prepare grayscale images for printed handouts and papers where color printing is unavailable or expensive.' },
      ],
    },
    'pdf-to-grayscale-converter': {
      howItWorks: 'Upload any PDF file (up to 100 MB). The tool renders each page using PDF.js at 2× resolution for sharpness, converts every pixel to grayscale using the luminosity formula (0.299 × R + 0.587 × G + 0.114 × B), then bundles all pages into a new PDF using jsPDF. Adjust the output quality slider to balance file size vs. sharpness. A preview of page 1 is shown after conversion. Download the finished grayscale PDF. Your file never leaves your browser.',
      features: [
        'Converts all pages of any multi-page PDF to grayscale',
        'Luminosity formula for perceptually accurate grayscale conversion',
        'Renders at 2× resolution for sharp, print-quality output',
        'Adjustable output quality — balance file size and visual fidelity',
        'Page 1 preview after conversion',
        'Progress bar with page-by-page status',
        '100% browser-based — PDF never uploaded to any server',
        'Supports PDFs up to 100 MB',
        'No sign-up required — free and instant',
      ],
      whoIsItFor: [
        { title: 'Office & Business Users', description: 'Reduce printing costs by converting color reports and presentations to grayscale before printing.' },
        { title: 'Students & Educators', description: 'Convert colorful handouts and slides to grayscale to save on printing costs or share on monochrome printers.' },
        { title: 'Designers & Publishers', description: 'Check how a designed PDF looks when printed in grayscale to identify readability issues before printing.' },
        { title: 'Legal & Administrative', description: 'Many legal filings and administrative submissions require black-and-white documents. Convert color PDFs to meet requirements.' },
      ],
    },
    'ai-uncrop-image': {
      howItWorks: 'Upload any PNG, JPG, or WebP image. Choose how many pixels to add to each edge — Top, Bottom, Left, and Right — in steps from 64 to 512 pixels. Optionally enter a prompt describing what should fill the new space (e.g. "blurry forest background"). Adjust the creativity slider: lower keeps the fill faithful to existing edges, higher allows more imaginative generation. Click "Uncrop Image" and AI outpainting generates seamless new content to fill the expanded canvas. Toggle between original and result to compare, then download as WebP.',
      features: [
        'Expand any edge independently — top, bottom, left, right',
        'Pixel increments from 64px to 512px per side',
        'Optional text prompt to guide what fills the new space',
        'Creativity slider — conservative to imaginative fill',
        'Live dimension preview showing new output size',
        'Before/after toggle to compare original and result',
        'Download result as high-quality WebP',
        'Supports PNG, JPG, and WebP uploads up to 20 MB',
        'No sign-up required',
      ],
      whoIsItFor: [
        { title: 'Photographers & Retouchers', description: 'Expand tightly cropped shots to give subjects more breathing room or recover composition space lost during cropping.' },
        { title: 'Social Media Managers', description: 'Convert portrait crops to landscape (or vice versa) for different platforms without reshooting. Fit images to banner dimensions.' },
        { title: 'E-commerce Sellers', description: 'Add white-space padding around product shots to match marketplace image ratio requirements.' },
        { title: 'Graphic Designers', description: 'Extend hero images for wider banners, add space for text overlays, or generate a larger background from a reference crop.' },
      ],
    },
    'ai-paragraph-expander': {
      howItWorks: 'Paste any text, choose a tone (professional, casual, academic, creative, or persuasive), expansion style (natural, descriptive, add examples, add context, formal, or simplified), and target length (2×, 3×, or 4×). Click "Expand Paragraph" and the AI rewrites your text into a longer, richer version while preserving the original meaning. Copy the result, regenerate for a different take, or use the output as input to expand further.',
      features: [
        '5 tone options — professional, casual, academic, creative, persuasive',
        '6 expansion styles — natural, descriptive, examples, context, formal, simplified',
        '3 target lengths — 2×, 3×, or 4× the original word count',
        'Live word count comparison with expansion ratio display',
        'One-click copy to clipboard',
        'Regenerate for a fresh alternative expansion',
        'Chain expand — use output as new input for further expansion',
        'Preserves core meaning, key facts, and original intent',
        'Works on emails, essays, product descriptions, social posts, and more',
        'No sign-up required — free and instant',
      ],
      whoIsItFor: [
        { title: 'Students & Academic Writers', description: 'Expand thesis statements and body paragraphs to meet word count requirements without losing academic tone.' },
        { title: 'Content Marketers & Bloggers', description: 'Turn bullet points and short notes into full paragraphs, blog posts, and product pages with the right tone.' },
        { title: 'Business Professionals', description: 'Expand concise email drafts and proposal outlines into polished professional communications.' },
        { title: 'Non-Native English Speakers', description: 'Write a simple version, then expand into natural, fluent English with your chosen professional tone.' },
      ],
    },
    'audio-spectrogram-decoder': {
      howItWorks: 'Upload or drag an image of a spectrogram into the tool. It analyzes the frequency bands and timing patterns to extract hidden text or data encoded within the audio visualization. Results are displayed instantly without sending any data to servers.',
      features: ['Decode hidden messages from spectrogram images', 'Supports PNG, JPG, and BMP spectrogram formats', 'Frequency band analysis and pattern recognition', 'Instant browser-based decoding — no uploads', 'Works with spectrograms from common audio editors', 'Copy decoded output to clipboard'],
      whoIsItFor: [
        { title: 'CTF Competitors', description: 'Solving steganography and audio challenges that hide flags inside spectrogram images.' },
        { title: 'Security Researchers', description: 'Investigating covert audio communication channels and steganographic techniques.' },
        { title: 'Musicians & Producers', description: 'Exploring artistic audio-visual encoding used in album art and music puzzles.' },
        { title: 'Educators', description: 'Teaching students about signal processing and hidden-data techniques.' },
      ],
    },
    'camel-case-converter': {
      howItWorks: 'Paste any text into the input and select your target case format. The tool instantly converts between camelCase, PascalCase, snake_case, kebab-case, SCREAMING_SNAKE_CASE, and plain text — preserving words and removing unwanted punctuation automatically.',
      features: ['Convert to camelCase, PascalCase, snake_case, kebab-case', 'SCREAMING_SNAKE_CASE and Title Case support', 'Handles spaces, hyphens, underscores as word separators', 'Real-time conversion as you type', 'Batch convert multiple identifiers at once', 'Copy result to clipboard instantly'],
      whoIsItFor: [
        { title: 'Software Developers', description: 'Quickly reformatting variable names, function names, and identifiers across different coding conventions.' },
        { title: 'API Designers', description: 'Converting field names between JSON (camelCase) and database (snake_case) naming styles.' },
        { title: 'Technical Writers', description: 'Standardizing terminology and identifiers in documentation and style guides.' },
        { title: 'Data Engineers', description: 'Normalizing column and field names when migrating data between systems with different conventions.' },
      ],
    },
    'convert-ogg-to-wav': {
      howItWorks: 'Select or drag an OGG file into the tool. It decodes the Ogg Vorbis audio entirely in your browser using the Web Audio API and re-encodes it to uncompressed WAV format. No files leave your device — download the converted WAV instantly.',
      features: ['Convert OGG to WAV entirely in the browser', 'Supports OGG Vorbis (most common OGG variant)', 'Preserves original sample rate and channel count', 'No file size limit imposed by servers', 'Download converted WAV immediately', 'Zero data sent to external servers — fully private'],
      whoIsItFor: [
        { title: 'Game Developers', description: 'Converting OGG audio assets to WAV for use in engines or tools that require uncompressed audio.' },
        { title: 'Audio Engineers', description: 'Working with clients who deliver OGG files but need WAV for professional editing software.' },
        { title: 'Podcast Producers', description: 'Converting listener-submitted OGG recordings to a universally compatible WAV format.' },
        { title: 'Musicians', description: 'Preparing OGG stems for import into DAWs that prefer or require WAV input.' },
      ],
    },
    'letter-number-converter': {
      howItWorks: 'Type or paste text into the input panel and select your encoding format — A1Z26 (A=1), A0Z25 (A=0), ASCII, hexadecimal, or binary. The converter instantly outputs the number sequence. Switch to decode mode to reverse the process and convert numbers back to letters.',
      features: ['A1Z26 (A=1 to Z=26) and A0Z25 (A=0 to Z=25) encoding', 'ASCII, hexadecimal, and binary conversion', 'Bidirectional — encode letters or decode numbers', 'Supports 25+ languages and character sets', 'Real-time results as you type', 'Copy output and download results'],
      whoIsItFor: [
        { title: 'Puzzle Enthusiasts', description: 'Encoding and decoding letter-number substitution ciphers for escape rooms, crosswords, and mystery games.' },
        { title: 'Students', description: 'Learning about character encoding, number bases, and ASCII in computer science classes.' },
        { title: 'Teachers', description: 'Creating number-coded activities, worksheets, and classroom cipher challenges.' },
        { title: 'Developers', description: 'Quickly testing letter-to-number encoding logic without writing code.' },
      ],
    },
    'longest-word-using-these-letters-solver': {
      howItWorks: 'Enter your available letters into the input field. The solver searches its dictionary for the longest valid English word that can be formed using only those letters, without repeating any letter more than it appears in your set. Results are ranked by word length.',
      features: ['Finds the longest possible word from your letters', 'Full English dictionary with 170,000+ words', 'Shows all words ranked from longest to shortest', 'Filter results by minimum word length', 'Works with any combination of letters including duplicates', 'Instant results with no page reload'],
      whoIsItFor: [
        { title: 'Scrabble Players', description: 'Maximizing point-scoring by finding the longest word playable from your current rack.' },
        { title: 'Words with Friends Players', description: 'Discovering high-value long words from a hand of mixed letters.' },
        { title: 'Word Game Enthusiasts', description: 'Solving challenges that ask you to make the longest word from a given set of letters.' },
        { title: 'Educators', description: 'Creating vocabulary exercises that challenge students to find long words from letter sets.' },
      ],
    },
    'playfair-cipher-solver': {
      howItWorks: 'Enter your keyword to generate the 5×5 Playfair key square. Then type your plaintext to encrypt it, or paste ciphertext to decrypt. The tool handles I/J merging and the digraph substitution rules automatically, showing the full key square and step-by-step output.',
      features: ['Encrypt and decrypt with any Playfair keyword', 'Automatic 5×5 key square generation', 'Handles I/J equivalence and double-letter rules', 'Displays the full key square visually', 'Step-by-step digraph breakdown', 'Supports uppercase and lowercase input'],
      whoIsItFor: [
        { title: 'Cryptography Students', description: 'Learning the Playfair cipher algorithm used historically in WWI and WWII communications.' },
        { title: 'Puzzle Solvers', description: 'Deciphering Playfair-encoded messages in mystery games, escape rooms, and puzzle hunts.' },
        { title: 'History Enthusiasts', description: 'Exploring classical cryptography and the role of the Playfair cipher in military history.' },
        { title: 'Teachers', description: 'Demonstrating digraph substitution ciphers in cryptography and mathematics classes.' },
      ],
    },
    'rgb-to-pantone-color-converter': {
      howItWorks: 'Enter an RGB color value (0–255 for each channel) or paste a hex code. The tool calculates the perceptual color distance (delta-E) between your input and every color in the Pantone library, returning the closest Pantone match with its name and code.',
      features: ['Match any RGB or hex color to the nearest Pantone swatch', 'Delta-E perceptual color distance algorithm', 'Shows top 5 closest Pantone matches with color previews', 'Supports both Pantone Coated and Uncoated swatches', 'Displays Pantone code, name, and hex equivalent', 'Instant results — no account required'],
      whoIsItFor: [
        { title: 'Graphic Designers', description: 'Bridging the gap between screen RGB colors and print Pantone colors for brand consistency.' },
        { title: 'Brand Managers', description: 'Finding the Pantone equivalent of a digital brand color for use in printed materials.' },
        { title: 'Print Production Specialists', description: 'Ensuring color accuracy when handing off digital designs to print vendors who require Pantone specifications.' },
        { title: 'Marketing Teams', description: 'Standardizing brand colors across digital and physical media using Pantone as the common reference.' },
      ],
    },
    'txt-to-ini-converter': {
      howItWorks: 'Paste your plain text into the left panel and the converter instantly produces a valid INI file in the right panel. Use the options bar to choose your delimiter character (=, :, tab, or space), set the default section name, pick a comment character (; or #), and toggle extras like blank-line section splitting, whitespace trimming, and value quoting. Click Download .ini to save the result, or Copy to grab it for your clipboard.',
      features: [
        'Real-time TXT → INI conversion as you type',
        'Configurable delimiter: =, :, tab, or space',
        'Blank line = new section toggle for automatic grouping',
        'Custom default section name (e.g. General, Config, App)',
        'Comment character choice: ; or #',
        'Optional value quoting for strings with spaces',
        'Whitespace trimming for clean key-value pairs',
        'Download converted file as .ini',
        'Copy input or output to clipboard',
        'Sample TXT with realistic database / server / cache sections',
        'Fully private — no file is uploaded to any server',
      ],
      whoIsItFor: [
        { title: 'Developers', description: 'Converting plain key-value config files or environment dumps into structured INI files for use with parsers and frameworks.' },
        { title: 'System Administrators', description: 'Reformatting flat configuration exports into sectioned INI files for application deployment and server configuration.' },
        { title: 'DevOps Engineers', description: 'Transforming TXT-based config templates into INI format during CI/CD pipeline setup and environment provisioning.' },
        { title: 'Students & Learners', description: 'Understanding the INI file format by seeing a live conversion of familiar key-value text into proper sections and entries.' },
      ],
    },
    'xml-to-ini-converter': {
      howItWorks: 'Paste your XML into the left panel. The converter uses the browser\'s built-in XML parser to read the document, then maps the structure to INI format: top-level child elements become INI sections, and their child elements become key = value pairs. Deeper nesting is either flattened with dotted key names (parent.child = value) or kept under the nearest section — your choice. XML attributes can be included with a configurable prefix. Copy the result or download it as a .ini file.',
      features: [
        'Real-time XML → INI conversion as you type or paste',
        'Two nesting modes: top-level elements as sections, or full dotted-key flattening',
        'Optional XML attribute inclusion with configurable prefix (e.g. @id, @type)',
        'Delimiter choice: = or :',
        'Comment character choice: ; or #',
        'Inline XML validation with clear error messages',
        'Download converted file as .ini',
        'Copy XML input or INI output to clipboard',
        'Sample XML with database / server / cache sections',
        'Fully private — parsed entirely in your browser, nothing uploaded',
      ],
      whoIsItFor: [
        { title: 'Developers', description: 'Converting XML-based application configs (Spring, .NET, Maven) to INI format for tools and frameworks that require it.' },
        { title: 'System Administrators', description: 'Reformatting XML configuration exports from servers and services into the simpler INI format for legacy application deployment.' },
        { title: 'DevOps Engineers', description: 'Translating XML pipeline and environment configurations into INI files during CI/CD setup or cross-platform migrations.' },
        { title: 'Students & Learners', description: 'Understanding the structural differences between XML and INI by seeing a live, side-by-side conversion.' },
      ],
    },
    'xps-to-pdf-converter': {
      howItWorks: 'Upload your XPS (XML Paper Specification) file and the tool converts it to a standard PDF document entirely in your browser. It parses the XPS XML structure, renders each page, and outputs a downloadable PDF — no software installation or server upload required.',
      features: ['Convert XPS and OXPS files to PDF in the browser', 'Preserves text, images, and page layout', 'Multi-page XPS documents fully supported', 'No file upload — conversion happens locally', 'Download the converted PDF instantly', 'Free with no file size limits imposed by servers'],
      whoIsItFor: [
        { title: 'Windows Users', description: 'Converting XPS documents created by Windows print-to-XPS into the universally compatible PDF format.' },
        { title: 'Office Workers', description: 'Opening and sharing XPS files received from colleagues without needing XPS Viewer software.' },
        { title: 'Students', description: 'Converting XPS homework or exam submissions to PDF for easier upload and sharing.' },
        { title: 'IT Professionals', description: 'Batch-converting legacy XPS documents in workflows that have migrated to PDF-based systems.' },
      ],
    },
  }

  return toolDataMap[toolId] || {
    howItWorks: 'Use the interactive tool on the left to encode, decode, or solve your input. The tool provides real-time results as you type or make selections.',
    features: ['Real-time processing with instant results', 'Works completely offline - no data sent to servers', 'Copy results to clipboard easily', 'Free and always available'],
    whoIsItFor: []
  }
}
