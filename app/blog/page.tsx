import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Blog | Letters to Numbers Converter Tool",
  description: "Explore our collection of articles about letter-to-number conversion, encoding systems, puzzles, cryptography, and educational uses. Learn tips, tricks, and techniques.",
  keywords: ["letters to numbers blog", "letter number conversion articles", "A1Z26 guides", "cryptography tutorials", "puzzle solving tips"],
}

const blogPosts = [
  {
    slug: "best-cipher-locks",
    title: "Best Cipher Locks 2024 - Reviews & Buying Guide",
    description: "Discover the top 5 best cipher locks on Amazon. Read detailed reviews, compare features, and find the perfect combination padlock for your needs.",
    image: "/images/blog/best-cipher-locks-hero.jpg",
    imageAlt: "Collection of best cipher locks displayed showing various combination lock designs and security features",
  },
  {
    slug: "letter-to-numbers-code",
    title: "Letter to Numbers Code: Complete Guide to A1Z26 Cipher",
    description: "Learn how the letter to numbers code works. Convert A=1, B=2 through Z=26 with our complete guide to the A1Z26 cipher system.",
    image: "/images/blog/letter-to-numbers-code.jpg",
    imageAlt: "Letter tiles ABC alongside number tiles 123 demonstrating the letter to numbers code system",
  },
  {
    slug: "how-to-solve-letter-number-puzzles",
    title: "How to Solve Letter Number Puzzles: Expert Tips & Strategies",
    description: "Master puzzle solving techniques using letter-to-number conversion for geocaching, escape rooms, and CTF challenges.",
    image: "/images/blog/solve-letter-number-puzzles.jpg",
    imageAlt: "Person solving letter number puzzles with pencil and paper showing coded messages",
  },
  {
    slug: "letter-number-substitution-puzzles",
    title: "Letter Number Substitution Puzzles: Types, Examples & Solutions",
    description: "Master letter number substitution puzzles with our complete guide covering different cipher types and solving techniques.",
    image: "/images/blog/letter-number-substitution-puzzles.jpg",
    imageAlt: "Cryptogram puzzle sheet showing letter number substitution cipher with pencil marks",
  },
  {
    slug: "abc-to-number-code",
    title: "ABC to Number Code: Simple Guide for Everyone",
    description: "Learn the ABC to number code system for converting alphabet letters to numbers. Perfect for kids, educators, and puzzle enthusiasts.",
    image: "/images/blog/abc-to-number-code.jpg",
    imageAlt: "Colorful ABC alphabet blocks next to 123 number blocks",
  },
  {
    slug: "understanding-ascii-character-encoding",
    title: "Understanding ASCII and Character Encoding",
    description: "Learn about ASCII character encoding, how computers convert letters to numbers, and the history of character encoding systems.",
    image: "/images/blog/ascii-encoding.jpg",
    imageAlt: "ASCII character encoding table showing letters converted to binary and decimal numbers",
  },
  {
    slug: "letter-number-conversion-data-science",
    title: "Applications of Letter-Number Conversion in Data Science",
    description: "Discover how letter-to-number conversion techniques are used in data science for feature engineering and machine learning.",
    image: "/images/blog/data-science.jpg",
    imageAlt: "Data science visualization showing letter to number conversion applications in machine learning",
  },
  {
    slug: "puzzle-solving-letter-number-conversion",
    title: "Puzzle Solving with Letter-Number Conversion",
    description: "Master puzzle solving techniques using letter-to-number conversion for geocaching, escape rooms, and CTF challenges.",
    image: "/images/blog/puzzle-solving.jpg",
    imageAlt: "Puzzle solving with letter number codes for geocaching and escape room challenges",
  },
  {
    slug: "educational-uses-letter-number-conversion",
    title: "Educational Uses of Letter-Number Conversion",
    description: "Explore how letter-to-number conversion is used in education for teaching mathematics, coding concepts, and critical thinking.",
    image: "/images/blog/education.jpg",
    imageAlt: "Classroom setting with students learning letter-number conversions",
  },
  {
    slug: "letter-number-converters-cryptography",
    title: "Uses of Letter to Number Converters in Cryptography",
    description: "Learn how letter-to-number conversion forms the foundation of cryptography, from ancient ciphers to modern encryption.",
    image: "/images/blog/cryptography.jpg",
    imageAlt: "Cryptography visualization with cipher wheels and digital security elements",
  },
  {
    slug: "how-to-manually-check-letter-number-conversion",
    title: "How to Manually Check Letter to Number Conversion",
    description: "Step-by-step methods for manually converting letters to numbers using A1Z26, ASCII, hexadecimal, and binary encoding.",
    image: "/images/blog/manual-conversion.jpg",
    imageAlt: "Hand writing letter-to-number conversion calculations on paper",
  },
  {
    slug: "best-letter-number-ciphers",
    title: "Best Letter Number Ciphers for Beginners and Experts",
    description: "Discover the best letter number ciphers from simple A1Z26 to complex ASCII encoding. Learn which cipher is right for your needs.",
    image: "/images/blog/best-letter-number-ciphers-hero.jpg",
    imageAlt: "Ancient cipher wheels and encryption devices showing various encoding methods",
  },
  {
    slug: "letter-number-codes-geocaching",
    title: "Letter Number Codes in Geocaching: Solve Mystery Caches Like a Pro",
    description: "Master letter number codes for geocaching puzzle caches. Learn how to decode A1Z26 ciphers and convert coordinates.",
    image: "/images/blog/geocaching-codes-hero.jpg",
    imageAlt: "Geocaching adventure scene with GPS device and treasure map in forest",
  },
  {
    slug: "escape-room-letter-codes",
    title: "Escape Room Letter Codes: Master Every Number Lock Puzzle",
    description: "Learn how to solve escape room letter codes and number lock puzzles with expert strategies for decoding under pressure.",
    image: "/images/blog/escape-room-codes-hero.jpg",
    imageAlt: "Dramatic escape room scene with combination lock and mysterious clues",
  },
  {
    slug: "number-word-games-activities",
    title: "Fun Number Word Games and Activities for All Ages",
    description: "Discover engaging number word games and activities using letter-to-number codes. Perfect for families and classrooms.",
    image: "/images/blog/number-word-games-hero.jpg",
    imageAlt: "Family playing word games with colorful letter and number tiles",
  },
  {
    slug: "secret-codes-with-letters-numbers",
    title: "How to Create Secret Codes with Letters and Numbers",
    description: "Learn how to create your own secret codes using letters and numbers. Perfect for kids and anyone who wants to send encrypted messages.",
    image: "/images/blog/secret-codes-hero.jpg",
    imageAlt: "Secret spy theme with coded messages and decoder ring",
  },
  {
    slug: "letters-to-numbers-translator",
    title: "Letters to Numbers Translator",
    description: "Use our free letters to numbers translator to instantly convert any text to numerical values. Learn how letter-to-number translation works.",
    image: "/images/blog/letters-to-numbers-translator.jpg",
    imageAlt: "Letters to numbers translator interface showing text being converted",
  },
  {
    slug: "alphabet-to-numbers-converter",
    title: "Alphabet to Numbers Converter",
    description: "Free alphabet to numbers converter tool. Convert any letter A-Z to its numerical position 1-26 instantly.",
    image: "/images/blog/alphabet-to-numbers-converter.jpg",
    imageAlt: "Alphabet to numbers converter showing A-Z letters with numbers 1-26",
  },
  {
    slug: "a0z25-cipher",
    title: "A0Z25 Cipher",
    description: "Learn about the A0Z25 cipher, a zero-indexed letter-to-number encoding system where A=0, B=1, through Z=25.",
    image: "/images/blog/a0z25-cipher-hero.jpg",
    imageAlt: "A0Z25 cipher chart showing zero-indexed alphabet A=0 through Z=25",
  },
  {
    slug: "a1z26-translator",
    title: "A1Z26 Translator",
    description: "Use our free A1Z26 translator to convert letters to numbers and numbers to letters. The A1Z26 cipher assigns A=1, B=2 through Z=26.",
    image: "/images/blog/a1z26-translator-hero.jpg",
    imageAlt: "A1Z26 translator showing alphabet letters converting to numbers 1-26",
  },
  {
    slug: "alphanumeric-converter",
    title: "Alphanumeric Converter",
    description: "Free alphanumeric converter tool to transform text into numbers, ASCII codes, hex, and binary. Convert between letters and numeric representations.",
    image: "/images/blog/alphanumeric-converter-hero.jpg",
    imageAlt: "Alphanumeric converter showing text transforming into numbers and digital codes",
  },
  {
    slug: "build-your-own-escape-room",
    title: "Build Your Own Escape Room",
    description: "Learn how to build your own escape room with our complete guide. Create cipher puzzles, design challenges, and share with friends using our free escape room builder.",
    image: "/images/blog/build-your-own-escape-room.jpg",
    imageAlt: "People solving puzzles in an escape room with ciphers and clues",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Letters to Numbers Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our guides, tutorials, and articles about letter-to-number conversion, encoding systems, puzzles, and more.
              </p>
            </header>

            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row gap-6 p-4 -mx-4 rounded-xl hover:bg-muted/30 transition-colors"
                >
                  <div className="relative w-full sm:w-64 h-48 sm:h-40 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.description}
                    </p>
                    <span className="mt-3 text-sm text-primary font-medium">
                      Read article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

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

      <SiteFooter />
    </main>
  )
}
