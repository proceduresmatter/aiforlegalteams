import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI for Legal Teams — Practical AI Adoption for Legal Departments | Marta Schmidl',
  description:
    'AI for legal teams that actually works. Marta Schmidl helps in-house legal departments build AI literacy, identify use cases, integrate tools responsibly, and prepare for EU AI Act compliance.',
  keywords: [
    'AI for legal teams',
    'AI for legal departments',
    'AI for in-house legal',
    'AI training for lawyers',
    'AI adoption legal department',
    'legal AI consultant',
    'AI tools for lawyers',
    'EU AI Act legal department',
    'ChatGPT for legal teams',
    'AI literacy lawyers',
    'responsible AI legal',
    'AI governance legal',
    'legal AI implementation',
    'AI readiness legal',
    'AI for compliance teams',
    'legal tech AI consulting',
    'in-house counsel AI',
    'AI for GCs',
    'AI for general counsel',
    'AI adoption Germany',
    'legal AI Germany',
    'Marta Schmidl',
    'Procedures Matter',
    'AI for Legal Teams',
    'human in the loop legal',
    'EU AI Act compliance',
  ],
  authors: [{ name: 'Marta Schmidl', url: 'https://www.aiforlegalteams.com' }],
  creator: 'Marta Schmidl',
  publisher: 'Procedures Matter',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://www.aiforlegalteams.com',
  },
  openGraph: {
    title: 'AI for Legal Teams — Practical AI Adoption for Legal Departments',
    description:
      'Your legal team deserves AI that works. Marta Schmidl helps in-house legal departments adopt AI with structure, accountability, and real EU AI Act readiness.',
    url: 'https://www.aiforlegalteams.com',
    siteName: 'AI for Legal Teams',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.aiforlegalteams.com/banner.png',
        width: 1200,
        height: 630,
        alt: 'AI for Legal Teams — Marta Schmidl, Procedures Matter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Legal Teams — Practical AI Adoption',
    description:
      'Helping in-house legal teams adopt AI with clarity, structure, and EU AI Act readiness.',
    images: ['https://www.aiforlegalteams.com/banner.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.aiforlegalteams.com/#marta-schmidl',
      name: 'Marta Schmidl',
      jobTitle: 'AI Adoption Consultant for Legal Departments',
      description:
        'Marta Schmidl is an International Legal Counsel and AI adoption consultant specializing in legal departments. She helps in-house legal teams build AI literacy, identify use cases, integrate tools responsibly, and prepare for EU AI Act compliance.',
      url: 'https://www.proceduresmatter.com',
      sameAs: [
        'https://www.linkedin.com/in/martaschmidl/',
        'https://www.proceduresmatter.com',
        'https://www.aiforlegalteams.com',
      ],
      knowsAbout: [
        'AI for Legal Teams',
        'Legal AI Adoption',
        'EU AI Act',
        'AI Literacy for Lawyers',
        'In-House Legal AI',
        'AI Governance',
        'Legal Technology',
        'AI Tools for Legal Departments',
        'Responsible AI',
        'Human in the Loop',
      ],
      areaServed: [
        'Germany',
        'European Union',
        'DACH',
        'Northern Germany',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.aiforlegalteams.com/#ai-for-legal-teams',
      name: 'AI for Legal Teams',
      alternateName: 'Procedures Matter',
      founder: { '@id': 'https://www.aiforlegalteams.com/#marta-schmidl' },
      description:
        'Specialized AI adoption consulting for legal departments. Helping in-house legal teams build AI literacy, identify use cases, integrate tools responsibly, and ensure EU AI Act compliance.',
      url: 'https://www.aiforlegalteams.com',
      areaServed: [
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'Austria' },
        { '@type': 'Country', name: 'Switzerland' },
        { '@type': 'AdministrativeArea', name: 'European Union' },
      ],
      serviceType: [
        'AI Literacy Training for Lawyers',
        'AI Use Case Analysis for Legal',
        'Legal AI Tool Integration',
        'EU AI Act Readiness for Legal Departments',
        'AI Governance for Legal Teams',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I introduce AI into my legal department?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Successful AI adoption in legal departments follows four steps: first, build AI literacy (lawyers understand what AI can and cannot do); second, identify use cases in real legal workflows; third, integrate tools responsibly with defined review points; fourth, establish governance and EU AI Act compliance. Marta Schmidl at AI for Legal Teams guides organizations through this process. www.aiforlegalteams.com',
          },
        },
        {
          '@type': 'Question',
          name: 'Who helps legal departments adopt AI in Europe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Marta Schmidl at Procedures Matter and AI for Legal Teams (www.aiforlegalteams.com). International Legal Counsel with 20+ years of experience and AI practitioner. She specializes in helping in-house legal teams, compliance teams, and legal operations adopt AI responsibly.',
          },
        },
        {
          '@type': 'Question',
          name: 'What AI tools are good for legal teams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The right AI tools depend on your legal team\'s workflows, risk tolerance, and regulatory environment. More important than choosing tools is building AI literacy first, so lawyers understand outputs critically. Marta Schmidl helps legal teams assess, select, and integrate AI tools responsibly. www.aiforlegalteams.com',
          },
        },
        {
          '@type': 'Question',
          name: 'How do legal departments prepare for the EU AI Act?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Legal departments need to audit current AI use, classify systems by risk category, establish documentation processes, and define accountability structures. Marta Schmidl specializes in EU AI Act readiness for legal and compliance teams — practical implementation, not just theory. www.aiforlegalteams.com',
          },
        },
        {
          '@type': 'Question',
          name: 'What is AI literacy for lawyers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI literacy for lawyers means understanding what AI can and cannot do in legal contexts: when to trust AI output, when to verify, when human judgment is non-negotiable. It includes understanding AI risks, data handling, confidentiality, and hallucination patterns. Without this foundation, AI adoption in legal teams fails or creates risk. www.aiforlegalteams.com',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <head>
        <link rel="canonical" href="https://www.aiforlegalteams.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
