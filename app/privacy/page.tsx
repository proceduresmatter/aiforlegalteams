import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy · AI for Legal Teams',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10 py-24">

        <Link
          href="/"
          className="text-sm text-[#5E646B] hover:text-[#1A1A1A] transition-colors mb-12 inline-block"
        >
          ← Back / Zurück
        </Link>

        {/* ── ENGLISH ── */}
        <h1 className="text-[28px] font-semibold mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#5E646B] mb-12">Last updated: March 2026</p>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            1. Controller
          </h2>
          <p className="text-[16px] leading-[1.9]">
            Marta Schmidl<br />
            Heiligenbruch 27<br />
            27339 Riede<br />
            Germany<br />
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
            2. Hosting
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            This website is hosted by Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, USA. When you access the website, the hosting
            provider automatically collects server log files (including IP
            address, browser type, operating system, referrer URL, date and
            time of access).
          </p>
          <p className="text-[16px] leading-[1.9] text-[#5E646B] mt-4">
            Legal basis: Art. 6(1)(f) GDPR (legitimate interest in the secure
            and stable operation of the website). Vercel is certified under the
            EU-US Data Privacy Framework.{' '}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
            >
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            3. No Contact Form on This Website
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            This website does not contain its own contact form. Booking and
            contact enquiries are handled via{' '}
            <a
              href="https://www.proceduresmatter.com"
              className="underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
            >
              proceduresmatter.com
            </a>
            . Please refer to the{' '}
            <a
              href="https://www.proceduresmatter.com/datenschutz"
              className="underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
            >
              privacy policy of proceduresmatter.com
            </a>{' '}
            for information on how contact and survey data is processed there.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            4. Fonts
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            This website uses Google Fonts. The font files are downloaded and
            stored locally on the server at build time via Next.js. No
            connection is made to Google servers when you visit the site.
            No personal data is transmitted to Google.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            5. External Links
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            This website contains links to LinkedIn (LinkedIn Ireland Unlimited
            Company, Wilton Place, Dublin 2, Ireland) and to proceduresmatter.com.
            When you click these links you leave our website. The respective
            operators are responsible for data processing on those pages. We have
            no influence over their privacy practices.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            6. Cookies and Tracking
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            This website does not use cookies or any tracking or analytics
            tools. No personal data is processed for advertising purposes or
            shared with third parties.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            7. Your Rights
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            You have the following rights regarding your personal data:
          </p>
          <ul className="mt-4 space-y-1 text-[16px] leading-[1.9] text-[#5E646B] list-none">
            <li>Right of access (Art. 15 GDPR)</li>
            <li>Right to rectification (Art. 16 GDPR)</li>
            <li>Right to erasure (Art. 17 GDPR)</li>
            <li>Right to restriction of processing (Art. 18 GDPR)</li>
            <li>Right to data portability (Art. 20 GDPR)</li>
            <li>Right to object (Art. 21 GDPR)</li>
          </ul>
          <p className="text-[16px] leading-[1.9] text-[#5E646B] mt-4">
            To exercise your rights, contact:{' '}
            <a
              href="mailto:marta@proceduresmatter.com"
              className="underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
            >
              marta@proceduresmatter.com
            </a>
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            8. Right to Lodge a Complaint
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            You have the right to lodge a complaint with a supervisory
            authority. The competent authority for Lower Saxony, Germany is:
          </p>
          <p className="text-[16px] leading-[1.9] mt-4">
            Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
            Prinzenstraße 5, 30159 Hannover, Germany<br />
            <a
              href="https://www.lfd.niedersachsen.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#5E646B] transition-colors"
            >
              www.lfd.niedersachsen.de
            </a>
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div className="border-t border-[#E5E2DC] mb-20" />

        {/* ── DEUTSCH ── */}
        <h1 className="text-[28px] font-semibold mb-2">Datenschutzerklärung</h1>
        <p className="text-sm text-[#5E646B] mb-12">Stand: März 2026</p>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            1. Verantwortliche
          </h2>
          <p className="text-[16px] leading-[1.9]">
            Marta Schmidl<br />
            Heiligenbruch 27<br />
            27339 Riede<br />
            Deutschland<br />
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
            2. Hosting
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Diese Website wird gehostet bei Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, USA. Beim Aufruf der Website werden durch den
            Hosting-Anbieter automatisch Server-Logfiles erhoben (insbesondere
            IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Datum und
            Uhrzeit des Zugriffs).
          </p>
          <p className="text-[16px] leading-[1.9] text-[#5E646B] mt-4">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            am sicheren und stabilen Betrieb der Website). Vercel ist nach dem
            EU-US Data Privacy Framework zertifiziert.{' '}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
            >
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            3. Kein Kontaktformular auf dieser Website
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Diese Website enthält kein eigenes Kontaktformular. Buchungs- und
            Kontaktanfragen werden über{' '}
            <a
              href="https://www.proceduresmatter.com"
              className="underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
            >
              proceduresmatter.com
            </a>{' '}
            abgewickelt. Informationen zur Verarbeitung von Kontakt- und
            Umfragedaten finden Sie in der{' '}
            <a
              href="https://www.proceduresmatter.com/datenschutz"
              className="underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
            >
              Datenschutzerklärung von proceduresmatter.com
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            4. Schriftarten
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Diese Website verwendet Google Fonts. Die Schriftdateien werden
            beim Build-Prozess über Next.js lokal auf dem Server gespeichert
            und von dort ausgeliefert. Es findet keine Verbindung zu
            Google-Servern statt. Es werden keine personenbezogenen Daten an
            Google übermittelt.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            5. Externe Links
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Diese Website enthält Links zu LinkedIn (LinkedIn Ireland Unlimited
            Company, Wilton Place, Dublin 2, Irland) und zu proceduresmatter.com.
            Wenn Sie diese Links anklicken, verlassen Sie unsere Website.
            Für die Datenverarbeitung auf diesen Seiten sind die jeweiligen
            Betreiber verantwortlich. Wir haben keinen Einfluss auf deren
            Datenschutzpraktiken.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            6. Cookies und Tracking
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Diese Website verwendet keine Cookies und keine Tracking- oder
            Analyse-Tools. Es werden keine personenbezogenen Daten zu
            Werbezwecken verarbeitet oder an Dritte weitergegeben.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            7. Ihre Rechte
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer
            personenbezogenen Daten:
          </p>
          <ul className="mt-4 space-y-1 text-[16px] leading-[1.9] text-[#5E646B] list-none">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
          </ul>
          <p className="text-[16px] leading-[1.9] text-[#5E646B] mt-4">
            Zur Ausübung Ihrer Rechte wenden Sie sich an:{' '}
            <a
              href="mailto:marta@proceduresmatter.com"
              className="underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
            >
              marta@proceduresmatter.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#5E646B] mb-4">
            8. Beschwerderecht
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#5E646B]">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            zu beschweren. Die zuständige Behörde für Niedersachsen ist:
          </p>
          <p className="text-[16px] leading-[1.9] mt-4">
            Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
            Prinzenstraße 5, 30159 Hannover<br />
            <a
              href="https://www.lfd.niedersachsen.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#5E646B] transition-colors"
            >
              www.lfd.niedersachsen.de
            </a>
          </p>
        </section>

      </div>
    </div>
  )
}
