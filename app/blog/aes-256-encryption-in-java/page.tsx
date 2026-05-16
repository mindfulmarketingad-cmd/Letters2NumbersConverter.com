import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'AES 256 Encryption in Java' },
  description: 'Complete guide to AES-256 encryption in Java with working code examples. Covers key generation, CBC and GCM modes, IV handling, padding, and common security pitfalls.',
  keywords: ['aes 256 encryption in java', 'aes encryption java', 'java aes 256', 'aes gcm java', 'javax.crypto java', 'java encryption decryption', 'aes cbc java', 'java cryptography'],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'AES-256 Encryption in Java — Complete Code Guide',
    description: 'Working Java code for AES-256 encryption and decryption. Covers key generation, GCM mode, IV handling, and security best practices.',
    type: 'article',
    url: 'https://www.letters2numbersconverter.com/blog/aes-256-encryption-in-java',
  },
  alternates: { canonical: 'https://www.letters2numbersconverter.com/blog/aes-256-encryption-in-java' },
}

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/aes-256-encryption-in-java`
const PUBLISHED = '2026-05-15T00:00:00.000Z'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AES-256 Encryption in Java — Complete Code Guide',
  description:
    'Complete guide to AES-256 encryption in Java with working code examples. Covers key generation, CBC and GCM modes, IV handling, padding, and common security pitfalls.',
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  url: PAGE_URL,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters to Numbers Converter', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is AES-256 available in standard Java without third-party libraries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AES-256 is available in every JDK via the javax.crypto package. No third-party dependencies are needed. Since Java 8u161 (released January 2018), 256-bit keys are enabled by default — you no longer need to install the separate Unlimited Strength JCE policy files.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between AES-128 and AES-256 in Java?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The only code difference is the key size passed to KeyGenerator.init(): use 128 for AES-128 or 256 for AES-256. AES-256 uses a 32-byte key and applies 14 encryption rounds vs 10 rounds for AES-128. AES-256 provides a larger security margin and is recommended for long-lived sensitive data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use AES/CBC or AES/GCM in Java?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prefer AES/GCM/NoPadding for new code. GCM is an Authenticated Encryption with Associated Data (AEAD) mode that provides both confidentiality and integrity — if the ciphertext is tampered with, decryption throws AEADBadTagException. CBC provides confidentiality only and requires careful padding handling to avoid padding-oracle attacks. For legacy interoperability, CBC is acceptable; for new systems, use GCM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I store the AES encryption key securely in Java?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never hardcode keys in source code. The correct approaches are: (1) use environment variables to pass the Base64-encoded key at runtime; (2) use a dedicated secrets manager such as AWS Secrets Manager, HashiCorp Vault, or Azure Key Vault; (3) use the Java KeyStore API to store the key in an encrypted keystore file. For password-based encryption, derive the key with PBKDF2WithHmacSHA256 rather than using the password bytes directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Has AES-256 ever been broken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. AES-256 has never been broken in practice. The best known theoretical attacks (such as the biclique cryptanalysis published in 2011) reduce the complexity only marginally below 2^256 and remain entirely computationally infeasible. AES-256 is widely considered secure by the global cryptographic research community and is approved by the NSA for protecting classified information at the TOP SECRET level.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'AES 256 Encryption in Java', item: PAGE_URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true" className="select-none">/</li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li aria-hidden="true" className="select-none">/</li>
              <li className="text-foreground font-medium">AES 256 Encryption in Java</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-3">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1">
                Java Cryptography
              </span>
              <span className="ml-3 text-xs text-muted-foreground">
                {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                &nbsp;·&nbsp;By Letters2NumbersConverter.com
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
              AES-256 Encryption in Java
            </h1>

            <p className="text-sm text-muted-foreground text-center mb-6">
              By Letters2NumbersConverter.com | {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
              AES-256 is the encryption standard used by the US government to protect classified data, by banks to secure transactions, and by every HTTPS connection on the internet. Here&apos;s how to implement it correctly in Java — with the gotchas that most tutorials skip.
            </p>
          </header>

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

            {/* Table of Contents */}
            <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
              <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
              <ol className="space-y-1.5 text-sm list-decimal list-inside">
                <li><a href="#aes-256-fundamentals" className="text-primary hover:underline">AES-256 Fundamentals — What You Need to Know Before Writing Code</a></li>
                <li><a href="#java-requirements" className="text-primary hover:underline">Setting Up: Java Requirements and Imports</a></li>
                <li><a href="#key-generation" className="text-primary hover:underline">Key Generation — KeyGenerator and PBKDF2</a></li>
                <li><a href="#aes-cbc-mode" className="text-primary hover:underline">AES-256 with CBC Mode — Complete Working Example</a></li>
                <li><a href="#aes-gcm-mode" className="text-primary hover:underline">AES-256 with GCM Mode — Recommended for Production</a></li>
                <li><a href="#key-serialisation" className="text-primary hover:underline">Storing and Serialising Keys</a></li>
                <li><a href="#file-encryption" className="text-primary hover:underline">Complete File Encryption Example</a></li>
                <li><a href="#security-pitfalls" className="text-primary hover:underline">Critical Security Pitfalls to Avoid</a></li>
                <li><a href="#mode-comparison" className="text-primary hover:underline">AES-256 Mode Comparison Table</a></li>
                <li><a href="#common-errors" className="text-primary hover:underline">Common Errors and Fixes</a></li>
                <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
                <li><a href="#conclusion" className="text-primary hover:underline">Conclusion</a></li>
              </ol>
            </nav>

            {/* ── SECTION 1 — Fundamentals ─────────────────────────────────────── */}
            <section>
              <h2 id="aes-256-fundamentals" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                AES-256 Fundamentals — What You Need to Know Before Writing Code
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                <strong className="text-foreground">AES</strong> stands for Advanced Encryption Standard. The underlying algorithm is called{' '}
                <strong className="text-foreground">Rijndael</strong>, designed by Belgian cryptographers Joan Daemen and Vincent Rijmen. NIST standardised it in 2001 (FIPS Publication 197) after a five-year open competition, replacing the aging DES standard.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                AES is a <strong className="text-foreground">symmetric block cipher</strong>: the same secret key is used for both encryption and decryption, and data is processed in fixed-size 128-bit (16-byte) blocks regardless of key size. Three key lengths are standardised:
              </p>

              <div className="overflow-x-auto my-6 rounded-lg border border-border">
                <table className="w-full text-sm border-collapse min-w-[400px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      {['Variant', 'Key Size', 'Rounds'].map(h => (
                        <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['AES-128', '128 bits (16 bytes)', '10'],
                      ['AES-192', '192 bits (24 bytes)', '12'],
                      ['AES-256', '256 bits (32 bytes)', '14'],
                    ].map(([variant, key, rounds]) => (
                      <tr key={variant} className="hover:bg-secondary/20">
                        <td className="py-2 px-3 font-mono font-bold text-foreground text-sm">{variant}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs">{key}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs">{rounds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-base text-muted-foreground mb-4">
                AES-256 applies <strong className="text-foreground">14 rounds</strong> of four operations (SubBytes, ShiftRows, MixColumns, AddRoundKey) to transform plaintext into ciphertext. For the theoretical deep-dive into how those rounds work, see our companion article on{' '}
                <Link href="/blog/what-is-256-bit-aes-encryption" className="text-primary hover:underline">
                  what 256-bit AES encryption is and how it works
                </Link>.
              </p>

              <p className="text-base text-muted-foreground mb-4">
                Because AES is a block cipher, real-world messages are almost always longer than one 16-byte block. A <strong className="text-foreground">mode of operation</strong> determines how repeated AES block encryptions are chained together:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">ECB (Electronic Codebook)</strong> — identical plaintext blocks produce identical ciphertext. Never use.</li>
                <li><strong className="text-foreground">CBC (Cipher Block Chaining)</strong> — each block is XORed with the previous ciphertext block. Common; requires a random IV.</li>
                <li><strong className="text-foreground">GCM (Galois/Counter Mode)</strong> — authenticated encryption (AEAD). Recommended for all new code.</li>
              </ul>

              <p className="text-base text-muted-foreground mb-4">
                Java provides AES through the <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">javax.crypto</code> package — no third-party libraries are required.
              </p>
            </section>

            {/* ── SECTION 2 — Java Requirements ────────────────────────────────── */}
            <section>
              <h2 id="java-requirements" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                Setting Up: Java Requirements and Imports
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                <strong className="text-foreground">Java 8u161 and later</strong> support AES-256 natively — the old requirement to install separate &ldquo;Unlimited Strength JCE&rdquo; policy files was removed in that release. Java 11+ is recommended for new projects.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                No Maven or Gradle dependencies are needed. Everything lives in the JDK. The imports you will use:
              </p>
              <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6">
                <code className="text-sm font-mono text-foreground">{`import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.SecureRandom;
