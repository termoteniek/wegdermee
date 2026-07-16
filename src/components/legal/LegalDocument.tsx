import type { ReactNode } from 'react'
import { SectionLabel } from '../ui/SectionLabel'

type LegalDocumentProps = {
  title: string
  updated: string
  children: ReactNode
}

export function LegalDocument({ title, updated, children }: LegalDocumentProps) {
  return (
    <article className="flex flex-1 flex-col border-t-2 border-ink bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionLabel>Juridisch</SectionLabel>
        <h1 className="mt-3 font-display text-4xl font-extrabold leading-none tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-muted">Laatst bijgewerkt: {updated}</p>
        <div className="mt-12 space-y-10">{children}</div>
      </div>
    </article>
  )
}

type LegalSectionProps = {
  title: string
  children: ReactNode
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
