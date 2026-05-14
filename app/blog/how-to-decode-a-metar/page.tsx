import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-decode-a-metar`
const PUBLISHED = '2026-05-14T00:00:00.000Z'

export const metadata: Metadata = {
  title: 'How To Decode a METAR — Field-by-Field Weather Code Breakdown',
  description:
    'Learn how to decode a METAR step by step. This complete guide covers every field in a METAR report — wind, visibility, sky conditions, temperature, altimeter, and remarks — with a real example decoded field by field.',
  keywords: [
    'how to decode a metar',
    'metar decoder',
    'metar weather code',
    'read metar',
    'aviation weather metar',
    'metar format explained',
    'metar abbreviations',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How To Decode a METAR — Field-by-Field Weather Code Breakdown',
    description:
      'Learn how to decode a METAR step by step. Every field explained with a real example, sky condition codes, weather phenomena codes, and a quick-reference abbreviations table.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['John Reed'],
    images: [
      {
        url: `${BASE_URL}/images/blog/ascii-encoding.jpg`,
        width: 800,
        height: 450,
        alt: 'how to decode a metar — METAR weather code breakdown',
      },
    ],
  },
  alternates: { canonical: PAGE_URL },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Decode a METAR: A Field-by-Field Breakdown',
  description:
    'Learn how to decode a METAR step by step. This complete guide covers every field in a METAR report — wind, visibility, sky conditions, temperature, altimeter, and remarks — with a real example decoded field by field.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'Letters2NumbersConverter.com',
    url: BASE_URL,
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often is a METAR issued?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most airports issue a METAR every 30 or 60 minutes on a routine schedule. When weather conditions change significantly between routine reports — such as a sudden drop in visibility or a wind shift — a special METAR called a SPECI is issued immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Z mean in a METAR time group?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Z stands for Zulu time, which is another name for Coordinated Universal Time (UTC). All METAR observations worldwide are reported in UTC to eliminate confusion across time zones. For example, 121755Z means the 12th day of the month at 17:55 UTC.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between BKN and OVC in a METAR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BKN (broken) means 5 to 7 oktas (eighths) of the sky are covered by clouds, while OVC (overcast) means all 8 oktas — the entire sky — are covered. Both BKN and OVC are considered ceiling layers, which matters for instrument flight rules (IFR) minimums.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does AO2 mean in the METAR remarks section?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AO2 appears in the RMK (remarks) section of US METARs and indicates the station is an automated weather observing system equipped with a precipitation discriminator — a sensor that can distinguish between liquid and frozen precipitation. AO1 means the automated station lacks that sensor.',
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How To Decode a METAR',
      item: PAGE_URL,
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav className="mb-6 text-sm text-blue-600">
          <Link href="/blog">← Blog</Link>
        </nav>
        <article>
          <h1 className="text-3xl font-bold leading-tight mb-3">
            How To Decode a METAR: A Field-by-Field Weather Code Breakdown
          </h1>
          <p className="text-sm text-gray-500 mt-2 mb-6">
            By <strong>John Reed</strong> · May 14, 2026
          </p>

          <Image
            src="/images/blog/ascii-encoding.jpg"
            alt="how to decode a metar — METAR weather code breakdown"
            width={800}
            height={450}
            className="rounded-lg mb-8 w-full"
            priority
          />

          <p className="text-lg mb-6">
            Understanding how to decode a METAR is an essential skill for pilots, student aviators,
            flight dispatchers, and anyone who needs to interpret real-time aviation weather. A METAR
            is a dense string of codes and abbreviations, but once you know what each field
            represents, reading one becomes fast and intuitive. This guide walks through every
            component of a METAR report from start to finish, using a real example decoded field by
            field.
          </p>

          {/* Section 1 */}
                    <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#what-is-a-metar" className="text-primary hover:underline">What Is a METAR?</a></li>
            <li><a href="#reading-a-metar-line-by-line" className="text-primary hover:underline">Reading a METAR Line by Line</a></li>
            <li><a href="#metar-sky-condition-codes-explained" className="text-primary hover:underline">METAR Sky Condition Codes Explained</a></li>
            <li><a href="#weather-phenomena-codes" className="text-primary hover:underline">Weather Phenomena Codes</a></li>
            <li><a href="#understanding-the-remarks-section" className="text-primary hover:underline">Understanding the Remarks Section</a></li>
            <li><a href="#common-metar-abbreviations-quick-reference" className="text-primary hover:underline">Common METAR Abbreviations Quick Reference</a></li>
            <li><a href="#free-tools-to-decode-a-metar-automatically" className="text-primary hover:underline">Free Tools to Decode a METAR Automatically</a></li>
            <li><a href="#frequently-asked-questions-about-decoding-metars" className="text-primary hover:underline">Frequently Asked Questions About Decoding METARs</a></li>
            </ol>
          </nav>

<h2 id="what-is-a-metar" className="text-2xl font-semibold mt-10 mb-4 scroll-mt-20">What Is a METAR?</h2>
          <p className="mb-4">
            METAR stands for <strong>Meteorological Aerodrome Report</strong>. It is a standardized
            format for reporting surface weather observations at airports and aerodromes around the
            world. The format is governed by two international bodies: the{' '}
            <strong>International Civil Aviation Organization (ICAO)</strong> and the{' '}
            <strong>World Meteorological Organization (WMO)</strong>. Because those standards are
            global, a pilot in Tokyo can read a METAR from London or Chicago using the same
            knowledge.
          </p>
          <p className="mb-4">
            METARs are issued on a routine schedule — typically every <strong>30 or 60 minutes</strong>{' '}
            depending on the airport. When conditions change significantly between scheduled
            observations — for example, if visibility suddenly drops or a thunderstorm moves
            overhead — a <strong>SPECI</strong> (Special METAR) is issued immediately outside the
            normal cycle. SPECIs use the same format as routine METARs; only the report type
            identifier changes.
          </p>
          <p className="mb-4">
            Pilots use METARs primarily for <strong>pre-flight planning</strong> to determine
            whether weather at the departure airport, en route, or at the destination meets the
            minimums required for their type of flight. Air traffic controllers also monitor METARs
            to communicate current conditions to arriving and departing aircraft.
          </p>

          {/* Section 2 */}
          <h2 id="reading-a-metar-line-by-line" className="text-2xl font-semibold mt-10 mb-4 scroll-mt-20">
            Reading a METAR Line by Line
          </h2>
          <p className="mb-4">
            The best way to understand the METAR format is to take a real example and decode it one
            field at a time. Here is the example we will use throughout this guide:
          </p>

          <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
            METAR KSFO 121755Z 28015KT 10SM FEW040 15/07 A2992 RMK AO2
          </div>

          <p className="mb-6">
            At first glance this looks like a random sequence of characters. Let&rsquo;s work
            through each field from left to right.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Field 1: METAR — Report Type</h3>
          <p className="mb-4">
            The first token identifies the <strong>type of report</strong>. <code>METAR</code>{' '}
            indicates this is a routine scheduled observation. If it were a special observation
            triggered by a significant weather change, this field would read <code>SPECI</code>. If
            a correction is being issued to fix an error in a previously transmitted report, the
            token <code>COR</code> appears here (e.g., <code>METAR COR KSFO ...</code>).
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Field 2: KSFO — Station Identifier</h3>
          <p className="mb-4">
            <code>KSFO</code> is the <strong>ICAO 4-letter airport identifier</strong> for San
            Francisco International Airport. ICAO codes are assigned to every airport worldwide and
            always consist of four letters. The first letter or letters indicate the region:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              <strong>K</strong> — contiguous United States (e.g., KJFK, KORD, KLAX)
            </li>
            <li>
              <strong>C</strong> — Canada (e.g., CYYZ for Toronto Pearson)
            </li>
            <li>
              <strong>EG</strong> — United Kingdom (e.g., EGLL for London Heathrow)
            </li>
            <li>
              <strong>LF</strong> — France, <strong>ED</strong> — Germany, and so on across Europe
            </li>
            <li>
              <strong>RJ</strong> — Japan, <strong>ZB</strong> — northern China
            </li>
          </ul>
          <p className="mb-4">
            Knowing the station identifier, you can look up the airport location to understand the
            geographic context of the observation.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Field 3: 121755Z — Date and Time
          </h3>
          <p className="mb-4">
            <code>121755Z</code> encodes when the observation was taken. The format is{' '}
            <strong>DDHHmmZ</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              <strong>12</strong> — the 12th day of the current month
            </li>
            <li>
              <strong>17</strong> — 17th hour (5 p.m.)
            </li>
            <li>
              <strong>55</strong> — 55th minute
            </li>
            <li>
              <strong>Z</strong> — Zulu time, meaning UTC (Coordinated Universal Time)
            </li>
          </ul>
          <p className="mb-4">
            All METARs worldwide use UTC, not local time. This eliminates any ambiguity when
            sharing weather data across time zones. Pilots planning a cross-country or international
            flight always work in UTC, so METAR times integrate seamlessly with other aviation
            charts and NOTAMs.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Field 4: 28015KT — Wind</h3>
          <p className="mb-4">
            <code>28015KT</code> describes the <strong>surface wind</strong>. The format is{' '}
            <strong>dddffKT</strong> where:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              <strong>280</strong> — wind direction in degrees true (from the north, measured
              clockwise). Here, wind is coming <em>from</em> the west-southwest.
            </li>
            <li>
              <strong>15</strong> — wind speed in knots
            </li>
            <li>
              <strong>KT</strong> — unit is knots
            </li>
          </ul>
          <p className="mb-4">
            A few important variations you will encounter:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              <strong>VRB</strong> replaces the direction when the wind is variable with no
              consistent heading — e.g., <code>VRB05KT</code> means variable at 5 knots.
            </li>
            <li>
              <strong>G</strong> indicates gusts. <code>28015G22KT</code> means the wind is from
              280° at 15 knots with gusts to 22 knots.
            </li>
            <li>
              Some stations report in <strong>MPS</strong> (meters per second) rather than knots,
              particularly outside the US.
            </li>
            <li>
              <code>00000KT</code> means calm wind.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Field 5: 10SM — Visibility</h3>
          <p className="mb-4">
            <code>10SM</code> means visibility is <strong>10 statute miles</strong>. The{' '}
            <strong>SM</strong> suffix denotes statute miles, used in US METARs. International
            METARs report visibility in <strong>meters</strong>. The value{' '}
            <code>9999</code> is used internationally to indicate visibility of 10 km or more — the
            maximum reportable value.
          </p>
          <p className="mb-4">
            Other common US visibility values include <code>3SM</code> (3 statute miles),{' '}
            <code>1/2SM</code> (half a mile), and <code>M1/4SM</code> (less than one-quarter mile).
            Low visibility directly affects instrument flight rules (IFR) minimums and approach
            categories, making this one of the most operationally critical fields in the METAR.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Field 6: FEW040 — Sky Condition
          </h3>
          <p className="mb-4">
            <code>FEW040</code> describes <strong>cloud coverage and height</strong>. The first
            three letters are the coverage code and the three digits after are the cloud base height
            in <strong>hundreds of feet above ground level (AGL)</strong>. So{' '}
            <code>FEW040</code> means a few clouds at 4,000 feet AGL.
          </p>
          <p className="mb-4">
            Sky condition codes are covered in detail in the next section.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Field 7: 15/07 — Temperature and Dew Point
          </h3>
          <p className="mb-4">
            <code>15/07</code> reports temperature and dew point separated by a slash, both in{' '}
            <strong>degrees Celsius</strong> — always Celsius, worldwide, regardless of local
            convention. Here, the temperature is 15°C and the dew point is 7°C.
          </p>
          <p className="mb-4">
            Sub-zero values use the letter <strong>M</strong> (for minus) as a prefix. For example,{' '}
            <code>M03/M08</code> means temperature &minus;3°C, dew point &minus;8°C.
          </p>
          <p className="mb-4">
            The spread between temperature and dew point is useful for estimating the likelihood of
            fog (a narrow spread, such as 2°C or less, increases fog probability) and for
            calculating cloud base heights for convective activity.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Field 8: A2992 — Altimeter Setting</h3>
          <p className="mb-4">
            <code>A2992</code> is the <strong>altimeter setting</strong> — the sea-level pressure
            used to calibrate an aircraft&rsquo;s altimeter.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              The <strong>A prefix</strong> means the value is in <strong>inches of mercury
              (inHg)</strong>, used in the United States, Canada, and a few other countries.{' '}
              <code>A2992</code> = 29.92 inHg.
            </li>
            <li>
              The <strong>Q prefix</strong> means the value is <strong>QNH in hectopascals
              (hPa)</strong>, used internationally. <code>Q1013</code> = 1013 hPa.
            </li>
          </ul>
          <p className="mb-4">
            Standard sea-level pressure is 29.92 inHg (1013.25 hPa). Altimeter settings above or
            below standard affect how aircraft altimeters read, which is why pilots are required to
            update the setting whenever ATC provides a new altimeter or when switching between
            regional pressure areas.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Field 9: RMK AO2 — Remarks</h3>
          <p className="mb-4">
            <code>RMK</code> signals the start of the <strong>remarks section</strong>, which
            contains supplemental information primarily used in the United States. Everything after{' '}
            <code>RMK</code> is US-specific and follows its own set of conventions. In this example,{' '}
            <code>AO2</code> indicates the station is an automated observing system equipped with a
            precipitation discriminator sensor.
          </p>
          <p className="mb-4">
            The remarks section is covered in full detail further below.
          </p>

          {/* Section 3 */}
          <h2 id="metar-sky-condition-codes-explained" className="text-2xl font-semibold mt-10 mb-4 scroll-mt-20">
            METAR Sky Condition Codes Explained
          </h2>
          <p className="mb-4">
            Cloud coverage in a METAR is reported in <strong>oktas</strong> — eighths of the sky.
            Each coverage code maps to a range of oktas:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left">Code</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Coverage</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Oktas</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-mono">SKC</td>
                  <td className="border border-gray-300 px-3 py-2">Sky Clear</td>
                  <td className="border border-gray-300 px-3 py-2">0</td>
                  <td className="border border-gray-300 px-3 py-2">Used at manned stations; automated stations use CLR</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-mono">CLR</td>
                  <td className="border border-gray-300 px-3 py-2">Clear</td>
                  <td className="border border-gray-300 px-3 py-2">0</td>
                  <td className="border border-gray-300 px-3 py-2">Automated; no clouds below 12,000 ft AGL</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-mono">FEW</td>
                  <td className="border border-gray-300 px-3 py-2">Few</td>
                  <td className="border border-gray-300 px-3 py-2">1–2</td>
                  <td className="border border-gray-300 px-3 py-2">Not a ceiling layer</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-mono">SCT</td>
                  <td className="border border-gray-300 px-3 py-2">Scattered</td>
                  <td className="border border-gray-300 px-3 py-2">3–4</td>
                  <td className="border border-gray-300 px-3 py-2">Not a ceiling layer</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-mono">BKN</td>
                  <td className="border border-gray-300 px-3 py-2">Broken</td>
                  <td className="border border-gray-300 px-3 py-2">5–7</td>
                  <td className="border border-gray-300 px-3 py-2">Ceiling layer — relevant for IFR minimums</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-mono">OVC</td>
                  <td className="border border-gray-300 px-3 py-2">Overcast</td>
                  <td className="border border-gray-300 px-3 py-2">8</td>
                  <td className="border border-gray-300 px-3 py-2">Ceiling layer — full sky cover</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-mono">VV</td>
                  <td className="border border-gray-300 px-3 py-2">Vertical Visibility</td>
                  <td className="border border-gray-300 px-3 py-2">—</td>
                  <td className="border border-gray-300 px-3 py-2">Sky obscured; height is into obscuration (e.g., VV010)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            The three-digit number following the coverage code is the cloud base height in{' '}
            <strong>hundreds of feet AGL</strong>. So <code>BKN025</code> means a broken ceiling at
            2,500 feet AGL, and <code>OVC008</code> means overcast at 800 feet AGL — a low ceiling
            that would likely require an instrument approach.
          </p>
          <p className="mb-4">
            A METAR can report up to three separate cloud layers. Each layer is listed in ascending
            order of height. For example:{' '}
            <code>FEW015 SCT060 BKN120</code> describes a few clouds at 1,500 ft, scattered at
            6,000 ft, and a broken ceiling at 12,000 ft.
          </p>
          <p className="mb-4">
            Two special cloud type suffixes can appear after the height:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              <strong>CB</strong> (Cumulonimbus) — a thunderstorm cloud. Operationally significant
              because it indicates severe turbulence, icing, and lightning potential.
              Example: <code>FEW030CB</code>
            </li>
            <li>
              <strong>TCU</strong> (Towering Cumulus) — a rapidly growing cumulus cloud that may
              develop into a cumulonimbus. Example: <code>SCT025TCU</code>
            </li>
          </ul>

          {/* Section 4 */}
          <h2 id="weather-phenomena-codes" className="text-2xl font-semibold mt-10 mb-4 scroll-mt-20">Weather Phenomena Codes</h2>
          <p className="mb-4">
            Present weather is reported between the visibility field and the sky condition field
            when significant precipitation or other phenomena are occurring. The weather code uses a
            structured system of prefixes, descriptors, and phenomena codes.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Intensity Prefixes</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              <strong>-</strong> (minus/hyphen) — Light intensity. Example: <code>-RA</code> = light
              rain
            </li>
            <li>
              <strong>(no prefix)</strong> — Moderate intensity. Example: <code>RA</code> = moderate
              rain
            </li>
            <li>
              <strong>+</strong> (plus) — Heavy intensity. Example: <code>+RA</code> = heavy rain
            </li>
            <li>
              <strong>VC</strong> — In the vicinity (within 5–10 SM of the airport but not at the
              station). Example: <code>VCTS</code> = thunderstorm in the vicinity
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Common Precipitation and Obstruction Codes</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left">Code</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Meaning</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-mono">RA</td>
                  <td className="border border-gray-300 px-3 py-2">Rain</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">-RA, RA, +RA</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-mono">SN</td>
                  <td className="border border-gray-300 px-3 py-2">Snow</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">-SN, +SN</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-mono">DZ</td>
                  <td className="border border-gray-300 px-3 py-2">Drizzle</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">-DZ</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-mono">GR</td>
                  <td className="border border-gray-300 px-3 py-2">Hail</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">+TSGRRA</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-mono">TS</td>
                  <td className="border border-gray-300 px-3 py-2">Thunderstorm</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">TSRA, +TSRA</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-mono">FG</td>
                  <td className="border border-gray-300 px-3 py-2">Fog (visibility &lt; 5/8 SM)</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">FG, BCFG (patchy fog)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-mono">BR</td>
                  <td className="border border-gray-300 px-3 py-2">Mist (visibility 5/8–6 SM)</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">BR</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-mono">HZ</td>
                  <td className="border border-gray-300 px-3 py-2">Haze</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">HZ</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-mono">SQ</td>
                  <td className="border border-gray-300 px-3 py-2">Squall</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">SQ</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-mono">FC</td>
                  <td className="border border-gray-300 px-3 py-2">Funnel Cloud / Tornado (+FC)</td>
                  <td className="border border-gray-300 px-3 py-2 font-mono">+FC</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">Descriptor Codes</h3>
          <p className="mb-4">
            Descriptors are two-letter qualifiers placed between the intensity prefix and the
            phenomenon code:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><strong>TS</strong> — Thunderstorm (e.g., <code>TSRA</code> = thunderstorm with rain)</li>
            <li><strong>SH</strong> — Shower (e.g., <code>SHRA</code> = rain shower, <code>-SHSN</code> = light snow shower)</li>
            <li><strong>FZ</strong> — Freezing (e.g., <code>FZRA</code> = freezing rain, <code>FZDZ</code> = freezing drizzle)</li>
            <li><strong>BL</strong> — Blowing (e.g., <code>BLSN</code> = blowing snow)</li>
            <li><strong>DR</strong> — Low drifting (e.g., <code>DRSN</code> = low-drifting snow)</li>
            <li><strong>MI</strong> — Shallow (e.g., <code>MIFG</code> = shallow fog)</li>
            <li><strong>BC</strong> — Patches (e.g., <code>BCFG</code> = patchy fog)</li>
            <li><strong>PR</strong> — Partial (e.g., <code>PRFG</code> = partial fog)</li>
          </ul>
          <p className="mb-4">
            Weather codes can combine. <code>+TSGR</code> means heavy thunderstorm with hail.{' '}
            <code>-FZDZ</code> means light freezing drizzle. <code>RASN</code> means moderate rain
            and snow falling simultaneously.
          </p>

          {/* Section 5 */}
          <h2 id="understanding-the-remarks-section" className="text-2xl font-semibold mt-10 mb-4 scroll-mt-20">
            Understanding the Remarks Section
          </h2>
          <p className="mb-4">
            The remarks section begins after the <code>RMK</code> token. It is primarily used in
            the United States and contains additional automated sensor data, supplemental weather
            information, and station metadata. International METARs generally do not include a
            remarks section.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Station Type</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              <strong>AO1</strong> — Automated station without a precipitation discriminator. The
              station can detect that precipitation is occurring but cannot distinguish between
              liquid and frozen precipitation types.
            </li>
            <li>
              <strong>AO2</strong> — Automated station with a precipitation discriminator. The
              station can determine whether precipitation is rain, drizzle, snow, and so on.
            </li>
            <li>
              <strong>AUTO</strong> — Fully automated report with no human observer on site. This
              token appears in the body of the METAR (before the RMK section) when the observation
              was taken entirely by automated sensors.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Sea Level Pressure</h3>
          <p className="mb-4">
            <code>SLP</code> followed by three digits provides sea level pressure in hectopascals,
            with an implied leading digit. For example, <code>SLP013</code> decodes as 1001.3 hPa
            (if the result would be below 1050, prepend 10; if it would be 1050 or above, prepend
            9). <code>SLP992</code> = 999.2 hPa.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Precipitation Accumulation</h3>
          <p className="mb-4">
            <code>P</code> followed by four digits reports precipitation accumulation in hundredths
            of an inch during the past hour. <code>P0023</code> = 0.23 inches of precipitation.{' '}
            <code>P0000</code> indicates a trace amount too small to measure.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Temperature in Tenths of a Degree</h3>
          <p className="mb-4">
            The body of the METAR reports temperature rounded to whole degrees Celsius. The remarks
            section can include a more precise reading in tenths. The format is{' '}
            <code>T</code> followed by eight digits: four for temperature and four for dew point,
            where a leading <code>1</code> indicates a negative value.{' '}
            <code>T01500072</code> means temperature 15.0°C, dew point 7.2°C.{' '}
            <code>T10280033</code> means temperature &minus;2.8°C, dew point 3.3°C.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Wind Shift and Peak Wind</h3>
          <p className="mb-4">
            <code>WSHFT</code> followed by a time indicates when a wind shift occurred.{' '}
            <code>WSHFT 1735</code> means the wind shifted at 1735Z this hour.
          </p>
          <p className="mb-4">
            <code>PK WND</code> reports the peak wind observed since the last METAR.{' '}
            <code>PK WND 31045/1732</code> means peak wind from 310° at 45 knots, occurring at
            1732Z.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Lightning and Thunderstorm Activity</h3>
          <p className="mb-4">
            Lightning observations are reported with direction and distance. For example,{' '}
            <code>LTG DSNT W</code> means lightning observed at a distance to the west.{' '}
            <code>OCNL LTGICCG OHD</code> means occasional lightning both in-cloud and
            cloud-to-ground overhead.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Corrections</h3>
          <p className="mb-4">
            When a previously issued METAR contained an error, a corrected version is transmitted
            with <code>COR</code> immediately after the report type. The corrected METAR replaces
            the erroneous one in its entirety.
          </p>

          {/* Section 6 */}
          <h2 id="common-metar-abbreviations-quick-reference" className="text-2xl font-semibold mt-10 mb-4 scroll-mt-20">
            Common METAR Abbreviations Quick Reference
          </h2>
          <p className="mb-4">
            The following table summarizes the most frequently encountered METAR abbreviations
            across all sections of the report.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left">Abbreviation</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['METAR', 'Routine Meteorological Aerodrome Report'],
                  ['SPECI', 'Special observation (significant weather change)'],
                  ['AUTO', 'Fully automated report, no human observer'],
                  ['COR', 'Correction to previous report'],
                  ['KT', 'Knots (wind speed unit)'],
                  ['MPS', 'Meters per second (wind speed unit, international)'],
                  ['VRB', 'Variable wind direction'],
                  ['G', 'Gusts (within wind group, e.g., 15G25KT)'],
                  ['SM', 'Statute miles (US visibility unit)'],
                  ['SKC', 'Sky clear (manned station)'],
                  ['CLR', 'Clear below 12,000 ft AGL (automated station)'],
                  ['FEW', 'Few clouds — 1–2 oktas'],
                  ['SCT', 'Scattered clouds — 3–4 oktas'],
                  ['BKN', 'Broken clouds — 5–7 oktas (ceiling)'],
                  ['OVC', 'Overcast — 8 oktas (ceiling)'],
                  ['VV', 'Vertical visibility into obscuration'],
                  ['CB', 'Cumulonimbus cloud type'],
                  ['TCU', 'Towering cumulus cloud type'],
                  ['RA', 'Rain'],
                  ['SN', 'Snow'],
                  ['DZ', 'Drizzle'],
                  ['GR', 'Hail'],
                  ['TS', 'Thunderstorm'],
                  ['FG', 'Fog'],
                  ['BR', 'Mist'],
                  ['HZ', 'Haze'],
                  ['FZ', 'Freezing (descriptor)'],
                  ['SH', 'Shower (descriptor)'],
                  ['BL', 'Blowing (descriptor)'],
                  ['VC', 'In the vicinity'],
                  ['A', 'Altimeter in inches of mercury (A2992)'],
                  ['Q', 'QNH altimeter in hectopascals (Q1013)'],
                  ['M', 'Minus/below zero (temperature, e.g., M05)'],
                  ['RMK', 'Remarks (start of US remarks section)'],
                  ['AO1', 'Automated station, no precipitation discriminator'],
                  ['AO2', 'Automated station with precipitation discriminator'],
                  ['SLP', 'Sea level pressure (in remarks)'],
                  ['P', 'Hourly precipitation (e.g., P0012 = 0.12 in)'],
                  ['WSHFT', 'Wind shift occurred at stated time'],
                  ['PK WND', 'Peak wind since last METAR'],
                ].map(([abbr, meaning], i) => (
                  <tr key={abbr} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-300 px-3 py-2 font-mono">{abbr}</td>
                    <td className="border border-gray-300 px-3 py-2">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 7 */}
          <h2 id="free-tools-to-decode-a-metar-automatically" className="text-2xl font-semibold mt-10 mb-4 scroll-mt-20">
            Free Tools to Decode a METAR Automatically
          </h2>
          <p className="mb-4">
            While understanding the raw METAR format is valuable, several free online tools can
            parse a METAR into plain English instantly. These are useful for double-checking your
            manual interpretation or for quickly reading an unfamiliar report.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            aviationweather.gov (NOAA)
          </h3>
          <p className="mb-4">
            The Aviation Weather Center, operated by NOAA, provides official US METARs at{' '}
            <strong>aviationweather.gov</strong>. The site displays both the raw METAR string and a
            decoded breakdown. You can search by airport identifier or by geographic region. All
            data comes directly from the National Weather Service and is considered authoritative
            for US operations.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">CheckWX</h3>
          <p className="mb-4">
            <strong>checkwx.com</strong> offers a clean, color-coded METAR display that also
            includes TAFs (Terminal Aerodrome Forecasts) and PIREPs (pilot reports). It provides
            flight category coloring — VFR (green), MVFR (blue), IFR (red), and LIFR (magenta) —
            which makes it easy to assess conditions at a glance. CheckWX covers airports worldwide
            and is popular with both student pilots and professionals.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">ForeFlight and Other EFBs</h3>
          <p className="mb-4">
            Electronic flight bag (EFB) applications such as ForeFlight, Garmin Pilot, and
            FltPlan Go all include integrated METAR displays with decoded views. These are the
            primary tools used by working pilots, as they integrate METARs with charts, TFRs,
            SIGMETs, and route planning.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            ATIS and ASOS/AWOS Broadcasts
          </h3>
          <p className="mb-4">
            At towered airports, the current weather is broadcast on an <strong>ATIS</strong>{' '}
            (Automatic Terminal Information Service) frequency. ATIS reads out the current METAR
            in spoken form, updated each hour. At non-towered airports, an <strong>ASOS</strong>{' '}
            (Automated Surface Observing System) or <strong>AWOS</strong> (Automated Weather
            Observing System) broadcasts current conditions on a dedicated frequency, typically
            listed on sectional charts and in the Chart Supplement.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 id="frequently-asked-questions-about-decoding-metars" className="text-2xl font-semibold mb-6 scroll-mt-20">
            Frequently Asked Questions About Decoding METARs
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">
                How often is a METAR issued?
              </h3>
              <p>
                Most airports issue a METAR every <strong>30 or 60 minutes</strong> on a routine
                schedule. When weather conditions change significantly between scheduled observations —
                such as a sudden drop in visibility or a wind shift — a special METAR called a{' '}
                <strong>SPECI</strong> is issued immediately outside the normal cycle.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">
                What does the Z mean in a METAR time group?
              </h3>
              <p>
                The <strong>Z</strong> stands for <strong>Zulu time</strong>, which is another name
                for Coordinated Universal Time (UTC). All METAR observations worldwide are reported
                in UTC to eliminate confusion across time zones. For example,{' '}
                <code>121755Z</code> means the 12th day of the month at 17:55 UTC.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">
                What is the difference between BKN and OVC in a METAR?
              </h3>
              <p>
                <strong>BKN</strong> (broken) means 5 to 7 oktas (eighths) of the sky are covered
                by clouds, while <strong>OVC</strong> (overcast) means all 8 oktas — the entire
                sky — are covered. Both BKN and OVC are considered ceiling layers, which matters
                for instrument flight rules (IFR) minimums. FEW and SCT layers are not ceilings.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">
                What does AO2 mean in the METAR remarks section?
              </h3>
              <p>
                <strong>AO2</strong> appears in the <code>RMK</code> (remarks) section of US
                METARs and indicates the station is an automated weather observing system equipped
                with a <strong>precipitation discriminator</strong> — a sensor that can distinguish
                between liquid and frozen precipitation. <strong>AO1</strong> means the automated
                station lacks that sensor and cannot differentiate precipitation types.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
