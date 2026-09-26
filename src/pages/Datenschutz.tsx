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
          Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG — unbedingt erforderlich, um einen von Ihnen ausdrücklich
          gewünschten Dienst (Beibehaltung Ihrer Einstellungen) bereitzustellen; eine Einwilligung ist hierfür nicht
          erforderlich. Dasselbe gilt für die Speicherung Ihrer Cookie-Auswahl (Schlüssel <code>deuy_consent</code>,
          inkl. Zeitpunkt der Entscheidung als Nachweis nach Art. 7 Abs. 1 DSGVO).
        </p>
        <p>Speicherdauer: Bis Sie die Daten in Ihrem Browser löschen.</p>

        <h3>3.4 Webanalyse mit Google Analytics 4 (nur mit Einwilligung)</h3>
        <p>
          Auf dieser Website setzen wir — ausschließlich nach Ihrer ausdrücklichen Einwilligung über unser
          Cookie-Banner — Google Analytics 4 ein, einen Webanalysedienst der Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Irland („Google“). Ohne Einwilligung wird das Google-Analytics-Skript nicht
          geladen, es werden keine Cookies gesetzt und keine Daten an Google übermittelt.
        </p>
        <p>
          Daten: Pseudonyme Online-Kennung (Client-ID im Cookie), aufgerufene Seiten und Verweildauer, Referrer
          (Herkunftsseite), ungefährer Standort (Land/Region, aus der IP-Adresse abgeleitet), Gerätetyp,
          Betriebssystem, Browser, Bildschirmauflösung, Spracheinstellung, Datum und Uhrzeit des Zugriffs. Google
          Analytics 4 speichert keine vollständigen IP-Adressen; IP-Adressen von Nutzern aus der EU werden auf
          EU-Servern verarbeitet und nur zur Standortbestimmung verwendet, danach verworfen.
        </p>
        <p>
          Zweck: Erstellung pseudonymisierter Statistiken über die Nutzung unserer Website (z. B. Reichweite,
          beliebte Seiten, Herkunft der Besucher), um unser Angebot zu verbessern. Google Signals,
          geräteübergreifendes Tracking, Remarketing und die Personalisierung von Werbung sind deaktiviert.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO — Einwilligung; § 25 Abs. 1 TDDDG für das Setzen und
          Auslesen von Cookies auf Ihrem Endgerät.
        </p>
        <p>
          Cookies: <code>_ga</code> (Unterscheidung von Besuchern, Laufzeit 2 Jahre), <code>_ga_&lt;ID&gt;</code>{' '}
          (Sitzungsstatus, Laufzeit 2 Jahre).
        </p>
        <p>
          Auftragsverarbeitung: Mit Google besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO (Google Ads
          Data Processing Terms).
        </p>
        <p>
          Speicherdauer: Nutzer- und ereignisbezogene Daten werden in Google Analytics nach 2 Monaten automatisch
          gelöscht. Aggregierte, nicht personenbezogene Berichte bleiben davon unberührt.
        </p>
        <p>
          Widerruf: Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft über die{' '}
          <Link to="/cookie-einstellungen">Cookie-Einstellungen</Link> widerrufen (Link auch im Fußbereich jeder
          Seite). Beim Widerruf wird die Datenerhebung sofort beendet und die Analyse-Cookies werden gelöscht. Die
          Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt (Art. 7 Abs. 3 DSGVO).
          Alternativ können Sie Cookies in Ihrem Browser blockieren oder das Browser-Add-on von Google installieren:{' '}
          <a href="https://tools.google.com/dlpage/gaoptout?hl=de" rel="noopener noreferrer">
            https://tools.google.com/dlpage/gaoptout?hl=de
          </a>
          . Weitere Informationen:{' '}
          <a href="https://policies.google.com/privacy?hl=de" rel="noopener noreferrer">
            https://policies.google.com/privacy?hl=de
          </a>
          .
        </p>
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
        <p>
          <strong>Webanalyse (nur mit Einwilligung):</strong> Google Ireland Limited (Dublin, Irland), siehe
          Abschnitt 3.4. Eine Übermittlung an die Google LLC (USA) kann nicht ausgeschlossen werden. Die Google LLC
          ist nach dem EU-U.S. Data Privacy Framework zertifiziert; die Übermittlung erfolgt damit auf Grundlage des
          Angemessenheitsbeschlusses der EU-Kommission vom 10. Juli 2023 (Art. 45 DSGVO). Ergänzend hat Google
          EU-Standardvertragsklauseln abgeschlossen (Art. 46 Abs. 2 lit. c DSGVO).
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
          <li>
            Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO) — für Google
            Analytics jederzeit über die <Link to="/cookie-einstellungen">Cookie-Einstellungen</Link>
          </li>
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
        <h2>9. Cookies und Tracking (§ 25 TDDDG)</h2>
        <p>
          Technisch notwendig (ohne Einwilligung): die in Abschnitt 3.3 genannten Browserspeicher-Einträge für
          Sprache, Design und Ihre Cookie-Auswahl (§ 25 Abs. 2 Nr. 2 TDDDG).
        </p>
        <p>
          Analyse (nur mit Einwilligung): Google Analytics 4, siehe Abschnitt 3.4. Vor Ihrer ausdrücklichen
          Einwilligung werden keine Tracking- oder Analyse-Skripte geladen und keine entsprechenden Cookies gesetzt.
          „Ablehnen“ ist im Banner genauso einfach möglich wie „Akzeptieren“. Ihre Einwilligung können Sie jederzeit
          über die <Link to="/cookie-einstellungen">Cookie-Einstellungen</Link> erteilen oder widerrufen; der Link
          befindet sich im Fußbereich jeder Seite.
        </p>
      </Reveal>

      <p className="legal-date">Stand: September 2026</p>
    </section>
  )
}

export default Datenschutz
