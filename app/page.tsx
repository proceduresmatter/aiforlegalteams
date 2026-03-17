'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const HOLO = 'linear-gradient(90deg, #B8C6FF 0%, #DCC6FF 50%, #AEE0FF 100%)'
const HOLO_DARK_TEXT = 'linear-gradient(90deg, #3a5abf, #7a4abf)'

function HoloLine({ width = 'w-10', className = '' }: { width?: string; className?: string }) {
  return <div className={`h-[2px] ${width} ${className}`} style={{ background: HOLO }} />
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`fade-up ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function SectionFade({ from, to, height = '140px' }: { from: string; to: string; height?: string }) {
  return <div style={{ height, background: `linear-gradient(to bottom, ${from}, ${to})`, pointerEvents: 'none' }} />
}

const content = {
  en: {
    nav: { cta: 'Book a conversation' },
    hero: {
      title: 'Successful AI adoption in legal teams happens where AI meets human structure.',
      sub1: 'Your legal department is ready for AI.',
      sub2: 'AI for Legal Teams helps legal departments adopt AI with greater efficiency and responsible decision-making.',
      cta: 'Book a conversation',
      ctaSub: 'See how it works',
    },
    approach: {
      label: 'The approach',
      heading: 'A structured approach to AI adoption for legal teams.',
      governanceLabel: 'Responsible AI Governance & EU AI Act Readiness',
      resultLabel: 'Result',
    },
    steps: [
      {
        num: '01',
        title: 'AI Readiness',
        icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
        bullets: [
          'Understand where your legal department currently stands with AI',
          'Identify skill gaps, readiness barriers and entry points',
          'Build a shared baseline across leadership and legal teams',
        ],
        outcome: 'You know where to start.',
      },
      {
        num: '02',
        title: 'Define Legal Use Cases',
        icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
        bullets: [
          'Analyse real legal workflows, not hypothetical scenarios',
          'Identify and prioritise high-value use cases',
          'Define safe and meaningful entry points for legal work',
        ],
        outcome: 'AI creates real value in legal work.',
      },
      {
        num: '03',
        title: 'Integrate AI into Legal Work',
        icon: '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>',
        bullets: [
          'Select tools based on actual legal needs',
          'Design workflows around AI support',
          'Build in review points and human oversight from the start',
        ],
        outcome: 'AI becomes part of how legal work gets done.',
      },
    ],
    governance: {
      title: 'Responsible AI Governance & EU AI Act Readiness',
      bullets: [
        'Governance is embedded throughout the entire process',
        'Decision ownership is clearly defined at every stage',
        'Documentation meets EU AI Act requirements',
        'AI use remains traceable and accountable',
      ],
      tagline: 'AI adoption through structure, procedures and decision clarity. Procedures matter.',
    },
    whoFor: {
      heading: 'Who this is for',
      items: [
        {
          label: 'In-house legal teams',
          icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
          checks: [
            'AI is on your leadership\'s agenda, but nobody has a clear implementation plan',
            'Your team uses AI tools informally, without structure or oversight',
            'You need a practical plan, not a theoretical one',
          ],
        },
        {
          label: 'Compliance teams',
          icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
          checks: [
            'AI use in your organisation must meet GDPR and EU AI Act requirements',
            'You need documentation and accountability structures for AI systems in use',
            'Risk categories of AI systems in use are not yet assessed',
          ],
        },
        {
          label: 'General Counsel and CLOs',
          icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
          checks: [
            'You\'re being asked about AI readiness but don\'t have clear answers',
            'You want an honest view of what adoption actually takes',
            'You need someone who understands both law and AI. Not a vendor.',
          ],
        },
        {
          label: 'Legal operations',
          icon: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>',
          checks: [
            'You manage high document volumes and repetitive legal workflows',
            'You\'ve tried AI tools but adoption was inconsistent',
            'You want AI built into how legal work gets done, not bolted on afterwards',
          ],
        },
      ],
    },
    bridge: {
      heading: 'Human structure makes legal teams AI-ready.',
      caption1: 'The visible side of AI is tools.',
      caption2: 'What matters most is accountability, processes and compliance.',
      above: ['AI tools', 'Pilots', 'Experimentation'],
      below: ['Decision ownership', 'Procedures', 'Compliance'],
      explanation: 'Most legal AI initiatives focus on the visible part. What determines success is everything underneath: who owns decisions, how processes are structured, and whether compliance is built in from the start.',
    },
    challenge: {
      label: 'The challenge',
      heading: 'Successful AI adoption in legal teams goes beyond technology.',
      sub: 'What matters is introducing AI in a way that fits how your legal department works, supports responsible decisions, and creates real value in everyday legal work.',
      items: [
        { quote: '"We bought the tools. Nobody uses them properly."', label: 'Adoption failure', icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>' },
        { quote: '"Lawyers are using AI informally. Nobody knows the risks."', label: 'Shadow AI exposure', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>' },
        { quote: '"We need to be EU AI Act compliant but don\'t know what applies to us."', label: 'Compliance uncertainty', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
        { quote: '"Our GC wants AI. Our lawyers are afraid of it."', label: 'Readiness gap', icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' },
        { quote: '"We don\'t know where AI is safe to use in legal work."', label: 'Use case confusion', icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' },
        { quote: '"Who is accountable when AI makes a mistake in a legal matter?"', label: 'Accountability gap', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
      ],
    },
    cta: {
      heading: 'Ready to introduce AI into your legal team?',
      sub: 'Start with a conversation. No pitch, no template. Just an honest look at where your legal department is and what AI adoption actually requires.',
      btn: 'Book a conversation',
    },
    about: {
      label: 'About me',
      role: 'AI Adoption Advisor · Decision Structures · International Legal Counsel',
      bio1: 'I work on how AI becomes part of daily operations - in a way that aligns with responsibility, risk and real workflows.',
      bio2: 'My background combines international legal practice, project management and hands-on AI adoption in legal and business teams. This shapes how I design AI use in real working environments.',
      bio3: 'My work is supported by a structured AI environment, integrated into daily workflows. I use it within clear principles, with human judgment and responsibility remaining explicit.',
      bio4: 'I bring a strong understanding of legal risk, organizational reality and the human side of adoption.',
      linkedin: 'LinkedIn',
      cols: [
        {
          label: 'Legal',
          num: '01',
          desc: 'Legal risk, accountability, and regulatory complexity from international legal practice in highly regulated environments.',
          grad: 'linear-gradient(135deg, rgba(184,198,255,0.18), rgba(184,198,255,0.06))',
          border: 'rgba(184,198,255,0.35)',
        },
        {
          label: 'AI',
          num: '02',
          desc: 'Hands-on AI adoption in legal teams: building tools, testing approaches, and integrating AI into real legal workflows.',
          grad: 'linear-gradient(135deg, rgba(220,198,255,0.18), rgba(220,198,255,0.06))',
          border: 'rgba(220,198,255,0.35)',
        },
        {
          label: 'Collaboration',
          num: '03',
          desc: 'Project management and change leadership: aligning stakeholders and structuring initiatives so legal teams can actually adopt new ways of working.',
          grad: 'linear-gradient(135deg, rgba(174,224,255,0.18), rgba(174,224,255,0.06))',
          border: 'rgba(174,224,255,0.35)',
        },
      ],
    },
    testimonials: {
      label: 'What people say',
      featured: '\u201cShe combines strong legal judgment with AI adoption to simplify complexity and accelerate outcomes.\u201d',
      items: [
        {
          quote: 'She brings deep legal expertise to every discussion, seasoned with strong business acumen. Her experimentation and deliveries across AI and automation bring significant efficiency to our business.',
          name: 'Diogo Chaves',
          title: 'Chief Procurement Officer',
          company: 'Global life sciences company',
        },
        {
          quote: 'She combines strong legal judgment with AI adoption to simplify complexity and accelerate outcomes. What sets Marta apart is her adoption of AI at a speedy rate.',
          name: 'Pei Ling Ng',
          title: 'Head of Legal APAC',
          company: 'Global pharmaceutical company',
        },
        {
          quote: 'Marta has been a great advocate of AI integration into the legal and procurement space. She was one of the first creating AI personas which allowed us to do tasks faster, improve communications, and identify differences in contracts. Together with her legal knowledge, this made our team stronger.',
          name: 'Rubi Castro-Williams',
          title: 'Global Procurement Category Director',
          company: 'Elanco',
        },
      ],
    },
  },
  de: {
    nav: { cta: 'Gespräch buchen' },
    hero: {
      title: 'Erfolgreiche KI-Einführung in Rechtsteams entsteht dort, wo KI auf menschliche Struktur trifft.',
      sub1: 'Ihre Rechtsabteilung ist bereit für KI.',
      sub2: 'AI for Legal Teams begleitet Rechtsabteilungen bei der KI-Einführung mit mehr Effizienz und verantwortungsvoller Entscheidungsfindung.',
      cta: 'Gespräch buchen',
      ctaSub: 'So funktioniert es',
    },
    approach: {
      label: 'Die Vorgehensweise',
      heading: 'Ein strukturierter Ansatz für die KI-Einführung in Rechtsteams.',
      governanceLabel: 'Verantwortungsvolle KI-Governance & EU AI Act Readiness',
      resultLabel: 'Ergebnis',
    },
    steps: [
      {
        num: '01',
        title: 'KI-Readiness',
        icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
        bullets: [
          'Verstehen, wo Ihre Rechtsabteilung heute mit KI steht',
          'Skill-Lücken, Barrieren und Einstiegspunkte identifizieren',
          'Gemeinsame Ausgangsbasis in Führung und Team schaffen',
        ],
        outcome: 'Sie wissen, wo Sie anfangen.',
      },
      {
        num: '02',
        title: 'Juristische Use Cases definieren',
        icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
        bullets: [
          'Reale juristische Workflows analysieren, keine Hypothesen',
          'Hochwertige Use Cases identifizieren und priorisieren',
          'Sichere und sinnvolle Einstiegspunkte für juristische Arbeit definieren',
        ],
        outcome: 'KI schafft echten Mehrwert in der juristischen Arbeit.',
      },
      {
        num: '03',
        title: 'KI in die juristische Arbeit integrieren',
        icon: '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>',
        bullets: [
          'Werkzeuge nach echten juristischen Anforderungen auswählen',
          'Workflows rund um KI-Unterstützung gestalten',
          'Prüfpunkte und menschliche Aufsicht von Anfang an einbauen',
        ],
        outcome: 'KI wird Teil der juristischen Alltagsarbeit.',
      },
    ],
    governance: {
      title: 'Verantwortungsvolle KI-Governance & EU AI Act Readiness',
      bullets: [
        'Governance ist im gesamten Prozess verankert',
        'Entscheidungsverantwortung ist auf jeder Ebene klar geregelt',
        'Dokumentation erfüllt EU AI Act-Anforderungen',
        'KI-Einsatz bleibt nachvollziehbar und verantwortungsvoll',
      ],
      tagline: 'KI-Einführung durch Struktur, Prozesse und klare Entscheidungsverantwortung. Procedures matter.',
    },
    whoFor: {
      heading: 'Für wen das gedacht ist',
      items: [
        {
          label: 'Interne Rechtsabteilungen',
          icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
          checks: [
            'KI steht auf der Agenda der Führungsebene, aber niemand hat einen klaren Umsetzungsplan',
            'Ihr Team nutzt KI-Tools informell, ohne Struktur oder Kontrolle',
            'Sie brauchen einen praxistauglichen Plan, keine Theorie',
          ],
        },
        {
          label: 'Compliance-Teams',
          icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
          checks: [
            'KI-Einsatz in Ihrer Organisation muss DSGVO- und EU AI Act-konform sein',
            'Sie brauchen Dokumentations- und Verantwortungsstrukturen für eingesetzte KI-Systeme',
            'Risikokategorien der eingesetzten KI-Systeme sind noch nicht bewertet',
          ],
        },
        {
          label: 'General Counsel und CLOs',
          icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
          checks: [
            'Sie werden nach KI-Readiness gefragt, haben aber keine klaren Antworten',
            'Sie möchten einen ehrlichen Blick darauf, was Adoption wirklich erfordert',
            'Sie brauchen jemanden, der Recht und KI versteht. Kein Anbieter.',
          ],
        },
        {
          label: 'Legal Operations',
          icon: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>',
          checks: [
            'Sie verwalten große Dokumentenmengen und repetitive juristische Abläufe',
            'Sie haben KI-Tools ausprobiert, aber die Adoption war uneinheitlich',
            'Sie möchten KI in die juristische Arbeit eingebaut, nicht als Nachtrag',
          ],
        },
      ],
    },
    bridge: {
      heading: 'Menschliche Struktur macht Rechtsteams KI-bereit.',
      caption1: 'Die sichtbare Seite von KI sind Tools.',
      caption2: 'Was wirklich zählt: Verantwortung, Prozesse und Compliance.',
      above: ['KI-Tools', 'Pilotprojekte', 'Experimente'],
      below: ['Entscheidungsverantwortung', 'Prozesse', 'Compliance'],
      explanation: 'Die meisten KI-Initiativen in Rechtsteams konzentrieren sich auf das Sichtbare. Was den Erfolg bestimmt, liegt darunter: wer Entscheidungen verantwortet, wie Prozesse strukturiert sind, und ob Compliance von Anfang an eingebaut ist.',
    },
    challenge: {
      label: 'Die Herausforderung',
      heading: 'Erfolgreiche KI-Einführung in Rechtsteams geht über Technologie hinaus.',
      sub: 'Es geht darum, KI so einzuführen, dass sie zur Arbeitsweise Ihrer Rechtsabteilung passt, verantwortungsvolle Entscheidungen unterstützt und echten Mehrwert in der täglichen juristischen Arbeit schafft.',
      items: [
        { quote: '"Wir haben die Tools gekauft. Niemand nutzt sie richtig."', label: 'Adoption-Versagen', icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>' },
        { quote: '"Anwälte nutzen KI informell. Niemand kennt die Risiken."', label: 'Shadow-AI-Exposition', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>' },
        { quote: '"Wir müssen EU AI Act-konform sein, wissen aber nicht, was für uns gilt."', label: 'Compliance-Unsicherheit', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
        { quote: '"Unser GC will KI. Unsere Anwälte haben Angst davor."', label: 'Readiness-Lücke', icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' },
        { quote: '"Wir wissen nicht, wo KI in der juristischen Arbeit sicher einsetzbar ist."', label: 'Use-Case-Verwirrung', icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' },
        { quote: '"Wer haftet, wenn KI in einem Rechtsfall einen Fehler macht?"', label: 'Verantwortungslücke', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
      ],
    },
    cta: {
      heading: 'Bereit, KI in Ihr Rechtsteam einzuführen?',
      sub: 'Starten Sie mit einem Gespräch. Kein Pitch, keine Vorlage. Nur ein ehrlicher Blick darauf, wo Ihre Rechtsabteilung steht und was KI-Adoption wirklich erfordert.',
      btn: 'Gespräch buchen',
    },
    about: {
      label: 'Über mich',
      role: 'AI Adoption Advisor · Entscheidungsstrukturen · International Legal Counsel',
      bio1: 'Ich arbeite daran, dass KI Teil des Arbeitsalltags wird - so, dass sie zu Verantwortung, Risiko und realen Abläufen passt.',
      bio2: 'Mein Hintergrund verbindet internationale Rechtspraxis, Projektmanagement und die konkrete Einführung von KI in juristischen und operativen Teams. Das prägt, wie ich KI in realen Arbeitsumgebungen gestalte.',
      bio3: 'Meine Arbeit wird durch eine strukturierte KI-Umgebung unterstützt, die in die täglichen Arbeitsabläufe integriert ist. Ich nutze sie innerhalb klarer Prinzipien, bei denen menschliches Urteilsvermögen und Verantwortung jederzeit sichtbar bleiben.',
      bio4: 'Ich bringe ein ausgeprägtes Verständnis für rechtliche Risiken, organisationale Realität und die menschliche Seite von Veränderung mit.',
      linkedin: 'LinkedIn',
      cols: [
        {
          label: 'Recht',
          num: '01',
          desc: 'Rechtliche Risiken, Verantwortlichkeit und regulatorische Komplexität aus internationaler Rechtspraxis in stark regulierten Branchen.',
          grad: 'linear-gradient(135deg, rgba(184,198,255,0.18), rgba(184,198,255,0.06))',
          border: 'rgba(184,198,255,0.35)',
        },
        {
          label: 'KI',
          num: '02',
          desc: 'Praktische KI-Adoption in Rechtsteams: Tools entwickeln, Ansätze testen und KI in echte juristische Workflows integrieren.',
          grad: 'linear-gradient(135deg, rgba(220,198,255,0.18), rgba(220,198,255,0.06))',
          border: 'rgba(220,198,255,0.35)',
        },
        {
          label: 'Zusammenarbeit',
          num: '03',
          desc: 'Projektmanagement und Change Leadership: Stakeholder ausrichten und Initiativen strukturieren, damit Rechtsteams neue Arbeitsweisen wirklich annehmen.',
          grad: 'linear-gradient(135deg, rgba(174,224,255,0.18), rgba(174,224,255,0.06))',
          border: 'rgba(174,224,255,0.35)',
        },
      ],
    },
    testimonials: {
      label: 'Was andere sagen',
      featured: '\u201eSie verbindet starkes juristisches Urteil mit KI-Adoption, um Komplexität zu vereinfachen und Ergebnisse zu beschleunigen.\u201c',
      items: [
        {
          quote: 'Sie bringt tiefes juristisches Fachwissen in jede Diskussion ein, ergänzt durch ausgeprägten Geschäftssinn. Ihre Experimente und Leistungen in KI und Automatisierung bringen erhebliche Effizienzgewinne für unser Unternehmen.',
          name: 'Diogo Chaves',
          title: 'Chief Procurement Officer',
          company: 'Globales Life-Sciences-Unternehmen',
        },
        {
          quote: 'Sie verbindet starkes juristisches Urteil mit KI-Adoption, um Komplexität zu vereinfachen und Ergebnisse zu beschleunigen. Was Marta auszeichnet, ist ihre außergewöhnlich schnelle KI-Adoption.',
          name: 'Pei Ling Ng',
          title: 'Head of Legal APAC',
          company: 'Globales Pharmaunternehmen',
        },
        {
          quote: 'Marta war eine große Förderin der KI-Integration im juristischen und Einkaufsbereich. Sie war eine der Ersten, die KI-Personas entwickelte, mit denen wir Aufgaben schneller erledigen, die Kommunikation verbessern und Unterschiede in Verträgen erkennen konnten. Zusammen mit ihrem juristischen Wissen hat das unser Team stärker gemacht.',
          name: 'Rubi Castro-Williams',
          title: 'Global Procurement Category Director',
          company: 'Elanco',
        },
      ],
    },
  },
}

export default function Page() {
  const [lm, setLm] = useState(false)
  const [lang, setLang] = useState<'en' | 'de'>('en')
  const [scrolled, setScrolled] = useState(false)
  const [icebergVisible, setIcebergVisible] = useState(false)
  const icebergRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const storedLm = localStorage.getItem('aflt-lm')
    const storedLang = localStorage.getItem('aflt-lang')
    const initialLang = storedLang === 'de' ? 'de' : 'en'
    if (storedLang === 'de') setLang('de')
    if (storedLm !== null) {
      setLm(storedLm === 'true')
    } else if (initialLang === 'de') {
      setLm(true)
    }
  }, [])
  useEffect(() => { localStorage.setItem('aflt-lm', String(lm)) }, [lm])
  useEffect(() => { localStorage.setItem('aflt-lang', lang) }, [lang])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => {
    const el = icebergRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIcebergVisible(true) },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const c = content[lang]

  const ink = lm ? '#1A1A1A' : '#F5F3EF'
  const inkMuted = lm ? '#3A4149' : 'rgba(245,243,239,0.65)'
  const inkFaint = lm ? 'rgba(26,26,26,0.62)' : 'rgba(245,243,239,0.35)'
  const lightBg = lm ? '#F5F3EF' : '#0B1120'
  const lightBgAlt = lm ? '#EEECEA' : '#0E1628'
  const darkBg = '#080D18'
  const dividerColor = lm ? 'rgba(26,26,26,0.1)' : 'rgba(184,198,255,0.12)'
  const holoLabel = lm ? HOLO_DARK_TEXT : HOLO

  return (
    <div suppressHydrationWarning style={{ background: lightBg, color: ink, fontFamily: 'var(--font-inter)', transition: 'background 0.3s ease, color 0.3s ease' }}>

      {/* Nav */}
      <nav suppressHydrationWarning style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(20px, 5vw, 60px)', height: '64px',
        background: 'rgba(8,13,24,0.92)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(184,198,255,0.12)',
      }}>
        <a href="https://www.aiforlegalteams.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-barlow)', fontSize: '15px', fontWeight: 700, color: '#F5F3EF', letterSpacing: '0.03em' }}>
            AI for Legal Teams
          </span>
          <span className="nav-sub" style={{ fontSize: '12px', color: 'rgba(184,198,255,0.6)', paddingLeft: '10px', borderLeft: '1px solid rgba(184,198,255,0.2)' }}>
            by Procedures Matter
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a href="https://www.proceduresmatter.com/#booking" className="nav-book-btn" style={{
            fontFamily: 'var(--font-barlow)', fontSize: '13px', fontWeight: 700,
            color: '#1A1A1A', background: HOLO, padding: '8px 18px',
            borderRadius: '8px', textDecoration: 'none', letterSpacing: '0.03em',
          }}>
            {c.nav.cta}
          </a>
          <button
            onClick={() => {
              const newLang = lang === 'en' ? 'de' : 'en'
              setLang(newLang)
              setLm(newLang === 'de')
            }}
            aria-label={lang === 'en' ? 'Zur deutschen Version wechseln' : 'Switch to English version'}
            className="nav-lang-btn"
            style={{
              height: '36px', padding: '0 12px', borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.28)',
              background: 'rgba(255,255,255,0.08)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px',
              fontFamily: 'var(--font-barlow)', fontSize: '13px', fontWeight: 700,
              color: 'white', letterSpacing: '0.04em',
            }}
          >
            {lang === 'en' && (
              <span style={{ display: 'flex', flexDirection: 'column', width: '20px', height: '13px', borderRadius: '2px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.25)' }}>
                <span style={{ flex: 1, background: '#000', display: 'block' }} />
                <span style={{ flex: 1, background: '#CC0000', display: 'block' }} />
                <span style={{ flex: 1, background: '#FFCC00', display: 'block' }} />
              </span>
            )}
            {lang === 'en' ? 'Deutsch' : 'English'}
          </button>
          <button
            onClick={() => setLm(!lm)}
            aria-label={lm ? 'Switch to dark mode' : 'Switch to light mode'}
            style={{
              height: '36px', padding: '0 10px', borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.28)',
              background: 'rgba(255,255,255,0.08)',
              color: 'white', fontSize: '15px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-barlow)', fontWeight: 700,
            }}
          >
            {lm ? '☽' : '☀'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: '100vh', background: lm ? `linear-gradient(160deg, ${lightBg} 0%, ${lightBgAlt} 100%)` : 'linear-gradient(160deg, #080D18 0%, #0D1525 55%, #080D18 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(100px, 14vw, 160px) clamp(24px, 6vw, 80px) clamp(24px, 3vw, 40px)',
      }}>
        <div style={{ maxWidth: '780px', width: '100%' }}>
          <FadeUp><HoloLine width="w-10" className="mb-6" /></FadeUp>
          <FadeUp delay={80}>
            <h1 style={{
              fontFamily: 'var(--font-barlow)', fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: 900, lineHeight: 1.05, color: ink,
              letterSpacing: '-0.02em', marginBottom: '28px',
            }}>
              {c.hero.title}
            </h1>
          </FadeUp>
          <FadeUp delay={160}>
            <p style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 300, color: inkMuted, lineHeight: 1.6, marginBottom: '12px', maxWidth: '620px' }}>
              {c.hero.sub1}
            </p>
            <p style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 300, color: inkMuted, lineHeight: 1.6, marginBottom: '40px', maxWidth: '620px' }}>
              {c.hero.sub2}
            </p>
          </FadeUp>
          <FadeUp delay={240}>
            <a href="https://www.proceduresmatter.com/#booking" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              fontFamily: 'var(--font-barlow)', fontSize: '15px', fontWeight: 700,
              letterSpacing: '0.04em', color: '#1A1A1A', background: HOLO,
              padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', marginRight: '16px',
            }}>
              {c.hero.cta} <span style={{ fontSize: '18px' }}>&#8594;</span>
            </a>
            <a href="#approach" style={{
              display: 'inline-flex', alignItems: 'center', fontSize: '14px',
              fontWeight: 500, color: inkFaint, textDecoration: 'none', gap: '6px',
            }}>
              {c.hero.ctaSub} &#8595;
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Steps */}
      <section id="approach" style={{ background: lm ? lightBgAlt : 'linear-gradient(180deg, #0D1525 0%, #080D18 100%)', padding: 'clamp(24px, 3vw, 40px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <FadeUp>
            <HoloLine width="w-8" className="mb-5" />
            <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: inkFaint, marginBottom: '16px' }}>
              {c.approach.label}
            </p>
            <h2 style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, color: ink, lineHeight: 1.2, marginBottom: '48px', letterSpacing: '-0.01em' }}>
              {c.approach.heading}
            </h2>
          </FadeUp>

          {/* Step progress indicator */}
          <FadeUp>
            <div style={{ marginBottom: '48px' }}>
              <div className="steps-progress" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                {c.steps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', flex: i < 2 ? 1 : 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', minWidth: '120px' }}>
                      <div style={{
                        width: '72px', height: '72px', borderRadius: '50%', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-barlow)', fontSize: '20px', fontWeight: 800, color: lm ? '#3a5abf' : '#AEE0FF',
                        background: lm ? `linear-gradient(#fff, #fff) padding-box, ${HOLO} border-box` : `linear-gradient(#0d1629, #0d1629) padding-box, ${HOLO} border-box`,
                        border: '2px solid transparent',
                      }}>
                        {step.num}
                      </div>
                      <span style={{ fontSize: '13px', fontFamily: 'var(--font-barlow)', fontWeight: 700, letterSpacing: '0.03em', textAlign: 'center', maxWidth: '120px', lineHeight: 1.4, color: lm ? '#3a5abf' : '#AEE0FF' }}>
                        {step.title}
                      </span>
                    </div>
                    {i < 2 && (
                      <div style={{ flex: 1, height: '1px', opacity: 0.4, background: lm ? 'linear-gradient(90deg, rgba(58,90,191,0.6), rgba(122,74,191,0.3))' : 'linear-gradient(90deg, rgba(174,224,255,0.5), rgba(184,198,255,0.15))', margin: '36px 4px 0' }} />
                    )}
                  </div>
                ))}
              </div>
              <div style={{
                padding: '8px 16px', borderRadius: '6px', textAlign: 'center',
                background: lm ? 'rgba(58,90,191,0.06)' : 'rgba(184,198,255,0.08)',
                border: `1px solid ${lm ? 'rgba(58,90,191,0.2)' : 'rgba(184,198,255,0.25)'}`,
              }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: lm ? '#3a5abf' : '#B8C6FF' }}>
                  {c.approach.governanceLabel}
                </span>
              </div>
            </div>
          </FadeUp>

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {c.steps.map((step, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div style={{
                  background: lm ? '#FFFFFF' : 'rgba(8,13,24,0.82)', border: lm ? '1px solid rgba(26,26,26,0.12)' : '1px solid rgba(184,198,255,0.18)',
                  borderRadius: '12px', padding: '28px 26px', backdropFilter: 'blur(12px)',
                  display: 'flex', flexDirection: 'column', gap: '16px', height: '100%',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={lm ? '#3a5abf' : '#AEE0FF'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: step.icon }} />
                    <span style={{ fontFamily: 'var(--font-barlow)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: lm ? '#3a5abf' : '#AEE0FF' }}>{step.num}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '18px', fontWeight: 700, color: ink, lineHeight: 1.3 }}>{step.title}</p>
                  <ul style={{ paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                    {step.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: '14px', color: inkMuted, lineHeight: 1.65, listStyle: 'none' }}>
                        <span style={{ color: lm ? '#3a5abf' : '#B8C6FF', marginRight: '8px' }}>·</span>{b}
                      </li>
                    ))}
                  </ul>
                  <div style={{
                    background: 'linear-gradient(90deg, rgba(52,211,153,0.12), rgba(16,185,129,0.06))',
                    border: '1px solid rgba(52,211,153,0.28)',
                    borderRadius: '8px', padding: '14px 16px', marginTop: '4px',
                  }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34D399', marginBottom: '6px' }}>{c.approach.resultLabel}</p>
                    <p style={{ fontSize: '15px', fontWeight: 700, color: ink, lineHeight: 1.35 }}>{step.outcome}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div style={{
              marginTop: '32px',
              padding: '20px 24px',
              borderRadius: '10px',
              position: 'relative',
              background: lm ? 'rgba(58,90,191,0.06)' : 'rgba(184,198,255,0.08)',
              border: `1px solid ${lm ? 'rgba(58,90,191,0.2)' : 'rgba(184,198,255,0.25)'}`,
            }}>
              <div style={{ position: 'absolute', top: '16px', right: '24px', zIndex: 2 }}>
                <Image src="/humanintheloop.jpg" alt="Human in the Loop" width={160} height={160} style={{ borderRadius: '50%', filter: 'drop-shadow(0 4px 12px rgba(184,198,255,0.4))', transform: 'rotate(12deg)' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: lm ? '#3a5abf' : '#B8C6FF', marginBottom: '12px' }}>
                {c.governance.title}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                {c.governance.bullets.map((b, i) => (
                  <span key={i} style={{ fontSize: '14px', color: inkMuted, lineHeight: 1.6 }}>
                    <span style={{ color: lm ? '#3a5abf' : '#B8C6FF', marginRight: '6px' }}>·</span>{b}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '14px', fontWeight: 600, color: ink, lineHeight: 1.5, borderTop: `1px solid ${lm ? 'rgba(58,90,191,0.15)' : 'rgba(184,198,255,0.2)'}`, paddingTop: '12px', marginTop: '4px' }}>
                {c.governance.tagline}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Who this is for */}
      <section style={{ background: lm ? lightBgAlt : 'linear-gradient(160deg, #080D18 0%, #0D1525 100%)', padding: 'clamp(28px, 4vw, 56px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <FadeUp>
            <HoloLine width="w-8" className="mb-5" />
            <h2 style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, color: ink, lineHeight: 1.2, marginBottom: '40px', letterSpacing: '-0.01em' }}>
              {c.whoFor.heading}
            </h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {c.whoFor.items.map((item, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div style={{ background: lm ? '#FFFFFF' : 'rgba(184,198,255,0.06)', border: lm ? '1px solid rgba(26,26,26,0.12)' : '1px solid rgba(184,198,255,0.15)', borderRadius: '10px', padding: '24px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={lm ? '#3a5abf' : '#AEE0FF'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: item.icon }} />
                    <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '17px', fontWeight: 700, color: ink }}>{item.label}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.checks.map((check, j) => (
                      <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#34D399', flexShrink: 0, marginTop: '1px' }}>&#10003;</span>
                        <p style={{ fontSize: '13px', color: inkMuted, lineHeight: 1.6 }}>{check}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge + Iceberg */}
      <section style={{ background: lm ? lightBg : 'linear-gradient(160deg, #080D18 0%, #0D1525 100%)', padding: 'clamp(28px, 4vw, 56px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(48px, 7vw, 80px)' }}>

          <FadeUp>
            <p style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(22px, 3vw, 38px)', fontWeight: 700, color: ink, lineHeight: 1.45, maxWidth: '680px', textAlign: 'center' }}>
              <span style={lm ? { color: '#3a5abf' } : { background: HOLO, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {c.bridge.heading}
              </span>
            </p>
          </FadeUp>

          {/* Iceberg */}
          <FadeUp delay={120}>
            <div ref={icebergRef} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>

              <div style={{ position: 'absolute', left: '-30px', top: '8%', zIndex: 10, maxWidth: '200px' }}>
                <HoloLine width="w-8" className="mb-3" />
                <p style={{ fontSize: '13px', fontWeight: 700, color: ink, lineHeight: 1.55, marginBottom: '6px' }}>
                  {c.bridge.caption1}
                </p>
                <p style={{ fontSize: '12px', color: inkMuted, lineHeight: 1.6 }}>
                  {c.bridge.caption2}
                </p>
              </div>

              <div className="eisberg-hero-wrap" style={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  src="/eisberg.jpg"
                  alt="The visible part of AI is tools. What matters most is underneath: accountability, processes, governance."
                  width={300}
                  height={420}
                  className="eisberg-hero-img"
                  style={{ width: 'clamp(220px, 70vw, 400px)', height: 'clamp(260px, 45vw, 460px)', objectFit: 'cover', objectPosition: 'center 40%' }}
                />
                <div style={{ position: 'absolute', top: '58%', left: 0, right: 0, pointerEvents: 'none', zIndex: 3 }}>
                  <div style={{ position: 'absolute', bottom: 'calc(100% + 10px)', right: '8%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                    {c.bridge.above.map((item, idx) => (
                      <div key={item} style={{
                        background: lm ? 'rgba(26,26,26,0.08)' : 'rgba(15,22,40,0.82)', backdropFilter: 'blur(18px)',
                        border: lm ? '1px solid rgba(26,26,26,0.18)' : '1px solid rgba(255,255,255,0.22)', borderRadius: '8px', padding: '8px 16px',
                        opacity: icebergVisible ? 1 : 0,
                        transform: icebergVisible ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.96)',
                        transition: `opacity 0.5s ease ${idx * 0.1}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s`,
                      }}>
                        <span style={{ fontSize: '13px', color: ink, fontWeight: 500, whiteSpace: 'nowrap' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ height: '1px', margin: '0 6%', background: 'linear-gradient(90deg, transparent, rgba(184,198,255,0.55) 20%, rgba(174,224,255,0.8) 50%, rgba(184,198,255,0.55) 80%, transparent)' }} />
                  <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: '8%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                    {c.bridge.below.map((item, idx) => (
                      <div key={item} style={{
                        background: 'rgba(184,198,255,0.18)', backdropFilter: 'blur(18px)',
                        border: '1px solid rgba(184,198,255,0.35)', borderRadius: '8px', padding: '8px 16px',
                        opacity: icebergVisible ? 1 : 0,
                        transform: icebergVisible ? 'translateY(0) scale(1)' : 'translateY(-6px) scale(0.96)',
                        transition: `opacity 0.5s ease ${idx * 0.1 + 0.15}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1 + 0.15}s`,
                      }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap', color: lm ? '#3a5abf' : '#B8C6FF' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <p style={{ textAlign: 'center', fontSize: '13px', color: inkFaint, lineHeight: 1.6, maxWidth: '500px', margin: '0 auto', fontStyle: 'italic' }}>
              {c.bridge.explanation}
            </p>
          </FadeUp>
        </div>
      </section>

      <SectionFade from={lm ? lightBg : darkBg} to={lightBg} />

      {/* Challenge */}
      <section style={{ background: lightBg, padding: 'clamp(28px, 4vw, 56px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeUp>
            <HoloLine width="w-8" className="mb-5" />
            <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: inkFaint, marginBottom: '20px' }}>
              {c.challenge.label}
            </p>
            <h2 style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 800, lineHeight: 1.15, color: ink, marginBottom: '16px', letterSpacing: '-0.01em' }}>
              {c.challenge.heading}
            </h2>
            <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', fontWeight: 300, color: inkMuted, lineHeight: 1.65, marginBottom: '40px', maxWidth: '620px' }}>
              {c.challenge.sub}
            </p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {c.challenge.items.map((item, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div style={{
                  borderRadius: '10px', padding: '22px 20px',
                  display: 'flex', flexDirection: 'column', gap: '14px',
                  border: '2px solid transparent',
                  boxShadow: lm ? '0 2px 8px rgba(26,26,26,0.08)' : 'none',
                  background: lm
                    ? `linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(rgba(58,90,191,0.5), rgba(122,74,191,0.4)) border-box`
                    : `linear-gradient(#0d1629, #0d1629) padding-box, ${HOLO} border-box`,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke={lm ? '#3a5abf' : '#AEE0FF'} strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                  <p style={{ fontSize: '14px', color: lm ? '#1A1A1A' : '#F0EDE8', lineHeight: 1.65, fontStyle: 'italic' }}>{item.quote}</p>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: lm ? '#3a5abf' : '#B8C6FF',
                  }}>{item.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: lightBg, padding: 'clamp(72px, 10vw, 120px) clamp(24px, 6vw, 80px)', textAlign: 'center' }}>
        <FadeUp>
          <HoloLine width="w-8" className="mb-6 mx-auto" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            <Image src="/clarity.png" alt="Clarity before speed" width={160} height={160} style={{ marginBottom: '24px', filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.18))' }} />
            <h2 style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.1, color: ink, letterSpacing: '-0.02em' }}>
              {c.cta.heading}
            </h2>
          </div>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: inkMuted, lineHeight: 1.65, maxWidth: '520px', margin: '0 auto 40px' }}>
            {c.cta.sub}
          </p>
          <a href="https://www.proceduresmatter.com/#booking" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            fontFamily: 'var(--font-barlow)', fontSize: '16px', fontWeight: 700,
            letterSpacing: '0.04em', color: '#1A1A1A', background: HOLO,
            padding: '16px 36px', borderRadius: '8px', textDecoration: 'none',
          }}>
            {c.cta.btn} <span style={{ fontSize: '20px' }}>&#8594;</span>
          </a>
        </FadeUp>
      </section>

      <SectionFade from={lightBg} to={lm ? lightBgAlt : '#0D1525'} />

      {/* About Marta */}
      <section style={{ background: lm ? lightBgAlt : 'linear-gradient(160deg, #0D1525 0%, #080D18 100%)', padding: 'clamp(28px, 4vw, 56px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <FadeUp>
            <HoloLine width="w-8" className="mb-5" />
            <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: inkFaint, marginBottom: '32px' }}>
              {c.about.label}
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '28px', alignItems: 'start', marginBottom: '48px' }}>
            <FadeUp>
              <div className="glass-photo-card" style={{ borderRadius: '14px', overflow: 'hidden', maxWidth: '180px' }}>
                <div className="glass-top-line" />
                <Image src="/foto.png" alt="Marta Schmidl" width={180} height={210} className="glass-image" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div className="glass-sheen" />
                <div className="glass-frost" />
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, lineHeight: 1.15, color: ink, marginBottom: '8px', letterSpacing: '-0.01em' }}>
                  Marta Schmidl
                </h2>
                <p style={{ fontSize: '14px', color: inkFaint, marginBottom: '20px', fontFamily: 'var(--font-barlow)', fontWeight: 600, letterSpacing: '0.04em' }}>
                  {c.about.role}
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: inkMuted, marginBottom: '12px' }}>{c.about.bio1}</p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: inkMuted, marginBottom: '12px' }}>{c.about.bio2}</p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: inkMuted, marginBottom: '12px' }}>{c.about.bio3}</p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: inkMuted, marginBottom: '28px' }}>{c.about.bio4}</p>
                <a href="https://www.linkedin.com/in/martaschmidl/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 600, color: ink, textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: dividerColor }}>
                  {c.about.linkedin} &#8594;
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Legal x AI x Collaboration */}
          <FadeUp delay={60}>
            <div className="about-cols-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
              {c.about.cols.map((col) => (
                <div key={col.label} style={{
                  background: lm ? '#FFFFFF' : col.grad,
                  border: lm ? '1px solid rgba(26,26,26,0.12)' : `1px solid ${col.border}`,
                  borderRadius: '12px', padding: '24px 20px',
                }}>
                  <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: inkFaint, marginBottom: '8px' }}>{col.num}</p>
                  <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.01em', marginBottom: '12px', color: lm ? '#1A1A1A' : undefined, background: lm ? undefined : holoLabel, WebkitBackgroundClip: lm ? undefined : 'text', WebkitTextFillColor: lm ? undefined : 'transparent' }}>
                    {col.label}
                  </p>
                  <p style={{ fontSize: '13px', color: inkMuted, lineHeight: 1.65 }}>{col.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
              <Image src="/clarity.png" alt="Clarity before speed" width={220} height={220} style={{ filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.18))' }} />
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionFade from={lm ? lightBgAlt : '#080D18'} to={lm ? lightBgAlt : darkBg} />

      {/* Testimonials */}
      <section style={{ background: lm ? lightBgAlt : darkBg, padding: 'clamp(72px, 10vw, 120px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <FadeUp>
            <HoloLine width="w-8" className="mb-5" />
            <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: inkFaint, marginBottom: '20px' }}>
              {c.testimonials.label}
            </p>
            <p style={{
              fontFamily: 'var(--font-barlow)', fontSize: 'clamp(20px, 2.8vw, 32px)', fontWeight: 700,
              lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '56px', maxWidth: '700px',
              background: HOLO, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              {c.testimonials.featured}
            </p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {c.testimonials.items.map((t, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div style={{
                  background: lm ? '#FFFFFF' : 'rgba(184,198,255,0.05)', border: lm ? '1px solid rgba(26,26,26,0.12)' : '1px solid rgba(184,198,255,0.15)',
                  borderRadius: '12px', padding: '26px 22px', height: '100%', display: 'flex', flexDirection: 'column',
                }}>
                  <HoloLine width="w-6" className="mb-4" />
                  <p style={{ fontSize: '14px', lineHeight: 1.75, color: inkMuted, fontStyle: 'italic', marginBottom: '20px', flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: ink }}>{t.name}</p>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: inkMuted, marginTop: '3px' }}>{t.title}</p>
                    <p style={{ fontSize: '11px', color: inkFaint, marginTop: '2px', letterSpacing: '0.03em' }}>{t.company}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'rgba(8,13,24,0.97)', padding: 'clamp(40px, 6vw, 60px) clamp(24px, 6vw, 80px)', borderTop: '1px solid rgba(184,198,255,0.10)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '14px', fontWeight: 600, color: '#F5F3EF', marginBottom: '4px' }}>AI for Legal Teams</p>
            <p style={{ fontSize: '12px', color: 'rgba(245,243,239,0.4)' }}>by Procedures Matter · Marta Schmidl</p>
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://www.proceduresmatter.com" style={{ fontSize: '13px', color: 'rgba(245,243,239,0.5)', textDecoration: 'none' }}>proceduresmatter.com</a>
            <a href="https://www.linkedin.com/in/martaschmidl/" style={{ fontSize: '13px', color: 'rgba(245,243,239,0.5)', textDecoration: 'none' }}>LinkedIn</a>
            <span style={{ color: 'rgba(184,198,255,0.2)', fontSize: '12px' }}>|</span>
            <a href="https://www.proceduresmatter.com/impressum" style={{
              fontSize: '13px', fontWeight: 600,
              color: 'rgba(184,198,255,0.75)', textDecoration: 'none',
              border: '1px solid rgba(184,198,255,0.25)', borderRadius: '6px',
              padding: '4px 10px',
            }}>Impressum</a>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {scrolled && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top" style={{
          position: 'fixed', bottom: '24px', right: '20px',
          width: '52px', height: '52px', borderRadius: '50%',
          background: HOLO, border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '20px', color: '#1A1A1A',
          boxShadow: '0 4px 20px rgba(184,198,255,0.35)', zIndex: 100,
        }}>&#8593;</button>
      )}
    </div>
  )
}
