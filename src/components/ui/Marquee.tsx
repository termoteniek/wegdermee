type MarqueeProps = {
  items: string[]
  className?: string
  speed?: 'slow' | 'normal' | 'fast'
}

const speeds = {
  slow: '40s',
  normal: '28s',
  fast: '18s',
}

export function Marquee({ items, className = '', speed = 'normal' }: MarqueeProps) {
  const track = [...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden>
      <div
        className="animate-marquee flex w-max gap-0"
        style={{ animationDuration: speeds[speed] }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 px-6 font-mono text-sm font-semibold uppercase tracking-[0.2em] sm:text-base"
          >
            {item}
            <span className="text-punch" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
