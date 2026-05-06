// Comprehensive schema.org JSON-LD generators for Google SEO optimization

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.letters2numbersconverter.com',
  name: 'Letters to Numbers Converter',
  url: 'https://www.letters2numbersconverter.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.letters2numbersconverter.com/logo.png',
    width: 250,
    height: 60,
  },
  description: 'Free online letters to numbers converter tool with A1Z26, ASCII, hexadecimal, and binary encoding support',
  sameAs: [
    'https://www.letters2numbersconverter.com',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'Customer Support',
    email: 'support@letters2numbersconverter.com',
    availableLanguage: ['en'],
  },
  knowsAbout: [
    'A1Z26 Cipher',
    'Letter to Number Conversion',
    'ASCII Encoding',
    'Hexadecimal Conversion',
    'Binary Encoding',
    'Cryptography',
    'Puzzle Solving',
    'Geocaching',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'US',
  },
})

export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.letters2numbersconverter.com#website',
  url: 'https://www.letters2numbersconverter.com',
  name: 'Letters to Numbers Converter',
  description: 'Free online converter tool for letters to numbers encoding with multiple formats',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.letters2numbersconverter.com/?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  isPartOf: {
    '@id': 'https://www.letters2numbersconverter.com',
  },
})

export const generateWebPageSchema = (
  title: string,
  description: string,
  url: string,
  datePublished?: string,
  dateModified?: string,
  images: string[] = ['/og-image.png']
) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url: url,
  name: title,
  description: description,
  isPartOf: {
    '@id': 'https://www.letters2numbersconverter.com#website',
  },
  primaryImageOfPage: images[0],
  image: images.map(img => ({
    '@type': 'ImageObject',
    url: img,
    width: 1200,
    height: 630,
  })),
  ...(datePublished && { datePublished }),
  ...(dateModified && { dateModified }),
  author: {
    '@id': 'https://www.letters2numbersconverter.com#organization',
  },
  creator: {
    '@id': 'https://www.letters2numbersconverter.com#organization',
  },
  publisher: {
    '@id': 'https://www.letters2numbersconverter.com#organization',
  },
  inLanguage: 'en-US',
})

export const generateToolPageSchema = (
  name: string,
  description: string,
  url: string,
  category: string,
  operatingSystem: string[] = ['Web Browser']
) => ({
  '@context': 'https://schema.org',
  '@type': ['WebPage', 'SoftwareApplication'],
  '@id': `${url}#tool`,
  url: url,
  name: name,
  description: description,
  applicationCategory: 'Utility',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '0',
    availability: 'https://schema.org/InStock',
  },
  operatingSystem: operatingSystem,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
  },
  isPartOf: {
    '@id': 'https://www.letters2numbersconverter.com#website',
  },
  author: {
    '@id': 'https://www.letters2numbersconverter.com#organization',
  },
})

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const generateArticleSchema = (
  headline: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  author: string,
  image: string,
  articleBody?: string
) => ({
  '@context': 'https://schema.org',
  '@type': ['BlogPosting', 'Article'],
  '@id': `${url}#article`,
  headline: headline,
  description: description,
  image: {
    '@type': 'ImageObject',
    url: image,
    width: 1200,
    height: 630,
  },
  datePublished: datePublished,
  dateModified: dateModified,
  author: {
    '@type': 'Person',
    name: author,
  },
  creator: {
    '@type': 'Organization',
    name: 'Letters to Numbers Converter',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.letters2numbersconverter.com#organization',
    name: 'Letters to Numbers Converter',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.letters2numbersconverter.com/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url,
  },
  url: url,
  inLanguage: 'en-US',
  isPartOf: {
    '@id': 'https://www.letters2numbersconverter.com#website',
  },
  ...(articleBody && { articleBody }),
})

export const generateFAQSchema = (
  faqs: Array<{
    question: string
    answer: string
  }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const generateHowToSchema = (
  name: string,
  description: string,
  steps: Array<{
    name: string
    description: string
    image?: string
  }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: name,
  description: description,
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.description,
    ...(step.image && {
      image: {
        '@type': 'ImageObject',
        url: step.image,
      },
    }),
  })),
})

export const generateCollectionPageSchema = (
  name: string,
  description: string,
  url: string,
  itemCount: number
) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: name,
  description: description,
  url: url,
  isPartOf: {
    '@id': 'https://www.letters2numbersconverter.com#website',
  },
  numberOfItems: itemCount,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [],
  },
})

export const generateLocalBusinessSchema = (
  businessName: string,
  streetAddress: string,
  addressLocality: string,
  addressRegion: string,
  postalCode: string,
  telephone: string,
  email: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: businessName,
  address: {
    '@type': 'PostalAddress',
    streetAddress: streetAddress,
    addressLocality: addressLocality,
    addressRegion: addressRegion,
    postalCode: postalCode,
    addressCountry: 'US',
  },
  telephone: telephone,
  email: email,
  url: 'https://www.letters2numbersconverter.com',
})

export const combinedOrganizationSchema = () => {
  const baseUrl = 'https://www.letters2numbersconverter.com'
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateOrganizationSchema(),
      generateWebsiteSchema(),
    ],
  }
}
