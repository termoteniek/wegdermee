import { useState } from 'react'
import { FadeIn } from './FadeIn'
import { SectionLabel } from './ui/SectionLabel'

type BeforeAfterImageProps = {
  src: string
  label: string
}

function BeforeAfterImage({ src, label }: BeforeAfterImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center border-2 border-ink bg-cream-dark">
        <span className="font-display text-xl font-bold uppercase tracking-widest text-muted">
          {label}
        </span>
      </div>
    )
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden border-2 border-ink">
      <img
        src={src}
        alt={label}
        className="size-full object-cover"
        onError={() => setFailed(true)}
      />
      <span className="absolute left-3 top-3 bg-ink px-3 py-1 font-display text-xs font-bold uppercase tracking-widest text-cream">
        {label}
      </span>
    </div>
  )
}

type ServiceBeforeAfterProps = {
  pairs: { before: string; after: string; caption?: string }[]
}

export function ServiceBeforeAfter({ pairs }: ServiceBeforeAfterProps) {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionLabel>Voor & na</SectionLabel>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-5xl">
            Het verschil spreekt voor zich
          </h2>
        </FadeIn>

        <ul className="mt-12 space-y-12">
          {pairs.map((pair, index) => (
            <FadeIn key={pair.caption ?? index} delay={index * 0.06}>
              <li>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <BeforeAfterImage src={pair.before} label="Voor" />
                  <BeforeAfterImage src={pair.after} label="Na" />
                </div>
                {pair.caption && (
                  <p className="mt-4 font-display text-sm font-semibold uppercase tracking-widest text-muted">
                    {pair.caption}
                  </p>
                )}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
