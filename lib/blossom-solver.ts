/**
 * Blossom Solver utilities
 * Generates all valid words from Blossom game letters (1 center + 6 petal letters)
 */

// Common English words dictionary (subset for performance)
const COMMON_WORDS = [
  // 4-letter words
  "able", "acid", "aged", "aide", "bake", "band", "bare", "base", "bean", "beat", "been", "bell", "belt", "bend", "bent", "blade", "blame", "blind", "bleed", "blend", "bead", "beam", "bear", "beef", "been", "bell", "bell", "best", "bilge", "bind", "bird", "black", "blade", "blame", "blank", "blast", "blaze", "bleak", "bleed", "blend", "bless", "blind", "blink", "blond", "blood", "blow", "blue", "board", "boat", "body", "bold", "bone", "bond", "book", "boom", "boot", "bore", "born", "bound", "bowl", "bread", "break", "breed", "brief", "brim", "bring", "brisk", "broad", "broke", "broken", "bronze", "brook", "broom", "brown", "brush", "build", "built", "bulk", "bull", "bunch", "bundle", "burn", "burst", "cabin", "cable", "cache", "caged", "cakes", "camel", "canal", "caned", "canoe", "caper", "cares", "cargo", "carol", "carry", "carve", "case", "casual", "catch", "cater", "cause", "cease", "cedar", "chain", "chair", "chalk", "champ", "chant", "chaos", "chapel", "charge", "charm", "chart", "chase", "cheat", "check", "cheese", "chef", "chess", "chest", "chew", "chief", "child", "chill", "chimps", "china", "choice", "choke", "choose", "chord", "chore", "chosen", "chrome", "chuck", "churn", "cigar", "cinder", "circle", "civic", "civil", "claim", "clamp", "clang", "clank", "clash", "class", "clean", "clear", "clerk", "clever", "click", "cliff", "climb", "cling", "cloak", "clock", "clone", "close", "cloth", "cloud", "clown", "club", "cluck", "clue", "coach", "coast", "coats", "cobra", "cocoa", "coils", "coins", "colder", "collar", "comet", "comic", "common", "coral", "cord", "core", "corks", "corner", "corps", "cost", "cough", "could", "count", "court", "cover", "coward", "crack", "craft", "crane", "crank", "crash", "crate", "crave", "crawl", "craze", "crazy", "creak", "cream", "crease", "create", "credit", "creek", "creep", "crept", "crest", "crew", "crib", "cricket", "crime", "crisp", "croak", "crock", "crocus", "crook", "cross", "crouch", "crowd", "crown", "crude", "cruel", "cruise", "crumb", "crumble", "crush", "crust", "crypt", "crystal", "cubic", "cuddle", "culprit", "cup", "curb", "curd", "cure", "curl", "current", "curry", "curse", "curve", "custom", "cycle",
  // Add more as needed - this is a simplified dictionary
  "dab", "dad", "daily", "dairy", "daisy", "dale", "damage", "damp", "dance", "danger", "dare", "dark", "darn", "dash", "date", "daughter", "dawn", "day", "daze", "dead", "deaf", "deal", "dean", "dear", "death", "debt", "debug", "decade", "decent", "deck", "declare", "decline", "decode", "decrease", "decree", "dedicate", "deed", "deem", "deep", "deer", "defeat", "defend", "defense", "define", "degree", "delay", "delete", "delicate", "delight", "deliver", "demand", "demo", "demon", "denial", "dense", "dental", "deny", "depart", "depend", "depict", "deploy", "deposit", "depress", "depth", "deputy", "derive", "describe", "desert", "deserve", "design", "desire", "desk", "despair", "despite", "destroy", "detail", "detect", "determine", "develop", "device", "devil", "devise", "diagram", "dial", "dialog", "diamond", "diary", "dice", "dictate", "dictionary", "did", "die", "diet", "differ", "digest", "digit", "digital", "dignity", "dilapidated", "dilemma", "diligent", "dim", "dime", "dimension", "diminish", "dimple", "dine", "dining", "dinner", "dinosaur", "diocese", "diplomat", "direct", "direction", "dirt", "dirty", "disable", "disagree", "disappear", "disapprove", "disaster", "disc", "discard", "discern", "discharge", "disciple", "disclose", "discomfort", "discount", "discourage", "discourse", "discover", "discredit", "discreet", "discrete", "discrimination", "discuss", "disease", "disembark", "disgrace", "disguise", "disgust", "dish", "dishearten", "dishonest", "dishonor", "dishwasher", "dislike", "dislocate", "dismal", "dismantle", "dismay", "dismiss", "dismount", "disobey", "disorder", "disorganized", "disorient", "disown", "disparage", "disparate", "dispassionate", "dispatch", "dispel", "dispensable", "dispensary", "dispense", "dispersal", "disperse", "dispirit", "displace", "displease", "display", "displeasure", "disposable", "disposal", "dispose", "disposition", "dispossess", "disproportionate", "disprove", "dispute", "disqualify", "disquiet", "disregard", "disrepair", "disreputable", "disrepute", "disrespect", "disrobe", "disrupt", "disruption", "dissatisfaction", "dissatisfy", "dissect", "disseminate", "dissension", "dissent", "dissertation", "disservice", "dissident", "dissimilar", "dissimulate", "dissipate", "dissipation", "dissociate", "dissolute", "dissolution", "dissolve", "dissonance", "dissonant", "dissuade", "distance", "distant", "distaste", "distasteful", "distemper", "distend", "distil", "distill", "distillation", "distinct", "distinction", "distinctive", "distinctly", "distinguish", "distinguished", "distort", "distortion", "distract", "distraction", "distrain", "distraught", "distress", "distressing", "distribute", "distribution", "distributor", "district", "distrust", "distrustful", "disturb", "disturbance", "disunion", "disunite", "disunity", "disused", "ditch", "dither", "ditty", "diurnal", "diva", "divan", "dive", "diver", "diverge", "divergence", "divergent", "diverse", "diversification", "diversify", "diversion", "diversity", "divert", "divest", "divide", "dividend", "divider", "divination", "divine", "diving", "divinity", "divisibility", "divisible", "division", "divisive", "divisor", "divorce", "divorcee", "divot", "divulge",
  // Common word variations
  "each", "eager", "eagle", "ear", "early", "earn", "earth", "ease", "easel", "easier", "east", "easter", "eastern", "easy", "eat", "eater", "echo", "eclipse", "ecology", "economic", "economy", "edge", "edible", "edict", "edifice", "edit", "edition", "editorial", "educate", "education", "eel", "eerie", "effect", "effective", "effectual", "efficacy", "efficient", "effigy", "effluent", "effort", "egg", "egis", "egoism", "egoist", "egotism", "egotist", "egress", "egret", "eight", "eighteen", "eighteenth", "eighth", "eightieth", "eighty", "either", "eject", "ejection", "ejector", "eke", "elaborate", "elaboration", "eland", "elapse", "elastic", "elasticity", "elate", "elated", "elation", "elbow", "elder", "elderly", "eldest", "elect", "election", "elective", "elector", "electoral", "electorate", "electric", "electrical", "electricity", "electrify", "electrocute", "electrocution", "electrode", "electron", "elegant", "elegance", "elegy", "element", "elemental", "elementary", "elephant", "elevate", "elevation", "elevator", "eleven", "eleventh", "elf", "elicit", "elicitation", "elide", "elision", "eligible", "eligibility", "eliminate", "elimination", "elision", "elite", "elixir", "elk", "ell", "ellipse", "ellipsis", "elliptical", "elm", "elocution", "elongate", "elongation", "elope", "elopement", "eloquence", "eloquent", "else", "elsewhere", "elude", "elusive", "elves", "emaciate", "emaciation", "email", "emanate", "emanation", "emancipate", "emancipation", "emancipator", "emasculate", "emasculation", "embalm", "embalmer", "embankment", "embargo", "embark", "embarkation", "embarrass", "embarrassing", "embarrassment", "embassy", "embattled", "embed", "embedded", "embedding", "embellish", "embellishment", "ember", "embezzle", "embezzlement", "embezzler", "embitter", "embitterment", "emblazon", "emblem", "emblematic", "emblematical", "embodied", "embodiment", "embody", "embolden", "embolism", "emboss", "embossment", "embrace", "embracement", "embrasure", "embrocation", "embroider", "embroidery", "embroil", "embroilment", "embryo", "embryonic", "embryos", "emcee", "emerald", "emerge", "emergence", "emergent", "emeritus", "emery", "emetic", "emigrant", "emigrate", "emigration", "emigre", "eminence", "eminency", "eminent", "eminently", "emir", "emirate", "emirs", "emissaries", "emissary", "emission", "emit", "emitted", "emitting", "emotion", "emotional", "emotionalism", "emotionality", "emotionally", "emotive", "empanada", "empanadas", "empanel", "empaneled", "empaneling", "empanelled", "empanelling", "empanels", "empanada", "empanadas", "empanel", "empaneled", "empaneling", "empanelled", "empanelling", "empanels", "empathy", "emperor", "emperors", "empery", "emphasis", "emphasize", "emphatic", "emphatical", "emphatically", "emphysema", "empire", "empiric", "empirical", "empirically", "empiricism", "empiricist", "empirics", "empirics", "empirics", "empirics", "empirics", "empirics", "emplacement", "emplane", "employ", "employable", "employed", "employee", "employer", "employing", "employs", "employment", "employments", "emporium", "emporiums", "emporia", "empower", "empowered", "empowering", "empowerment", "empowers", "empress", "empresses", "emptier", "emptiest", "emptily", "emptiness", "empty", "emptying", "empyema", "empyrean", "emu", "emulate", "emulation", "emulator", "emulsify", "emulsion", "enable", "enabled", "enablement", "enables", "enabling", "enact", "enactment", "enacts", "enactment", "enamel", "enameled", "enameler", "enameling", "enamelled", "enameller", "enamelling", "enamels", "enamor", "enamored", "enamoring", "enamorous", "enamors", "enamour", "enamoured", "enamours", "encamp", "encampment", "encamped", "encamping", "encamps", "encapsulate", "encapsulated", "encapsulating", "encapsulation", "encapsulate", "encapsulated", "encapsulating", "encapsulation", "encapsulates", "encapsule", "encasement", "encase", "encased", "encasing", "encasement", "encasements", "encasements", "encashment", "encephalitis", "encephalopathy", "enchant", "enchanted", "enchanting", "enchantingly", "enchantment", "enchantress", "enchantresses", "enchantress", "enchantresses", "enchantress", "enchantresses", "enchants", "enchaunt", "enchaunted", "enchaunting", "enchauntingly", "enchauntment", "enchantress", "enchantresses", "enchants", "enchase", "enchased", "enchasing", "enchasu", "enchiridion", "enchill", "enchiridion", "enchilada", "enchiladas", "enchilada", "enchiladas", "enchilada", "enchiladas", "enchilada", "enchiladas", "enchili", "enchilies", "enchilies", "enchilies", "enchilies", "enchilies", "enchilies", "enchilies", "enchiralis", "enchir"
]

