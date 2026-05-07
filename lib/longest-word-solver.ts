/**
 * Longest Word Using These Letters Solver
 * Finds valid words that can be made from provided letters
 */

// Common English words dictionary (subset for performance)
const ENGLISH_WORDS = [
  // 3-letter words
  "ace", "act", "add", "ado", "aft", "age", "ago", "aid", "ail", "aim", "air", "all", "amp", "and", "ant", "any", "ape", "arc", "are", "ark", "arm", "art", "ash", "ask", "asp", "ate", "awe", "axe", "aye",
  // 4-letter words
  "able", "ache", "acid", "acre", "aged", "aide", "aisle", "also", "arch", "area", "army", "asia", "atom", "auto", "away", "axed", "baby", "back", "bake", "bald", "ball", "band", "bank", "bare", "bark", "barn", "base", "bath", "beam", "bean", "bear", "beat", "been", "beer", "bell", "belt", "bend", "bent", "best", "bias", "bike", "bill", "bind", "bird", "bite", "black", "blade", "blame", "blank", "blast", "blaze", "bleak", "blend", "bless", "blind", "blink", "blond", "blood", "blow", "blue", "board", "boat", "body", "bold", "bone", "bond", "book", "boom", "boot", "bore", "born", "bound", "bowl", "brain", "brake", "brand", "brass", "brave", "bread", "break", "breed", "brick", "bridge", "brief", "bright", "bring", "brink", "brisk", "broad", "broke", "broken", "bronze", "brook", "broom", "brown", "brush", "build", "built", "bulk", "bull", "bump", "bunch", "bundle", "bunny", "burn", "burst", "bury", "bus", "bush", "busy", "but", "buy", "buzz",
  // 5-letter words
  "cable", "cache", "cadet", "caged", "cake", "camel", "canal", "canoe", "caper", "carbon", "card", "care", "cargo", "carol", "carry", "carve", "case", "cash", "cast", "casual", "catch", "cater", "cause", "caution", "cease", "cedar", "ceiling", "chain", "chair", "chalk", "champ", "chant", "chaos", "chapel", "charge", "charm", "chart", "chase", "cheat", "check", "cheese", "chef", "cherry", "chess", "chest", "chew", "chicken", "chief", "child", "chill", "chimney", "chin", "china", "choice", "choke", "choose", "chord", "chore", "chosen", "chrome", "chuck", "churn", "cigar", "cinder", "cinema", "circle", "civic", "civil", "claim", "clamp", "clang", "clank", "clash", "class", "clean", "clear", "clerk", "clever", "click", "cliff", "climb", "cling", "cloak", "clock", "clone", "close", "cloth", "cloud", "clown", "club", "cluck", "clue", "coach", "coast", "coat", "cobra", "cocoa", "code", "coffee", "coil", "coin", "cold", "collar", "comet", "comic", "common", "coral", "cord", "core", "cork", "corn", "corner", "corps", "cost", "cotton", "couch", "cough", "could", "count", "country", "court", "cover", "cow", "coward", "crab", "crack", "cradle", "craft", "crane", "crank", "crash", "crate", "crave", "crawl", "craze", "crazy", "creak", "cream", "crease", "create", "credit", "creek", "creep", "crept", "crest", "crew", "crib", "cricket", "crime", "crisp", "croak", "crock", "crocus", "crook", "cross", "crouch", "crowd", "crown", "crude", "cruel", "cruise", "crumb", "crush", "crust", "cry", "crystal", "cube", "cuddle", "cue", "cuff", "culture", "cup", "curb", "curd", "cure", "curl", "current", "curry", "curse", "curve", "custom", "cut", "cute", "cycle",
  // 6-letter words and longer
  "damage", "dance", "danger", "dare", "dark", "dash", "data", "date", "daughter", "dawn", "day", "daze", "dead", "deaf", "deal", "dealer", "dean", "dear", "death", "debate", "debris", "decade", "decay", "deceive", "decide", "deck", "declare", "decline", "decode", "decorate", "decrease", "decree", "dedicate", "deed", "deem", "deep", "deer", "defeat", "defect", "defend", "defense", "define", "degree", "delay", "delete", "deliberate", "delicate", "delight", "deliver", "demand", "demo", "demon", "denial", "dense", "dental", "deny", "depart", "depend", "depict", "deploy", "deposit", "depress", "depth", "deputy", "derive", "describe", "desert", "deserve", "design", "desire", "desk", "despair", "despite", "destroy", "detail", "detect", "determine", "develop", "device", "devil", "devise", "diagram", "dial", "dialog", "diamond", "diary", "dice", "dictate", "dictionary",
  "each", "eager", "eagle", "ear", "early", "earn", "earth", "ease", "easier", "east", "easter", "easy", "eat", "echo", "eclipse", "ecology", "economic", "economy", "edge", "edible", "edit", "educate", "education", "effect", "effort", "egg", "eight", "either", "eject", "elaborate", "elastic", "elbow", "elder", "eldest", "elect", "election", "electric", "electricity", "elegant", "element", "elephant", "elevate", "eleven", "elite", "else", "email", "emerge", "emergency", "emotion", "emperor", "emphasis", "empire", "employ", "empty", "enable", "enact", "encamp", "enchant", "enclose", "encode", "encounter", "encourage", "end", "endure", "enemy", "energy", "enforce", "engage", "engine", "engineer", "enhance", "enjoy", "enlarge", "enough", "enrage", "enrich", "enroll", "ensemble", "ensure", "entail", "enter", "enterprise", "entertain", "enthusiasm", "entire", "entity", "entitle", "entrance", "entrap", "entrust", "entry", "envelope", "environment", "envy", "enzyme", "epic", "epidemic", "episode", "epitome", "epoch", "equal", "equate", "equation", "equip", "equity", "equivalent", "era", "erase", "erect", "errand", "error", "erupt", "escape", "escort", "especial", "especially", "essay", "essence", "essential", "establish", "estate", "esteem", "estimate", "eternal", "ethic", "ethnic", "etiquette", "evacuate", "evade", "evaluate", "evangelist", "evaporate", "evasion", "even", "evening", "event", "eventual", "ever", "every", "evidence", "evident", "evil", "evoke", "evolution", "evolve", "exact", "exalt", "examine", "example", "excavate", "exceed", "excel", "excellent", "except", "exception", "excerpt", "excess", "exchange", "excite", "exclaim", "exclude", "excuse", "execute", "executive", "exemplary", "exemplify", "exempt", "exercise", "exert", "exhale", "exhaust", "exhibit", "exhilarate", "exhort", "exhume", "exigency", "exile", "exist", "existence", "exit", "exodus", "exonerate", "exorbitant", "exorcise", "exotic", "expand", "expanse", "expatriate", "expect", "expectancy", "expectation", "expectorant", "expedient", "expedite", "expel", "expend", "expense", "expensive", "experience", "experiment", "expert", "expertise", "expiate", "expiration", "expire", "explain", "expletive", "explicit", "explode", "exploit", "explore", "exponent", "export", "expose", "exposition", "expostulate", "exposure", "expound", "express", "expression", "expropriate", "expulsion", "expunge", "expurgate", "exquisite", "extant", "extemporaneous", "extend", "extension", "extensive", "extent", "extenuate", "exterior", "exterminate", "external", "extinct", "extinction", "extinguish", "extirpate", "extol", "extort", "extract", "extraction", "extracurricular", "extradite", "extraneous", "extraordinary", "extrapolate", "extravagance", "extravagant", "extravaganza", "extreme", "extremity", "extricate", "extrinsic", "extrovert", "extrude", "exuberance", "exuberant", "exude", "exult", "exultation",
]

