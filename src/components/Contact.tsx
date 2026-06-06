import { FadeIn } from './FadeIn'
import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { SectionLabel } from './ui/SectionLabel'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="flex flex-1 flex-col bg-ink py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <SectionLabel light>Contact</SectionLabel>
            <h2 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl">
              Klaar om op te ruimen?
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/60">
              Vraag, offerte of direct een ophaling boeking — we antwoorden zo snel mogelijk.
            </p>

            <ul className="mt-12 space-y-6">
              <li>
                <a
                  href="mailto:info@wegdermee.be"
                  className="group flex items-baseline gap-4 transition-colors hover:text-accent"
                >
                  <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                    E-mail
                  </span>
                  <span className="font-display text-2xl font-bold uppercase sm:text-3xl">
                    info@wegdermee.be
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+32400000000"
                  className="group flex items-baseline gap-4 transition-colors hover:text-accent"
                >
                  <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                    Tel
                  </span>
                  <span className="font-display text-2xl font-bold uppercase sm:text-3xl">
                    +32 400 00 00 00
                  </span>
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              className="border-2 border-white/15 bg-cream p-8 text-ink sm:p-10"
              initial={false}
            >
              {sent ? (
                <motion.div
                  className="flex min-h-[280px] flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <span className="font-display text-6xl font-extrabold text-accent">✓</span>
                  <p className="mt-4 font-display text-2xl font-bold uppercase">
                    Bericht verstuurd
                  </p>
                  <p className="mt-2 text-muted">We nemen zo snel mogelijk contact op.</p>
                </motion.div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="font-display text-xs font-semibold uppercase tracking-widest text-muted">
                        Naam *
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        className="mt-2 w-full border-b-2 border-ink bg-transparent py-2 text-ink outline-none focus:border-accent"
                      />
                    </label>
                    <label className="block">
                      <span className="font-display text-xs font-semibold uppercase tracking-widest text-muted">
                        E-mail *
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-2 w-full border-b-2 border-ink bg-transparent py-2 text-ink outline-none focus:border-accent"
                      />
                    </label>
                  </div>
                  <label className="mt-6 block">
                    <span className="font-display text-xs font-semibold uppercase tracking-widest text-muted">
                      Bericht *
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Wat moet er weg, en waar?"
                      className="mt-2 w-full resize-y border-b-2 border-ink bg-transparent py-2 text-ink outline-none placeholder:text-muted-light focus:border-accent"
                    />
                  </label>
                  <input type="checkbox" name="honeypot" className="sr-only" tabIndex={-1} />
                  <button
                    type="submit"
                    className="mt-8 w-full bg-accent py-4 font-display text-lg font-bold uppercase tracking-wide text-white transition-all hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto sm:px-12"
                  >
                    Verstuur
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
