type MarqueeProps = {
  items: string[]
  className?: string
  reverse?: boolean
}

export function Marquee({ items, className = '', reverse }: MarqueeProps) {
  const track = [...items, ...items]

  return (
    <div
      className={`overflow-hidden border-y-[3px] border-ink bg-lime py-3 ${className}`}
      aria-hidden
    >
      <div
        className={`flex w-max animate-marquee gap-8 ${reverse ? '[animation-direction:reverse]' : ''}`}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-lg uppercase tracking-wide text-ink sm:text-xl"
          >
            {item}
            <span className="mx-4 text-accent">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}