export interface WordResult {
  word: string
  length: number
  isMatch: boolean
}

/**
 * Check if word can be made from available letters
 */
function canMakeWord(word: string, availableLetters: string, allowReuse: boolean = false): boolean {
  const wordLower = word.toLowerCase()
  const lettersLower = availableLetters.toLowerCase()

  if (allowReuse) {
    // All letters must be in the available set
    return [...wordLower].every(letter => lettersLower.includes(letter))
  } else {
    // Each letter can only be used once
    const letterCount = new Map<string, number>()

    // Count available letters
    for (const letter of lettersLower) {
      letterCount.set(letter, (letterCount.get(letter) || 0) + 1)
    }

    // Check if word can be made
    for (const letter of wordLower) {
      if (!letterCount.has(letter) || letterCount.get(letter)! <= 0) {
        return false
      }
      letterCount.set(letter, letterCount.get(letter)! - 1)
    }

    return true
  }
}

/**
 * Check if word matches filter criteria
 */
function matchesFilters(
  word: string,
  startsWith?: string,
  contains?: string,
  letterCount?: number
): boolean {
  const wordLower = word.toLowerCase()

  if (letterCount && wordLower.length !== letterCount) {
    return false
  }

  if (startsWith && !wordLower.startsWith(startsWith.toLowerCase())) {
    return false
  }

  if (contains && !wordLower.includes(contains.toLowerCase())) {
    return false
  }

  return true
}

/**
 * Validate input
 */
export function validateInput(letters: string): { valid: boolean; error?: string } {
  if (!letters || letters.length === 0) {
    return { valid: false, error: "Please enter at least one letter" }
  }

  if (!/^[a-zA-Z]+$/.test(letters)) {
    return { valid: false, error: "Only letters A-Z are allowed" }
  }

  return { valid: true }
}

/**
 * Solve longest word puzzle
 */
export function solveLongestWord(
  availableLetters: string,
  allowReuse: boolean = false,
  keepOrder: boolean = false,
  startsWith?: string,
  contains?: string,
  minLetters?: number
): WordResult[] {
  const validation = validateInput(availableLetters)
  if (!validation.valid) {
    throw new Error(validation.error)
  }

  const results: WordResult[] = []

  for (const word of ENGLISH_WORDS) {
    if (keepOrder) {
      // Check if word is a subsequence of available letters
      const letters = availableLetters.toLowerCase()
      let letterIndex = 0
      let matched = true

      for (const char of word.toLowerCase()) {
        while (letterIndex < letters.length && letters[letterIndex] !== char) {
          letterIndex++
        }
        if (letterIndex >= letters.length) {
          matched = false
          break
        }
        letterIndex++
      }

      if (!matched) continue
    } else if (!canMakeWord(word, availableLetters, allowReuse)) {
      continue
    }

    // Apply filters
    if (!matchesFilters(word, startsWith, contains, minLetters)) {
      continue
    }

    results.push({
      word,
      length: word.length,
      isMatch: true,
    })
  }

  // Sort by length descending, then alphabetically
  return results.sort((a, b) => {
    if (b.length !== a.length) {
      return b.length - a.length
    }
    return a.word.localeCompare(b.word)
  })
}

/**
 * Get remaining unused letters
 */
export function getRemainingLetters(word: string, availableLetters: string): string {
  const letterCount = new Map<string, number>()

  for (const letter of availableLetters.toLowerCase()) {
    letterCount.set(letter, (letterCount.get(letter) || 0) + 1)
  }

  for (const letter of word.toLowerCase()) {
    if (letterCount.has(letter)) {
      letterCount.set(letter, letterCount.get(letter)! - 1)
    }
  }

  let remaining = ""
  for (const [letter, count] of letterCount) {
    remaining += letter.repeat(count)
  }

  return remaining
}
