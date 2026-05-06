// Common English wordlist for cryptogram solving
export const ENGLISH_WORDS = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "i",
  "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
  "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
  "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
  "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
  "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
  "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
  "back", "after", "use", "two", "how", "our", "work", "first", "well", "way",
  "even", "new", "want", "because", "any", "these", "give", "day", "most", "us",
  "is", "was", "are", "been", "being", "has", "had", "having", "does", "did",
  "doing", "would", "should", "could", "must", "might", "may", "can", "will",
  "shall", "am", "were", "go", "went", "gone", "going", "goes", "come", "came",
  "came", "coming", "comes", "see", "saw", "seen", "seeing", "sees", "make",
  "made", "made", "making", "makes", "get", "got", "gotten", "getting", "gets",
  "know", "knew", "known", "knowing", "knows", "take", "took", "taken", "taking",
  "takes", "find", "found", "found", "finding", "finds", "give", "gave", "given",
  "giving", "gives", "tell", "told", "told", "telling", "tells", "work", "worked",
  "worked", "working", "works", "call", "called", "called", "calling", "calls",
  "try", "tried", "tried", "trying", "tries", "ask", "asked", "asked", "asking",
  "asks", "need", "needed", "needed", "needing", "needs", "feel", "felt", "felt",
  "feeling", "feels", "become", "became", "become", "becoming", "becomes", "leave",
  "left", "left", "leaving", "leaves", "put", "put", "put", "putting", "puts",
  "mean", "meant", "meant", "meaning", "means", "keep", "kept", "kept", "keeping",
  "keeps", "let", "let", "let", "letting", "lets", "begin", "began", "begun",
  "beginning", "begins", "seem", "seemed", "seemed", "seeming", "seems", "help",
  "helped", "helped", "helping", "helps", "talk", "talked", "talked", "talking",
  "talks", "turn", "turned", "turned", "turning", "turns", "start", "started",
  "started", "starting", "starts", "show", "showed", "shown", "showing", "shows",
  "hear", "heard", "heard", "hearing", "hears", "play", "played", "played",
  "playing", "plays", "run", "ran", "run", "running", "runs", "move", "moved",
  "moved", "moving", "moves", "like", "liked", "liked", "liking", "likes", "live",
  "lived", "lived", "living", "lives", "believe", "believed", "believed", "believing",
  "believes", "hold", "held", "held", "holding", "holds", "bring", "brought",
  "brought", "bringing", "brings", "happen", "happened", "happened", "happening",
  "happens", "write", "wrote", "written", "writing", "writes", "provide", "provided",
  "provided", "providing", "provides", "sit", "sat", "sat", "sitting", "sits",
  "stand", "stood", "stood", "standing", "stands", "lose", "lost", "lost", "losing",
  "loses", "pay", "paid", "paid", "paying", "pays", "meet", "met", "met", "meeting",
  "meets", "include", "included", "included", "including", "includes", "continue",
  "continued", "continued", "continuing", "continues", "set", "set", "set", "setting",
  "sets", "learn", "learned", "learned", "learning", "learns", "change", "changed",
  "changed", "changing", "changes", "lead", "led", "led", "leading", "leads", "understand",
  "understood", "understood", "understanding", "understands", "watch", "watched",
  "watched", "watching", "watches", "follow", "followed", "followed", "following",
  "follows", "stop", "stopped", "stopped", "stopping", "stops", "create", "created",
  "created", "creating", "creates", "speak", "spoke", "spoken", "speaking", "speaks",
  "read", "read", "read", "reading", "reads", "allow", "allowed", "allowed", "allowing",
  "allows", "add", "added", "added", "adding", "adds", "spend", "spent", "spent",
  "spending", "spends", "grow", "grew", "grown", "growing", "grows", "open",
  "opened", "opened", "opening", "opens", "walk", "walked", "walked", "walking",
  "walks", "win", "won", "won", "winning", "wins", "offer", "offered", "offered",
  "offering", "offers", "remember", "remembered", "remembered", "remembering",
  "remembers", "love", "loved", "loved", "loving", "loves", "consider", "considered",
  "considered", "considering", "considers", "appear", "appeared", "appeared",
  "appearing", "appears", "buy", "bought", "bought", "buying", "buys", "wait",
  "waited", "waited", "waiting", "waits", "serve", "served", "served", "serving",
  "serves", "die", "died", "died", "dying", "dies", "send", "sent", "sent",
  "sending", "sends", "expect", "expected", "expected", "expecting", "expects",
  "build", "built", "built", "building", "builds", "stay", "stayed", "stayed",
  "staying", "stays", "fall", "fell", "fallen", "falling", "falls", "cut",
  "cut", "cut", "cutting", "cuts", "reach", "reached", "reached", "reaching",
  "reaches", "kill", "killed", "killed", "killing", "kills", "remain", "remained",
  "remained", "remaining", "remains", "suggest", "suggested", "suggested",
  "suggesting", "suggests", "raise", "raised", "raised", "raising", "raises",
  "pass", "passed", "passed", "passing", "passes", "sell", "sold", "sold",
  "selling", "sells", "require", "required", "required", "requiring", "requires",
  "report", "reported", "reported", "reporting", "reports", "decide", "decided",
  "decided", "deciding", "decides", "pull", "pulled", "pulled", "pulling", "pulls",
  "explain", "explained", "explained", "explaining", "explains", "develop", "developed",
  "developed", "developing", "develops", "carry", "carried", "carried", "carrying",
  "carries", "break", "broke", "broken", "breaking", "breaks", "receive", "received",
  "received", "receiving", "receives", "agree", "agreed", "agreed", "agreeing",
  "agrees", "support", "supported", "supported", "supporting", "supports", "hit",
  "hit", "hit", "hitting", "hits", "produce", "produced", "produced", "producing",
  "produces", "eat", "ate", "eaten", "eating", "eats", "cover", "covered",
  "covered", "covering", "covers", "catch", "caught", "caught", "catching", "catches",
  "draw", "drew", "drawn", "drawing", "draws", "choose", "chose", "chosen",
  "choosing", "chooses", "cause", "caused", "caused", "causing", "causes", "follow",
  "followed", "followed", "following", "follows", "release", "released", "released",
  "releasing", "releases", "escape", "escaped", "escaped", "escaping", "escapes"
];

