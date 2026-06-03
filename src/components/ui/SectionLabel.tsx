type SectionLabelProps = {
  children: string
  light?: boolean
}

export function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? 'text-white/55' : 'text-accent'
      }`}
    >
      {children}
    </p>
  )
}
