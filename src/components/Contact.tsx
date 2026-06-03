import { FadeIn } from './FadeIn'
import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { SectionLabel } from './ui/SectionLabel'

const inputClass =
  'mt-2 w-full rounded-sm border border-line bg-paper px-3 py-2.5 text-ink outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/30'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-navy py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <SectionLabel light>Contact</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Neem contact met ons op
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/70">
              Vraag, offerte of direct een ophaling — wij antwoorden zo spoedig mogelijk
              op werkdagen.
            </p>

            <ul className="mt-12 space-y-8">
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                  E-mail
                </p>
                <a
                  href="mailto:info@wegdermee.be"
                  className="mt-1 block text-xl font-semibold transition-colors hover:text-white/90 sm:text-2xl"
                >
                  info@wegdermee.be
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                  Telefoon
                </p>
                <a
                  href="tel:+32400000000"
                  className="mt-1 block text-xl font-semibold transition-colors hover:text-white/90 sm:text-2xl"
                >
                  +32 400 00 00 00
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.08}>
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-sm border border-white/15 bg-paper p-8 text-ink shadow-lg sm:p-10"
              initial={false}
            >
              {sent ? (
                <motion.div
                  className="flex min-h-[280px] flex-col items-center justify-center text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-xl text-white">
                    ✓
                  </span>
                  <p className="mt-5 text-xl font-semibold text-navy">
                    Bericht verzonden
                  </p>
                  <p className="mt-2 text-muted">
                    Wij nemen zo spoedig mogelijk contact met u op.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        Naam *
                      </span>
                      <input type="text" name="name" required className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        E-mail *
                      </span>
                      <input type="email" name="email" required className={inputClass} />
                    </label>
                  </div>
                  <label className="mt-6 block">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Bericht *
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Beschrijf kort wat er moet worden opgehaald en waar."
                      className={`${inputClass} resize-y`}
                    />
                  </label>
                  <input type="checkbox" name="honeypot" className="sr-only" tabIndex={-1} />
                  <button
                    type="submit"
                    className="mt-8 w-full rounded-sm bg-navy py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto sm:px-10"
                  >
                    Verzenden
                  </button>
                </>
              )}
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
