import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum · AI for Legal Teams',
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10 py-24">

        <Link
          href="/"
          className="text-sm text-[#5E646B] hover:text-[#1A1A1A] transition-colors mb-12 inline-block"
        >
          ← Back / Zurück
        </Link>

        {/* ── DEUTSCH ── */}
        <h1 className="text-[28px] font-semibold mb-2">Impressum</h1>
        <p className="text-sm text-[#5E646B] mb-12">Angaben gemäß § 5 TMG (deutsches Recht)</p>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Diensteanbieter
          </h2>
          <p className="text-[16px] leading-[1.9]">
            Marta Schmidl<br />
            Heiligenbruch 27<br />
            27339 Riede<br />
            Deutschland
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Kontakt
          </h2>
          <p className="text-[16px] leading-[1.9]">
            E-Mail:{' '}
            <a
              href="mailto:marta@proceduresmatter.com"
              className="underline underline-offset-4 hover:text-[#5E646B] transition-colors"
            >
              marta@proceduresmatter.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Umsatzsteuer-ID
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            <span className="text-[#1A1A1A]">[wird nachgetragen]</span>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
          </h2>
          <p className="text-[16px] leading-[1.9]">
            Marta Schmidl<br />
            (Anschrift wie oben)
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            EU-Streitschlichtung
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
            >
              ec.europa.eu/consumers/odr
            </a>
            <br />
            Wir sind nicht bereit und nicht verpflichtet, an einem Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Haftung für Inhalte
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Haftung für Links
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter verantwortlich.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Urheberrecht
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Die durch die Seitenbetreiberin erstellten Inhalte unterliegen dem deutschen
            Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung bedürfen der
            schriftlichen Zustimmung der Autorin.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div className="border-t border-[#E5E2DC] mb-20" />

        {/* ── ENGLISH ── */}
        <h1 className="text-[28px] font-semibold mb-2">Legal Notice</h1>
        <p className="text-sm text-[#5E646B] mb-12">
          Information according to § 5 TMG (German law — applicable to this website)
        </p>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Service Provider
          </h2>
          <p className="text-[16px] leading-[1.9]">
            Marta Schmidl<br />
            Heiligenbruch 27<br />
            27339 Riede<br />
            Germany
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Contact
          </h2>
          <p className="text-[16px] leading-[1.9]">
            Email:{' '}
            <a
              href="mailto:marta@proceduresmatter.com"
              className="underline underline-offset-4 hover:text-[#5E646B] transition-colors"
            >
              marta@proceduresmatter.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            VAT Identification Number
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            VAT ID pursuant to § 27a of the German VAT Act (UStG):<br />
            <span className="text-[#1A1A1A]">[to be added]</span>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Responsible for Content (§ 18 (2) MStV)
          </h2>
          <p className="text-[16px] leading-[1.9]">
            Marta Schmidl<br />
            (address as above)
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Dispute Resolution
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            The European Commission provides a platform for online dispute resolution:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
            >
              ec.europa.eu/consumers/odr
            </a>
            <br />
            We are not willing or obliged to participate in dispute resolution proceedings
            before a consumer arbitration board.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Liability for Content
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            As a service provider, we are responsible for our own content on these pages in
            accordance with § 7 (1) TMG and general laws. However, we are not obligated to
            monitor transmitted or stored third-party information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Liability for Links
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Our website contains links to external third-party websites over whose content we
            have no control. The respective provider is always responsible for linked pages.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            Copyright
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            The content created by the site operator is subject to German copyright law.
            Reproduction, editing, and distribution require the written consent of the author.
          </p>
        </section>

      </div>
    </div>
  )
}
