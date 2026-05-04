# Letters to Numbers Converter

A free, instant tool that converts any letter or text string into its corresponding numeric value (A=1, B=2, C=3 ... Z=26).

🔗 **[Try the free tool → yourdomain.com/letters-to-numbers-converter](https://letters2numbersconverter.com)**

---

## What It Does

Paste or type any text and instantly get:

- **Letter position values** — A=1, B=2, C=3 through Z=26
- **Full word/phrase conversion** — every character mapped to its number
- **Sum totals** — the numeric sum of any word or name
- **Case-insensitive input** — uppercase and lowercase treated the same

---

## Example Output

| Input | Output |
|-------|--------|
| `A` | 1 |
| `Z` | 26 |
| `CAT` | 3, 1, 20 |
| `HELLO` | 8, 5, 12, 12, 15 |
| `HELLO` (sum) | 52 |

---

## Use Cases

- **Numerology** — calculate the numeric value of names and words
- **Education** — teaching the alphabet and letter positions to kids
- **Puzzles & ciphers** — encoding messages using A1Z26 substitution cipher
- **Word games** — Scrabble-style scoring, crossword solving
- **Data encoding** — converting text fields to numeric representations
- **Fun & trivia** — finding the numeric "score" of any word or name

---

## The Full A–Z Reference Table

| Letter | Number | Letter | Number |
|--------|--------|--------|--------|
| A | 1 | N | 14 |
| B | 2 | O | 15 |
| C | 3 | P | 16 |
| D | 4 | Q | 17 |
| E | 5 | R | 18 |
| F | 6 | S | 19 |
| G | 7 | T | 20 |
| H | 8 | U | 21 |
| I | 9 | V | 22 |
| J | 10 | W | 23 |
| K | 11 | X | 24 |
| L | 12 | Y | 25 |
| M | 13 | Z | 26 |

---

## How the Conversion Works

The standard system used is **A1Z26** — the simplest alphabetic substitution cipher:

```
position = letter.toUpperCase().charCodeAt(0) - 64
```

So `A` = 65 (ASCII) − 64 = **1**, `Z` = 90 − 64 = **26**.

For a full string:

```javascript
function lettersToNumbers(str) {
  return str
    .toUpperCase()
    .split('')
    .filter(c => c >= 'A' && c <= 'Z')
    .map(c => c.charCodeAt(0) - 64);
}

// Example
lettersToNumbers("HELLO"); // [8, 5, 12, 12, 15]
```

---

## Related Tools

- [Numbers to Letters Converter](https://yourdomain.com/numbers-to-letters-converter)
- [ASCII to Text Converter](https://yourdomain.com/ascii-to-text)
- [Morse Code Translator](https://yourdomain.com/morse-code-translator)
- [Caesar Cipher Encoder](https://yourdomain.com/caesar-cipher)

---

## Embed This Tool

Want to add this converter to your site? Use this iframe:

```html
<iframe 
  src="https://yourdomain.com/letters-to-numbers-converter" 
  width="100%" 
  height="500" 
  frameborder="0"
  title="Letters to Numbers Converter">
</iframe>
```

---

## Link to This Tool

If you found this useful, feel free to link to it:

```markdown
[Letters to Numbers Converter](https://yourdomain.com/letters-to-numbers-converter)
```

```html
<a href="https://yourdomain.com/letters-to-numbers-converter">Letters to Numbers Converter</a>
```

---

## License

MIT — free to use, modify, and distribute.

---

*Built and maintained by [Your Name / Brand](https://yourdomain.com)*
