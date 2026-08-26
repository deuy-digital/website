import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../hooks/useSEO'
import { Reveal } from '../components/Reveal'

export function Datenschutz() {
  const { t } = useTranslation()

  useSEO({
    title: t('seo.datenschutz.title'),
    description: t('seo.datenschutz.description'),
    path: '/datenschutz',
  })

  return (
    <section className="legal">
      <Link to="/" className="legal-back">
        {t('legal.back')}
      </Link>

      <h1>Datenschutzerklärung</h1>
      <p className="legal-subtitle">Gemäß Art. 13 DSGVO (EU) 2016/679</p>

      <Reveal>
        <h2>1. Verantwortlicher</h2>
        <p>
          Deuy Digital UG (haftungsbeschränkt)
          <br />
          Im Wannental 23, 74074 Heilbronn
          <br />
          E-Mail: info@deuy.digital
        </p>
      </Reveal>

      <Reveal>
        <h2>2. Datenschutzbeauftragter</h2>
        <p>
          Ein Datenschutzbeauftragter ist derzeit nicht benannt. Bei datenschutzrechtlichen Fragen wenden Sie sich
          bitte direkt an: info@deuy.digital.
        </p>
      </Reveal>

      <Reveal>
        <h2>3. Verarbeitete Daten und Zwecke</h2>

        <h3>3.1 Server-Logs (Hosting)</h3>
        <p>Daten: IP-Adresse, Zeitstempel, aufgerufene URL, HTTP-Statuscode, Referrer, User-Agent.</p>
        <p>Zweck: Technische Bereitstellung und Sicherheit der Website.</p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse am sicheren und stabilen Betrieb der Website.</p>
        <p>Speicherdauer: Gemäß den Angaben unseres Hosting-Anbieters (siehe Abschnitt 4).</p>

        <h3>3.2 Kontaktaufnahme per E-Mail</h3>
        <p>Daten: E-Mail-Adresse, Name (sofern angegeben), Inhalt Ihrer Nachricht.</p>
        <p>Zweck: Bearbeitung Ihrer Anfrage.</p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>
        <p>Speicherdauer: Bis zur Erledigung Ihrer Anfrage, danach Löschung, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

        <h3>3.3 Lokale Speicherung im Browser</h3>
        <p>Daten: Ihre gewählte Design-Einstellung (hell/dunkel/System) und Spracheinstellung (Deutsch/Englisch).</p>
        <p>Zweck: Speicherung Ihrer Präferenzen für zukünftige Besuche.</p>
        <p>
          Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TTDSG — unbedingt erforderlich, um einen von Ihnen ausdrücklich
          gewünschten Dienst (Beibehaltung Ihrer Einstellungen) bereitzustellen; eine Einwilligung ist hierfür nicht
          erforderlich.
        </p>
        <p>Speicherdauer: Bis Sie die Daten in Ihrem Browser löschen.</p>
        <p>Diese Website setzt keine Cookies und keine Analyse- oder Marketing-Tools ein.</p>
      </Reveal>

      <Reveal>
        <h2>4. Empfänger und Drittlandtransfers</h2>
        <p>
          <strong>Hosting:</strong> GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. St, San Francisco, CA 94107,
          USA; Tochterunternehmen der Microsoft Corporation). Da GitHub Inc. in den USA ansässig ist, kann es beim
          Hosting zu einer Übermittlung personenbezogener Daten (insb. IP-Adresse) in ein Drittland außerhalb der
          EU/des EWR kommen. GitHub ist nach dem EU-U.S. Data Privacy Framework (DPF) zertifiziert; ergänzend werden
          die Standardvertragsklauseln der EU-Kommission (Durchführungsbeschluss (EU) 2021/914) zugrunde gelegt, um
          ein angemessenes Datenschutzniveau sicherzustellen.
        </p>
        <p>
          <strong>E-Mail:</strong> Der Empfang und die Verwaltung von E-Mails an info@deuy.digital erfolgt über
          Proton Mail (Proton AG, Route de la Galaise 32, 1228 Plan-les-Ouates, Schweiz). Die Schweiz verfügt über
          einen Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO), sodass hierfür kein zusätzlicher
          Drittlandtransfer-Mechanismus erforderlich ist.
        </p>
      </Reveal>

      <Reveal>
        <h2>5. Ihre Rechte</h2>
        <p>Sie haben nach der DSGVO folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
        <ul>
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>Zur Ausübung Ihrer Rechte wenden Sie sich an: info@deuy.digital.</p>
      </Reveal>

      <Reveal>
        <h2>6. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.</p>
        <p>
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg
          <br />
          Postfach 10 29 32, 70025 Stuttgart
          <br />
          E-Mail: poststelle@lfdi.bwl.de
        </p>
      </Reveal>

      <Reveal>
        <h2>7. Pflicht zur Datenbereitstellung</h2>
        <p>
          Die Angabe personenbezogener Daten bei der Kontaktaufnahme erfolgt freiwillig. Ohne Ihre E-Mail-Adresse
          können wir Ihre Anfrage jedoch nicht beantworten.
        </p>
      </Reveal>

      <Reveal>
        <h2>8. Automatisierte Entscheidungsfindung</h2>
        <p>Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO statt.</p>
      </Reveal>

      <Reveal>
        <h2>9. Cookies und Tracking</h2>
        <p>
          Diese Website verwendet keine Cookies und keine Tracking- oder Analyse-Tools. Es werden ausschließlich die
          in Abschnitt 3.3 genannten, technisch notwendigen Browserspeicher-Funktionen verwendet (§ 25 TTDSG).
        </p>
      </Reveal>

      <p className="legal-date">Stand: August 2026</p>
    </section>
  )
}

export default Datenschutz
