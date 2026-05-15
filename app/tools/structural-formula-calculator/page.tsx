import { Metadata } from 'next'
import { StructuralFormulaCalculator } from '@/components/structural-formula-calculator'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/structural-formula-calculator`

const toolSchema = generateToolPageSchema(
  'Structural Formula Calculator',
  'Free online structural formula calculator. Visualize the 2D structure of 40+ molecules from the library, or enter any SMILES notation to render a custom structure. Shows bonds, functional groups, molecular weight, and atom counts.',
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Structural Formula Calculator', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'Structural Formula Calculator — Visualize Molecular Structures Online',
  description: 'Free structural formula calculator. Choose from 40+ molecules or enter any SMILES string to instantly render a 2D structural formula. Shows bonds, functional groups, molecular weight, and atom counts. No sign-up required.',
  keywords: [
    'structural formula calculator',
    'molecular structure visualizer',
    'SMILES to structure',
    'draw molecule online',
    'chemical structure viewer',
    'structural formula drawer',
    'molecular formula calculator',
    '2D molecular structure',
    'chemistry structure tool',
    'SMILES notation viewer',
    'molecule structure online',
    'chemical bond visualizer',
    'structural chemistry calculator',
    'organic chemistry structure',
    'functional group identifier',
  ],
  openGraph: {
    title: 'Structural Formula Calculator — Visualize Molecular Structures Online',
    description: 'Choose from 40+ molecules or enter any SMILES string to instantly render a 2D structural formula. See bonds, functional groups, and molecular properties. Free.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Structural Formula Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structural Formula Calculator — Draw Molecules Instantly',
    description: 'Visualize the structural formula of any molecule using SMILES notation. 40+ molecule library included. Free chemistry tool.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = {
  howItWorks: 'Choose a molecule from the library (searchable by name, formula, or SMILES across 40+ molecules organized by category) or switch to Custom SMILES mode and enter any valid SMILES string. The structural formula is rendered instantly as a 2D diagram showing atoms, bonds (single, double, triple, and aromatic), and bond angles. Switch between light and dark canvas themes. The properties panel shows molecular formula, molecular weight, bond counts, functional groups, and a description of the molecule. Download the structure as a PNG image.',
  features: [
    '40+ molecule library across 11 categories (inorganic, hydrocarbons, aromatic, alcohols, acids, sugars, amino acids, drugs, and more)',
    'Custom SMILES input — render any molecule with valid SMILES notation',
    'Real-time 2D structure rendering powered by SmilesDrawer',
    'Color-coded atoms: carbon (black/white), oxygen (red), nitrogen (blue), sulfur (yellow), phosphorus (orange)',
    'Light and dark canvas themes for the structural diagram',
    'Molecular properties: formula, molecular weight, bond counts, heavy atom count',
    'Functional group detection (hydroxyl, carbonyl, carboxylic acid, amide, alkene, alkyne, amine, aromatic, and more)',
    'Atom count breakdown for custom SMILES inputs',
    'Download structural formula as PNG image',
    'No sign-up required — free and instant',
  ],
  whoIsItFor: [
    {
      title: 'Chemistry Students',
      description: 'Visualize the structural formulas of molecules you are studying. Look up common organic compounds, amino acids, sugars, and drugs to see how atoms are connected and what functional groups are present.',
    },
    {
      title: 'Teachers & Educators',
      description: 'Generate 2D structural diagrams for lecture slides, handouts, and exam questions without needing a full chemistry drawing application. Download structures as PNG images.',
    },
    {
      title: 'Researchers & Chemists',
      description: 'Quickly verify SMILES notation by rendering the structure, check functional groups, and generate images of molecular structures for presentations and reports.',
    },
    {
      title: 'Pharmacy & Medical Students',
      description: 'Examine the structural formulas of common drugs — aspirin, ibuprofen, paracetamol, caffeine, dopamine — and see their functional groups and molecular properties in context.',
    },
    {
      title: 'Biochemistry Students',
      description: 'Explore the structures of biological molecules including amino acids (glycine, alanine, phenylalanine), sugars (glucose, fructose, ribose), and understand how their functional groups relate to their biological roles.',
    },
    {
      title: 'Self-Learners',
      description: 'Learn organic chemistry by experimenting with SMILES notation — enter different structures and see how changes to the notation affect the structural formula and functional group composition.',
    },
  ],
}

export default function StructuralFormulaCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="structural-formula-calculator">
        <ToolLayout
          toolId="structural-formula-calculator"
          toolName="Structural Formula Calculator"
          toolDescription="Visualize the 2D structural formula of any molecule. Choose from 40+ molecules or enter your own SMILES notation to render bonds, atoms, and functional groups."
          toolComponent={<StructuralFormulaCalculator />}
          toolData={toolData}
        >
          {/* SEO Content */}
          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">

            <section>
              <h2 className="text-base font-semibold text-foreground">What Is a Structural Formula?</h2>
              <p>
                A structural formula is a chemical notation that shows not just what atoms are present in a molecule
                (as an empirical or molecular formula does) but also how those atoms are connected to each other —
                their bonding arrangement. While the molecular formula of ethanol is simply C₂H₆O, its structural
                formula shows that it is CH₃–CH₂–OH: a methyl group connected to a methylene group connected to a
                hydroxyl group. This connectivity information is what distinguishes structural isomers — molecules
                with the same molecular formula but completely different structures, properties, and behaviors.
              </p>
              <p>
                The term encompasses several related notations: condensed structural formulas (showing groups like
                CH₃CH₂OH), Lewis structures (showing all bonds and lone pairs), skeletal formulas (showing only the
                carbon skeleton and heteroatoms), and full 2D structural diagrams (what this tool renders) that
                show every atom and every bond explicitly.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">What Is SMILES Notation?</h2>
              <p>
                SMILES (Simplified Molecular Input Line Entry System) is a text-based notation for describing
                molecular structures using ASCII characters. It was developed by David Weininger in the 1980s
                and has become the standard input format for chemical informatics software. Every atom, bond,
                ring, stereocenter, and charge in a molecule can be encoded as a compact string of characters.
              </p>
              <p>Basic SMILES rules:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Atoms</strong> — Written as their element symbol. Carbon is C, Nitrogen is N, Oxygen is O,
                  Sulfur is S. Atoms with non-standard valence or charge are enclosed in brackets: [NH4+], [Fe2+].
                </li>
                <li>
                  <strong>Single bonds</strong> — Implied between adjacent atoms. CC means ethane (C–C).
                </li>
                <li>
                  <strong>Double bonds</strong> — Written with =. C=O is formaldehyde (C=O).
                </li>
                <li>
                  <strong>Triple bonds</strong> — Written with #. C#N is hydrogen cyanide (C≡N).
                </li>
                <li>
                  <strong>Branches</strong> — Enclosed in parentheses. CC(=O)O is acetic acid — a carbon with a
                  double-bonded oxygen branch and a hydroxyl group.
                </li>
                <li>
                  <strong>Rings</strong> — Indicated by ring-closure numbers. c1ccccc1 is benzene — the ring opens
                  and closes at the atoms labeled 1.
                </li>
                <li>
                  <strong>Aromatic atoms</strong> — Written in lowercase. c for aromatic carbon, n for aromatic
                  nitrogen.
                </li>
                <li>
                  <strong>Stereochemistry</strong> — @@ for counterclockwise, @ for clockwise arrangement at a
                  chiral center. / and \ for geometric isomers around double bonds.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Types of Chemical Bonds Shown</h2>
              <p>
                The structural formula diagram renders four types of bonds, each drawn distinctively:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Single bonds (σ bonds)</strong> — Drawn as a single line. Found in alkanes, alcohols,
                  ethers, amines, and most saturated compounds. Atoms bonded by a single bond can rotate freely
                  around that bond axis.
                </li>
                <li>
                  <strong>Double bonds (σ + π bonds)</strong> — Drawn as two parallel lines. Found in alkenes,
                  carbonyl groups (C=O), carboxylic acids, esters, amides, and imines. Double bonds restrict
                  rotation, which is why cis and trans isomers exist.
                </li>
                <li>
                  <strong>Triple bonds (σ + 2π bonds)</strong> — Drawn as three parallel lines. Found in alkynes
                  (C≡C) and nitriles (C≡N). Triple bonds make the atoms and their immediate neighbors linear.
                </li>
                <li>
                  <strong>Aromatic bonds</strong> — Drawn as alternating single/double lines within a ring, or
                  as a circle inside the ring. Aromatic bonds represent delocalized electrons shared equally
                  across all ring atoms — they are intermediate between single and double bonds in both length
                  and strength.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Color Coding of Atoms</h2>
              <p>
                The structural diagram uses the standard CPK color scheme (named after chemists Corey, Pauling,
                and Koltun) to color different elements:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Carbon (C)</strong> — Dark gray/black (light theme) or white (dark theme)</li>
                <li><strong>Oxygen (O)</strong> — Red</li>
                <li><strong>Nitrogen (N)</strong> — Blue</li>
                <li><strong>Sulfur (S)</strong> — Yellow/amber</li>
                <li><strong>Phosphorus (P)</strong> — Orange</li>
                <li><strong>Halogens (F, Cl)</strong> — Green; Bromine (Br) — dark red; Iodine (I) — violet</li>
              </ul>
              <p>
                This color scheme is universal in chemistry software and helps you quickly identify functional
                groups and heteroatoms in complex molecules.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Functional Groups and What They Tell You</h2>
              <p>
                Functional groups are specific arrangements of atoms within a molecule that give it characteristic
                chemical properties. Identifying them tells you how the molecule will likely react, whether it is
                acidic or basic, how it interacts with water, and often where it is found in biology or industry.
                Key groups detected by this tool:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Hydroxyl (–OH)</strong> — Alcohol/phenol. Makes molecules polar and water-soluble. Enables hydrogen bonding.</li>
                <li><strong>Carbonyl (C=O)</strong> — Core of aldehydes and ketones. Highly reactive; undergoes nucleophilic addition.</li>
                <li><strong>Carboxylic acid (–COOH)</strong> — Acidic; ionizes in water to release H⁺. Found in amino acids, fatty acids, vinegar.</li>
                <li><strong>Amide (–CONH–)</strong> — Bond linking amino acids in proteins (peptide bond). Relatively stable.</li>
                <li><strong>Amine (–NH₂)</strong> — Basic group. Found in amino acids, neurotransmitters, drugs.</li>
                <li><strong>Alkene (C=C)</strong> — Double bond; restricted rotation; reacts with halogens, acids via addition reactions.</li>
                <li><strong>Alkyne (C≡C)</strong> — Triple bond; linear; high-energy; used in synthesis and specialty fuels.</li>
                <li><strong>Nitrile (–C≡N)</strong> — Triple bond to nitrogen; precursor to amides and carboxylic acids; used in pharmaceuticals.</li>
                <li><strong>Aromatic ring</strong> — Stable due to delocalization; undergoes electrophilic aromatic substitution; found in plastics, drugs, dyes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">What is SMILES and where can I find it for a molecule?</p>
                  <p>SMILES (Simplified Molecular Input Line Entry System) is a text notation for molecular structures. You can find the SMILES for any compound on PubChem (pubchem.ncbi.nlm.nih.gov), ChemSpider, or Wikipedia&apos;s chemistry articles. Search for the molecule name and look for the Canonical SMILES or Isomeric SMILES field.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Why doesn&apos;t my custom SMILES render correctly?</p>
                  <p>Common issues: unclosed parentheses or ring-closure numbers, invalid element symbols, or incorrect stereo notation. Try copying the SMILES directly from PubChem rather than typing it manually. The tool will show an error message if the SMILES cannot be parsed.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Does the tool show 3D structure?</p>
                  <p>The tool renders 2D structural diagrams, which show the connectivity and bond types of the molecule. True 3D structure (the spatial arrangement of atoms in three dimensions) requires a dedicated 3D viewer. The 2D representation is sufficient for identifying functional groups, bond types, and structural isomers.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">How accurate are the functional group detections for custom SMILES?</p>
                  <p>The functional group detection uses pattern matching on the SMILES string and covers the most common groups (hydroxyl, carbonyl, carboxylic acid, amine, amide, alkene, alkyne, nitrile, aromatic). It is a heuristic approach that works well for standard organic molecules but may miss unusual bonding patterns or give false positives for highly complex structures.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Can I use the downloaded PNG in academic or professional documents?</p>
                  <p>Yes. The downloaded PNG is a clean structural diagram rendered at the canvas resolution. For publication-quality diagrams at very high resolution, a dedicated tool like ChemDraw, Marvin Sketch, or Avogadro may be preferable as they support vector output formats (SVG, EPS).</p>
                </div>
              </div>
            </section>

          </div>
        </ToolLayout>
      </ToolPageWrapper>
    </>
  )
}