import java.security.spec.KeySpec;
import java.util.Base64;`}</code>
              </pre>

              <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Quick Java Version Check</p>
                <p className="text-sm text-muted-foreground">
                  Run <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">java -version</code> in your terminal. You need at least{' '}
                  <strong className="text-foreground">Java 8u161</strong>. If you see <em>java.security.InvalidKeyException: Illegal key size</em> at runtime, your JDK predates that release — upgrade or install the JCE policy files.
                </p>
              </div>
            </section>

            {/* ── SECTION 3 — Key Generation ───────────────────────────────────── */}
            <section>
              <h2 id="key-generation" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                Key Generation — KeyGenerator and PBKDF2
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                A 256-bit AES key is exactly <strong className="text-foreground">32 bytes</strong> of random data. There are two main approaches depending on your use case.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Approach A: KeyGenerator (for randomly generated keys)
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Use this when you generate a key once and store it securely (environment variable, secrets manager, KeyStore). The JDK&apos;s <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">KeyGenerator</code> internally uses <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">SecureRandom</code>, so the key is cryptographically random.
              </p>
              <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6">
                <code className="text-sm font-mono text-foreground">{`import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.NoSuchAlgorithmException;

public class AesKeyGenerator {

    public static SecretKey generateKey() throws NoSuchAlgorithmException {
        KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
        keyGenerator.init(256); // 256-bit key
        return keyGenerator.generateKey();
    }
}`}</code>
              </pre>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Approach B: PBKDF2 (for password-based encryption)
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                When a human password is the secret, never use its bytes directly as a key. Passwords are short, low-entropy, and predictable. Instead, use{' '}
                <strong className="text-foreground">PBKDF2WithHmacSHA256</strong> to derive a proper 256-bit key. PBKDF2 is deliberately slow (controlled by iteration count), making brute-force attacks against the password computationally expensive.
              </p>
              <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6">
                <code className="text-sm font-mono text-foreground">{`import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.SecureRandom;
