import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../hooks/useSEO'
import { Reveal } from '../components/Reveal'

export function AGB() {
  const { t } = useTranslation()

  useSEO({
    title: t('seo.agb.title'),
    description: t('seo.agb.description'),
    path: '/agb',
  })

  return (
    <section className="legal">
      <Link to="/" className="legal-back">
        {t('legal.back')}
      </Link>

      <h1>Allgemeine Geschäftsbedingungen</h1>
      <p className="legal-subtitle">Deuy Digital UG (haftungsbeschränkt)</p>

      <Reveal>
        <h2>§ 1 Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen („AGB") gelten für alle Verträge über die Erbringung digitaler
          Dienstleistungen (u. a. Konzeption, Design und Entwicklung digitaler Produkte, Webanwendungen und Websites
          sowie damit verbundene Beratungsleistungen) zwischen der Deuy Digital UG (haftungsbeschränkt) (nachfolgend
          „wir" oder „uns") und ihren Auftraggebern (nachfolgend „Kunde").
        </p>
        <p>
          Der Dienst richtet sich in erster Linie an Unternehmer (B2B) im Sinne des § 14 BGB. Abweichende Bedingungen
          des Kunden finden keine Anwendung, es sei denn, wir stimmen ihrer Geltung ausdrücklich schriftlich zu.
        </p>
      </Reveal>

      <Reveal>
        <h2>§ 2 Vertragsschluss und Leistungsangebot</h2>
        <p>
          Die auf unserer Website dargestellten Inhalte stellen kein bindendes Angebot dar, sondern eine unverbindliche
          Einladung zur Kontaktaufnahme. Ein Vertrag kommt erst durch ein individuelles Angebot unsererseits und
          dessen Annahme durch den Kunden in Textform zustande.
        </p>
        <p>
          Der genaue Leistungsumfang, die Vergütung sowie Liefer- und Zahlungstermine werden für jedes Projekt
          gesondert in einem individuellen Angebot bzw. Projektvertrag vereinbart.
        </p>
      </Reveal>

      <Reveal>
        <h2>§ 3 Mitwirkungspflichten des Kunden</h2>
        <p>
          Der Kunde ist verpflichtet, uns rechtzeitig alle für die Leistungserbringung erforderlichen Informationen,
          Materialien und Zugänge zur Verfügung zu stellen und vereinbarte Mitwirkungshandlungen (z. B. Freigaben,
          Feedback) fristgerecht vorzunehmen. Verzögerungen, die auf einer verspäteten Mitwirkung des Kunden beruhen,
          berechtigen uns zur entsprechenden Anpassung vereinbarter Termine.
        </p>
      </Reveal>

      <Reveal>
        <h2>§ 4 Vergütung und Zahlungsbedingungen</h2>
        <p>
          Die Vergütung richtet sich nach dem im Einzelfall vereinbarten Angebot. Sofern nichts anderes vereinbart
          ist, sind Rechnungen innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.
        </p>
        <p>Bei Zahlungsverzug gelten die gesetzlichen Regelungen (§§ 286 ff. BGB).</p>
      </Reveal>

      <Reveal>
        <h2>§ 5 Nutzungs- und Verwertungsrechte</h2>
        <p>
          Mit vollständiger Bezahlung der vereinbarten Vergütung räumen wir dem Kunden die für den vertraglich
          vorgesehenen Zweck erforderlichen Nutzungsrechte an den erstellten Arbeitsergebnissen ein. Rechte Dritter
          (z. B. an eingesetzten Open-Source-Komponenten, Schriften oder Bildmaterial) bleiben hiervon unberührt und
          richten sich nach den jeweiligen Lizenzbedingungen.
        </p>
        <p>Bis zur vollständigen Bezahlung verbleiben sämtliche Nutzungsrechte bei uns.</p>
      </Reveal>

      <Reveal>
        <h2>§ 6 Haftungsbeschränkung</h2>
        <p>
          Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für
          Schäden aufgrund vorsätzlicher oder grob fahrlässiger Pflichtverletzungen.
        </p>
        <p>
          Für einfache Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten)
          und begrenzt auf den vorhersehbaren, vertragstypischen Schaden.
        </p>
        <p>Die Haftung für mittelbare Schäden und Folgeschäden ist, soweit gesetzlich zulässig, ausgeschlossen.</p>
      </Reveal>

      <Reveal>
        <h2>§ 7 Anwendbares Recht und Gerichtsstand</h2>
        <p>Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).</p>
        <p>
          Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches
          Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit
          diesem Vertrag der Sitz unseres Unternehmens (Heilbronn).
        </p>
      </Reveal>

      <Reveal>
        <h2>§ 8 Streitbeilegung</h2>
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Reveal>

      <Reveal>
        <h2>§ 9 Änderungen dieser AGB</h2>
        <p>
          Wir behalten uns vor, diese AGB mit Wirkung für die Zukunft zu ändern. Für bereits laufende Projekte gelten
          die AGB in der bei Vertragsschluss gültigen Fassung, sofern nicht ausdrücklich etwas anderes vereinbart wird.
        </p>
      </Reveal>

      <p className="legal-date">Stand: August 2026</p>
    </section>
  )
}

export default AGB