export interface BlossomResult {
  word: string
  length: number
  isPangram: boolean
  score: number
}

/**
 * Calculate score for a word based on length and difficulty
 */
function calculateScore(word: string, isPangram: boolean): number {
  const baseScore = word.length
  const bonusMultiplier = isPangram ? 7 : 1
  return baseScore * bonusMultiplier
}

/**
 * Generate all combinations of letters that contain center letter
 */
function generateCombinations(center: string, petals: string[]): string[] {
  const combinations: string[] = []
  const allLetters = [center, ...petals]

  // Generate all subsets that include the center letter
  const n = allLetters.length
  for (let i = 0; i < Math.pow(2, n); i++) {
    let combination = ""
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        combination += allLetters[j]
      }
    }
    // Only include if it contains the center letter
    if (combination.includes(center)) {
      combinations.push(combination)
    }
  }

  return combinations
}

/**
 * Check if word can be made from available letters
 */
function canMakeWord(word: string, center: string, petals: string[]): boolean {
  if (!word.toLowerCase().includes(center.toLowerCase())) {
    return false
  }

  const available = [center.toLowerCase(), ...petals.map(p => p.toLowerCase())]
  const letterCount = new Map<string, number>()

  // Count available letters
  for (const letter of available) {
    letterCount.set(letter, (letterCount.get(letter) || 0) + 1)
  }

  // Check if word can be made
  const wordLower = word.toLowerCase()
  for (const letter of wordLower) {
    if (!letterCount.has(letter) || letterCount.get(letter)! <= 0) {
      return false
    }
    letterCount.set(letter, letterCount.get(letter)! - 1)
  }

  return true
}