import java.security.spec.KeySpec;

public class KeyDerivation {

    /**
     * Derives a 256-bit AES key from a password using PBKDF2WithHmacSHA256.
     * @param password The user's password (cleared from memory after use)
     * @param salt     Random 16-byte salt (stored alongside the ciphertext)
     */
    public static SecretKey deriveKey(char[] password, byte[] salt) throws Exception {
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
        // 310,000 iterations — OWASP 2023 recommendation for PBKDF2-HMAC-SHA256
        KeySpec spec = new PBEKeySpec(password, salt, 310_000, 256);
        SecretKey tmp = factory.generateSecret(spec);
        return new SecretKeySpec(tmp.getEncoded(), "AES");
    }

    /** Generates a cryptographically random 16-byte salt. */
    public static byte[] generateSalt() {
        byte[] salt = new byte[16];
        new SecureRandom().nextBytes(salt);
        return salt;
    }
}`}</code>
              </pre>

              <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Why use a char[] for the password?</p>
                <p className="text-sm text-muted-foreground">
                  Java <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">String</code> objects are immutable and interned — once created, the password bytes can linger in memory until garbage collected (and potentially appear in a heap dump). A{' '}
                  <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">char[]</code> can be explicitly zeroed with{' '}
                  <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">Arrays.fill(password, '\0')</code> after the key is derived, minimising exposure.
                </p>
              </div>
            </section>

            {/* ── SECTION 4 — CBC Mode ─────────────────────────────────────────── */}
            <section>
              <h2 id="aes-cbc-mode" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                AES-256 with CBC Mode — Complete Working Example
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                In <strong className="text-foreground">Cipher Block Chaining (CBC)</strong> mode, each 16-byte plaintext block is XORed with the previous ciphertext block before being encrypted. The first block has nothing to chain with, so a random{' '}
                <strong className="text-foreground">Initialization Vector (IV)</strong> of 16 bytes plays that role. Key points about the IV:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Must be <strong className="text-foreground">randomly generated</strong> using <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">SecureRandom</code> for every encryption operation.</li>
                <li>Must be <strong className="text-foreground">stored or transmitted alongside the ciphertext</strong> — decryption cannot succeed without it.</li>
                <li>The IV is <strong className="text-foreground">not secret</strong> — it just needs to be unpredictable per-message.</li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                CBC requires <strong className="text-foreground">PKCS5Padding</strong> (equivalent to PKCS7 in Java) because AES blocks are always 16 bytes and your plaintext is rarely an exact multiple of 16 bytes.
              </p>

              <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6">
                <code className="text-sm font-mono text-foreground">{`import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import java.security.SecureRandom;
import java.util.Base64;

public class AesCbc {

    private static final String ALGORITHM = "AES/CBC/PKCS5Padding";

    /** Generates a random 16-byte IV. Must be called fresh for every encryption. */
    public static IvParameterSpec generateIv() {
        byte[] iv = new byte[16]; // AES block size = 16 bytes
        new SecureRandom().nextBytes(iv);
        return new IvParameterSpec(iv);
    }

    /**
     * Encrypts a UTF-8 plaintext string and returns a Base64-encoded ciphertext.
     * Store the IV alongside the returned ciphertext for later decryption.
     */
    public static String encrypt(String plaintext, SecretKey key, IvParameterSpec iv)
            throws Exception {
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, key, iv);
        byte[] cipherText = cipher.doFinal(plaintext.getBytes("UTF-8"));
        return Base64.getEncoder().encodeToString(cipherText);
    }

    /**
     * Decrypts a Base64-encoded ciphertext using the same key and IV used during encryption.
     */
    public static String decrypt(String ciphertext, SecretKey key, IvParameterSpec iv)
            throws Exception {
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, key, iv);
        byte[] plainText = cipher.doFinal(Base64.getDecoder().decode(ciphertext));
        return new String(plainText, "UTF-8");
    }

    public static void main(String[] args) throws Exception {
        SecretKey key = AesKeyGenerator.generateKey();
        IvParameterSpec iv = generateIv();

        String original = "Hello, World! This is a secret message.";
        String encrypted = encrypt(original, key, iv);
        String decrypted = decrypt(encrypted, key, iv);

        System.out.println("Original:  " + original);
        System.out.println("Encrypted: " + encrypted);
        System.out.println("Decrypted: " + decrypted);
    }
}`}</code>
              </pre>

              <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">How to transmit the IV with the ciphertext</p>
                <p className="text-sm text-muted-foreground mb-2">
                  A common pattern is to prepend the IV bytes to the ciphertext bytes before Base64-encoding the whole thing, then split them apart on decryption. This avoids managing two separate fields:
                </p>
                <pre className="bg-background border border-border rounded-lg p-3 overflow-x-auto">
                  <code className="text-xs font-mono text-foreground">{`// Combine IV + ciphertext into one Base64 blob
