type SectionLabelProps = {
  children: string
  light?: boolean
  index?: string
}

export function SectionLabel({ children, light, index }: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] ${
        light ? 'text-punch' : 'text-muted'
      }`}
    >
      {index && (
        <span
          className={`flex h-8 w-8 items-center justify-center border-[3px] font-bold ${
            light
              ? 'border-punch bg-punch text-ink'
              : 'border-ink bg-ink text-paper'
          }`}
        >
          {index}
        </span>
      )}
      {children}
    </p>
  )
}