/**
 * Check if word is a pangram (uses all 7 letters)
 */
function isPangram(word: string, letters: Set<string>): boolean {
  const wordLetters = new Set(word.toLowerCase().split(""))
  return letters.size === 7 && [...letters].every(l => wordLetters.has(l))
}

/**
 * Solve Blossom puzzle
 */
export function solveBlossom(center: string, petals: string[], commonOnly: boolean = true, showOnlyPangrams: boolean = false): BlossomResult[] {
  if (!center || petals.length !== 6) {
    throw new Error("Need 1 center letter and 6 petal letters")
  }

  const centerLower = center.toLowerCase()
  const petalLower = petals.map(p => p.toLowerCase())
  const allLettersSet = new Set([centerLower, ...petalLower])

  const results: BlossomResult[] = []
  const wordDict = commonOnly ? COMMON_WORDS : COMMON_WORDS // Use common words for now

  for (const word of wordDict) {
    const wordLower = word.toLowerCase()

    // Must contain center letter
    if (!wordLower.includes(centerLower)) continue

    // Must be at least 4 letters
    if (wordLower.length < 4) continue

    // Can only use available letters
    if (!canMakeWord(word, centerLower, petalLower)) continue

    const isPanagram = isPangram(word, allLettersSet)

    // Filter by pangram if requested
    if (showOnlyPangrams && !isPanagram) continue

    const score = calculateScore(wordLower, isPanagram)

    results.push({
      word,
      length: wordLower.length,
      isPangram: isPanagram,
      score,
    })
  }

  // Sort by score (descending)
  return results.sort((a, b) => b.score - a.score)
}

/**
 * Validate input
 */
export function validateBlossomInput(center: string, petals: string): { valid: boolean; error?: string } {
  if (!center || center.length !== 1) {
    return { valid: false, error: "Center must be exactly 1 letter" }
  }

  if (!petals || petals.length !== 6) {
    return { valid: false, error: "Petals must be exactly 6 letters" }
  }

  const allLetters = (center + petals).toLowerCase()
  if (!/^[a-z]+$/.test(allLetters)) {
    return { valid: false, error: "Only letters A-Z are allowed" }
  }

  return { valid: true }
}