byte[] ivBytes = iv.getIV();
byte[] cipherBytes = Base64.getDecoder().decode(encrypted);
byte[] combined = new byte[ivBytes.length + cipherBytes.length];
System.arraycopy(ivBytes, 0, combined, 0, ivBytes.length);
System.arraycopy(cipherBytes, 0, combined, ivBytes.length, cipherBytes.length);
String payload = Base64.getEncoder().encodeToString(combined);

// On the receiving side — split first 16 bytes as IV
byte[] received = Base64.getDecoder().decode(payload);
byte[] extractedIv = Arrays.copyOfRange(received, 0, 16);
byte[] extractedCipher = Arrays.copyOfRange(received, 16, received.length);`}</code>
                </pre>
              </div>
            </section>

            {/* ── SECTION 5 — GCM Mode ─────────────────────────────────────────── */}
            <section>
              <h2 id="aes-gcm-mode" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                AES-256 with GCM Mode — Recommended for Production
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                <strong className="text-foreground">Galois/Counter Mode (GCM)</strong> is the strongly recommended choice for new Java code. Here is why it is better than CBC:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">Authenticated Encryption (AEAD)</strong> — GCM produces a 128-bit authentication tag that covers both the ciphertext and any associated plaintext headers (e.g., record IDs). If any byte of the ciphertext is modified, decryption throws <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">AEADBadTagException</code>.</li>
                <li><strong className="text-foreground">No padding</strong> — GCM is a stream-cipher mode internally; plaintext of any length is accepted without padding.</li>
                <li><strong className="text-foreground">Parallelisable</strong> — unlike CBC encryption, GCM encryption and decryption can be parallelised across multiple cores.</li>
                <li><strong className="text-foreground">TLS 1.3 default</strong> — AES-256-GCM is a mandatory cipher suite in TLS 1.3.</li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                GCM uses a <strong className="text-foreground">96-bit (12-byte) nonce</strong> rather than a 16-byte IV. Like the CBC IV, it must be randomly generated for every encryption and stored with the ciphertext. Critically: <strong className="text-foreground">never reuse a nonce with the same key in GCM</strong>. Nonce reuse in GCM is catastrophic — an attacker can recover the authentication key and forge ciphertext.
              </p>

              <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6">
                <code className="text-sm font-mono text-foreground">{`import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;
import java.security.SecureRandom;
import java.util.Base64;

public class AesGcm {

    private static final String ALGORITHM = "AES/GCM/NoPadding";
    private static final int GCM_IV_LENGTH = 12;   // 96 bits — GCM standard nonce size
    private static final int GCM_TAG_LENGTH = 128; // authentication tag size in bits

    /**
     * Encrypts plaintext bytes using AES-256-GCM.
     * The returned byte array has the 12-byte nonce prepended to the ciphertext
     * (which already includes the 16-byte GCM authentication tag appended by Java).
     */
    public static byte[] encrypt(byte[] plaintext, SecretKey key) throws Exception {
        byte[] iv = new byte[GCM_IV_LENGTH];
        new SecureRandom().nextBytes(iv);

        Cipher cipher = Cipher.getInstance(ALGORITHM);
        GCMParameterSpec parameterSpec = new GCMParameterSpec(GCM_TAG_LENGTH, iv);
        cipher.init(Cipher.ENCRYPT_MODE, key, parameterSpec);

        byte[] cipherText = cipher.doFinal(plaintext);

        // Prepend the IV to the ciphertext so we can extract it during decryption
        byte[] cipherTextWithIv = new byte[GCM_IV_LENGTH + cipherText.length];
        System.arraycopy(iv, 0, cipherTextWithIv, 0, GCM_IV_LENGTH);
        System.arraycopy(cipherText, 0, cipherTextWithIv, GCM_IV_LENGTH, cipherText.length);

        return cipherTextWithIv;
    }

    /**
     * Decrypts AES-256-GCM ciphertext produced by {@link #encrypt}.
     * Throws AEADBadTagException if the data has been tampered with.
     */
    public static byte[] decrypt(byte[] cipherTextWithIv, SecretKey key) throws Exception {
        // Extract the IV from the beginning of the message
        byte[] iv = new byte[GCM_IV_LENGTH];
        System.arraycopy(cipherTextWithIv, 0, iv, 0, GCM_IV_LENGTH);

        byte[] cipherText = new byte[cipherTextWithIv.length - GCM_IV_LENGTH];
        System.arraycopy(cipherTextWithIv, GCM_IV_LENGTH, cipherText, 0, cipherText.length);

        Cipher cipher = Cipher.getInstance(ALGORITHM);
        GCMParameterSpec parameterSpec = new GCMParameterSpec(GCM_TAG_LENGTH, iv);
        cipher.init(Cipher.DECRYPT_MODE, key, parameterSpec);

        return cipher.doFinal(cipherText); // throws AEADBadTagException on tamper
    }

