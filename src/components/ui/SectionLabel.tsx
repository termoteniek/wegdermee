type SectionLabelProps = {
  children: string
  light?: boolean
}

export function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 font-display text-sm font-semibold ${
        light ? 'text-white' : 'text-ink'
      }`}
    >
      <span className="h-px w-8 shrink-0 bg-accent" aria-hidden />
      {children}
    </p>
  )
}
