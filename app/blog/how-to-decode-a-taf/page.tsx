import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-decode-a-taf`
const PUBLISHED = '2026-05-14T00:00:00.000Z'

export const metadata: Metadata = {
  title: 'How To Decode a TAF — Aviation Forecast Format Explained',
  description:
    'A complete guide on how to decode a TAF: header fields, base forecast group, change indicators (FM, BECMG, TEMPO, PROB), cloud codes, visibility, CAVOK, and free online TAF decoders.',
  keywords: [
    'how to decode a taf',
    'taf decoder',
    'taf aviation forecast',
    'read taf',
    'taf format explained',
    'terminal aerodrome forecast',
    'taf change groups',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How To Decode a TAF — Aviation Forecast Format Explained',
    description:
      'Step-by-step breakdown of every field in a Terminal Aerodrome Forecast: ICAO station, issue time, valid period, wind, visibility, cloud, and all change indicator types.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'How To Decode a TAF' }],
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Decode a TAF — Aviation Forecast Format Explained',
    description:
      'Decode every field of a TAF: header, base conditions, FM/BECMG/TEMPO/PROB change groups, cloud codes, CAVOK, and more.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Decode a TAF: Change Groups, Cloud Codes, and Forecast Periods Explained',
  description:
    'A complete guide on how to decode a TAF (Terminal Aerodrome Forecast): every header field, base conditions, change indicators, cloud codes, visibility designators, CAVOK, amended TAFs, and free online decoders.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  image: { '@type': 'ImageObject', url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does TAF stand for in aviation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TAF stands for Terminal Aerodrome Forecast. It is the standard ICAO weather forecast issued for the area within approximately 5 nautical miles of an airport. TAFs are issued by meteorological offices and distributed globally through aviation weather services.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often are TAFs issued and how long are they valid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most airports issue TAFs four times daily at 00Z, 06Z, 12Z, and 18Z UTC. Standard TAFs are valid for 24 hours. Selected major airports issue TAFs every 3 hours, and some of these are valid for 30 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a TAF and a METAR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A METAR is an observation — it records the weather conditions that were actually measured at the airport at a specific moment. A TAF is a forecast — it predicts what conditions are expected to be at that airport over the next 24 or 30 hours. Both use the same ICAO codes for wind, visibility, and sky cover, but only a METAR reports what actually happened.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does CAVOK mean in a TAF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CAVOK stands for Ceiling And Visibility OK. It is used when visibility is 10 km or more, there are no clouds below 5,000 feet AGL and no cumulonimbus or towering cumulus at any level, and there is no significant weather (such as precipitation, thunderstorms, or fog). CAVOK replaces the separate visibility, weather, and sky condition groups entirely.',
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
    { '@type': 'ListItem', position: 3, name: 'How To Decode a TAF', item: PAGE_URL },
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
        <nav className="mb-8">
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Blog
          </Link>
        </nav>

        <article>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            How To Decode a TAF: Change Groups, Cloud Codes, and Forecast Periods Explained
          </h1>

          <p className="text-sm text-muted-foreground mt-2 mb-8">
            By <strong className="text-foreground">John Reed</strong> · May 14, 2026
          </p>

          <div className="rounded-xl overflow-hidden mb-8">
            <Image
              src="/images/blog/ascii-encoding.jpg"
              alt="how to decode a taf — TAF aviation forecast format explained"
              width={800}
              height={450}
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Learning <strong className="text-foreground">how to decode a TAF</strong> is one of the most practical skills a pilot, dispatcher, or aviation enthusiast can develop — because the Terminal Aerodrome Forecast is the primary document describing what weather conditions are expected at an airport over the next 24 to 30 hours. This guide breaks every field apart, works through a real example line by line, explains all four change indicator types, and lists free tools that do the decoding for you when you need a fast answer.
            </p>

            {/* ------------------------------------------------------------------ */}
                      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#1-what-is-a-taf-and-how-is-it-different-from-a-metar" className="text-primary hover:underline">1. What Is a TAF and How Is It Different from a METAR?</a></li>
            <li><a href="#2-decoding-the-taf-header-report-type-station-issue-time-valid-period" className="text-primary hover:underline">2. Decoding the TAF Header (Report Type, Station, Issue Time, Valid Period)</a></li>
            <li><a href="#3-base-conditions-the-opening-forecast-group" className="text-primary hover:underline">3. Base Conditions — The Opening Forecast Group</a></li>
            <li><a href="#4-change-indicators-fm-becmg-tempo-and-prob" className="text-primary hover:underline">4. Change Indicators: FM, BECMG, TEMPO, and PROB</a></li>
            <li><a href="#5-cloud-visibility-and-weather-codes-in-a-taf" className="text-primary hover:underline">5. Cloud, Visibility, and Weather Codes in a TAF</a></li>
            <li><a href="#6-cavok-nsw-and-other-special-designators" className="text-primary hover:underline">6. CAVOK, NSW, and Other Special Designators</a></li>
            <li><a href="#7-amended-and-corrected-tafs" className="text-primary hover:underline">7. Amended and Corrected TAFs</a></li>
            <li><a href="#8-free-tools-to-decode-a-taf-online" className="text-primary hover:underline">8. Free Tools to Decode a TAF Online</a></li>
            <li><a href="#9-frequently-asked-questions" className="text-primary hover:underline">9. Frequently Asked Questions</a></li>
            <li><a href="#further-reading" className="text-primary hover:underline">Further Reading</a></li>
            </ol>
          </nav>

<h2 id="1-what-is-a-taf-and-how-is-it-different-from-a-metar" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              1. What Is a TAF and How Is It Different from a METAR?
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              A TAF — Terminal Aerodrome Forecast — is the standard ICAO aviation weather forecast issued for the area within approximately 5 nautical miles of an airport. It is produced by a meteorological office and distributed to pilots, dispatchers, airlines, and air traffic services worldwide.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              A METAR, by contrast, is a routine weather observation. It reports the conditions that were actually measured at the airport at a specific moment in time — wind speed and direction, visibility, present weather, cloud cover and heights, temperature, dew point, and altimeter setting. A METAR tells you what the weather <em>is</em>; a TAF tells you what the weather is <em>expected to be</em>.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Both products use the same ICAO encoding system for most fields — the same codes for wind, visibility, sky cover, and present weather — which means that the skills you develop reading one transfer directly to the other. The key structural difference is that a TAF includes change indicator groups (FM, BECMG, TEMPO, PROB) that divide the forecast period into sub-periods, each with its own set of expected conditions.
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Feature</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">METAR</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">TAF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    ['Purpose', 'Current observed conditions', 'Forecast conditions'],
                    ['Time coverage', 'Single moment', '24 or 30 hours'],
                    ['Issuance frequency', 'Hourly (or half-hourly)', '4× daily (or every 3 hours at major airports)'],
                    ['Change groups', 'None', 'FM, BECMG, TEMPO, PROB'],
                    ['Coverage radius', 'Airport point', '~5 nautical miles'],
                  ].map(([feature, metar, taf]) => (
                    <tr key={feature}>
                      <td className="py-2 px-3 text-xs font-semibold text-foreground">{feature}</td>
                      <td className="py-2 px-3 text-xs text-muted-foreground">{metar}</td>
                      <td className="py-2 px-3 text-xs text-muted-foreground">{taf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ------------------------------------------------------------------ */}
            <h2 id="2-decoding-the-taf-header-report-type-station-issue-time-valid-period" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              2. Decoding the TAF Header (Report Type, Station, Issue Time, Valid Period)
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Every TAF begins with a header block that identifies the type of report, the airport, when it was issued, and when it is valid. Here is a complete, real-world example that we will dissect field by field:
            </p>

            <div className="p-4 rounded-lg bg-secondary/30 border border-border font-mono text-sm text-green-600 mb-6 break-all leading-relaxed">
              TAF KSFO 121720Z 1218/1318 28012KT P6SM SCT040 FM122200 30015G25KT P6SM FEW030
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">TAF — Report Type</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The first token is simply <code className="bg-secondary/60 px-1 rounded text-foreground">TAF</code>, identifying this as a Terminal Aerodrome Forecast rather than a METAR or SPECI. You may also see <code className="bg-secondary/60 px-1 rounded text-foreground">TAF AMD</code> (amended forecast) or <code className="bg-secondary/60 px-1 rounded text-foreground">TAF COR</code> (corrected forecast) in this position.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">KSFO — ICAO Station Identifier</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The four-letter ICAO airport code identifies which airport the forecast covers. ICAO codes follow a regional convention: K-prefixed codes are continental United States airports (KSFO = San Francisco International, KJFK = John F. Kennedy, KLAX = Los Angeles International). European airports use two-letter country prefixes (EGLL = London Heathrow, LFPG = Paris Charles de Gaulle). Canadian airports begin with C (CYYZ = Toronto Pearson).
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Remember: the TAF covers only the area within approximately 5 nautical miles of the reference point of the airport. Conditions at a destination 20 miles from the field are not reflected in the TAF.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">121720Z — Issue Time (Day, Hour, Minute, UTC)</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The issue time is encoded as <strong className="text-foreground">DD HH MM Z</strong> — two digits for the day of the month, two for the hour (UTC), two for the minute (UTC), and the letter Z confirming Zulu (UTC) time. In our example, <code className="bg-secondary/60 px-1 rounded text-foreground">121720Z</code> means the forecast was issued on the 12th day of the month at 17:20 UTC.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              TAFs are issued four times per day at most airports: at 00Z, 06Z, 12Z, and 18Z. Selected major airports issue a TAF every three hours (00Z, 03Z, 06Z, 09Z, 12Z, 15Z, 18Z, 21Z). The issue time will typically be a few minutes after the nominal issuance hour — for example, 0020Z for a 00Z TAF.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1218/1318 — Valid Period</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The valid period uses the format <strong className="text-foreground">DDHH/DDHH</strong> — day and hour for the start of validity, a slash, then day and hour for the end of validity. <code className="bg-secondary/60 px-1 rounded text-foreground">1218/1318</code> means the forecast is valid from the 12th at 18:00Z to the 13th at 18:00Z — a full 24-hour period.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Standard TAFs are valid for 24 hours. At selected major airports — typically those with high traffic volume or complex weather patterns — the valid period can extend to 30 hours (for example, <code className="bg-secondary/60 px-1 rounded text-foreground">1218/1400</code> would be 30 hours). Note that the valid period always begins at or after the issue time; the TAF does not retroactively cover time before it was issued.
            </p>

            {/* ------------------------------------------------------------------ */}
            <h2 id="3-base-conditions-the-opening-forecast-group" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              3. Base Conditions — The Opening Forecast Group
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              After the valid period, the TAF presents the base forecast group — the expected conditions at the start of the valid period. These conditions remain in effect until modified by a change indicator group. In our example:
            </p>

            <div className="p-4 rounded-lg bg-secondary/30 border border-border font-mono text-sm text-green-600 mb-6">
              28012KT P6SM SCT040
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">28012KT — Wind</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Wind is encoded as <strong className="text-foreground">DDDSSKT</strong> or <strong className="text-foreground">DDDSSGggKT</strong>, where DDD is the true direction the wind is blowing <em>from</em> in degrees (using the standard three-digit format), SS is the sustained speed, G introduces a gust value, gg is the gust speed, and KT means knots.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <code className="bg-secondary/60 px-1 rounded text-foreground">28012KT</code> decodes to: wind from 280° (west-northwest) at 12 knots, no gusts. Compare this with <code className="bg-secondary/60 px-1 rounded text-foreground">30015G25KT</code> in the FM group later in the TAF: wind from 300° at 15 knots, gusting to 25 knots. The G prefix always precedes the gust speed — the gust value is always higher than the sustained speed.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Calm winds are encoded as <code className="bg-secondary/60 px-1 rounded text-foreground">00000KT</code>. Variable wind direction is encoded as <code className="bg-secondary/60 px-1 rounded text-foreground">VRB</code> in place of the three-digit direction — for example, <code className="bg-secondary/60 px-1 rounded text-foreground">VRB05KT</code> means variable direction at 5 knots. MPS (metres per second) may be used instead of KT outside the United States.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">P6SM — Visibility</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              In US TAFs, visibility is reported in statute miles. <code className="bg-secondary/60 px-1 rounded text-foreground">P6SM</code> means <em>plus 6 statute miles</em> — visibility is greater than 6 statute miles. The P prefix (for &ldquo;plus&rdquo; or &ldquo;greater than&rdquo;) is used when visibility exceeds the reportable maximum of 6 SM; no upper bound is stated. A value without the P — such as <code className="bg-secondary/60 px-1 rounded text-foreground">3SM</code> — means exactly 3 statute miles. Fractions are written as <code className="bg-secondary/60 px-1 rounded text-foreground">1/2SM</code>, <code className="bg-secondary/60 px-1 rounded text-foreground">3/4SM</code>, etc.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Outside the United States, visibility is reported in metres. <code className="bg-secondary/60 px-1 rounded text-foreground">9999</code> is the international equivalent of P6SM, meaning visibility is 10 km or greater. <code className="bg-secondary/60 px-1 rounded text-foreground">0800</code> would mean 800 metres.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">SCT040 — Sky Condition</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Sky condition groups follow the format <strong className="text-foreground">CCChh</strong>, where CCC is the coverage code and hh is the cloud base height in hundreds of feet above ground level (AGL). <code className="bg-secondary/60 px-1 rounded text-foreground">SCT040</code> means scattered clouds (3–4 oktas of sky coverage) at 4,000 feet AGL.
            </p>

            <div className="my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider w-20">Code</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Coverage</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Oktas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    ['SKC', 'Sky clear', '0 oktas'],
                    ['FEW', 'Few', '1–2 oktas'],
                    ['SCT', 'Scattered', '3–4 oktas'],
                    ['BKN', 'Broken', '5–7 oktas'],
                    ['OVC', 'Overcast', '8 oktas (complete overcast)'],
                    ['VV', 'Vertical visibility (obscured sky)', '—'],
                  ].map(([code, desc, oktas]) => (
                    <tr key={code}>
                      <td className="py-2 px-3 text-xs font-mono font-bold text-green-600">{code}</td>
                      <td className="py-2 px-3 text-xs text-foreground">{desc}</td>
                      <td className="py-2 px-3 text-xs text-muted-foreground">{oktas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Multiple sky condition groups can appear in the same forecast group, ordered from lowest to highest. For example, <code className="bg-secondary/60 px-1 rounded text-foreground">FEW015 BKN040 OVC080</code> means few clouds at 1,500 ft, broken layer at 4,000 ft, overcast at 8,000 ft. The ceiling — the lowest broken or overcast layer — is the BKN or OVC height and is the operationally critical value for instrument approach minimums.
            </p>

            {/* ------------------------------------------------------------------ */}
            <h2 id="4-change-indicators-fm-becmg-tempo-and-prob" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              4. Change Indicators: FM, BECMG, TEMPO, and PROB
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              After the base forecast group, the TAF uses change indicators to describe how conditions are expected to evolve over the valid period. There are four types of change indicator, and understanding the difference between them is the most important skill in reading a TAF.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">FM — From (Abrupt, Permanent Change)</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <code className="bg-secondary/60 px-1 rounded text-foreground">FM</code> marks a permanent, abrupt change. When an FM group begins, all conditions from the base forecast (or from the previous FM group) are <strong className="text-foreground">entirely replaced</strong> by the new conditions. Nothing carries over. Format: <code className="bg-secondary/60 px-1 rounded text-foreground">FM[DDHHMM]</code>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              In our example: <code className="bg-secondary/60 px-1 rounded text-foreground">FM122200 30015G25KT P6SM FEW030</code> means that from the 12th at 22:00Z, the wind will change to 300° at 15 knots gusting 25 knots, visibility will remain greater than 6 SM, and the sky will be few clouds at 3,000 ft. The original SCT040 from the base group is gone — it is not carried forward.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              FM is the strongest change indicator. It is used when a front, sea breeze, or other well-defined weather system is expected to arrive and completely transform the conditions.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">BECMG — Becoming (Gradual, Permanent Change)</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <code className="bg-secondary/60 px-1 rounded text-foreground">BECMG</code> marks a gradual, permanent change. Unlike FM, BECMG specifies a transition window — the period over which the change is expected to occur. The change may begin at the start of the window, at the end, or at any point within it, and it takes up to 2 hours to complete. After the window, the new conditions persist for the rest of the forecast period (or until the next change indicator). Format: <code className="bg-secondary/60 px-1 rounded text-foreground">BECMG [DDHH/DDHH]</code>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Example: <code className="bg-secondary/60 px-1 rounded text-foreground">BECMG 1306/1308 VRB03KT</code> means that between 06Z and 08Z on the 13th, winds will gradually become variable at 3 knots. After 08Z the variable light winds persist.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">TEMPO — Temporary (Fluctuation)</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <code className="bg-secondary/60 px-1 rounded text-foreground">TEMPO</code> marks temporary fluctuations. The described conditions are expected to last for less than one hour at a time and to occur for less than half of the TEMPO period. They do <strong className="text-foreground">not</strong> replace the background conditions — the base or FM conditions remain in effect when the temporary conditions are not occurring. Format: <code className="bg-secondary/60 px-1 rounded text-foreground">TEMPO [DDHH/DDHH]</code>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Example: <code className="bg-secondary/60 px-1 rounded text-foreground">TEMPO 1221/1302 -RA BKN015</code> means that between 21Z on the 12th and 02Z on the 13th, there will be temporary periods of light rain and a broken ceiling at 1,500 ft. Between these temporary episodes, the base conditions apply.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">PROB30 / PROB40 — Probability</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <code className="bg-secondary/60 px-1 rounded text-foreground">PROB30</code> and <code className="bg-secondary/60 px-1 rounded text-foreground">PROB40</code> indicate a 30% or 40% probability that the specified conditions will occur. PROB30 is used for lower-confidence events; PROB40 for somewhat more likely ones. Per ICAO rules, PROB50 and above should be expressed as TEMPO or BECMG; PROB30 is the lowest threshold used in a TAF.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              PROB is often combined with TEMPO: <code className="bg-secondary/60 px-1 rounded text-foreground">PROB30 TEMPO 1300/1306 TSRA BKN010CB</code> means there is a 30% chance of temporary thunderstorms with rain and a broken ceiling at 1,000 ft with cumulonimbus between 00Z and 06Z on the 13th.
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider w-24">Indicator</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Change type</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Duration</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Replaces base?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    ['FM', 'Abrupt, permanent', 'Remainder of forecast', 'Yes — completely'],
                    ['BECMG', 'Gradual, permanent', 'Up to 2 h transition window', 'Yes — after window'],
                    ['TEMPO', 'Temporary fluctuation', '< 1 h at a time; < half the period', 'No — base conditions persist'],
                    ['PROB30/40', 'Conditional (30% or 40%)', 'Specified window', 'No — shows probability only'],
                  ].map(([ind, type, dur, rep]) => (
                    <tr key={ind}>
                      <td className="py-2 px-3 text-xs font-mono font-bold text-green-600">{ind}</td>
                      <td className="py-2 px-3 text-xs text-foreground">{type}</td>
                      <td className="py-2 px-3 text-xs text-muted-foreground">{dur}</td>
                      <td className="py-2 px-3 text-xs text-muted-foreground">{rep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ------------------------------------------------------------------ */}
            <h2 id="5-cloud-visibility-and-weather-codes-in-a-taf" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              5. Cloud, Visibility, and Weather Codes in a TAF
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Present weather is encoded using a structured system of prefixes, descriptors, and phenomenon codes. These appear between the visibility and sky condition groups.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Intensity Prefixes</h3>
            <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2 pl-2">
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">-</code> (minus) — light intensity. Example: <code className="bg-secondary/60 px-1 rounded text-foreground">-RA</code> = light rain.</li>
              <li>No prefix — moderate intensity (the default). Example: <code className="bg-secondary/60 px-1 rounded text-foreground">RA</code> = moderate rain.</li>
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">+</code> (plus) — heavy intensity. Example: <code className="bg-secondary/60 px-1 rounded text-foreground">+SN</code> = heavy snow.</li>
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">VC</code> — in the vicinity (within 5–10 SM of the airport but not at it). Example: <code className="bg-secondary/60 px-1 rounded text-foreground">VCTS</code> = thunderstorm in the vicinity.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Descriptor Codes</h3>
            <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2 pl-2">
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">TS</code> — thunderstorm. Nearly always combined with a precipitation code: <code className="bg-secondary/60 px-1 rounded text-foreground">TSRA</code> = thunderstorm with rain.</li>
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">SH</code> — shower. Example: <code className="bg-secondary/60 px-1 rounded text-foreground">SHRA</code> = rain shower.</li>
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">FZ</code> — freezing. Example: <code className="bg-secondary/60 px-1 rounded text-foreground">FZRA</code> = freezing rain.</li>
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">BL</code> — blowing. Example: <code className="bg-secondary/60 px-1 rounded text-foreground">BLSN</code> = blowing snow.</li>
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">DR</code> — low drifting. Example: <code className="bg-secondary/60 px-1 rounded text-foreground">DRDU</code> = low drifting dust.</li>
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">MI</code> — shallow. Example: <code className="bg-secondary/60 px-1 rounded text-foreground">MIFG</code> = shallow fog.</li>
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">BC</code> — patches. Example: <code className="bg-secondary/60 px-1 rounded text-foreground">BCFG</code> = patchy fog.</li>
              <li><code className="bg-secondary/60 px-1 rounded text-foreground">PR</code> — partial (fog covering part of the aerodrome). Example: <code className="bg-secondary/60 px-1 rounded text-foreground">PRFG</code> = partial fog.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Common Phenomenon Codes</h3>
            <div className="my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider w-16">Code</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Phenomenon</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    ['RA', 'Rain'],
                    ['SN', 'Snow'],
                    ['DZ', 'Drizzle'],
                    ['GR', 'Hail (≥ 5 mm diameter)'],
                    ['GS', 'Small hail or snow pellets'],
                    ['FG', 'Fog (visibility < 1,000 m)'],
                    ['BR', 'Mist (visibility 1,000–9,999 m)'],
                    ['HZ', 'Haze'],
                    ['FU', 'Smoke'],
                    ['SA', 'Sand'],
                    ['DU', 'Dust'],
                    ['SQ', 'Squall'],
                    ['PO', 'Dust or sand whirls'],
                    ['FC', 'Funnel cloud / tornado / waterspout'],
                    ['SS', 'Sandstorm'],
                    ['DS', 'Dust storm'],
                  ].map(([code, desc]) => (
                    <tr key={code}>
                      <td className="py-2 px-3 text-xs font-mono font-bold text-green-600">{code}</td>
                      <td className="py-2 px-3 text-xs text-muted-foreground">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Special Cloud Suffixes</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              When cumulonimbus (CB) or towering cumulus (TCU) clouds are forecast, the cloud type is appended to the sky condition group. <code className="bg-secondary/60 px-1 rounded text-foreground">BKN020CB</code> means broken cumulonimbus at 2,000 ft. These suffixes are operationally significant because CB clouds are associated with severe turbulence, icing, and thunderstorms. CB and TCU override CAVOK — if either is present at any height, CAVOK cannot be used.
            </p>

            {/* ------------------------------------------------------------------ */}
            <h2 id="6-cavok-nsw-and-other-special-designators" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              6. CAVOK, NSW, and Other Special Designators
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">CAVOK — Ceiling And Visibility OK</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <code className="bg-secondary/60 px-1 rounded text-foreground">CAVOK</code> is a single group that replaces the visibility, present weather, and sky condition groups entirely when all of the following conditions are simultaneously met:
            </p>
            <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2 pl-2">
              <li>Visibility is 10 km or greater (no upper limit stated)</li>
              <li>No cloud below 5,000 feet AGL and no cloud below the highest minimum sector altitude — whichever is greater</li>
              <li>No cumulonimbus (CB) or towering cumulus (TCU) at any level</li>
              <li>No significant weather phenomena (precipitation, fog, thunderstorms, etc.)</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              CAVOK is widely used in international TAFs and METARs because it dramatically shortens the report when conditions are excellent. It is not used in US TAFs; the US equivalent is effectively <code className="bg-secondary/60 px-1 rounded text-foreground">P6SM SKC</code> (or SKC with no weather groups).
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">NSW — No Significant Weather</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <code className="bg-secondary/60 px-1 rounded text-foreground">NSW</code> (No Significant Weather) is used in a TEMPO or BECMG group to explicitly cancel a previously forecast weather phenomenon. If the base forecast included fog (<code className="bg-secondary/60 px-1 rounded text-foreground">FG</code>) and a BECMG group shows improving conditions, NSW signals that the weather is clearing — distinguishing an intentional &ldquo;no weather&rdquo; from a field simply being omitted.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">SKC — Sky Clear</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <code className="bg-secondary/60 px-1 rounded text-foreground">SKC</code> means sky clear — zero cloud cover. In automated US reports you may see <code className="bg-secondary/60 px-1 rounded text-foreground">CLR</code> instead (clear below 12,000 ft as reported by an ASOS station), but in TAFs the correct ICAO code is SKC.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">NIL — No Forecast</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <code className="bg-secondary/60 px-1 rounded text-foreground">TAF NIL</code> means no forecast is currently available for the specified station. This may be seen when a station is temporarily non-operational or when a forecast has been cancelled.
            </p>

            {/* ------------------------------------------------------------------ */}
            <h2 id="7-amended-and-corrected-tafs" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              7. Amended and Corrected TAFs
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              A TAF is not always static for its full valid period. Two types of supplemental issuances modify the original forecast:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">TAF AMD — Amended TAF</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              When actual or expected weather conditions differ significantly from the current valid TAF, the forecaster issues an amended TAF. The designation <code className="bg-secondary/60 px-1 rounded text-foreground">TAF AMD</code> appears in the report type field. An AMD replaces the original TAF in its entirety from the time of amendment onward. The amended TAF gets its own issue time but retains the original valid period end time.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Amendments are common during rapidly changing weather — an approaching frontal system that is moving faster than forecast, unexpected fog development, or a thunderstorm complex that was not anticipated.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">TAF COR — Corrected TAF</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              A corrected TAF (<code className="bg-secondary/60 px-1 rounded text-foreground">TAF COR</code>) is issued when a clerical or coding error is found in the original TAF — for example, an incorrect station identifier, a transposed digit in the valid period, or a missing element. A COR is a technical fix, not a change in the forecast itself, though in practice the distinction from an AMD can be subtle.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              When reviewing TAFs for flight planning, always use the most recently issued version for a station — whether it is the original, an AMD, or a COR. Aviation weather services such as aviationweather.gov display the current version automatically.
            </p>

            {/* ------------------------------------------------------------------ */}
            <h2 id="8-free-tools-to-decode-a-taf-online" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              8. Free Tools to Decode a TAF Online
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              While manual decoding is a skill worth developing, several free tools decode TAFs automatically and present the result in plain English. This is especially useful when reading an unfamiliar station&apos;s TAF quickly or when training newer pilots to understand the format.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">aviationweather.gov</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The Aviation Weather Center&apos;s official website (aviationweather.gov) provides a TAF decoder as part of its terminal forecasts tool. Enter an ICAO station identifier and select &ldquo;decoded&rdquo; output to see every field translated into plain English alongside the raw TAF text. The site also overlays TAF valid periods on a timeline, making it easy to see which change group applies at any given time.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">SkyVector</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              SkyVector (skyvector.com) is an online aviation chart and flight planning tool that includes a built-in TAF decoder. Click on any airport on the chart, or search by identifier, to see the current TAF decoded field by field. SkyVector is popular with VFR and IFR pilots for its combined chart and weather view.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ForeFlight and Garmin Pilot</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Commercial EFB (electronic flight bag) applications such as ForeFlight and Garmin Pilot present TAFs in a timeline or graphical format. These tools are not free, but they are the standard for professional pilots and offer the most integrated view of TAF data alongside charts, NOTAMs, and TFRs.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">NOAA Text Product Viewer</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              For raw TAF text without decoding, the NOAA Telecommunications Operations Center (tgftp.nws.noaa.gov) provides plain-text TAF files for every station. These are the primary distribution mechanism used by aviation systems worldwide and can be fetched programmatically using HTTP requests.
            </p>

            {/* ------------------------------------------------------------------ */}
            <h2 id="9-frequently-asked-questions" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              9. Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What does TAF stand for in aviation?
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  TAF stands for <strong className="text-foreground">Terminal Aerodrome Forecast</strong>. It is the standard ICAO weather forecast for the area within approximately 5 nautical miles of an airport. TAFs are issued by meteorological offices and distributed globally through aviation weather services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How often are TAFs issued and how long are they valid?
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Most airports issue TAFs four times per day at <strong className="text-foreground">00Z, 06Z, 12Z, and 18Z</strong> UTC. Standard TAFs are valid for <strong className="text-foreground">24 hours</strong>. Selected major airports issue TAFs every 3 hours, and some of these are valid for <strong className="text-foreground">30 hours</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What is the difference between a TAF and a METAR?
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  A <strong className="text-foreground">METAR</strong> is an observation — it records the weather conditions that were actually measured at the airport at a specific moment. A <strong className="text-foreground">TAF</strong> is a forecast — it predicts what conditions are expected over the next 24 or 30 hours. Both use the same ICAO codes for wind, visibility, and sky cover, but only a METAR reports what actually happened.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What does CAVOK mean in a TAF?
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  CAVOK stands for <strong className="text-foreground">Ceiling And Visibility OK</strong>. It is used when visibility is 10 km or more, there are no clouds below 5,000 feet AGL (and no CB or TCU at any level), and there is no significant weather. CAVOK replaces the visibility, present weather, and sky condition groups entirely.
                </p>
              </div>
            </div>

            {/* ------------------------------------------------------------------ */}
            <div className="mt-10 pt-6 border-t border-border">
              <h2 id="further-reading" className="text-xl font-bold text-foreground mb-4 scroll-mt-20">Further Reading</h2>
              <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
                <li>
                  <Link href="/blog/how-to-decode-a-metar" className="text-primary hover:underline">
                    How To Decode a METAR
                  </Link>{' '}
                  — the companion guide to this article, covering observed weather reports field by field
                </li>
                <li>
                  <Link href="/blog/understanding-ascii-character-encoding" className="text-primary hover:underline">
                    Understanding ASCII Character Encoding
                  </Link>{' '}
                  — how computers represent text as numbers, the foundation behind all digital data encoding
                </li>
                <li>
                  <Link href="/blog/how-to-decode-encoded-text" className="text-primary hover:underline">
                    How To Decode Encoded Text
                  </Link>{' '}
                  — a broader guide to text encoding and decoding across common formats
                </li>
              </ul>
            </div>

          </div>
        </article>
      </main>
    </>
  )
}