    public static void main(String[] args) throws Exception {
        SecretKey key = AesKeyGenerator.generateKey();

        String original = "Sensitive data that needs authenticated encryption";
        byte[] encrypted = encrypt(original.getBytes("UTF-8"), key);
        byte[] decrypted = decrypt(encrypted, key);

        System.out.println("Original:  " + original);
        System.out.println("Encrypted (Base64): " + Base64.getEncoder().encodeToString(encrypted));
        System.out.println("Decrypted: " + new String(decrypted, "UTF-8"));
    }
}`}</code>
              </pre>

              <div className="border border-green-500/30 bg-green-500/5 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Good practice: always verify the AEADBadTagException</p>
                <p className="text-sm text-muted-foreground">
                  Wrap GCM decryption in a try-catch that specifically handles{' '}
                  <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">javax.crypto.AEADBadTagException</code>. When that exception is thrown, discard the data entirely — do not attempt partial use of the decrypted bytes. Java does not release any plaintext until the tag is verified, so you are protected as long as you do not catch and swallow the exception.
                </p>
              </div>
            </section>

            {/* ── SECTION 6 — Key Serialisation ────────────────────────────────── */}
            <section>
              <h2 id="key-serialisation" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                Storing and Serialising Keys
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                A <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">SecretKey</code> object lives in memory for the lifetime of your application. To persist it between restarts — or hand it to another service — you need to serialise the raw key bytes and store them securely.
              </p>

              <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6">
                <code className="text-sm font-mono text-foreground">{`import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class KeyStorage {

    /** Serialise a SecretKey to a Base64 string for safe text storage. */
    public static String keyToBase64(SecretKey secretKey) {
        byte[] encodedKey = secretKey.getEncoded();
        return Base64.getEncoder().encodeToString(encodedKey);
    }

    /** Restore a SecretKey from a Base64 string previously produced by keyToBase64. */
    public static SecretKey base64ToKey(String base64Key) {
        byte[] decodedKey = Base64.getDecoder().decode(base64Key);
        return new SecretKeySpec(decodedKey, "AES");
    }
}`}</code>
              </pre>

              <div className="border border-red-500/30 bg-red-500/5 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Never hardcode keys in source code</p>
                <p className="text-sm text-muted-foreground">
                  Hardcoded keys are the single most common encryption mistake. Any developer with repository access — or anyone who ever had it — can decrypt your data. Keys committed to git are compromised forever (they live in history even if you delete the line). Use one of these approaches instead:
                </p>
                <ul className="list-disc pl-4 mt-2 space-y-1 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Environment variables</strong> — inject <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">System.getenv("AES_KEY")</code> at runtime.</li>
                  <li><strong className="text-foreground">AWS Secrets Manager / Azure Key Vault / HashiCorp Vault</strong> — purpose-built secret storage with audit logging and rotation.</li>
                  <li><strong className="text-foreground">Java KeyStore</strong> — store <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">SecretKey</code> entries in a password-protected <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">.jks</code> or <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">.p12</code> file managed outside the source tree.</li>
                </ul>
              </div>
            </section>

            {/* ── SECTION 7 — File Encryption ──────────────────────────────────── */}
            <section>
              <h2 id="file-encryption" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                Complete File Encryption Example
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                Encrypting files requires streaming the data through the cipher rather than loading the whole file into memory. The example below uses AES-256-GCM and the Java NIO{' '}
                <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">Files</code> API for efficient I/O. The 12-byte nonce is written as the first bytes of the output file so it can be recovered during decryption.
              </p>

              <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6">
                <code className="text-sm font-mono text-foreground">{`import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;
import java.security.SecureRandom;

public class FileEncryptor {

    private static final String ALGORITHM = "AES/GCM/NoPadding";
    private static final int IV_SIZE = 12;    // bytes (96-bit nonce)
    private static final int TAG_SIZE = 128;  // bits

    /**
     * Encrypts the file at inputFile, writing the result to outputFile.
     * Format: [12-byte nonce][ciphertext + 16-byte GCM tag]
     */
    public static void encryptFile(Path inputFile, Path outputFile, SecretKey key)
            throws Exception {
        byte[] iv = new byte[IV_SIZE];
        new SecureRandom().nextBytes(iv);

        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, key, new GCMParameterSpec(TAG_SIZE, iv));