export function removeText(text: string, what: 'letters' | 'numbers' | 'whitespace' | 'other'): string {
  switch (what) {
    case 'letters':
      return text.replace(/[a-zA-Z]/g, '');
    case 'numbers':
      return text.replace(/[0-9]/g, '');
    case 'whitespace':
      return text.replace(/\s/g, '');
    case 'other':
      return text.replace(/[^a-zA-Z0-9\s]/g, '');
    default:
      return text;
  }
}

export function changeCase(text: string, caseType: 'lowercase' | 'uppercase' | 'titlecase' | 'naturalcase' | 'swapcase' | 'reverse'): string {
  switch (caseType) {
    case 'lowercase':
      return text.toLowerCase();
    case 'uppercase':
      return text.toUpperCase();
    case 'titlecase':
      return text.replace(/\b\w/g, (char) => char.toUpperCase());
    case 'naturalcase':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    case 'swapcase':
      return text.replace(/\w/g, (char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
    case 'reverse':
      return text.split('').reverse().join('');
    default:
      return text;
  }
}

export function makeGroups(text: string, groupSize: number = 5, lineBreakAfter: number = 10): string {
  const cleaned = text.replace(/\s/g, '').toUpperCase();
  const groups: string[] = [];
  
  for (let i = 0; i < cleaned.length; i += groupSize) {
    groups.push(cleaned.substring(i, i + groupSize));
  }
  
  let result = '';
  for (let i = 0; i < groups.length; i++) {
    result += groups[i];
    if ((i + 1) % lineBreakAfter === 0) {
      result += '\n';
    } else if (i < groups.length - 1) {
      result += ' ';
    }
  }
  
  return result;
}

export function findPossibleWords(pattern: string, wordlist: string[] = ENGLISH_WORDS): string[] {
  const normalizedPattern = pattern.toLowerCase().replace(/[^a-z?]/g, '');
  
  return wordlist.filter((word) => {
    if (word.length !== normalizedPattern.length) return false;
    
    for (let i = 0; i < normalizedPattern.length; i++) {
      const patternChar = normalizedPattern[i];
      if (patternChar !== '?' && patternChar !== word[i]) {
        return false;
      }
    }
    
    return true;
  });
}

export function analyzeCipherText(text: string): { [key: string]: number } {
  const cleaned = text.toUpperCase().replace(/[^A-Z]/g, '');
  const frequency: { [key: string]: number } = {};
  
  for (const char of cleaned) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  
  return Object.fromEntries(
    Object.entries(frequency).sort((a, b) => b[1] - a[1])
  );
}
