type SectionLabelProps = {
  children: string
  light?: boolean
}

export function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <p
      className={`font-display text-sm font-semibold uppercase tracking-[0.25em] ${
        light ? 'text-accent' : 'text-accent'
      }`}
    >
      {children}
    </p>
  )
}