        try (InputStream in = Files.newInputStream(inputFile);
             OutputStream out = Files.newOutputStream(outputFile)) {
            out.write(iv); // write the nonce first
            byte[] buffer = new byte[8192];
            int bytesRead;
            while ((bytesRead = in.read(buffer)) != -1) {
                byte[] encrypted = cipher.update(buffer, 0, bytesRead);
                if (encrypted != null) out.write(encrypted);
            }
            out.write(cipher.doFinal()); // flushes final block + GCM tag
        }
    }

    /**
     * Decrypts a file previously encrypted by {@link #encryptFile}.
     * Throws AEADBadTagException if the file has been modified or the key is wrong.
     */
    public static void decryptFile(Path inputFile, Path outputFile, SecretKey key)
            throws Exception {
        try (InputStream in = Files.newInputStream(inputFile);
             OutputStream out = Files.newOutputStream(outputFile)) {
            // Read the nonce from the beginning of the file
            byte[] iv = new byte[IV_SIZE];
            if (in.read(iv) != IV_SIZE) {
                throw new IOException("Invalid encrypted file: nonce truncated");
            }

            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, key, new GCMParameterSpec(TAG_SIZE, iv));

            byte[] buffer = new byte[8192];
            int bytesRead;
            while ((bytesRead = in.read(buffer)) != -1) {
                byte[] decrypted = cipher.update(buffer, 0, bytesRead);
                if (decrypted != null) out.write(decrypted);
            }
            out.write(cipher.doFinal()); // verifies GCM tag — throws on tamper
        }
    }
}`}</code>
              </pre>

              <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">GCM authentication and streaming</p>
                <p className="text-sm text-muted-foreground">
                  Note that <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">cipher.update()</code> returns partially decrypted plaintext during streaming. Java&apos;s GCM implementation holds the last 16 bytes (the authentication tag) in its buffer and only verifies it on{' '}
                  <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">doFinal()</code>. This means plaintext bytes are emitted <em>before</em> the tag is verified. For high-security applications, buffer the output and only write to disk after <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">doFinal()</code> succeeds — or use a temporary file and rename it on success.
                </p>
              </div>
            </section>

            {/* ── SECTION 8 — Security Pitfalls ────────────────────────────────── */}
            <section>
              <h2 id="security-pitfalls" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                Critical Security Pitfalls to Avoid
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                Correct AES-256 code is not difficult to write, but the mistakes are subtle and the consequences are severe. These are the six most common errors found in real Java codebases:
              </p>

              <div className="border border-red-500/30 bg-red-500/5 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">1. Never use ECB mode</p>
                <p className="text-sm text-muted-foreground">
                  <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">AES/ECB/PKCS5Padding</code> encrypts each 16-byte block independently. Identical plaintext blocks always produce identical ciphertext blocks — structural patterns in your data survive encryption. The classic demonstration is encrypting a bitmap image with ECB: the block boundaries remain clearly visible in the output. ECB should never appear in production code.
                </p>
              </div>

              <div className="border border-red-500/30 bg-red-500/5 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">2. Never reuse an IV with the same key</p>
                <p className="text-sm text-muted-foreground">
                  In GCM, reusing a nonce with the same key is catastrophic: an attacker can XOR two ciphertexts to cancel the keystream, recover the GCM authentication key (H), and then forge arbitrary authenticated ciphertexts — the encryption is completely broken. In CBC, IV reuse leaks whether two messages share a common prefix. Always generate a fresh random IV using <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">SecureRandom</code> for every single encryption call.
                </p>
              </div>

              <div className="border border-red-500/30 bg-red-500/5 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">3. Never hardcode keys in source code</p>
                <p className="text-sm text-muted-foreground">
                  Any key that appears as a literal in source code is compromised: it is visible to all current and past contributors, it ends up in CI logs, it is stored in git history forever. Use environment variables or a proper secrets manager (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault, GCP Secret Manager).
                </p>
              </div>

              <div className="border border-red-500/30 bg-red-500/5 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">4. Never use a password string directly as a key</p>
                <p className="text-sm text-muted-foreground">
                  This pattern is wrong:{' '}
                  <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">new SecretKeySpec(&quot;mypassword12345&quot;.getBytes(), &quot;AES&quot;)</code>. Passwords are short, biased toward printable ASCII, and low-entropy. Treating the raw bytes as a key gives you far less than 256 bits of actual security. Always use PBKDF2 (or Argon2 via a third-party library) to derive a proper key from a password.
                </p>
              </div>

              <div className="border border-red-500/30 bg-red-500/5 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">5. Do not use CBC without authentication</p>
                <p className="text-sm text-muted-foreground">
                  Raw CBC provides confidentiality but no integrity. An attacker can flip bits in the ciphertext and cause predictable changes in the decrypted plaintext (bit-flipping attacks). If you must use CBC, pair it with an HMAC-SHA256 over the ciphertext (Encrypt-then-MAC). Better: switch to GCM which gives you both in one primitive.
                </p>
              </div>

              <div className="border border-red-500/30 bg-red-500/5 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">6. Do not catch and swallow AEADBadTagException</p>
                <p className="text-sm text-muted-foreground">
                  <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">AEADBadTagException</code> means the data was tampered with, or you are using the wrong key, or the nonce was corrupted. It is not a routine error to retry around. Log it, discard the data, and treat it as a security event. Never silently swallow it and proceed.
                </p>
              </div>
            </section>

            {/* ── SECTION 9 — Mode Comparison Table ───────────────────────────── */}
            <section>
              <h2 id="mode-comparison" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                AES-256 Mode Comparison Table
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                Use this table to choose the right mode for your use case. The Java cipher string is shown for each:
              </p>

              <div className="overflow-x-auto my-6 rounded-lg border border-border">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      {['Mode', 'Java Cipher String', 'Padding', 'IV / Nonce', 'Authenticated', 'Use Case'].map(h => (
                        <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['ECB', 'AES/ECB/PKCS5Padding', 'PKCS5', 'None', 'No', 'Never — patterns leak'],
                      ['CBC', 'AES/CBC/PKCS5Padding', 'PKCS5', '16 bytes', 'No', 'Legacy systems'],
                      ['CTR', 'AES/CTR/NoPadding', 'None', '16 bytes', 'No', 'Streaming + add HMAC'],
                      ['GCM', 'AES/GCM/NoPadding', 'None', '12 bytes', 'Yes (128-bit tag)', 'Recommended'],
                    ].map(([mode, javaStr, padding, iv, auth, useCase]) => (
                      <tr key={mode} className="hover:bg-secondary/20">
                        <td className="py-2 px-3 font-mono font-bold text-foreground text-sm">{mode}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground text-xs">{javaStr}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs">{padding}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs">{iv}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs">{auth}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs">{useCase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── SECTION 10 — Common Errors ───────────────────────────────────── */}
            <section>
              <h2 id="common-errors" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                Common Errors and Fixes
              </h2>

              <div className="space-y-5">
                <div className="bg-muted/50 border border-border rounded-xl p-5">
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    java.security.InvalidKeyException: Illegal key size
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Cause:</strong> You are running a JDK older than Java 8u161. The default JCE policy restricts key sizes to 128 bits.
                  </p>
                  <p className="text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Fix:</strong> Upgrade to Java 8u161 or later (or Java 11+). If you are stuck on an older version, download and install the JCE Unlimited Strength Jurisdiction Policy Files from Oracle. Alternatively, you can programmatically remove the restriction at startup:
                  </p>
                  <pre className="bg-background border border-border rounded-lg p-3 overflow-x-auto">
                    <code className="text-xs font-mono text-foreground">{`// Only needed on JDK < 8u161 — not recommended; upgrade your JDK instead
