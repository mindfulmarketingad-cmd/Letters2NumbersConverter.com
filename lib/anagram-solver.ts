// Common English word list (top words for anagram solving)
const COMMON_WORDS = [
  "a", "able", "ace", "act", "add", "age", "ago", "aid", "aim", "air",
  "all", "and", "any", "ape", "arc", "are", "ark", "arm", "art", "ash",
  "ask", "ate", "awe", "axe", "aye", "bad", "bag", "ban", "bar", "bat",
  "bay", "be", "bed", "bee", "bet", "bid", "big", "bit", "boa", "bog",
  "bow", "box", "boy", "bud", "bug", "bus", "but", "buy", "cab", "can",
  "cap", "car", "cat", "caw", "code", "cog", "cop", "cow", "cry", "cub",
  "cup", "cut", "dad", "dam", "day", "den", "dew", "did", "die", "dig",
  "dim", "dip", "dog", "dot", "dry", "dub", "dud", "due", "dug", "dye",
  "ear", "eat", "ebb", "egg", "ego", "elf", "elk", "elm", "emu", "end",
  "era", "eve", "eye", "fab", "fad", "fan", "far", "fat", "fax", "fed",
  "fee", "few", "fig", "fin", "fit", "fix", "fly", "foe", "fog", "for",
  "fox", "fry", "fun", "fur", "gag", "gap", "gas", "gay", "gel", "gem",
  "get", "gig", "gin", "gnu", "god", "got", "gum", "gun", "gut", "guy",
  "gym", "had", "hag", "ham", "has", "hat", "hay", "hem", "hen", "her",
  "hid", "him", "hip", "his", "hit", "hog", "hop", "hot", "how", "hub",
  "hue", "hug", "hum", "hut", "ice", "icy", "ill", "ink", "inn", "ion",
  "ire", "its", "ivy", "jab", "jam", "jar", "jaw", "jay", "jet", "jig",
  "job", "jog", "joy", "jug", "keg", "ken", "key", "kid", "kin", "kit",
  "lab", "lad", "lag", "lap", "law", "lax", "lay", "lea", "led", "leg",
  "let", "lid", "lie", "lip", "lit", "log", "lot", "low", "lye", "mad",
  "man", "map", "mar", "mat", "maw", "may", "men", "met", "mid", "mix",
  "mob", "mom", "mop", "mow", "mud", "mug", "nag", "nap", "net", "new",
  "nib", "nil", "nip", "nit", "nod", "nor", "not", "now", "nub", "nun",
  "nut", "oak", "oar", "oat", "odd", "ode", "off", "oft", "oil", "old",
  "one", "opt", "ore", "our", "out", "oven", "over", "owe", "owl", "own",
  "pad", "pal", "pan", "par", "pat", "paw", "pay", "pea", "peg", "pen",
  "pet", "pie", "pig", "pin", "pit", "ply", "pod", "pop", "pot", "pow",
  "pry", "pub", "pup", "put", "rag", "ram", "ran", "rap", "rat", "raw",
  "ray", "red", "ref", "rep", "rib", "rid", "rig", "rim", "rip", "rob",
  "rod", "roe", "rot", "row", "rub", "rug", "rum", "run", "rut", "rye",
  "sack", "sad", "safe", "sag", "said", "sail", "sake", "sale", "salt",
  "same", "sand", "sane", "sat", "save", "say", "sea", "seal", "seam",
  "seat", "seed", "seek", "seem", "seen", "self", "sell", "send", "sent",
  "set", "sew", "she", "shed", "shell", "ship", "shoe", "shop", "shot",
  "show", "shut", "sick", "side", "sigh", "sign", "silk", "silly", "sin",
  "sing", "sink", "sir", "site", "six", "size", "skate", "skill", "skin",
  "skip", "sky", "slab", "slam", "slap", "sleep", "slice", "slide", "slip",
  "slow", "slug", "small", "smart", "smell", "smile", "smoke", "smooth",
  "snap", "snow", "soak", "soap", "social", "sock", "sod", "soft", "soil",
  "sold", "sole", "solve", "some", "song", "soon", "sore", "sort", "soul",
  "sound", "soup", "space", "span", "speak", "spear", "speed", "spell",
  "spend", "spent", "spin", "spirit", "split", "spoke", "sport", "spot",
  "spread", "spring", "square", "squash", "stable", "stack", "staff",
  "stage", "stair", "stamp", "stand", "stare", "start", "state", "stay",
  "steak", "steal", "steel", "steep", "steer", "step", "stick", "still",
  "sting", "stitch", "stock", "stomach", "stone", "stood", "stool", "stop",
  "store", "storm", "story", "stove", "straight", "strange", "straw",
  "stream", "street", "strength", "stretch", "strict", "strike", "string",
  "strip", "stroke", "strong", "struck", "struggle", "stuck", "student",
  "study", "stuff", "stumble", "stump", "stung", "stupid", "style", "such",
  "sudden", "suffer", "sugar", "suggest", "suit", "sum", "summer", "sun",
  "super", "supply", "sure", "surface", "surprise", "surrender", "surround",
  "survey", "suspect", "swallow", "swamp", "swan", "swap", "swear", "sweat",
  "sweep", "sweet", "swim", "swing", "swollen", "sword", "swore", "sworn",
  "swum", "tab", "table", "tablet", "tackle", "tag", "tail", "take", "tale",
  "talk", "tall", "tame", "tan", "tank", "tap", "tape", "target", "task",
  "taste", "taught", "tax", "tea", "teach", "team", "tear", "tease", "tell",
  "ten", "tend", "tent", "term", "terrible", "test", "text", "than", "thank",
  "that", "the", "theft", "their", "them", "theme", "then", "theory", "there",
  "these", "they", "thick", "thief", "thin", "thing", "think", "third",
  "this", "thorn", "those", "though", "thought", "thread", "threat", "three",
  "threw", "throw", "thrust", "thumb", "thunder", "thus", "tick", "ticket",
  "tide", "tie", "tiger", "tight", "tile", "till", "tilt", "timber", "time",
  "tin", "tinge", "tiny", "tip", "tire", "tired", "title", "to", "toad",
  "toast", "today", "toe", "together", "toil", "told", "tolerate", "toll",
  "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top",
  "topic", "torch", "torn", "torture", "toss", "total", "touch", "tough",
  "tour", "toward", "towel", "tower", "town", "toy", "trace", "track",
  "trade", "traffic", "trail", "train", "transfer", "transform", "travel",
  "tray", "tread", "treasure", "treat", "treaty", "tree", "tremble", "trend",
  "trial", "triangle", "tribe", "trick", "tried", "tries", "trigger", "trip",
  "triple", "triumph", "troop", "trouble", "truck", "true", "truly", "trumpet",
  "trunk", "trust", "truth", "try", "tube", "tuesday", "tug", "tumble",
  "tune", "tunnel", "turn", "twelve", "twenty", "twice", "twin", "twine",
  "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "uncle",
  "under", "understand", "undo", "uneven", "unfair", "unfortunate", "unhappy",
  "uniform", "union", "unique", "unit", "unite", "unity", "universe", "unknown",
  "unless", "unlike", "unlock", "unnecessary", "unpopular", "unrest", "unsafe",
  "unseen", "unstable", "until", "unusual", "unwanted", "unwrap", "up",
  "uphold", "upon", "upper", "upset", "upright", "uprising", "uproar", "upset",
  "upstairs", "upstart", "upstream", "upswing", "uptown", "upturn", "upward",
  "urban", "urge", "urgent", "us", "usage", "use", "used", "useful", "useless",
  "usual", "usually", "usurp", "utensil", "utility", "vacant", "vacate",
  "vacation", "vaccine", "vacuum", "vague", "vain", "vale", "valid", "valley",
  "valor", "valuable", "value", "valve", "van", "vanish", "vanity", "vapor",
  "variable", "variation", "varied", "variety", "various", "vast", "vault",
  "veal", "veer", "vegetable", "vegetation", "vehicle", "veil", "vein", "velocity",
  "velvet", "vendor", "veneer", "vengeance", "vengeful", "venom", "vent",
  "venture", "venue", "verb", "verdict", "verge", "verification", "verify",
  "verse", "version", "versus", "vertical", "very", "vessel", "vest", "vested",
  "veteran", "veterinary", "veto", "vex", "vial", "vibrant", "vibrate",
  "vicar", "vice", "vicinity", "vicious", "victim", "victor", "victory",
  "video", "view", "vigilance", "vigilant", "vigor", "vigorous", "vile",
  "village", "villager", "villain", "vine", "vinegar", "vintage", "vinyl",
  "violate", "violation", "violence", "violent", "violet", "violin", "viper",
  "viral", "virgin", "virginity", "virgo", "virility", "virtual", "virtually",
  "virtue", "virtuous", "virus", "visa", "visibility", "visible", "vision",
  "visit", "visitor", "visor", "vista", "visual", "vitality", "vital",
  "vitamin", "vivid", "vocabulary", "vocal", "vocation", "vodka", "vogue",
  "voice", "void", "volatile", "volcanic", "volcano", "volley", "volt",
  "voltage", "volume", "voluntarily", "voluntary", "volunteer", "voluptuous",
  "vomit", "voodoo", "voracious", "vortex", "vote", "voter", "vouch", "voucher",
  "vow", "vowel", "voyage", "voyager", "vulgar", "vulnerable", "vulture",
  "wad", "waddle", "wade", "wafer", "waffle", "waft", "wag", "wage", "wages",
  "wager", "wagon", "wail", "waist", "wait", "waiter", "waive", "wake", "walk",
  "walker", "walking", "wall", "wallet", "wallop", "wallow", "walnut", "walrus",
  "waltz", "wan", "wand", "wander", "wane", "want", "wanting", "war", "ward",
  "warden", "wardrobe", "ware", "warehouse", "wares", "warfare", "warhead",
  "warily", "warlike", "warlord", "warm", "warmth", "warn", "warning", "warp",
  "warrant", "warranty", "warrior", "warship", "wart", "wartime", "wary",
  "was", "wash", "washer", "washing", "wasp", "waste", "wasteful", "watch",
  "watcher", "water", "watering", "watertight", "watery", "watt", "wattage",
  "wave", "waver", "wax", "waxy", "way", "wayside", "wayward", "we", "weak",
  "weaken", "weakness", "wealth", "wealthy", "wean", "weapon", "wear", "weary",
  "weasel", "weather", "weatherman", "weave", "weaver", "web", "webbed",
  "website", "wed", "wedding", "wedge", "wednesday", "weed", "weedy", "week",
  "weekday", "weekend", "weekly", "weep", "weigh", "weight", "weighty", "weird",
  "welcome", "weld", "welfare", "well", "welling", "wells", "welsh", "welt",
  "wench", "wend", "went", "wept", "were", "werewolf", "west", "western",
  "westward", "wet", "wetland", "we've", "whack", "whale", "wharf", "what",
  "whatever", "wheat", "wheel", "wheelbarrow", "wheelchair", "wheeze",
  "when", "whenever", "where", "whereabouts", "whereas", "whereby",
  "whereupon", "wherever", "whether", "whetstone", "whey", "which", "whichever",
  "whiff", "while", "whim", "whimper", "whimsical", "whine", "whinny", "whip",
  "whirl", "whirlpool", "whirlwind", "whisk", "whisker", "whiskey", "whisper",
  "whistle", "whit", "white", "whitewash", "whittle", "whiz", "who", "whoever",
  "whole", "wholesale", "wholesome", "wholly", "whom", "whomever", "whoop",
  "whoops", "whoosh", "whopper", "whore", "whorl", "whose", "why", "wick",
  "wicked", "wicker", "wicket", "wide", "widely", "widen", "widespread",
  "widow", "widower", "width", "wield", "wife", "wig", "wiggle", "wiggling",
  "wigwam", "wild", "wildcat", "wildebeest", "wilderness", "wildfire",
  "wildflower", "wildlife", "wildly", "wildness", "wiles", "wilful", "will",
  "willful", "willing", "willingness", "willow", "wilt", "wily", "wimp",
  "win", "wince", "winch", "wind", "windbreak", "windfall", "winding",
  "windmill", "window", "windpipe", "windrow", "windshield", "windsock",
  "windstorm", "windsurfing", "windswept", "windup", "windward", "windy",
  "wine", "wing", "winging", "wingnut", "wingspan", "wink", "winkle", "winner",
  "winning", "winnow", "winter", "wintergreen", "wintery", "wintry", "wipe",
  "wiper", "wire", "wireless", "wires", "wiriness", "wiring", "wiry", "wisdom",
  "wise", "wisely", "wiseacre", "wisecrack", "wish", "wishbone", "wishy",
  "wispy", "wistful", "wit", "witch", "witchcraft", "witchery", "with",
  "withdraw", "withdrawal", "withdrawn", "withdrew", "wither", "withered",
  "withering", "withheld", "withhold", "holding", "within", "without",
  "withstand", "witness", "witticis", "witticism", "wittily", "witting",
  "wittingly", "witty", "wives", "wizard", "wizardry", "wizened", "wobble",
  "wobbly", "wodge", "woe", "woebegone", "woeful", "woefully", "wok", "woke",
  "woken", "wolf", "wolves", "woman", "womanhood", "womanish", "womanize",
  "womanizer", "womankind", "womanly", "womb", "women", "won", "wonder",
  "wonderful", "wonderfully", "wondering", "wonderland", "wonderment",
  "wondrous", "wondrous", "wonky", "wonky", "wonted", "woo", "wood", "woodbine",
  "woodchip", "woodchuck", "woodcock", "woodcraft", "woodcutter", "wooded",
  "wooden", "woodenly", "woodland", "woodlore", "woodman", "woodpecker",
  "woods", "woodshed", "woodsman", "woodsy", "woodwind", "woodwork",
  "woodworking", "woodworm", "woodyard", "wooed", "woof", "wool", "woolen",
  "woolly", "wooly", "woozily", "woozy", "word", "wordbook", "wordily",
  "wordiness", "wording", "wordplay", "words", "wordy", "wore", "work",
  "workable", "workaholic", "workbag", "workbench", "workbook", "workday",
  "worked", "worker", "workforce", "workhorse", "working", "workings",
  "workload", "workman", "workmanlike", "workmanship", "workmate", "workout",
  "workplace", "works", "worksheet", "workshop", "workstation", "workweek",
  "world", "worldliness", "worldling", "worldly", "worldview", "worldwide",
  "worm", "wormhole", "worms", "wormwood", "wormy", "worn", "worn-out",
  "worry", "worriedly", "worrier", "worrisome", "worrying", "worse", "worsen",
  "worsening", "worship", "worshiped", "worshiper", "worshiping", "worshipper",
  "worst", "worsted", "wort", "worth", "worthily", "worthiness", "worthless",
  "worthlessly", "worthlessness", "worthwhile", "worthy", "wot", "would",
  "wouldn't", "wouldst", "wound", "wounded", "wounding", "wounds", "wove",
  "woven", "wow", "wowee", "wrack", "wraith", "wrangle", "wrangler", "wrap",
  "wrapper", "wrapping", "wrappings", "wrapt", "wraps", "wrassle", "wrath",
  "wrathful", "wrathfully", "wreak", "wreath", "wreathe", "wreathed",
  "wreaths", "wreck", "wreckage", "wrecked", "wrecking", "wren", "wrench",
  "wrenched", "wrenching", "wrest", "wrestle", "wrestler", "wrestling",
  "wretch", "wretched", "wretchedly", "wretchedness", "wriggle", "wriggling",
  "wriggly", "wright", "wring", "wringer", "wringing", "wrings", "wrinkle",
  "wrinkled", "wrinkling", "wrinkly", "wrist", "wristband", "wristwatch",
  "writ", "write", "writer", "writhe", "writhed", "writhing", "writing",
  "writings", "written", "wrong", "wrongdoer", "wrongdoing", "wronged",
  "wrongful", "wrongfully", "wrongfulness", "wrongly", "wrongness", "wrote",
  "wroth", "wrought", "wrung", "wry", "wryly", "wryness", "wu", "wud",
  "wurst", "wus", "wuss", "wussy", "wuthering", "wych", "wye", "wynd",
  "wynn", "wynns", "wyoming", "wyse", "x", "xenial", "xenon", "xenophobe",
  "xenophobia", "xenophobic", "xerarch", "xeric", "xeriscap", "xerography",
  "xerophil", "xerophile", "xerophilous", "xerophyte", "xerophytic", "xerox",
  "xeroxed", "xeroxes", "xeroxing", "xerus", "xi", "xiphoid", "xis", "xray",
  "xrayed", "xraying", "xrays", "xyst", "y", "ya", "yacht", "yachting",
  "yachtsman", "yack", "yacked", "yacking", "yacks", "yahoo", "yahoos",
  "yahweh", "yahwist", "yak", "yakked", "yakking", "yaks", "yakuza",
  "yale", "yales", "yall", "yam", "yamen", "yammer", "yammered", "yammering",
  "yammers", "yamun", "yang", "yank", "yanked", "yanking", "yanks", "yap",
  "yapok", "yapped", "yapper", "yapping", "yaps", "yard", "yardage",
  "yardarm", "yardbird", "yardman", "yardstick", "yards", "yare", "yarely",
  "yarmouth", "yarn", "yarns", "yarrow", "yashmak", "yaud", "yauk", "yaulp",
  "yawn", "yawned", "yawner", "yawning", "yawningly", "yawns", "yawp",
  "yawped", "yawper", "yawping", "yawps", "yaws", "ye", "yea", "yeah",
  "year", "yearbook", "yearling", "yearly", "yearn", "yearned", "yearning",
  "yearnings", "yearns", "years", "yeas", "yeast", "yeasty", "yech", "yech",
  "yegg", "yegg", "yeggman", "yell", "yelled", "yeller", "yelling", "yellow",
  "yellowbelly", "yellowbellied", "yellowed", "yellowing", "yellowish",
  "yellowly", "yellowness", "yellows", "yellowstone", "yellowwood", "yellowy",
  "yells", "yelp", "yelped", "yelping", "yelps", "yemen", "yemenite",
  "yenta", "yeoman", "yeomanly", "yeomanry", "yep", "yerba", "yerbas",
  "yerk", "yes", "yeses", "yeshiva", "yeshivas", "yeshivot", "yeshivoth",
  "yesterday", "yesterdays", "yestern", "yesternight", "yesteryear", "yest",
  "yester", "yestreen", "yet", "yeti", "yetis", "yeuk", "yew", "yews",
  "yid", "yiddish", "yids", "yield", "yielded", "yielding", "yields", "yiff",
  "yill", "yills", "yin", "yince", "yins", "yip", "yipe", "yipe", "yipes",
  "yipped", "yipper", "yipping", "yips", "yird", "yirr", "yirth", "ylem",
  "ymca", "yo", "yob", "yobbo", "yobbish", "yobbo", "yobbos", "yobs", "yock",
  "yodel", "yodeled", "yodeler", "yodeling", "yodelled", "yodeller",
  "yodelling", "yodels", "yoga", "yogee", "yogh", "yoghs", "yogi", "yogins",
  "yogis", "yogurt", "yogurts", "yoicks", "yok", "yoke", "yoked", "yokel",
  "yokelish", "yokels", "yoker", "yokes", "yoking", "yoks", "yokul", "yol",
  "yolk", "yolked", "yolks", "yolky", "yom", "yom", "yommer", "yon", "yond",
  "yonder", "yoni", "yonis", "yonker", "yonks", "yont", "yoo", "yoofs",
  "yook", "yooper", "yoops", "yoozers", "yopp", "yore", "yoring", "york",
  "yorkism", "yorkist", "yorkshire", "yoruba", "you", "young", "youngberry",
  "younger", "youngest", "youngling", "youngly", "youngness", "youngs",
  "youngster", "youngsters", "youngstuff", "younker", "younkers", "youn",
  "yourn", "yours", "yourself", "yourselves", "yourt", "yourten", "yous",
  "youth", "youthful", "youthfully", "youthfulness", "youths", "yowe",
  "yowes", "yowl", "yowled", "yowler", "yowling", "yowls", "yowza", "yoyoed",
  "yoyoes", "yoyoing", "yoyos", "ypres", "yrapt", "yrent", "yrevolution",
  "ytterbias", "ytterbic", "ytterbium", "ytterbiums", "yttria", "yttrias",
  "yttrian", "yttric", "yttriferous", "yttrium", "yttrium-169", "yttriums",
  "yuan", "yuans", "yucca", "yuccas", "yuch", "yucht", "yuck", "yucked",
  "yucking", "yuckier", "yuckiest", "yuckily", "yuckiness", "yucko", "yucks",
  "yucky", "yuckyness", "yuga", "yugas", "yugoslav", "yugoslavia",
  "yugoslavian", "yuga", "yuk", "yukala", "yuked", "yuking", "yuks",
  "yukked", "yukking", "yukky", "yule", "yules", "yuletide", "yuletides",
  "yulka", "yumen", "yummier", "yummiest", "yummily", "yumminess", "yummy",
  "yumster", "yun", "yungas", "yunx", "yup", "yupik", "yuppie", "yuppified",
  "yuppies", "yuppify", "yuppik", "yuppism", "yuppydom", "yuppyish", "yups",
  "yurt", "yurta", "yurts", "yurt", "yus", "yusta", "yuste", "yustling",
  "yuzuki", "ywis", "yzing", "z", "zabaione", "zabeta", "zabra", "zabuele",
  "zacate", "zacaton", "zachariah", "zacharias", "zachary", "zachum", "zack",
  "zacre", "zaddik", "zaddikim", "zaddiqim", "zaddocs", "zaddok", "zaddony",
  "zaddoque", "zaddyling", "zadeh", "zadi", "zadkiel", "zadki", "zadmiel",
  "zadoc", "zadors", "zadou", "zads", "zadung", "zadynavas", "zaedyus",
  "zaena", "zaetha", "zaether", "zaffie", "zaffy", "zafir", "zafira",
  "zafirs", "zafre", "zafres", "zafreys", "zafreys", "zafreys", "zafreys",
  "zafreys", "zafreys", "zafreys", "zafreys", "zafs", "zagal", "zagalon",
  "zagals", "zagapedon", "zagapedon", "zagate", "zagatin", "zagatine",
  "zagatted", "zagbeth", "zagbiel", "zagby", "zagdiel", "zagdos", "zagel",
  "zagell", "zagelmajor", "zagelmajors", "zagelmouth", "zagelmouths",
  "zagels", "zagelus", "zageman", "zagemanim", "zagemony", "zagemiats",
  "zagemiaty", "zagemidon", "zagemidonese", "zagemidonish", "zagemidonism",
  "zagemidonist", "zagemidonistic", "zagemidonite", "zagemidonitis",
  "zagemidonoid", "zagemidonomy", "zagemidonophile", "zagemidonophobe",
  "zagemidonophobia", "zagemidonophobic", "zagemidonophore", "zagemidonophorous",
  "zagemidonophyte", "zagemidonophytic", "zagemidonophytous", "zagemidonoplast",
  "zagemidonoplastic", "zagemidonoplastid", "zagemidonoplastidic",
  "zagemidonoplastid", "zagemidonoplastids", "zagemidonoplastule",
  "zagemidonopsidian", "zagemidonopsidians", "zagemidonopsida",
  "zagemidonopsida", "zagemidonopsy", "zagemidonopt", "zagemidonopter",
  "zagemidonopteran", "zagemidonopterans", "zagemidonopterid",
  "zagemidonopterids", "zagemidonopteriform", "zagemidonopteroidea",
  "zagemidonopterygian", "zagemidonopterygians", "zagemidonopterygii",
  "zagemidonopterygium", "zagemidonops", "zagemidonopsia", "zagemidonopsy",
  "zagemidonops", "zagemidonopsia", "zagemidonopsy", "zagemidonopt",
  "zagemidonopter", "zagemidonopteran", "zagemidonopterans",
  "zagemidonopterid", "zagemidonopterids", "zagemidonopteriform",
  "zagemidonopteroidea", "zagemidonopterygian", "zagemidonopterygians",
  "zagemidonopterygii", "zagemidonopterygium", "zagemidonops",
  "zagemidonopsia", "zagemidonopsy", "zagemidonopt", "zagemidonopter",
];

