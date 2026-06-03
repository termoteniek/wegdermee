import { FadeIn } from './FadeIn'
import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { SectionLabel } from './ui/SectionLabel'
import { StripeBand } from './ui/StripeBand'

const inputClass =
  'mt-2 w-full border-[3px] border-ink bg-paper px-4 py-3 font-mono text-sm text-ink outline-none transition-colors placeholder:text-muted-light focus:bg-punch/20 focus:ring-0'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-ink text-paper">
      <StripeBand />

      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <SectionLabel index="05" light>
              Contact
            </SectionLabel>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-none sm:text-6xl">
              Klaar om
              <br />
              <span className="italic text-punch">op te ruimen?</span>
            </h2>
            <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-paper/60">
              Vraag, offerte of direct een ophaling — we antwoorden zo snel mogelijk.
            </p>

            <ul className="mt-12 space-y-4">
              <li>
                <a
                  href="mailto:info@wegdermee.be"
                  className="group block border-[3px] border-paper/20 bg-paper/5 p-5 transition-colors hover:border-punch hover:bg-punch/10"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-paper/40">
                    E-mail
                  </span>
                  <span className="mt-1 block font-display text-2xl font-bold group-hover:text-punch sm:text-3xl">
                    info@wegdermee.be
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+32400000000"
                  className="group block border-[3px] border-paper/20 bg-paper/5 p-5 transition-colors hover:border-punch hover:bg-punch/10"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-paper/40">
                    Tel
                  </span>
                  <span className="mt-1 block font-display text-2xl font-bold group-hover:text-punch sm:text-3xl">
                    +32 400 00 00 00
                  </span>
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              className="relative border-[3px] border-dashed border-paper/40 bg-paper p-8 text-ink shadow-[var(--shadow-brutal-lg)] sm:p-10"
              initial={false}
            >
              <div
                className="pointer-events-none absolute right-4 top-4 flex flex-col gap-1 opacity-30"
                aria-hidden
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className={`block h-8 bg-ink ${i % 3 === 0 ? 'w-1' : 'w-px'}`}
                  />
                ))}
              </div>

              <p className="mb-6 border-b-[3px] border-ink pb-4 font-mono text-xs font-bold uppercase tracking-[0.25em]">
                Ophaal-aanvraag — formulier
              </p>

              {sent ? (
                <motion.div
                  className="flex min-h-[280px] flex-col items-center justify-center text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="flex h-20 w-20 items-center justify-center border-[3px] border-ink bg-punch font-display text-4xl font-black">
                    ✓
                  </span>
                  <p className="mt-6 font-display text-3xl font-bold">Bericht verstuurd</p>
                  <p className="mt-2 font-mono text-sm text-muted">
                    We nemen zo snel mogelijk contact op.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
                        Naam *
                      </span>
                      <input type="text" name="name" required className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
                        E-mail *
                      </span>
                      <input type="email" name="email" required className={inputClass} />
                    </label>
                  </div>
                  <label className="mt-5 block">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
                      Bericht *
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Wat moet er weg, en waar?"
                      className={inputClass}
                    />
                  </label>
                  <input type="checkbox" name="honeypot" className="sr-only" tabIndex={-1} />
                  <button
                    type="submit"
                    className="mt-8 w-full border-[3px] border-ink bg-heat px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-paper shadow-[var(--shadow-brutal)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#11100e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-punch sm:w-auto"
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