java.lang.reflect.Field field =
    Class.forName("javax.crypto.JceSecurity").getDeclaredField("isRestricted");
field.setAccessible(true);
field.set(null, false);`}</code>
                  </pre>
                </div>

                <div className="bg-muted/50 border border-border rounded-xl p-5">
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    javax.crypto.BadPaddingException (during CBC decryption)
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Cause:</strong> Wrong key, wrong IV, or the ciphertext was corrupted or truncated. CBC PKCS5 padding is validated during decryption — if the last block does not end with valid padding bytes, this exception is thrown.
                  </p>
                  <p className="text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Fix:</strong> Verify that the same key and IV used for encryption are being used for decryption. If you are transmitting the IV with the ciphertext (recommended), double-check your byte splitting logic — off-by-one errors are common. Consider switching to GCM, which provides a more informative authentication failure.
                  </p>
                </div>

                <div className="bg-muted/50 border border-border rounded-xl p-5">
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    javax.crypto.AEADBadTagException
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Cause:</strong> In GCM mode, the authentication tag verification failed. This means either the ciphertext was modified after encryption, the key is wrong, the nonce was wrong, or the ciphertext was truncated (so the 16-byte tag at the end is missing or partial).
                  </p>
                  <p className="text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Fix:</strong> Check that the full ciphertext (nonce + ciphertext bytes + tag bytes) is being transmitted and received intact. Common culprit: using UTF-8 string conversion on raw ciphertext bytes — always use Base64 for text transport. Also verify the same key is in use.
                  </p>
                </div>

                <div className="bg-muted/50 border border-border rounded-xl p-5">
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    java.lang.IllegalArgumentException: IV must be 16 bytes long
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Cause:</strong> You are passing a 16-byte IV array to <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">GCMParameterSpec</code>, which expects 12 bytes for GCM. The 16-byte size is correct for CBC&apos;s <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">IvParameterSpec</code>, not for GCM.
                  </p>
                  <p className="text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Fix:</strong> Use <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">byte[] iv = new byte[12]</code> (12 bytes = 96 bits) when generating the nonce for GCM. Use <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">byte[] iv = new byte[16]</code> (16 bytes = 128 bits) for CBC&apos;s <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">IvParameterSpec</code>.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION 11 — FAQ ─────────────────────────────────────────────── */}
            <section>
              <h2 id="faq" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Is AES-256 available in standard Java without third-party libraries?
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Yes, completely. AES-256 is built into the JDK via the <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">javax.crypto</code> package. No Maven or Gradle dependency is required. Since <strong className="text-foreground">Java 8u161</strong> (released January 2018), 256-bit keys work out of the box without installing any policy files. If you are running a newer Java 11+ runtime, AES-256 is always available.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    What is the difference between AES-128 and AES-256 in Java?
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    The only code change is the argument to <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">keyGenerator.init()</code>: pass <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">128</code> for AES-128 or <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">256</code> for AES-256. Under the hood, AES-128 uses a 16-byte key and 10 rounds; AES-256 uses a 32-byte key and 14 rounds. Both operate on the same 128-bit block size and accept the same cipher mode strings. AES-256 is marginally slower (roughly 40% more round operations) but the difference is negligible in practice compared to I/O.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Should I use CBC or GCM in Java?
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Use GCM for all new code.</strong> GCM provides authenticated encryption — it simultaneously guarantees confidentiality (attackers cannot read the data) and integrity (attackers cannot modify the data undetected). CBC provides confidentiality only; without a separate HMAC, a CBC-encrypted payload can be manipulated in predictable ways (padding oracle, bit-flipping). CBC is still acceptable for legacy interoperability where GCM is not available, but adds implementation complexity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    How do I store the AES encryption key securely in Java?
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    The options in order of preference: <strong className="text-foreground">(1) Cloud secrets manager</strong> (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault) — retrieves the key at startup over an authenticated API. <strong className="text-foreground">(2) Environment variable</strong> — inject <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">System.getenv("AES_KEY")</code> as a Base64 string and convert with <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">new SecretKeySpec(Base64.getDecoder().decode(b64), "AES")</code>. <strong className="text-foreground">(3) Java KeyStore</strong> — use a <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">PKCS12</code> keystore file, password-protected and stored outside the project. Never commit the keystore or its password to version control.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Has AES-256 ever been broken?
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    No. AES-256 has never been broken in practice. The best known theoretical attack (biclique cryptanalysis, 2011) reduces the computational complexity from 2<sup>256</sup> to roughly 2<sup>254.4</sup> — a negligible improvement that remains astronomically far beyond any feasible computation. AES-256 is approved by the NSA for TOP SECRET data and is considered computationally secure by the global cryptographic research community. For a deeper look at the theoretical security guarantees, see our article on{' '}
                    <Link href="/blog/what-is-256-bit-aes-encryption" className="text-primary hover:underline">
                      what 256-bit AES encryption is
                    </Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION 12 — Conclusion ──────────────────────────────────────── */}
            <section>
              <h2 id="conclusion" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
                Conclusion
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                Java&apos;s <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">javax.crypto</code> package gives you everything needed to implement AES-256 correctly without any third-party libraries. The key decisions in practice:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Use <strong className="text-foreground">KeyGenerator with 256 bits</strong> for random keys, or <strong className="text-foreground">PBKDF2WithHmacSHA256</strong> for password-derived keys.</li>
                <li>Prefer <strong className="text-foreground">AES/GCM/NoPadding</strong> for all new code — it gives you authenticated encryption in one primitive.</li>
                <li>Generate a <strong className="text-foreground">fresh random nonce or IV</strong> with <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">SecureRandom</code> for every encryption call.</li>
                <li>Prepend the nonce to the ciphertext so the recipient can always extract it during decryption.</li>
                <li>Store keys in environment variables or a secrets manager — never in source code.</li>
                <li>Never catch and swallow <code className="font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded text-sm">AEADBadTagException</code>.</li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                For the theoretical grounding behind why AES-256 is so secure — the 14-round structure, the key schedule, the S-box nonlinearity — read our companion guide:{' '}
                <Link href="/blog/what-is-256-bit-aes-encryption" className="text-primary hover:underline">
                  What Is 256-Bit AES Encryption
                </Link>.
              </p>

              {/* Related articles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  {
                    href: '/blog/what-is-256-bit-aes-encryption',
                    label: 'What Is 256-Bit AES Encryption',
                    desc: 'Deep dive into the theory: 14 rounds, key schedule, modes of operation',
                    internal: true,
                  },
                  {
                    href: '/blog/understanding-ascii-character-encoding',
                    label: 'Understanding ASCII Character Encoding',
                    desc: 'How text bytes flow into a block cipher',
                    internal: true,
                  },
                  {
                    href: '/blog/how-to-encode-java',
                    label: 'How to Encode in Java',
                    desc: 'Base64, URL encoding, and hex encoding in Java',
                    internal: true,
                  },
                  {
                    href: '/blog/letter-number-converters-cryptography',
                    label: 'Letter-Number Converters & Cryptography',
                    desc: 'The bridge between character codes and cipher design',
                    internal: true,
                  },
                ].map(({ href, label, desc, internal }) =>
                  internal ? (
                    <Link
                      key={href}
                      href={href}
                      className="block rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors p-4"
                    >
                      <span className="text-sm font-semibold text-primary block mb-1">{label}</span>
                      <span className="text-xs text-muted-foreground">{desc}</span>
                    </Link>
                  ) : (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors p-4"
                    >
                      <span className="text-sm font-semibold text-primary block mb-1">{label} ↗</span>
                      <span className="text-xs text-muted-foreground">{desc}</span>
                    </a>
                  )
                )}
              </div>
            </section>

          </article>
        </div>
      </main>
    </>
  )
}