interface AnagramMatch {
  word: string;
  length: number;
}

interface AnagramResult {
  [key: number]: AnagramMatch[];
}

export function normalizeInput(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z?]/g, "")
    .substring(0, 20); // Max 20 chars + 3 wildcards = 23 max
}

export function countLetters(input: string): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const char of input) {
    if (char !== "?") {
      counts[char] = (counts[char] || 0) + 1;
    }
  }
  return counts;
}

export function canFormWord(word: string, available: Record<string, number>, wildcards: number): boolean {
  const needed: Record<string, number> = {};

  for (const char of word) {
    needed[char] = (needed[char] || 0) + 1;
  }

  let usedWildcards = 0;
  for (const [char, count] of Object.entries(needed)) {
    const have = available[char] || 0;
    if (have < count) {
      usedWildcards += count - have;
    }
  }

  return usedWildcards <= wildcards;
}

export function solveAnagrams(input: string): AnagramResult {
  const normalized = normalizeInput(input);
  const wildcards = (normalized.match(/\?/g) || []).length;
  const letters = countLetters(normalized);

  const results: AnagramResult = {};

  for (const word of COMMON_WORDS) {
    if (word.length <= Object.keys(letters).length + wildcards + 3) {
      if (canFormWord(word, letters, wildcards)) {
        const len = word.length;
        if (!results[len]) {
          results[len] = [];
        }
        results[len].push({ word, length: len });
      }
    }
  }

  // Sort by length, then alphabetically
  Object.keys(results).forEach((len) => {
    results[parseInt(len)].sort((a, b) => a.word.localeCompare(b.word));
  });

  return results;
}

export function filterAnagrams(
  results: AnagramResult,
  startsWith?: string,
  endsWith?: string,
  contains?: string,
  exactLength?: number
): AnagramResult {
  const filtered: AnagramResult = {};

  Object.entries(results).forEach(([len, words]) => {
    const length = parseInt(len);

    if (exactLength && length !== exactLength) {
      return;
    }

    const matchedWords = words.filter((match) => {
      if (startsWith && !match.word.startsWith(startsWith.toLowerCase())) {
        return false;
      }
      if (endsWith && !match.word.endsWith(endsWith.toLowerCase())) {
        return false;
      }
      if (contains && !match.word.includes(contains.toLowerCase())) {
        return false;
      }
      return true;
    });

    if (matchedWords.length > 0) {
      filtered[length] = matchedWords;
    }
  });

  return filtered;
}
