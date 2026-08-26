import { useTranslation } from 'react-i18next'
import { Logo } from '../components/Logo'
import { useSEO } from '../hooks/useSEO'
import { useReveal } from '../hooks/useReveal'

const EMAIL = 'info@deuy.digital'

export function Home() {
  const { t } = useTranslation()
  const { ref: contactRef, isVisible: contactVisible } = useReveal<HTMLElement>()

  useSEO({
    title: t('seo.home.title'),
    description: t('seo.home.description'),
    path: '/',
  })

  return (
    <>
      <section className="hero">
        <Logo className="hero-logo" />
        <h1 className="tagline">{t('hero.tagline')}</h1>
        <p className="subtitle">{t('hero.subtitle')}</p>
        <a className="cta" href={`mailto:${EMAIL}`}>
          {t('hero.cta')}
        </a>
      </section>

      <section ref={contactRef} className={`contact${contactVisible ? ' is-visible' : ''}`} id="contact">
        <h2>{t('contact.heading')}</h2>
        <p>{t('contact.body')}</p>
        <a className="email-link" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </section>
    </>
  )
}

export default Home
