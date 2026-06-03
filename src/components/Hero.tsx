import { motion } from 'framer-motion'
import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative border-b border-line bg-paper">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,39,68,0.03)_0%,transparent_50%)]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-28 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-2 lg:gap-16 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Inboedels & rommelophaal
          </p>

          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.15] text-navy sm:text-5xl lg:text-[3.25rem]">
            Professionele ophaaldienst voor inboedels en rommel
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Meubels, elektronica en volledige ontruimingen — wij verzorgen ophaling,
            transport en correcte afvoer. U hoeft niet te sorteren; wij regelen het
            volledige traject.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact">Afspraak aanvragen</Button>
            <Button href="#diensten" variant="outline">
              Onze diensten
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-8 text-sm text-muted">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Gelicenseerd & verzekerd
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Particulier & zakelijk
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Limburg, Antwerpen & Vlaams-Brabant
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="overflow-hidden rounded-sm border border-line-strong shadow-[0_24px_48px_-12px_rgba(15,39,68,0.12)]">
            <img
              src="/camionette.png"
              alt="wegdermee bestelwagen"
              className="aspect-[4/3] w-full object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-5 left-6 border border-line bg-paper px-5 py-4 shadow-sm sm:left-8">
            <img src="/logo.png" alt="wegdermee" className="h-10 w-auto sm:h-11" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
