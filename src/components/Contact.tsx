import { FadeIn } from './FadeIn'
import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { SectionLabel } from './ui/SectionLabel'
import { Sticker } from './ui/Sticker'

const inputClass =
  'mt-2 w-full border-[3px] border-ink bg-paper px-4 py-3 font-medium text-ink outline-none transition-shadow placeholder:text-muted-light focus:shadow-[4px_4px_0_0_#ccff00]'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <SectionLabel variant="lime">Contact</SectionLabel>
            <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
              Klaar om{' '}
              <span className="text-lime">op te ruimen?</span>
            </h2>
            <p className="mt-5 max-w-md text-lg font-medium text-white/70">
              Vraag, offerte of direct een ophaling — stuur een bericht, we pingen
              snel terug.
            </p>

            <ul className="mt-12 space-y-8">
              <li>
                <a
                  href="mailto:info@wegdermee.be"
                  className="group block transition-transform hover:translate-x-2"
                >
                  <span className="font-display text-xs uppercase tracking-widest text-white/40">
                    E-mail
                  </span>
                  <span className="mt-1 block font-display text-2xl uppercase text-lime transition-colors group-hover:text-accent sm:text-3xl">
                    info@wegdermee.be
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+32400000000"
                  className="group block transition-transform hover:translate-x-2"
                >
                  <span className="font-display text-xs uppercase tracking-widest text-white/40">
                    Tel
                  </span>
                  <span className="mt-1 block font-display text-2xl uppercase text-lime transition-colors group-hover:text-accent sm:text-3xl">
                    +32 400 00 00 00
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <Sticker variant="cyan" rotate={-4}>
                Geen wachtlijst-drama
              </Sticker>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              className="border-[4px] border-lime bg-paper p-8 text-ink shadow-[10px_10px_0_0_#ccff00] sm:p-10"
              initial={false}
              whileHover={{ rotate: 0.5 }}
            >
              {sent ? (
                <motion.div
                  className="flex min-h-[280px] flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                >
                  <span className="font-display text-7xl text-accent">YEAH!</span>
                  <p className="mt-4 font-display text-2xl uppercase">
                    Bericht is binnen
                  </p>
                  <p className="mt-2 font-medium text-muted">
                    We bellen/mailen je zo snel mogelijk terug.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="font-display text-xs uppercase tracking-widest text-muted">
                        Naam *
                      </span>
                      <input type="text" name="name" required className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="font-display text-xs uppercase tracking-widest text-muted">
                        E-mail *
                      </span>
                      <input type="email" name="email" required className={inputClass} />
                    </label>
                  </div>
                  <label className="mt-6 block">
                    <span className="font-display text-xs uppercase tracking-widest text-muted">
                      Bericht *
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Wat moet weg? Waar? Hoe snel?"
                      className={`${inputClass} resize-y`}
                    />
                  </label>
                  <input type="checkbox" name="honeypot" className="sr-only" tabIndex={-1} />
                  <button
                    type="submit"
                    className="mt-8 w-full border-[3px] border-ink bg-accent py-4 font-display text-lg uppercase text-white shadow-[6px_6px_0_0_#0a0a0a] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-accent-hover hover:shadow-[3px_3px_0_0_#0a0a0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime sm:w-auto sm:px-12"
                  >
                    Verstuur →
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
